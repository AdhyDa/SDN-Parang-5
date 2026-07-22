import {defineType, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const profilStructureType = defineType({
  name: 'profilStructure',
  title: 'Struktur Organisasi (Profil)',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Section',
      type: 'string',
      description: 'Judul untuk bagan kepengurusan. Contoh: "Bagan Organisasi Sekolah"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'organizationStructure',
      title: 'Gambar Bagan Organisasi',
      type: 'image',
      options: {hotspot: true},
      description: 'Unggah file gambar bagan organisasi sekolah terbaru.',
      validation: (Rule) => Rule.required().error('Bagan organisasi wajib diunggah'),
    }),
  ],
})
