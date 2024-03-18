import {DocumentIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const TITLE = 'Pagina\'s'

export default defineType({
    name: 'page',
    title: TITLE,
    type: 'document',
    icon: DocumentIcon,
    groups: [
        {name: 'editorial', title: 'Content', default: true},
        {name: 'seo', title: 'SEO'},
    ],
    fields: [
        // Content
        {
            group: 'editorial',
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            group: 'editorial',
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Website URL slug van de pagina, bijv. agenda. (wordt → www.website.com/agenda)',
            options: {source: 'title'},
        },
        {
            group: 'editorial',
            name: 'sections',
            title: 'Secties',
            type: 'array',
            of: [{type: 'pageSection'}],
        },
        // SEO
        {
            group: 'seo',
            name: 'seo',
            title: 'SEO',
            type: 'seo.page',
        }
    ],
    preview: {
        select: {
            active: 'active',
            seoImage: 'seo.image',
            title: 'title',
        },
        prepare({seoImage, title}) {
            return {
                media: seoImage,
                title,
            }
        },
    },
})