import {defineField} from 'sanity'
import {BlockContentIcon, CogIcon} from '@sanity/icons'

export default defineField({
    name: 'row.body',
    title: 'Rij inhoud',
    icon: BlockContentIcon,
    type: 'object',
    groups: [
        {name: 'content', title: 'Content', default: true},
        {name: 'config', title: 'Configuratie', icon: CogIcon}
    ],
    fields: [
        {
            group: 'content',
            name: 'body',
            title: 'Inhoud',
            type: 'array',
            of: [
                {
                    marks: {
                        decorators: [
                            {title: 'Italic', value: 'em'},
                            {title: 'Strong', value: 'strong'},
                        ],
                        annotations: [
                            {
                                name: 'annotationLinkInternal',
                                type: 'annotationLinkInternal',
                            },
                            {
                                name: 'annotationLinkExternal',
                                type: 'annotationLinkExternal',
                            },
                            {
                                name: 'annotationLinkAnchor',
                                type: 'annotationLinkAnchor',
                            }
                        ],
                    },
                    type: 'block',
                },
                {type: 'row.fragment.playVideo'}
            ]
        },
        {
            group: 'config',
            name: 'order',
            title: 'Volgorde',
            type: 'string',
            options: {
                list: [
                    {title: 'Links', value: 'left'},
                    {title: 'Rechts', value: 'right'},
                ]
            },
            initialValue: 'left'
        }
    ]
})