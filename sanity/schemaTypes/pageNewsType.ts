import {defineType, defineField} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const pageNewsType = defineType({
  name: 'pageNews',
  title: 'Halaman Berita (Intro)',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'bannerTitle',
      title: 'Judul Banner Halaman',
      type: 'string',
      description: 'Teks judul besar di banner atas halaman Berita. Contoh: "Berita & Artikel"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'breadcrumbCurrent',
      title: 'Nama Breadcrumb Aktif',
      type: 'string',
      description: 'Teks navigasi aktif pada banner. Contoh: "Berita"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introBadge',
      title: 'Label Intro (Badge)',
      type: 'string',
      description: 'Teks label kecil di bagian atas judul intro. Contoh: "Kabar Sekolah"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introTitle',
      title: 'Judul Intro Halaman',
      type: 'string',
      description: 'Judul utama di atas daftar berita. Contoh: "Kabar Terbaru & Pengumuman Resmi"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introDescription',
      title: 'Deskripsi Intro Halaman',
      type: 'text',
      rows: 3,
      description: 'Deskripsi singkat mengenai berita, pengumuman PPDB, dan kegiatan di sekolah.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
