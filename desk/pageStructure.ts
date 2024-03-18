import {ListItemBuilder} from 'sanity/desk'
import {defineStructure} from './utils'
import {DocumentsIcon} from '@sanity/icons'

import {TITLE} from '../schemas/documents/page'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title(TITLE)
    .icon(DocumentsIcon)
    .schemaType('page')
    .child(S.documentTypeList('page'))
)
