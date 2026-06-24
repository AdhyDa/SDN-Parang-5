import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon} from '@sanity/icons'

/**
 * Tipe konten blok (Rich Text Editor) untuk digunakan di berbagai dokumen.
 * Mendukung: heading, list, bold, italic, link, dan gambar.
 *
 * Cara pakai di field lain:
 *   { name: 'body', title: 'Isi Konten', type: 'blockContent' }
 */
export const blockContentType = defineType({
  title: 'Konten Blok',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // Gaya teks yang tersedia di editor
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Judul 1', value: 'h1'},
        {title: 'Judul 2', value: 'h2'},
        {title: 'Judul 3', value: 'h3'},
        {title: 'Judul 4', value: 'h4'},
        {title: 'Kutipan', value: 'blockquote'},
      ],
      // Jenis daftar: bullet dan bernomor
      lists: [
        {title: 'Daftar Bullet', value: 'bullet'},
        {title: 'Daftar Bernomor', value: 'number'},
      ],
      marks: {
        // Format teks inline
        decorators: [
          {title: 'Tebal', value: 'strong'},
          {title: 'Miring', value: 'em'},
        ],
        // Anotasi: tautan URL
        annotations: [
          {
            title: 'Tautan',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // Blok gambar dengan teks alternatif untuk aksesibilitas
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Teks Alternatif Gambar',
        },
      ],
    }),
  ],
})
