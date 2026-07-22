"use client";

import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/app/components/Header";
import PageBanner from "@/app/components/PageBanner";
import { IconSparkles, IconImage } from "@/app/components/Icons";

interface GalleryItem {
  _id: string;
  caption: string;
  category: string;
  image: any;
}

interface GalleryClientProps {
  gallery: GalleryItem[];
  intro?: {
    bannerTitle?: string;
    breadcrumbCurrent?: string;
    introBadge?: string;
    introTitle?: string;
    introDescription?: string;
  } | null;
}

const categories = [
  { label: "Semua", value: "all" },
  { label: "Kegiatan Belajar", value: "belajar" },
  { label: "Ekstrakurikuler", value: "ekskul" },
  { label: "Fasilitas & Lingkungan", value: "fasilitas" },
];

export default function GalleryClient({ gallery, intro }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const displayedGallery =
    gallery.length > 0
      ? gallery
      : [
          {
            _id: "g1",
            caption: "Proses Pembelajaran Aktif Berbasis Kelompok Kelas 4",
            category: "belajar",
            image: null,
          },
          {
            _id: "g2",
            caption: "Upacara Bendera Peringatan Hari Kemerdekaan RI",
            category: "belajar",
            image: null,
          },
          {
            _id: "g3",
            caption: "Kegiatan Ekstrakurikuler Pramuka Rutin Hari Sabtu",
            category: "ekskul",
            image: null,
          },
          {
            _id: "g4",
            caption: "Lomba Melukis Poster Kreativitas Anak",
            category: "ekskul",
            image: null,
          },
          {
            _id: "g5",
            caption: "Gedung Utama dan Halaman Bermain SDN Parang 5",
            category: "fasilitas",
            image: null,
          },
          {
            _id: "g6",
            caption: "Pojok Baca Ramah Anak Perpustakaan Baru",
            category: "fasilitas",
            image: null,
          },
        ];

  const filteredGallery =
    activeCategory === "all"
      ? displayedGallery
      : displayedGallery.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50">
        {/* Page Banner */}
        <PageBanner 
          title={intro?.bannerTitle || "Galeri Dokumentasi"} 
          breadcrumbCurrent={intro?.breadcrumbCurrent || "Galeri"} 
        />

        {/* Filter Section */}
        <section className="pt-12 pb-6">
          <div className="container-section flex flex-col items-center gap-6">
            <div className="text-center max-w-xl flex flex-col items-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-heading uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/80 mb-3">
                <IconSparkles size={14} />
                <span>{intro?.introBadge || "Visual Dokumentasi"}</span>
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 mb-3">
                {intro?.introTitle || "Album Kegiatan & Fasilitas Sekolah"}
              </h2>
              <p className="text-slate-600 font-body text-sm leading-relaxed">
                {intro?.introDescription || "Dokumentasi foto kegiatan belajar mengajar, upacara bendera, prestasi perlombaan, serta keasrian lingkungan sarana prasarana sekolah."}
              </p>
            </div>

            {/* Filter Tabs (shadcn style) */}
            <div className="flex flex-wrap justify-center gap-2 mt-2 p-1.5 bg-slate-200/60 rounded-full border border-slate-300/60">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`font-heading font-semibold text-xs md:text-sm px-4 py-2 rounded-full transition-all cursor-pointer ${
                    activeCategory === cat.value
                      ? "bg-white text-slate-900 shadow-xs border border-slate-200/60 font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Photo Grid */}
        <section className="pb-16 md:pb-24">
          <div className="container-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredGallery.map((photo) => (
              <div
                key={photo._id}
                onClick={() => setSelectedPhoto(photo)}
                className="relative aspect-video sm:aspect-square md:aspect-video rounded-2xl overflow-hidden card-subtle group cursor-pointer bg-slate-100"
              >
                {photo.image ? (
                  <Image
                    src={urlFor(photo.image).width(600).height(400).url()}
                    alt={photo.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-768px) 100vw, 400px"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-slate-400">
                    <IconImage size={36} className="text-amber-400 mb-2" />
                    <span className="font-heading font-extrabold text-[10px] uppercase tracking-wider text-slate-300">
                      {photo.category}
                    </span>
                  </div>
                )}

                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-5 pointer-events-none">
                  <div className="flex flex-col gap-1 text-white">
                    <span className="text-[9px] font-heading font-extrabold uppercase tracking-widest text-amber-400">
                      Kategori: {photo.category}
                    </span>
                    <p className="font-body text-xs md:text-sm leading-snug line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col cursor-default border border-slate-200/80"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 cursor-pointer font-bold transition-colors"
                aria-label="Tutup modal"
              >
                ✕
              </button>

              {/* Photo Area */}
              <div className="relative aspect-video w-full bg-slate-950">
                {selectedPhoto.image ? (
                  <Image
                    src={urlFor(selectedPhoto.image).width(1200).height(800).url()}
                    alt={selectedPhoto.caption}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white">
                    <IconImage size={64} className="text-amber-400" />
                  </div>
                )}
              </div>

              {/* Text Detail Bar */}
              <div className="p-6 bg-white flex flex-col gap-1">
                <span className="font-heading font-extrabold text-[10px] text-amber-600 uppercase tracking-wider">
                  Kategori: {selectedPhoto.category}
                </span>
                <p className="font-body text-sm md:text-base text-slate-800 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
