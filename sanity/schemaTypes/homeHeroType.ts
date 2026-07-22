import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const homeHeroType = defineType({
  name: 'homeHero',
  title: 'Hero Section (Beranda)',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Judul Utama (Hero Title)',
      type: 'string',
      description: 'Teks judul besar yang muncul di bagian paling atas halaman Beranda. Contoh: "Membangun Generasi Cerdas, Berkarakter, & Peduli Lingkungan"',
      validation: (Rule) => Rule.required().error('Judul utama wajib diisi'),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sub Judul (Hero Subtitle)',
      type: 'text',
      rows: 3,
      description: 'Teks penjelasan singkat di bawah judul utama yang memperjelas komitmen sekolah.',
      validation: (Rule) => Rule.required().error('Sub judul wajib diisi'),
    }),
    defineField({
      name: 'heroImage',
      title: 'Foto Utama (Hero Image)',
      type: 'image',
      options: {hotspot: true},
      description: 'Foto banner besar yang akan ditampilkan di sebelah kanan bagian Hero.',
      validation: (Rule) => Rule.required().error('Foto utama wajib diunggah'),
    }),
  ],
})
