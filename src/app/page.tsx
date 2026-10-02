import React from "react";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import LifeGallerySection from "@/components/home/LifeGallerySection";
import AcademicsPreview from "@/components/home/AcademicsPreview";
import WhyMacVisionSection from "@/components/home/WhyMacVisionSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import AdmissionsCtaSection from "@/components/home/AdmissionsCtaSection";
import NewsEventsSection from "@/components/home/NewsEventsSection";
import ContactMapSection from "@/components/home/ContactMapSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Introduction Section */}
      <IntroSection />

      {/* 3. Educational Philosophy */}
      <PhilosophySection />

      {/* 4. Life at MacVision Image Gallery */}
      <LifeGallerySection />

      {/* 5. Academics Preview */}
      <AcademicsPreview />

      {/* 6. Why MacVision Institutional Principles */}
      <WhyMacVisionSection />

      {/* 7. Leadership Section (J.P. Yadav, CEO) */}
      <LeadershipSection />

      {/* 8. Campus & Facilities */}
      <FacilitiesSection />

      {/* 9. Admissions Call to Action */}
      <AdmissionsCtaSection />

      {/* 10. News & Events CMS-Ready Feed */}
      <NewsEventsSection />

      {/* 11. Visit MacVision & Verified Maps */}
      <ContactMapSection />
    </div>
  );
}
