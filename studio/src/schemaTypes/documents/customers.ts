import React from 'react'
import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { UrlImagePreview } from '../objects/UrlImagePreview'

/**
 * Person schema.  Define and edit the fields for the 'person' content type.
 * Learn more: https://www.sanity.io/docs/studio/schema-types
 */

export const customer = defineType({
    name: 'customer',
    title: 'Customer',
    icon: UserIcon,
    type: 'document',
    fields: [
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'contact',
            title: 'Link contact',
            type: 'url',
            validation: (rule) => rule.uri({
                scheme: ['https'],
            })
        }),
        defineField({
            name: 'logo',
            title: 'Logo Image',
            type: 'url',
            description: 'URL of the cover image for the post',
            validation: (rule) => rule.uri({
                scheme: ['https'],
            }),
            components: {
                input: UrlImagePreview
            }
        }),

    ],
    // List preview configuration. https://www.sanity.io/docs/previews-list-views
    preview: {
        select: {
            title: 'company',
            subtitle: 'contact',
            imageUrl: 'logo',
        },
        prepare(selection) {
            const { title, subtitle, imageUrl } = selection
            return {
                title: title,
                subtitle: subtitle,
                // Si hay URL, dibujamos la imagen; si no, Sanity muestra su icono por defecto
                media: imageUrl ? React.createElement('img', { src: imageUrl, alt: title, style: { objectFit: 'cover' } }) : null
            }
        },
    },
})
