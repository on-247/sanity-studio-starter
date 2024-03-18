import {ListItemBuilder} from 'sanity/desk'
import {defineStructure} from './utils'

import {TITLE} from '../schemas/singletons/home'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title(TITLE)
    .schemaType('home')
    .child(S.editor().title(TITLE).schemaType('home').documentId('home'))
)
