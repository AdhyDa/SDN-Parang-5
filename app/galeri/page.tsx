import React from "react";
import { client } from "@/sanity/lib/client";
import { allGalleryQuery, pageGalleryQuery } from "@/sanity/lib/queries";
import GalleryClient from "../components/home/GalleryClient";
import Footer from "../components/Footer";

export const revalidate = 60;

export default async function GaleriPage() {
  let gallery = [];
  let galleryIntro = null;

  try {
    const [galleryRes, introRes] = await Promise.all([
      client.fetch(allGalleryQuery),
      client.fetch(pageGalleryQuery)
    ]);
    gallery = galleryRes || [];
    galleryIntro = introRes;
  } catch (error) {
    console.error("Error fetching gallery photos from Sanity:", error);
  }

  return (
    <>
      <GalleryClient gallery={gallery || []} intro={galleryIntro} />
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Galeri Kegiatan",
  description: "Album dokumentasi kegiatan belajar mengajar, sarana prasarana, dan prestasi siswa di SD Negeri Parang 5 Kediri.",
};
