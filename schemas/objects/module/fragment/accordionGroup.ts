import {defineField} from 'sanity'

export default defineField({
    name: 'module.fragment.accordionGroup',
    title: 'Accordion groep',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'body',
            title: 'Inhoud',
            type: 'module.fragment.accordionBody',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'darkIcon',
            title: 'Donker icoontje?',
            type: 'boolean',
            initialValue: false
        }
    ]
})