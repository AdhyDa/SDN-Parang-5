import {defineType, defineField} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

/**
 * Berita & Artikel (Collection)
 * Menyimpan berita sekolah dengan fitur slug untuk URL, gambar sampul,
 * ringkasan, dan isi lengkap menggunakan rich text editor.
 */
export const newsType = defineType({
  name: 'news',
  title: 'Berita & Artikel',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Berita',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Tautan (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Foto Sampul Berita',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'excerpt',
      title: 'Ringkasan Singkat',
      type: 'text',
      rows: 3,
      description: 'Ditampilkan di halaman daftar berita',
    }),
    defineField({
      name: 'body',
      title: 'Isi Lengkap Berita',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'mainImage',
    },
  },
  orderings: [
    {
      title: 'Tanggal Publikasi (Terbaru)',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
})
