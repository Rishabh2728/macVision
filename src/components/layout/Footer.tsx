import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink, ArrowRight } from "lucide-react";
import Logo from "../ui/Logo";
import { SCHOOL_INFO } from "@/data/schoolInfo";

export default function Footer() {
  return (
    <footer className="bg-[#0A1D45] text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner CTA */}
        <div className="bg-[#102A63] border border-white/15 rounded-2xl p-6 sm:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4C62E]" />
              <span className="text-xs uppercase tracking-widest text-[#F4C62E] font-semibold">
                Admission Cycle 2026–2027
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
              MacVision Aviraj World School
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              A premier day-boarding and co-educational CBSE institution in Dharuhera, Haryana, committed to purposeful learning and future-ready character.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/admissions"
              className="px-6 py-3 rounded-lg bg-[#F4C62E] hover:bg-[#D4A31C] text-[#102A63] text-sm font-bold tracking-wide transition-all shadow-md active:scale-[0.98] inline-flex items-center gap-2"
            >
              Apply For 2026–27
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={SCHOOL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all inline-flex items-center gap-2"
            >
              View Location
              <ExternalLink className="w-3.5 h-3.5 text-[#F4C62E]" />
            </a>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Logo theme="dark" />
            <p className="text-xs text-slate-300/80 leading-relaxed pt-2">
              MacVision Aviraj World School provides an inquiry-led, balanced environment where knowledge, creativity, discipline and character inspire every learner.
            </p>
            <div className="pt-2">
              <p className="text-xs text-[#F4C62E] font-semibold tracking-wider uppercase">
                Established 2013 • CBSE Affiliated
              </p>
            </div>
          </div>

          {/* Col 2: School */}
          <div>
            <h4 className="text-xs font-bold text-[#F4C62E] uppercase tracking-widest mb-4">
              School
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Institution
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-white transition-colors">
                  Academic Philosophy
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="hover:text-white transition-colors">
                  Campus Life & Facilities
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="hover:text-white transition-colors">
                  Leadership & Governance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book a Campus Walkthrough
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions */}
          <div>
            <h4 className="text-xs font-bold text-[#F4C62E] uppercase tracking-widest mb-4">
              Admissions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/admissions" className="hover:text-white transition-colors">
                  Admission Process 2026–27
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white transition-colors">
                  Class Span & Eligibility
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Admission Enquiry Form
                </Link>
              </li>
              <li>
                <Link href="/contact#faqs" className="hover:text-white transition-colors">
                  Visiting & Admissions FAQs
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-1.5 text-xs text-[#F4C62E] hover:underline pt-1 font-medium"
                >
                  <Phone className="w-3 h-3" />
                  Helpline: {SCHOOL_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect & Location */}
          <div>
            <h4 className="text-xs font-bold text-[#F4C62E] uppercase tracking-widest mb-4">
              Connect & Location
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4C62E] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {SCHOOL_INFO.fullAddress}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4C62E] flex-shrink-0" />
                <div>
                  <p>{SCHOOL_INFO.phone}</p>
                  <p className="text-slate-400 text-[11px]">Alt: {SCHOOL_INFO.altPhone}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F4C62E] flex-shrink-0" />
                <p>{SCHOOL_INFO.email}</p>
              </div>
              <div className="pt-2">
                <a
                  href={SCHOOL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#F4C62E] hover:underline font-semibold"
                >
                  View on Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 MacVision Aviraj World School. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/about" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/about" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/about" className="hover:text-slate-200 transition-colors">
              Mandatory Public Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
