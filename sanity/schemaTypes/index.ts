import {type SchemaTypeDefinition} from 'sanity'

import {blockContentType} from './blockContentType'
import {siteSettingsType} from './siteSettingsType'
import {schoolContactType} from './schoolContactType'
import {pageHomeType} from './pageHomeType'
import {pageProfilType} from './pageProfilType'
import {teacherType} from './teacherType'
import {achievementType} from './achievementType'
import {galleryType} from './galleryType'
import {newsType} from './newsType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    blockContentType,
    siteSettingsType,
    schoolContactType,
    pageHomeType,
    pageProfilType,
    teacherType,
    achievementType,
    galleryType,
    newsType,
  ],
}
