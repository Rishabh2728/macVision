import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, BookCheck } from "lucide-react";

const ACADEMIC_WINGS = [
  {
    step: "01",
    stage: "Early Years",
    grades: "Pre-Nursery, Nursery & KG",
    focus: "Foundational wonder and sensory learning",
    description:
      "Play-based and inquiry-focused early learning cultivating language fluency, numeracy curiosity, motor skills, and joyful social interaction in a warm, secure setting.",
  },
  {
    step: "02",
    stage: "Primary Wing",
    grades: "Grades I – V",
    focus: "Core competencies and conceptual curiosity",
    description:
      "Structured literacy, scientific exploration, mathematical reasoning, and creative arts. Children learn to question, formulate ideas, and develop healthy study habits.",
  },
  {
    step: "03",
    stage: "Middle School",
    grades: "Grades VI – VIII",
    focus: "Critical analysis and experiential exploration",
    description:
      "Transition into subject-specialist learning, laboratory investigations, project collaborations, and structured leadership activities within the CBSE framework.",
  },
  {
    step: "04",
    stage: "Senior Secondary",
    grades: "Grades IX – XII",
    focus: "Scholastic rigor and career pathway mastery",
    description:
      "Focused preparation for board examinations and national entrance pathways across Science (PCM/PCB), Commerce, and Arts with expert mentorship and personalized guidance.",
  },
];

export default function AcademicsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white text-[#101828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#F4C62E]" />
              <span className="text-xs uppercase tracking-widest text-[#B88714] font-bold">
                Scholastic Pathways
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#102A63]">
              A balanced approach to education.
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              From early childhood discovery to senior secondary board preparation, our curriculum fosters progressive mastery, critical thought, and ethical responsibility at every stage.
            </p>
          </div>

          <Link
            href="/academics"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#102A63] text-white hover:bg-[#123B82] text-sm font-semibold transition-all shadow-sm group self-start md:self-end"
          >
            <span>Explore Academics</span>
            <ArrowRight className="w-4 h-4 text-[#F4C62E] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Academic Rows / List */}
        <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
          {ACADEMIC_WINGS.map((wing) => (
            <div
              key={wing.step}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group hover:bg-[#F6F7FA]/70 px-4 rounded-xl transition-colors duration-200"
            >
              {/* Col 1: Number & Stage Name */}
              <div className="md:col-span-4 flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-[#F4C62E] bg-[#102A63] px-2.5 py-1 rounded-md">
                  {wing.step}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#102A63] group-hover:text-[#123B82] transition-colors">
                    {wing.stage}
                  </h3>
                  <p className="text-xs font-semibold text-[#B88714] tracking-wide uppercase mt-1">
                    {wing.grades}
                  </p>
                </div>
              </div>

              {/* Col 2: Focus & Description */}
              <div className="md:col-span-6 space-y-1.5">
                <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <BookCheck className="w-4 h-4 text-[#102A63]" />
                  {wing.focus}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {wing.description}
                </p>
              </div>

              {/* Col 3: Action Link */}
              <div className="md:col-span-2 flex items-center md:justify-end">
                <Link
                  href="/academics"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-[#102A63] transition-colors"
                >
                  <span>Curriculum Details</span>
                  <ChevronRight className="w-4 h-4 text-[#F4C62E] transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
