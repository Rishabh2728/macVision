"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Award, Compass, ShieldCheck } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolInfo";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#102A63] text-white overflow-hidden">
      {/* Background Campus Image with Institutional Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/campus_dual_view.jpg"
          alt="MacVision Aviraj World School Campus Dharuhera"
          fill
          priority
          className="object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
          sizes="100vw"
        />
        {/* Cinematic Multi-stop Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D45]/95 via-[#102A63]/85 to-[#102A63]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D45] via-transparent to-[#0A1D45]/50" />
        {/* Subtle grid pattern texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-32 pb-16 sm:pb-24 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow badge with gold accent */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#F4C62E]/30 mb-5 sm:mb-6 shadow-sm max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#F4C62E] flex-shrink-0 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-white truncate">
              MACVISION AVIRAJ WORLD SCHOOL
            </span>
            <span className="text-white/40 hidden xs:inline">•</span>
            <span className="text-[10px] sm:text-xs text-[#F4C62E] font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              Dharuhera, Haryana
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] mb-5 sm:mb-6 drop-shadow-md">
            Nurturing Minds. <br />
            <span className="text-[#F4C62E] italic font-medium">Shaping Futures.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200/95 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10 text-balance drop-shadow-sm">
            A forward-thinking learning environment where knowledge, creativity, discipline and character come together to help every child discover their potential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Link
              href="#intro"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#F4C62E] hover:bg-[#D4A31C] text-[#102A63] text-sm sm:text-base font-bold tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              Explore Our School
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm sm:text-base font-semibold tracking-wide border border-white/25 transition-all duration-200 active:scale-[0.98]"
            >
              Admission Enquiry
              <ArrowUpRight className="w-4 h-4 text-[#F4C62E]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Institutional Bottom Ribbon */}
      <div className="relative z-10 w-full bg-[#0A1D45]/90 backdrop-blur-md border-t border-white/10 py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#F4C62E] flex-shrink-0" />
              <span className="font-medium text-white">Dharuhera, Haryana</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F4C62E] flex-shrink-0" />
              <span>Affiliated to CBSE, New Delhi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#F4C62E] flex-shrink-0" />
              <span>Co-Educational (Nursery – XII)</span>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="px-2.5 py-1 rounded bg-[#F4C62E]/20 text-[#F4C62E] font-semibold text-[11px] sm:text-xs border border-[#F4C62E]/30">
              Session 2026–2027 Admissions Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
