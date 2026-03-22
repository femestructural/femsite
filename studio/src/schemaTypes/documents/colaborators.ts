import React from 'react'
import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { UrlImagePreview } from '../objects/UrlImagePreview' 

export const colaborator = defineType({
    name: 'colaborator',
    title: 'Colaborator',
    icon: UserIcon,
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role / Puesto',
            type: 'object',
            description: 'El cargo del integrante en ambos idiomas',
            validation: (rule) => rule.required(),
            fields: [
                defineField({ 
                    name: 'es', 
                    title: 'Español', 
                    type: 'string',
                    validation: (rule) => rule.required()
                }),
                defineField({ 
                    name: 'en', 
                    title: 'English', 
                    type: 'string',
                    validation: (rule) => rule.required()
                }),
            ]
        }),
        defineField({
            name: 'description',
            title: 'Long Description / Descripción Larga',
            type: 'object',
            description: 'Biografía o trayectoria del integrante',
            fields: [
                defineField({ name: 'es', title: 'Español', type: 'text' }),
                defineField({ name: 'en', title: 'English', type: 'text' }),
            ]
        }),
        defineField({
            name: 'quote',
            title: 'Quote / Frase (Opcional)',
            type: 'object',
            description: 'Frase destacada (ej. "No hay límites cuando...")',
            fields: [
                defineField({ name: 'es', title: 'Español', type: 'text' }),
                defineField({ name: 'en', title: 'English', type: 'text' }),
            ]
        }),
        defineField({
            name: 'photoUrl',
            title: 'Photo URL',
            type: 'url',
            description: 'URL de la foto del integrante',
            validation: (rule) => rule.uri({
                scheme: ['https'],
            }),
            components: {
                input: UrlImagePreview
            }
        }),

    ],
    // Configuración del listado visual en Sanity Studio
    preview: {
        select: {
            title: 'name',
            subtitle: 'role.es', // Muestra el puesto en español como subtítulo
            imageUrl: 'photoUrl',
        },
        prepare(selection) {
            const { title, subtitle, imageUrl } = selection
            return {
                title: title,
                subtitle: subtitle,
                // Si hay URL, dibujamos la imagen; si no, Sanity muestra el UserIcon por defecto
                media: imageUrl ? React.createElement('img', { src: imageUrl, alt: title, style: { objectFit: 'cover' } }) : null
            }
        },
    },
})
