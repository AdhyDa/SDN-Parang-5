"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  // Monitor scrolling to change header transparency/styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-4 border-b border-gray-100"
      }`}
    >
      <div className="container-section flex items-center justify-between">
        {/* Logo and branding */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-navy to-sky flex items-center justify-center text-white font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform">
            P5
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-navy tracking-tight text-base sm:text-lg leading-none">
              SDN Parang 5
            </span>
            <span className="text-[10px] text-gray-500 font-body font-medium mt-0.5 tracking-wider uppercase">
              Magetan, Jawa Timur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-heading font-semibold text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-navy text-white shadow-sm"
                    : "text-gray-600 hover:text-navy hover:bg-light"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/kontak"
            className="ml-2 bg-amber text-gray-900 font-heading font-bold text-xs px-5 py-2.5 rounded-full transition-all hover:bg-amber-dark hover:shadow-lg hover:shadow-amber/20 hover:-translate-y-0.5"
          >
            Hubungi Kami
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-light focus:outline-none focus:ring-2 focus:ring-navy/20"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
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

      {/* Mobile drawer panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          isOpen ? "max-h-screen py-4 shadow-inner" : "max-h-0 py-0"
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
                    ? "bg-navy text-white"
                    : "text-gray-600 hover:text-navy hover:bg-light"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/kontak"
            className="mt-3 text-center bg-amber text-gray-900 font-heading font-bold text-sm py-3 rounded-xl transition-all hover:bg-amber-dark"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </header>
  );
}
