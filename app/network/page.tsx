import type { Metadata } from "next";
import Link from "next/link";
import { Globe, MapPin, Users, Building2, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Network",
  description: "Our global footprint gives clients direct access to local expertise, established regulatory relationships, and on-ground logistics support in every major trade region.",
  alternates: { canonical: "https://www.yat-m.com/network" },
};

const offices = [
  {
    city: "Addis Ababa",
    country: "Ethiopia",
    type: "Global Headquarters",
    address: "Kirkos Sub-city, Woreda 07, Addis Ababa, Ethiopia",
    phone: "(+251) 911-362-741",
    email: "addisababa@yat-m.com",
    services: ["Global trade strategy", "Import", "Export", "Manufacturing", "Consulting & advisory"],
    regions: "East Africa",
  },
  {
    city: "Dubai",
    country: "UAE",
    type: "MENA Regional HQ",
    address: "Global Trade Centre, Level 12, Sheikh Zayed Road, Dubai, UAE",
    phone: "+971 4 555 0200",
    email: "dubai@yat-m.com",
    services: ["Middle East trade corridors", "African market access", "Oil & energy sector logistics", "Gulf Cooperation Council compliance"],
    regions: "MENA Region",
  },
  {
    city: "Guangzhou",
    country: "China",
    type: "Asia-Pacific Hub",
    address: "Xi'an High-Tech Industries Development Zone, Shaanxi Province, China",
    phone: "+86 29 8657 2472",
    email: "china@yat-m.com",
    services: ["ASEAN trade facilitation", "China & North Asia corridors", "Southeast Asia logistics", "Asia-Pacific compliance"],
    regions: "Asia-Pacific",
  },
];

const regions = [
  {
    name: "North America",
    countries: ["United States", "Canada", "Mexico"],
    agents: 8,
    corridors: ["US–China", "US–EU", "US–Mexico", "Canada–Asia"],
    highlight: "Direct customs brokerage licences in US, Canada & Mexico",
  },
  {
    name: "Europe",
    countries: ["UK", "Germany", "Netherlands", "Belgium", "France", "Poland", "Italy"],
    agents: 14,
    corridors: ["EU–Asia", "UK–Africa", "EU–Americas", "EU–GCC"],
    highlight: "AEO Authorized Economic Operator status in EU & UK",
  },
  {
    name: "Middle East & Africa",
    countries: ["UAE", "Saudi Arabia", "Egypt", "Nigeria", "South Africa", "Kenya", "Ghana", "Ethiopia"],
    agents: 22,
    corridors: ["UAE–Asia", "GCC–Africa", "East Africa corridor", "West Africa trade lanes"],
    highlight: "Strongest regional agent network on the continent",
  },
  {
    name: "Asia-Pacific",
    countries: ["China", "Singapore", "Vietnam", "India", "Indonesia", "Malaysia", "Thailand", "Australia"],
    agents: 18,
    corridors: ["China–US", "ASEAN–EU", "India–Africa", "Australia–Asia"],
    highlight: "Singapore hub provides real-time coordination across 8 Asia markets",
  },
  {
    name: "Latin America",
    countries: ["Brazil", "Colombia", "Chile", "Peru", "Argentina"],
    agents: 7,
    corridors: ["Brazil–US", "Latin America–EU", "Pacific Alliance corridors"],
    highlight: "Growing network across Pacific Alliance countries",
  },
];

export default function NetworkPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">/</span>
            <span>Global Network</span>
          </nav>
          <span className="section-label section-label-light mb-4">Our Footprint</span>
          <h1 className="font-display font-extrabold text-white mt-4 mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", color: "#FFFFFF" }}
          >
            A Truly Global<br />Trade Network
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            3 regional offices. 6+ in-country agents. Active trade corridors across 10+ countries. Wherever your business needs to go, we have someone on the ground.
          </p>
        </div>
      </div>

      {/* Stats */}
      <section className="bg-[#091E42]">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "10+", label: "Countries Operational" },
              { value: "6+", label: "In-Country Agents" },
              { value: "3", label: "Regional HQ Offices" },
              { value: "5+", label: "Port Connections" },
            ].map((s) => (
              <div key={s.label} className="text-center py-10 px-6">
                <p className="stat-number">{s.value}</p>
                <p className="text-white/55 text-sm font-medium mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-py bg-white" aria-labelledby="offices-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-label mb-4">Our Offices</span>
            <h2 id="offices-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Three Strategic Hubs
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {offices.map((o) => (
              <div key={o.city} className="card p-6 flex flex-col">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-12 h-12 rounded-[8px] bg-[#DEEBFF] flex items-center justify-center flex-shrink-0">
                    <Building2 size={22} className="text-[#0052CC]" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-[#091E42] text-lg leading-tight">{o.city}, {o.country}</p>
                    <span className="text-xs font-semibold text-[#0052CC] bg-[#DEEBFF] px-2 py-0.5 rounded-[3px]">{o.type}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-sm mb-5">
                  <div className="flex items-start gap-2">
                    <MapPin size={13} className="text-[#97A0AF] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6B778C]">{o.address}</span>
                  </div>
                  <a href={`tel:${o.phone}`} className="flex items-center gap-2 text-[#0052CC] hover:underline">
                    <span className="text-[#97A0AF] text-xs">☎</span> {o.phone}
                  </a>
                  <a href={`mailto:${o.email}`} className="flex items-center gap-2 text-[#0052CC] hover:underline text-xs">
                    {o.email}
                  </a>
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold text-[#97A0AF] uppercase tracking-[0.06em] mb-3">Services from this office</p>
                  <ul className="flex flex-col gap-1.5">
                    {o.services.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-[#344563]">
                        <CheckCircle2 size={12} className="text-[#00875A] flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="btn btn-secondary w-full justify-center mt-6 text-sm">
                  Contact This Office
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Network */}
      <section className="section-py bg-[#F4F5F7]" aria-labelledby="network-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-label mb-4">Agent Network</span>
            <h2 id="network-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Regional Coverage & Trade Corridors
            </h2>
            <p className="text-[#42526E] mt-4 max-w-2xl mx-auto">
              Our vetted in-country agent partners provide local regulatory expertise, port-level connections, and last-mile capabilities across every major trade region.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {regions.map((r) => (
              <div key={r.name} className="card p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-64 flex-shrink-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe size={18} className="text-[#0052CC]" />
                      <h3 className="font-display font-bold text-[#091E42]">{r.name}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <span className="flex items-center gap-1 text-[#6B778C]">
                        <Users size={13} className="text-[#0052CC]" /> {r.agents} agents
                      </span>
                      <span className="flex items-center gap-1 text-[#6B778C]">
                        <MapPin size={13} className="text-[#0052CC]" /> {r.countries.length} countries
                      </span>
                    </div>
                    <p className="text-xs text-[#6B778C] italic">{r.highlight}</p>
                  </div>

                  <div className="flex-1 grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-bold text-[#97A0AF] uppercase tracking-[0.06em] mb-2">Countries</p>
                      <div className="flex flex-wrap gap-1.5">
                        {r.countries.map((c) => (
                          <span key={c} className="text-xs px-2 py-0.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded-[3px] text-[#344563]">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#97A0AF] uppercase tracking-[0.06em] mb-2">Key Corridors</p>
                      <ul className="flex flex-col gap-1">
                        {r.corridors.map((c) => (
                          <li key={c} className="flex items-center gap-2 text-xs text-[#344563]">
                            <ArrowRight size={10} className="text-[#0052CC] flex-shrink-0" /> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py-sm bg-white">
        <div className="container-site">
          <div className="cta-banner text-center">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                Need Coverage in a Specific Market?
              </h2>
              <p className="text-white/65 mb-7 max-w-md mx-auto">Tell us the country or corridor — we'll confirm our capabilities and connect you with the right specialist.</p>
              <Link href="/contact" className="btn btn-white btn-primary-lg">Contact Us <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
