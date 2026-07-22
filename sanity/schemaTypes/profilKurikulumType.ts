import {defineType, defineField} from 'sanity'
import {BookIcon} from '@sanity/icons'

export const profilKurikulumType = defineType({
  name: 'profilKurikulum',
  title: 'Kurikulum & Pembelajaran (Profil)',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Section',
      type: 'string',
      description: 'Judul untuk bagian kurikulum. Contoh: "Metode Belajar & Kurikulum"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pembelajaran',
      title: 'Informasi Kurikulum & Pembelajaran',
      type: 'blockContent',
      description: 'Gunakan editor teks ini untuk menjelaskan metode pembelajaran dan kurikulum yang digunakan (misal Kurikulum Merdeka).',
      validation: (Rule) => Rule.required().error('Konten kurikulum wajib diisi'),
    }),
  ],
})
