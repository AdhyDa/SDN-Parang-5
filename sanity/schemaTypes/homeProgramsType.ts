import {defineType, defineField, defineArrayMember} from 'sanity'
import {StarIcon} from '@sanity/icons'

export const homeProgramsType = defineType({
  name: 'homePrograms',
  title: 'Program Unggulan (Beranda)',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Utama Section',
      type: 'string',
      description: 'Judul besar untuk bagian program unggulan. Contoh: "Program Unggulan Pembentukan Karakter"',
      validation: (Rule) => Rule.required().error('Judul section wajib diisi'),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Judul / Kategori Section',
      type: 'string',
      description: 'Subjudul kecil di atas judul utama. Contoh: "Nilai Unggul"',
      validation: (Rule) => Rule.required().error('Sub judul section wajib diisi'),
    }),
    defineField({
      name: 'programs',
      title: 'Daftar Program',
      type: 'array',
      description: 'Daftar program unggulan sekolah yang ingin ditonjolkan.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'programItem',
          title: 'Item Program',
          fields: [
            defineField({
              name: 'icon',
              title: 'Emoji / Icon',
              type: 'string',
              description: 'Emoji yang merepresentasikan program ini. Contoh: "📚", "🌿", "💻"',
              validation: (Rule) => Rule.required().error('Emoji/Icon wajib diisi'),
            }),
            defineField({
              name: 'title',
              title: 'Nama Program',
              type: 'string',
              validation: (Rule) => Rule.required().error('Nama program wajib diisi'),
            }),
            defineField({
              name: 'desc',
              title: 'Deskripsi Program',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required().error('Deskripsi program wajib diisi'),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1).error('Daftar program minimal harus berisi 1 item'),
    }),
  ],
})
