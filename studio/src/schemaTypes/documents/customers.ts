import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

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
                scheme: ['http', 'https'],
            })
        }),
        defineField({
            name: 'logo',
            title: 'Logo Image',
            type: 'url',
            description: 'URL of the cover image for the post',
            validation: (rule) => rule.uri({
                scheme: ['http', 'https'],
            })
        }),

    ],
    // List preview configuration. https://www.sanity.io/docs/previews-list-views
    preview: {
        select: {
            company: 'company',
            contact: 'contact',
            logo: 'logo',
        },
        prepare(selection) {
            return {
                title: selection.company,
                contact: selection.contact,
                logo: selection.logo
            }
        },
    },
})
