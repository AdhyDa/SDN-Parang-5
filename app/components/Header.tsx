"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconPhone } from "./Icons";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Guru", href: "/guru" },
  { label: "Galeri", href: "/galeri" },
  { label: "Berita", href: "/berita" },
  { label: "Kontak", href: "/kontak" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Monitor scrolling to adjust floating styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
          : "bg-white/70 backdrop-blur-md border-b border-slate-200/40 py-2"
      }`}
    >
      <div className="container-section flex items-center justify-between">
        {/* Logo and Branding with Official School Emblem */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <Image
            src="/images/logo.png"
            alt="Logo SDN Parang 5 Kediri"
            width={500}
            height={500}
            className="w-16 h-16 object-contain transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-slate-900 group-hover:text-amber transition-colors duration-300 tracking-tight text-base sm:text-lg leading-tight">
              SDN Parang 5
            </span>
            <span className="text-[10px] text-slate-500 font-body font-semibold tracking-wider uppercase">
              Kediri, Jawa Timur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 backdrop-blur-xs">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-heading text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white text-slate-900 shadow-xs border border-slate-200/60"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/kontak"
            className="btn-primary py-2 px-4 text-xs font-semibold rounded-full flex items-center gap-2"
          >
            <IconPhone size={14} />
            <span>Hubungi Kami</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors border border-slate-200/50"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 ${
          isOpen ? "max-h-96 py-4 opacity-100 shadow-lg" : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-section flex flex-col gap-1 px-4">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-heading font-semibold text-sm px-4 py-3 rounded-xl transition-colors ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/kontak"
            className="mt-2 text-center btn-amber py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
          >
            <IconPhone size={16} />
            <span>Hubungi Kami</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
