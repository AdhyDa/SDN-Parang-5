/**
 * GROQ Queries — SDN Parang 5
 * Semua query Sanity CMS terpusat di sini untuk maintainability.
 */

// ============================================
// Global Settings
// ============================================

/** Pengaturan website (nama, tagline, logo) */
export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteName,
  tagline,
  logo
}`

/** Informasi kontak sekolah */
export const schoolContactQuery = `*[_type == "schoolContact"][0]{
  address,
  phone,
  email,
  mapsUrl,
  socialMedia,
  workingHours,
  npsn,
  schoolStatus,
  accreditation,
  curriculum
}`

// ============================================
// Single Document Pages (Section Combined Queries)
// ============================================

/** Konten homepage (hero, sambutan, statistik, program) */
export const pageHomeQuery = `{
  "hero": *[_type == "homeHero"][0]{ heroTitle, heroSubtitle, heroImage },
  "welcome": *[_type == "homeWelcome"][0]{ principalName, principalWelcome, principalPhoto },
  "stats": *[_type == "homeStats"][0]{ statsTotalStudents, statsTotalTeachers, statsTotalClassrooms, statsAccreditation },
  "programs": *[_type == "homePrograms"][0]{ title, subtitle, programs }
}`

/** Konten halaman profil sekolah */
export const pageProfilQuery = `{
  "history": *[_type == "profilHistory"][0]{ badge, title, history },
  "visiMisi": *[_type == "profilVisiMisi"][0]{ vision, mission, submission1, submission2 },
  "structure": *[_type == "profilStructure"][0]{ title, organizationStructure },
  "kurikulum": *[_type == "profilKurikulum"][0]{ title, pembelajaran },
  "tataKelola": *[_type == "profilTataKelola"][0]{ title, tataKelola }
}`

/** Intro halaman Guru */
export const pageGuruQuery = `*[_type == "pageGuru"][0]{
  bannerTitle,
  breadcrumbCurrent,
  introBadge,
  introTitle,
  introDescription
}`

/** Intro halaman Galeri */
export const pageGalleryQuery = `*[_type == "pageGallery"][0]{
  bannerTitle,
  breadcrumbCurrent,
  introBadge,
  introTitle,
  introDescription
}`

/** Intro halaman Berita */
export const pageNewsQuery = `*[_type == "pageNews"][0]{
  bannerTitle,
  breadcrumbCurrent,
  introBadge,
  introTitle,
  introDescription
}`

/** Intro halaman Kontak */
export const pageContactQuery = `*[_type == "pageContact"][0]{
  bannerTitle,
  breadcrumbCurrent,
  introBadge,
  introTitle,
  introDescription
}`

// ============================================
// Collection Documents
// ============================================

/** Semua guru, diurutkan berdasarkan field 'order' */
export const teachersQuery = `*[_type == "teacher"] | order(order asc, name asc){
  _id,
  name,
  nip,
  role,
  photo
}`

/** 3 prestasi terbaru untuk preview di homepage */
export const latestAchievementsQuery = `*[_type == "achievement"] | order(date desc)[0...3]{
  _id,
  title,
  winner,
  date,
  image
}`

/** Semua prestasi untuk halaman prestasi */
export const allAchievementsQuery = `*[_type == "achievement"] | order(date desc){
  _id,
  title,
  winner,
  date,
  image
}`

/** Semua foto galeri */
export const allGalleryQuery = `*[_type == "gallery"] | order(_createdAt desc){
  _id,
  caption,
  category,
  image
}`

/** Galeri berdasarkan kategori */
export const galleryByCategoryQuery = `*[_type == "gallery" && category == $category] | order(_createdAt desc){
  _id,
  caption,
  category,
  image
}`

/** 3 berita terbaru untuk preview di homepage */
export const latestNewsQuery = `*[_type == "news"] | order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt
}`

/** Semua berita untuk halaman berita */
export const allNewsQuery = `*[_type == "news"] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt
}`

/** Detail berita berdasarkan slug */
export const newsBySlugQuery = `*[_type == "news" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt,
  body
}`

/** Semua slug berita untuk generateStaticParams */
export const allNewsSlugsQuery = `*[_type == "news" && defined(slug.current)]{
  "slug": slug.current
}`

/** Preview guru untuk homepage (6 guru pertama) */
export const teachersPreviewQuery = `*[_type == "teacher"] | order(order asc, name asc)[0...6]{
  _id,
  name,
  role,
  photo
}`

/** Preview galeri untuk homepage (6 foto terbaru) */
export const galleryPreviewQuery = `*[_type == "gallery"] | order(_createdAt desc)[0...6]{
  _id,
  caption,
  category,
  image
}`
