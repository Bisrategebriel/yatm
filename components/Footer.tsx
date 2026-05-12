import Link from "next/link";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon, XIcon, FacebookIcon } from "@/components/SocialIcons";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/about#leadership", label: "Leadership" },
    { href: "/about#certifications", label: "Certifications" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services/import", label: "Import Services" },
    { href: "/services/export", label: "Export Services" },
    { href: "/services/logistics", label: "Freight & Logistics" },
    { href: "/services/manufacturing", label: "Manufacturing" },
    { href: "/services/consulting", label: "Consulting & Advisory" },
  ],
  explore: [
    { href: "/industries", label: "Industries" },
    { href: "/network", label: "Global Network" },
    { href: "/contact#rfq", label: "Request a Quote" },
  ],
  legal: [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "/legal/cookies", label: "Cookie Policy" },
  ],
};

const offices = [
  { city: "Addis Ababa", address: "Kirkos Sub-city, Woreda 07, Addis Ababa, Ethiopia" },
  { city: "Djibouti", address: "Djibouti, Djibouti" },
  { city: "Dubai", address: "Dubai, UAE" },
  { city: "China", address: "Xi'an High-Tech Industries Development Zone Shaanxi Province, China" },
];

export default function Footer() {
  return (
    <footer className="bg-[#091E42] text-white" aria-label="Site footer">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-site section-py-sm">
          <div className="cta-banner">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-2" style={{ color: "#fff" }}>
                  Ready to expand your trade reach?
                </h2>
                <p className="text-white/70 text-sm md:text-base max-w-lg">
                  Connect with our experts today and discover how YAT Business Group can open new markets for your business.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href="/contact" className="btn btn-white btn-primary-lg">
                  Request a Quote
                </Link>
                <Link href="/services" className="btn btn-ghost-white btn-primary-lg">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 xl:gap-8">
          {/* Brand column */}
          <div className="xl:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5" aria-label="YAT Business Group home">
              <div className="w-10 h-10 rounded-md bg-[#FFFFFF] flex items-center justify-center font-bold text-xl font-display">
                <img src="/yatm-logo.png" alt="Logo" width={32} height={32} />
              </div>
              <div>
                <p className="font-bold text-lg text-white font-display leading-tight">YAT Business Group</p>
                <p className="text-xs text-white/50 tracking-[0.06em] uppercase">Global Trade Partners</p>
              </div>
            </Link>

            <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-sm">
              Connecting businesses to global markets through expert import, export, manufacturing, and logistics solutions.
              Trusted by leading enterprises across the globe.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mb-8">
              {[
                { href: "https://linkedin.com", Icon: LinkedInIcon, label: "LinkedIn" },
                { href: "https://twitter.com", Icon: XIcon, label: "Twitter / X" },
                { href: "https://facebook.com", Icon: FacebookIcon, label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/8 transition-all"
                >
                  <s.Icon size={16} />
                </a>
              ))}
            </div>

            {/* Contact quick links */}
            <div className="flex flex-col gap-3">
              <a href="mailto:info@yat-m.com" className="flex items-center gap-2.5 text-sm text-white/65 hover:text-white transition-colors">
                <Mail size={14} className="text-[#4C9AFF] shrink-0" />
                info@yat-m.com
              </a>
              <a href="mailto:yatagro@gmail.com" className="flex items-center gap-2.5 text-sm text-white/65 hover:text-white transition-colors">
                <Mail size={14} className="text-[#4C9AFF] shrink-0" />
                yatagro@gmail.com
              </a>
              <a href="tel:+251911362741" className="flex items-center gap-2.5 text-sm text-white/65 hover:text-white transition-colors">
                <Phone size={14} className="text-[#4C9AFF] shrink-0" />
                (+251) 911-362-741
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/65">
                <Globe size={14} className="text-[#4C9AFF] shrink-0 mt-0.5" />
                Operating in 3+ countries worldwide
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-white/40 mb-4">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-white/40 mb-4">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-white/40 mb-4 mt-8">Explore</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-white/40 mb-4">Offices</h3>
            <ul className="flex flex-col gap-5">
              {offices.map((o) => (
                <li key={o.city} className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-[#4C9AFF] shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-white/85 mb-0.5">{o.city}</p>
                    <p className="text-xs text-white/50 leading-relaxed">{o.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} &nbsp; All rights reserved. &nbsp; Built with Purpose by &nbsp; <Link style={{ color: "#FF5A00" }} href="https://flint-technologies.com">Flint Technologies</Link>
            </p>
            <div className="flex items-center gap-5">
              {footerLinks.legal.map((l) => (
                <Link key={l.href} href={l.href} className="text-xs text-white/40 hover:text-white/70 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
