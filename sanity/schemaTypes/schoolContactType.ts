import {defineType, defineField, defineArrayMember} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

/**
 * Informasi Kontak Sekolah (Singleton)
 * Menyimpan alamat, telepon, email, link Google Maps, media sosial, dan info operasional/identitas sekolah.
 */
export const schoolContactType = defineType({
  name: 'schoolContact',
  title: 'Informasi Kontak',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'address',
      title: 'Alamat Lengkap Sekolah',
      type: 'text',
      rows: 3,
      description: 'Alamat fisik lengkap dari SD Negeri Parang 5 Kediri.',
    }),
    defineField({
      name: 'phone',
      title: 'Nomor Telepon / WhatsApp',
      type: 'string',
      description: 'Gunakan kode negara, contoh: "628123456789"',
    }),
    defineField({
      name: 'email',
      title: 'Email Resmi Sekolah',
      type: 'string',
      description: 'Email resmi sekolah. Contoh: "sdn.parang.v@gmail.com"',
    }),
    defineField({
      name: 'mapsUrl',
      title: 'Link Google Maps (Iframe Embed URL)',
      type: 'url',
      description: 'URL peta embed Google Maps dari menu Share > Embed a map (ambil nilai src saja, atau masukkan URL peta langsung).',
    }),
    defineField({
      name: 'workingHours',
      title: 'Jam Kerja / Jam Operasional',
      type: 'text',
      rows: 3,
      description: 'Informasi hari dan jam operasional pelayanan sekolah. Contoh: "Senin - Sabtu: 07.00 - 13.00 WIB\nMinggu & Hari Libur Nasional: Tutup"',
    }),
    defineField({
      name: 'npsn',
      title: 'Nomor NPSN Sekolah',
      type: 'string',
      description: 'Nomor Pokok Sekolah Nasional. Contoh: "20554546"',
    }),
    defineField({
      name: 'schoolStatus',
      title: 'Status Kelembagaan',
      type: 'string',
      description: 'Contoh: "Sekolah Dasar Negeri (SDN)"',
    }),
    defineField({
      name: 'accreditation',
      title: 'Akreditasi Sekolah (Detail Kontak)',
      type: 'string',
      description: 'Status akreditasi untuk bagian info tambahan. Contoh: "Akreditasi: B" atau "B"',
    }),
    defineField({
      name: 'curriculum',
      title: 'Kurikulum Sekolah',
      type: 'string',
      description: 'Kurikulum aktif yang digunakan. Contoh: "Kurikulum Merdeka"',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Media Sosial',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'socialMediaItem',
          title: 'Akun Media Sosial',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'TikTok', value: 'tiktok'},
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'Link Akun',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
  ],
})
