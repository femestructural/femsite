import fs from 'fs';
import ndjson from 'ndjson';
import crypto from 'crypto';

// Nombres de los archivos
const INPUT_FILE = './data.ndjson'; // Tu exportación de Sanity original
const OUTPUT_FILE = './data-migrated.ndjson';

console.log('Iniciando migración inteligente...');

const readStream = fs.createReadStream(INPUT_FILE);
const writeStream = fs.createWriteStream(OUTPUT_FILE);

// Función para generar un _key único para los arreglos de Sanity
const generateKey = () => crypto.randomBytes(4).toString('hex');

readStream
  .pipe(ndjson.parse())
  .on('data', (doc) => {
    // Solo aplicamos la migración a los documentos de tipo 'project'
    if (doc._type === 'project') {
      
      // 1. MIGRACIÓN DE TEXTOS (description y longDescription -> story)
      doc.story = [];
      
      // Si había una descripción corta, la convertimos en el primer párrafo de la historia
      if (doc.description && (doc.description.es || doc.description.en)) {
        doc.story.push({
          _key: generateKey(),
          _type: 'paragraphBlock',
          es: doc.description.es || '',
          en: doc.description.en || ''
        });
      }
      
      // Si había una descripción larga, la convertimos en el segundo párrafo
      if (doc.longDescription && (doc.longDescription.es || doc.longDescription.en)) {
        doc.story.push({
          _key: generateKey(),
          _type: 'paragraphBlock',
          es: doc.longDescription.es || '',
          en: doc.longDescription.en || ''
        });
      }

      // 2. MIGRACIÓN DE IMÁGENES (Renombrando los campos)
      if (doc.project_cover_image) {
        doc.portfolio_image = doc.project_cover_image;
        // Usamos la de portada como fallback para 'other_projects_image' si no existe
        doc.other_projects_image = doc.project_cover_image; 
      }
      
      if (doc.project_cover_page_image) {
        doc.project_page_image = doc.project_cover_page_image;
      }

      // 3. MIGRACIÓN DEL DISEÑO (layout -> gridColumns)
      // Mapeamos tus valores antiguos a la nueva estructura de columnas
      if (doc.layout) {
        if (doc.layout === 'hero') doc.gridColumns = '1';
        else if (doc.layout === 'half') doc.gridColumns = '2';
        else if (doc.layout === 'third') doc.gridColumns = '3';
        else doc.gridColumns = '1'; // Fallback por defecto
      } else {
        doc.gridColumns = '1';
      }

      // 4. LIMPIEZA DE CAMPOS ANTIGUOS
      // Eliminamos la basura para que el nuevo esquema quede impecable
      delete doc.id; // Sanity ya usa _id
      delete doc.description;
      delete doc.longDescription;
      delete doc.project_cover_image;
      delete doc.project_cover_page_image;
      delete doc.layout;
      delete doc.Latitude;
      delete doc.Longitude;
      delete doc.information_text_header;
      delete doc.information_text_footer;
      delete doc.featured;

      // 5. ASEGURAR VALIDACIONES FALTANTES
      if (!doc.status) doc.status = 'draft';
      if (!doc.grid_variant || doc.grid_variant < 1) doc.grid_variant = 1;
    }

    // Escribimos el documento transformado en el nuevo archivo
    writeStream.write(JSON.stringify(doc) + '\n');
  })
  .on('end', () => {
    console.log('✅ ¡Migración completada con éxito!');
    console.log('Tus textos e imágenes fueron mapeados al nuevo esquema.');
    console.log('Archivo guardado como: data-migrated.ndjson');
  })
  .on('error', (err) => {
    console.error('❌ Error durante la migración:', err);
  });