import {defineField} from 'sanity'

export default defineField({
    name: 'seo.fragment.description',
    title: 'Omschrijving',
    type: 'text',
    rows: 3,
    validation: (Rule) =>
        // TODO: translation
        Rule.max(150).warning('Een langere omschrijving wordt mogelijk verkort door zoekmachines.'),
})