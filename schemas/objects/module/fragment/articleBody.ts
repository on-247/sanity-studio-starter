import {defineField} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineField({
    name: 'module.fragment.articleBody',
    title: 'Artikel inhoud',
    icon: BlockContentIcon,
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
        {type: 'article.note'},
        {type: 'module.accordion'},
    ]
})