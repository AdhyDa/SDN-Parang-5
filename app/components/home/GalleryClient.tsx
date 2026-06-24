"use client";

import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PageBanner from "@/app/components/PageBanner";

interface GalleryItem {
  _id: string;
  caption: string;
  category: string;
  image: any;
}

interface GalleryClientProps {
  gallery: GalleryItem[];
}

const categories = [
  { label: "Semua", value: "all" },
  { label: "Kegiatan Belajar", value: "belajar" },
  { label: "Ekstrakurikuler", value: "ekskul" },
  { label: "Fasilitas & Lingkungan", value: "fasilitas" },
];

export default function GalleryClient({ gallery }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  // Fallbacks if CMS gallery is empty
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

  // Filter logic
  const filteredGallery =
    activeCategory === "all"
      ? displayedGallery
      : displayedGallery.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Page Banner */}
        <PageBanner title="Galeri Dokumentasi" breadcrumbCurrent="Galeri" />

        {/* Filter Section */}
        <section className="pt-12 pb-6">
          <div className="container-section flex flex-col items-center gap-6">
            <div className="text-center max-w-xl">
              <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-amber mb-2 block">
                Visual Dokumentasi
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-navy mb-3">
                Album Kegiatan & Fasilitas Sekolah
              </h2>
              <p className="text-gray-500 font-body text-sm leading-relaxed">
                Dokumentasi foto kegiatan belajar mengajar, upacara bendera, prestasi perlombaan,
                serta keasrian lingkungan sarana prasarana sekolah.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2.5 mt-2 max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`font-heading font-bold text-xs md:text-sm px-5 py-2.5 rounded-full transition-all cursor-pointer ${
                    activeCategory === cat.value
                      ? "bg-amber text-gray-900 shadow-md shadow-amber/20"
                      : "bg-light text-gray-600 border border-gray-100 hover:border-gray-300"
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
                className="relative aspect-video sm:aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all border border-gray-100 bg-gray-50 group cursor-pointer"
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
                  <div className="w-full h-full bg-gradient-to-tr from-navy/5 to-sky/10 flex flex-col items-center justify-center p-6 text-center text-navy/40">
                    <span className="text-4xl mb-2" role="img" aria-label="Kamera">📸</span>
                    <span className="font-heading font-extrabold text-[10px] uppercase tracking-wider">
                      {photo.category}
                    </span>
                  </div>
                )}

                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-5 pointer-events-none">
                  <div className="flex flex-col gap-1 text-white">
                    <span className="text-[9px] font-heading font-extrabold uppercase tracking-widest text-amber-light">
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

        {/* Premium Lightbox Modal */}
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out animate-fade-in-up"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 cursor-pointer font-bold"
                aria-label="Tutup modal"
              >
                ✕
              </button>

              {/* Photo Area */}
              <div className="relative aspect-video w-full bg-gray-900">
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
                  <div className="w-full h-full bg-gradient-to-tr from-navy to-sky flex items-center justify-center text-white text-5xl">
                    📸
                  </div>
                )}
              </div>

              {/* Text detail bar */}
              <div className="p-5 md:p-6 bg-white flex flex-col gap-1">
                <span className="font-heading font-extrabold text-[10px] text-amber uppercase tracking-wider">
                  Kategori: {selectedPhoto.category}
                </span>
                <p className="font-body text-sm md:text-base text-gray-700 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
