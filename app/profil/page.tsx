import React from "react";
import { client } from "@/sanity/lib/client";
import { pageProfilQuery } from "@/sanity/lib/queries";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import BlockContent from "../components/BlockContent";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { IconBookOpen, IconSparkles, IconCheckCircle, IconSchool } from "../components/Icons";

export const revalidate = 60;

export default async function ProfilPage() {
  let profilData = null;
  try {
    profilData = await client.fetch(pageProfilQuery);
  } catch (error) {
    console.error("Error fetching profil data from Sanity CMS:", error);
  }

  const vision =
    profilData?.visiMisi?.vision ||
    "Membina akhlak meraih prestasi, berwawasan global, yang dilandasi nilai-nilai budaya luhur sesuai ajaran agama.";
  
  const defaultMission = [
    "Menanamkan keyakinan/akidah melalui pengajaran agama.",
    "Mengoptimalkan proses pembelajaran dan bimbingan.",
    "Menggunakan metode pembelajaran yang inovatif berbasis proyek dan pemanfaatan teknologi.",
    "Menciptakan komunikasi yang efektif antara guru dengan siswa, serta guru dengan orang tua.",
    "Memberikan pendampingan terhadap bakat dan minat yang dimiliki peserta didik.",
  ];

  const mission = profilData?.visiMisi?.mission || defaultMission;

  const schoolIdentityTable = [
    { label: "Nama Sekolah", value: "SDN Parang 5" },
    { label: "NPSN", value: "20554546" },
    { label: "NSS", value: "101051322019" },
    { label: "Status Sekolah", value: "Negeri" },
    { label: "Akreditasi", value: "B" },
    { label: "SK Akreditasi", value: "1346/BAN-SM/SK/2021" },
    { label: "Penerbit SK", value: "Dr. Toni Toharudin, M.Sc." },
    { label: "Alamat", value: "Dsn. Bulakdawung, Desa Parang" },
    { label: "Kecamatan / Kab.", value: "Banyakan / Kediri, Jawa Timur" },
    { label: "Luas Bangunan", value: "263 m²" },
    { label: "Luas Tanah", value: "1245 m²" },
    { label: "Status Tanah", value: "Hak Pakai" },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Page Banner */}
        <PageBanner title="Profil Sekolah" breadcrumbCurrent="Profil" />

        {/* Section 1: Identitas & Sejarah Sekolah */}
        <section className="section-padding">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Sejarah (takes 7 cols) */}
              <div className="lg:col-span-7 card-subtle p-8 md:p-10 bg-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-heading uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/80 mb-3">
                  <IconSparkles size={14} />
                  <span>{profilData?.history?.badge || "Sejarah Singkat"}</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mb-6">
                  {profilData?.history?.title || "Perjalanan SDN Parang 5 Kediri"}
                </h2>

                {profilData?.history?.history ? (
                  <BlockContent blocks={profilData.history.history} />
                ) : (
                  <div className="prose max-w-none text-slate-600 font-body leading-relaxed flex flex-col gap-4 text-justify">
                    <p>
                      SD Negeri Parang 5 didirikan secara resmi pada tanggal <strong>7 Juni 1988</strong> di
                      dusun Bulakdawung, Desa Parang, Kecamatan Banyakan, Kabupaten Kediri, Provinsi Jawa
                      Timur. Pendirian sekolah ini dilatarbelakangi oleh tingginya kebutuhan masyarakat Desa
                      Parang akan akses pendidikan dasar yang dekat, berkualitas, dan terjangkau bagi
                      anak-anak mereka.
                    </p>
                    <p>
                      Selama lebih dari tiga dekade, SDN Parang 5 telah mendidik ribuan siswa yang tumbuh
                      menjadi warga masyarakat Kediri yang berbakti dan produktif. Komitmen kami
                      terhadap peningkatan sarana pembelajaran, kompetensi pendidik, dan pembinaan karakter
                      siswa tidak pernah surut.
                    </p>
                    <p>
                      Memasuki era modern, SDN Parang 5 terus berinovasi dalam tata kelola dan pembelajaran
                      dengan menerapkan Kurikulum Merdeka yang ramah anak, fleksibel, serta berbasis proyek
                      pembentukan karakter Profil Pelajar Pancasila.
                    </p>
                  </div>
                )}
              </div>

              {/* Identitas Resmi Table Card (takes 5 cols) */}
              <div className="lg:col-span-5 card-subtle p-6 bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                  <IconSchool size={20} className="text-amber-600" />
                  <h3 className="font-heading font-extrabold text-slate-900 text-lg">
                    Identitas Resmi Sekolah
                  </h3>
                </div>

                <div className="flex flex-col divide-y divide-slate-200/70 text-xs sm:text-sm font-body">
                  {schoolIdentityTable.map((item, idx) => (
                    <div key={idx} className="py-2.5 flex justify-between gap-4">
                      <span className="font-semibold text-slate-500">{item.label}</span>
                      <span className="font-bold text-slate-900 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Visi & Misi */}
        <section className="section-padding bg-slate-50 border-y border-slate-200/60">
          <div className="container-section">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Visi (takes 5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center card-subtle p-8 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-amber-400 mb-3">
                  Visi Sekolah
                </span>
                <p className="text-slate-900 text-lg font-heading font-bold italic leading-relaxed relative z-10">
                  “{vision}”
                </p>
              </div>

              {/* Misi (takes 7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-center card-subtle p-8 bg-white">
                <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-amber-600 mb-2">
                  Misi Sekolah
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold font-heading text-slate-900 mb-6">
                  Langkah Strategis Kami
                </h3>
                <ol className="flex flex-col gap-4 font-body text-sm text-slate-700">
                  {mission.map((item: string, idx: number) => (
                    <li key={idx} className="flex gap-3.5 items-start">
                      <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-slate-900 text-white font-heading font-extrabold text-xs flex items-center justify-center shadow-xs mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="font-medium text-slate-800 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Struktur Organisasi */}
        <section className="section-padding">
          <div className="container-section">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-amber-600 mb-2 block">
                Struktur Kepengurusan
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 mb-8">
                {profilData?.structure?.title || "Bagan Organisasi Sekolah"}
              </h2>

              {profilData?.structure?.organizationStructure ? (
                <div className="relative w-full aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden card-subtle p-2 bg-white">
                  <Image
                    src={urlFor(profilData.structure.organizationStructure).width(1200).url()}
                    alt="Bagan Organisasi SDN Parang 5"
                    fill
                    className="object-contain p-4 bg-white"
                    sizes="(max-w-768px) 100vw, 800px"
                  />
                </div>
              ) : (
                <div className="card-subtle p-10 md:p-16 bg-slate-50 flex flex-col items-center gap-3 border-2 border-dashed border-slate-200">
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 mb-1">
                    <IconBookOpen size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    Bagan Struktur Organisasi
                  </h3>
                  <p className="text-xs text-slate-500 font-body max-w-md leading-relaxed">
                    Bagan kepengurusan struktural sekolah masa bakti tahun ajaran baru segera diunggah oleh
                    administrator. Hubungi Kepala Sekolah atau Tata Usaha untuk salinan fisik.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 4: Pembelajaran & Kurikulum */}
        <section className="section-padding bg-slate-50 border-t border-slate-200/60">
          <div className="container-section">
            <div className="max-w-3xl mx-auto card-subtle p-8 md:p-12 bg-white">
              <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-amber-600 mb-2 block">
                Pembelajaran
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 mb-6">
                {profilData?.kurikulum?.title || "Metode Belajar & Kurikulum"}
              </h2>

              {profilData?.kurikulum?.pembelajaran ? (
                <BlockContent blocks={profilData.kurikulum.pembelajaran} />
              ) : (
                <div className="prose max-w-none text-slate-600 font-body leading-relaxed flex flex-col gap-4">
                  <p>
                    SDN Parang 5 menerapkan <strong>Kurikulum Merdeka</strong> sebagai acuan pembelajaran nasional.
                    Kurikulum ini fokus pada kebebasan mendidik guru dan pengembangan minat/bakat alami siswa
                    secara lebih relevan dan interaktif.
                  </p>
                  <ul className="list-disc pl-6 flex flex-col gap-2 mt-2">
                    <li>
                      <strong>Pembelajaran Berdiferensiasi:</strong> Memastikan penyampaian materi disesuaikan dengan
                      gaya belajar auditori, visual, atau kinestetik anak.
                    </li>
                    <li>
                      <strong>Projek Penguatan Profil Pelajar Pancasila (P5):</strong> Melatih kreativitas, mandiri,
                      serta gotong royong anak melalui studi kasus pemecahan masalah lingkungan sekitar.
                    </li>
                    <li>
                      <strong>Evaluasi Fleksibel:</strong> Mengutamakan asesmen diagnostik awal dan penilaian portofolio
                      kegiatan praktikal daripada ujian tertulis kaku.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
