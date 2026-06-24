import React from "react";
import SectionHeading from "../SectionHeading";

interface ContactMapSectionProps {
  contact: {
    address?: string;
    phone?: string;
    email?: string;
    mapsUrl?: string;
    socialMedia?: Array<{ platform: string; url: string }>;
  } | null;
}

export default function ContactMapSection({ contact }: ContactMapSectionProps) {
  const address =
    contact?.address ||
    "Jurang Kunci, RT 23/RW 07, Desa Parang, Kecamatan Parang, Kabupaten Kediri, Jawa Timur 63371";
  const phone = contact?.phone || "-";
  const email = contact?.email || "sdnparang5x@gmail.com";

  // Clean WhatsApp number
  const waCleanNumber = phone.replace(/[^0-9]/g, "");
  const waUrl = waCleanNumber
    ? `https://wa.me/${waCleanNumber}`
    : "https://wa.me/628123456789"; // demo WA fallback

  return (
    <section className="section-padding bg-light">
      <div className="container-section">
        {/* Section Title */}
        <SectionHeading title="Hubungi Kami" subtitle="Kontak & Lokasi" centered={true} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-stretch mt-6">
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex flex-col gap-6">
              <h3 className="font-heading font-extrabold text-navy text-lg md:text-xl">
                SD Negeri Parang 5 Kediri
              </h3>
              <p className="text-gray-500 font-body text-sm leading-relaxed -mt-3">
                Hubungi kami untuk informasi kegiatan sekolah, dokumentasi adminstrasi, PPDB, atau
                koordinasi kemitraan lainnya.
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
                      Alamat Sekolah
                    </span>
                    <span className="text-gray-600 font-body text-sm leading-relaxed">{address}</span>
                  </div>
                </div>

                {/* Telepon */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky/10 text-sky flex items-center justify-center flex-shrink-0 text-lg">
                    📞
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-heading font-bold text-navy text-xs uppercase tracking-wide">
                      Telepon / WhatsApp
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
                      Email Resmi
                    </span>
                    <a href={`mailto:${email}`} className="text-gray-600 font-body text-sm hover:text-sky transition-colors font-semibold">
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-heading font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5"
              >
                <span>💬</span> WhatsApp
              </a>
              <a
                href="https://maps.app.goo.gl/GKCb9VPD5dAKJXin8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 btn-secondary hover:-translate-y-0.5"
              >
                <span>📍</span> Petunjuk Arah
              </a>
              <a
                href={`mailto:${email}`}
                className="btn-secondary text-center hover:-translate-y-0.5"
              >
                Kirim Email
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (takes 7 cols on lg) */}
          <div className="lg:col-span-7 relative min-h-[350px] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-50 flex items-center justify-center">
            <iframe
              title="Peta SDN Parang 5 Kediri"
              src={contact?.mapsUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.938410288297!2d111.90787021019598!3d-7.7963458921912725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7853000b870cef%3A0x4f92966f697233df!2sSDN%20PARANG%205!5e0!3m2!1sid!2sid!4v1782276891111!5m2!1sid!2sid"}
              width="100%"
              height="100%"
              className="absolute inset-0 border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
