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
              "Mahasiswa KKN dari Universitas Negeri Malang menyelenggarakan pendampingan digitalisasi profil sekolah, pendataan aset, serta pelatihan operasional web CMS bagi jajaran guru SDN Parang 5 Magetan.",
          },
          {
            _id: "demo-b2",
            title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Pelajaran 2026/2027",
            publishedAt: "2026-04-15T08:00:00.000Z",
            slug: { current: "ppdb-2026" },
            excerpt:
              "SD Negeri Parang 5 Magetan membuka pendaftaran siswa baru untuk tahun ajaran baru. Persyaratan meliputi akta kelahiran anak, kartu keluarga, serta pengisian formulir fisik di kantor Tata Usaha.",
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
              Kabar Teranyar & Pengumuman Resmi
            </h2>
            <p className="text-gray-500 font-body text-sm leading-relaxed">
              Ikuti kabar kegiatan pembelajaran terbaru, info pengumuman akademik, PPDB, agenda kerja
              bakti, serta liputan prestasi siswa-siswi SDN Parang 5.
            </p>
          </div>
        </section>

        {/* News Feed List */}
        <section className="pb-16 md:pb-24">
          <div className="container-section max-w-4xl flex flex-col gap-8 md:gap-10">
            {displayedNews.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col md:flex-row gap-6 p-4 md:p-6 group cursor-pointer"
              >
                {/* Image Frame */}
                <div className="relative w-full md:w-64 aspect-video md:aspect-square rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                  {item.mainImage ? (
                    <Image
                      src={urlFor(item.mainImage).width(400).height(400).url()}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, 250px"
                    />
                  ) : (
                    <div className="w-full h-full hero-gradient flex items-center justify-center text-white text-5xl">
                      📓
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="flex flex-col justify-between flex-grow gap-4 py-2">
                  <div className="flex flex-col gap-2.5">
                    <span className="text-xs text-gray-400 font-body flex items-center gap-1.5">
                      <span>📅</span>
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
                      className="font-heading font-extrabold text-navy text-lg md:text-xl group-hover:text-sky transition-colors leading-snug"
                    >
                      {item.title}
                    </Link>
                    {item.excerpt && (
                      <p className="text-gray-500 font-body text-sm md:text-base leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>
                    )}
                  </div>

                  <Link
                    href={`/berita/${item.slug?.current || ""}`}
                    className="inline-flex items-center gap-1 font-heading font-extrabold text-sky hover:text-navy transition-colors text-sm w-fit"
                  >
                    Baca Selengkapnya
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Berita & Pengumuman",
  description: "Pusat informasi berita, kegiatan KKN, dan pengumuman resmi PPDB SD Negeri Parang 5 Magetan.",
};
