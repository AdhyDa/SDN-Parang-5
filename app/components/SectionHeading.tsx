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
      className={`mb-10 md:mb-16 flex flex-col ${
        centered ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {subtitle && (
        <span
          className={`text-xs md:text-sm font-semibold tracking-wider uppercase mb-2 ${
            light ? "text-amber-light" : "text-amber"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-2xl md:text-4xl font-extrabold font-heading ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-1 w-16 rounded-full mt-4 ${
          light ? "bg-amber-light" : "bg-amber"
        }`}
      />
    </div>
  );
}
