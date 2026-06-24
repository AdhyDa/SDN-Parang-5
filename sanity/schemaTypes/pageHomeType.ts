import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'

/**
 * Halaman Utama / Homepage (Singleton)
 * Mengatur konten hero, sambutan kepala sekolah, dan statistik sekolah.
 */
export const pageHomeType = defineType({
  name: 'pageHome',
  title: 'Halaman Utama (Homepage)',
  type: 'document',
  icon: HomeIcon,
  fields: [
    // ── Hero Section ──
    defineField({
      name: 'heroTitle',
      title: 'Judul Utama (Hero)',
      type: 'string',
      description: 'Teks judul besar di halaman depan',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sub Judul Hero',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroImage',
      title: 'Foto Utama Halaman Depan',
      type: 'image',
      options: {hotspot: true},
    }),

    // ── Sambutan Kepala Sekolah ──
    defineField({
      name: 'principalName',
      title: 'Nama Kepala Sekolah',
      type: 'string',
    }),
    defineField({
      name: 'principalWelcome',
      title: 'Teks Sambutan Kepala Sekolah',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'principalPhoto',
      title: 'Foto Kepala Sekolah',
      type: 'image',
      options: {hotspot: true},
    }),

    // ── Statistik Sekolah ──
    defineField({
      name: 'statsTotalStudents',
      title: 'Jumlah Total Siswa',
      type: 'number',
    }),
    defineField({
      name: 'statsTotalTeachers',
      title: 'Jumlah Guru & Tenaga Pendidik',
      type: 'number',
    }),
    defineField({
      name: 'statsTotalClassrooms',
      title: 'Jumlah Ruang Kelas',
      type: 'number',
    }),
    defineField({
      name: 'statsAccreditation',
      title: 'Status Akreditasi',
      type: 'string',
    }),
  ],
})
