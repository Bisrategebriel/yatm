import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight, AlertTriangle, FileSearch, Globe, BarChart3, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Trade Compliance",
  description: "YAT Business Group trade compliance services: customs audits, sanctions screening, tariff classification, AEO support, and regulatory change monitoring.",
  alternates: { canonical: "https://www.yatbusinessgroup.com/services/compliance" },
};

const services = [
  { icon: FileSearch, title: "Customs Compliance Audits", desc: "Comprehensive review of your import/export records, classification accuracy, valuation methods, and procedural compliance to identify risks before regulators do." },
  { icon: AlertTriangle, title: "Sanctions & Denied Party Screening", desc: "Automated and manual screening against OFAC, EU, UN, and UK sanctions lists to ensure every transaction is legally compliant." },
  { icon: Globe, title: "Tariff Classification & Engineering", desc: "Accurate HS code assignment, tariff engineering opportunities, and binding ruling applications to minimize duty exposure." },
  { icon: BarChart3, title: "Free Trade Agreement Utilisation", desc: "We identify applicable FTAs, prepare origin documentation, and implement preferential tariff programmes to reduce your import duty burden." },
  { icon: ShieldCheck, title: "Export Controls Advisory", desc: "ECCN classification, EAR/ITAR compliance, export licence applications, and technology transfer controls for dual-use and controlled goods." },
  { icon: BookOpen, title: "Compliance Training & Workshops", desc: "Tailored in-house training programmes for procurement, operations, and finance teams on customs, sanctions, and trade compliance best practices." },
  { icon: Users, title: "AEO Application Support", desc: "Full support for Authorised Economic Operator status applications — UK, EU, UAE, and other jurisdiction-specific trusted trader programmes." },
  { icon: AlertTriangle, title: "Anti-Dumping Advisory", desc: "Monitoring and advisory on anti-dumping and countervailing duty orders that may impact your product categories and source markets." },
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
            <span>Trade Compliance</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-[8px] bg-white/10 flex items-center justify-center">
              <ShieldCheck size={24} className="text-white" />
            </div>
            <span className="section-label section-label-light">Trade Compliance</span>
          </div>
          <h1 className="font-display font-extrabold text-white mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1" }}
          >
            Protecting Your Business<br />from Regulatory Risk
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed mb-8">
            Trade compliance failures can mean penalties, shipment seizures, and reputational damage. Our specialists ensure every transaction is audit-ready and fully compliant across all jurisdictions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-white btn-primary-lg">Request a Compliance Audit <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn btn-ghost-white btn-primary-lg">Speak to a Specialist</Link>
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
              Full-Spectrum Compliance Services
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

      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label mb-4">Why It Matters</span>
              <h2 className="font-display font-bold text-[#091E42] mt-4 mb-5"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                The Cost of Non-Compliance
              </h2>
              <div className="flex flex-col gap-4 text-[#344563]">
                <p>Trade non-compliance can result in cargo seizures, financial penalties running into millions, loss of import/export privileges, and severe reputational damage to your brand.</p>
                <p>Our proactive compliance model identifies risks before they become violations — saving clients an average of 34% in potential penalties and 2–5 days per shipment in clearance delays.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Customs misclassification penalties", range: "$5K – $500K+ per violation" },
                { label: "Sanctions violations (US OFAC)", range: "Up to $1M per transaction" },
                { label: "Export control violations (EAR/ITAR)", range: "Up to $1M + criminal liability" },
                { label: "Anti-dumping duty back-payments", range: "100%–300% of cargo value" },
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
