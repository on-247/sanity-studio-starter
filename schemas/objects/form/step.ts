import {defineField} from 'sanity'

export default defineField({
    name: 'form.step',
    title: 'Contact formulier stap',
    type: 'object',
    fields: [
        {
            name: 'label',
            title: 'Label',
            type: 'string'
        },
        {
            name: 'fields',
            title: 'Velden',
            type: 'array',
            of: [
                {type: 'form.checkbox'},
                {type: 'form.input'},
                {type: 'form.radio'},
            ]
        }
    ]
})