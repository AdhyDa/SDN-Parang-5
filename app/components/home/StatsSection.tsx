"use client";

import React, { useState, useEffect, useRef } from "react";
import { IconGraduationCap, IconUsers, IconSchool, IconStar, IconSparkles } from "../Icons";

interface StatsSectionProps {
  data: {
    statsTotalStudents?: number;
    statsTotalTeachers?: number;
    statsTotalClassrooms?: number;
    statsAccreditation?: string;
  } | null;
}

export default function StatsSection({ data }: StatsSectionProps) {
  const targetStudents = data?.statsTotalStudents || 36;
  const targetTeachers = data?.statsTotalTeachers || 8;
  const targetClassrooms = data?.statsTotalClassrooms || 6;
  const accreditation = data?.statsAccreditation || "B";

  const [students, setStudents] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [classrooms, setClassrooms] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1200;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setStudents(Math.round(targetStudents * progress));
      setTeachers(Math.round(targetTeachers * progress));
      setClassrooms(Math.round(targetClassrooms * progress));

      if (frame >= totalFrames) {
        setStudents(targetStudents);
        setTeachers(targetTeachers);
        setClassrooms(targetClassrooms);
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [hasAnimated, targetStudents, targetTeachers, targetClassrooms]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-slate-100/80 rounded-full blur-3xl pointer-events-none" />

      <div className="container-section relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-heading uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200/80 mb-3">
            <IconSparkles size={14} className="text-amber-500" />
            <span>Fakta & Statistik Sekolah</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Kualitas Pendidikan Dalam Angka
          </h2>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Card 1: Students */}
          <div className="card-subtle p-6 md:p-8 flex flex-col justify-between gap-6 group hover:border-blue-200 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/30">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <IconGraduationCap size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                Aktif
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-none block">
                {students}
              </span>
              <h3 className="text-sm font-bold font-heading text-slate-700 mt-2">
                Siswa Aktif
              </h3>
              <p className="text-xs text-slate-500 font-body mt-1 leading-normal">
                Peserta didik terdaftar dari kelas 1 sampai kelas 6.
              </p>
            </div>
          </div>

          {/* Card 2: Teachers */}
          <div className="card-subtle p-6 md:p-8 flex flex-col justify-between gap-6 group hover:border-emerald-200 hover:bg-gradient-to-b hover:from-white hover:to-emerald-50/30">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <IconUsers size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                Pendidik
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-none block">
                {teachers}
              </span>
              <h3 className="text-sm font-bold font-heading text-slate-700 mt-2">
                Guru & Staff
              </h3>
              <p className="text-xs text-slate-500 font-body mt-1 leading-normal">
                Tenaga pendidik profesional dan berkualifikasi.
              </p>
            </div>
          </div>

          {/* Card 3: Classrooms */}
          <div className="card-subtle p-6 md:p-8 flex flex-col justify-between gap-6 group hover:border-indigo-200 hover:bg-gradient-to-b hover:from-white hover:to-indigo-50/30">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <IconSchool size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                Fasilitas
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-none block">
                {classrooms}
              </span>
              <h3 className="text-sm font-bold font-heading text-slate-700 mt-2">
                Ruang Kelas
              </h3>
              <p className="text-xs text-slate-500 font-body mt-1 leading-normal">
                Ruang belajar kondusif ramah anak.
              </p>
            </div>
          </div>

          {/* Card 4: Accreditation */}
          <div className="card-subtle p-6 md:p-8 flex flex-col justify-between gap-6 group hover:border-amber-200 hover:bg-gradient-to-b hover:from-white hover:to-amber-50/30">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <IconStar size={24} className="fill-amber-500" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                BAN-S/M
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-amber-600 tracking-tight leading-none block">
                {accreditation}
              </span>
              <h3 className="text-sm font-bold font-heading text-slate-700 mt-2">
                Akreditasi Sekolah
              </h3>
              <p className="text-xs text-slate-500 font-body mt-1 leading-normal">
                Penilaian resmi mutu pendidikan pemerintah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
