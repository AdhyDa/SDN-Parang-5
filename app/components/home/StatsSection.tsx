"use client";

import React, { useState, useEffect, useRef } from "react";

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
      { threshold: 0.1 }
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

    // Simple counter animation
    const duration = 1200; // Total duration in ms
    const frameRate = 1000 / 60; // 60 FPS
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
    <section ref={sectionRef} className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container-section">
        {/* Floating dark gradient card */}
        <div className="relative bg-gradient-to-br from-navy via-navy-dark to-[#0f1d47] rounded-[32px] p-8 md:p-12 shadow-2xl border border-white/5 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-sky/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-amber/10 rounded-full blur-3xl pointer-events-none" />

          {/* Grid with mobile/desktop dividing borders */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 text-center lg:divide-x lg:divide-white/5">
            {/* Stat Item: Students */}
            <div className="flex flex-col items-center justify-center py-4 px-2 lg:px-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center text-xl mb-3 shadow-inner">
                🎓
              </div>
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-none">
                {students}
              </span>
              <span className="text-xs md:text-sm font-semibold font-body text-white/70 mt-3 tracking-wider uppercase">
                Siswa Aktif
              </span>
            </div>

            {/* Stat Item: Teachers */}
            <div className="flex flex-col items-center justify-center py-4 px-2 lg:px-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center text-xl mb-3 shadow-inner">
                👩‍🏫
              </div>
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-none">
                {teachers}
              </span>
              <span className="text-xs md:text-sm font-semibold font-body text-white/70 mt-3 tracking-wider uppercase">
                Guru & Staff
              </span>
            </div>

            {/* Stat Item: Classrooms */}
            <div className="flex flex-col items-center justify-center py-4 px-2 lg:px-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center text-xl mb-3 shadow-inner">
                🏫
              </div>
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-none">
                {classrooms}
              </span>
              <span className="text-xs md:text-sm font-semibold font-body text-white/70 mt-3 tracking-wider uppercase">
                Ruang Kelas
              </span>
            </div>

            {/* Stat Item: Accreditation */}
            <div className="flex flex-col items-center justify-center py-4 px-2 lg:px-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center text-xl mb-3 shadow-inner">
                ⭐
              </div>
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-amber-light tracking-tight leading-none">
                {accreditation}
              </span>
              <span className="text-xs md:text-sm font-semibold font-body text-white/70 mt-3 tracking-wider uppercase">
                Akreditasi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
