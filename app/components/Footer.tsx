import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { schoolContactQuery } from "@/sanity/lib/queries";
import { IconMapPin, IconPhone, IconMail } from "./Icons";

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
    <footer className="bg-slate-900 text-white font-body border-t border-slate-800 relative">
      {/* Main Footer Info */}
      <div className="container-section py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Col 1: About (takes 4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3.5 group">
            <Image
              src="/images/logo.png"
              alt="Logo SDN Parang 5 Kediri"
              width={500}
              height={500}
              className="w-16 h-16 object-contain"
            />
            <span className="font-heading font-extrabold text-white tracking-tight text-xl leading-none">
              SDN Parang 5
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm mt-1">
            Mewujudkan generasi bertakwa, berkarakter, berkompeten, dan peduli
            lingkungan berlandaskan nilai kearifan lokal.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://www.youtube.com/@sdnparang5644"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center hover:bg-slate-700 hover:text-amber transition-all text-slate-300"
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
              className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center hover:bg-slate-700 hover:text-amber transition-all text-slate-300"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links (takes 3 cols) */}
        <div className="lg:col-span-3">
          <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-amber-400 mb-4">
            Jelajahi
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link href="/profil" className="text-slate-400 hover:text-white transition-colors">
                Profil Sekolah
              </Link>
            </li>
            <li>
              <Link href="/guru" className="text-slate-400 hover:text-white transition-colors">
                Direktori Guru
              </Link>
            </li>
            <li>
              <Link href="/galeri" className="text-slate-400 hover:text-white transition-colors">
                Galeri Kegiatan
              </Link>
            </li>
            <li>
              <Link href="/berita" className="text-slate-400 hover:text-white transition-colors">
                Kabar & Pengumuman
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact (takes 5 cols) */}
        <div className="lg:col-span-5">
          <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-amber-400 mb-4">
            Kontak & Alamat
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <IconMapPin size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{address}</span>
            </li>
            <li className="flex items-center gap-3">
              <IconPhone size={18} className="text-amber-400 flex-shrink-0" />
              <span>{phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <IconMail size={18} className="text-amber-400 flex-shrink-0" />
              <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800 py-6 text-xs text-slate-400 font-body">
        <div className="container-section flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>
            © {new Date().getFullYear()} SDN Parang 5 Kediri. Hak Cipta Dilindungi.
          </span>
          <span className="text-slate-400">
            Dikembangkan oleh Mahasiswa UM-BBM 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
