import React from "react";
import Link from "next/link";
import { GraduationCap, Award, Palette, Users, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section className="py-20 lg:py-28 bg-white text-[#101828] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F4C62E]" />
            <span className="text-xs uppercase tracking-widest text-[#B88714] font-bold">
              Holistic Development
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#102A63]">
            Beyond the Classroom
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Education transcends textbooks and examination scores. At MacVision, we cultivate curiosity, moral resilience, creative voice, and the collective spirit essential for lifelong contribution.
          </p>
        </div>

        {/* Editorial Asymmetric Composition - NOT 4 identical cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Pillar 1: Academic Excellence (Large Anchor Feature - 7 cols) */}
          <div className="lg:col-span-7 bg-[#102A63] text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            {/* Background decorative gold gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F4C62E]/15 to-transparent rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-mono tracking-widest text-[#F4C62E] uppercase px-3 py-1 rounded bg-white/10 border border-[#F4C62E]/30">
                  01 • Foundational Core
                </span>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#F4C62E]">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Academic Excellence
              </h3>
              <p className="text-base text-slate-200 leading-relaxed max-w-xl">
                Building strong foundations through purposeful learning. Our curriculum blends CBSE academic rigor with hands-on inquiry, concept clarity, and analytical reasoning across sciences, humanities, and commerce.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/15">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#F4C62E] flex-shrink-0" />
                  <span>Personalized Remediation</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#F4C62E] flex-shrink-0" />
                  <span>STEM & Conceptual Mastery</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#F4C62E] flex-shrink-0" />
                  <span>Qualified Faculty Mentors</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#F4C62E] flex-shrink-0" />
                  <span>Continuous Academic Assessment</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-6">
              <Link
                href="/academics"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F4C62E] hover:text-white transition-colors"
              >
                <span>Explore Academic Framework</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Character & Discipline (Vertical Editorial Card - 5 cols) */}
          <div className="lg:col-span-5 bg-[#F6F7FA] border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-mono tracking-widest text-[#B88714] uppercase px-2.5 py-1 rounded bg-amber-50 border border-amber-200">
                  02 • Ethical Pillar
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#102A63]/5 flex items-center justify-center text-[#102A63]">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A63] mb-4">
                Character & Discipline
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Developing responsibility, confidence and integrity. We foster self-discipline and empathy through structured daily routines, community service, and value-based guidance.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200/80 mt-6">
              <blockquote className="text-xs italic text-slate-500 font-serif border-l-2 border-[#F4C62E] pl-3">
                “Character is the true cornerstone upon which intellect achieves enduring purpose.”
              </blockquote>
            </div>
          </div>

          {/* Pillar 3: Creativity & Expression (Horizontal Card - 6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-amber-50/50 via-white to-slate-50 border border-amber-100 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-mono tracking-widest text-slate-500 uppercase px-2.5 py-1 rounded bg-white border border-slate-200">
                  03 • Aesthetic Growth
                </span>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#B88714]">
                  <Palette className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#102A63] mb-3">
                Creativity & Expression
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Encouraging students to explore ideas, voice their perspectives, and celebrate artistic expression through performing arts, visual crafts, public debate, and literary exploration.
              </p>
            </div>

            <div className="pt-4 text-xs font-semibold text-[#102A63]">
              Music • Theatre • Fine Arts • Oratory
            </div>
          </div>

          {/* Pillar 4: Leadership & Teamwork (Wide Horizontal Card - 6 cols) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-mono tracking-widest text-slate-500 uppercase px-2.5 py-1 rounded bg-slate-100 border border-slate-200">
                  04 • Collaborative Spirit
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#123B82]/10 flex items-center justify-center text-[#123B82]">
                  <Users className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#102A63] mb-3">
                Leadership & Teamwork
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Preparing students to collaborate, contribute and lead. Through team sports, house competitions, and student governance, learners master cooperative resilience and democratic accountability.
              </p>
            </div>

            <div className="pt-4 text-xs font-semibold text-[#102A63]">
              House System • Athletic Teams • Student Prefects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
