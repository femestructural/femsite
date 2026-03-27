import { defineField, defineType } from 'sanity'
import { ProjectsIcon } from '@sanity/icons'

export const constructionGallery = defineType({
  name: 'constructionGallery',
  title: 'Galería Dirección de Obra',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título Interno',
      type: 'string',
      initialValue: 'Galería Principal de Obra',
      readOnly: true, // Para que nadie lo cambie por accidente
      hidden: true, // Oculto porque solo es para identificar el Singleton
    }),
    defineField({
      name: 'visits',
      title: 'Fotos de Visitas en Sitio',
      type: 'array',
      of: [{ type: 'siteVisit' }], 
      description: 'Arrastra las fotos hacia arriba o abajo para cambiar el orden en la página web.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Gestor de Dirección de Obra',
      }
    }
  }
})