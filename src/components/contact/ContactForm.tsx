"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Calendar, User, Phone, Mail, GraduationCap } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    grade: "",
    preferredDate: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.studentName.trim()) errs.studentName = "Student name is required";
    if (!formData.parentName.trim()) errs.parentName = "Parent/Guardian name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.grade) errs.grade = "Please select a grade";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean frontend confirmation without pretending a fake backend delivered an email
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border-2 border-emerald-200 p-8 sm:p-10 shadow-lg text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#102A63] mb-2">
          Walkthrough Request Received
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
          Thank you, <span className="font-semibold text-slate-900">{formData.parentName}</span>. Your campus walkthrough inquiry for <span className="font-semibold text-slate-900">{formData.studentName}</span> ({formData.grade}) has been registered in the frontend demonstration portal.
        </p>
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto mb-6 text-left space-y-1.5">
          <p><span className="font-semibold text-slate-800">Direct Helpline:</span> +91 8683 901 901</p>
          <p><span className="font-semibold text-slate-800">Email:</span> admissions@macvision.org</p>
          <p><span className="font-semibold text-slate-800">Visiting Hours:</span> Mon–Sat: 8:00 AM – 3:30 PM</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              studentName: "",
              parentName: "",
              phone: "",
              email: "",
              grade: "",
              preferredDate: "",
              notes: "",
            });
          }}
          className="text-xs font-bold text-[#102A63] hover:underline"
        >
          ← Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-6 sm:p-10">
      <div className="mb-6">
        <span className="text-[11px] font-bold text-[#B88714] uppercase tracking-wider px-2.5 py-1 rounded bg-amber-50 border border-amber-200">
          Campus Experience
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A63] mt-2">
          Book an Academic Walkthrough
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Tour our classrooms, meet department heads, and inspect campus facilities with our admissions counselors.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Row 1: Names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Student Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                placeholder="e.g. Aarav Sharma"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#102A63] ${
                  errors.studentName ? "border-red-400 bg-red-50/30" : "border-slate-300 bg-white"
                }`}
              />
              <User className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>
            {errors.studentName && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.studentName}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Parent / Guardian Name *
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                placeholder="e.g. Rajesh Sharma"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#102A63] ${
                  errors.parentName ? "border-red-400 bg-red-50/30" : "border-slate-300 bg-white"
                }`}
              />
              <User className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>
            {errors.parentName && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.parentName}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Phone Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98XXX XXXXX"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#102A63] ${
                  errors.phone ? "border-red-400 bg-red-50/30" : "border-slate-300 bg-white"
                }`}
              />
              <Phone className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>
            {errors.phone && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="parent@example.com"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#102A63] ${
                  errors.email ? "border-red-400 bg-red-50/30" : "border-slate-300 bg-white"
                }`}
              />
              <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>
            {errors.email && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Grade & Preferred Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Grade Applying For *
            </label>
            <div className="relative">
              <select
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#102A63] appearance-none bg-white ${
                  errors.grade ? "border-red-400 bg-red-50/30" : "border-slate-300"
                }`}
              >
                <option value="">Select Grade Level</option>
                <option value="Pre-Nursery / Nursery / KG">Early Years (Pre-Nursery – KG)</option>
                <option value="Primary (Grade 1 - 5)">Primary (Grades I – V)</option>
                <option value="Middle School (Grade 6 - 8)">Middle School (Grades VI – VIII)</option>
                <option value="Secondary (Grade 9 - 10)">Secondary (Grades IX – X)</option>
                <option value="Senior Secondary (Grade 11 - 12)">Senior Secondary (Grades XI – XII)</option>
              </select>
              <GraduationCap className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>
            {errors.grade && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.grade}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Preferred Tour Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#102A63] bg-white"
              />
              <Calendar className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Questions / Specific Academic Interests
          </label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Let us know if you require hostel inspection, sports facilities details, or special academic counseling..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#102A63] bg-white"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-lg bg-[#102A63] hover:bg-[#123B82] text-white text-sm font-bold tracking-wide transition-all shadow-md active:scale-[0.98] inline-flex items-center justify-center gap-2 disabled:opacity-75"
          >
            {isSubmitting ? "Registering Appointment..." : "Request Campus Appointment"}
            <ArrowRight className="w-4 h-4 text-[#F4C62E]" />
          </button>
          <p className="text-[11px] text-slate-400 text-center mt-2.5">
            By submitting, you agree to receive official tour confirmation updates via SMS/WhatsApp from the admissions office.
          </p>
        </div>
      </form>
    </div>
  );
}
