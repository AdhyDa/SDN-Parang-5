import React from "react";
import SectionHeading from "../SectionHeading";
import { IconBookOpen, IconHeartHandshake, IconLeaf, IconMonitor } from "../Icons";

interface ProgramItem {
  icon: string;
  title: string;
  desc: string;
}

interface ProgramsSectionProps {
  data?: {
    title?: string;
    subtitle?: string;
    programs?: ProgramItem[];
  } | null;
}

const defaultPrograms: ProgramItem[] = [
  {
    icon: "literasi",
    title: "Program Literasi",
    desc: "Menumbuhkan minat baca dan budaya literasi sejak dini melalui kegiatan membaca harian 15 menit sebelum kelas, serta pengelolaan perpustakaan sekolah yang aktif dan ramah anak.",
  },
  {
    icon: "karakter",
    title: "Pendidikan Karakter",
    desc: "Membentuk pribadi siswa yang berakhlak mulia, disiplin, jujur, dan bertanggung jawab melalui pembiasaan ibadah bersama, gotong royong, dan penerapan 5S (Senyum, Sapa, Salam, Sopan, Santun).",
  },
  {
    icon: "lingkungan",
    title: "Sekolah Berwawasan Lingkungan",
    desc: "Menanamkan kepedulian terhadap lingkungan melalui program pemeliharaan taman sekolah, kerja bakti berkala, pemilahan sampah, dan pengenalan cinta keanekaragaman hayati sejak dini.",
  },
  {
    icon: "teknologi",
    title: "Pengenalan Teknologi & Digital",
    desc: "Memperkenalkan dasar-dasar pemanfaatan komputer secara positif dan bijak untuk mendukung kreativitas serta melatih adaptasi teknologi siswa di era digital.",
  },
];

export default function ProgramsSection({ data }: ProgramsSectionProps) {
  const sectionTitle = data?.title || "Program Unggulan Pembentukan Karakter";
  const sectionSubtitle = data?.subtitle || "Nilai Unggul";
  const programsList = data?.programs || defaultPrograms;

  const renderIcon = (iconStr: string, idx: number) => {
    if (iconStr.includes("book") || iconStr.includes("literasi") || idx === 0) {
      return <IconBookOpen size={24} className="text-blue-600" />;
    }
    if (iconStr.includes("karakter") || iconStr.includes("heart") || idx === 1) {
      return <IconHeartHandshake size={24} className="text-amber-600" />;
    }
    if (iconStr.includes("lingkungan") || iconStr.includes("leaf") || idx === 2) {
      return <IconLeaf size={24} className="text-emerald-600" />;
    }
    return <IconMonitor size={24} className="text-indigo-600" />;
  };

  return (
    <section id="program-unggulan" className="section-padding bg-slate-50 border-t border-slate-200/60 scroll-mt-20">
      <div className="container-section">
        {/* Section Title */}
        <SectionHeading
          title={sectionTitle}
          subtitle={sectionSubtitle}
          centered={true}
        />

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6">
          {programsList.map((prog, idx) => (
            <div
              key={idx}
              className="card-subtle p-7 md:p-8 flex gap-6 items-start group hover:border-slate-300"
            >
              {/* Icon Frame */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {renderIcon(prog.icon, idx)}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2.5">
                <h3 className="font-heading font-extrabold text-slate-900 text-lg md:text-xl group-hover:text-amber transition-colors">
                  {prog.title}
                </h3>
                <p className="text-slate-600 font-body text-sm md:text-base leading-relaxed text-justify">
                  {prog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
