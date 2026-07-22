import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { teachersQuery, pageGuruQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import { IconSparkles, IconUsers } from "../components/Icons";

export const revalidate = 60;

interface Teacher {
  _id: string;
  name: string;
  nip?: string;
  role: string;
  photo?: any;
}

export default async function GuruPage() {
  const useSanityCMS = true;

  let teachers: Teacher[] = [];
  let guruIntro = null;

  try {
    const [teachersRes, introRes] = await Promise.all([
      client.fetch(teachersQuery),
      client.fetch(pageGuruQuery)
    ]);
    teachers = teachersRes || [];
    guruIntro = introRes;
  } catch (error) {
    console.error("Error fetching teachers data from Sanity CMS:", error);
  }

  const localTeachers = [
    {
      _id: "t1",
      name: "Iftakhul Kusniah, S.Pd.",
      role: "Kepala Sekolah",
      nip: "-",
      photo: "/images/iftakhul.png",
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
      name: "Erna Oktaviani Misita Putri, S.Pd.",
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
      <main className="flex-1 bg-slate-50">
        {/* Page Title & Breadcrumbs Banner */}
        <PageBanner 
          title={guruIntro?.bannerTitle || "Guru & Tenaga Kependidikan"} 
          breadcrumbCurrent={guruIntro?.breadcrumbCurrent || "Guru"} 
        />

        {/* Directory Intro Section */}
        <section className="pt-12 pb-6">
          <div className="container-section text-center max-w-2xl flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-heading uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/80 mb-3">
              <IconSparkles size={14} />
              <span>{guruIntro?.introBadge || "Pendidik Kami"}</span>
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 mb-3">
              {guruIntro?.introTitle || "Tim Pendidik & Tenaga Kependidikan"}
            </h2>
            <p className="text-slate-600 font-body text-sm md:text-base leading-relaxed">
              {guruIntro?.introDescription || "Bertemu dengan guru-guru hebat dan berdedikasi tinggi di SDN Parang 5 Kediri yang siap membina serta mengantarkan putra-putri Anda menuju prestasi cemerlang."}
            </p>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="pb-16 md:pb-24">
          <div className="container-section grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {displayedTeachers.map((teacher) => (
              <div
                key={teacher._id}
                className="card-subtle bg-white overflow-hidden flex flex-col group h-full"
              >
                {/* Photo container */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-slate-100 flex-shrink-0">
                  {teacher.photo ? (
                    <Image
                      src={typeof teacher.photo === 'string' ? teacher.photo : urlFor(teacher.photo).width(400).height(533).url()}
                      alt={`Foto Guru ${teacher.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-w-768px) 50vw, 280px"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-slate-400">
                      <IconUsers size={40} className="text-slate-500" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Details Container */}
                <div className="p-4 flex flex-col justify-between flex-grow gap-2">
                  <div className="flex flex-col">
                    <h3 className="font-heading font-extrabold text-slate-900 text-sm sm:text-base leading-tight group-hover:text-amber transition-colors">
                      {teacher.name}
                    </h3>
                    <span className="font-heading font-bold text-xs text-amber-600 mt-1 uppercase tracking-wide">
                      {teacher.role}
                    </span>
                  </div>
                  {teacher.nip && teacher.nip !== "-" && (
                    <div className="text-[10px] text-slate-400 font-body border-t border-slate-100 pt-2">
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
