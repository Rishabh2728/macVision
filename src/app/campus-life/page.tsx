import React from "react";
import Image from "next/image";
import Link from "next/link";
import UnderPreparationCard from "@/components/common/UnderPreparationCard";

export default function CampusLifePage() {
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
            <span className="text-[#F4C62E]">Campus Life</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#F4C62E]/30 text-[#F4C62E] text-xs font-semibold uppercase tracking-wider mb-4">
            Student Life & Culture
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Learning Happens Everywhere
          </h1>

          <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto font-normal leading-relaxed mb-12">
            A rich co-curricular ecosystem where students develop sportsmanship, artistic creativity, leadership, and camaraderie across our 10-acre Dharuhera campus.
          </p>

          {/* 4 Stats Chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#F4C62E]">10+ Acres</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Lawn & Sports Grounds</p>
            </div>
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#F4C62E]">Day-Boarding</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Holistic Care</p>
            </div>
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#F4C62E]">GPS Transit</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Monitored Bus Fleet</p>
            </div>
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#F4C62E]">15+ Clubs</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Co-Curricular Societies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Preparation Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UnderPreparationCard
          badge="Campus Life Compilation"
          title="This section is being prepared."
          description="Detailed schedules of sports leagues, cultural festivals, student clubs, and day-boarding activity calendars are being compiled. Please check back soon."
          primaryAction={{ label: "Return to Home", href: "/", icon: "return" }}
          secondaryAction={{ label: "Admission Enquiry", href: "/contact" }}
          subCards={[
            {
              title: "Sports & Athletics",
              description: "Football, cricket nets, track & field, basketball, and professional coaching.",
            },
            {
              title: "Creative Expression",
              description: "Vocal and instrumental music, classical and contemporary dance, visual arts.",
            },
            {
              title: "Student Leadership",
              description: "House captains, prefectorial council, and community outreach projects.",
            },
          ]}
        />
      </section>

      {/* 3 Visual Highlights */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/campus_dual_view.jpg"
              alt="10-Acre Campus Grounds"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D45]/90 via-[#0A1D45]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-mono text-[#F4C62E] uppercase">Athletics & Grounds</span>
              <h4 className="font-serif text-lg font-bold">10-Acre Campus Grounds</h4>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/academic_block_evening.png"
              alt="Smart Academic Wings"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D45]/90 via-[#0A1D45]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-mono text-[#F4C62E] uppercase">Environments</span>
              <h4 className="font-serif text-lg font-bold">Smart Academic Wings</h4>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/stem_science_lab.png"
              alt="Student STEM Collaborative"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D45]/90 via-[#0A1D45]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-mono text-[#F4C62E] uppercase">Collaboration</span>
              <h4 className="font-serif text-lg font-bold">Student STEM Collaborative</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
