import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink, ArrowRight, Navigation } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolInfo";

export default function ContactMapSection() {
  return (
    <section className="py-20 lg:py-28 bg-white text-[#101828] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Contact & Directory Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#F4C62E]" />
              <span className="text-xs uppercase tracking-widest text-[#B88714] font-bold">
                Campus Location & Visit
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#102A63]">
              Visit MacVision.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              We welcome prospective families to experience our 10-acre campus first-hand. Explore our laboratories, meet faculty advisors, and discover our day-boarding learning ecosystem.
            </p>

            <div className="space-y-4 pt-2">
              {/* Address item */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F6F7FA] border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-[#102A63] text-[#F4C62E] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    School Campus Address
                  </h4>
                  <p className="text-sm font-semibold text-[#102A63] mt-0.5">
                    {SCHOOL_INFO.name}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {SCHOOL_INFO.fullAddress}
                  </p>
                </div>
              </div>

              {/* Telephone & Helplines */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F6F7FA] border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-[#102A63] text-[#F4C62E] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Telephone & Helpline
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 mt-0.5">
                    <a
                      href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, "")}`}
                      className="text-sm font-semibold text-[#102A63] hover:text-[#B88714] transition-colors"
                    >
                      {SCHOOL_INFO.phone}
                    </a>
                    <span className="text-slate-300">•</span>
                    <a
                      href={`tel:${SCHOOL_INFO.altPhone.replace(/\s+/g, "")}`}
                      className="text-sm font-medium text-slate-700 hover:text-[#B88714] transition-colors"
                    >
                      {SCHOOL_INFO.altPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Visiting Hours & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F6F7FA] border border-slate-200">
                  <Clock className="w-5 h-5 text-[#B88714] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[11px] font-bold text-slate-500 uppercase">
                      Visiting Hours
                    </h5>
                    <p className="text-xs text-slate-700 mt-0.5 font-medium">
                      Mon – Sat: 8:00 AM – 3:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F6F7FA] border border-slate-200">
                  <Mail className="w-5 h-5 text-[#B88714] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[11px] font-bold text-slate-500 uppercase">
                      Admissions Desk
                    </h5>
                    <a
                      href={`mailto:${SCHOOL_INFO.email}`}
                      className="text-xs text-[#102A63] font-semibold hover:underline mt-0.5 block truncate"
                    >
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#102A63] hover:bg-[#123B82] text-white text-sm font-semibold transition-all shadow-sm"
              >
                Book an Appointment
                <ArrowRight className="w-4 h-4 text-[#F4C62E]" />
              </Link>
              <a
                href={SCHOOL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-[#102A63] text-sm font-bold transition-all shadow-xs"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-4 h-4 text-[#B88714]" />
              </a>
            </div>
          </div>

          {/* Right: Map Graphic Presentation */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-100 group">
              {/* Map Preview Graphic */}
              <div className="relative h-[380px] sm:h-[440px] w-full bg-[#E8ECF2] overflow-hidden flex flex-col justify-between p-6">
                {/* Stylized Map Roads and Geography */}
                <svg
                  className="absolute inset-0 w-full h-full text-slate-300 opacity-70"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  viewBox="0 0 500 400"
                >
                  {/* Highway NH-48 */}
                  <path d="M-20,180 Q250,210 520,190" stroke="#94A3B8" strokeWidth="8" fill="none" />
                  <path d="M-20,180 Q250,210 520,190" stroke="#FDE68A" strokeWidth="3" strokeDasharray="6 6" fill="none" />
                  {/* Rajpura Road */}
                  <path d="M260,200 L280,50 L340,-20" stroke="#64748B" strokeWidth="6" fill="none" />
                  {/* Rewari Road */}
                  <path d="M120,380 L260,200" stroke="#CBD5E1" strokeWidth="5" fill="none" />
                  <path d="M280,205 L450,380" stroke="#CBD5E1" strokeWidth="5" fill="none" />
                  {/* Secondary grid roads */}
                  <path d="M50,80 L350,110 M100,280 L480,260" stroke="#E2E8F0" strokeWidth="3" fill="none" />
                </svg>

                {/* Road Labels */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-slate-200 text-[11px] font-bold text-slate-700 shadow-xs flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-[#102A63]" />
                    NH-48 (Delhi – Jaipur) Exit: 8 Mins
                  </div>
                  <div className="bg-[#102A63] text-white px-3 py-1.5 rounded-md text-[11px] font-mono shadow-xs">
                    Dharuhera, Haryana
                  </div>
                </div>

                {/* School Map Pin Marker Card */}
                <div className="relative z-10 self-center max-w-sm bg-white p-4 rounded-xl shadow-2xl border-2 border-[#F4C62E] text-center transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#102A63] text-[#F4C62E] flex items-center justify-center mx-auto mb-2 shadow-md">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#102A63]">
                    MacVision Aviraj World School
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Rajpura Road, Alamgirpur, Dharuhera
                  </p>
                  <div className="mt-3">
                    <a
                      href={SCHOOL_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F4C62E] hover:bg-[#D4A31C] text-[#102A63] text-xs font-bold shadow-xs transition-colors"
                    >
                      <span>Open Live GPS in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Bottom Transit notes */}
                <div className="relative z-10 flex justify-between items-end text-[10px] text-slate-500 bg-white/90 backdrop-blur-md p-2 rounded-md border border-slate-200">
                  <span>Coordinates: 28.21° N, 76.79° E</span>
                  <span className="font-semibold text-[#102A63]">Verified School Premises</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
