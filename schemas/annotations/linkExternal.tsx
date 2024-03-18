import { defineField } from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons'

export default defineField({
    name: 'annotationLinkExternal',
    title: 'Externe link',
    icon: EarthGlobeIcon,
    type: 'object',
    fields: [
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule) => Rule.required().uri({scheme: ['http', 'https', 'mailto', 'tel']}),
        },
        // Open in a new window
        {
            name: 'targetBlank',
            title: 'Open in nieuw tabblad?',
            type: 'boolean',
            initialValue: true,
        },
    ]
})