import {type SchemaTypeDefinition} from 'sanity'

import {blockContentType} from './blockContentType'
import {siteSettingsType} from './siteSettingsType'
import {schoolContactType} from './schoolContactType'
import {teacherType} from './teacherType'
import {achievementType} from './achievementType'
import {galleryType} from './galleryType'
import {newsType} from './newsType'
import {accessSettingsType} from './accessSettingsType'

// New modular schemas
import {homeHeroType} from './homeHeroType'
import {homeWelcomeType} from './homeWelcomeType'
import {homeStatsType} from './homeStatsType'
import {homeProgramsType} from './homeProgramsType'
import {profilHistoryType} from './profilHistoryType'
import {profilVisiMisiType} from './profilVisiMisiType'
import {profilStructureType} from './profilStructureType'
import {profilKurikulumType} from './profilKurikulumType'
import {profilTataKelolaType} from './profilTataKelolaType'
import {pageGuruType} from './pageGuruType'
import {pageGalleryType} from './pageGalleryType'
import {pageNewsType} from './pageNewsType'
import {pageContactType} from './pageContactType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    blockContentType,
    siteSettingsType,
    schoolContactType,
    teacherType,
    achievementType,
    galleryType,
    newsType,
    accessSettingsType,
    
    // Beranda sections
    homeHeroType,
    homeWelcomeType,
    homeStatsType,
    homeProgramsType,
    
    // Profil sections
    profilHistoryType,
    profilVisiMisiType,
    profilStructureType,
    profilKurikulumType,
    profilTataKelolaType,
    
    // Other page intros
    pageGuruType,
    pageGalleryType,
    pageNewsType,
    pageContactType,
  ],
}
