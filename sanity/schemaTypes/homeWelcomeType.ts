import {defineType, defineField} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const homeWelcomeType = defineType({
  name: 'homeWelcome',
  title: 'Welcome Section (Beranda)',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'principalName',
      title: 'Nama Kepala Sekolah',
      type: 'string',
      description: 'Nama lengkap beserta gelar akademik Kepala Sekolah. Contoh: "Iftakhul Kusniah, S.Pd."',
      validation: (Rule) => Rule.required().error('Nama kepala sekolah wajib diisi'),
    }),
    defineField({
      name: 'principalWelcome',
      title: 'Teks Sambutan',
      type: 'text',
      rows: 6,
      description: 'Teks sambutan hangat resmi dari kepala sekolah untuk diletakkan di halaman depan.',
      validation: (Rule) => Rule.required().error('Teks sambutan wajib diisi'),
    }),
    defineField({
      name: 'principalPhoto',
      title: 'Foto Kepala Sekolah',
      type: 'image',
      options: {hotspot: true},
      description: 'Unggah foto resmi Kepala Sekolah (disarankan format potret/portrait 3:4).',
      validation: (Rule) => Rule.required().error('Foto kepala sekolah wajib diunggah'),
    }),
  ],
})
