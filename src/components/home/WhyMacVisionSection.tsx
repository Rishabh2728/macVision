import React from "react";
import { UserCheck, Lightbulb, Users2, ShieldCheck, Sparkles } from "lucide-react";

const PRINCIPLES = [
  {
    icon: UserCheck,
    title: "Student-Centred Learning",
    description:
      "Every learner possesses unique strengths and cognitive rhythms. Our 15:1 student-educator ratio ensures targeted mentorship, concept mastery, and individual academic growth.",
  },
  {
    icon: Lightbulb,
    title: "Experiential Education",
    description:
      "Knowledge takes root through inquiry and practical discovery. From STEM robotics and chemistry benches to open debate and fine arts, students learn through deliberate action.",
  },
  {
    icon: Users2,
    title: "Leadership & Team Building",
    description:
      "Through competitive athletics, house leadership, and cultural ensembles, students learn to collaborate with humility, resolve challenges, and lead with empathy.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Supportive Environment",
    description:
      "A purpose-built 10-acre day-boarding campus equipped with comprehensive surveillance, GPS-monitored student transport, and responsive pastoral care.",
  },
];

export default function WhyMacVisionSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#102A63] text-white relative overflow-hidden">
      {/* Background Subtle Motifs */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: "radial-gradient(#F4C62E 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote / Main Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#F4C62E]/30 text-[#F4C62E] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Institutional Principles
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.25] text-balance">
            “Every child deserves the opportunity to discover what they can become.”
          </h2>
          <div className="mt-4 w-16 h-1 bg-[#F4C62E] mx-auto rounded-full" />
        </div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRINCIPLES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0A1D45]/60 border border-white/10 hover:border-[#F4C62E]/40 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-[#F4C62E]/30 flex items-center justify-center text-[#F4C62E] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#F4C62E] font-mono">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C62E]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
