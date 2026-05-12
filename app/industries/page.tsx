"use client";

import { useState } from "react";
import Link from "next/link";
import { Wheat, Zap, ShoppingCart, Factory, Ship, Building2, Pill, Car, CheckCircle2, ArrowRight } from "lucide-react";

const industries = [
  {
    id: "agriculture",
    icon: Wheat,
    title: "Agriculture & Agro Processing",
    color: "#00875A",
    bg: "#E3FCEF",
    tagline: "From Ethiopian Farms to Global Markets",
    desc: "YAT supports agricultural trade and agro-processing operations through export coordination, international buyer connections, logistics support, and industrial supply solutions. The company works with Ethiopian coffee, sesame, oil seeds, pulses, and other agricultural products for global markets.",
    capabilities: [
      "Coffee export coordination",
      "Sesame & oil seeds export",
      "Agricultural product sourcing",
      "Export documentation support",
      "International buyer connections",
      "Agro-processing support solutions",
    ],
    markets: "Ethiopia · Djibouti · International Export Markets",
  },
  {
    id: "energy",
    icon: Zap,
    title: "Energy & Electrical Manufacturing",
    color: "#FF8B00",
    bg: "#FFF0B3",
    tagline: "Powering Industrial and Commercial Growth",
    desc: "Through its sister company Affluence Electrical Appliance Manufacturer PLC, YAT supports the growing energy and industrial sector with electrical manufacturing partnerships and industrial power solutions designed for modern operations.",
    capabilities: [
      "Electrical appliance manufacturing support",
      "Industrial transformer production partnership",
      "Power infrastructure support",
      "Industrial electrical systems",
      "Manufacturing equipment coordination",
      "Industrial project support solutions",
    ],
    markets: "Ethiopia · Industrial Manufacturing Networks · International Supply Partnerships",
  },
  {
    id: "fmcg",
    icon: ShoppingCart,
    title: "FMCG & Consumer Goods",
    color: "#0052CC",
    bg: "#DEEBFF",
    tagline: "From Agro-processing to Consumer Markets",
    desc: "Through A Square A Agro-Processing PLC, YAT supports FMCG and consumer goods production with agro-processing operations, juice manufacturing, plantation development, and supply chain support solutions.",
    capabilities: [
      "Juice production operations",
      "Fruit & tomato processing",
      "Agro-processing infrastructure",
      "Consumer product manufacturing",
      "Production line operations",
      "Agricultural supply chain support",
    ],
    markets: "Bahir Dar · Lake Tana Plantation Operations · Ethiopian Consumer Markets",
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing & Industrial",
    color: "#344563",
    bg: "#EBECF0",
    tagline: "Precision supply chains for industry",
    desc: "YAT provides manufacturing support, industrial machinery supply, factory setup coordination, and operational assistance for businesses in manufacturing and industrial sectors.",
    capabilities: [
      "Plastic product manufacturing",
      "Industrial machinery supply",
      "Factory design & installation",
      "Recycling system support",
      "Metal mold supply",
      "Production operation support",
    ],
    markets: "Ethiopia · China Supplier Networks · Industrial Trade Markets",
  },
  {
    id: "shipping",
    icon: Ship,
    title: "Shipping & Logistics",
    color: "#0747A6",
    bg: "#DEEBFF",
    tagline: "Connecting Global Trade Through Reliable Logistics",
    desc: "YAT provides integrated shipping, forwarding, customs clearing, and transportation solutions that help businesses move goods efficiently across international and local supply chains.",
    capabilities: [
      "International freight forwarding",
      "Cargo shipping coordination",
      "Customs clearing services",
      "Port handling operations",
      "Inland transportation support",
      "Cross-border logistics coordination",
    ],
    markets: "Ethiopia · Djibouti Trade Corridor · International Shipping Networks",
  },
  // {
  //   id: "construction",
  //   icon: Building2,
  //   title: "Construction & Infrastructure",
  //   color: "#253858",
  //   bg: "#EBECF0",
  //   tagline: "Moving materials for mega-projects",
  //   desc: "From steel and cement imports to heavy equipment logistics, we support infrastructure projects across emerging markets with the specialized logistics they demand.",
  //   capabilities: [
  //     "Heavy lift & project cargo",
  //     "Temporary import permits",
  //     "ATA Carnet for equipment",
  //     "Construction material classification",
  //     "Site-specific delivery coordination",
  //     "Bonded stores for project consumables",
  //   ],
  //   markets: "East Africa · Gulf Region · Southeast Asia · West Africa",
  // },
  // {
  //   id: "pharma",
  //   icon: Pill,
  //   title: "Pharmaceuticals & Healthcare",
  //   color: "#DE350B",
  //   bg: "#FFEBE6",
  //   tagline: "Compliance-driven healthcare logistics",
  //   desc: "GDP-compliant pharmaceutical logistics with temperature monitoring, regulatory documentation, and import/export licensing for medicines, medical devices, and diagnostics.",
  //   capabilities: [
  //     "GDP-compliant cold chain",
  //     "Import licensing for pharmaceuticals",
  //     "Regulatory documentation (MSDS, COA)",
  //     "Medical device HS classification",
  //     "Controlled substances compliance",
  //     "WHO-approved storage facilities",
  //   ],
  //   markets: "EU · India · USA · Gulf States · Sub-Saharan Africa",
  // },
  // {
  //   id: "automotive",
  //   icon: Car,
  //   title: "Automotive",
  //   color: "#00B8D9",
  //   bg: "#E6FCFF",
  //   tagline: "Precision logistics for automotive supply chains",
  //   desc: "RORO shipping, parts procurement, and customs specialization for automotive OEMs and aftermarket suppliers operating across global manufacturing corridors.",
  //   capabilities: [
  //     "RORO & container vehicle shipping",
  //     "Automotive parts HS classification",
  //     "Country of origin compliance",
  //     "FTA benefit for auto components",
  //     "JIT parts logistics",
  //     "Warranty parts import management",
  //   ],
  //   markets: "Germany · Japan · South Korea · Mexico · Thailand",
  // },
];

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const activeIndustry = industries.find(i => i.id === activeTab) || industries[0];

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
            Deep Expertise Across<br />5 Key Sectors
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            Each industry has its own regulatory landscape, logistics requirements, and compliance challenges. We bring sector-specific expertise to every client engagement.
          </p>
        </div>
      </div>

      <section className="section-py bg-[#F4F5F7]">
        <div className="container-site">
          <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
            {/* Sidebar Tabs */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-2 scrollbar-hide">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setActiveTab(ind.id)}
                    className={`flex items-center gap-4 px-6 py-4 rounded-xl border transition-all text-left whitespace-nowrap lg:whitespace-normal group ${activeTab === ind.id
                      ? "bg-white border-[#0052CC] shadow-md ring-1 ring-[#0052CC]/10"
                      : "bg-white/40 border-transparent hover:bg-white hover:border-[#DFE1E6]"
                      }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${activeTab === ind.id ? "scale-110" : "opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                        }`}
                      style={{ background: ind.bg }}
                    >
                      <ind.icon size={20} style={{ color: ind.color }} />
                    </div>
                    <div>
                      <h3 className={`font-display font-bold text-sm transition-colors ${activeTab === ind.id ? "text-[#0052CC]" : "text-[#42526E]"
                        }`}>
                        {ind.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1">
              <div className="card h-full p-0 overflow-hidden border-0 shadow-xl bg-white flex flex-col">
                <div className="p-8 lg:p-12 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: activeIndustry.bg }}>
                      <activeIndustry.icon size={40} style={{ color: activeIndustry.color }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-px" style={{ background: activeIndustry.color }} />
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: activeIndustry.color }}>
                          {activeIndustry.tagline}
                        </span>
                      </div>
                      <h2 className="font-display font-extrabold text-[#091E42] text-3xl lg:text-4xl">
                        {activeIndustry.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-[#344563] text-lg leading-relaxed mb-10 max-w-3xl">
                    {activeIndustry.desc}
                  </p>

                  <div className="mb-12">
                    <h4 className="text-xs font-bold text-[#97A0AF] uppercase tracking-[0.15em] mb-6 border-b border-[#DFE1E6] pb-2">
                      Specialized Capabilities
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-8">
                      {activeIndustry.capabilities.map((c) => (
                        <div key={c} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${activeIndustry.color}15` }}>
                            <CheckCircle2 size={12} style={{ color: activeIndustry.color }} />
                          </div>
                          <span className="text-sm text-[#344563] font-medium leading-tight">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-[#F4F5F7] flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <span className="block text-[10px] font-bold text-[#97A0AF] uppercase tracking-wider mb-1">Strategic Presence:</span>
                      <span className="text-sm font-semibold text-[#091E42]">{activeIndustry.markets}</span>
                    </div>
                    <Link href="/contact" className="btn btn-primary px-8 py-4 w-full md:w-auto justify-center">
                      Consult with Sector Experts <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
