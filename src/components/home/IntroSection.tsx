import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Shield, Sparkles } from "lucide-react";

export default function IntroSection() {
  return (
    <section id="intro" className="py-20 lg:py-28 bg-[#F6F7FA] text-[#101828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#F4C62E]" />
              <span className="text-xs uppercase tracking-widest text-[#B88714] font-bold">
                About The Institution
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#102A63] leading-[1.15]">
              A place to learn. <br />
              <span className="italic font-medium text-[#123B82]">A place to become.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              MacVision Aviraj World School is built on the conviction that education must do more than deliver academic syllabi. Situated in Dharuhera, Haryana, our campus is designed as an inspiring sanctuary where students discover their distinctive capabilities, cultivate moral fortitude, and grow into empathetic global citizens.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Under the guidance of experienced educators and an inquiry-driven framework, we balance foundational CBSE curriculum rigor with experiential arts, sports, science exploration, and personal mentorship.
            </p>

            {/* Feature list pills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 shadow-xs">
                <BookOpen className="w-4 h-4 text-[#102A63]" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Inquiry-Led Pedagogy
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 shadow-xs">
                <Shield className="w-4 h-4 text-[#102A63]" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Character & Integrity
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#102A63] hover:text-[#123B82] group transition-colors"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#F4C62E] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <span className="text-slate-300">|</span>
              <span className="text-xs text-slate-500 font-medium">
                Established 2013 • Dharuhera, Haryana
              </span>
            </div>
          </div>

          {/* Right Column: Asymmetric Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 aspect-[4/3] group">
              <Image
                src="/images/stem_science_lab.png"
                alt="Students in MacVision Aviraj World School STEM Laboratory"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A63]/60 via-transparent to-transparent opacity-80" />
            </div>

            {/* Overlapping Floating Institutional Badge */}
            <div className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-6 max-w-xs bg-[#102A63] text-white p-5 rounded-xl shadow-2xl border-2 border-[#F4C62E]/40 backdrop-blur-md">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/10 text-[#F4C62E]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white tracking-wide">
                    House of Excellence
                  </h4>
                  <p className="text-xs text-slate-200 mt-1 leading-snug">
                    Nurturing curious minds and disciplined leadership since 2013.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
