import {defineField} from 'sanity'
import {SECTION_COLORS} from '../../../constants'
import {CogIcon} from '@sanity/icons'

export default defineField({
    name: 'pageSection',
    title: 'Pagina sectie',
    type: 'object',
    groups: [
        {name: 'content', title: 'Content', default: true},
        {name: 'config', title: 'Configuratie', icon: CogIcon}
    ],
    fields: [
        // Content
        {
            group: 'content',
            name: 'title',
            title: 'Titel',
            type: 'string',
            description: 'Niet zichtbaar op de site',
            initialValue: 'Sectie'
        },
        {
            group: 'content',
            name: 'anchorId',
            title: 'Haak ID',
            type: 'string',
            description: 'Niet zichtbaar op de site, wordt gebruikt ter referentie van haak links',
            initialValue: 'Sectie'
        },
        {
            group: 'content',
            name: 'body',
            title: 'Inhoud',
            type: 'body',
            validation: R => R.required()
        },
        // Configuratie
        {
            group: 'config',
            name: 'color',
            title: 'Kleur',
            type: 'string',
            options: {
                list: SECTION_COLORS
            },
            initialValue: SECTION_COLORS[0].value,
            validation: R => R.required()
        },
        {
            group: 'config',
            name: 'paddingTop',
            title: 'Bovenruimte?',
            type: 'boolean',
            initialValue: true,
            validation: R => R.required()
        },
    ],
    // @TODO: something of body modules preview
    preview: {
        select: {
            title: 'title',
            anchorId: 'anchorId'
        },
        prepare({title, anchorId}) {
            return {
                title,
                subtitle: anchorId ? `#${anchorId}` : 'Geen haak'
            }
        }
    }
})