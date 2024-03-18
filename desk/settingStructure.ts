import {ListItemBuilder} from 'sanity/desk'
import {defineStructure} from './utils'

import {TITLE} from '../schemas/singletons/settings'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title(TITLE)
    .schemaType('settings')
    .child(S.editor().title(TITLE).schemaType('settings').documentId('settings'))
)