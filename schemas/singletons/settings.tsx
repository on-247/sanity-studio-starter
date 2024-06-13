import {CogIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const TITLE = 'Instellingen'

export default defineType({
    name: 'settings',
    title: TITLE,
    type: 'document',
    icon: CogIcon,
    groups: [
        {name: 'navigation', title: 'Navigatie', default: true},
        {name: 'notFoundPage', title: '404 page'},
        {name: 'seo', title: 'SEO'},
    ],
    fields: [
        // Navigatie
        {
            group: 'navigation',
            name: 'menu',
            title: 'Menu',
            type: 'menu',
        },
        {
            group: 'navigation',
            name: 'footerMenus',
            title: 'Footer menu\'s',
            type: 'array',
            of: [{
                name: 'menu',
                title: 'Menu',
                type: 'menu',
            }]
        },
        // 404 page
        {
            group: 'notFoundPage',
            name: 'notFoundPage',
            title: '404 page',
            type: 'pageSection',
        },
        // SEO
        {
            group: 'seo',
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        },
    ],
    preview: {
        prepare() {
            return {
                title: TITLE,
            }
        },
    },
})