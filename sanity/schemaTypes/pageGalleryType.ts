import {defineType, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const pageGalleryType = defineType({
  name: 'pageGallery',
  title: 'Halaman Galeri (Intro)',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'bannerTitle',
      title: 'Judul Banner Halaman',
      type: 'string',
      description: 'Teks judul besar di banner atas halaman Galeri. Contoh: "Galeri Dokumentasi"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'breadcrumbCurrent',
      title: 'Nama Breadcrumb Aktif',
      type: 'string',
      description: 'Teks navigasi aktif pada banner. Contoh: "Galeri"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introBadge',
      title: 'Label Intro (Badge)',
      type: 'string',
      description: 'Teks label kecil di bagian atas judul intro. Contoh: "Visual Dokumentasi"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introTitle',
      title: 'Judul Intro Halaman',
      type: 'string',
      description: 'Judul utama di atas daftar foto. Contoh: "Album Kegiatan & Fasilitas Sekolah"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introDescription',
      title: 'Deskripsi Intro Halaman',
      type: 'text',
      rows: 3,
      description: 'Deskripsi singkat mengenai isi galeri foto kegiatan dan prasarana sekolah.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
