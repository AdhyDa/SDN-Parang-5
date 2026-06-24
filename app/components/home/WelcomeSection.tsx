import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface WelcomeSectionProps {
  data: {
    principalName?: string;
    principalWelcome?: string;
    principalPhoto?: any;
  } | null;
}

export default function WelcomeSection({ data }: WelcomeSectionProps) {
  const name = data?.principalName || "Samiran, S.Pd.";
  const welcome =
    data?.principalWelcome ||
    "Selamat datang di SD Negeri Parang 5 Magetan. Kami bertekad untuk menyelenggarakan pendidikan dasar yang ramah anak, kreatif, dan inklusif. Di SDN Parang 5, setiap anak dibina dengan penuh kehangatan agar potensi akademik maupun kepribadian mulianya berkembang optimal sesuai bakatnya. Semoga website ini mempermudah koordinasi, transparansi, serta mengukuhkan jalinan erat antara sekolah, wali murid, dan masyarakat.";

  return (
    <section className="bg-light section-padding">
      <div className="container-section grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* Left Column: Photo */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-300 group">
            {data?.principalPhoto ? (
              <Image
                src={urlFor(data.principalPhoto).width(400).height(500).url()}
                alt={`Kepala Sekolah ${name}`}
                fill
                className="object-cover"
                sizes="256px"
              />
            ) : (
              <div className="w-full h-full bg-navy/10 flex flex-col items-center justify-center text-center p-6 text-navy">
                <span className="text-5xl mb-3" role="img" aria-label="Guru">👨‍🏫</span>
                <span className="font-heading font-extrabold text-sm leading-tight">
                  Kepala Sekolah
                </span>
                <span className="text-xs text-gray-500 mt-1">{name}</span>
              </div>
            )}
            {/* Ambient shadow gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
          {/* Decorative support note */}
          <div className="mt-4 bg-white/80 backdrop-blur-sm shadow-md py-1.5 px-4 rounded-full text-xs text-navy font-bold font-heading border border-gray-100 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber animate-pulse" />
            Kepala Sekolah SDN Parang 5
          </div>
        </div>

        {/* Right Column: Quotes & Welcome Message */}
        <div className="lg:col-span-8 flex flex-col items-start gap-4">
          <span className="font-heading font-bold text-xs tracking-widest uppercase text-amber">
            Sambutan Hangat
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-navy">
            Menyambut Dengan Kehangatan
          </h2>
          <div className="relative mt-2">
            {/* Quote marks icon decoration */}
            <span className="absolute -top-6 -left-6 text-navy/5 text-8xl font-serif select-none pointer-events-none">
              “
            </span>
            <p className="text-base text-gray-600 font-body leading-relaxed italic relative z-10">
              {welcome}
            </p>
          </div>
          <div className="mt-6 flex flex-col">
            <span className="font-heading font-extrabold text-navy text-lg">
              {name}
            </span>
            <span className="text-xs text-gray-500 font-body font-medium uppercase mt-0.5 tracking-wider">
              Kepala Sekolah SDN Parang 5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
