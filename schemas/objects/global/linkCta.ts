import {RocketIcon} from '@sanity/icons'
import {defineField} from 'sanity'
import {PAGE_REFERENCES} from '../../../constants'

export default defineField({
    name: 'linkCta',
    title: 'CTA link',
    type: 'object',
    icon: RocketIcon,
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'reference',
            title: 'Referentie',
            type: 'reference',
            weak: true,
            validation: (Rule) => Rule.required(),
            to: PAGE_REFERENCES,
        },
        {
            name: 'anchorId',
            title: 'Haak ID',
            type: 'string',
        },
    ],
    preview: {
        select: {
            reference: 'reference',
            referenceTitle: 'reference.title',
            anchorId: 'anchorId',
            title: 'title',
        },
        prepare({
            reference,
            referenceTitle,
            anchorId,
            title,
        }) {
            let subtitle = []
            if (reference) {
                subtitle.push([`→ ${referenceTitle || reference?._id}`])
            } else if (anchorId) {
                subtitle.push(`→ ${anchorId}`)
            } else {
                subtitle.push('(Nonexistent document reference)')
            }

            return {
                // media: image,
                subtitle: subtitle.join(' '),
                title,
            }
        },
    },
})