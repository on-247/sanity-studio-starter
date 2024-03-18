import {HomeIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const TITLE = 'Home'

export default defineType({
    name: 'home',
    title: TITLE,
    type: 'document',
    icon: HomeIcon,
    groups: [
        {name: 'editorial', title: 'Content', default: true},
        {name: 'seo', title: 'SEO'},
    ],
    fields: [
        // Content
        {
            group: 'editorial',
            name: 'sections',
            title: 'Secties',
            type: 'array',
            of: [{type: 'pageSection'}],
        },
        // SEO
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo.home',
            group: 'seo',
        },
    ],
    preview: {
        prepare() {
            return {
                subtitle: 'Index',
                title: TITLE,
            }
        },
    },
})