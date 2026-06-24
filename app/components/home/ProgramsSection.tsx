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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-6">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="card-shadow p-6 md:p-8 bg-white rounded-2xl border border-gray-100 flex gap-4 md:gap-6 items-start hover:border-amber/30 group"
            >
              {/* Icon Frame */}
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-sky/10 text-sky flex items-center justify-center text-2xl md:text-3xl group-hover:bg-amber/10 group-hover:text-amber transition-colors">
                <span role="img" aria-label={prog.title}>
                  {prog.icon}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="font-heading font-extrabold text-navy text-lg md:text-xl group-hover:text-navy-light transition-colors">
                  {prog.title}
                </h3>
                <p className="text-gray-600 font-body text-sm md:text-base leading-relaxed">
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
