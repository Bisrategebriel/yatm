import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight, AlertTriangle, FileSearch, Globe, BarChart3, Users, BookOpen, Factory, WheatIcon, ContactIcon, ForkliftIcon, RecycleIcon, VanIcon, PackageOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing",
  description: "YAT delivers manufacturing support and industrial product solutions with expertise in plastic products, tyre production, and factory systems.",
  alternates: { canonical: "https://www.yat-m.com/services/manufacturing" },
};

const services = [
  { icon: PackageOpen, title: "Plastic Product Manufacturing", desc: "Production of quality plastic products designed for commercial and industrial applications." },
  { icon: VanIcon, title: "Tyre Manufacturing", desc: "Supporting industrial and commercial sectors through tyre manufacturing operations and related production activities." },
  { icon: ForkliftIcon, title: "Industrial Machinery Supply", desc: "Import and supply of industrial machines and equipment for manufacturing facilities and production operations." },
  { icon: Factory, title: "Factory Design & Installation", desc: "Providing industrial setup support for factories and production facilities." },
  { icon: RecycleIcon, title: "Recycling & Industrial Systems", desc: "Supporting sustainable industrial operations through recycling and processing machinery solutions." },
  { icon: ContactIcon, title: "Technical & Operational Support", desc: "Helping businesses improve operational efficiency through guidance, coordination, and training support." },
  { icon: Users, title: "Manufacturing Consultancy", desc: "Strategic support and consultancy services for businesses planning to establish or expand manufacturing operations." },
  { icon: WheatIcon, title: "Agro-Processing Support", desc: "Supporting agro-processing operations through industrial solutions, machinery coordination, and production infrastructure support." },
];

const stats = [
  { value: "0", label: "Compliance penalties across 3,000+ managed shipments" },
  { value: "100%", label: "Sanctions screening coverage on all transactions" },
  { value: "18+", label: "Jurisdictions actively monitored for regulatory changes" },
  { value: "95%", label: "Customs audit rate — clean outcomes with no penalties" },
];

export default function CompliancePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">/</span>
            <Link href="/services">Services</Link><span className="breadcrumb-sep">/</span>
            <span>Manufacturing</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-[8px] bg-white/10 flex items-center justify-center">
              <Factory size={24} className="text-white" />
            </div>
            <span className="section-label section-label-light">Manufacturing</span>
          </div>
          <h1 className="font-display font-extrabold text-white mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", color: "#FFFFFF" }}
          >
            Manufacturing Solutions <br />Built for Quality, Efficiency & Growth
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed mb-8">
            YAT Manufacturing P.L.C. delivers reliable manufacturing, industrial machinery, and factory support solutions designed to help businesses operate efficiently and scale with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-white btn-primary-lg">Request Quote <ArrowRight size={16} /></Link>
            <Link href="/services/manufacturing#why-it-matters" className="btn btn-ghost-white btn-primary-lg">Why It Matters</Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="bg-[#091E42]" aria-label="Compliance statistics">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center py-10 px-6">
                <p className="stat-number">{s.value}</p>
                <p className="text-white/55 text-xs font-medium mt-2 max-w-[140px] mx-auto leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[#F4F5F7]" aria-labelledby="services-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-label mb-4">Our Capabilities</span>
            <h2 id="services-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Manufacturing Capabilities
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="card p-6">
                <div className="w-11 h-11 rounded-[8px] bg-[#DEEBFF] flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-[#0747A6]" />
                </div>
                <h3 className="font-bold text-[#091E42] text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-[#6B778C] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white" id="why-it-matters">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label mb-4">Why It Matters</span>
              <h2 className="font-display font-bold text-[#091E42] mt-4 mb-5"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                Manufacturing Built on Quality, Precision & Reliability
              </h2>
              <div className="flex flex-col gap-4 text-[#344563]">
                <p>At YAT Manufacturing P.L.C., we understand that every product, machine, and production system directly impacts business performance. That is why we focus on dependable manufacturing processes, quality-driven operations, and industrial solutions designed to support long-term growth.</p>
                <p>From plastic product manufacturing to industrial machinery support and factory setup solutions, we help businesses operate with greater efficiency, consistency, and confidence.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Losing Money From Production Downtime?", range: "$5,000–$50,000 per hour on production scale" },
                { label: "Dealing With Poor Product Quality?", range: "10%–20% of total manufacturing costs" },
                { label: "Struggling With Inefficient Operations?", range: "reduce productivity & delivery by up to 30%" },
                { label: "Losing Clients Due to Delayed Deliveries?", range: "increase customer churn by up to 25%." },
              ].map((r) => (
                <div key={r.label} className="p-4 rounded-[8px] border border-[#FF5630] bg-[#FFEBE6] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <AlertTriangle size={16} className="text-[#DE350B] flex-shrink-0" />
                    <span className="text-sm text-[#344563] font-medium">{r.label}</span>
                  </div>
                  <span className="text-sm font-bold text-[#BF2600] whitespace-nowrap">{r.range}</span>
                </div>
              ))}
              <div className="mt-2">
                <Link href="/contact" className="btn btn-primary w-full justify-center">
                  Protect Your Business Today <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py-sm bg-[#F4F5F7]">
        <div className="container-site">
          <div className="cta-banner text-center">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                Start with a Compliance Health Check
              </h2>
              <p className="text-white/65 mb-7 max-w-md mx-auto">We'll review your current trade compliance posture and identify the highest-priority risks — at no cost.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn btn-white btn-primary-lg">Free Compliance Review <ArrowRight size={16} /></Link>
                <Link href="/contact" className="btn btn-ghost-white btn-primary-lg">Talk to an Expert</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
