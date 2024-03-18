import {defineField} from 'sanity'

export default defineField({
    name: 'seo.home',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'seo.fragment.title',
        },
        {
            name: 'description',
            type: 'seo.fragment.description',
        },
        {
            name: 'image',
            type: 'seo.fragment.image',
        }
    ],
    validation: (Rule) => Rule.required(),
})