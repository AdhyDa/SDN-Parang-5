import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { IconNewspaper, IconImage, IconCalendar, IconArrowRight } from "../Icons";

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
              "Informasi lengkap pendaftaran siswa baru SDN Parang 5 Kediri. Hubungi panitia PPDB untuk koordinasi dokumen persyaratan masuk sekolah dasar.",
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
    <section className="section-padding bg-slate-50 border-t border-slate-200/60">
      <div className="container-section grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: News (takes 7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
            <div className="flex items-center gap-2.5">
              <IconNewspaper size={20} className="text-amber" />
              <h2 className="text-xl md:text-2xl font-extrabold font-heading text-slate-900">
                Kabar Terkini Sekolah
              </h2>
            </div>
            <Link
              href="/berita"
              className="text-xs md:text-sm font-heading font-extrabold text-blue-600 hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <span>Semua Berita</span>
              <IconArrowRight size={14} />
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {displayedNews.map((item) => (
              <div
                key={item._id}
                className="card-subtle p-4 flex gap-4 md:gap-5 items-start group cursor-pointer"
              >
                {/* News Thumbnail */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200/60">
                  {item.mainImage ? (
                    <Image
                      src={urlFor(item.mainImage).width(200).height(200).url()}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="96px"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white">
                      <IconNewspaper size={24} className="text-amber-400" />
                    </div>
                  )}
                </div>

                {/* News Text */}
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-body">
                    <IconCalendar size={12} />
                    <span>
                      {new Date(item.publishedAt).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <Link
                    href={`/berita/${item.slug?.current || ""}`}
                    className="font-heading font-bold text-slate-900 text-sm md:text-base leading-snug group-hover:text-amber transition-colors line-clamp-2"
                  >
                    {item.title}
                  </Link>
                  {item.excerpt && (
                    <p className="text-xs text-slate-500 font-body line-clamp-2 leading-relaxed mt-0.5">
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
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
            <div className="flex items-center gap-2.5">
              <IconImage size={20} className="text-amber" />
              <h2 className="text-xl md:text-2xl font-extrabold font-heading text-slate-900">
                Dokumentasi Kegiatan
              </h2>
            </div>
            <Link
              href="/galeri"
              className="text-xs md:text-sm font-heading font-extrabold text-blue-600 hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <span>Semua Foto</span>
              <IconArrowRight size={14} />
            </Link>
          </div>

          {displayedGallery.length > 0 ? (
            <div className="grid grid-cols-2 gap-3.5">
              {displayedGallery.map((item) => (
                <div
                  key={item._id}
                  className="relative aspect-square rounded-2xl overflow-hidden card-subtle group bg-slate-100"
                >
                  <Image
                    src={urlFor(item.image).width(300).height(300).url()}
                    alt={item.caption || "Dokumentasi"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-768px) 50vw, 250px"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                    <p className="text-[11px] text-white font-body line-clamp-2 leading-tight">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Fallback Grid */
            <div className="grid grid-cols-2 gap-3.5 text-center">
              <div className="aspect-square bg-white border border-slate-200/80 rounded-2xl flex flex-col items-center justify-center p-4">
                <span className="text-2xl mb-1">📖</span>
                <span className="text-xs font-heading font-bold text-slate-800">Belajar Mengajar</span>
              </div>
              <div className="aspect-square bg-white border border-slate-200/80 rounded-2xl flex flex-col items-center justify-center p-4">
                <span className="text-2xl mb-1">🎯</span>
                <span className="text-xs font-heading font-bold text-slate-800">Ekstrakurikuler</span>
              </div>
              <div className="aspect-square bg-white border border-slate-200/80 rounded-2xl flex flex-col items-center justify-center p-4">
                <span className="text-2xl mb-1">🌿</span>
                <span className="text-xs font-heading font-bold text-slate-800">Lingkungan</span>
              </div>
              <div className="aspect-square bg-white border border-slate-200/80 rounded-2xl flex flex-col items-center justify-center p-4">
                <span className="text-2xl mb-1">🏃‍♂️</span>
                <span className="text-xs font-heading font-bold text-slate-800">Aktivitas Siswa</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
