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
    "Dsn. Bulakdawung, Desa Parang, Kecamatan Banyakan, Kabupaten Kediri, Jawa Timur";
  const phone = contact?.phone || "-";
  const email = contact?.email || "sdn.parang.v@gmail.com";

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
              href="https://www.youtube.com/@sdnparang5644"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all text-white"
              title="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.033 0 12 0 12s0 3.967.502 5.837a3.002 3.002 0 0 0 2.11 2.107C4.482 20.455 12 20.455 12 20.455s7.518 0 9.388-.511a3.002 3.002 0 0 0 2.11-2.107c.502-1.87.502-5.837.502-5.837s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sdnegeriparang5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all text-white"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-400 md:text-gray-400 font-body">
        <div className="container-section flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>
            © {new Date().getFullYear()} SDN Parang 5. Hak Cipta Dilindungi.
          </span>
          <span className="text-gray-500 md:text-gray-400">
            Dikembangkan oleh Mahasiswa KKN Universitas Negeri Malang
          </span>
        </div>
      </div>
    </footer>
  );
}
