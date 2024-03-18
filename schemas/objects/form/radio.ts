import {defineField} from 'sanity'

export default defineField({
    name: 'form.radio',
    title: 'Radio',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Naam',
            type: 'string'
        },
        {
            name: 'required',
            title: 'Verplicht?',
            type: 'boolean',
            initialValue: true
        },
        {
            name: 'values',
            title: 'Waarde paren',
            type: 'array',
            of: [{type: 'form.fragment.value'}],
        }
    ]
})