import {defineCliConfig} from 'sanity/cli'
import sanity from './manage.json'

export default defineCliConfig({
    api: {
        projectId: sanity.projectId,
        dataset: sanity.dataset,
    },

    project: {
        basePath: sanity?.basePath ?? '/'
    }
})