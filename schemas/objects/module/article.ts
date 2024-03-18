import {defineField} from 'sanity'
import {StackIcon} from '@sanity/icons'

export default defineField({
    name: 'module.article',
    title: 'Artikel module',
    icon: StackIcon,
    type: 'object',
    fields: [
        {
            name: 'groups',
            title: 'Groupen',
            type: 'array',
            of: [{type: 'module.fragment.articleGroup'}]
        }
    ],
    preview: {
        select: {
            groups: 'groups'
        },
        prepare({groups}) {
            return {
                title: 'Artikel module',
                subtitle: groups?.length ? `${groups.map(g => g.title).join(', ')}` : 'Geen secties'
            }
        }
    }
})