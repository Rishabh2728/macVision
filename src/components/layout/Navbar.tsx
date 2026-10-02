"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone, MapPin } from "lucide-react";
import Logo from "../ui/Logo";
import { SCHOOL_INFO } from "@/data/schoolInfo";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Campus Life", href: "/campus-life" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Notification / Affiliation Ribbon */}
      <div className="bg-[#0A1D45] text-slate-300 text-xs py-1.5 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300/90">
              <MapPin className="w-3.5 h-3.5 text-[#F4C62E]" />
              Rajpura Road, Dharuhera, Haryana
            </span>
            <span className="text-white/30">•</span>
            <span className="text-slate-300/90 font-medium">
              CBSE Affiliated Senior Secondary Institution
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#F4C62E] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#F4C62E]" />
              {SCHOOL_INFO.phone}
            </a>
            <span className="text-white/30">•</span>
            <span className="text-[#F4C62E] font-medium tracking-wide">
              Admissions Open 2026–27
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#102A63]/95 backdrop-blur-md shadow-lg border-b border-[#F4C62E]/20 py-2 sm:py-2.5"
            : "bg-[#102A63] border-b border-white/10 py-2.5 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* School Logo */}
            <div className="flex-1 min-w-0 pr-2">
              <Logo theme="dark" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-medium tracking-wide rounded-md transition-all duration-200 ${
                      isActive
                        ? "text-[#F4C62E] font-semibold"
                        : "text-slate-100 hover:text-[#F4C62E] hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#F4C62E] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-[#F4C62E] hover:bg-[#D4A31C] text-[#102A63] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
              >
                Enquire Now
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden flex-shrink-0 ml-auto">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F4C62E]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#F4C62E]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Panel */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#102A63] text-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <Logo theme="dark" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F4C62E]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-[#F4C62E]" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col gap-1.5" aria-label="Mobile Navigation">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        isActive
                          ? "bg-white/10 text-[#F4C62E] font-semibold border-l-4 border-[#F4C62E]"
                          : "text-slate-100 hover:bg-white/5 hover:text-[#F4C62E]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer Info & CTA */}
            <div className="pt-6 mt-6 border-t border-white/15 flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-lg bg-[#F4C62E] hover:bg-[#D4A31C] text-[#102A63] font-bold text-sm tracking-wide shadow-md transition-all active:scale-[0.98]"
              >
                Admission Enquiry 2026–27
              </Link>
              <div className="text-xs text-slate-300/80 space-y-1.5 pt-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F4C62E]" />
                  {SCHOOL_INFO.phone}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F4C62E]" />
                  Rajpura Road, Dharuhera, Haryana
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
