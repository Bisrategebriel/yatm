import type { Metadata } from "next";
import Link from "next/link";
import { Wheat, Zap, ShoppingCart, Factory, Ship, Building2, Pill, Car, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description: "YAT Business Group serves Agriculture, Energy, FMCG, Shipping, and Manufacturing, industries with specialist trade solutions.",
  alternates: { canonical: "https://www.yat-m.com/industries" },
};

const industries = [
  {
    id: "agriculture",
    icon: Wheat,
    title: "Agriculture & Food",
    color: "#00875A",
    bg: "#E3FCEF",
    tagline: "From farm to global market",
    desc: "We manage the complex phytosanitary, food safety, and commodity regulations that govern agricultural trade — enabling fresh produce, grains, and processed foods to move across borders efficiently.",
    capabilities: [
      "Phytosanitary certificate management",
      "HACCP & food safety compliance",
      "Cold chain logistics",
      "Agricultural commodity financing",
      "Seasonal import/export planning",
      "Organic certification documentation",
    ],
    markets: "Africa · South America · Southeast Asia · Eastern Europe",
  },
  {
    id: "energy",
    icon: Zap,
    title: "Energy & Commodities",
    color: "#FF8B00",
    bg: "#FFF0B3",
    tagline: "Powering global energy trade",
    desc: "Specialized handling for energy commodities — from crude oil and LNG to renewables equipment. We navigate the strict safety, documentation, and regulatory requirements of the energy sector.",
    capabilities: [
      "Dangerous goods handling (IMDG/ADR)",
      "Project cargo & oversized equipment",
      "Energy sector regulatory compliance",
      "Letter of credit (LC) coordination",
      "Commodity price risk advisory",
      "Port-to-plant logistics management",
    ],
    markets: "Gulf States · West Africa · North America · Central Asia",
  },
  {
    id: "fmcg",
    icon: ShoppingCart,
    title: "FMCG & Consumer Goods",
    color: "#0052CC",
    bg: "#DEEBFF",
    tagline: "Speed and scale for consumer markets",
    desc: "FMCG demands speed, volume, and supply chain efficiency. We build the logistics infrastructure and compliance frameworks that let consumer brands launch and scale in new markets.",
    capabilities: [
      "High-volume LCL/FCL consolidation",
      "Labelling & packaging compliance",
      "Retail import regulations",
      "E-commerce cross-border logistics",
      "Shelf-life management & customs timing",
      "Distribution partner vetting",
    ],
    markets: "EU · Middle East · Sub-Saharan Africa · Southeast Asia",
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing & Industrial",
    color: "#344563",
    bg: "#EBECF0",
    tagline: "Precision supply chains for industry",
    desc: "From raw material imports to finished goods exports, we build resilient manufacturing supply chains with customs bonding, duty optimisation, and inward processing relief.",
    capabilities: [
      "Inward processing relief (IPR)",
      "Customs bonded warehousing",
      "HS code & tariff engineering",
      "Machinery & equipment imports",
      "ISO 9001 compliant documentation",
      "Just-in-time logistics coordination",
    ],
    markets: "China · Vietnam · Germany · Mexico · India",
  },
  {
    id: "shipping",
    icon: Ship,
    title: "Shipping & Maritime",
    color: "#0747A6",
    bg: "#DEEBFF",
    tagline: "The backbone of global trade",
    desc: "Port agency services, ship spares logistics, crew supply chain management, and maritime compliance — designed for operators who need precision at sea.",
    capabilities: [
      "Ship spares & maintenance logistics",
      "Port clearance & agency coordination",
      "Maritime customs compliance",
      "Crew supply & provisioning logistics",
      "Flag state documentation",
      "ATA Carnet for equipment",
    ],
    markets: "Singapore · Dubai · Rotterdam · Houston · Shanghai",
  },
  {
    id: "construction",
    icon: Building2,
    title: "Construction & Infrastructure",
    color: "#253858",
    bg: "#EBECF0",
    tagline: "Moving materials for mega-projects",
    desc: "From steel and cement imports to heavy equipment logistics, we support infrastructure projects across emerging markets with the specialized logistics they demand.",
    capabilities: [
      "Heavy lift & project cargo",
      "Temporary import permits",
      "ATA Carnet for equipment",
      "Construction material classification",
      "Site-specific delivery coordination",
      "Bonded stores for project consumables",
    ],
    markets: "East Africa · Gulf Region · Southeast Asia · West Africa",
  },
  {
    id: "pharma",
    icon: Pill,
    title: "Pharmaceuticals & Healthcare",
    color: "#DE350B",
    bg: "#FFEBE6",
    tagline: "Compliance-driven healthcare logistics",
    desc: "GDP-compliant pharmaceutical logistics with temperature monitoring, regulatory documentation, and import/export licensing for medicines, medical devices, and diagnostics.",
    capabilities: [
      "GDP-compliant cold chain",
      "Import licensing for pharmaceuticals",
      "Regulatory documentation (MSDS, COA)",
      "Medical device HS classification",
      "Controlled substances compliance",
      "WHO-approved storage facilities",
    ],
    markets: "EU · India · USA · Gulf States · Sub-Saharan Africa",
  },
  {
    id: "automotive",
    icon: Car,
    title: "Automotive",
    color: "#00B8D9",
    bg: "#E6FCFF",
    tagline: "Precision logistics for automotive supply chains",
    desc: "RORO shipping, parts procurement, and customs specialization for automotive OEMs and aftermarket suppliers operating across global manufacturing corridors.",
    capabilities: [
      "RORO & container vehicle shipping",
      "Automotive parts HS classification",
      "Country of origin compliance",
      "FTA benefit for auto components",
      "JIT parts logistics",
      "Warranty parts import management",
    ],
    markets: "Germany · Japan · South Korea · Mexico · Thailand",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">/</span>
            <span>Industries</span>
          </nav>
          <span className="section-label section-label-light mb-4">Sector Expertise</span>
          <h1 className="font-display font-extrabold text-white mt-4 mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", color: "#FFFFFF" }}
          >
            Deep Expertise Across<br />8 Key Sectors
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            Each industry has its own regulatory landscape, logistics requirements, and compliance challenges. We bring sector-specific expertise to every client engagement.
          </p>
        </div>
      </div>

      {/* Industry cards */}
      <section className="section-py bg-[#F4F5F7]">
        <div className="container-site">
          <div className="flex flex-col gap-10">
            {industries.map((ind, i) => (
              <article key={ind.id} id={ind.id} className="card p-0 overflow-hidden scroll-mt-24" aria-labelledby={`industry-${ind.id}-heading`}>
                <div className={`flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="lg:w-64 xl:w-72 flex-shrink-0 flex flex-col items-center justify-center p-10 text-center"
                    style={{ background: `${ind.color}12`, borderRight: i % 2 === 0 ? `1px solid ${ind.color}20` : "none", borderLeft: i % 2 === 1 ? `1px solid ${ind.color}20` : "none" }}
                  >
                    <div className="w-16 h-16 rounded-[16px] flex items-center justify-center mb-4" style={{ background: ind.bg }}>
                      <ind.icon size={30} style={{ color: ind.color }} />
                    </div>
                    <h2 id={`industry-${ind.id}-heading`} className="font-display font-bold text-[#091E42] text-lg mb-2">{ind.title}</h2>
                    <p className="text-xs font-medium" style={{ color: ind.color }}>{ind.tagline}</p>
                  </div>
                  <div className="flex-1 p-8 lg:p-10">
                    <p className="text-[#344563] leading-relaxed mb-6">{ind.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {ind.capabilities.map((c) => (
                        <div key={c} className="flex items-center gap-2 text-sm text-[#344563]">
                          <CheckCircle2 size={13} style={{ color: ind.color }} className="flex-shrink-0" />
                          {c}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold text-[#97A0AF] uppercase tracking-[0.06em]">Key Markets: </span>
                        <span className="text-xs text-[#6B778C]">{ind.markets}</span>
                      </div>
                      <Link href="/contact" className="btn btn-primary text-sm">
                        Discuss Your Needs <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py-sm bg-white">
        <div className="container-site">
          <div className="cta-banner text-center">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#FFFFFF" }}>
                Don't See Your Industry?
              </h2>
              <p className="text-white/65 mb-7 max-w-md mx-auto">
                Our trade specialists work across all sectors. Contact us to discuss your specific industry requirements.
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
