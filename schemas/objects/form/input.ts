import {defineField} from 'sanity'

export default defineField({
    name: 'form.input',
    title: 'Input',
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
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    'text',
                    'number',
                    'email',
                    'tel',
                    'date',
                    'password'
                ]
            },
            initialValue: 'text',
        },
        {
            name: 'variant',
            title: 'Variant',
            type: 'string',
            options: {
                list: [
                    'input',
                    'textarea'
                ]
            },
            initialValue: 'input',
        },
        {
            name: 'label',
            title: 'Label',
            type: 'string'
        },
        {
            name: 'floatingLabel',
            title: 'Zwevende label?',
            type: 'boolean',
            initialValue: true
        },
        {
            name: 'min',
            title: 'Min',
            type: 'number',
            hidden: ({parent}) => parent.type !== 'number'
        },
        {
            name: 'max',
            title: 'Max',
            type: 'number',
            hidden: ({parent}) => parent.type !== 'number'
        }
    ]
})