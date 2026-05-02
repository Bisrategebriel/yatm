import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftRight, CheckCircle2, ArrowRight, FileText, ShieldCheck, Globe, Package, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Export Services",
  description: "YAT Business Group export services: export licensing, documentation, packaging compliance, destination market regulatory support across 35+ export corridors.",
  alternates: { canonical: "https://www.yatbusinessgroup.com/services/export" },
};

const process = [
  { step: "01", icon: Globe, title: "Market Assessment", desc: "We evaluate your target export market — regulations, tariff structures, local standards, and competitive landscape." },
  { step: "02", icon: ShieldCheck, title: "Compliance Planning", desc: "Export control classification, sanctions screening, denied party checks, and licence requirement assessment." },
  { step: "03", icon: FileText, title: "Documentation", desc: "Export licences, commercial invoices, packing lists, certificates of origin, phytosanitary and health certificates." },
  { step: "04", icon: Package, title: "Packaging & Labelling", desc: "Destination-market compliant packaging, labelling in required languages, and product marking requirements." },
  { step: "05", icon: ArrowLeftRight, title: "Shipment & Customs", desc: "Export customs filing, commodity screening, and coordinated departure with your freight forwarder." },
  { step: "06", icon: BarChart3, title: "Performance Reporting", desc: "Post-shipment analytics, delivery confirmation, and trade performance dashboards for your records." },
];

const features = [
  "Export market feasibility studies",
  "Export licensing & permits",
  "Commodity classification (ECCN / Schedule B)",
  "Certificate of origin processing",
  "Export documentation package",
  "Packaging & labelling compliance",
  "Phytosanitary & health certificates",
  "Destination country import requirements",
  "Denied party & sanctions screening",
  "Export credit insurance coordination",
  "Free trade agreement tariff benefits",
  "Export incentive & duty drawback advisory",
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
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1" }}
          >
            Export with Confidence<br />to 35+ Markets
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed mb-8">
            We navigate export regulations, documentation, and destination market compliance so you can focus on growing your international sales pipeline.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-white btn-primary-lg">Request a Quote <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn btn-ghost-white btn-primary-lg">Speak to an Expert</Link>
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
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-bold text-[#091E42] text-2xl mb-6">Export Service Capabilities</h2>
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
              <h2 className="font-display font-bold text-[#091E42] text-2xl mb-6">Export Destinations Covered</h2>
              <div className="grid gap-3">
                {destinations.map((d) => (
                  <div key={d} className="flex items-center gap-3 p-3 bg-white rounded-[6px] border border-[#DFE1E6] text-sm text-[#344563] font-medium">
                    <div className="w-2 h-2 rounded-full bg-[#00875A] flex-shrink-0" />
                    {d}
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
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
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
