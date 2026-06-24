import React from "react";
import { client } from "@/sanity/lib/client";
import { pageProfilQuery } from "@/sanity/lib/queries";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import BlockContent from "../components/BlockContent";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export const revalidate = 60;

export default async function ProfilPage() {
  let profilData = null;
  try {
    profilData = await client.fetch(pageProfilQuery);
  } catch (error) {
    console.error("Error fetching profil data from Sanity CMS:", error);
  }

  // Vision / Mission fallback text
  const vision =
    profilData?.vision ||
    "Terwujudnya peserta didik yang beriman, cerdas, kreatif, berkarakter mulia, dan peduli lingkungan berlandaskan nilai kearifan lokal.";
  
  const mission = profilData?.mission || [
    "Menanamkan keimanan dan ketakwaan melalui pengamalan ajaran agama secara nyata.",
    "Mengoptimalkan proses pembelajaran yang aktif, kreatif, inovatif, menyenangkan, dan berpusat pada siswa.",
    "Membentuk karakter siswa yang disiplin, jujur, santun, bertanggung jawab, dan peduli sesama.",
    "Mengembangkan potensi minat dan bakat siswa di bidang akademik dan non-akademik.",
    "Menciptakan lingkungan sekolah yang bersih, sehat, rindang, dan ramah anak.",
  ];

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Page Title & Breadcrumbs Banner */}
        <PageBanner title="Profil Sekolah" breadcrumbCurrent="Profil" />

        {/* Section 1: Sejarah Sekolah */}
        <section className="section-padding">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <span className="font-heading font-extrabold text-xs uppercase tracking-wider text-amber mb-2 block">
                Sejarah Singkat
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-navy mb-6">
                Perjalanan SDN Parang 5 Kediri
              </h2>

              {profilData?.history ? (
                <BlockContent blocks={profilData.history} />
              ) : (
                <div className="prose max-w-none text-gray-600 font-body leading-relaxed flex flex-col gap-4 text-justify">
                  <p>
                    SD Negeri Parang 5 didirikan secara resmi pada tanggal <strong>7 Juni 1988</strong> di
                    dusun Jurang Kunci, Desa Parang, Kecamatan Parang, Kabupaten Kediri, Provinsi Jawa
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
          </div>
        </section>

        {/* Section 2: Visi & Misi */}
        <section className="section-padding bg-light">
          <div className="container-section">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Visi (takes 5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <span className="absolute top-4 left-4 text-6xl text-navy/5 font-serif select-none pointer-events-none">
                  “
                </span>
                <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-amber mb-2">
                  Visi Sekolah
                </span>
                <p className="text-navy text-lg font-heading font-bold italic leading-relaxed relative z-10">
                  {vision}
                </p>
              </div>

              {/* Misi (takes 7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-amber mb-2">
                  Misi Sekolah
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold font-heading text-navy mb-6">
                  Langkah Strategis Kami
                </h3>
                <ol className="flex flex-col gap-4 font-body text-sm md:text-base text-gray-700">
                  {mission.map((item: string, idx: number) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber text-gray-900 font-heading font-extrabold text-sm flex items-center justify-center shadow-sm">
                        {idx + 1}
                      </span>
                      <span className="mt-1 leading-relaxed">{item}</span>
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
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-amber mb-2 block">
                Struktur Kepengurusan
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-navy mb-8">
                Bagan Organisasi Sekolah
              </h2>

              {profilData?.organizationStructure ? (
                <div className="relative w-full aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-gray-200">
                  <Image
                    src={urlFor(profilData.organizationStructure).width(1200).url()}
                    alt="Bagan Organisasi SDN Parang 5"
                    fill
                    className="object-contain p-4 bg-white"
                    sizes="(max-w-768px) 100vw, 800px"
                  />
                </div>
              ) : (
                <div className="bg-light p-10 md:p-16 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center gap-3">
                  <span className="text-5xl" role="img" aria-label="Bagan">📊</span>
                  <h3 className="font-heading font-bold text-navy text-lg">
                    Bagan Struktur Organisasi
                  </h3>
                  <p className="text-xs text-gray-500 font-body max-w-md leading-relaxed">
                    Bagan kepengurusan struktural sekolah masa bakti tahun ajaran baru segera diunggah oleh
                    administrator. Hubungi Kepala Sekolah atau Tata Usaha untuk salinan fisik.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 4: Pembelajaran & Kurikulum */}
        <section className="section-padding bg-light">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-amber mb-2 block">
                Pembelajaran
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-navy mb-6">
                Metode Belajar & Kurikulum
              </h2>

              {profilData?.pembelajaran ? (
                <BlockContent blocks={profilData.pembelajaran} />
              ) : (
                <div className="prose max-w-none text-gray-600 font-body leading-relaxed flex flex-col gap-4">
                  <p>
                    SDN Parang 5 menerapkan <strong>Kurikulum Merdeka</strong> sebagai acuan pembelajaran nasional.
                    Kurikulum ini fokus pada kebebasan mendidik guru dan pengembangan minat/bakat alami siswa
                    secara lebih relevan dan interaktif.
                  </p>
                  <ul className="list-disc pl-6 flex flex-col gap-1.5 mt-2">
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

        {/* Section 5: Tata Kelola */}
        <section className="section-padding">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-amber mb-2 block">
                Tata Kelola
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-navy mb-6">
                Administrasi & Tata Kelola
              </h2>

              {profilData?.tataKelola ? (
                <BlockContent blocks={profilData.tataKelola} />
              ) : (
                <div className="prose max-w-none text-gray-600 font-body leading-relaxed">
                  <p>
                    Tata kelola administrasi di SDN Parang 5 diselenggarakan dengan mengutamakan prinsip
                    transparansi, akuntabilitas, dan efisiensi. Keterlibatan aktif Komite Sekolah dan paguyuban
                    kelas (orang tua) menjadi pilar utama kami dalam menyukseskan program-program sekolah dasar.
                  </p>
                  <p className="mt-3">
                    Setiap kebijakan anggaran operasional sekolah (BOS) dirumuskan secara terbuka dalam forum Rapat
                    Kerja Kerja Tahunan Sekolah yang melibatkan jajaran guru, kepala sekolah, komite sekolah, dan
                    perwakilan tokoh masyarakat setempat.
                  </p>
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
