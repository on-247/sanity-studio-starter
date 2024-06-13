import {LinkIcon} from '@sanity/icons'
import {defineField} from 'sanity'
import {PAGE_REFERENCES} from '../../../constants'

export default defineField({
    name: 'linkInternal',
    title: 'Interne link',
    icon: LinkIcon,
    type: 'object',
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
            reference: 'reference',
            referenceProductTitle: 'reference.store.title',
            referenceTitle: 'reference.title',
            title: 'title',
        },
        prepare({
            reference,
            referenceProductTitle,
            referenceTitle,
            title,
        }) {
            let subtitle = []
            if (reference) {
                subtitle.push([`→ ${referenceTitle || referenceProductTitle || reference?._id}`])
            } else {
                subtitle.push('(Nonexistent document reference)')
            }

            return {
                subtitle: subtitle.join(' '),
                title,
            }
        }
    },
})
