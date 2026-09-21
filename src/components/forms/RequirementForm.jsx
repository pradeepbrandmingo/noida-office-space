"use client";

import { useState, useEffect } from "react";

/**
 * RequirementForm Component
 * 
 * Reusable luxury requirement form used in:
 * 1. HeroSection (floating requirement card)
 * 2. RequirementModal (popup modal triggered by card clicks across the site)
 * 
 * Backend-ready: Accepts onSubmit, initialData, isSubmitting props.
 * 100% Theme Token styling - Zero custom hex colors, Zero SVGs.
 */
export default function RequirementForm({
  initialData = {},
  onSubmit,
  isSubmitting = false,
  isModal = false,
  badge = "GET STARTED",
  title = "Share Your Requirements",
  subtitle = "Our team will get in touch with the best options for you.",
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    fullName: initialData.fullName || "",
    phone: initialData.phone || "",
    email: initialData.email || "",
    company: initialData.company || "",
    area: initialData.area || "",
    spaceType: initialData.spaceType || "",
    requirements: initialData.requirements || "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Sync initialData if modal reopens with a new card context
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData((prev) => ({
        ...prev,
        fullName: initialData.fullName !== undefined ? initialData.fullName : prev.fullName,
        phone: initialData.phone !== undefined ? initialData.phone : prev.phone,
        email: initialData.email !== undefined ? initialData.email : prev.email,
        company: initialData.company !== undefined ? initialData.company : prev.company,
        area: initialData.area !== undefined ? initialData.area : prev.area,
        spaceType: initialData.spaceType !== undefined ? initialData.spaceType : prev.spaceType,
        requirements: initialData.requirements !== undefined ? initialData.requirements : prev.requirements,
      }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError("Please fill in your Full Name and Phone Number.");
      return;
    }

    setError("");

    // Backend API callback
    if (onSubmit) {
      try {
        await onSubmit(formData);
      } catch (err) {
        setError(err.message || "Something went wrong. Please try again.");
        return;
      }
    }

    // Default success flow
    setSubmitted(true);
    if (onSuccess) onSuccess(formData);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        company: "",
        area: "",
        spaceType: "",
        requirements: "",
      });
    }, 6000);
  };

  const formContent = (
    <>
      {/* Form Header (H4 size matching reference UI) */}
      <div className="mb-3 text-left">
        <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--gold)] block">
          {badge}
        </span>
        <h4 className="text-base sm:text-lg font-bold text-[var(--text-heading)] mt-0.5 leading-snug">
          {title}
        </h4>
        <p className="text-[11.5px] sm:text-xs !text-[var(--text-body)] mt-1 font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Form Fields (Compact spacing matching reference UI) */}
      <form onSubmit={handleSubmit} className="space-y-2 text-left">
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
            required
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
            required
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
            required
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
            <option value="Noida Expressway">Noida Expressway</option>
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

        {/* Submit Button (Global Blue Button with refined font size & weight) */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-blue w-full py-2.5 px-4 text-[12px] sm:text-[12.5px] font-medium sm:font-semibold tracking-normal group cursor-pointer disabled:opacity-75"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <i className="fa-solid fa-circle-notch fa-spin text-xs" aria-hidden="true" />
              <span>Submitting...</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <span>Get Office Space Options</span>
              <i className="fa-solid fa-arrow-right text-[9.5px]" aria-hidden="true" />
            </span>
          )}
        </button>

        {/* Security Tag */}
        <div className="text-center pt-0.5">
          <span className="inline-flex items-center gap-1.5 text-[10.5px] text-[var(--text-muted)]">
            <i className="fa-solid fa-lock text-[9px]" aria-hidden="true" />
            <span>Your information is safe with us.</span>
          </span>
        </div>
      </form>
    </>
  );

  if (isModal) {
    return <div className="w-full">{formContent}</div>;
  }

  return (
    <div className="form-card w-full max-w-[380px] bg-[var(--bg-surface)] rounded-2xl p-4.5 sm:p-5 shadow-[0_12px_36px_-6px_rgba(10,35,60,0.18),0_4px_12px_-2px_rgba(10,35,60,0.06)] border border-[var(--border-card)]">
      {formContent}
    </div>
  );
}
