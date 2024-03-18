import {defineField} from 'sanity'

export default defineField({
    name: 'footerAbout',
    title: 'Inhoud',
    type: 'array',
    of: [
        {
            type: 'block',
            marks: {
                decorators: [
                  {
                    title: 'Italic',
                    value: 'em',
                  },
                  {
                    title: 'Strong',
                    value: 'strong',
                  },
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