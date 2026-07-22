import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 md:mb-14 flex flex-col ${
        centered ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {subtitle && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-heading tracking-wider uppercase mb-3 border ${
            light
              ? "bg-white/10 text-amber-300 border-white/20"
              : "bg-amber-50 text-amber-700 border-amber-200/60"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${light ? "bg-amber-400" : "bg-amber-600"}`} />
          {subtitle}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading tracking-tight max-w-2xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-0.5 w-12 rounded-full mt-4 ${
          light ? "bg-amber-400" : "bg-amber-500"
        }`}
      />
    </div>
  );
}
