import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { allNewsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";

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
  try {
    news = await client.fetch(allNewsQuery);
  } catch (error) {
    console.error("Error fetching news from Sanity CMS:", error);
  }

  // Fallbacks if CMS is empty
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
      <main className="flex-1 bg-white">
        {/* Page Banner */}
        <PageBanner title="Berita & Artikel" breadcrumbCurrent="Berita" />

        {/* Kabar Intro */}
        <section className="pt-12 pb-6">
          <div className="container-section text-center max-w-xl">
            <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-amber mb-2 block">
              Kabar Sekolah
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-navy mb-4">
              Kabar Terbaru & Pengumuman Resmi
            </h2>
            <p className="text-gray-500 font-body text-sm leading-relaxed">
              Ikuti kabar kegiatan pembelajaran terbaru, info pengumuman akademik, PPDB, agenda kerja
              bakti, serta liputan prestasi siswa-siswi SDN Parang 5.
            </p>
          </div>
        </section>

        {/* News Feed Grid with Split Featured-List Layout */}
        <section className="pb-16 md:pb-24">
          <div className="container-section grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Featured News Card */}
            {displayedNews.length > 0 && (
              <div className="lg:col-span-7 flex flex-col">
                <span className="font-heading font-bold text-xs text-amber uppercase tracking-wider mb-3">
                  🔥 Berita Utama
                </span>
                {(() => {
                  const featured = displayedNews[0];
                  return (
                    <div className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 p-5 md:p-6 group cursor-pointer flex flex-col gap-5 h-full">
                      {/* Landscape Image */}
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
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
                          <div className="w-full h-full hero-gradient flex items-center justify-center text-white text-5xl">
                            📓
                          </div>
                        )}
                        <div className="absolute top-4 left-4 bg-navy text-white text-[10px] font-heading font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-md z-10">
                          Sorotan
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-3 flex-grow justify-between">
                        <div className="flex flex-col gap-2">
                          <span className="text-xs text-gray-400 font-body flex items-center gap-1.5">
                            <span>📅</span>
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
                            className="font-heading font-extrabold text-navy text-xl md:text-2xl group-hover:text-sky transition-colors leading-snug"
                          >
                            {featured.title}
                          </Link>
                          {featured.excerpt && (
                            <p className="text-gray-500 font-body text-sm md:text-base leading-relaxed line-clamp-3">
                              {featured.excerpt}
                            </p>
                          )}
                        </div>

                        <Link
                          href={`/berita/${featured.slug?.current || ""}`}
                          className="inline-flex items-center gap-1 font-heading font-extrabold text-sky hover:text-navy transition-colors text-sm w-fit mt-2"
                        >
                          Baca Selengkapnya
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Right Column: Supporting News List */}
            <div className="lg:col-span-5 flex flex-col">
              <span className="font-heading font-bold text-xs text-gray-500 uppercase tracking-wider mb-3">
                📰 Berita Lainnya
              </span>
              <div className="flex flex-col gap-4">
                {displayedNews.slice(1).map((item) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-xl card-shadow border border-gray-100/80 p-3 flex gap-4 items-start group cursor-pointer hover:border-amber/20 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {/* Small Square Thumbnail */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                      {item.mainImage ? (
                        <Image
                          src={urlFor(item.mainImage).width(200).height(200).url()}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="96px"
                        />
                      ) : (
                        <div className="w-full h-full hero-gradient flex items-center justify-center text-white text-3xl">
                          📓
                        </div>
                      )}
                    </div>

                    {/* Short Info */}
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <span className="text-[10px] text-gray-400 font-body">
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
                        <p className="text-xs text-gray-500 font-body line-clamp-1 leading-normal">
                          {item.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {displayedNews.length <= 1 && (
                  <div className="text-center py-10 bg-light rounded-xl border border-dashed border-gray-300 text-gray-400 text-xs">
                    Tidak ada berita tambahan saat ini.
                  </div>
                )}
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
