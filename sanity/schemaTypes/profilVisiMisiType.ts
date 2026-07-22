import {defineType, defineField} from 'sanity'
import {CheckmarkCircleIcon} from '@sanity/icons'

export const profilVisiMisiType = defineType({
  name: 'profilVisiMisi',
  title: 'Visi & Misi (Profil)',
  type: 'document',
  icon: CheckmarkCircleIcon,
  fields: [
    defineField({
      name: 'vision',
      title: 'Visi Sekolah',
      type: 'text',
      rows: 3,
      description: 'Kalimat visi sekolah. Contoh: "Membina Akhlak Meraih Prestasi, Berwawasan Global..."',
      validation: (Rule) => Rule.required().error('Visi sekolah wajib diisi'),
    }),
    defineField({
      name: 'mission',
      title: 'Misi Sekolah',
      type: 'array',
      description: 'Langkah strategis / poin-poin misi sekolah.',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1).error('Misi sekolah minimal harus memiliki 1 poin'),
    }),
    defineField({
      name: 'submission1',
      title: 'Detail Misi Pertama (Penjabaran Misi 1)',
      type: 'array',
      description: 'Penjabaran detail dari poin misi ke-1 (misal pembiasaan doa, sholat dhuha, kepedulian sosial).',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'submission2',
      title: 'Detail Misi Kedua (Penjabaran Misi 2)',
      type: 'array',
      description: 'Penjabaran detail dari poin misi ke-2 (misal kompetensi guru, workshop, metode pembelajaran inovatif).',
      of: [{type: 'text'}],
    }),
  ],
})
