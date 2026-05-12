import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftRight, CheckCircle2, ArrowRight, FileText, ShieldCheck, Globe, Package, BarChart3 } from "lucide-react";
import ExportMapContainer from "@/components/ExportMapContainer";

export const metadata: Metadata = {
  title: "Export Services",
  description: "Expand into international markets with YAT’s export solutions for Ethiopian agricultural products including coffee, sesame, pulses, and oil seeds.",
  alternates: { canonical: "https://www.yat-m.com/services/export" },
};

const process = [
  { step: "01", icon: Globe, title: "Product Selection & Quality Preparation", desc: "Carefully selecting and preparing export products such as coffee, sesame, oil seeds, and pulses according to international quality standards." },
  { step: "02", icon: ShieldCheck, title: "Buyer Connection & Trade Coordination", desc: "Connecting with international buyers, negotiating trade terms, and confirming export agreements through YAT’s global business network." },
  { step: "03", icon: FileText, title: "Documentation & Export Compliance", desc: "Preparing export documentation, certifications, customs requirements, and shipping paperwork for international trade compliance." },
  { step: "04", icon: Package, title: "Packaging & Logistics Arrangement", desc: "Managing product packaging, warehousing, cargo handling, and transportation coordination for safe international delivery." },
  { step: "05", icon: ArrowLeftRight, title: "Shipping & Freight Forwarding", desc: "Coordinating sea freight, cargo forwarding, and international shipping operations through trusted logistics partners." },
  { step: "06", icon: BarChart3, title: "Delivery & Market Fulfillment", desc: "Ensuring products reach international buyers efficiently while maintaining quality, reliability, and long-term trade relationships." },
];

const features = [
  "Coffee export (Sidama, Yirgacheffe, & Kochere coffee)",
  "Sesame export",
  "Oil seeds export",
  "Pulses export",
  "Green mung bean export",
  "Tea export",
  "Agricultural product sourcing and supply",
  "International buyer network coordination",
  "Export trade consultancy",
  "Export documentation support",
  "International shipping coordination",
  "Freight forwarding services",
  "Customs clearing services",
  "Port handling operations",
  "Inland transportation and logistics support",
  "Warehousing and storage planning",
  "Coffee storage warehouse development",
  "Coffee cleaning and blowing operations (planned expansion)",
  "Roasted coffee export development",
  "Quality-focused export handling",
  "Global market access support",
  "Cross-border trade coordination",
  "Supply chain and logistics management",
  "Agricultural export market expansion support",
];

const destinations = [
  "European Union (27 member states)", "United Kingdom", "UAE & GCC Countries",
  "Sub-Saharan Africa", "Southeast Asia (ASEAN)", "China & Hong Kong",
  "India & South Asia", "North America", "Latin America", "Australia & New Zealand",
];

export default function ExportPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">/</span>
            <Link href="/services">Services</Link><span className="breadcrumb-sep">/</span>
            <span>Export Services</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-[8px] bg-white/10 flex items-center justify-center">
              <ArrowLeftRight size={24} className="text-white" />
            </div>
            <span className="section-label section-label-light">Export Services</span>
          </div>
          <h1 className="font-display font-extrabold text-white mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", color: "#FFFFFF" }}
          >
            Export with Confidence<br />to 35+ Markets
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed mb-8">
            We navigate export regulations, documentation, and destination market compliance so you can focus on growing your international sales pipeline.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-white btn-primary-lg">Request a Quote <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn btn-ghost-white btn-primary-lg">Explore Export Services</Link>
          </div>
        </div>
      </div>

      <section className="section-py bg-white" aria-labelledby="process-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-label mb-4">Our Approach</span>
            <h2 id="process-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >Our Export Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.step} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-extrabold text-[#EBECF0] font-display leading-none">{p.step}</span>
                  <div className="w-10 h-10 rounded-[8px] bg-[#E3FCEF] flex items-center justify-center">
                    <p.icon size={18} className="text-[#00875A]" />
                  </div>
                </div>
                <h3 className="font-bold text-[#091E42] mb-2">{p.title}</h3>
                <p className="text-sm text-[#6B778C] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[#F4F5F7]">
        <div className="container-site">
          <div className="flex flex-col gap-16">
            {/* Map on top - Full Width */}
            <div>
              <div className="text-center mb-8">
                <h2 className="font-display font-bold text-[#091E42] mt-1"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>Global Export Reach</h2>
                <p className="text-[#6B778C] text-sm">Visualizing our active trade routes from Ethiopia to over 35+ international markets.</p>
              </div>
              <ExportMapContainer />
            </div>

            {/* Capabilities below - Full Width Wrapping List */}
            <div>
              <div className="text-center mb-10">
                <h2 className="font-display font-bold text-[#091E42] mt-4"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>Export Service Capabilities</h2>
                <p className="text-[#6B778C] text-sm">Comprehensive solutions for navigating international trade regulations and logistics.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3 px-5 py-4 bg-white rounded-lg border border-[#DFE1E6] shadow-sm hover:border-[#00875A] transition-colors">
                    <CheckCircle2 size={16} className="text-[#00875A] flex-shrink-0" />
                    <span className="text-sm font-medium text-[#344563] leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py-sm bg-white">
        <div className="container-site">
          <div className="cta-banner text-center">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#FFFFFF" }}>
                Ready to Reach New Markets?
              </h2>
              <p className="text-white/65 mb-7 max-w-md mx-auto">Tell us your target destinations. We'll assess the regulatory requirements and build your export plan.</p>
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
