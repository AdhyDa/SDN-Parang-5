import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { allNewsQuery, pageNewsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import { IconSparkles, IconNewspaper, IconCalendar, IconArrowRight } from "../components/Icons";

export const revalidate = 60;

interface NewsItem {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: any;
  excerpt?: string;
}

export default async function BeritaPage() {
  let news: NewsItem[] = [];
  let newsIntro = null;
  try {
    const [newsRes, introRes] = await Promise.all([
      client.fetch(allNewsQuery),
      client.fetch(pageNewsQuery)
    ]);
    news = newsRes || [];
    newsIntro = introRes;
  } catch (error) {
    console.error("Error fetching news from Sanity CMS:", error);
  }

  const displayedNews =
    news.length > 0
      ? news
      : [
          {
            _id: "demo-b1",
            title: "Kegiatan KKN Universitas Negeri Malang di SDN Parang 5",
            publishedAt: "2026-06-20T12:00:00.000Z",
            slug: { current: "kegiatan-kkn-um" },
            excerpt:
              "Mahasiswa KKN dari Universitas Negeri Malang menyelenggarakan pendampingan digitalisasi profil sekolah, pendataan aset, serta pelatihan operasional web CMS bagi jajaran guru SDN Parang 5 Kediri.",
          },
          {
            _id: "demo-b2",
            title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Pelajaran 2026/2027",
            publishedAt: "2026-04-15T08:00:00.000Z",
            slug: { current: "ppdb-2026" },
            excerpt:
              "SD Negeri Parang 5 Kediri membuka pendaftaran siswa baru untuk tahun ajaran baru. Persyaratan meliputi akta kelahiran anak, kartu keluarga, serta pengisian formulir fisik di kantor Tata Usaha.",
          },
          {
            _id: "demo-b3",
            title: "Upacara Peringatan Hari Pendidikan Nasional 2026 Khidmat",
            publishedAt: "2026-05-02T09:00:00.000Z",
            slug: { current: "hardiknas-2026" },
            excerpt:
              "Seluruh guru, staff, dan siswa SDN Parang 5 melaksanakan upacara bendera dengan mengenakan pakaian adat Jawa Timur guna merayakan Hari Pendidikan Nasional secara khidmat.",
          },
        ];

  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50">
        {/* Page Banner */}
        <PageBanner 
          title={newsIntro?.bannerTitle || "Berita & Artikel"} 
          breadcrumbCurrent={newsIntro?.breadcrumbCurrent || "Berita"} 
        />

        {/* Intro */}
        <section className="pt-12 pb-6">
          <div className="container-section text-center max-w-xl flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-heading uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/80 mb-3">
              <IconSparkles size={14} />
              <span>{newsIntro?.introBadge || "Kabar Sekolah"}</span>
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 mb-3">
              {newsIntro?.introTitle || "Kabar Terbaru & Pengumuman Resmi"}
            </h2>
            <p className="text-slate-600 font-body text-sm leading-relaxed">
              {newsIntro?.introDescription || "Ikuti kabar kegiatan pembelajaran terbaru, info pengumuman akademik, PPDB, agenda kerja bakti, serta liputan prestasi siswa-siswi SDN Parang 5."}
            </p>
          </div>
        </section>

        {/* News Feed Grid */}
        <section className="pb-16 md:pb-24">
          <div className="container-section grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Featured News Card */}
            {displayedNews.length > 0 && (
              <div className="lg:col-span-7 flex flex-col">
                <span className="font-heading font-bold text-xs text-amber-600 uppercase tracking-wider mb-3">
                  Sorotan Utama
                </span>
                {(() => {
                  const featured = displayedNews[0];
                  return (
                    <div className="card-subtle bg-white p-5 md:p-6 group cursor-pointer flex flex-col gap-5 h-full">
                      {/* Image */}
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                        {featured.mainImage ? (
                          <Image
                            src={urlFor(featured.mainImage).width(800).height(450).url()}
                            alt={featured.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-w-768px) 100vw, 600px"
                            priority
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white">
                            <IconNewspaper size={48} className="text-amber-400" />
                          </div>
                        )}
                        <div className="absolute top-3 left-3 bg-slate-900 text-white text-[10px] font-heading font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs z-10">
                          Berita Utama
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-3 flex-grow justify-between">
                        <div className="flex flex-col gap-2">
                          <span className="text-xs text-slate-400 font-body flex items-center gap-1.5">
                            <IconCalendar size={12} />
                            <span>
                              {new Date(featured.publishedAt).toLocaleDateString("id-ID", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </span>
                          <Link
                            href={`/berita/${featured.slug?.current || ""}`}
                            className="font-heading font-extrabold text-slate-900 text-xl md:text-2xl group-hover:text-amber transition-colors leading-snug"
                          >
                            {featured.title}
                          </Link>
                          {featured.excerpt && (
                            <p className="text-slate-600 font-body text-sm md:text-base leading-relaxed line-clamp-3">
                              {featured.excerpt}
                            </p>
                          )}
                        </div>

                        <Link
                          href={`/berita/${featured.slug?.current || ""}`}
                          className="inline-flex items-center gap-1.5 font-heading font-extrabold text-amber-600 hover:text-slate-900 transition-colors text-sm w-fit mt-2"
                        >
                          <span>Baca Selengkapnya</span>
                          <IconArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Right Column: Supporting News List */}
            <div className="lg:col-span-5 flex flex-col">
              <span className="font-heading font-bold text-xs text-slate-500 uppercase tracking-wider mb-3">
                Berita Lainnya
              </span>
              <div className="flex flex-col gap-4">
                {displayedNews.slice(1).map((item) => (
                  <div
                    key={item._id}
                    className="card-subtle bg-white p-4 flex gap-4 items-start group cursor-pointer"
                  >
                    {/* Thumbnail */}
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

                    {/* Short Info */}
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <span className="text-[11px] text-slate-400 font-body flex items-center gap-1">
                        <IconCalendar size={12} />
                        <span>
                          {new Date(item.publishedAt).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </span>
                      <Link
                        href={`/berita/${item.slug?.current || ""}`}
                        className="font-heading font-bold text-slate-900 text-sm md:text-base leading-snug group-hover:text-amber transition-colors line-clamp-2"
                      >
                        {item.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Berita & Pengumuman",
  description: "Pusat informasi berita, kegiatan KKN, dan pengumuman resmi PPDB SD Negeri Parang 5 Kediri.",
};
