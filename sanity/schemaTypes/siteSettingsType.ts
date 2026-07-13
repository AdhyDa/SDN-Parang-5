import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

/**
 * Pengaturan Website (Singleton)
 * Menyimpan informasi dasar website: nama sekolah, tagline, dan logo.
 */
export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Pengaturan Website',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteName',
      title: 'Nama Sekolah',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline Sekolah',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Sekolah',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
