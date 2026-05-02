import type { Metadata } from "next";
import Link from "next/link";
import { Package, CheckCircle2, ArrowRight, Globe, ShieldCheck, Clock, FileText, Search, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Import Services",
  description:
    "YAT Business Group's end-to-end import services: supplier sourcing, HS code classification, customs clearance, duty optimisation, and last-mile delivery across 40+ source markets.",
  alternates: { canonical: "https://www.yatbusinessgroup.com/services/import" },
};

const process = [
  { step: "01", icon: Search, title: "Supplier Identification", desc: "We source and vet reliable suppliers in your target markets, conducting due diligence and quality assessments before any commitment." },
  { step: "02", icon: FileText, title: "Documentation Preparation", desc: "Commercial invoices, packing lists, certificates of origin, import licences — every document prepared accurately and on time." },
  { step: "03", icon: ShieldCheck, title: "Compliance Review", desc: "HS code classification, restricted goods screening, anti-dumping checks, and sanctions compliance before shipment departs." },
  { step: "04", icon: Truck, title: "Freight & Logistics", desc: "Coordinating sea, air, or multimodal shipments with our carrier network for optimal cost and transit times." },
  { step: "05", icon: Globe, title: "Customs Clearance", desc: "Our licensed customs brokers manage the full clearance process — duty payments, tariff classifications, and examinations." },
  { step: "06", icon: Clock, title: "Last-Mile Delivery", desc: "Final delivery to your warehouse, distribution centre, or end destination with real-time tracking throughout." },
];

const features = [
  "Supplier sourcing & vetting across 40+ source markets",
  "Purchase order (PO) management",
  "HS tariff code classification",
  "Import duty & VAT calculation",
  "Customs clearance & brokerage",
  "Import documentation management",
  "Anti-dumping duty advisory",
  "Restricted & prohibited goods advisory",
  "Bonded warehouse & duty deferment",
  "Free trade agreement (FTA) utilisation",
  "Import quota management",
  "Post-clearance audit support",
];

const categories = [
  "Agricultural commodities & food products",
  "Industrial machinery & equipment",
  "Consumer electronics",
  "Pharmaceuticals & medical devices",
  "Chemicals & raw materials",
  "Textiles & apparel",
  "Automotive parts & components",
  "FMCG & packaged goods",
];

export default function ImportPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">/</span>
            <Link href="/services">Services</Link><span className="breadcrumb-sep">/</span>
            <span>Import Services</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-[8px] bg-white/10 flex items-center justify-center">
              <Package size={24} className="text-white" />
            </div>
            <span className="section-label section-label-light">Import Services</span>
          </div>
          <h1 className="font-display font-extrabold text-white mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1" }}
          >
            End-to-End Import<br />Management
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed mb-8">
            From supplier identification and documentation to customs clearance and last-mile delivery — we manage every stage of your import operation with precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-white btn-primary-lg">Request a Quote <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn btn-ghost-white btn-primary-lg">Speak to a Specialist</Link>
          </div>
        </div>
      </div>

      {/* Process */}
      <section className="section-py bg-white" aria-labelledby="process-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-label mb-4">How It Works</span>
            <h2 id="process-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Our Import Process
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.step} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-extrabold text-[#EBECF0] font-display leading-none">{p.step}</span>
                  <div className="w-10 h-10 rounded-[8px] bg-[#DEEBFF] flex items-center justify-center">
                    <p.icon size={18} className="text-[#0052CC]" />
                  </div>
                </div>
                <h3 className="font-bold text-[#091E42] mb-2">{p.title}</h3>
                <p className="text-sm text-[#6B778C] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Categories */}
      <section className="section-py bg-[#F4F5F7]" aria-label="Import service features">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-bold text-[#091E42] text-2xl mb-6">Full-Scope Import Services</h2>
              <div className="grid gap-2">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3 py-2">
                    <CheckCircle2 size={16} className="text-[#00875A] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#344563]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display font-bold text-[#091E42] text-2xl mb-6">Supported Product Categories</h2>
              <div className="grid gap-3">
                {categories.map((c) => (
                  <div key={c} className="flex items-center gap-3 p-3 bg-white rounded-[6px] border border-[#DFE1E6] text-sm text-[#344563] font-medium">
                    <div className="w-2 h-2 rounded-full bg-[#0052CC] flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py-sm bg-white">
        <div className="container-site">
          <div className="cta-banner text-center">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                Ready to Simplify Your Imports?
              </h2>
              <p className="text-white/65 mb-7 max-w-md mx-auto">Tell us what you need to import and where from. We'll handle the rest.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn btn-white btn-primary-lg">Get a Quote <ArrowRight size={16} /></Link>
                <Link href="/contact" className="btn btn-ghost-white btn-primary-lg">Contact a Specialist</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
