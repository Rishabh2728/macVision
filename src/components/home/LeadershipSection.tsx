import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolInfo";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 lg:py-28 bg-[#F6F7FA] text-[#101828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Authentic CEO Photograph */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-[#102A63]">
                <Image
                  src={SCHOOL_INFO.ceo.photo}
                  alt={`${SCHOOL_INFO.ceo.name} - ${SCHOOL_INFO.ceo.role}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D45]/90 via-transparent to-transparent" />
                
                {/* Overlay Nameplate */}
                <div className="absolute bottom-5 inset-x-5 text-white">
                  <h4 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
                    {SCHOOL_INFO.ceo.name}
                  </h4>
                  <p className="text-xs text-[#F4C62E] font-medium tracking-wider uppercase mt-0.5">
                    {SCHOOL_INFO.ceo.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Leadership Message */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#F4C62E]" />
                <span className="text-xs uppercase tracking-widest text-[#B88714] font-bold">
                  Leadership & Vision
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#102A63] leading-[1.15]">
                Building an environment where every learner can grow.
              </h2>

              <div className="relative pt-2">
                <Quote className="w-10 h-10 text-[#F4C62E]/30 absolute -top-4 -left-2 -z-0 pointer-events-none" />
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal relative z-10">
                  “{SCHOOL_INFO.ceo.message}”
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                “{SCHOOL_INFO.ceo.extendedMessage}”
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-slate-100">
                <div>
                  <p className="font-bold text-[#102A63] text-sm">
                    {SCHOOL_INFO.ceo.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {SCHOOL_INFO.ceo.role}
                  </p>
                </div>

                <div className="h-6 w-[1px] bg-slate-200 hidden sm:block" />

                <Link
                  href="/about#leadership"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#102A63] hover:text-[#123B82] group transition-colors"
                >
                  <span>Read the Director's Message</span>
                  <ArrowRight className="w-4 h-4 text-[#F4C62E] transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
