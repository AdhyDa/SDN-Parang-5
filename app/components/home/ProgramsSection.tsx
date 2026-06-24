import React from "react";
import SectionHeading from "../SectionHeading";

const programs = [
  {
    icon: "📚",
    title: "Program Literasi",
    desc: "Menumbuhkan minat baca dan budaya literasi sejak dini melalui kegiatan membaca harian 15 menit sebelum kelas, serta pengelolaan perpustakaan sekolah yang aktif dan ramah anak.",
  },
  {
    icon: "💪",
    title: "Pendidikan Karakter",
    desc: "Membentuk pribadi siswa yang berakhlak mulia, disiplin, jujur, dan bertanggung jawab melalui pembiasaan ibadah bersama, gotong royong, dan penerapan 5S (Senyum, Sapa, Salam, Sopan, Santun).",
  },
  {
    icon: "🌿",
    title: "Sekolah Berwawasan Lingkungan",
    desc: "Menanamkan kepedulian terhadap lingkungan melalui program pemeliharaan taman sekolah, kerja bakti berkala, pemilahan sampah, dan pengenalan cinta keanekaragaman hayati sejak dini.",
  },
  {
    icon: "💻",
    title: "Pengenalan Teknologi & Literasi Digital",
    desc: "Memperkenalkan dasar-dasar pemanfaatan komputer secara positif dan bijak untuk mendukung kreativitas serta melatih adaptasi teknologi siswa di era digital.",
  },
];

export default function ProgramsSection() {
  return (
    <section id="program-unggulan" className="section-padding bg-white scroll-mt-20">
      <div className="container-section">
        {/* Section Title */}
        <SectionHeading
          title="Program Unggulan Pembentukan Karakter"
          subtitle="Nilai Unggul"
          centered={true}
        />

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 bg-white rounded-2xl border border-gray-100/80 flex gap-5 md:gap-6 items-start shadow-sm hover:shadow-xl hover:shadow-navy/5 hover:border-amber/30 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon Frame - Squircle with border */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-sky/5 border border-sky/10 text-sky flex items-center justify-center text-xl md:text-2xl group-hover:bg-amber/10 group-hover:border-amber/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span role="img" aria-label={prog.title}>
                  {prog.icon}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="font-heading font-extrabold text-navy text-lg md:text-xl group-hover:text-navy-light transition-colors duration-300">
                  {prog.title}
                </h3>
                <p className="text-gray-600 font-body text-sm md:text-base leading-relaxed text-justify">
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
