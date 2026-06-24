import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { newsBySlugQuery, allNewsSlugsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import BlockContent from "../../components/BlockContent";

// Next.js ISR
export const revalidate = 60;

// Dynamic Metadata generation (Next.js 16 async params)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let article = null;
  try {
    article = await client.fetch(newsBySlugQuery, { slug });
  } catch (err) {
    console.error("Error fetching metadata for news article:", err);
  }

  // Fallback metadata titles
  const fallbackTitles: Record<string, string> = {
    "kegiatan-kkn-um": "Kegiatan KKN Universitas Negeri Malang di SDN Parang 5",
    "ppdb-2026": "Penerimaan Peserta Didik Baru (PPDB) Tahun Pelajaran 2026/2027",
    "hardiknas-2026": "Upacara Peringatan Hari Pendidikan Nasional 2026 Khidmat",
  };

  const title = article?.title || fallbackTitles[slug] || "Berita & Kabar";
  const desc = article?.excerpt || "Baca selengkapnya mengenai kabar terhangat di SD Negeri Parang 5 Magetan.";

  return {
    title,
    description: desc,
  };
}

// Generate static params for SSG (Next.js 16)
export async function generateStaticParams() {
  let slugs = [];
  try {
    slugs = await client.fetch(allNewsSlugsQuery);
  } catch (err) {
    console.error("Error fetching slugs for SSG:", err);
  }

  const staticSlugs = slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));

  // Append fallbacks to guarantee they build correctly
  return [
    ...staticSlugs,
    { slug: "kegiatan-kkn-um" },
    { slug: "ppdb-2026" },
    { slug: "hardiknas-2026" },
  ];
}

// Dummy Fallback Articles Data
const fallbackArticles: Record<
  string,
  { title: string; publishedAt: string; excerpt: string; bodyHtml: React.ReactNode }
> = {
  "kegiatan-kkn-um": {
    title: "Kegiatan KKN Universitas Negeri Malang di SDN Parang 5",
    publishedAt: "2026-06-20T12:00:00.000Z",
    excerpt:
      "Mahasiswa KKN dari Universitas Negeri Malang menyelenggarakan pendampingan digitalisasi profil sekolah, pendataan aset, serta pelatihan operasional web CMS bagi jajaran guru SDN Parang 5 Magetan.",
    bodyHtml: (
      <div className="prose max-w-none text-gray-700 leading-relaxed font-body flex flex-col gap-4">
        <p>
          Kelompok mahasiswa Kuliah Kerja Nyata (KKN) dari Universitas Negeri Malang secara resmi meluncurkan
          program pengabdian masyarakat bertajuk digitalisasi manajemen dan branding sekolah dasar di SD
          Negeri Parang 5, Magetan. Kegiatan ini bertujuan merapikan publikasi informasi sekolah yang sebelumnya
          terpecah di banyak Google Drive dan tautan PDF eksternal.
        </p>
        <h2 className="text-xl font-bold text-navy mt-4 font-heading">Pendampingan Pengoperasian Website</h2>
        <p>
          Selain merancang struktur website profil Next.js yang modern dan responsif, tim mahasiswa KKN juga
          melaksanakan pelatihan bagi para guru mengenai cara memperbarui informasi berita, data prestasi,
          maupun dokumentasi foto galeri menggunakan panel admin Sanity CMS Studio.
        </p>
        <blockquote>
          “Kami berharap website resmi ini dapat mempermudah orang tua mendapatkan informasi perkembangan putra-putrinya
          sekaligus mendongkrak citra sekolah dasar di mata publik Magetan,” ujar koordinator mahasiswa KKN.
        </blockquote>
        <p>
          Kepala Sekolah beserta jajaran guru menyambut baik kepedulian mahasiswa dalam mengawal digitalisasi ini
          serta siap merawat kelangsungan konten web untuk kesuksesan promosi PPDB sekolah mendatang.
        </p>
      </div>
    ),
  },
  "ppdb-2026": {
    title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Pelajaran 2026/2027",
    publishedAt: "2026-04-15T08:00:00.000Z",
    excerpt:
      "SD Negeri Parang 5 Magetan membuka pendaftaran siswa baru untuk tahun ajaran baru. Persyaratan meliputi akta kelahiran anak, kartu keluarga, serta pengisian formulir fisik di kantor Tata Usaha.",
    bodyHtml: (
      <div className="prose max-w-none text-gray-700 leading-relaxed font-body flex flex-col gap-4">
        <p>
          SD Negeri Parang 5 Magetan secara resmi membuka pendaftaran Penerimaan Peserta Didik Baru (PPDB)
          untuk tahun ajaran 2026/2027. Sebagai salah satu sekolah dasar unggulan berkarakter di Kecamatan
          Parang, kami mengundang para orang tua wali murid untuk menitipkan pembinaan dasar putra-putrinya
          kepada kami.
        </p>
        <h2 className="text-xl font-bold text-navy mt-4 font-heading">Jadwal & Waktu Pendaftaran</h2>
        <p>
          Pendaftaran gelombang utama dibuka mulai bulan Mei hingga Juli secara langsung dengan mengunjungi
          kantor panitia PPDB di sekolah dasar. Layanan pendaftaran buka setiap hari Senin s.d. Sabtu mulai
          pukul 08.00 s.d. 12.00 WIB.
        </p>
        <h2 className="text-xl font-bold text-navy mt-4 font-heading">Dokumen Persyaratan Masuk</h2>
        <ol className="list-decimal pl-6 flex flex-col gap-2">
          <li>Fotokopi Akta Kelahiran calon siswa (1 lembar)</li>
          <li>Fotokopi Kartu Keluarga (KK) orang tua (1 lembar)</li>
          <li>Fotokopi KTP kedua orang tua/wali murid</li>
          <li>Pas foto berwarna ukuran 3x4 (2 lembar)</li>
        </ol>
        <p className="mt-2">
          Untuk informasi koordinasi pendaftaran lebih lanjut, orang tua dapat menghubungi layanan klik-ke-WhatsApp
          atau langsung berkonsultasi dengan panitia di sekolah dasar.
        </p>
      </div>
    ),
  },
  "hardiknas-2026": {
    title: "Upacara Peringatan Hari Pendidikan Nasional 2026 Khidmat",
    publishedAt: "2026-05-02T09:00:00.000Z",
    excerpt:
      "Seluruh guru, staff, dan siswa SDN Parang 5 melaksanakan upacara bendera dengan mengenakan pakaian adat Jawa Timur guna merayakan Hari Pendidikan Nasional secara khidmat.",
    bodyHtml: (
      <div className="prose max-w-none text-gray-700 leading-relaxed font-body flex flex-col gap-4">
        <p>
          Suasana semarak dan khidmat mewarnai halaman upacara SD Negeri Parang 5 Magetan dalam perayaan
          Hari Pendidikan Nasional (Hardiknas) tahun 2026. Seluruh jajaran guru, staf tata usaha, komite
          sekolah, serta siswa-siswi kelas 1 s.d. 6 mengikuti jalannya upacara bendera dengan tertib.
        </p>
        <p>
          Yang membuat upacara tahun ini terasa istimewa adalah keikutsertaan seluruh peserta dengan mengenakan
          busana adat khas daerah Jawa Timur. Kegiatan ini diselenggarakan guna memupuk rasa bangga dan
          cinta siswa terhadap khazanah kebudayaan Nusantara sejak usia dini.
        </p>
        <h2 className="text-xl font-bold text-navy mt-4 font-heading">Apresiasi Karya Kreatif Siswa</h2>
        <p>
          Seusai upacara bendera, rangkaian peringatan Hardiknas dilanjutkan dengan pembagian piagam
          apresiasi bagi siswa-siswi berprestasi yang berhasil mewakili sekolah dasar dalam ajang kompetensi
          lomba mendongeng tingkat kabupaten beberapa waktu lalu. Kepala Sekolah berpesan agar momentum
          Hardiknas memicu semangat belajar mandiri yang kreatif tanpa batas.
        </p>
      </div>
    ),
  },
};

export default async function DetailBeritaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let article = null;
  try {
    article = await client.fetch(newsBySlugQuery, { slug });
  } catch (err) {
    console.error("Error fetching news details from Sanity:", err);
  }

  // Determine if using fallback demo content
  const useFallback = !article && fallbackArticles[slug];
  const fallback = fallbackArticles[slug];

  const title = article?.title || fallback?.title || "Berita Tidak Ditemukan";
  const dateStr = article?.publishedAt || fallback?.publishedAt;
  const image = article?.mainImage;

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Breadcrumb banner */}
        <PageBanner title="Kabar Terkini" breadcrumbCurrent="Detail Berita" />

        <article className="section-padding">
          <div className="container-section max-w-3xl">
            {/* Back Button Link */}
            <Link
              href="/berita"
              className="inline-flex items-center gap-1 font-heading font-extrabold text-xs text-sky hover:text-navy transition-colors mb-6 uppercase tracking-wider"
            >
              ← Kembali ke Berita
            </Link>

            {/* Article Heading details */}
            <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 mb-8">
              <h1 className="text-2xl md:text-4xl font-extrabold font-heading text-navy leading-tight tracking-tight">
                {title}
              </h1>
              {dateStr && (
                <div className="text-xs md:text-sm text-gray-400 font-body flex items-center gap-1.5">
                  <span>📅 Dipublikasikan pada:</span>
                  <span className="font-semibold text-gray-600">
                    {new Date(dateStr).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
            </div>

            {/* Article Main Cover Photo */}
            {image && (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-gray-200 mb-8 bg-gray-50">
                <Image
                  src={urlFor(image).width(800).height(450).url()}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 800px"
                  priority
                />
              </div>
            )}

            {/* Article Body Content */}
            {useFallback ? (
              fallback.bodyHtml
            ) : article?.body ? (
              <BlockContent blocks={article.body} />
            ) : (
              <div className="text-center py-10 bg-light rounded-2xl border-2 border-dashed border-gray-300">
                <span className="text-4xl mb-2 block">🔍</span>
                <span className="font-heading font-bold text-navy">Berita Tidak Ditemukan</span>
                <p className="text-xs text-gray-400 font-body mt-2">
                  Tautan berita ini salah atau telah dihapus oleh administrator sekolah. Silakan kembali
                  ke halaman utama berita.
                </p>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
