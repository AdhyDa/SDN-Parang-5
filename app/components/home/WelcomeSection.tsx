import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { IconHeartHandshake } from "../Icons";

interface WelcomeSectionProps {
  data: {
    principalName?: string;
    principalWelcome?: string;
    principalPhoto?: any;
  } | null;
}

export default function WelcomeSection({ data }: WelcomeSectionProps) {
  const name = data?.principalName || "Iftakhul Kusniah,S.Pd";
  const welcome =
    data?.principalWelcome ||
    "Selamat datang di SD Negeri Parang 5 Kediri. Kami bertekad untuk menyelenggarakan pendidikan dasar yang ramah anak, kreatif, dan inklusif. Di SDN Parang 5, setiap anak dibina dengan penuh kehangatan agar potensi akademik maupun kepribadian mulianya berkembang optimal sesuai bakatnya. Semoga website ini mempermudah koordinasi, transparansi, serta mengukuhkan jalinan erat antara sekolah, wali murid, dan masyarakat.";

  return (
    <section className="bg-slate-50 section-padding border-y border-slate-200/60">
      <div className="container-section">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative overflow-hidden">
          {/* Subtle Ambient Radial Accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Principal Photo */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border-4 border-white group bg-slate-100">
              {data?.principalPhoto ? (
                <Image
                  src={urlFor(data.principalPhoto).width(400).height(500).url()}
                  alt={`Kepala Sekolah ${name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="256px"
                />
              ) : (
                <Image
                  src="/images/iftakhul.png"
                  alt={`Kepala Sekolah ${name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="256px"
                />
              )}
              {/* Bottom Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="mt-4 bg-slate-100 text-slate-800 border border-slate-200 py-1.5 px-4 rounded-full text-xs font-bold font-heading flex items-center gap-2 shadow-2xs">
              <IconHeartHandshake size={14} className="text-amber" />
              <span>Kepala Sekolah SDN Parang 5</span>
            </div>
          </div>

          {/* Right Column: Editorial Message */}
          <div className="lg:col-span-8 flex flex-col items-start gap-4">
            <span className="font-heading font-extrabold text-xs tracking-wider uppercase text-amber">
              Sambutan Hangat
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              Menyambut Dengan Kehangatan
            </h2>

            <div className="relative mt-2">
              <span className="absolute -top-8 -left-4 text-slate-200 text-8xl font-serif select-none pointer-events-none opacity-60">
                “
              </span>
              <p className="text-base md:text-lg text-slate-600 font-body leading-relaxed italic relative z-10">
                {welcome}
              </p>
            </div>

            <div className="mt-6 flex flex-col border-t border-slate-100 pt-4 w-full">
              <span className="font-heading font-extrabold text-slate-900 text-lg">
                {name}
              </span>
              <span className="text-xs text-slate-500 font-body font-medium uppercase mt-0.5 tracking-wider">
                Kepala Sekolah SDN Parang 5 Kediri
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
