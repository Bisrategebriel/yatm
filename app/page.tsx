import type { Metadata } from "next";

import Link from "next/link";
import {
  Package, ArrowLeftRight, Truck, ShieldCheck, BarChart3,
  Globe, Award, Users, TrendingUp, CheckCircle2, ArrowRight,
  Star, Wheat, Zap, ShoppingCart, Factory, Ship, Building2,
  Clock, HeartHandshake, Target, Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "YAT - Global Trade & Logistics Solutions",
  description:
    "Delivering seamless manufacturing, global trade, and logistics solutions with precision, reliability, and international expertise.",
  alternates: { canonical: "https://www.yatbusinessgroup.com" },
};

const stats = [
  { value: "4", suffix: "+", label: "Countries Served", icon: Globe },
  { value: "7", suffix: "+", label: "Years of Excellence", icon: Award },
  { value: "$3.2", suffix: "M", label: "Export Projection", icon: TrendingUp },
  { value: "200", suffix: "Ha", label: "Plantation Capacity", icon: Users },
];

const services = [
  {
    href: "/services/import",
    icon: Package,
    title: "Import Services",
    desc: "End-to-end import management — from supplier sourcing and purchase orders to customs clearance and last-mile delivery.",
    highlights: ["Industrial machinery import", "Supplier sourcing & procurement", "Customs clearance", "Port handling & transportation"],
  },
  {
    href: "/services/export",
    icon: ArrowLeftRight,
    title: "Export Services",
    desc: "Expand into international markets with YAT’s export solutions for Ethiopian agricultural products including coffee, sesame, pulses, and oil seeds.",
    highlights: ["Coffee export", "Sesame & oil seeds export", "International buyer connections", "Export documentation support"],
  },
  {
    href: "/services/logistics",
    icon: Truck,
    title: "Freight & Logistics",
    desc: "Reliable shipping, forwarding, and logistics solutions designed to simplify global trade operations for businesses and manufacturers.",
    highlights: ["Shipping & freight forwarding", "Customs clearing services", "Port logistics coordination", "Inland transportation support"],
  },
  {
    href: "/services/manufacturing",
    icon: Factory,
    title: "Manufacturing Solutions",
    desc: "YAT delivers manufacturing support and industrial product solutions with expertise in plastic products, tyre production, and factory systems.",
    highlights: ["Plastic product manufacturing", "Tyre manufacturing", "Factory setup & installation", "Industrial machine supply"],
  },
  {
    href: "/services/consulting",
    icon: BarChart3,
    title: "Consulting & Advisory",
    desc: "Strategic international business consultancy and operational support to help businesses grow in manufacturing, trade, and logistics sectors.",
    highlights: ["International trade consultancy", "Operational training", "Logistics strategy support", "Market expansion guidance"],
  },
];

const differentiators = [
  {
    icon: Globe,
    title: "Truly Global Reach",
    desc: "Deep local expertise in 40+ countries with on-ground agents, regulatory knowledge, and established partner networks.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-First Approach",
    desc: "Every transaction is handled with strict regulatory compliance — from sanctions screening to certificate of origin management.",
  },
  {
    icon: Clock,
    title: "End-to-End Ownership",
    desc: "One point of contact for the entire trade lifecycle. No handoffs, no gaps, no surprises in your supply chain.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    desc: "We grow with you. Our dedicated account managers are invested in your business outcomes, not just individual transactions.",
  },
  {
    icon: Target,
    title: "Sector Specialisation",
    desc: "Deep expertise across Agriculture, Energy, FMCG, Manufacturing, and more — with tailored solutions for each vertical.",
  },
  {
    icon: Lightbulb,
    title: "Data-Driven Insights",
    desc: "Real-time trade analytics, market intelligence reports, and predictive logistics data to keep you ahead of disruptions.",
  },
];

const testimonials = [
  {
    quote: "YAT Business Group transformed our import operations. Their compliance expertise saved us from a costly customs dispute and reduced our clearance time by 40%.",
    name: "Sarah Mitchell",
    title: "VP Supply Chain",
    company: "Meridian Foods Ltd.",
    country: "United Kingdom",
    rating: 5,
  },
  {
    quote: "We expanded into three new African markets in one year with YAT's guidance. Their ground-level network and documentation support was exceptional.",
    name: "Ahmed Al-Rashidi",
    title: "CEO",
    company: "Gulf Trading Corp.",
    country: "UAE",
    rating: 5,
  },
  {
    quote: "Their logistics team handled our most complex multi-modal shipment — across 4 countries — with zero delays. Outstanding professionals.",
    name: "Li Wei",
    title: "Director of Operations",
    company: "Sino-Pacific Manufacturing",
    country: "Singapore",
    rating: 5,
  },
];

const industries = [
  { href: "/industries#agriculture", icon: Wheat, label: "Agriculture" },
  { href: "/industries#energy", icon: Zap, label: "Energy" },
  { href: "/industries#fmcg", icon: ShoppingCart, label: "FMCG" },
  { href: "/industries#manufacturing", icon: Factory, label: "Manufacturing" },
  { href: "/industries#shipping", icon: Ship, label: "Shipping" },
  { href: "/industries#construction", icon: Building2, label: "Construction" },
];

const partners = ["ISO 9001", "Volza", "Global Suppliers", "CTC Certified"];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[100svh] flex items-center overflow-hidden bg-size-[500%] md:bg-size-[150%]"
        style={{
          backgroundColor: "#091E42",
          backgroundImage: "url('/images/bg-landing.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="Hero section"
      >
        {/* Gradient overlay — preserves brand palette and ensures text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(9,30,66,0.88) 0%, rgba(23,43,77,0.80) 45%, rgba(7,71,166,0.70) 75%, rgba(0,82,204,0.60) 100%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #00C7E6 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #4C9AFF 0%, transparent 70%)" }} />

        <div className="container-site relative z-10 pt-28 pb-20">
          <div className="max-w-4xl mx-auto hero-content text-center">
            {/* Trust badge row */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-up">
              {partners.map((p) => (
                <span key={p} className="trust-badge">
                  <CheckCircle2 size={12} className="text-[#00C7E6]" />
                  {p}
                </span>
              ))}
            </div>

            <h1 className="font-display font-extrabold !text-white mb-6 animate-fade-up-delay-1"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: "1.05", letterSpacing: "-0.02em" }}
            >
              Connecting Markets.{" "}
              <span>Moving Goods.</span>
              <br />Growing Business.
            </h1>

            <p className="text-white/70 mb-8 max-w-2xl mx-auto animate-fade-up-delay-2" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: "1.7" }}>
              Delivering seamless manufacturing, global trade, and logistics solutions with precision, reliability, and international expertise.
            </p>

            <div className="flex flex-wrap justify-center gap-4 animate-fade-up-delay-3">
              <Link href="/contact" className="btn btn-white btn-primary-lg text-base">
                Request a Quote
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn btn-ghost-white btn-primary-lg text-base">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-white/30 text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-[#091E42]" aria-label="Key statistics">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center text-center py-10 px-6" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-10 h-10 rounded-[8px] bg-white/8 flex items-center justify-center mb-3">
                  <s.icon size={20} className="text-[#00C7E6]" />
                </div>
                <p className="stat-number">
                  {s.value}<span className="stat-suffix">{s.suffix}</span>
                </p>
                <p className="text-white/55 text-sm font-medium mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="section-py bg-[#F4F5F7]" aria-labelledby="services-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-label mb-4">What We Do</span>
            <h2 id="services-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Comprehensive Trade Solutions
            </h2>
            <p className="text-[#42526E] mt-4 max-w-2xl mx-auto text-lg">
              From a single import shipment to a full-scale global trade strategy — we handle every stage of your international trade operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="service-card group">
                <div className="service-card-icon">
                  <s.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-[#091E42] text-xl mb-2">{s.title}</h3>
                <p className="text-[#42526E] text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                <ul className="flex flex-col gap-1.5 mb-5">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-[#344563]">
                      <CheckCircle2 size={14} className="text-[#00875A] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#0052CC] group-hover:gap-2.5 transition-all mt-auto">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}

            {/* View all card */}
            <div className="service-card items-center justify-center text-center gap-4 border-dashed !border-2 !border-[#C1C7D0] !shadow-none bg-transparent hover:!bg-white hover:!border-[#4C9AFF]">
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#C1C7D0] flex items-center justify-center text-[#97A0AF] mb-2">
                <ArrowRight size={22} />
              </div>
              <p className="font-semibold text-[#344563] text-lg">View All Services</p>
              <p className="text-sm text-[#6B778C]">Explore our full catalogue of business solutions</p>
              <Link href="/services" className="btn btn-primary mt-2 text-sm">
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-py bg-white" aria-labelledby="differentiators-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4">Why YAT</span>
              <h2 id="differentiators-heading" className="font-display font-bold text-[#091E42] mt-4 mb-5"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                The YAT Difference — Built on Trust, Expertise & Results
              </h2>
              <p className="text-[#42526E] text-lg leading-relaxed mb-8">
                We don&#39;t just move goods. We build trade relationships, navigate regulatory complexity, and deliver measurable outcomes for your business — every time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn btn-primary">
                  Our Story
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Talk to an Expert
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {differentiators.map((d) => (
                <div key={d.title} className="diff-item">
                  <div className="diff-icon-wrap flex-shrink-0">
                    <d.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#172B4D] text-sm mb-1">{d.title}</h3>
                    <p className="text-[#6B778C] text-xs leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-py bg-[#F4F5F7]" aria-labelledby="testimonials-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-label mb-4">Client Stories</span>
            <h2 id="testimonials-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#FF8B00" stroke="none" />
                  ))}
                </div>
                <p className="text-[#344563] text-sm leading-relaxed mb-6 relative z-10">{t.quote}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#DEEBFF] flex items-center justify-center font-bold text-[#0052CC] font-display text-sm flex-shrink-0">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-[#172B4D] text-sm">{t.name}</p>
                    <p className="text-xs text-[#6B778C]">{t.title} · {t.company}</p>
                    <p className="text-xs text-[#97A0AF]">{t.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Industries ── */}
      <section className="section-py bg-white" aria-labelledby="industries-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Sectors We Serve</span>
            <h2 id="industries-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Deep Expertise Across Industries
            </h2>
            <p className="text-[#42526E] mt-4 max-w-xl mx-auto">
              From agricultural commodities to industrial energy — we understand the specific compliance, logistics, and market access requirements of your sector.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {industries.map((ind) => (
              <Link key={ind.href} href={ind.href} className="industry-tile">
                <ind.icon size={28} className="industry-icon" />
                <span className="industry-label">{ind.label}</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/industries" className="btn btn-secondary">
              View All Industries <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section-py-sm bg-[#F4F5F7]" aria-label="Call to action">
        <div className="container-site">
          <div className="cta-banner text-center">
            <div className="relative z-10">
              <span className="section-label section-label-light mb-5">Start Today</span>
              <h2 className="font-display font-bold text-white mt-4 mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Ready to Expand Your Trade Reach?
              </h2>
              <p className="text-white/65 mb-8 max-w-xl mx-auto text-lg">
                Speak with a trade specialist today. No commitment — just expert guidance on how to grow your international business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn btn-white btn-primary-lg">
                  Request a Free Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact#rfq" className="btn btn-ghost-white btn-primary-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
