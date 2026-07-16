import type {StructureResolver} from 'sanity/structure'
import {
  CogIcon,
  HomeIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  LockIcon,
  UserIcon,
  StarIcon,
  InfoOutlineIcon,
  BookIcon,
  ImagesIcon,
  CalendarIcon,
  UsersIcon,
} from '@sanity/icons'

/**
 * Konfigurasi sidebar Sanity Studio untuk SDN Parang 5.
 * Dikelompokkan secara profesional & teratur: Pengaturan Umum, Halaman (Per-Section), dan Data Dinamis.
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
                .title('Kata Sandi Akses Studio')
                .icon(LockIcon)
                .child(
                  S.document()
                    .schemaType('accessSettings')
                    .documentId('accessSettings'),
                ),
            ]),
        ),

      S.divider(),

      // ── Halaman (Per-Halaman & Per-Section) ──
      S.listItem()
        .title('📄 Halaman')
        .child(
          S.list()
            .title('Kelola Halaman')
            .items([
              // 1. Beranda
              S.listItem()
                .title('🏠 Beranda (Homepage)')
                .child(
                  S.list()
                    .title('Seksi Halaman Beranda')
                    .items([
                      S.listItem()
                        .title('Hero Section')
                        .icon(HomeIcon)
                        .child(
                          S.document()
                            .schemaType('homeHero')
                            .documentId('homeHero'),
                        ),
                      S.listItem()
                        .title('Welcome Section (Sambutan)')
                        .icon(UserIcon)
                        .child(
                          S.document()
                            .schemaType('homeWelcome')
                            .documentId('homeWelcome'),
                        ),
                      S.listItem()
                        .title('Statistik Sekolah')
                        .icon(InfoOutlineIcon)
                        .child(
                          S.document()
                            .schemaType('homeStats')
                            .documentId('homeStats'),
                        ),
                      S.listItem()
                        .title('Program Unggulan')
                        .icon(StarIcon)
                        .child(
                          S.document()
                            .schemaType('homePrograms')
                            .documentId('homePrograms'),
                        ),
                    ])
                ),

              // 2. Profil
              S.listItem()
                .title('📖 Profil Sekolah')
                .child(
                  S.list()
                    .title('Seksi Halaman Profil')
                    .items([
                      S.listItem()
                        .title('Sejarah Singkat')
                        .icon(DocumentTextIcon)
                        .child(
                          S.document()
                            .schemaType('profilHistory')
                            .documentId('profilHistory'),
                        ),
                      S.listItem()
                        .title('Visi & Misi')
                        .icon(StarIcon)
                        .child(
                          S.document()
                            .schemaType('profilVisiMisi')
                            .documentId('profilVisiMisi'),
                        ),
                      S.listItem()
                        .title('Bagan Struktur Organisasi')
                        .icon(ImagesIcon)
                        .child(
                          S.document()
                            .schemaType('profilStructure')
                            .documentId('profilStructure'),
                        ),
                      S.listItem()
                        .title('Kurikulum & Pembelajaran')
                        .icon(BookIcon)
                        .child(
                          S.document()
                            .schemaType('profilKurikulum')
                            .documentId('profilKurikulum'),
                        ),
                      S.listItem()
                        .title('Tata Kelola & Administrasi')
                        .icon(DocumentTextIcon)
                        .child(
                          S.document()
                            .schemaType('profilTataKelola')
                            .documentId('profilTataKelola'),
                        ),
                    ])
                ),

              // 3. Guru & Staff
              S.listItem()
                .title('👨‍🏫 Guru & Staff')
                .child(
                  S.list()
                    .title('Kelola Halaman Guru')
                    .items([
                      S.listItem()
                        .title('Banner & Intro Halaman')
                        .icon(InfoOutlineIcon)
                        .child(
                          S.document()
                            .schemaType('pageGuru')
                            .documentId('pageGuru'),
                        ),
                      S.documentTypeListItem('teacher')
                        .title('Kelola Daftar Guru & Staff')
                        .icon(UsersIcon),
                    ])
                ),

              // 4. Galeri Foto
              S.listItem()
                .title('📸 Galeri Foto')
                .child(
                  S.list()
                    .title('Kelola Halaman Galeri')
                    .items([
                      S.listItem()
                        .title('Banner & Intro Halaman')
                        .icon(InfoOutlineIcon)
                        .child(
                          S.document()
                            .schemaType('pageGallery')
                            .documentId('pageGallery'),
                        ),
                      S.documentTypeListItem('gallery')
                        .title('Kelola Album Foto')
                        .icon(ImagesIcon),
                    ])
                ),

              // 5. Berita & Artikel
              S.listItem()
                .title('📰 Berita & Artikel')
                .child(
                  S.list()
                    .title('Kelola Halaman Berita')
                    .items([
                      S.listItem()
                        .title('Banner & Intro Halaman')
                        .icon(InfoOutlineIcon)
                        .child(
                          S.document()
                            .schemaType('pageNews')
                            .documentId('pageNews'),
                        ),
                      S.documentTypeListItem('news')
                        .title('Kelola Berita & Artikel')
                        .icon(CalendarIcon),
                    ])
                ),

              // 6. Kontak
              S.listItem()
                .title('📞 Hubungi Kami (Kontak)')
                .child(
                  S.list()
                    .title('Kelola Halaman Kontak')
                    .items([
                      S.listItem()
                        .title('Banner & Intro Halaman')
                        .icon(InfoOutlineIcon)
                        .child(
                          S.document()
                            .schemaType('pageContact')
                            .documentId('pageContact'),
                        ),
                      S.listItem()
                        .title('Informasi Kontak Utama')
                        .icon(EnvelopeIcon)
                        .child(
                          S.document()
                            .schemaType('schoolContact')
                            .documentId('schoolContact'),
                        ),
                    ])
                ),
            ]),
        ),
    ])
