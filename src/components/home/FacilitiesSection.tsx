import React from "react";
import Image from "next/image";
import { MonitorPlay, Atom, BookOpen, Trophy, Theater, Bus } from "lucide-react";

const FACILITIES = [
  {
    icon: MonitorPlay,
    title: "Smart Air-Conditioned Classrooms",
    description: "Spacious, well-lit learning spaces equipped with digital teaching tools, audio-visual aids, and comfortable ergonomic seating.",
    tag: "Classrooms",
  },
  {
    icon: Atom,
    title: "STEM & Science Laboratories",
    description: "Fully-equipped, safety-compliant laboratories for Physics, Chemistry, Biology, and experiential STEM robotics investigations.",
    tag: "Experiential Labs",
  },
  {
    icon: BookOpen,
    title: "The Central Knowledge Atrium",
    description: "An extensive multi-level library repository housing fiction, curriculum reference texts, periodicals, and quiet research bays.",
    tag: "Library",
  },
  {
    icon: Trophy,
    title: "Multi-Acre Sports Fields & Courts",
    description: "Outdoor sports grounds for football, cricket nets, basketball, volleyball, athletics, and supervised physical education.",
    tag: "Athletics",
  },
  {
    icon: Theater,
    title: "Performing Arts & Activity Halls",
    description: "Acoustically treated halls for inter-house debates, theatre productions, vocal music, dance, and creative expressions.",
    tag: "Creative Arts",
  },
  {
    icon: Bus,
    title: "Safe GPS-Monitored Transit Fleet",
    description: "Dedicated school transportation network with live GPS transit tracking, speed governors, CCTV, and verified female attendants.",
    tag: "Transit Care",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white text-[#101828] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F4C62E]" />
            <span className="text-xs uppercase tracking-widest text-[#B88714] font-bold">
              Campus Infrastructure
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#102A63]">
            Designed for discovery.
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed font-normal">
            Every corner of our 10-acre Dharuhera campus is purposefully constructed to provide safety, inspire curiosity, and support active exploration.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility, idx) => {
            const Icon = facility.icon;
            return (
              <div
                key={idx}
                className="bg-[#F6F7FA] border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between hover:border-[#102A63]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="text-[11px] font-semibold text-[#B88714] tracking-wider uppercase px-2.5 py-1 rounded bg-amber-50 border border-amber-200/60">
                      {facility.tag}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#102A63] group-hover:bg-[#102A63] group-hover:text-[#F4C62E] transition-colors duration-200 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#102A63] mb-3 group-hover:text-[#123B82] transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-medium text-slate-400 group-hover:text-[#102A63] transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C62E]" />
                  <span>Verified Campus Facility</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
