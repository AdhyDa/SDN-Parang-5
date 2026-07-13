import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

/**
 * Halaman Profil Sekolah (Singleton)
 * Mengatur sejarah, visi-misi, struktur organisasi, kurikulum, dan tata kelola.
 */
export const pageProfilType = defineType({
  name: 'pageProfil',
  title: 'Halaman Profil Sekolah',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'history',
      title: 'Sejarah Sekolah',
      type: 'blockContent',
    }),
    defineField({
      name: 'vision',
      title: 'Visi Sekolah',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mission',
      title: 'Misi Sekolah',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'organizationStructure',
      title: 'Bagan Struktur Organisasi',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'pembelajaran',
      title: 'Informasi Kurikulum & Pembelajaran',
      type: 'blockContent',
    }),
    defineField({
      name: 'tataKelola',
      title: 'Tata Kelola & Administrasi',
      type: 'blockContent',
    }),
  ],
})
