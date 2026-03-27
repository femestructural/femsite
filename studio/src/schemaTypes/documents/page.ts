import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/studio/schema-types
 */


export const localeString = defineType({
  title: 'Texto Traducible (String)',
  name: 'localeString',
  type: 'object',
  fields: [
    defineField({
      title: 'Español',
      name: 'es',
      type: 'string',
    }),
    defineField({
      title: 'Inglés',
      name: 'en',
      type: 'string',
    }),
  ],
});

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la Página',
      type: 'localeString', // Usamos nuestro helper bilingüe
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción (SEO)',
      type: 'localeString',
      description: 'Esta descripción aparecerá en los resultados de búsqueda de Google.',
    }),
    defineField({
      name: 'slug',
      title: 'Identificador (Slug)',
      type: 'slug',
      options: {
        source: 'title.es', // Genera el slug basado en el título en español
        maxLength: 96,
      },
      description: 'Debe coincidir con la ruta (ej: "nosotros", "direccion-de-obra")',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      of: [{ type: 'callToAction' }, { type: 'infoSection' }],
      options: {
        insertMenu: {
          // Configure the "Add Item" menu to display a thumbnail preview of the content type. https://www.sanity.io/docs/studio/array-type#efb1fe03459d
          views: [
            {
              name: 'grid',
              previewImageUrl: (schemaTypeName) =>
                `/static/page-builder-thumbnails/${schemaTypeName}.webp`,
            },
          ],
        },
      },
    }),
  ],
})
