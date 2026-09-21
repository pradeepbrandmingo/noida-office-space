"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    area: "",
    spaceType: "",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError("Please fill in your Full Name and Phone Number.");
      return;
    }

    setError("");
    setSubmitted(true);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      company: "",
      area: "",
      spaceType: "",
      requirements: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 7000);
  };

  const badges = [
    {
      icon: "fa-solid fa-location-dot",
      line1: "Prime",
      line2: "Locations",
    },
    {
      icon: "fa-regular fa-building",
      line1: "Verified",
      line2: "Properties",
    },
    {
      icon: "fa-regular fa-handshake",
      line1: "Expert",
      line2: "Assistance",
    },
    {
      icon: "fa-solid fa-headset",
      line1: "End-to-End",
      line2: "Support",
    },
  ];

  return (
    <section className="hero-section relative w-full overflow-hidden bg-[var(--primary)] min-h-[540px] lg:min-h-[600px] flex items-center py-6 sm:py-8 lg:py-10">
      {/* Background Hero Banner Image with Executive Deep Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bgbanners/hero.png"
          alt="Luxury Office Spaces in Noida"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/90 via-[var(--primary)]/75 to-[var(--primary)]/95 lg:bg-gradient-to-r lg:from-[var(--primary)]/95 lg:via-[var(--primary)]/80 lg:to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
          {/* Left Column: Hero Content & Highlights (Compact & Elegant) */}
          <div className="w-full lg:w-[63%] xl:w-[65%] space-y-4 sm:space-y-5 text-left">
            {/* Eyebrow - Subtle slate/grayish white matching reference UI */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-[var(--text-light-muted)]">
                PREMIUM &nbsp;|&nbsp; FLEXIBLE &nbsp;|&nbsp; STRATEGIC
              </span>
            </div>

            {/* Main Title (H1) - Strict Pure Crisp White with Gold Noida and Balanced font-bold */}
            <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.9rem] font-bold !text-[var(--text-white)] tracking-tight leading-[1.14]">
              Find the Perfect <br className="hidden sm:inline" />
              Office Space <br className="hidden sm:inline" />
              in <span className="text-[var(--gold)]">Noida</span>
            </h1>

            {/* Subtitle Description - Pure Crisp Off-White (!text-[var(--text-light)]) */}
            <p className="hero-subtitle text-xs sm:text-sm md:text-[14.5px] !text-[var(--text-light)] leading-relaxed max-w-lg font-normal">
              Modern workspaces for ambitious businesses. From startups to
              enterprises — we help you find the right space to grow.
            </p>

            {/* 4 Feature Badges (Matching Reference UI: Sleek Icon Box + 2-line Text) */}
            <div className="grid grid-cols-2 sm:flex sm:items-center sm:gap-7 lg:gap-8 pt-1">
              {badges.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start gap-1.5 p-2 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.04] sm:bg-transparent border border-white/10 sm:border-0 group cursor-default transition-transform hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-sm flex items-center justify-center text-[var(--gold)] group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--text-white)] transition-all duration-300 shadow-xs">
                    <i className={`${item.icon} text-sm`} aria-hidden="true" />
                  </div>
                  <div className="text-[11.5px] font-semibold text-[var(--text-white)] leading-tight mt-0.5">
                    <div>{item.line1}</div>
                    <div className="text-[var(--text-light-muted)] font-normal">{item.line2}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button (Matching Reference UI with Navy Text on Gold) */}
            <div className="pt-2">
              <Link
                href="/offices"
                className="inline-flex items-center gap-2.5 bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--primary)] font-bold text-xs sm:text-[13.5px] px-6 py-2.5 sm:py-3 rounded-xl shadow-[0_4px_16px_rgba(157,116,72,0.3)] hover:shadow-[0_6px_20px_rgba(157,116,72,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group cursor-pointer"
              >
                <span>Explore Office Spaces</span>
                <i
                  className="fa-solid fa-arrow-right text-[11px] transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Requirement Form Card (Compact Left-to-Right max-w-[350px]) */}
          <div className="w-full lg:w-[35%] xl:w-[33%] max-w-[350px] mx-auto lg:mx-0">
            <div className="bg-[var(--bg-surface)] rounded-2xl p-4 sm:p-5 shadow-[0_12px_36px_-6px_rgba(10,35,60,0.18),0_4px_12px_-2px_rgba(10,35,60,0.06)] border border-[var(--border-card)]">
              {/* Form Header (H4 size matching reference UI) */}
              <div className="mb-3">
                <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--gold)] block">
                  GET STARTED
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[var(--text-heading)] mt-0.5 leading-snug">
                  Share Your Requirements
                </h4>
                <p className="text-[11px] sm:text-xs text-[var(--text-body)] mt-0.5">
                  Our team will get in touch with the best options for you.
                </p>
              </div>

              {/* Form (Compact spacing) */}
              <form onSubmit={handleSubmit} className="space-y-2">
                {/* Full Name */}
                <div className="relative flex items-center">
                  <span className="absolute left-2.5 text-[var(--text-muted)] pointer-events-none text-[11px]">
                    <i className="fa-regular fa-user" aria-hidden="true" />
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 pl-8 pr-3 py-2 text-xs text-[var(--text-heading)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:bg-[var(--bg-surface)] transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="relative flex items-center">
                  <span className="absolute left-2.5 text-[var(--text-muted)] pointer-events-none text-[11px]">
                    <i className="fa-solid fa-phone" aria-hidden="true" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 pl-8 pr-3 py-2 text-xs text-[var(--text-heading)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:bg-[var(--bg-surface)] transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="relative flex items-center">
                  <span className="absolute left-2.5 text-[var(--text-muted)] pointer-events-none text-[11px]">
                    <i className="fa-regular fa-envelope" aria-hidden="true" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 pl-8 pr-3 py-2 text-xs text-[var(--text-heading)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:bg-[var(--bg-surface)] transition-all"
                  />
                </div>

                {/* Company Name */}
                <div className="relative flex items-center">
                  <span className="absolute left-2.5 text-[var(--text-muted)] pointer-events-none text-[11px]">
                    <i className="fa-regular fa-building" aria-hidden="true" />
                  </span>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 pl-8 pr-3 py-2 text-xs text-[var(--text-heading)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:bg-[var(--bg-surface)] transition-all"
                  />
                </div>

                {/* Preferred Area in Noida */}
                <div className="relative flex items-center">
                  <span className="absolute left-2.5 text-[var(--text-muted)] pointer-events-none text-[11px]">
                    <i className="fa-solid fa-map-location-dot" aria-hidden="true" />
                  </span>
                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 pl-8 pr-7 py-2 text-xs text-[var(--text-heading)] focus:outline-none focus:border-[var(--gold)] focus:bg-[var(--bg-surface)] transition-all cursor-pointer"
                  >
                    <option value="">Preferred Area in Noida</option>
                    <option value="Sector 62">Sector 62</option>
                    <option value="Sector 63">Sector 63</option>
                    <option value="Sector 125">Sector 125</option>
                    <option value="Sector 126">Sector 126</option>
                    <option value="Sector 132">Sector 132</option>
                    <option value="Sector 135">Sector 135</option>
                    <option value="Sector 142">Sector 142</option>
                    <option value="Expressway">Noida Expressway</option>
                    <option value="Other">Other Sectors</option>
                  </select>
                  <span className="absolute right-2.5 text-[var(--text-muted)] pointer-events-none text-[9px]">
                    <i className="fa-solid fa-chevron-down" aria-hidden="true" />
                  </span>
                </div>

                {/* Type of Space */}
                <div className="relative flex items-center">
                  <span className="absolute left-2.5 text-[var(--text-muted)] pointer-events-none text-[11px]">
                    <i className="fa-regular fa-rectangle-list" aria-hidden="true" />
                  </span>
                  <select
                    name="spaceType"
                    value={formData.spaceType}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 pl-8 pr-7 py-2 text-xs text-[var(--text-heading)] focus:outline-none focus:border-[var(--gold)] focus:bg-[var(--bg-surface)] transition-all cursor-pointer"
                  >
                    <option value="">Type of Space</option>
                    <option value="IT & Corporate Offices">IT & Corporate Offices</option>
                    <option value="Managed Offices">Managed Offices</option>
                    <option value="Coworking Spaces">Coworking Spaces</option>
                    <option value="Plug & Play Offices">Plug & Play Offices</option>
                    <option value="Commercial Bare Shell">Commercial Bare Shell</option>
                    <option value="Built-to-Suit">Built-to-Suit</option>
                  </select>
                  <span className="absolute right-2.5 text-[var(--text-muted)] pointer-events-none text-[9px]">
                    <i className="fa-solid fa-chevron-down" aria-hidden="true" />
                  </span>
                </div>

                {/* Any Additional Requirements */}
                <div className="relative flex items-center">
                  <span className="absolute left-2.5 text-[var(--text-muted)] pointer-events-none text-[11px]">
                    <i className="fa-regular fa-comment-dots" aria-hidden="true" />
                  </span>
                  <input
                    type="text"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Any Additional Requirements"
                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 pl-8 pr-3 py-2 text-xs text-[var(--text-heading)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:bg-[var(--bg-surface)] transition-all"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-[11px] text-red-500 font-medium">{error}</p>
                )}

                {/* Success Message */}
                {submitted && (
                  <div className="p-2.5 rounded-lg bg-[var(--gold-light)] border border-[var(--gold)] text-[11px] text-[var(--gold-hover)] font-medium flex items-center gap-2 animate-fade-up">
                    <i className="fa-solid fa-circle-check text-xs text-[var(--gold)]" aria-hidden="true" />
                    <span>Thank you! Our specialist will contact you shortly.</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--text-white)] font-bold py-2.5 px-4 rounded-xl shadow-[0_4px_14px_rgba(10,35,60,0.25)] hover:shadow-[0_6px_18px_rgba(10,35,60,0.35)] hover:-translate-y-0.5 active:scale-98 transition-all duration-300 cursor-pointer text-xs sm:text-[13px] group"
                >
                  <span>Get Office Space Options</span>
                  <i
                    className="fa-solid fa-arrow-right text-[10px] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>

                {/* Security Tag */}
                <div className="text-center pt-0.5">
                  <span className="inline-flex items-center gap-1.5 text-[10.5px] text-[var(--text-muted)]">
                    <i className="fa-solid fa-lock text-[9px]" aria-hidden="true" />
                    <span>Your information is safe with us.</span>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
