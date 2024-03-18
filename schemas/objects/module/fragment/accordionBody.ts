import {defineField} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineField({
    name: 'module.fragment.accordionBody',
    title: 'Accordion inhoud',
    icon: BlockContentIcon,
    type: 'array',
    of: [
        {
            type: 'block',
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
            }
        }
    ]
})