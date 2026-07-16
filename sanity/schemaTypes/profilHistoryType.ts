import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const profilHistoryType = defineType({
  name: 'profilHistory',
  title: 'Sejarah Sekolah (Profil)',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'badge',
      title: 'Label Kategori (Badge)',
      type: 'string',
      description: 'Label kecil di atas judul sejarah. Contoh: "Sejarah Singkat"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Judul Sejarah',
      type: 'string',
      description: 'Judul untuk bagian sejarah. Contoh: "Perjalanan SDN Parang 5 Kediri"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'history',
      title: 'Isi Sejarah Singkat',
      type: 'blockContent',
      description: 'Gunakan editor teks ini untuk menuliskan sejarah berdirinya sekolah dan perkembangannya.',
      validation: (Rule) => Rule.required().error('Konten sejarah wajib diisi'),
    }),
  ],
})
