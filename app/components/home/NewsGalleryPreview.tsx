import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface NewsItem {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: any;
  excerpt?: string;
}

interface GalleryItem {
  _id: string;
  caption: string;
  category: string;
  image: any;
}

interface NewsGalleryPreviewProps {
  news: NewsItem[];
  gallery: GalleryItem[];
}

export default function NewsGalleryPreview({ news, gallery }: NewsGalleryPreviewProps) {
  // Fallbacks if data is empty
  const displayedNews =
    news.length > 0
      ? news
      : [
          {
            _id: "demo-n1",
            title: "Kegiatan KKN Universitas Negeri Malang di SDN Parang 5",
            publishedAt: "2026-06-20T12:00:00.000Z",
            slug: { current: "kegiatan-kkn-um" },
            excerpt:
              "Mahasiswa KKN Universitas Negeri Malang menggelar serangkaian program pengabdian masyarakat di SDN Parang 5 termasuk digitalisasi media promosi sekolah.",
          },
          {
            _id: "demo-n2",
            title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Pelajaran 2026/2027",
            publishedAt: "2026-04-15T08:00:00.000Z",
            slug: { current: "ppdb-2026" },
            excerpt:
              "Informasi lengkap pendaftaran siswa baru SDN Parang 5 Magetan. Hubungi panitia PPDB untuk koordinasi dokumen persyaratan masuk sekolah dasar.",
          },
          {
            _id: "demo-n3",
            title: "Peringatan Hari Pendidikan Nasional 2026: Kreatif & Berbudaya",
            publishedAt: "2026-05-02T09:00:00.000Z",
            slug: { current: "hardiknas-2026" },
            excerpt:
              "SDN Parang 5 melaksanakan upacara dan peragaan kostum kebudayaan menyambut Hardiknas 2026 sebagai pembiasaan rasa cinta tanah air.",
          },
        ];

  const displayedGallery = gallery.slice(0, 4);

  return (
    <section className="section-padding bg-white">
      <div className="container-section grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        {/* Left Column: News (takes 7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h2 className="text-xl md:text-2xl font-extrabold font-heading text-navy">
              📰 Kabar Terkini Sekolah
            </h2>
            <Link
              href="/berita"
              className="text-xs md:text-sm font-heading font-extrabold text-sky hover:text-navy transition-colors"
            >
              Lihat Semua Berita →
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            {displayedNews.map((item) => (
              <div
                key={item._id}
                className="flex gap-4 md:gap-6 items-start group hover:bg-light p-3 rounded-xl transition-all cursor-pointer border border-transparent hover:border-gray-100"
              >
                {/* News Thumbnail */}
                <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  {item.mainImage ? (
                    <Image
                      src={urlFor(item.mainImage).width(200).height(200).url()}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="112px"
                    />
                  ) : (
                    <div className="w-full h-full hero-gradient flex items-center justify-center text-white text-2xl">
                      📓
                    </div>
                  )}
                </div>

                {/* News Text */}
                <div className="flex flex-col gap-1.5 md:gap-2 flex-1 min-w-0">
                  <span className="text-[10px] md:text-xs text-gray-400 font-body">
                    📅{" "}
                    {new Date(item.publishedAt).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <Link
                    href={`/berita/${item.slug?.current || ""}`}
                    className="font-heading font-bold text-navy text-sm md:text-base leading-snug group-hover:text-sky transition-colors line-clamp-2"
                  >
                    {item.title}
                  </Link>
                  {item.excerpt && (
                    <p className="text-xs md:text-sm text-gray-500 font-body line-clamp-2 leading-relaxed">
                      {item.excerpt}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Gallery Preview (takes 5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h2 className="text-xl md:text-2xl font-extrabold font-heading text-navy">
              📸 Dokumentasi Kegiatan
            </h2>
            <Link
              href="/galeri"
              className="text-xs md:text-sm font-heading font-extrabold text-sky hover:text-navy transition-colors"
            >
              Semua Foto →
            </Link>
          </div>

          {displayedGallery.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {displayedGallery.map((item) => (
                <div
                  key={item._id}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-sm group hover:shadow-md hover:-translate-y-0.5 transition-all border border-gray-100 bg-gray-50"
                >
                  <Image
                    src={urlFor(item.image).width(300).height(300).url()}
                    alt={item.caption || "Dokumentasi"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-768px) 50vw, 250px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                    <p className="text-[10px] text-white font-body line-clamp-2 leading-normal">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Fallback Grid */
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="aspect-square bg-sky/10 text-sky rounded-xl flex flex-col items-center justify-center p-4">
                <span className="text-3xl mb-1">📖</span>
                <span className="text-[10px] font-heading font-bold">Belajar Mengajar</span>
              </div>
              <div className="aspect-square bg-amber/10 text-amber rounded-xl flex flex-col items-center justify-center p-4">
                <span className="text-3xl mb-1">🎯</span>
                <span className="text-[10px] font-heading font-bold">Ekstrakurikuler</span>
              </div>
              <div className="aspect-square bg-navy/10 text-navy rounded-xl flex flex-col items-center justify-center p-4">
                <span className="text-3xl mb-1">🌿</span>
                <span className="text-[10px] font-heading font-bold">Lingkungan</span>
              </div>
              <div className="aspect-square bg-sky/10 text-sky rounded-xl flex flex-col items-center justify-center p-4">
                <span className="text-3xl mb-1">🏃‍♂️</span>
                <span className="text-[10px] font-heading font-bold">Aktivitas Siswa</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
