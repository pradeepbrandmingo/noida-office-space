"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Office Spaces", href: "/offices" },
    { label: "About Us", href: "/about" },
    { label: "Why Noida", href: "/why-noida" },
    { label: "Our Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[var(--border-subtle)]">
      <Container>
        <div className="flex h-22 sm:h-26 md:h-[102px] items-center justify-between py-1.5">
          {/* Logo on Left - Big, Bold & Highly Visible on Desktop and Mobile */}
          <Link href="/" className="flex items-center shrink-0 overflow-visible">
            <Image
              src="/images/logo/logo.png"
              alt="Noida Office Spaces"
              width={300}
              height={140}
              priority
              className="h-18 sm:h-22 md:h-[92px] w-auto object-contain scale-115 sm:scale-120 md:scale-125 origin-left transition-transform"
            />
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`relative text-[14.5px] transition-colors py-2.5 ${
                    isActive
                      ? "font-bold text-[var(--text-heading)]"
                      : "font-medium text-[var(--text-body)] hover:text-[var(--text-heading)]"
                  }`}
                >
                  {item.label}
                  {/* Golden Active Underline Bar */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[var(--gold)] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Call Now Button (Desktop Only) */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:9999901196"
              className="btn btn-blue px-5 sm:px-6 py-2.5 flex items-center gap-3.5"
            >
              {/* FontAwesome Phone Icon (Pure <i> tag, Absolutely NO SVG) */}
              <i className="fa-solid fa-phone text-[var(--text-white)] text-[15px] shrink-0" aria-hidden="true" />

              {/* Call Text */}
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[12px] font-medium text-[var(--text-white)]">
                  Call Now
                </span>
                <span className="text-[15px] font-bold text-[var(--text-white)] tracking-wider mt-0.5">
                  99999 01196
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Right Section - Stylish Staggered Menu Button (No SVG) */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-12 h-12 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--primary)] flex items-center justify-center cursor-pointer shadow-xs hover:bg-[var(--bg-subtle)] active:scale-95 transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <i className="fa-solid fa-xmark text-[22px] text-[var(--primary)] transition-transform duration-200" aria-hidden="true" />
              ) : (
                <i className="fa-solid fa-bars-staggered text-[20px] text-[var(--primary)] transition-transform duration-200" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--border-subtle)] py-4 px-2 space-y-1 bg-[var(--bg-surface)] animate-fade-up shadow-lg rounded-b-2xl">
            {navLinks.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-colors ${
                    isActive
                      ? "bg-[var(--gold-light)] text-[var(--gold)] font-bold"
                      : "text-[var(--text-body)] font-medium hover:bg-[var(--bg-subtle)]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                  )}
                </Link>
              );
            })}

            {/* Mobile Call Now Button inside dropdown */}
            <div className="pt-3 px-2">
              <a
                href="tel:9999901196"
                className="btn btn-blue w-full py-3 text-sm font-bold gap-3"
              >
                {/* FontAwesome Phone Icon (Pure <i> tag, Absolutely NO SVG) */}
                <i className="fa-solid fa-phone text-[var(--text-white)] text-[14px]" aria-hidden="true" />
                <span>Call Now: 99999 01196</span>
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
