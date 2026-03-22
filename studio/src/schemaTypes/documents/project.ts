import React from 'react'
import { UrlImagePreview } from '../objects/UrlImagePreview'
import { defineType, defineField, defineArrayMember } from 'sanity'

// 1. Schema para texto localizado simple
export const localizedText = defineType({
    name: 'localizedText',
    title: 'Localized Text',
    type: 'object',
    fields: [
        defineField({ name: 'en', title: 'English', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'es', title: 'Español', type: 'string', validation: Rule => Rule.required() })
    ]
})

// 2. Schema para párrafos localizados (Control por posición)
export const localizedParagraphArray = defineType({
    name: 'localizedParagraphArray',
    title: 'Localized Paragraphs',
    type: 'array',
    description: 'Añade párrafos uno por uno. El orden determina la posición en la página.',
    of: [
        defineArrayMember({
            type: 'object',
            name: 'paragraphBlock',
            title: 'Paragraph',
            fields: [
                defineField({ name: 'en', title: 'English', type: 'text', validation: Rule => Rule.required() }),
                defineField({ name: 'es', title: 'Español', type: 'text', validation: Rule => Rule.required() })
            ],
            preview: {
                select: { title: 'es' },
                prepare({ title }) {
                    return { title: title ? `${title.substring(0, 40)}...` : 'Párrafo vacío' }
                }
            }
        })
    ]
})

// 3. Schema para el tipo de medio (Regresado a URL para Cloudinary)
export const mediaItem = defineType({
    name: 'mediaItem',
    title: 'Media Item',
    type: 'object',
    fields: [
        defineField({
            name: 'src',
            title: 'Cloudinary Image URL',
            type: 'url',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'gif',
            title: 'GIF URL',
            type: 'url',
            description: 'URL del GIF si está disponible'
        }),
        defineField({
            name: 'mp4',
            title: 'MP4/M3U8 URL',
            type: 'url',
            description: 'URL del video si está disponible'
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'number',
            validation: Rule => Rule.required().min(1)
        })
    ],
    preview: {
        select: {
            title: 'alt',
            position: 'position',
            imageUrl: 'src' // Tomamos la URL de Cloudinary
        },
        prepare({ title, position, imageUrl }) {
            return {
                title: `${position}. ${title}`,
                // Renderizamos un componente React nativo para la previsualización
                media: imageUrl ? React.createElement('img', { src: imageUrl, alt: title, style: { objectFit: 'cover' } }) : null
            }
        }
    }
})


// 4. Schema principal del proyecto
export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'localizedText',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title.es',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'story',
            title: 'Project Story / Description',
            type: 'localizedParagraphArray',
            description: 'Párrafos del proyecto. Accede a ellos en el frontend mediante array position ([0], [1], etc.)'
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'localizedText',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'localizedText',
        }),
        defineField({
            name: 'area',
            title: 'Area',
            type: 'string',
            description: 'Área del proyecto (ej: "25,000 m²")'
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
            description: 'Año del proyecto'
        }),
        defineField({
            name: 'gridColumns',
            title: 'Grid Columns',
            type: 'string',
            options: {
                list: [
                    { title: '1 Column', value: '1' },
                    { title: '2 Columns', value: '2' },
                    { title: '3 Columns', value: '3' },
                ],
                layout: 'radio'
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'grid_variant',
            title: 'Grid Variant',
            type: 'number',
            validation: Rule => Rule.required().min(1),
            description: 'Variante de grid para la visualización'
        }),
        defineField({
            name: 'ogImage',
            title: 'Imagen SEO (URL de Cloudinary)',
            type: 'url',
            description: 'Opcional. Si lo dejas vacío, se usará la ogImage de Home',
            components: {
                input: UrlImagePreview
            }
        }),
        defineField({
            name: 'portfolio_image',
            title: 'Portfolio Cover Image URL',
            type: 'url',
            validation: Rule => Rule.required(),
            components: {
                input: UrlImagePreview
            }
        }),
        defineField({
            name: 'other_projects_image',
            title: 'Other Projects Thumbnail URL',
            type: 'url',
            validation: Rule => Rule.required(),
            components: {
                input: UrlImagePreview
            }
        }),
        defineField({
            name: 'project_page_image',
            title: 'Project Page Hero Image URL',
            type: 'url',
            validation: Rule => Rule.required(),
            components: {
                input: UrlImagePreview
            }
        }),

        defineField({
            name: 'information_media',
            title: 'Information Media',
            type: 'array',
            of: [{ type: 'mediaItem' }],
        }),
        defineField({
            name: 'gallery_media',
            title: 'Gallery Media',
            type: 'array',
            of: [{ type: 'mediaItem' }],
            validation: Rule => Rule.required().min(1)
        }),
        defineField({
            name: 'model3d_url',
            title: '3D Model URL',
            type: 'url',
            description: 'URL del modelo 3D (.glb file)'
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Draft', value: 'draft' },
                    { title: 'Published', value: 'published' },
                    { title: 'Archived', value: 'archived' }
                ],
                layout: 'radio'
            },
            initialValue: 'draft',
            validation: Rule => Rule.required()
        })
    ],
    // Actualizamos el preview para renderizar la imagen de Cloudinary
    preview: {
        select: {
            title: 'title.es',
            subtitle: 'category.es',
            imageUrl: 'portfolio_image',
        },
        prepare(selection) {
            const { title, subtitle, imageUrl } = selection

            // 1. Optimización: Transformamos la URL pesada en un thumbnail miniatura
            let thumbnailUrl = imageUrl

            if (imageUrl && imageUrl.includes('cloudinary.com')) {
                // Le decimos a Cloudinary: "Dame esta misma imagen, pero recortada a 100x100px y súper comprimida"
                thumbnailUrl = imageUrl.replace(
                    '/upload/',
                    '/upload/w_100,h_100,c_fill,q_auto,f_auto/'
                )
            }

            return {
                title: title,
                subtitle: subtitle,
                media: thumbnailUrl
                    ? React.createElement('img', {
                        src: thumbnailUrl,
                        alt: title || 'Thumbnail',
                        style: { objectFit: 'cover', width: '100%', height: '100%' }
                    })
                    : null
            }
        }
    }
})

