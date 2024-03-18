import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import sanity from './manage.json'
import {customDocumentActions} from './plugins/customDocumentActions'
import {structure} from './desk'

export default defineConfig({
    name: 'default',
    title: sanity.title,

    projectId: sanity.projectId,
    dataset: sanity.dataset,

    plugins: [
        deskTool({structure}),
        visionTool(),
        customDocumentActions(),
    ],

    schema: {
        types: schemaTypes,
    },
})