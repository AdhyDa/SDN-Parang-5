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
    "Selamat datang di website resmi SD Negeri Parang 5 Magetan. Kami berkomitmen menyelenggarakan pendidikan berkualitas ramah anak demi mendukung pertumbuhan karakter unggul sejak dini.";

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky/10 rounded-full blur-3xl -translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/10 rounded-full blur-3xl translate-x-20 translate-y-20" />

      <div className="container-section relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left animate-slide-in-left">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-navy/5 text-navy font-heading font-extrabold text-xs tracking-wider uppercase">
            🏫 Sekolah Dasar Negeri Unggulan
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-navy leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 font-body leading-relaxed max-w-xl">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4 mt-2 w-full sm:w-auto">
            <a href="#program-unggulan" className="btn-primary w-full sm:w-auto">
              Jelajahi Program
            </a>
            <Link href="/profil" className="btn-secondary w-full sm:w-auto">
              Tentang Sekolah
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Image Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-in-right">
          <div className="relative w-full max-w-[450px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            {data?.heroImage ? (
              <Image
                src={urlFor(data.heroImage).width(800).height(600).url()}
                alt="SDN Parang 5 Magetan"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-w-768px) 100vw, 450px"
              />
            ) : (
              <div className="w-full h-full hero-gradient flex flex-col items-center justify-center p-8 text-center text-white">
                <span className="text-6xl mb-4" role="img" aria-label="Sekolah">🏫</span>
                <span className="font-heading font-bold text-lg">
                  SDN Parang 5 Magetan
                </span>
                <span className="text-xs text-white/70 mt-1">
                  Membangun Generasi Cerdas & Kreatif
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
