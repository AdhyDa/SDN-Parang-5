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
    <section ref={sectionRef} className="relative py-12 md:py-16 hero-gradient text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-amber/10 rounded-full blur-xl" />

      <div className="container-section relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Stat Item: Students */}
        <div className="flex flex-col items-center p-4">
          <span className="text-3xl md:text-5xl mb-2 filter drop-shadow-md" role="img" aria-label="Siswa">
            🎓
          </span>
          <span className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-none">
            {students}
          </span>
          <span className="text-xs md:text-sm font-medium font-body text-white/80 mt-2 tracking-wide uppercase">
            Siswa Aktif
          </span>
        </div>

        {/* Stat Item: Teachers */}
        <div className="flex flex-col items-center p-4">
          <span className="text-3xl md:text-5xl mb-2 filter drop-shadow-md" role="img" aria-label="Guru">
            👩‍🏫
          </span>
          <span className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-none">
            {teachers}
          </span>
          <span className="text-xs md:text-sm font-medium font-body text-white/80 mt-2 tracking-wide uppercase">
            Guru & Staff
          </span>
        </div>

        {/* Stat Item: Classrooms */}
        <div className="flex flex-col items-center p-4">
          <span className="text-3xl md:text-5xl mb-2 filter drop-shadow-md" role="img" aria-label="Ruang Kelas">
            🏫
          </span>
          <span className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-none">
            {classrooms}
          </span>
          <span className="text-xs md:text-sm font-medium font-body text-white/80 mt-2 tracking-wide uppercase">
            Ruang Kelas
          </span>
        </div>

        {/* Stat Item: Accreditation */}
        <div className="flex flex-col items-center p-4">
          <span className="text-3xl md:text-5xl mb-2 filter drop-shadow-md" role="img" aria-label="Akreditasi">
            ⭐
          </span>
          <span className="text-3xl md:text-5xl font-extrabold font-heading text-amber-light tracking-tight leading-none">
            {accreditation}
          </span>
          <span className="text-xs md:text-sm font-medium font-body text-white/80 mt-2 tracking-wide uppercase">
            Akreditasi
          </span>
        </div>
      </div>
    </section>
  );
}
