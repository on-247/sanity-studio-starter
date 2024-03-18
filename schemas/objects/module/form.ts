import {defineField} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export default defineField({
    name: 'module.form',
    title: 'Contact formulier module',
    icon: EnvelopeIcon,
    type: 'object',
    fields: [
        {
            name: 'form',
            title: 'Contact formulier',
            type: 'reference',
            to: [{type: 'form'}]
        }
    ]
})