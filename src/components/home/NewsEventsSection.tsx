import React from "react";
import Link from "next/link";
import { Calendar, Activity, Bell, ArrowRight } from "lucide-react";

const FEED_CHANNELS = [
  {
    icon: Calendar,
    category: "Institutional Calendar",
    title: "School Events",
    description:
      "Curricular celebrations, parent-educator interactions, annual exhibitions, and academic symposium schedules are updated dynamically through our portal.",
    badge: "CMS Managed",
    statusText: "Upcoming session schedule in preparation",
  },
  {
    icon: Activity,
    category: "Campus Engagements",
    title: "Student Activities",
    description:
      "Inter-house athletic meets, scientific olympiads, cultural productions, and community environment initiatives documented continuously by student clubs.",
    badge: "Student Council",
    statusText: "Active co-curricular calendar",
  },
  {
    icon: Bell,
    category: "Administrative Notices",
    title: "Announcements",
    description:
      "Official circulars, CBSE examination guidelines, school transport route adjustments, and seasonal advisories issued directly by school administration.",
    badge: "Official Gazette",
    statusText: "Direct school broadcast system",
  },
];

export default function NewsEventsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F6F7FA] text-[#101828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#F4C62E]" />
              <span className="text-xs uppercase tracking-widest text-[#B88714] font-bold">
                Campus Dispatches
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#102A63]">
              What’s happening at MacVision.
            </h2>
            <p className="mt-3 text-slate-600 text-base max-w-xl">
              Stay connected with timely updates, scholastic milestones, and campus bulletins from our administrative team.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest bg-white px-3 py-1.5 rounded-md border border-slate-200 self-start md:self-end">
            Institutional Feed
          </div>
        </div>

        {/* 3 Polished Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEED_CHANNELS.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-[11px] font-semibold text-[#B88714] uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-50 border border-amber-200/60">
                      {channel.badge}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#102A63]/5 flex items-center justify-center text-[#102A63] group-hover:bg-[#102A63] group-hover:text-[#F4C62E] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#102A63] mb-3 group-hover:text-[#123B82] transition-colors">
                    {channel.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium italic">
                    {channel.statusText}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#102A63] group-hover:text-[#F4C62E] transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
