import React from "react";
import { client } from "@/sanity/lib/client";
import { schoolContactQuery } from "@/sanity/lib/queries";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";

export const revalidate = 60;

export default async function KontakPage() {
  let contact = null;
  try {
    contact = await client.fetch(schoolContactQuery);
  } catch (error) {
    console.error("Error fetching contact for KontakPage:", error);
  }

  const address =
    contact?.address ||
    "Jurang Kunci, RT 23/RW 07, Desa Parang, Kecamatan Parang, Kabupaten Magetan, Jawa Timur 63371";
  const phone = contact?.phone || "-";
  const email = contact?.email || "sdnparang5x@gmail.com";

  // Clean WhatsApp number
  const waCleanNumber = phone.replace(/[^0-9]/g, "");
  const waUrl = waCleanNumber
    ? `https://wa.me/${waCleanNumber}`
    : "https://wa.me/628123456789"; // demo WA fallback

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Page Banner */}
        <PageBanner title="Hubungi Kami" breadcrumbCurrent="Kontak" />

        {/* Info Grid & Interactive Map */}
        <section className="section-padding">
          <div className="container-section grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: Details */}
            <div className="lg:col-span-5 flex flex-col gap-8 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm justify-between">
              <div className="flex flex-col gap-6">
                <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-amber">
                  Informasi Kontak
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-navy -mt-3">
                  Mari Jalin Hubungan Baik
                </h2>
                <p className="text-gray-500 font-body text-sm leading-relaxed">
                  Kami membuka pintu komunikasi selebar-lebarnya bagi wali murid, calon pendaftar PPDB,
                  maupun instansi mitra untuk koordinasi administrasi pendidikan.
                </p>

                {/* Items */}
                <div className="flex flex-col gap-5 mt-2">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky/10 text-sky flex items-center justify-center flex-shrink-0 text-lg">
                      📍
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-heading font-bold text-navy text-xs uppercase tracking-wide">
                        Alamat Fisik Sekolah
                      </span>
                      <span className="text-gray-600 font-body text-sm leading-relaxed">
                        {address}
                      </span>
                    </div>
                  </div>

                  {/* Telepon */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky/10 text-sky flex items-center justify-center flex-shrink-0 text-lg">
                      📞
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-heading font-bold text-navy text-xs uppercase tracking-wide">
                        Telepon Resmi
                      </span>
                      {phone !== "-" ? (
                        <a href={`tel:${phone}`} className="text-gray-600 font-body text-sm hover:text-sky transition-colors font-semibold">
                          {phone}
                        </a>
                      ) : (
                        <span className="text-gray-400 font-body text-sm">Belum terdaftar</span>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky/10 text-sky flex items-center justify-center flex-shrink-0 text-lg">
                      ✉️
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-heading font-bold text-navy text-xs uppercase tracking-wide">
                        Email Resmi Sekolah
                      </span>
                      <a href={`mailto:${email}`} className="text-gray-600 font-body text-sm hover:text-sky transition-colors font-semibold">
                        {email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-heading font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5"
                >
                  <span>💬</span> WhatsApp Kami
                </a>
                <a href={`mailto:${email}`} className="btn-secondary text-center">
                  Hubungi Via Email
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Interaktif (takes 7 cols on lg) */}
            <div className="lg:col-span-7 relative min-h-[400px] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-50 flex items-center justify-center">
              {contact?.mapsUrl ? (
                <iframe
                  title="Peta SDN Parang 5 Magetan"
                  src={contact.mapsUrl}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                /* Falling back to nice layout placeholder */
                <div className="flex flex-col items-center gap-3 p-8 text-center text-gray-500">
                  <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center text-navy text-3xl shadow-inner animate-bounce">
                    📍
                  </div>
                  <span className="font-heading font-extrabold text-navy text-base">
                    Peta Interaktif Lokasi Sekolah
                  </span>
                  <p className="text-xs text-gray-400 font-body max-w-xs leading-relaxed">
                    Peta interaktif Magetan segera disematkan oleh Administrator Sekolah. Alamat lengkap: RT 23/RW 07, Desa Parang, Kecamatan Parang.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 2: Informasi Tambahan */}
        <section className="section-padding bg-light">
          <div className="container-section max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Jam Operasional */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2 items-center">
              <span className="text-3xl mb-1" role="img" aria-label="Waktu">⏰</span>
              <span className="font-heading font-bold text-navy text-sm uppercase tracking-wide">
                Jam Kerja
              </span>
              <p className="text-gray-600 font-body text-xs md:text-sm mt-1 leading-relaxed">
                Senin - Sabtu: 07.00 - 13.00 WIB
                <br />
                Minggu & Hari Libur Nasional: Tutup
              </p>
            </div>

            {/* Identitas Kelembagaan */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2 items-center">
              <span className="text-3xl mb-1" role="img" aria-label="NPSN">🆔</span>
              <span className="font-heading font-bold text-navy text-sm uppercase tracking-wide">
                Identitas Sekolah
              </span>
              <p className="text-gray-600 font-body text-xs md:text-sm mt-1 leading-relaxed">
                NPSN: 20509284
                <br />
                Status: Sekolah Dasar Negeri (SDN)
              </p>
            </div>

            {/* Akreditasi */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2 items-center">
              <span className="text-3xl mb-1" role="img" aria-label="Akreditasi">⭐</span>
              <span className="font-heading font-bold text-navy text-sm uppercase tracking-wide">
                Akreditasi
              </span>
              <p className="text-gray-600 font-body text-xs md:text-sm mt-1 leading-relaxed">
                Akreditasi: B
                <br />
                Kurikulum: Kurikulum Merdeka
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Kontak & Alamat",
  description: "Hubungi panitia PPDB, kepala sekolah, atau temukan lokasi fisik interaktif SD Negeri Parang 5 Magetan.",
};
