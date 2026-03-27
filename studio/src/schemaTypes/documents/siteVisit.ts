import { defineField, defineType } from 'sanity'
import { ImagesIcon } from '@sanity/icons'
import { UrlImagePreview } from '../objects/UrlImagePreview'
import React from 'react'

export const siteVisit = defineType({
    name: 'siteVisit',
    title: 'Visita de Obra',
    type: 'object',
    icon: ImagesIcon,
    fields: [
        defineField({
            name: 'photoUrl',
            title: 'Photo URL',
            type: 'url',
            description: 'URL de la foto de Cloudinary',
            validation: (rule) => rule.uri({
                scheme: ['https'],
            }),
            components: {
                input: UrlImagePreview
            }
        }),
        defineField({
            name: 'project',
            title: 'Proyecto Relacionado',
            type: 'reference',
            to: [{ type: 'project' }],
            description: '¿A qué proyecto pertenece esta foto?',
        }),
        defineField({
            name: 'gridSpan',
            title: 'Tamaño en el Grid',
            type: 'string',
            initialValue: '1',
            options: {
                list: [
                    { title: 'Normal (1 columna)', value: '1' },
                    { title: 'Ancho (2 columnas)', value: '2' },
                    { title: 'Destacado (Cuadrado grande)', value: 'large' },
                ],
                layout: 'radio',
            },
            description: 'Controla cuánto espacio ocupa la foto en el frontend.',
        }),
        defineField({
            name: 'caption',
            title: 'Pie de foto (Opcional)',
            type: 'localeString',
        }),
    ],
    preview: {
        select: {
            // Referenciamos directamente el título del proyecto en español
            title: 'project.title.es', 
            // Corregimos aquí: usamos photoUrl en lugar de image
            photoUrl: 'photoUrl', 
        },
        prepare({ title, photoUrl }) {
            return {
                title: title || 'Sin proyecto asignado',
                subtitle: photoUrl ? 'Imagen vinculada' : 'Falta imagen',
                // Sanity permite renderizar un tag HTML simple si le pasas una URL válida
                media: photoUrl ? React.createElement('img', { src: photoUrl, alt: title }) : ImagesIcon,
            }
        },
    },
})