import type { Metadata } from "next";
import Link from "next/link";
import {
  Package, ArrowLeftRight, Truck, ShieldCheck, BarChart3,
  ArrowRight, CheckCircle2, Globe, Factory
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore YAT Business Group's full suite of global trade services: import, export, freight & logistics, manufacturing, and strategic consulting.",
  alternates: { canonical: "https://www.yat-m.com/services" },
};

const services = [
  {
    href: "/services/import",
    icon: Package,
    title: "Import Services",
    color: "#0052CC",
    bgColor: "#DEEBFF",
    desc: "Source industrial machinery, manufacturing equipment, stationery materials, and specialized products through trusted international supplier networks.",
    features: [
      "Industrial machinery import", "Supplier sourcing & procurement", "Customs clearance",
      "Port handling & transportation",
    ],
    callout: "Serving 40+ source markets across the globe.",
  },
  {
    href: "/services/export",
    icon: ArrowLeftRight,
    title: "Export Services",
    color: "#00875A",
    bgColor: "#E3FCEF",
    desc: "Expand into international markets with YAT’s export solutions for Ethiopian agricultural products including coffee, sesame, pulses, and oil seeds.",
    features: [
      "Coffee export (Sidama, Yirgacheffe, Kochere)", "Sesame & oil seeds export",
      "International buyer connections", "Export documentation support",
    ],
    callout: "Active export corridors to 35+ destination markets",
  },
  {
    href: "/services/logistics",
    icon: Truck,
    title: "Freight & Logistics",
    color: "#FF8B00",
    bgColor: "#FFF0B3",
    desc: "Reliable shipping, forwarding, and logistics solutions designed to simplify global trade operations for businesses and manufacturers.",
    features: [
      "Shipping & freight forwarding", "Customs clearing services",
      "Port logistics coordination", "Inland transportation support",
    ],
    callout: "15+ port connections across 4 continents",
  },
  {
    href: "/services/manufacturing",
    icon: Factory,
    title: "Manufacturing",
    color: "#0747A6",
    bgColor: "#DEEBFF",
    desc: "Manufacturing support and industrial product solutions with expertise in plastic products, tyre production, and factory systems.",
    features: [
      "Plastic product manufacturing", "Tyre manufacturing",
      "Factory setup & installation", "Industrial machine supply",
    ],
    callout: "Zero compliance penalties across 3,000+ managed shipments",
  },
  {
    href: "/services/consulting",
    icon: BarChart3,
    title: "Consulting & Advisory",
    color: "#00B8D9",
    bgColor: "#E6FCFF",
    desc: "Strategic international business consultancy and operational support to help businesses grow in manufacturing, trade, and logistics sectors.",
    features: [
      "International trade consultancy", "Operational training",
      "Logistics strategy support", "Market expansion guidance",
    ],
    callout: "Average 18% cost reduction achieved for consulting clients",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Services</span>
          </nav>
          <span className="section-label section-label-light mb-4">What We Offer</span>
          <h1 className="font-display font-extrabold text-white mt-4 mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", color: "#FFFFFF" }}
          >
            Comprehensive Global<br />Trade Solutions
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            From a single import shipment to a full-scale global trade operation — we deliver the expertise, connections, and execution your business needs to succeed internationally.
          </p>
        </div>
      </div>

      {/* Services intro */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="container-narrow text-center mb-16">
            <h2 className="font-display font-bold text-[#091E42] mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              One Partner. Every Stage of Global Trade.
            </h2>
            <p className="text-[#42526E] text-lg leading-relaxed">
              International trade involves dozens of moving parts — regulatory, logistical, and commercial. YAT Business Group provides integrated solutions across all five pillars of global trade, so you never have to manage multiple vendors or knowledge gaps.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {services.map((s, i) => (
              <article key={s.href} className="card p-0 overflow-hidden" aria-labelledby={`service-${i}-heading`}>
                <div className={`flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Color panel */}
                  <div className="lg:w-72 xl:w-80 flex-shrink-0 flex flex-col items-center justify-center p-10 text-center"
                    style={{ background: `linear-gradient(135deg, ${s.color}18 0%, ${s.color}08 100%)`, borderRight: i % 2 === 0 ? `1px solid ${s.color}20` : "none", borderLeft: i % 2 === 1 ? `1px solid ${s.color}20` : "none" }}
                  >
                    <div className="w-16 h-16 rounded-[12px] flex items-center justify-center mb-4" style={{ background: s.bgColor }}>
                      <s.icon size={30} style={{ color: s.color }} />
                    </div>
                    <h2 id={`service-${i}-heading`} className="font-display font-bold text-[#091E42] text-lg mb-3">{s.title}</h2>
                    <p className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: `${s.color}15`, color: s.color }}>
                      {s.callout}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 lg:p-10">
                    <p className="text-[#344563] leading-relaxed mb-6">{s.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2 mb-7">
                      {s.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-[#344563]">
                          <CheckCircle2 size={14} className="flex-shrink-0" style={{ color: s.color }} />
                          {f}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link href={s.href} className="btn btn-primary text-sm">
                        Learn More <ArrowRight size={14} />
                      </Link>
                      <Link href="/contact" className="btn btn-secondary text-sm">
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py-sm bg-[#F4F5F7]">
        <div className="container-site">
          <div className="cta-banner text-center">
            <div className="relative z-10">
              <Globe size={36} className="text-white/30 mx-auto mb-4" />
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#FFFFFF" }}>
                Not Sure Which Service You Need?
              </h2>
              <p className="text-white/65 mb-7 max-w-lg mx-auto">
                Our trade specialists will assess your requirements and recommend the optimal solution. Free, no-obligation consultation.
              </p>
              <Link href="/contact" className="btn btn-white btn-primary-lg">
                Talk to a Specialist <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
