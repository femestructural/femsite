import { CogIcon, DocumentsIcon, CaseIcon, ImagesIcon } from '@sanity/icons'
import type { StructureBuilder, StructureResolver } from 'sanity/structure'
import pluralize from 'pluralize-esm'

/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

const DISABLED_TYPES = ['constructionGallery', 'page', 'project', 'siteVisit', 'localeString', 'assist.instruction.context', 'settings', 'person', 'post']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Panel de Control FEM')
    .items([
      // 1. SINGLETON: DIRECCIÓN DE OBRA
      S.listItem()
        .title('Dirección de Obra (Galería)')
        .id('constructionGallery')
        .icon(ImagesIcon)
        .child(
          S.document()
            .schemaType('constructionGallery')
            .documentId('constructionGallery') // ID estático para que sea único
            .title('Gestión de Galería de Obra')
        ),

      S.divider(),

      // 2. TUS PÁGINAS ESTÁNDAR
      S.listItem()
        .title('Páginas')
        .icon(DocumentsIcon)
        .child(
          S.documentTypeList('page')
            .title('Listado de Páginas')
        ),

      // 3. TUS PROYECTOS
      S.listItem()
        .title('Proyectos')
        .icon(CaseIcon)
        .child(
          S.documentTypeList('project')
            .title('Todos los Proyectos')
        ),

      // Filtro para no duplicar los tipos que ya pusimos arriba manualmente
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !DISABLED_TYPES.includes(
            listItem.getId() as string
          )
      ),
      // 4. Ajustes
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('settings').documentId('siteSettings'))
        .icon(CogIcon),
    ])