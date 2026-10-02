"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ChevronDown,
  Navigation,
  Car,
  Compass,
  Building2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { SCHOOL_INFO } from "@/data/schoolInfo";

const FAQS = [
  {
    q: "Can we walk in for a campus tour without a prior appointment?",
    a: "While we welcome visiting families during official school office hours (8:00 AM to 3:30 PM), scheduling a prior appointment ensures that an admissions coordinator is dedicated to escort your family, provide student assessment briefs, and facilitate discussions with subject specialist teachers.",
  },
  {
    q: "What documents should parents bring along for the school visit?",
    a: "We suggest carrying the student’s report card or marksheet from the previous two academic years, birth certificate copy, and two passport-sized photographs if you wish to initiate immediate enrollment evaluation during the visit.",
  },
  {
    q: "Which areas and transport routes does the school bus fleet cover?",
    a: "Our private fleet of air-conditioned, speed-governed buses with live CCTV & GPS tracking covers Dharuhera township, Rewari City center, Bhiwadi sectors, Bilaspur, Kapriwas, and surrounding residential clusters.",
  },
  {
    q: "Are school campus walkthrough tours available on weekends?",
    a: "Yes, campus walkthroughs and parent consultations are conducted on regular Saturdays between 8:30 AM and 2:00 PM. Prior reservation is required for weekend visits as second Saturdays remain administrative non-working days.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#F6F7FA] min-h-screen text-[#101828]">
      {/* 1. Hero Section */}
      <section className="relative bg-[#102A63] text-white pt-16 sm:pt-24 pb-20 overflow-hidden">
        {/* Subtle grid pattern */}
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
            <Compass className="w-3.5 h-3.5" />
            Campus Admissions & Visit
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Visit MacVision Aviraj <span className="text-[#F4C62E] italic">World School</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            We invite prospective parents, students, and educators to experience our vibrant scholastic campus situated in Dharuhera, Haryana.
          </p>

          {/* 4 Stats Chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F4C62E]">10+</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Acres Campus</p>
            </div>
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F4C62E]">15:1</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Student-Faculty Ratio</p>
            </div>
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F4C62E]">100%</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">GPS Bus Transit</p>
            </div>
            <div className="bg-[#0A1D45]/70 border border-white/10 rounded-xl p-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F4C62E]">CBSE</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Affiliated Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Directory & Form Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Institutional Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-bold text-[#B88714] uppercase tracking-wider px-2.5 py-1 rounded bg-amber-50 border border-amber-200">
                Institutional Directory
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A63] mt-2">
                Get in Touch
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Reach out to school leadership and administrative officers for inquiries regarding admissions, curriculum, transport, and student enrollment.
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#102A63] text-[#F4C62E] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Campus Address
                  </h4>
                  <p className="text-sm font-bold text-[#102A63]">
                    {SCHOOL_INFO.name}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 pl-13 leading-relaxed">
                {SCHOOL_INFO.fullAddress}
              </p>
              <div className="pt-2 pl-13">
                <a
                  href={SCHOOL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B88714] hover:text-[#102A63] font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Helplines Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#102A63] text-[#F4C62E] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Telephone & Helplines
                  </h4>
                  <p className="text-sm font-bold text-[#102A63]">
                    Direct Admission Support
                  </p>
                </div>
              </div>
              <div className="pl-13 space-y-1.5 pt-1 text-xs text-slate-700">
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Admissions Desk:</span>
                  <a href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, "")}`} className="font-semibold text-[#102A63] hover:underline">
                    {SCHOOL_INFO.phone}
                  </a>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Alternate Line:</span>
                  <a href={`tel:${SCHOOL_INFO.altPhone.replace(/\s+/g, "")}`} className="font-semibold text-[#102A63] hover:underline">
                    {SCHOOL_INFO.altPhone}
                  </a>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">General Reception:</span>
                  <span className="font-semibold text-slate-700">+91 94681 10929</span>
                </div>
              </div>
            </div>

            {/* Email Correspondence Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#102A63] text-[#F4C62E] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Digital Correspondence
                  </h4>
                  <p className="text-sm font-bold text-[#102A63]">
                    Official Inquiries
                  </p>
                </div>
              </div>
              <div className="pl-13 space-y-1.5 pt-1 text-xs text-slate-700">
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Admissions:</span>
                  <a href={`mailto:${SCHOOL_INFO.email}`} className="font-semibold text-[#102A63] hover:underline">
                    {SCHOOL_INFO.email}
                  </a>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">General Information:</span>
                  <a href={`mailto:${SCHOOL_INFO.infoEmail}`} className="font-semibold text-[#102A63] hover:underline">
                    {SCHOOL_INFO.infoEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Visiting Hours Card */}
            <div className="bg-amber-50/70 rounded-2xl border border-amber-200/80 p-5 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#B88714] font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                Visiting & Administrative Hours
              </div>
              <div className="space-y-1 text-slate-700 pt-1">
                <p><span className="font-semibold">Monday – Saturday:</span> 8:00 AM – 3:30 PM</p>
                <p><span className="font-semibold">Second Saturdays:</span> Closed (Administrative recess)</p>
                <p className="text-[11px] text-slate-500 italic mt-1">
                  *Prior booking recommended for dedicated walkthrough appointment.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Walkthrough Booking Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 3. Highway Access & Location Advantage */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold text-[#B88714] uppercase tracking-wider px-2.5 py-1 rounded bg-amber-50 border border-amber-200">
              Regional Connectivity
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#102A63] mt-2">
              Prime Highway Location & Access
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Strategically placed in Dharuhera with rapid connectivity from Rewari City, Bhiwadi Industrial Area, and southern Delhi NCR sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F6F7FA] border border-slate-200 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#102A63] text-[#F4C62E] flex items-center justify-center mb-4">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#102A63] mb-2">
                From NH-48 Expressway
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Just 8 minutes off the Delhi-Jaipur highway (NH-48) exit via Rajpura Road; quick access from Dharuhera to avoid peak township traffic.
              </p>
              <div className="flex justify-between items-center text-[11px] font-semibold text-slate-500 pt-3 border-t border-slate-200">
                <span>APPROX. 3.2 KM</span>
                <span className="text-[#102A63]">~8 MINS DRIVE</span>
              </div>
            </div>

            <div className="bg-[#F6F7FA] border border-slate-200 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#102A63] text-[#F4C62E] flex items-center justify-center mb-4">
                <Navigation className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#102A63] mb-2">
                From Rewari City Center
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Direct connection through Rewari-Dharuhera arterial highway. 15 km transit time connecting Rewari residential sectors via school bus fleet.
              </p>
              <div className="flex justify-between items-center text-[11px] font-semibold text-slate-500 pt-3 border-t border-slate-200">
                <span>APPROX. 15 KM</span>
                <span className="text-[#102A63]">SCHOOL BUS ROUTE</span>
              </div>
            </div>

            <div className="bg-[#F6F7FA] border border-slate-200 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#102A63] text-[#F4C62E] flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#102A63] mb-2">
                From Bhiwadi Common Border
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Immediate access for Haryana-Rajasthan border bypass with designated morning/evening school bus pickups covering Bhiwadi sectors.
              </p>
              <div className="flex justify-between items-center text-[11px] font-semibold text-slate-500 pt-3 border-t border-slate-200">
                <span>APPROX. 9 KM</span>
                <span className="text-[#102A63]">SPECIAL PICKUP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Campus Coordinates Map */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-[11px] font-bold text-[#B88714] uppercase tracking-wider px-2.5 py-1 rounded bg-amber-50 border border-amber-200">
                GPS Verification
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A63] mt-2">
                Interactive Campus Coordinates
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Use the button below or trigger live GPS turn-by-turn navigation directly to the school main gate.
              </p>
            </div>

            <a
              href={SCHOOL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#102A63] hover:bg-[#123B82] text-white text-sm font-bold shadow-md transition-all self-start md:self-auto"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-4 h-4 text-[#F4C62E]" />
            </a>
          </div>

          {/* Map Container */}
          <div className="relative h-[360px] sm:h-[420px] w-full bg-[#E5E9F0] rounded-2xl overflow-hidden border border-slate-300 flex flex-col justify-between p-6">
            {/* SVG Roads Presentation */}
            <svg
              className="absolute inset-0 w-full h-full text-slate-400 opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 600 400"
            >
              <path d="M-10,180 Q300,220 610,190" stroke="#64748B" strokeWidth="10" fill="none" />
              <path d="M-10,180 Q300,220 610,190" stroke="#FDE68A" strokeWidth="3" strokeDasharray="8 8" fill="none" />
              <path d="M300,200 L320,40 L380,-10" stroke="#475569" strokeWidth="8" fill="none" />
              <path d="M150,390 L300,200" stroke="#94A3B8" strokeWidth="6" fill="none" />
              <path d="M300,205 L500,390" stroke="#94A3B8" strokeWidth="6" fill="none" />
            </svg>

            {/* Floating Top Indicator */}
            <div className="relative z-10 flex justify-between items-center text-xs">
              <span className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-200 font-bold text-slate-800 shadow-sm">
                Rajpura Road, Alamgirpur, Dharuhera
              </span>
              <span className="bg-[#102A63] text-[#F4C62E] px-3 py-1.5 rounded-lg font-mono font-semibold shadow-sm">
                PIN: 123106
              </span>
            </div>

            {/* School Center Location Card */}
            <div className="relative z-10 self-center max-w-sm bg-white p-5 rounded-2xl shadow-2xl border-2 border-[#F4C62E] text-center">
              <div className="w-12 h-12 rounded-full bg-[#102A63] text-[#F4C62E] flex items-center justify-center mx-auto mb-2 shadow-md">
                <MapPin className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#102A63]">
                {SCHOOL_INFO.name}
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Rajpura Road, Dharuhera, Haryana
              </p>
              <div className="mt-3">
                <a
                  href={SCHOOL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F4C62E] hover:bg-[#D4A31C] text-[#102A63] text-xs font-bold shadow-xs transition-colors"
                >
                  <span>Launch Google Maps Route</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Bottom GPS Info */}
            <div className="relative z-10 flex justify-between items-center text-[11px] text-slate-600 bg-white/95 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Official School Geo-Coordinates Verified
              </span>
              <span className="font-mono">Lat: 28.2120° N, Lon: 76.7915° E</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Visual Campus Highlights */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/academic_block_evening.png"
              alt="Academic Blocks at MacVision"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D45]/90 via-[#0A1D45]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-mono text-[#F4C62E] uppercase">Infrastructure</span>
              <h4 className="font-serif text-lg font-bold">Academic Blocks</h4>
              <p className="text-xs text-slate-200">Smart, Air-Conditioned Classrooms</p>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/stem_science_lab.png"
              alt="STEM Innovation Labs at MacVision"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D45]/90 via-[#0A1D45]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-mono text-[#F4C62E] uppercase">Discovery</span>
              <h4 className="font-serif text-lg font-bold">STEM & Science Wings</h4>
              <p className="text-xs text-slate-200">Robotics & Experimental Centers</p>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/central_library_atrium.png"
              alt="The Central Knowledge Atrium at MacVision"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D45]/90 via-[#0A1D45]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-mono text-[#F4C62E] uppercase">Scholastic</span>
              <h4 className="font-serif text-lg font-bold">Knowledge Atrium</h4>
              <p className="text-xs text-slate-200">Multi-tier Library & Reading Bays</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Visiting & Admissions FAQs Accordion */}
      <section id="faqs" className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold text-[#B88714] uppercase tracking-wider px-2.5 py-1 rounded bg-amber-50 border border-amber-200">
            Admissions & Visit Desk
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#102A63] mt-2">
            Visiting & Admissions FAQs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Everything parents need to know prior to booking their first school walkthrough.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#102A63]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#B88714]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F6F7FA]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Urgent Assistance Banner */}
      <section className="pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#102A63] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div>
            <h4 className="font-serif text-xl font-bold text-white">
              Require Urgent Assistance?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Our admissions coordinators are active on phone and WhatsApp for immediate queries.
            </p>
          </div>
          <a
            href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, "")}`}
            className="px-6 py-3 rounded-lg bg-[#F4C62E] hover:bg-[#D4A31C] text-[#102A63] text-sm font-bold shadow-md transition-all active:scale-[0.98] whitespace-nowrap"
          >
            Call {SCHOOL_INFO.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
