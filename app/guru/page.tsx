import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { teachersQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";

export const revalidate = 60;

interface Teacher {
  _id: string;
  name: string;
  nip?: string;
  role: string;
  photo?: any;
}

export default async function GuruPage() {
  // Ubah ke true jika ingin menggunakan data dari Sanity CMS.
  // Saat ini diatur ke false agar menggunakan data lokal yang Anda perbarui di bawah.
  const useSanityCMS = false;

  let teachers: Teacher[] = [];
  if (useSanityCMS) {
    try {
      teachers = await client.fetch(teachersQuery);
    } catch (error) {
      console.error("Error fetching teachers data from Sanity CMS:", error);
    }
  }

  const localTeachers = [
    {
      _id: "t1",
      name: "Samiran, S.Pd.",
      role: "Kepala Sekolah",
      nip: "-",
      photo: "/images/principal-fallback.png",
    },
    {
      _id: "t2",
      name: "Bagus Heri Setiawan",
      role: "Guru Kelas 1",
      nip: "19860919202511113",
      photo: "/images/bagus.png",
    },
    {
      _id: "t3",
      name: "Yuningsih",
      role: "Guru Kelas 2",
      nip: "-",
      photo: "/images/yuningsih.png",
    },
    {
      _id: "t4",
      name: "Lina Rahayuningsih, S.Pd.SD",
      role: "Guru Kelas 3",
      nip: "198602252019032004",
      photo: "/images/lina.png",
    },
    {
      _id: "t5",
      name: "Erma Oktaviani Misita Putri, S.Pd.",
      role: "Guru Kelas 4",
      nip: "199610052020122014",
      photo: "/images/erma.png",
    },
    {
      _id: "t6",
      name: "Erna Sri Choirin, S.Pd.",
      role: "Guru Kelas 5",
      nip: "198504192020122003",
      photo: "/images/erna.png",
    },
    {
      _id: "t7",
      name: "Dana Sulistiyo Basuki, S.Pd.",
      role: "Guru Kelas 6",
      nip: "198405252023211013",
      photo: "/images/dana.png",
    },
    {
      _id: "t8",
      name: "Sylvina Dwi Nugrahawati, S.Pd.",
      role: "Guru Mapel PAI",
      nip: "199609112025212104",
      photo: "/images/sylvina.png",
    },
    {
      _id: "t9",
      name: "Mulyono, S.Pd.",
      role: "Guru Mapel PJOK",
      nip: "197503102010011014",
      photo: "/images/mulyono.png",
    },
  ];

  const displayedTeachers = useSanityCMS && teachers.length > 0 ? teachers : localTeachers;

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Page Title & Breadcrumbs Banner */}
        <PageBanner title="Guru & Tenaga Kependidikan" breadcrumbCurrent="Guru" />

        {/* Directory Intro Section */}
        <section className="pt-12 pb-6">
          <div className="container-section text-center max-w-2xl">
            <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-amber mb-2 block">
              Pendidik Kami
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-navy mb-4">
              Tim Pendidik & Tenaga Kependidikan
            </h2>
            <p className="text-gray-500 font-body text-sm md:text-base leading-relaxed">
              Bertemu dengan guru-guru hebat dan berdedikasi tinggi di SDN Parang 5 Kediri yang siap membina
              serta mengantarkan putra-putri Anda menuju prestasi cemerlang.
            </p>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="pb-16 md:pb-24">
          <div className="container-section grid grid-cols-2 md:grid-cols-4 gap-6">
            {displayedTeachers.map((teacher) => (
              <div
                key={teacher._id}
                className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col group"
              >
                {/* Photo container */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 flex-shrink-0">
                  {teacher.photo ? (
                    <Image
                      src={typeof teacher.photo === 'string' ? teacher.photo : urlFor(teacher.photo).width(400).height(533).url()}
                      alt={`Foto Guru ${teacher.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, 250px"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-navy/5 to-sky/10 flex flex-col items-center justify-center text-navy/40">
                      <span className="text-6xl mb-2 filter drop-shadow-sm" role="img" aria-label="Guru">👤</span>
                    </div>
                  )}
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Details Container */}
                <div className="p-5 flex flex-col gap-2 flex-grow">
                  <div className="flex flex-col">
                    <h3 className="font-heading font-extrabold text-navy text-base md:text-lg leading-tight group-hover:text-navy-light transition-colors">
                      {teacher.name}
                    </h3>
                    <span className="font-heading font-bold text-xs text-amber mt-1.5 uppercase tracking-wide">
                      {teacher.role}
                    </span>
                  </div>
                  {teacher.nip && (
                    <div className="text-[10px] text-gray-400 font-body border-t border-gray-100 pt-2.5 mt-1">
                      NIP: {teacher.nip}
                    </div>
                  )}
                </div>
              </div>
            ))} 
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
