import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import SectionHeading from "../SectionHeading";
import { IconTrophy, IconCalendar, IconArrowRight } from "../Icons";

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
            title: "Finalis Lomba Bertutur SD/MI Tingkat Kabupaten Kediri",
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
    <section className="section-padding bg-white border-t border-slate-200/60">
      <div className="container-section">
        {/* Header container for title and "See All" desktop button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div className="flex-1">
            <SectionHeading
              title="Prestasi & Kebanggaan Kami"
              subtitle="Social Proof"
              centered={false}
            />
          </div>
          <Link
            href="/galeri"
            className="hidden md:inline-flex items-center gap-2 font-heading font-extrabold text-slate-900 hover:text-amber transition-colors text-sm"
          >
            <span>Lihat Semua Galeri & Prestasi</span>
            <IconArrowRight size={16} />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedAchievements.map((ach) => (
            <div
              key={ach._id}
              className="card-subtle overflow-hidden flex flex-col group h-full"
            >
              {/* Photo Area */}
              <div className="relative w-full aspect-video overflow-hidden bg-slate-100 flex-shrink-0">
                {ach.image ? (
                  <Image
                    src={urlFor(ach.image).width(600).height(400).url()}
                    alt={ach.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-768px) 100vw, 400px"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center p-6 text-white text-center">
                    <IconTrophy size={48} className="text-amber-400" />
                  </div>
                )}
                {/* Winner badge overlay */}
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-heading font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs z-10 flex items-center gap-1">
                  <IconTrophy size={12} />
                  <span>Juara</span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-extrabold text-slate-900 text-base md:text-lg leading-snug group-hover:text-amber transition-colors line-clamp-2">
                    {ach.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 font-body">
                    Oleh: <span className="font-semibold text-slate-700">{ach.winner}</span>
                  </p>
                </div>
                {ach.date && (
                  <div className="text-[11px] text-slate-400 font-body flex items-center gap-1.5 border-t border-slate-100 pt-3">
                    <IconCalendar size={12} className="text-slate-400" />
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
