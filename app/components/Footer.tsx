import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { schoolContactQuery } from "@/sanity/lib/queries";

export default async function Footer() {
  let contact = null;
  try {
    contact = await client.fetch(schoolContactQuery);
  } catch (error) {
    console.error("Error fetching contact for footer:", error);
  }

  const address =
    contact?.address ||
    "Jurang Kunci, RT 23/RW 07, Desa Parang, Kecamatan Parang, Kabupaten Magetan, Jawa Timur 63371";
  const phone = contact?.phone || "-";
  const email = contact?.email || "sdnparang5x@gmail.com";

  return (
    <footer className="bg-navy text-white font-body">
      {/* Main Footer Info */}
      <div className="container-section py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Col 1: About */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-extrabold text-lg">
              P5
            </div>
            <span className="font-heading font-extrabold text-white tracking-tight text-lg sm:text-xl leading-none">
              SDN Parang 5
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mt-2">
            Mewujudkan generasi cerdas, mandiri, berkarakter mulia, dan peduli
            lingkungan berlandaskan nilai kearifan lokal.
          </p>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h3 className="font-heading font-bold text-base tracking-tight text-amber mb-4 uppercase">
            Jelajahi
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link href="/profil" className="text-gray-300 hover:text-white transition-colors">
                Profil Sekolah
              </Link>
            </li>
            <li>
              <Link href="/guru" className="text-gray-300 hover:text-white transition-colors">
                Direktori Guru
              </Link>
            </li>
            <li>
              <Link href="/galeri" className="text-gray-300 hover:text-white transition-colors">
                Galeri Kegiatan
              </Link>
            </li>
            <li>
              <Link href="/berita" className="text-gray-300 hover:text-white transition-colors">
                Kabar & Pengumuman
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div className="lg:col-span-2">
          <h3 className="font-heading font-bold text-base tracking-tight text-amber mb-4 uppercase">
            Kontak & Alamat
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-lg mt-0.5" role="img" aria-label="Alamat">📍</span>
              <span className="leading-relaxed">{address}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-lg" role="img" aria-label="Telepon">📞</span>
              <span>{phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-lg" role="img" aria-label="Email">✉️</span>
              <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                {email}
              </a>
            </li>
          </ul>
          {/* Social Media Link Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.youtube.com/@sdnegeriparang5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all text-white"
              title="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.033 0 12 0 12s0 3.967.502 5.837a3.002 3.002 0 0 0 2.11 2.107C4.482 20.455 12 20.455 12 20.455s7.518 0 9.388-.511a3.002 3.002 0 0 0 2.11-2.107c.502-1.87.502-5.837.502-5.837s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-400 font-body">
        <div className="container-section flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>
            © {new Date().getFullYear()} SDN Parang 5. Hak Cipta Dilindungi.
          </span>
          <span className="text-gray-500">
            Dikembangkan oleh Mahasiswa KKN Universitas Negeri Malang
          </span>
        </div>
      </div>
    </footer>
  );
}
