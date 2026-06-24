import React from "react";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  breadcrumbCurrent: string;
}

export default function PageBanner({ title, breadcrumbCurrent }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden hero-gradient py-12 md:py-20 text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-16 -translate-y-16 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber/20 rounded-full -translate-x-16 translate-y-16 blur-xl" />
      
      <div className="container-section relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {title}
            </h1>
          </div>
          <nav className="flex items-center gap-2 text-xs md:text-sm font-medium font-body bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full w-fit">
            <Link href="/" className="hover:text-amber-light transition-colors text-white/95">
              Beranda
            </Link>
            <span className="text-white/40 font-bold">/</span>
            <span className="text-amber-light font-semibold">{breadcrumbCurrent}</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
