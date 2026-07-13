import {defineType, defineField} from 'sanity'
import {StarIcon} from '@sanity/icons'

/**
 * Data Prestasi (Collection)
 * Menyimpan data prestasi dan penghargaan yang diraih siswa atau sekolah.
 */
export const achievementType = defineType({
  name: 'achievement',
  title: 'Data Prestasi',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Prestasi / Lomba',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'winner',
      title: 'Nama Peraih Prestasi',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Tanggal Perolehan',
      type: 'date',
    }),
    defineField({
      name: 'image',
      title: 'Foto Dokumentasi Prestasi',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'winner',
      media: 'image',
    },
  },
})
