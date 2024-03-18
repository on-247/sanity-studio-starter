import {defineField} from 'sanity'

export default defineField({
    name: 'form.fragment.value',
    title: 'Waarde paar',
    type: 'object',
    fields: [
        {
            title: 'Value',
            name: 'value',
            type: 'string',
        },
        {
            title: 'Label',
            name: 'label',
            type: 'string',
        }
    ]
})