"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Container from "@/components/ui/Container";
import { featuredPropertiesData as defaultProperties } from "@/data/featuredPropertiesData";
import { useInView } from "@/hooks/useInView";

/**
 * FeaturedPropertiesSection Component ("Premium Office Spaces in Noida")
 *
 * Features:
 * - Production-ready real-time Sector Filter Pills with dynamic counts
 * - Custom Theme-styled Sort dropdown
 * - 12 Property Cards (NO price displayed as requested)
 * - Click on card / View Details ready for Modal popup form
 * - Pure FontAwesome WebFonts (ZERO SVG tags)
 * - 100% Global Theme tokens
 * - Luxury background ambient arcs and typography animation on the right
 * - Bottom Customized Space requirement banner
 */
export default function FeaturedPropertiesSection({
  properties = defaultProperties,
  onOpenForm,
}) {
  const [sectionRef, isInView] = useInView({ threshold: 0.08, triggerOnce: true });
  const [activeSector, setActiveSector] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [favorites, setFavorites] = useState({});
  const sortRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sortOptions = [
    { value: "latest", label: "Latest" },
    { value: "area-high", label: "Area: High to Low" },
    { value: "area-low", label: "Area: Low to High" },
  ];

  // Dynamic Sectors List with exact counts
  const sectorCounts = useMemo(() => {
    const counts = { all: properties.length };
    properties.forEach((item) => {
      counts[item.sector] = (counts[item.sector] || 0) + 1;
    });
    return counts;
  }, [properties]);

  const filterTabs = [
    { id: "all", label: `All Properties (${sectorCounts.all || properties.length})`, hasIcon: true },
    { id: "Sector 62", label: `Sector 62 (${sectorCounts["Sector 62"] || 0})` },
    { id: "Sector 63", label: `Sector 63 (${sectorCounts["Sector 63"] || 0})` },
    { id: "Sector 125", label: `Sector 125 (${sectorCounts["Sector 125"] || 0})` },
    { id: "Sector 135", label: `Sector 135 (${sectorCounts["Sector 135"] || 0})` },
    { id: "Sector 142", label: `Sector 142 (${sectorCounts["Sector 142"] || 0})` },
    { id: "Sector 18", label: `Sector 18 (${sectorCounts["Sector 18"] || 0})` },
  ];

  // Filtered & Sorted Properties
  const displayedProperties = useMemo(() => {
    let list = properties;
    if (activeSector !== "all") {
      list = properties.filter((p) => p.sector === activeSector);
    }

    if (sortBy === "area-high") {
      return [...list].sort((a, b) => parseInt(b.area) - parseInt(a.area));
    }
    if (sortBy === "area-low") {
      return [...list].sort((a, b) => parseInt(a.area) - parseInt(b.area));
    }
    return list;
  }, [properties, activeSector, sortBy]);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCardClick = (property) => {
    if (onOpenForm) {
      onOpenForm(property);
    }
  };

  return (
    <section
      id="featured-spaces"
      ref={sectionRef}
      className="featured-properties-section global-section-padding bg-[var(--bg-main)] relative overflow-hidden"
    >
      {/* Top Center Luxury Sub-Heading */}
      <Container className="relative z-10">
        <div
          className={`flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 transition-opacity duration-500 ${
            isInView ? "animate-fade-down" : "opacity-0"
          }`}
        >
          <span className="w-10 sm:w-16 h-[1.5px] bg-[var(--gold)]/60 rounded-full" />
          <span className="text-[9.5px] sm:text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--text-heading)]">
            DIFFERENT BUSINESSES. A BETTER TOMORROW.
          </span>
          <span className="w-10 sm:w-16 h-[1.5px] bg-[var(--gold)]/60 rounded-full" />
        </div>

        {/* Section Header Row with Luxury Right Side Rainbow Arc Graphic */}
        <div
          className={`flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative mb-8 sm:mb-10 transition-opacity duration-500 ${
            isInView ? "animate-fade-up delay-100" : "opacity-0"
          }`}
        >
          {/* Left Title Content */}
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2.5 mb-1.5">
              <span className="w-7 sm:w-8 h-[2px] bg-[var(--gold)] rounded-full" />
              <span className="text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.2em] uppercase text-[var(--gold)]">
                FEATURED SPACES
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold text-[var(--text-heading)] leading-tight tracking-tight mt-1">
              Premium Office Spaces <span className="text-[var(--gold)]">in Noida</span>
            </h2>

            <p className="text-[13px] sm:text-[14.5px] text-[var(--text-body)] font-normal mt-2 max-w-xl leading-relaxed">
              Explore handpicked office spaces in prime locations, designed to help your business grow.
            </p>
          </div>

          {/* Right Header Area: Tagline & Cursive Script (Cleanly visible on desktop/tablet, hidden on mobile) */}
          <div className="hidden md:flex items-center shrink-0 relative">
            {/* WORK GROW BELONG */}
            <div className="flex items-center gap-3 border-l border-[var(--border-subtle)] pl-3.5 pr-4 shrink-0 z-10">
              <div className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--text-muted)] leading-[1.6]">
                <div>WORK</div>
                <div>GROW</div>
                <div>BELONG</div>
              </div>
            </div>

            {/* Script Watermark Text: Spaces for a Bigger Tomorrow */}
            <div className="hidden lg:block select-none pl-3 pr-2">
              <div className="font-script -rotate-7 text-right text-[var(--text-muted)] leading-[1.12]">
                <div className="text-[19px] sm:text-[21px] font-medium">Spaces</div>
                <div className="text-[16px] sm:text-[17px] font-normal italic -my-0.5">for a</div>
                <div className="text-[20px] sm:text-[22px] font-semibold text-[var(--text-body)]">Bigger Tomorrow</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills Bar & Sort Dropdown */}
        <div
          className={`relative z-30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-2 mb-6 sm:mb-8 transition-opacity duration-500 ${
            isInView ? "animate-fade-up delay-200" : "opacity-0"
          }`}
        >
          {/* Sector Pills (Smooth edge-to-edge touch scroll on mobile) */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1.5 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none flex-1">
            {filterTabs.map((tab) => {
              const isActive = activeSector === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveSector(tab.id)}
                  className={`px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-xs sm:text-[12.5px] font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center shrink-0 ${
                    isActive
                      ? "bg-[var(--gold)] text-white shadow-sm"
                      : "bg-[var(--bg-surface)] text-[var(--text-body)] border border-[var(--border-card)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  }`}
                >
                  {tab.hasIcon && (
                    <i
                      className="fa-solid fa-table-cells-large text-[10px] sm:text-[11px] mr-1.5"
                      aria-hidden="true"
                    />
                  )}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Sort By Dropdown (Theme-styled luxury dropdown) */}
          <div
            ref={sortRef}
            className="relative flex items-center justify-between sm:justify-end gap-2 shrink-0 select-none z-30 pt-1 sm:pt-0"
          >
            <span className="text-[11px] sm:text-xs text-[var(--text-muted)] font-normal">Sort By:</span>

            {/* Trigger Button */}
            <button
              type="button"
              onClick={() => setIsSortOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 py-1 text-xs font-semibold text-[var(--text-heading)] hover:text-[var(--gold)] cursor-pointer transition-colors focus:outline-none"
              aria-haspopup="listbox"
              aria-expanded={isSortOpen}
            >
              <span>{sortOptions.find((o) => o.value === sortBy)?.label || "Latest"}</span>
              <i
                className={`fa-solid fa-chevron-down text-[9px] text-[var(--gold)] transition-transform duration-200 ${
                  isSortOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Custom Theme-Colored Dropdown Menu */}
            {isSortOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-44 bg-[var(--bg-surface)] rounded-xl border border-[var(--gold-border)] shadow-[0_12px_30px_-6px_rgba(10,35,60,0.14)] py-1.5 z-50 animate-fade-in overflow-hidden">
                {sortOptions.map((opt) => {
                  const isSelected = sortBy === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setSortBy(opt.value);
                        setIsSortOpen(false);
                      }}
                      className={`w-full px-3.5 py-2 text-left text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-[var(--gold-light)] text-[var(--gold)] font-semibold"
                          : "text-[var(--text-heading)] hover:bg-[var(--gold-light)]/60 hover:text-[var(--gold)]"
                      }`}
                    >
                      <span>{opt.label}</span>
                      {isSelected && (
                        <i className="fa-solid fa-check text-[10px] text-[var(--gold)]" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* 12 Property Cards Grid (4 columns on desktop, 2 on tablet/mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5 lg:gap-5">
          {displayedProperties.map((property, idx) => (
            <div
              key={property.id}
              onClick={() => handleCardClick(property)}
              className={`group bg-[var(--bg-surface)] rounded-2xl overflow-hidden border border-[var(--border-card)] shadow-[0_2px_12px_rgba(10,35,60,0.04)] hover:-translate-y-1.5 hover:shadow-[0_16px_32px_-6px_rgba(10,35,60,0.12)] hover:border-[var(--gold)]/45 transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between ${
                isInView ? `animate-fade-up delay-${Math.min((idx + 1) * 60, 500)}` : "opacity-0"
              }`}
            >
              {/* Card Image with Badge & Wishlist Heart */}
              <div className="relative w-full h-[162px] sm:h-[170px] lg:h-[176px] overflow-hidden bg-[var(--primary)]">
                <img
                  src={property.image}
                  alt={`${property.title} - Office Space in ${property.location}`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Status Badge (Top-Left) */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="bg-[var(--gold-light)] text-[var(--gold-hover)] border border-[var(--gold-border)]/70 font-bold text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                    {property.badge}
                  </span>
                </div>

                {/* Wishlist Heart Button (Top-Right) */}
                <button
                  type="button"
                  onClick={(e) => toggleFavorite(e, property.id)}
                  aria-label="Add to favorites"
                  className="absolute top-2.5 right-2.5 z-10 w-7.5 h-7.5 rounded-full bg-black/25 backdrop-blur-xs flex items-center justify-center text-white hover:text-red-400 hover:bg-black/45 transition-all cursor-pointer border border-white/20 shadow-xs"
                >
                  <i
                    className={`${
                      favorites[property.id]
                        ? "fa-solid fa-heart text-red-500"
                        : "fa-regular fa-heart"
                    } text-[11.5px]`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Card Details Body */}
              <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Property Title (Balanced & compact 14px) */}
                  <h4
                    className="property-card-title text-[var(--text-heading)] group-hover:text-[var(--gold)] transition-colors tracking-tight truncate"
                    style={{ fontSize: "14px", lineHeight: "1.3", fontWeight: "700" }}
                    title={property.title}
                  >
                    {property.title}
                  </h4>

                  {/* Location */}
                  <div
                    className="flex items-center gap-1.5 text-[var(--text-muted)] font-normal mt-0.5"
                    style={{ fontSize: "11.5px" }}
                  >
                    <i className="fa-solid fa-location-dot text-[var(--gold)] text-[10px]" aria-hidden="true" />
                    <span className="truncate">{property.location}</span>
                  </div>

                  {/* 3 Spec Badges with Vertical Dividers (Compact, no truncation like Screenshot 2) */}
                  <div className="flex items-center justify-between text-[10px] text-[var(--text-body)] font-medium pt-2 pb-0.5 border-t border-[var(--border-subtle)] mt-2">
                    {/* Area */}
                    <div className="flex items-center gap-1 shrink-0">
                      <i className="fa-regular fa-building text-[var(--gold)] text-[9.5px]" aria-hidden="true" />
                      <span className="whitespace-nowrap">{property.area}</span>
                    </div>

                    <span className="text-[var(--border-subtle)] text-[10px] select-none font-light">|</span>

                    {/* Workstations */}
                    <div className="flex items-center gap-1 shrink-0">
                      <i className="fa-solid fa-chair text-[var(--gold)] text-[9.5px]" aria-hidden="true" />
                      <span className="whitespace-nowrap">{property.workstations}</span>
                    </div>

                    <span className="text-[var(--border-subtle)] text-[10px] select-none font-light">|</span>

                    {/* Cabins */}
                    <div className="flex items-center gap-1 shrink-0">
                      <i className="fa-regular fa-id-badge text-[var(--gold)] text-[9.5px]" aria-hidden="true" />
                      <span className="whitespace-nowrap">{property.cabins}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Bar: Price on Request + View Details Action */}
                <div className="pt-2 border-t border-[var(--border-subtle)] mt-2 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[var(--gold)]">
                    Price on Request
                  </span>

                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[var(--text-heading)] group-hover:text-[var(--gold)] transition-colors">
                    <span>View Details</span>
                    <div className="w-5.5 h-5.5 rounded-full bg-[var(--gold)] text-white flex items-center justify-center text-[8px] group-hover:translate-x-0.5 group-hover:bg-[var(--gold-hover)] transition-all shadow-xs">
                      <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Customized Space Requirement Banner (Exact match to reference screenshot) */}
        <div
          className={`mt-10 sm:mt-12 bg-gradient-to-r from-[var(--gold-light)] via-[var(--bg-surface)] to-[var(--gold-light)] rounded-2xl border border-[var(--gold-border)] p-3.5 sm:p-4 lg:py-3 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-5 shadow-xs relative overflow-hidden transition-opacity duration-500 ${
            isInView ? "animate-fade-up delay-300" : "opacity-0"
          }`}
        >
          {/* Left Block: Subtitle, Heading, Subtext + Inline Action Button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 lg:gap-5 shrink-0 text-left w-full md:w-auto">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[9.5px] font-bold tracking-[0.16em] uppercase text-[var(--gold)]">
                <span className="w-3.5 h-[1.5px] bg-[var(--gold)] rounded-full" />
                <span>LOOKING FOR A CUSTOMIZED SPACE?</span>
              </div>

              <h3 className="text-[16px] sm:text-[17.5px] lg:text-[18.5px] font-bold text-[var(--text-heading)] leading-snug tracking-tight mt-0.5">
                Tell us your requirements.
              </h3>

              <p className="text-[10.5px] sm:text-[11px] text-[var(--text-muted)] font-normal mt-0.5">
                Our experts will shortlist the best options for you.
              </p>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => onOpenForm && onOpenForm({ type: "customized" })}
              className="w-full sm:w-auto px-4.5 py-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] !text-white font-semibold text-[11.5px] sm:text-[12px] inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer shrink-0 group"
            >
              <span>Talk to Our Expert</span>
              <i className="fa-solid fa-arrow-right text-[9.5px] group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </button>
          </div>

          {/* Center: Luxury Office Lounge Image with Arch Left Border and Gradient Fade */}
          <div className="relative h-[78px] sm:h-[84px] lg:h-[88px] w-full max-w-[170px] lg:max-w-[210px] shrink-0 overflow-hidden rounded-l-[50px] sm:rounded-l-[60px] border-l-2 border-t border-b border-[var(--gold-border)]/70 hidden md:block">
            <img
              src="/images/properties/customized-space-banner.jpg"
              alt="Customized Office Space Lounge"
              className="w-full h-full object-cover object-center"
              style={{
                maskImage: "linear-gradient(to right, black 65%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, black 65%, transparent 100%)",
              }}
            />
          </div>

          {/* Right Highlights: 3 Trust Badges & Slogan */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 shrink-0 border-t md:border-t-0 border-[var(--gold-border)]/60 pt-3 md:pt-0 w-full md:w-auto justify-between md:justify-end">
            <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-4 w-full md:w-auto">
              {/* Prime Locations */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-1.5 text-center sm:text-left">
                <i className="fa-solid fa-location-dot text-[var(--gold)] text-[12px] sm:text-[13px]" aria-hidden="true" />
                <div className="text-[9.5px] sm:text-[10px] font-semibold text-[var(--text-heading)] leading-tight">
                  <div>Prime</div>
                  <div>Locations</div>
                </div>
              </div>

              {/* Verified Properties */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-1.5 text-center sm:text-left">
                <i className="fa-solid fa-shield-halved text-[var(--gold)] text-[12px] sm:text-[13px]" aria-hidden="true" />
                <div className="text-[9.5px] sm:text-[10px] font-semibold text-[var(--text-heading)] leading-tight">
                  <div>Verified</div>
                  <div>Properties</div>
                </div>
              </div>

              {/* End-to-End Support */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-1.5 text-center sm:text-left">
                <i className="fa-solid fa-handshake text-[var(--gold)] text-[12px] sm:text-[13px]" aria-hidden="true" />
                <div className="text-[9.5px] sm:text-[10px] font-semibold text-[var(--text-heading)] leading-tight">
                  <div>End-to-End</div>
                  <div>Support</div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-7 w-[1px] bg-[var(--gold-border)] hidden xl:block shrink-0" />

            {/* Slogan */}
            <div className="hidden xl:block text-left shrink-0">
              <div className="text-[8.5px] font-bold tracking-[0.16em] uppercase text-[var(--text-muted)] leading-[1.3]">
                <div>MORE THAN</div>
                <div>SPACES</div>
                <div>WE CREATE</div>
                <div>POSSIBILITIES</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
