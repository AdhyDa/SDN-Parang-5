import React from "react";
import { client } from "@/sanity/lib/client";
import { schoolContactQuery, pageContactQuery } from "@/sanity/lib/queries";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import { IconSparkles, IconMapPin, IconPhone, IconMail, IconWhatsApp, IconStar } from "../components/Icons";

export const revalidate = 60;

export default async function KontakPage() {
  let contact = null;
  let contactIntro = null;
  try {
    const [contactRes, introRes] = await Promise.all([
      client.fetch(schoolContactQuery),
      client.fetch(pageContactQuery)
    ]);
    contact = contactRes;
    contactIntro = introRes;
  } catch (error) {
    console.error("Error fetching contact for KontakPage:", error);
  }

  const address =
    contact?.address ||
    "Dsn. Bulakdawung, Desa Parang, Kecamatan Banyakan, Kabupaten Kediri, Jawa Timur";
  const phone = contact?.phone || "-";
  const email = contact?.email || "sdn.parang.v@gmail.com";

  const waCleanNumber = phone.replace(/[^0-9]/g, "");
  const waUrl = waCleanNumber
    ? `https://wa.me/${waCleanNumber}`
    : "https://wa.me/628123456789";

  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50">
        {/* Page Banner */}
        <PageBanner 
          title={contactIntro?.bannerTitle || "Hubungi Kami"} 
          breadcrumbCurrent={contactIntro?.breadcrumbCurrent || "Kontak"} 
        />

        {/* Info Grid & Interactive Map */}
        <section className="section-padding">
          <div className="container-section grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Details */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8 card-subtle p-6 md:p-8 bg-white">
              <div className="flex flex-col gap-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-heading uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/80 w-fit">
                  <IconSparkles size={14} />
                  <span>{contactIntro?.introBadge || "Informasi Kontak"}</span>
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 -mt-2">
                  {contactIntro?.introTitle || "Mari Jalin Hubungan Baik"}
                </h2>
                <p className="text-slate-600 font-body text-sm leading-relaxed">
                  {contactIntro?.introDescription || "Kami membuka pintu komunikasi selebar-lebarnya bagi wali murid, calon pendaftar PPDB, maupun instansi mitra untuk koordinasi administrasi pendidikan."}
                </p>

                {/* Items */}
                <div className="flex flex-col gap-5 mt-1 border-t border-slate-100 pt-5">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center flex-shrink-0">
                      <IconMapPin size={20} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wide">
                        Alamat Fisik Sekolah
                      </span>
                      <span className="text-slate-600 font-body text-sm leading-relaxed">
                        {address}
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                      <IconPhone size={20} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wide">
                        Telepon Resmi
                      </span>
                      {phone !== "-" ? (
                        <a href={`tel:${phone}`} className="text-slate-700 font-body text-sm hover:text-amber transition-colors font-semibold">
                          {phone}
                        </a>
                      ) : (
                        <span className="text-slate-400 font-body text-sm">Belum terdaftar</span>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center justify-center flex-shrink-0">
                      <IconMail size={20} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wide">
                        Email Resmi Sekolah
                      </span>
                      <a href={`mailto:${email}`} className="text-slate-700 font-body text-sm hover:text-amber transition-colors font-semibold">
                        {email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-xs"
                >
                  <IconWhatsApp size={18} className="text-white fill-current" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/GKCb9VPD5dAKJXin8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-3 px-5 rounded-xl flex items-center justify-center gap-2"
                >
                  <IconMapPin size={16} />
                  <span>Buka Peta</span>
                </a>
                <a href={`mailto:${email}`} className="btn-secondary text-xs py-3 px-5 rounded-xl text-center">
                  <IconMail size={16} />
                  <span>Kirim Email</span>
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Embed (takes 7 cols on lg) */}
            <div className="lg:col-span-7 relative min-h-[400px] rounded-2xl overflow-hidden card-subtle bg-slate-100 flex items-center justify-center border border-slate-200/80">
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
        </section>

        {/* Section 2: Informasi Tambahan */}
        <section className="section-padding bg-white border-t border-slate-200/60">
          <div className="container-section max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Jam Operasional */}
            <div className="card-subtle p-6 bg-slate-50 flex flex-col gap-2 items-center">
              <div className="w-10 h-10 rounded-xl bg-slate-200/60 flex items-center justify-center text-slate-700 font-bold mb-1">
                ⏰
              </div>
              <span className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wide">
                Jam Kerja
              </span>
              <p className="text-slate-600 font-body text-xs md:text-sm mt-1 leading-relaxed whitespace-pre-line">
                {contact?.workingHours || "Senin - Sabtu: 07.00 - 13.00 WIB\nMinggu & Libur: Tutup"}
              </p>
            </div>

            {/* Identitas Kelembagaan */}
            <div className="card-subtle p-6 bg-slate-50 flex flex-col gap-2 items-center">
              <div className="w-10 h-10 rounded-xl bg-slate-200/60 flex items-center justify-center text-slate-700 font-bold mb-1">
                🆔
              </div>
              <span className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wide">
                Identitas Sekolah
              </span>
              <p className="text-slate-600 font-body text-xs md:text-sm mt-1 leading-relaxed">
                NPSN: {contact?.npsn || "20554546"}
                <br />
                Status: {contact?.schoolStatus || "Sekolah Dasar Negeri (SDN)"}
              </p>
            </div>

            {/* Akreditasi */}
            <div className="card-subtle p-6 bg-slate-50 flex flex-col gap-2 items-center">
              <div className="w-10 h-10 rounded-xl bg-slate-200/60 flex items-center justify-center text-amber-600 mb-1">
                <IconStar size={20} className="fill-amber-500" />
              </div>
              <span className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wide">
                Akreditasi
              </span>
              <p className="text-slate-600 font-body text-xs md:text-sm mt-1 leading-relaxed">
                Akreditasi: {contact?.accreditation || "B"}
                <br />
                Kurikulum: {contact?.curriculum || "Kurikulum Merdeka"}
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
  description: "Hubungi panitia PPDB, kepala sekolah, atau temukan lokasi fisik interaktif SD Negeri Parang 5 Kediri.",
};
