import {defineType, defineField} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const pageGuruType = defineType({
  name: 'pageGuru',
  title: 'Halaman Guru (Intro)',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'bannerTitle',
      title: 'Judul Banner Halaman',
      type: 'string',
      description: 'Teks judul besar di banner atas halaman Guru. Contoh: "Guru & Tenaga Kependidikan"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'breadcrumbCurrent',
      title: 'Nama Breadcrumb Aktif',
      type: 'string',
      description: 'Teks navigasi aktif pada banner. Contoh: "Guru"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introBadge',
      title: 'Label Intro (Badge)',
      type: 'string',
      description: 'Teks label kecil di bagian atas judul intro. Contoh: "Pendidik Kami"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introTitle',
      title: 'Judul Intro Halaman',
      type: 'string',
      description: 'Judul utama di atas daftar guru. Contoh: "Tim Pendidik & Tenaga Kependidikan"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introDescription',
      title: 'Deskripsi Intro Halaman',
      type: 'text',
      rows: 3,
      description: 'Deskripsi singkat mengenai para guru dan tenaga kependidikan sekolah.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
