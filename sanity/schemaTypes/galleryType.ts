import {defineType, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

/**
 * Galeri Foto (Collection)
 * Menyimpan foto-foto kegiatan sekolah yang dikategorikan.
 */
export const galleryType = defineType({
  name: 'gallery',
  title: 'Galeri Foto',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'caption',
      title: 'Keterangan Foto',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Kegiatan Belajar', value: 'belajar'},
          {title: 'Ekstrakurikuler', value: 'ekskul'},
          {title: 'Fasilitas & Lingkungan', value: 'fasilitas'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Unggah Foto',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      subtitle: 'category',
      media: 'image',
    },
  },
})
