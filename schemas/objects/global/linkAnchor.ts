import {defineField} from 'sanity'
import {EnterRightIcon} from '@sanity/icons'

export default defineField({
    name: 'linkAnchor',
    title: 'Haak link',
    icon: EnterRightIcon,
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'anchorId',
            title: 'Haak ID',
            type: 'string',
        },
        {
            name: 'underline',
            title: 'Onderlijnt?',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'icon',
            title: 'Icoon',
            type: 'boolean',
        },
        {
            name: 'iconTrailing',
            title: 'Icoon achterafkomend?',
            type: 'boolean',
            initialValue: false
        }
    ],
    preview: {
        select: {
            title: 'title',
            anchorId: 'url',
        },
        prepare({title, anchorId}) {
            let subtitle = []
            if (anchorId) {
                subtitle.push(`→ ${anchorId}`)
            }
            return {
                subtitle: subtitle.join(' '),
                title
            }
        },
    },
})