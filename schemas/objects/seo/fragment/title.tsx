import {defineField} from 'sanity'

export default defineField({
    name: 'seo.fragment.title',
    title: 'Titel',
    type: 'string',
    validation: (Rule) =>
        // TODO: translation
        Rule.max(50).warning('Longer titles may be truncated by search engines'),
})