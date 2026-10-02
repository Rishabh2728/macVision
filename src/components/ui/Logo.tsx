import React from "react";
import Link from "next/link";

interface LogoProps {
  theme?: "light" | "dark";
  className?: string;
}

export default function Logo({ theme = "dark", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#F4C62E] focus:ring-offset-2 rounded-lg py-1 max-w-[260px] sm:max-w-none ${className}`}
      aria-label="MacVision Aviraj World School - Home"
    >
      <div className="relative w-8 h-10 sm:w-10 sm:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Shield Base */}
          <path
            d="M30 3 C44 3 56 12 56 26 C56 46 30 63 30 65 C30 63 4 46 4 26 C4 12 16 3 30 3 Z"
            fill="#102A63"
            stroke="#F4C62E"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Inner Inset */}
          <path
            d="M30 7 C41 7 51 15 51 26 C51 42 30 55 30 57 C30 55 9 42 9 26 C9 15 19 7 30 7 Z"
            fill="none"
            stroke="#F4C62E"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          {/* Sunburst / Torch Flame */}
          <circle cx="30" cy="19" r="4.5" fill="#F4C62E" />
          <path
            d="M30 10 L30 13 M22 13 L24 15 M38 13 L36 15 M18 19 L21 19 M39 19 L42 19"
            stroke="#F4C62E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Open Book Pages */}
          <path
            d="M30 40 C25 36 18 36 14 38 L14 45 C18 43 25 43 30 46 C35 43 42 43 46 45 L46 38 C42 36 35 36 30 40 Z"
            fill="#FFFFFF"
          />
          <path d="M30 40 L30 46" stroke="#102A63" strokeWidth="1.2" />
          {/* Decorative Stars */}
          <polygon points="18,28 19,30 21,30 19.5,31 20,33 18,32 16,33 16.5,31 15,30 17,30" fill="#F4C62E" />
          <polygon points="42,28 43,30 45,30 43.5,31 44,33 42,32 40,33 40.5,31 39,30 41,30" fill="#F4C62E" />
        </svg>
      </div>

      <div className="flex flex-col text-left overflow-hidden">
        <span
          className={`font-serif text-[1.05rem] sm:text-[1.35rem] font-bold tracking-tight leading-tight transition-colors truncate ${
            theme === "dark" ? "text-white group-hover:text-[#F4C62E]" : "text-[#102A63] group-hover:text-[#123B82]"
          }`}
        >
          MacVision Aviraj
        </span>
        <span
          className={`text-[0.55rem] sm:text-[0.68rem] tracking-[0.14em] sm:tracking-[0.22em] font-semibold uppercase truncate ${
            theme === "dark" ? "text-[#F4C62E]" : "text-[#B88714]"
          }`}
        >
          World School • Dharuhera
        </span>
        <span
          className={`text-[0.50rem] sm:text-[0.58rem] tracking-wider uppercase font-medium hidden xs:block sm:block ${
            theme === "dark" ? "text-slate-300/80" : "text-slate-500"
          }`}
        >
          Affiliated to CBSE, New Delhi
        </span>
      </div>
    </Link>
  );
}
