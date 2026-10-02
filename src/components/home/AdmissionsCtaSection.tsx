import React from "react";
import Link from "next/link";
import { ArrowUpRight, PhoneCall, Sparkles } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolInfo";

export default function AdmissionsCtaSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#102A63] text-white relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: "radial-gradient(#F4C62E 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#F4C62E]/30 text-[#F4C62E] text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Admissions Open For Session 2026–2027
        </div>

        {/* Main Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          Begin your child’s journey with MacVision.
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Discover an environment where learning, character and opportunity come together. We welcome prospective parents to tour our campus and experience our educational ethos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#F4C62E] hover:bg-[#D4A31C] text-[#102A63] text-sm font-bold tracking-wide transition-all shadow-lg active:scale-[0.98]"
          >
            Admission Enquiry
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-semibold tracking-wide border border-white/20 transition-all active:scale-[0.98]"
          >
            Contact School
            <PhoneCall className="w-4 h-4 text-[#F4C62E]" />
          </Link>
        </div>

        {/* Contact Strip */}
        <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
          <p>
            Admissions Desk:{" "}
            <a
              href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, "")}`}
              className="text-[#F4C62E] hover:underline font-semibold"
            >
              {SCHOOL_INFO.phone}
            </a>
          </p>
          <span className="hidden sm:inline text-white/30">•</span>
          <p>
            Email:{" "}
            <a
              href={`mailto:${SCHOOL_INFO.email}`}
              className="text-white hover:text-[#F4C62E] transition-colors"
            >
              {SCHOOL_INFO.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
