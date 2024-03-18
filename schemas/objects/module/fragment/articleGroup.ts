import {defineField} from 'sanity'

export default defineField({
    name: 'module.fragment.articleGroup',
    title: 'Artikel groep',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'slug',
            title: 'Haak ID',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: (Rule) => Rule.required()
        },
        {
            name: 'body',
            title: 'Inhoud',
            type: 'module.fragment.articleBody',
            validation: (Rule) => Rule.required()
        }
    ] 
})