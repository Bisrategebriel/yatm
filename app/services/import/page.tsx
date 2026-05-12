import type { Metadata } from "next";
import Link from "next/link";
import { Package, CheckCircle2, ArrowRight, ShieldCheck, FileText, Search, Truck, ContactIcon, FormIcon } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";

export const metadata: Metadata = {
  title: "Import Services",
  description:
    "Source industrial machinery, manufacturing equipment, stationery materials, and specialized products through trusted international supplier networks. YAT manages the complete import process from sourcing to customs clearance and delivery.",
  alternates: { canonical: "https://www.yat-m.com/services/import" },
};

const process = [
  { step: "01", icon: Search, title: "Product Inquiry & Requirement Analysis", desc: "Understanding the client’s product needs, specifications, quantity, sourcing requirements, and delivery expectations." },
  { step: "02", icon: FileText, title: "International Supplier Sourcing", desc: "Identifying and connecting with trusted international manufacturers and suppliers through YAT’s global business network." },
  { step: "03", icon: ShieldCheck, title: "Quotation & Procurement Agreement", desc: "Preparing quotations, confirming pricing, negotiating terms, and finalizing procurement and supply agreements." },
  { step: "04", icon: Truck, title: "Shipping & Freight Coordination", desc: "Managing cargo booking, shipping arrangements, freight forwarding, and preparation of required import documentation." },
  { step: "05", icon: FormIcon, title: "Customs Clearance & Port Handling", desc: "Handling customs clearing procedures, port operations, cargo inspection, and inland logistics coordination." },
  { step: "06", icon: ContactIcon, title: "Delivery & Operational Support", desc: "Delivering products to the client’s destination while providing installation guidance, operational support, or training when required." },
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

const importSlides = [
  {
    id: 1,
    image: "/images/services/industrial-machinery.png",
    title: "Industrial Machinery Import",
    description: "Import of industrial and manufacturing machinery including plastic film machines, extruders, recycling systems, slaughtering equipment, and metal molds for industrial operations."
  },
  {
    id: 2,
    image: "/images/services/manufacturing-equipment.png",
    title: "Sewing Machine Supply",
    description: "Supply and import of industrial and commercial sewing machines including Hanma and Protex machine lines for textile and manufacturing businesses."
  },
  {
    id: 3,
    image: "/images/services/stationery-materials.png",
    title: "Stationery & Paper Products Import",
    description: "Import of paper and non-paper stationery materials for commercial, educational, and operational use."
  },
  {
    id: 4,
    image: "/images/services/construction-materials.png",
    title: "Raw Materials & Scrap Import",
    description: "Import of metal and non-metal scrap materials and other industrial raw materials required for manufacturing and production sectors."
  },
  {
    id: 5,
    image: "/images/services/manufacturing-equipment.png",
    title: "Factory Design & Installation Support",
    description: "Providing factory layout planning, machinery installation coordination, and operational setup support for industrial projects."
  },
  {
    id: 6,
    image: "/images/services/freight-shipping.png",
    title: "Freight Forwarding & Shipping",
    description: "Managing international cargo movement, shipping coordination, container booking, and forwarding operations through trusted logistics networks."
  },
  {
    id: 7,
    image: "/images/services/customs-clearing.png",
    title: "Customs Clearing Services",
    description: "Handling customs documentation, cargo clearance procedures, inspection processes, and compliance requirements for imported goods."
  },
  {
    id: 8,
    image: "/images/services/freight-shipping.png",
    title: "Port Handling & Inland Transport",
    description: "Coordinating cargo unloading, port logistics, warehousing support, and transportation from ports to final destinations."
  },
  {
    id: 9,
    image: "/images/services/manufacturing-equipment.png",
    title: "Supplier & Procurement Support",
    description: "Connecting clients with trusted international suppliers and manufacturers while supporting sourcing, negotiation, and procurement processes."
  },
  {
    id: 10,
    image: "/images/services/industrial-machinery.png",
    title: "Technical & Operational Training",
    description: "Providing operational guidance and training support for imported machinery, industrial systems, and business operations where required."
  }
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
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", color: "#FFFFFF" }}
          >
            End-to-End Import<br />Management
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed mb-8">
            From supplier identification and documentation to customs clearance and last-mile delivery — we manage every stage of your import operation with precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-white btn-primary-lg">Request a Quote <ArrowRight size={16} /></Link>
            <Link href="/services/import#full-scope-import-services" className="btn btn-ghost-white btn-primary-lg">Explore Import Services</Link>
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
      <section className="section-py bg-[#F4F5F7]" aria-label="Import service features" id="full-scope-import-services">
        {/* Slider Gallery */}
        <div className="container-site mt-4">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-[#091E42] mt-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Full-Scope Import Services
            </h2>
            <p className="text-[#6B778C] text-sm">Visualizing our specialized product import and procurement expertise.</p>
          </div>
          <ImageSlider slides={importSlides} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-py-sm bg-white">
        <div className="container-site">
          <div className="cta-banner text-center">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#FFFFFF" }}>
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
