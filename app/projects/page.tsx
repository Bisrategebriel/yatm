import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, CheckCircle2, DollarSign, ShieldCheck, Zap } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";

export const metadata: Metadata = {
  title: "Projects",
  description: "Real results from YAT Business Group: client success stories across import, export, logistics, and compliance engagements spanning multiple industries and regions.",
  alternates: { canonical: "https://www.yat-m.com/projects" },
};

const projects = [
  {
    id: "meridian-foods",
    tag: "Import Services · Food & Agriculture",
    tagColor: "#00875A",
    title: "Streamlining Produce Imports for Meridian Foods Ltd.",
    client: "Meridian Foods Ltd.",
    country: "United Kingdom",
    duration: "8 months",
    scope: "End-to-end import management for seasonal agricultural products from 6 source markets in Africa and South America.",
    challenge: "Meridian was experiencing chronic delays at UK customs due to incorrect HS code classifications and incomplete phytosanitary documentation, resulting in spoiled stock and supply gaps.",
    solution: "YAT conducted a full import compliance audit, reclassified all product categories, established pre-clearance documentation protocols, and assigned a dedicated customs broker for all produce shipments.",
    results: [
      { metric: "40%", label: "Reduction in customs clearance time" },
      { metric: "£480K", label: "Avoided in spoilage costs (Year 1)" },
      { metric: "Zero", label: "Phytosanitary compliance failures" },
      { metric: "6", label: "Source markets under management" },
    ],
    images: [
      { id: 1, image: "/images/services/stationery-materials.png", title: "Meridian Foods Logistics", description: "Managing fresh produce imports at scale." },
      { id: 2, image: "/images/services/freight-shipping.png", title: "Port Operations", description: "Efficient handling at UK ports." },
      { id: 3, image: "/images/services/manufacturing-equipment.png", title: "Quality Control", description: "Ensuring zero phytosanitary failures." }
    ]
  },
  {
    id: "gulf-trading",
    tag: "Export Services · Market Expansion",
    tagColor: "#0052CC",
    title: "Scaling Gulf Trading Corp. into 3 New African Markets",
    client: "Gulf Trading Corp.",
    country: "UAE",
    duration: "12 months",
    scope: "Market entry strategy, export licensing, agent network establishment, and trade finance coordination for exports to Nigeria, Kenya, and Egypt.",
    challenge: "Gulf Trading held a strong UAE domestic position but lacked the regulatory knowledge, in-country relationships, and documentation expertise to enter Sub-Saharan and North African markets.",
    solution: "YAT developed market entry feasibility studies for each country, secured all necessary export licences, vetted and onboarded in-country distribution agents, and coordinated letters of credit with Gulf Trading's banking partner.",
    results: [
      { metric: "3", label: "New markets entered in 12 months" },
      { metric: "$14M+", label: "First-year export revenue facilitated" },
      { metric: "100%", label: "LC (Letter of Credit) acceptance rate" },
      { metric: "18", label: "In-country agent relationships established" },
    ],
    images: [
      { id: 1, image: "/images/services/construction-materials.png", title: "Market Entry Strategy", description: "Expanding Gulf Trading into African corridors." },
      { id: 2, image: "/images/services/industrial-machinery.png", title: "Distribution Network", description: "Vetted and onboarded 18 regional agents." }
    ]
  },
  {
    id: "sino-pacific",
    tag: "Freight & Logistics · Manufacturing",
    tagColor: "#FF8B00",
    title: "Multimodal Supply Chain Redesign for Sino-Pacific Manufacturing",
    client: "Sino-Pacific Manufacturing",
    country: "Singapore",
    duration: "6 months",
    scope: "Supply chain restructuring across 4 countries — China, Vietnam, Singapore, and Indonesia — with a shift from air to multimodal sea/road/rail transport.",
    challenge: "Sino-Pacific was over-reliant on expensive air freight for time-sensitive components. Lead time unpredictability and carrier concentration created significant cost and operational risk.",
    solution: "YAT redesigned the supply chain using a China–Singapore rail + sea combination, established bonded warehousing in Singapore, and implemented a real-time visibility platform across all lanes.",
    results: [
      { metric: "31%", label: "Logistics cost reduction" },
      { metric: "99.4%", label: "On-time delivery rate achieved" },
      { metric: "4", label: "Country supply chain integrated" },
      { metric: "0", label: "Shipment delays in 6 months post-launch" },
    ],
    images: [
      { id: 1, image: "/images/services/customs-clearing.png", title: "Multimodal Logistics", description: "Sea-to-rail supply chain optimization." },
      { id: 2, image: "/images/services/manufacturing-equipment.png", title: "Supply Chain Visibility", description: "Real-time tracking across 4 countries." }
    ]
  },
  {
    id: "euro-pharma",
    tag: "Trade Compliance · Pharmaceuticals",
    tagColor: "#DE350B",
    title: "EU Compliance Overhaul for EuroPharma Distributors",
    client: "EuroPharma Distributors GmbH",
    country: "Germany",
    duration: "4 months",
    scope: "Full import compliance audit and remediation for pharmaceutical product range — HS classification, GDP compliance, and import licensing for 12 EU member states.",
    challenge: "A regulatory inspection revealed classification errors and documentation gaps across EuroPharma's import portfolio, putting their import licence at risk in 3 member states.",
    solution: "YAT's compliance team conducted a full product reclassification, filed binding tariff information requests with German customs, restructured import documentation procedures, and delivered staff training across 3 operational sites.",
    results: [
      { metric: "100%", label: "Import licences retained — zero suspensions" },
      { metric: "€1.2M", label: "Estimated penalties avoided" },
      { metric: "12", label: "EU member states brought into compliance" },
      { metric: "4 wks", label: "Full remediation completed" },
    ],
    images: [
      { id: 1, image: "/images/services/stationery-materials.png", title: "Regulatory Compliance", description: "AEO Authorized Economic Operator status support." },
      { id: 2, image: "/images/services/industrial-machinery.png", title: "Pharma Logistics", description: "GDP-compliant pharmaceutical supply chains." }
    ]
  },
];

const aggregateStats = [
  { value: "$2.8B+", label: "Total trade facilitated annually" },
  { value: "99%", label: "Client satisfaction rate" },
  { value: "10+", label: "Countries represented in project portfolio" },
  { value: "200+", label: "Active client engagements" },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">/</span>
            <span>Projects</span>
          </nav>
          <span className="section-label section-label-light mb-4">Client Results</span>
          <h1 className="font-display font-extrabold text-white mt-4 mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", color: "#FFFFFF" }}
          >
            Real Results for<br />Real Businesses
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            Explore the projects, industrial operations, and business initiatives that showcase YAT’s expertise in Manufacturing, International trade, Logistics, Energy, FMCG and Agro-processing solutions.
          </p>
        </div>
      </div>

      {/* Aggregate stats */}
      <section className="bg-[#091E42]">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {aggregateStats.map((s) => (
              <div key={s.label} className="text-center py-10 px-6">
                <p className="stat-number">{s.value}</p>
                <p className="text-white/55 text-sm font-medium mt-2 max-w-[140px] mx-auto">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies / Projects */}
      <section className="section-py bg-[#F4F5F7]" aria-labelledby="cases-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-label mb-4">Projects</span>
            <h2 id="cases-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Selected Client Projects
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {projects.map((p) => (
              <article key={p.id} id={p.id} className="card p-0 overflow-hidden scroll-mt-24 group">
                <div className="flex flex-col">
                  {/* Header */}
                  <div className="p-6 lg:p-8 border-b border-[#EBECF0] flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                    <div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-[3px] mb-2 inline-block" style={{ background: `${p.tagColor}15`, color: p.tagColor }}>{p.tag}</span>
                      <h2 className="font-display font-bold text-[#091E42] text-2xl">{p.title}</h2>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[#6B778C] flex-shrink-0">
                      <span className="flex items-center gap-1.5"><Clock size={12} /> {p.duration}</span>
                      <span className="px-2 py-1 bg-[#F4F5F7] rounded border border-[#DFE1E6]">{p.country}</span>
                    </div>
                  </div>

                  <div className="p-6 lg:p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                      <div>
                        <h3 className="text-xs font-bold text-[#97A0AF] uppercase tracking-[0.06em] mb-3">Challenge</h3>
                        <p className="text-sm text-[#344563] leading-relaxed">{p.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-[#97A0AF] uppercase tracking-[0.06em] mb-3">Our Solution</h3>
                        <p className="text-sm text-[#344563] leading-relaxed">{p.solution}</p>
                      </div>
                      <div className="md:col-span-2 lg:col-span-1">
                        <h3 className="text-xs font-bold text-[#97A0AF] uppercase tracking-[0.06em] mb-4 flex items-center gap-2">
                          <TrendingUp size={13} /> Key Outcomes
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {p.results.slice(0, 2).map((r) => (
                            <div key={r.label} className="bg-[#F4F5F7] rounded-[8px] p-4 text-center border border-[#DFE1E6]">
                              <p className="font-display font-extrabold text-2xl text-[#0052CC] mb-1">{r.metric}</p>
                              <p className="text-[10px] text-[#6B778C] leading-tight uppercase tracking-wider font-semibold">{r.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slider Bottom - Full Width with Padding */}
                  <div className="w-full px-8 pb-8">
                    <ImageSlider slides={p.images} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Results summary */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4">Our Track Record</span>
              <h2 className="font-display font-bold text-[#091E42] mt-4 mb-5"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                Consistent Outcomes Across Every Engagement
              </h2>
              <p className="text-[#42526E] leading-relaxed mb-6">
                Whether it's a first-time importer or a multinational restructuring its global logistics, our approach is always the same: understand the problem deeply, design the right solution, and execute with precision.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Dedicated specialist assigned to every project",
                  "Clear KPIs and success metrics defined upfront",
                  "Weekly progress updates and transparent reporting",
                  "Post-project review and ongoing optimization",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#344563]">
                    <CheckCircle2 size={15} className="text-[#0052CC] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: DollarSign,
                  title: "Cost Reduction",
                  value: "18–31%",
                  desc: "Average savings in total logistics and duty costs.",
                  color: "#00875A"
                },
                {
                  icon: Zap,
                  title: "Time Efficiency",
                  value: "35–45%",
                  desc: "Improvement in customs clearance and transit speeds.",
                  color: "#00B8D9"
                },
                {
                  icon: ShieldCheck,
                  title: "Risk Reduction",
                  value: "90%+",
                  desc: "Decrease in compliance errors and penalty exposure.",
                  color: "#DE350B"
                },
                {
                  icon: TrendingUp,
                  title: "Investment ROI",
                  value: "3.2x",
                  desc: "First-year return for every dollar spent on advisory.",
                  color: "#FF8B00"
                },
              ].map((o) => (
                <div key={o.title} className="p-6 bg-white rounded-xl border border-[#DFE1E6] hover:border-[#0052CC] hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ background: `${o.color}15`, color: o.color }}>
                    <o.icon size={24} />
                  </div>
                  <p className="font-display font-extrabold text-3xl text-[#091E42] mb-1">{o.value}</p>
                  <h4 className="text-sm font-bold text-[#344563] mb-2">{o.title}</h4>
                  <p className="text-xs text-[#6B778C] leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-py-sm bg-[#F4F5F7]">
        <div className="container-site">
          <div className="cta-banner text-center">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#FFFFFF" }}>
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-white/65 mb-7 max-w-md mx-auto">Share your challenge. We'll design a solution and show you the outcomes we expect to deliver.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn btn-white btn-primary-lg">Start a Project <ArrowRight size={16} /></Link>
                <Link href="/services" className="btn btn-ghost-white btn-primary-lg">Explore Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
