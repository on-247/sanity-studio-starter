import {defineType} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export default defineType({
    name: 'form',
    title: 'Form',
    icon: EnvelopeIcon,
    type: 'document',
    groups: [
        {name: 'setup', title: 'Setup', default: true},
        {name: 'fields', title: 'Velden'},
        {name: 'comm', title: 'Communication'},
    ],
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string'
        },
        // Setup
        {
            group: 'setup',
            name: 'formDropFormId',
            title: 'FormDrop form ID',
            type: 'string',
            validation: R => R.required()
        },
        {
            group: 'setup',
            name: 'turnstileSiteKey',
            title: 'Turnstile captcha sitekey',
            type: 'string',
            validation: R => R.required()
        },
        // Velden
        {
            group: 'fields',
            name: 'fields',
            title: 'Velden',
            type: 'array',
            of: [
                {type: 'form.checkbox'},
                {type: 'form.input'},
                {type: 'form.radio'},
                {type: 'form.label'},
            ]
        },
        // Communicatie
        {
            group: 'comm',
            name: 'submitLabel',
            title: 'Button verzenden label',
            type: 'string',
        },
        {
            group: 'comm',
            name: 'loadingLabel',
            title: 'Button laden label',
            type: 'string',
        },
        {
            group: 'comm',
            name: 'successMessage',
            title: 'Success bericht',
            type: 'text',
            rows: 3,
            validation: R => R.required()
        },
        {
            group: 'comm',
            name: 'errorMessage',
            title: 'Error bericht',
            type: 'text',
            rows: 3,
            validation: R => R.required()
        }
    ],
    preview: {
        select: {title: 'title'},
        prepare: ({title}) => ({title})
    }
})