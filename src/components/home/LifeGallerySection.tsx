import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const GALLERY_ITEMS = [
  {
    title: "10-Acre Purpose-Built Campus",
    category: "Campus Architecture",
    description: "Expansive green grounds and modern infrastructure situated on Rajpura Road, Dharuhera.",
    image: "/images/campus_dual_view.jpg",
    span: "col-span-1 md:col-span-2 lg:col-span-8",
    height: "h-[300px] sm:h-[380px]",
  },
  {
    title: "STEM & Robotics Innovation",
    category: "Experiential Learning",
    description: "Hands-on scientific inquiry and collaborative problem-solving for modern learners.",
    image: "/images/stem_science_lab.png",
    span: "col-span-1 md:col-span-2 lg:col-span-4",
    height: "h-[300px] sm:h-[380px]",
  },
  {
    title: "Central Knowledge Atrium",
    category: "Literary Hub",
    description: "Extensive reference volumes, peaceful reading zones, and digital archives.",
    image: "/images/central_library_atrium.png",
    span: "col-span-1 md:col-span-1 lg:col-span-4",
    height: "h-[280px] sm:h-[320px]",
  },
  {
    title: "Academic Blocks & Smart Wings",
    category: "Learning Environment",
    description: "Well-ventilated, technology-enabled smart learning spaces for focused study.",
    image: "/images/academic_block_evening.png",
    span: "col-span-1 md:col-span-1 lg:col-span-4",
    height: "h-[280px] sm:h-[320px]",
  },
  {
    title: "Student Transit & Safety Infrastructure",
    category: "Safe Day-Boarding",
    description: "Dedicated GPS-monitored transportation connecting Dharuhera, Rewari, and Bhiwadi.",
    image: "/images/campus_overview_jet.jpg",
    span: "col-span-1 md:col-span-2 lg:col-span-4",
    height: "h-[280px] sm:h-[320px]",
  },
];

export default function LifeGallerySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F6F7FA] text-[#101828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#F4C62E]" />
              <span className="text-xs uppercase tracking-widest text-[#B88714] font-bold">
                Life At MacVision
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#102A63]">
              Learning happens everywhere.
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl text-base">
              A vibrant tapestry of academic enquiry, artistic creation, athletic vigor, and community camaraderie.
            </p>
          </div>

          <Link
            href="/campus-life"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-200 text-[#102A63] text-sm font-bold shadow-xs hover:border-[#F4C62E] hover:bg-slate-50 transition-all group self-start md:self-end"
          >
            <span>Explore Campus Life</span>
            <ArrowRight className="w-4 h-4 text-[#F4C62E] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Masonry / Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`${item.span} ${item.height} relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D45]/90 via-[#0A1D45]/30 to-transparent group-hover:from-[#0A1D45]/95 transition-colors" />

              {/* Caption Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono tracking-widest text-[#F4C62E] uppercase mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200/90 line-clamp-2 max-w-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
