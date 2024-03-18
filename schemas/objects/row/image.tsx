import {defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export default defineField({
    name: 'row.image',
    type: 'image',
    title: 'Rij afbeelding',
    icon: ImageIcon,
    options: {
        hotspot: true
    },
    fields: [
        {name: 'alt', type: 'string', title: 'Alt'},
        {
            name: 'aspectRatio',
            type: 'string',
            title: 'Aspect ratio',
            initialValue: 'auto',
        },
        {
            name: 'objectFit',
            type: 'string',
            title: 'Object fit',
            options: {
                list: [
                    {value: 'cover', title: 'Cover'},
                    {value: 'contain', title: 'Contain'},
                ]
            },
            initialValue: 'cover',
            validation: R => R.required(),
        },
    ],
    preview: {
        select: {
            alt: 'alt',
            aspectRatio: 'aspectRatio',
            objectFit: 'objectFit',
            mediaUrl: 'asset.url',
        },
        prepare({alt, aspectRatio, objectFit, mediaUrl}) {
            return {
                title: aspectRatio ? `Afbeelding [${aspectRatio}] ${objectFit === 'cover' ? '◚' : '◙'}` : 'Afbeelding',
                subtitle: alt ? alt : 'Geen Alt omschrijving',
                media: <img src={mediaUrl} style={{objectFit: 'cover'}} />
            }
        }
    }
})