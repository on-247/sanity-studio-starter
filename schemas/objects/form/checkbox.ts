import {defineField} from 'sanity'

export default defineField({
    name: 'form.checkbox',
    title: 'Checkbox',
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
            validation: R => R.custom(
                (values: any[]) => {
                    return values?.length == 2 ? true : 'Een checkbox moet exact twee waarde paren hebben.'
                }
            )
        },
        {
            name: 'label',
            title: 'Label',
            type: 'string'
        }
    ]
})