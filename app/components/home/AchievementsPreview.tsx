import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import SectionHeading from "../SectionHeading";

interface Achievement {
  _id: string;
  title: string;
  winner: string;
  date?: string;
  image?: any;
}

interface AchievementsPreviewProps {
  achievements: Achievement[];
}

export default function AchievementsPreview({ achievements }: AchievementsPreviewProps) {
  // If achievements are empty, use high-quality school fallbacks
  const displayedAchievements =
    achievements.length > 0
      ? achievements
      : [
          {
            _id: "demo-1",
            title: "Juara 1 FLS3N Cabang Dongeng Tingkat Kabupaten",
            winner: "Perwakilan Siswa SDN Parang 5",
            date: "2026-05-15",
          },
          {
            _id: "demo-2",
            title: "Finalis Lomba Bertutur SD/MI Tingkat Kabupaten Magetan",
            winner: "Siswa Berbakat SDN Parang 5",
            date: "2026-06-02",
          },
          {
            _id: "demo-3",
            title: "Sekolah Dasar Bersih dan Sehat Harapan I",
            winner: "Komunitas Sekolah SDN Parang 5",
            date: "2025-11-20",
          },
        ];

  return (
    <section className="section-padding bg-light">
      <div className="container-section">
        {/* Header container for title and "See All" desktop button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div className="flex-1">
            <SectionHeading
              title="Prestasi & Kebanggaan Kami"
              subtitle="Sosial Proof"
              centered={false}
            />
          </div>
          <Link
            href="/galeri"
            className="hidden md:inline-flex items-center gap-1.5 font-heading font-extrabold text-navy hover:text-navy-light transition-colors text-sm"
          >
            Lihat Semua Galeri & Prestasi
            <span>→</span>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedAchievements.map((ach) => (
            <div
              key={ach._id}
              className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col group h-full"
            >
              {/* Photo Area */}
              <div className="relative w-full aspect-video overflow-hidden bg-gray-100 flex-shrink-0">
                {ach.image ? (
                  <Image
                    src={urlFor(ach.image).width(600).height(400).url()}
                    alt={ach.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-768px) 100vw, 400px"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-navy to-sky flex items-center justify-center p-6 text-white text-center">
                    <span className="text-4xl filter drop-shadow-md" role="img" aria-label="Piala">🏆</span>
                  </div>
                )}
                {/* Winner badge overlay */}
                <div className="absolute top-4 left-4 bg-amber text-gray-900 text-[10px] font-heading font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-md z-10">
                  🏆 Juara
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-extrabold text-navy text-base md:text-lg leading-snug group-hover:text-navy-light transition-colors line-clamp-2">
                    {ach.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 font-body">
                    Oleh: <span className="font-semibold text-gray-700">{ach.winner}</span>
                  </p>
                </div>
                {ach.date && (
                  <div className="text-[11px] text-gray-400 font-body flex items-center gap-1">
                    <span>📅</span>
                    <span>{new Date(ach.date).toLocaleDateString("id-ID", { year: "numeric", month: "long" })}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile fallback button */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/galeri" className="btn-secondary w-full">
            Lihat Semua Prestasi
          </Link>
        </div>
      </div>
    </section>
  );
}
