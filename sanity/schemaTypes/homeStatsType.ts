import {defineType, defineField} from 'sanity'
import {ThListIcon} from '@sanity/icons'

export const homeStatsType = defineType({
  name: 'homeStats',
  title: 'Statistik Sekolah (Beranda)',
  type: 'document',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'statsTotalStudents',
      title: 'Jumlah Siswa Aktif',
      type: 'number',
      description: 'Jumlah total siswa aktif saat ini yang terdaftar di sekolah.',
      validation: (Rule) => Rule.required().min(0).error('Jumlah siswa wajib diisi dan minimal 0'),
    }),
    defineField({
      name: 'statsTotalTeachers',
      title: 'Jumlah Guru & Staff',
      type: 'number',
      description: 'Jumlah guru serta tenaga kependidikan aktif saat ini.',
      validation: (Rule) => Rule.required().min(0).error('Jumlah guru wajib diisi dan minimal 0'),
    }),
    defineField({
      name: 'statsTotalClassrooms',
      title: 'Jumlah Ruang Kelas',
      type: 'number',
      description: 'Jumlah ruang kelas yang digunakan untuk proses belajar mengajar.',
      validation: (Rule) => Rule.required().min(0).error('Jumlah ruang kelas wajib diisi dan minimal 0'),
    }),
    defineField({
      name: 'statsAccreditation',
      title: 'Akreditasi Sekolah',
      type: 'string',
      description: 'Nilai akreditasi sekolah saat ini (Contoh: "A" atau "B").',
      validation: (Rule) => Rule.required().error('Status akreditasi wajib diisi'),
    }),
  ],
})
