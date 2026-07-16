import {defineType, defineField} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const profilTataKelolaType = defineType({
  name: 'profilTataKelola',
  title: 'Tata Kelola & Administrasi (Profil)',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Section',
      type: 'string',
      description: 'Judul untuk bagian tata kelola. Contoh: "Administrasi & Tata Kelola"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tataKelola',
      title: 'Konten Tata Kelola & Administrasi',
      type: 'blockContent',
      description: 'Gunakan editor teks ini untuk menjelaskan administrasi, transparansi BOS, komite sekolah, dan akuntabilitas tata kelola sekolah.',
      validation: (Rule) => Rule.required().error('Konten tata kelola wajib diisi'),
    }),
  ],
})
