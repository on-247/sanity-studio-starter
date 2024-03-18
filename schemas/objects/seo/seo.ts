import {defineField} from 'sanity'

export default defineField({
    name: 'seo',
    title: 'SEO',
    type: 'object',
    group: 'seo',
    description: 'Standaardinstellingen voor elke pagina',
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        {
            name: 'title',
            type: 'seo.fragment.title',
        },
        {
            name: 'description',
            type: 'seo.fragment.description',
        }
    ],
    validation: (Rule) => Rule.required(),
})