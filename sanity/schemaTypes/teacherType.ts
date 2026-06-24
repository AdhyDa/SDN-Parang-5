import {defineType, defineField} from 'sanity'
import {UsersIcon} from '@sanity/icons'

/**
 * Data Guru & Tenaga Pendidik (Collection)
 * Setiap dokumen mewakili satu guru atau tenaga pendidik di sekolah.
 */
export const teacherType = defineType({
  name: 'teacher',
  title: 'Data Guru & Tenaga Pendidik',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Lengkap (Beserta Gelar)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'nip',
      title: 'NIP (Nomor Induk Pegawai)',
      type: 'string',
      description: 'Opsional, kosongkan jika tidak ada',
    }),
    defineField({
      name: 'role',
      title: 'Jabatan / Posisi',
      type: 'string',
      description: 'Contoh: Guru Kelas 1, Guru PJOK, Staf TU',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Foto Resmi',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      description: 'Angka kecil ditampilkan lebih dulu',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
})
