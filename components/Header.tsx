"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronDown, Globe, Package, ArrowLeftRight,
  Truck, ShieldCheck, BarChart3, Phone
} from "lucide-react";

const services = [
  { href: "/services/import", label: "Import Services", icon: Package, desc: "Global sourcing & import management" },
  { href: "/services/export", label: "Export Services", icon: ArrowLeftRight, desc: "Export documentation & compliance" },
  { href: "/services/logistics", label: "Freight & Logistics", icon: Truck, desc: "End-to-end supply chain solutions" },
  { href: "/services/compliance", label: "Trade Compliance", icon: ShieldCheck, desc: "Customs & regulatory expertise" },
  { href: "/services/consulting", label: "Consulting & Advisory", icon: BarChart3, desc: "Strategic trade consulting" },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/industries", label: "Industries" },
  { href: "/network", label: "Global Network" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_16px_rgba(9,30,66,0.12)] border-b border-[#DFE1E6]"
          : "bg-transparent"
          }`}
        role="banner"
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="YAT Business Group — Home">
              <div className={`w-14 h-14 rounded-[6px] flex items-center justify-center font-bold text-lg font-display transition-colors ${scrolled ? "bg-[#F1F1F1] text-white" : "bg-white text-[#0052CC]"
                }`}>
                <img src="/yatm-logo.png" alt="Logo" width={32} height={32} />
              </div>
              <div className="flex flex-col leading-none">
                <span className={`font-bold text-[1.0625rem] tracking-[-0.01em] font-display transition-colors ${scrolled ? "text-[#091E42]" : "text-white"
                  }`}>
                  YAT Business Group
                </span>
                <span className={`text-[0.6875rem] font-medium tracking-[0.06em] uppercase transition-colors ${scrolled ? "text-[#6B778C]" : "text-white/60"
                  }`}>
                  Global Trade Partners
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onMouseEnter={() => setServicesOpen(true)}
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-[4px] text-sm font-semibold transition-all ${scrolled
                        ? "text-[#253858] hover:text-[#0052CC] hover:bg-[#F4F5F7]"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>

                    {servicesOpen && (
                      <div
                        onMouseLeave={() => setServicesOpen(false)}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[440px] bg-white rounded-[8px] shadow-[0_16px_48px_rgba(9,30,66,0.2),0_0_1px_rgba(9,30,66,0.25)] border border-[#DFE1E6] overflow-hidden z-50"
                        role="menu"
                      >
                        <div className="px-4 py-3 border-b border-[#EBECF0] bg-[#F4F5F7]">
                          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-[#6B778C]">Our Services</p>
                        </div>
                        <div className="p-2">
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setServicesOpen(false)}
                              className="flex items-start gap-3 px-3 py-2.5 rounded-[6px] hover:bg-[#F4F5F7] transition-colors group"
                              role="menuitem"
                            >
                              <div className="w-9 h-9 rounded-[6px] bg-[#DEEBFF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0052CC] transition-colors mt-0.5">
                                <s.icon size={16} className="text-[#0052CC] group-hover:text-white transition-colors" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-[#172B4D] group-hover:text-[#0052CC] transition-colors">{s.label}</p>
                                <p className="text-xs text-[#6B778C] mt-0.5">{s.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="px-4 py-3 border-t border-[#EBECF0] bg-[#F4F5F7]">
                          <Link href="/services" onClick={() => setServicesOpen(false)} className="text-sm font-semibold text-[#0052CC] hover:underline">
                            View all services →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-[4px] text-sm font-semibold transition-all ${scrolled
                      ? "text-[#253858] hover:text-[#0052CC] hover:bg-[#F4F5F7]"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="tel:+251911362741"
                className={`hidden xl:flex items-center gap-2 text-sm font-semibold transition-colors ${scrolled ? "text-[#253858] hover:text-[#0052CC]" : "text-white/80 hover:text-white"
                  }`}
                aria-label="Call us"
              >
                <Phone size={15} />
                <span>(+251) 911-362-741</span>
              </Link>

              <div className="hidden lg:flex">
                <Link href="/contact" className="btn btn-primary text-sm px-5 py-2.5">
                  Contact Us
                </Link>
              </div>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-[4px] transition-colors ${scrolled ? "text-[#253858] hover:bg-[#F4F5F7]" : "text-white hover:bg-white/10"
                  }`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden" aria-modal="true" role="dialog" aria-label="Navigation menu">
          <div className="absolute inset-0 bg-[#091E42]/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-[min(320px,90vw)] bg-white shadow-[0_0_48px_rgba(9,30,66,0.25)] flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between px-5 h-[72px] border-b border-[#EBECF0] flex-shrink-0">
              <span className="font-bold text-[#091E42] font-display">YAT Business Group</span>
              <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded text-[#6B778C] hover:bg-[#F4F5F7]" aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              <Link href="/" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-[6px] text-sm font-semibold text-[#253858] hover:bg-[#F4F5F7] hover:text-[#0052CC] transition-colors flex items-center gap-2">
                <Globe size={16} /> Home
              </Link>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-[6px] text-sm font-semibold text-[#253858] hover:bg-[#F4F5F7] hover:text-[#0052CC] transition-colors">
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 pt-4 border-t border-[#EBECF0]">
                <p className="px-4 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-[#6B778C] mb-2">Services</p>
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-[6px] text-sm text-[#253858] hover:bg-[#F4F5F7] hover:text-[#0052CC] transition-colors">
                    <s.icon size={15} className="text-[#0052CC]" />
                    {s.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="px-4 pb-6 flex flex-col gap-3 border-t border-[#EBECF0] pt-4 flex-shrink-0">
              <Link href="tel:+251911362741" className="flex items-center gap-2 text-sm font-semibold text-[#253858] px-4 py-2.5">
                <Phone size={15} className="text-[#0052CC]" /> (+251) 911-362-741
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn btn-primary w-full justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
