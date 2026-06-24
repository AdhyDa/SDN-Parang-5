import type {StructureResolver} from 'sanity/structure'
import {
  CogIcon,
  HomeIcon,
  DocumentTextIcon,
  EnvelopeIcon,
} from '@sanity/icons'

/**
 * Konfigurasi sidebar Sanity Studio untuk SDN Parang 5.
 * Dikelompokkan menjadi: Pengaturan Umum, Halaman, dan Data Dinamis.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('SDN Parang 5 - Admin Panel')
    .items([
      // ── Pengaturan Umum ──
      S.listItem()
        .title('⚙️ Pengaturan Umum')
        .child(
          S.list()
            .title('Pengaturan Umum')
            .items([
              S.listItem()
                .title('Pengaturan Website')
                .icon(CogIcon)
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings'),
                ),
              S.listItem()
                .title('Informasi Kontak')
                .icon(EnvelopeIcon)
                .child(
                  S.document()
                    .schemaType('schoolContact')
                    .documentId('schoolContact'),
                ),
            ]),
        ),

      S.divider(),

      // ── Halaman ──
      S.listItem()
        .title('📄 Halaman')
        .child(
          S.list()
            .title('Kelola Halaman')
            .items([
              S.listItem()
                .title('Halaman Utama (Homepage)')
                .icon(HomeIcon)
                .child(
                  S.document()
                    .schemaType('pageHome')
                    .documentId('pageHome'),
                ),
              S.listItem()
                .title('Halaman Profil Sekolah')
                .icon(DocumentTextIcon)
                .child(
                  S.document()
                    .schemaType('pageProfil')
                    .documentId('pageProfil'),
                ),
            ]),
        ),

      S.divider(),

      // ── Data Dinamis ──
      S.listItem()
        .title('📦 Data Dinamis')
        .child(
          S.list()
            .title('Kelola Data')
            .items([
              S.documentTypeListItem('teacher').title(
                '👨‍🏫 Guru & Tenaga Pendidik',
              ),
              S.documentTypeListItem('achievement').title('🏆 Prestasi'),
              S.documentTypeListItem('gallery').title('📸 Galeri Foto'),
              S.documentTypeListItem('news').title('📰 Berita & Artikel'),
            ]),
        ),
    ])
