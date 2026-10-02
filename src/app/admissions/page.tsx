"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  Trophy,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BellRing,
} from "lucide-react";
import UnderPreparationCard from "@/components/common/UnderPreparationCard";

export default function AdmissionsPage() {
  const [alertSubmitted, setAlertSubmitted] = useState(false);
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phone) return;
    setAlertSubmitted(true);
  };

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#F4C62E]/30 text-[#F4C62E] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions Open 2026–2027
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Join the MacVision Community
          </h1>

          <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto font-normal leading-relaxed mb-12">
            Nurturing curious intellects, ethical leadership, and creative resilience in Dharuhera, Haryana. We invite aspiring scholars to embark on a journey of deliberate excellence.
          </p>

          {/* 4 Stats Chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#F4C62E]">2026 – 2027</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Academic Cycle</p>
            </div>
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#F4C62E]">CBSE, New Delhi</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Affiliation</p>
            </div>
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#F4C62E]">Pre-Nur to XII</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Class Span</p>
            </div>
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#F4C62E]">Day-Boarding</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Campus Nature</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Preparation Card with Pipeline Status */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UnderPreparationCard
          badge="Institutional Registry Notice"
          title="This section is being prepared."
          description="Detailed information regarding the 2026-27 admission criteria, fee schedules, scholarship examinations, and registration portals is being finalized. You can submit an enquiry below."
          primaryAction={{ label: "Return to Home", href: "/", icon: "return" }}
          secondaryAction={{ label: "Admission Enquiry", href: "/contact" }}
          progress={{
            label: "Portal Deployment Pipeline",
            percent: 85,
            steps: ["Curriculum Sync", "Fee Structure", "Payment Gateway"],
          }}
        />
      </section>

      {/* What Defines Our Scholastic Ecosystem */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold text-[#B88714] uppercase tracking-wider px-2.5 py-1 rounded bg-amber-50 border border-amber-200">
              Institutional Highlights
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#102A63] mt-2">
              What Defines Our Scholastic Ecosystem
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              While admissions undergo annual calibration, our dedication to progressive schooling, sports prowess, and ethical mentorship remains steadfast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F6F7FA] border border-slate-200 rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#102A63] text-[#F4C62E] flex items-center justify-center mb-5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  01 • Pedagogy
                </span>
                <h3 className="font-serif text-xl font-bold text-[#102A63] mt-1 mb-3">
                  Inquiry-Led CBSE Framework
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Synthesizing rigorous central board curriculum with experiential STEM laboratories, linguistic enrichment, and design-thinking modules.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200 text-xs font-semibold text-[#102A63]">
                Pre-Nursery to Grade XII
              </div>
            </div>

            <div className="bg-[#F6F7FA] border border-slate-200 rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#102A63] text-[#F4C62E] flex items-center justify-center mb-5">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  02 • Athletics
                </span>
                <h3 className="font-serif text-xl font-bold text-[#102A63] mt-1 mb-3">
                  Multi-Sport Grounds
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Expansive campus infrastructure housing all-weather athletic facilities, semi-Olympic track, synthetic sports courts, and coached physical education.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200 text-xs font-semibold text-[#102A63]">
                Professional Coaching Squad
              </div>
            </div>

            <div className="bg-[#F6F7FA] border border-slate-200 rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#102A63] text-[#F4C62E] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  03 • Pastoral Care
                </span>
                <h3 className="font-serif text-xl font-bold text-[#102A63] mt-1 mb-3">
                  Safe Day-Boarding Sanctuary
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Comprehensive student well-being encompassing hygienic dining, dedicated infirmary, and advanced GPS-monitored transit network.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200 text-xs font-semibold text-[#102A63]">
                Dharuhera, Rewari & Bhiwadi Fleet
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Notification Banner */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#102A63] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-semibold text-[#F4C62E] uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <BellRing className="w-3.5 h-3.5" />
              Priority Notification
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Receive First Notice When Applications Open
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Leave your contact details to receive an instant circular the moment the 2026–27 registration window commences.
            </p>
          </div>

          {alertSubmitted ? (
            <div className="bg-white/10 border border-white/20 rounded-xl p-5 flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-6 h-6 text-[#F4C62E] flex-shrink-0" />
              <span>Thank you! Your alert registration has been noted. We will notify you when applications open.</span>
            </div>
          ) : (
            <form onSubmit={handleAlertSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <input
                type="text"
                required
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="Parent / Guardian Name"
                className="sm:col-span-5 px-4 py-3 rounded-lg bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4C62E]"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="sm:col-span-4 px-4 py-3 rounded-lg bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4C62E]"
              />
              <button
                type="submit"
                className="sm:col-span-3 px-5 py-3 rounded-lg bg-[#F4C62E] hover:bg-[#D4A31C] text-[#102A63] font-bold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                Register for Alerts
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
