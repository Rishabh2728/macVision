import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, GraduationCap, CheckCircle2 } from "lucide-react";
import UnderPreparationCard from "@/components/common/UnderPreparationCard";

export default function AcademicsPage() {
  return (
    <div className="bg-[#F6F7FA] min-h-screen text-[#101828]">
      {/* Hero Section */}
      <section className="relative bg-[#102A63] text-white pt-16 sm:pt-24 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-slate-300 font-mono tracking-widest uppercase mb-4">
            <Link href="/" className="hover:text-[#F4C62E] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#F4C62E]">Academics</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#F4C62E]/30 text-[#F4C62E] text-xs font-semibold uppercase tracking-wider mb-4">
            Academic Excellence
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            A Balanced Approach to Education
          </h1>

          <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto font-normal leading-relaxed mb-12">
            Inquiry-driven curricula spanning Early Years, Primary, Middle School, and Senior Secondary under the CBSE framework.
          </p>

          {/* 4 Academic Wings Chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#F4C62E]">Early Years</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Pre-Nur to KG</p>
            </div>
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#F4C62E]">Primary</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Grades I – V</p>
            </div>
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#F4C62E]">Middle School</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Grades VI – VIII</p>
            </div>
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#F4C62E]">Senior Wing</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Grades IX – XII</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Preparation Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UnderPreparationCard
          badge="Curriculum Registry"
          title="This section is being prepared."
          description="Detailed syllabi, subject combinations (PCM, PCB, Commerce, Arts), assessment rubrics, and faculty profiles for the 2026–27 session are being compiled."
          primaryAction={{ label: "Return to Home", href: "/", icon: "return" }}
          secondaryAction={{ label: "Admission Enquiry", href: "/contact" }}
          subCards={[
            {
              title: "STEM & Robotics",
              description: "Experiential inquiry modules and laboratory work.",
            },
            {
              title: "Language Fluency",
              description: "Structured literacy, public oratory, and multilingual learning.",
            },
            {
              title: "Board Assessment",
              description: "Systematic board preparation and remedial tutorials.",
            },
          ]}
        />
      </section>

      {/* Visual Photos Section */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-72 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/stem_science_lab.png"
              alt="STEM Innovation Laboratory"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D45]/90 via-[#0A1D45]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] font-mono text-[#F4C62E] uppercase">Experiential Learning</span>
              <h4 className="font-serif text-2xl font-bold">STEM & Science Laboratories</h4>
              <p className="text-xs text-slate-200 mt-1">Physics, Chemistry, and Biology workbenches</p>
            </div>
          </div>

          <div className="relative h-72 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/central_library_atrium.png"
              alt="Central Knowledge Atrium"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D45]/90 via-[#0A1D45]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] font-mono text-[#F4C62E] uppercase">Literary Resource</span>
              <h4 className="font-serif text-2xl font-bold">The Central Knowledge Atrium</h4>
              <p className="text-xs text-slate-200 mt-1">Curriculum reference volumes and reading carrels</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
