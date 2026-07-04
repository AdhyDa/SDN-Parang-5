import {defineType, defineField} from 'sanity'
import {LockIcon} from '@sanity/icons'

/**
 * Pengaturan Akses Studio (Singleton)
 * Menyimpan kata sandi dinamis untuk login ke panel admin Sanity Studio.
 */
export const accessSettingsType = defineType({
  name: 'accessSettings',
  title: 'Kata Sandi Akses Studio',
  type: 'document',
  icon: LockIcon,
  fields: [
    defineField({
      name: 'adminPassword',
      title: 'Kata Sandi Akses Studio',
      type: 'string',
      description: 'Kata sandi dinamis untuk masuk ke panel admin website. Gantilah secara berkala demi keamanan.',
      initialValue: 'Parang5Maju',
    }),
  ],
})
