import React from "react";
import { client } from "@/sanity/lib/client";
import { allGalleryQuery } from "@/sanity/lib/queries";
import GalleryClient from "../components/home/GalleryClient";

export const revalidate = 60;

export default async function GaleriPage() {
  let gallery = [];
  try {
    gallery = await client.fetch(allGalleryQuery);
  } catch (error) {
    console.error("Error fetching gallery photos from Sanity:", error);
  }

  return <GalleryClient gallery={gallery || []} />;
}
export const metadata = {
  title: "Galeri Kegiatan",
  description: "Album dokumentasi kegiatan belajar mengajar, sarana prasarana, dan prestasi siswa di SD Negeri Parang 5 Kediri.",
};
