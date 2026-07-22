import React from "react";
import Link from "next/link";
import { IconChevronRight } from "./Icons";

interface PageBannerProps {
  title: string;
  breadcrumbCurrent: string;
}

export default function PageBanner({ title, breadcrumbCurrent }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-12 md:py-16 text-white border-b border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />

      <div className="container-section relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {title}
            </h1>
          </div>
          <nav className="flex items-center gap-2 text-xs font-medium font-body bg-slate-800/80 border border-slate-700/80 backdrop-blur-md px-3.5 py-1.5 rounded-full w-fit shadow-xs">
            <Link href="/" className="hover:text-amber-400 transition-colors text-slate-300">
              Beranda
            </Link>
            <IconChevronRight size={12} className="text-slate-500" />
            <span className="text-amber-400 font-semibold">{breadcrumbCurrent}</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
