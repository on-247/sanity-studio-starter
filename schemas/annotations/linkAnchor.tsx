import {defineField} from 'sanity'
import {EnterRightIcon} from '@sanity/icons'

export default defineField({
    name: 'annotationLinkAnchor',
    title: 'Haak link',
    icon: EnterRightIcon,
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: R => R.required()
        },
        {
            name: 'anchorId',
            title: 'Haak ID',
            type: 'string',
        }
    ]
})