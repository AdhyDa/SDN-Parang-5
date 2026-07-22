import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { IconSparkles, IconArrowRight, IconStar } from "../Icons";

interface HeroSectionProps {
  data: {
    heroTitle?: string;
    heroSubtitle?: string;
    heroImage?: any;
  } | null;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const title =
    data?.heroTitle ||
    "Membangun Generasi Cerdas, Berkarakter, & Peduli Lingkungan";
  const subtitle =
    data?.heroSubtitle ||
    "Selamat datang di website resmi SD Negeri Parang 5 Kediri. Kami berkomitmen menyelenggarakan pendidikan berkualitas ramah anak demi mendukung pertumbuhan karakter unggul sejak dini.";

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-12 bg-mesh-glow">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="container-section relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Text */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-100/90 text-slate-800 border border-slate-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold font-heading tracking-wide shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Sekolah Karakter & Lingkungan</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 leading-[1.12] tracking-tight">
            {title}
          </h1>

          <p className="text-base md:text-lg text-slate-600 font-body leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mt-2 w-full sm:w-auto">
            <a href="#program-unggulan" className="btn-amber w-full sm:w-auto text-sm py-3 px-6 rounded-xl flex items-center justify-center gap-2">
              <span>Jelajahi Program</span>
              <IconArrowRight size={16} />
            </a>
            <Link href="/profil" className="btn-secondary w-full sm:w-auto text-sm py-3 px-6 rounded-xl flex items-center justify-center">
              Tentang Sekolah
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-square">
            {/* Ambient Background Glow Frame */}
            <div className="absolute inset-0 bg-slate-900/5 rounded-3xl -rotate-2 translate-x-[-6px] translate-y-[-6px]" />
            <div className="absolute inset-0 bg-amber-500/10 rounded-3xl rotate-2 translate-x-[6px] translate-y-[6px]" />

            {/* Main Photo Card */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden card-subtle border-2 border-white shadow-xl group cursor-pointer z-10 bg-slate-100">
              {data?.heroImage ? (
                <Image
                  src={urlFor(data.heroImage).width(800).height(600).url()}
                  alt="SDN Parang 5 Kediri"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-w-768px) 100vw, 420px"
                />
              ) : (
                <Image
                  src="/images/hero.jpeg"
                  alt="SDN Parang 5 Kediri"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-w-768px) 100vw, 420px"
                />
              )}

              {/* Bottom Soft Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md shadow-md py-2 px-4 rounded-2xl border border-slate-200/80 flex items-center gap-2 z-10">
                <IconStar size={16} className="text-amber-500 fill-amber-500" />
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-slate-900 text-xs tracking-wider uppercase">
                    Akreditasi B
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold">Resmi Kemendikbud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
