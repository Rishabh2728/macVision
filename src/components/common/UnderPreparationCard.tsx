import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldAlert, Sparkles, Download, Phone } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolInfo";

interface UnderPreparationProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
    icon?: "return" | "download" | "enquire";
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  progress?: {
    label: string;
    percent: number;
    steps: string[];
  };
  subCards?: Array<{
    title: string;
    description: string;
  }>;
}

export default function UnderPreparationCard({
  badge = "Institutional Notice",
  title = "This section is being prepared.",
  description = "We're preparing detailed information for this section. Please check back soon.",
  primaryAction = { label: "Return to Home", href: "/", icon: "return" },
  secondaryAction = { label: "Admission Enquiry", href: "/contact" },
  progress,
  subCards,
}: UnderPreparationProps) {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 text-center relative overflow-hidden">
      {/* Decorative Gold Crest Badge */}
      <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#B88714] mx-auto mb-6 shadow-sm">
        <Sparkles className="w-8 h-8" />
      </div>

      {/* Pill Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
        <span className="w-1.5 h-1.5 rounded-full bg-[#F4C62E]" />
        {badge}
      </div>

      {/* Heading */}
      <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A63] mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed mb-8">
        {description}
      </p>

      {/* Optional Progress Pipeline */}
      {progress && (
        <div className="bg-[#F6F7FA] border border-slate-200/80 rounded-2xl p-5 mb-8 text-left max-w-lg mx-auto">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-2">
            <span>{progress.label}</span>
            <span className="text-[#102A63] font-mono">{progress.percent}% Ready</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-[#102A63] to-[#F4C62E] rounded-full transition-all duration-500"
              style={{ width: `${progress.percent}%` }}
            />
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] text-slate-500 font-medium">
            {progress.steps.map((st, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#102A63]" />
                {st}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <Link
          href={primaryAction.href}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#102A63] hover:bg-[#123B82] text-white text-sm font-semibold transition-all shadow-sm active:scale-[0.98]"
        >
          {primaryAction.icon === "return" && <ArrowLeft className="w-4 h-4" />}
          {primaryAction.icon === "download" && <Download className="w-4 h-4" />}
          {primaryAction.label}
        </Link>
        {secondaryAction && (
          <Link
            href={secondaryAction.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F4C62E] hover:bg-[#D4A31C] text-[#102A63] text-sm font-bold transition-all shadow-sm active:scale-[0.98]"
          >
            {secondaryAction.label}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* Sub-cards preview if any */}
      {subCards && subCards.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-left">
          {subCards.map((sc, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h5 className="font-serif text-sm font-bold text-[#102A63] mb-1">
                {sc.title}
              </h5>
              <p className="text-[11px] text-slate-500 leading-snug">
                {sc.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Urgent Inquiries Callout */}
      <div className="mt-6 pt-4 text-xs text-slate-500 flex items-center justify-center gap-2">
        <Phone className="w-3.5 h-3.5 text-[#B88714]" />
        <span>For immediate inquiries: </span>
        <a
          href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, "")}`}
          className="text-[#102A63] font-bold hover:underline"
        >
          {SCHOOL_INFO.phone}
        </a>
      </div>
    </div>
  );
}
