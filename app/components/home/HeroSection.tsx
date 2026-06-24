import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

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
    <section className="relative overflow-hidden bg-white py-12 md:py-24">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky/10 rounded-full blur-3xl -translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/10 rounded-full blur-3xl translate-x-20 translate-y-20" />

      <div className="container-section relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5 text-left animate-slide-in-left">
          {/* Accent Badge/Tag */}
          <div className="inline-flex items-center gap-2 bg-navy/5 text-navy-light border border-navy/10 px-3.5 py-1.5 rounded-full text-xs font-bold font-heading tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            Sekolah Karakter & Lingkungan
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-heading text-navy leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 font-body leading-relaxed max-w-xl">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4 mt-3 w-full sm:w-auto">
            <a href="#program-unggulan" className="btn-primary w-full sm:w-auto shadow-md shadow-amber/20 hover:shadow-lg hover:shadow-amber/35 hover:-translate-y-0.5 transition-all duration-300">
              Jelajahi Program
            </a>
            <Link href="/profil" className="btn-secondary w-full sm:w-auto hover:bg-navy/5 hover:-translate-y-0.5 transition-all duration-300">
              Tentang Sekolah
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Image Frame with 3D Layered Cards */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-in-right">
          <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-square md:aspect-[4/3]">
            {/* Back Accent Card 1: Navy */}
            <div className="absolute inset-0 bg-navy/10 rounded-3xl -rotate-3 translate-x-[-8px] translate-y-[-8px] transition-transform duration-500 hover:rotate-[-1deg]" />
            {/* Back Accent Card 2: Amber */}
            <div className="absolute inset-0 bg-amber rounded-3xl rotate-3 translate-x-[8px] translate-y-[8px] opacity-90 transition-transform duration-500 hover:rotate-[1deg]" />
            
            {/* Main Photo Card */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer z-10">
              {data?.heroImage ? (
                <Image
                  src={urlFor(data.heroImage).width(800).height(600).url()}
                  alt="SDN Parang 5 Kediri"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 420px"
                />
              ) : (
                <Image
                  src="/images/hero-fallback.png"
                  alt="SDN Parang 5 Kediri Fallback"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 420px"
                />
              )}
              {/* Bottom soft gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md shadow-lg py-1.5 px-4 rounded-xl border border-gray-100 flex items-center gap-1.5 z-10 transition-transform hover:scale-105">
                <span className="text-base" role="img" aria-label="Bintang">⭐</span>
                <span className="font-heading font-extrabold text-navy text-[10px] uppercase tracking-wider">
                  Akreditasi B
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
