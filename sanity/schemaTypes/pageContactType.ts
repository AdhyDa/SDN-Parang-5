import {defineType, defineField} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export const pageContactType = defineType({
  name: 'pageContact',
  title: 'Halaman Kontak (Intro)',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'bannerTitle',
      title: 'Judul Banner Halaman',
      type: 'string',
      description: 'Teks judul besar di banner atas halaman Kontak. Contoh: "Hubungi Kami"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'breadcrumbCurrent',
      title: 'Nama Breadcrumb Aktif',
      type: 'string',
      description: 'Teks navigasi aktif pada banner. Contoh: "Kontak"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introBadge',
      title: 'Label Intro (Badge)',
      type: 'string',
      description: 'Teks label kecil di bagian atas judul intro. Contoh: "Informasi Kontak"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introTitle',
      title: 'Judul Intro Halaman',
      type: 'string',
      description: 'Judul utama di atas rincian kontak. Contoh: "Mari Jalin Hubungan Baik"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introDescription',
      title: 'Deskripsi Intro Halaman',
      type: 'text',
      rows: 3,
      description: 'Teks pengantar di bawah judul intro kontak untuk menyambut wali murid/pengunjung.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
