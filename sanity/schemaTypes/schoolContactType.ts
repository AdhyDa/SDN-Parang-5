import {defineType, defineField, defineArrayMember} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

/**
 * Informasi Kontak Sekolah (Singleton)
 * Menyimpan alamat, telepon, email, link Google Maps, dan media sosial.
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
    }),
    defineField({
      name: 'phone',
      title: 'Nomor Telepon / WhatsApp',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Resmi Sekolah',
      type: 'string',
    }),
    defineField({
      name: 'mapsUrl',
      title: 'Link Google Maps',
      type: 'url',
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
