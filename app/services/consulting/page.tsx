import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, CheckCircle2, ArrowRight, Target, TrendingUp, Globe, Lightbulb, Map, DollarSign, FileSearch, ClipboardCheck, PieChart, Activity, Zap, Shield, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Consulting & Advisory",
  description: "Strategic international business consultancy and operational support to help businesses grow in manufacturing, trade, and logistics sectors.",
  alternates: { canonical: "https://www.yat-m.com/services/consulting" },
};

const offerings = [
  { icon: Map, title: "Market Entry Strategy", desc: "Comprehensive feasibility studies and go-to-market plans for new export markets, including regulatory requirements, tariff analysis, and competitor landscape." },
  { icon: DollarSign, title: "Supply Chain Cost Optimization", desc: "End-to-end cost analysis identifying duty savings, carrier rate opportunities, FTA utilisation, and operational efficiencies across your supply chain." },
  { icon: Globe, title: "Trade Route Analysis", desc: "Comparative analysis of alternative sourcing origins and shipping routes to reduce lead times, costs, and single-source dependency." },
  { icon: Target, title: "Vendor Diversification", desc: "Strategic advisory on diversifying your supplier base across alternative geographies to build supply chain resilience against disruptions." },
  { icon: TrendingUp, title: "Trade Finance Advisory", desc: "Guidance on letters of credit, export credit insurance, trade finance facilities, and working capital optimization for international transactions." },
  { icon: Lightbulb, title: "Risk & Disruption Modelling", desc: "Scenario planning and risk scoring across geopolitical, regulatory, and logistical factors affecting your specific trade lanes and supply chain." },
];

const deliverables = [
  {
    title: "Market Entry Report",
    desc: "Comprehensive feasibility studies and go-to-market plans for new export markets.",
    icon: Map,
    color: "#0052CC"
  },
  {
    title: "Cost Savings Analysis",
    desc: "Detailed identification of duty savings, carrier rate opportunities, and operational efficiencies.",
    icon: DollarSign,
    color: "#00875A"
  },
  {
    title: "Compliance Gap Assessment",
    desc: "Proactive review of trade practices to identify and mitigate regulatory risks.",
    icon: FileSearch,
    color: "#FF8B00"
  },
  {
    title: "FTA Benefit Calculations",
    desc: "Quantified savings potential from Free Trade Agreements and preferential tariffs.",
    icon: ClipboardCheck,
    color: "#BF2600"
  },
  {
    title: "Trade KPI Dashboard",
    desc: "Custom digital tools for real-time tracking of trade performance and supply chain costs.",
    icon: BarChart3,
    color: "#00B8D9"
  },
  {
    title: "Intelligence Briefings",
    desc: "Quarterly updates on geopolitical and regulatory shifts affecting your supply chain.",
    icon: Globe,
    color: "#403294"
  },
  {
    title: "Route Benchmarking",
    desc: "Comparative study of shipping lanes and carriers to optimize lead times and logistics.",
    icon: Activity,
    color: "#5243AA"
  },
  {
    title: "Risk Scoring Matrix",
    desc: "Quantifiable risk assessment of your supplier base and logistics corridors.",
    icon: Shield,
    color: "#172B4D"
  },
];

// const outcomes = [
//   { value: "18%", label: "Average cost reduction for consulting clients" },
//   { value: "3.2x", label: "Average ROI on consulting engagement" },
//   { value: "2–4 wks", label: "Typical turnaround for market entry study" },
//   { value: "100%", label: "Client retention rate for consulting retainers" },
// ];

export default function ConsultingPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">/</span>
            <Link href="/services">Services</Link><span className="breadcrumb-sep">/</span>
            <span>Consulting & Advisory</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-[8px] bg-white/10 flex items-center justify-center">
              <BarChart3 size={24} className="text-white" />
            </div>
            <span className="section-label section-label-light">Consulting & Advisory</span>
          </div>
          <h1 className="font-display font-extrabold text-white mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", color: "#FFFFFF" }}
          >
            Strategic Trade Intelligence<br />for Global Growth
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed mb-8">
            Data-driven trade consulting that helps you enter new markets, reduce costs, mitigate risk, and build a resilient international trade operation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-white btn-primary-lg">Book a Consultation <ArrowRight size={16} /></Link>
            <Link href="/project" className="btn btn-ghost-white btn-primary-lg">See Our Results</Link>
          </div>
        </div>
      </div>

      {/* <section className="bg-[#091E42]" aria-label="Consulting outcomes">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {outcomes.map((s) => (
              <div key={s.label} className="text-center py-10 px-6">
                <p className="stat-number">{s.value}</p>
                <p className="text-white/55 text-xs font-medium mt-2 max-w-[140px] mx-auto leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section-py bg-[#F4F5F7]" aria-labelledby="offerings-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-label mb-4">Advisory Services</span>
            <h2 id="offerings-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              What We Deliver
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div key={o.title} className="card p-6">
                <div className="w-12 h-12 rounded-[8px] bg-[#E6FCFF] flex items-center justify-center mb-5">
                  <o.icon size={22} className="text-[#00B8D9]" />
                </div>
                <h3 className="font-bold text-[#091E42] mb-3">{o.title}</h3>
                <p className="text-sm text-[#6B778C] leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-site">
          <div className="lg:col-span-1">
            <span className="section-label mb-4">The Consultant's Toolkit</span>
            <h2 className="font-display font-bold text-[#091E42] mt-4 mb-5" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: "1.2" }}>
              Tangible Outputs You Can Act On
            </h2>
            <p className="text-[#42526E] leading-relaxed mb-8 text-lg">
              Every engagement concludes with clear, actionable deliverables — not just recommendations, but implementation roadmaps your team can execute immediately.
            </p>

            <div className="grid gap-4">
              {deliverables.slice(0, 4).map((item) => (
                <div key={item.title} className="group p-5 bg-white rounded-xl border border-[#DFE1E6] hover:border-[#0052CC] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#091E42] mb-1 group-hover:text-[#0052CC] transition-colors">{item.title}</h3>
                      <p className="text-sm text-[#6B778C] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4">
              {deliverables.slice(4).map((item) => (
                <div key={item.title} className="group p-5 bg-white rounded-xl border border-[#DFE1E6] hover:border-[#0052CC] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#091E42] mb-1 group-hover:text-[#0052CC] transition-colors">{item.title}</h3>
                      <p className="text-sm text-[#6B778C] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="card p-8 bg-gradient-to-br from-[#091E42] to-[#0052CC] text-white border-0 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-xl mb-4">Engagement Models</h3>
                  <div className="flex flex-col gap-5">
                    {[
                      { type: "Project-Based", desc: "Fixed-scope engagements: market entry studies, cost optimization reviews, compliance audits." },
                      { type: "Retainer", desc: "Ongoing monthly advisory with dedicated analyst support and quarterly reporting." },
                      { type: "Workshop", desc: "Half-day or full-day in-house strategy workshops with your leadership team." },
                    ].map((e) => (
                      <div key={e.type} className="border-b border-white/15 pb-4 last:border-0 last:pb-0">
                        <p className="font-semibold text-white text-sm mb-1 flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-[#00B8D9]" />
                          {e.type}
                        </p>
                        <p className="text-xs text-white/70 leading-relaxed pl-5">{e.desc}</p>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn btn-white w-full justify-center mt-8 shadow-lg hover:scale-[1.02] transition-transform">
                    Start a Consultation <ArrowRight size={15} />
                  </Link>
                </div>
              </div> */}
          </div>
        </div>
      </section>

      <section className="section-py-sm bg-[#F4F5F7]">
        <div className="container-site">
          <div className="cta-banner text-center">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#FFFFFF" }}>
                Ready to Optimize Your Trade Strategy?
              </h2>
              <p className="text-white/65 mb-7 max-w-md mx-auto">Book a free 30-minute strategy call with one of our trade advisors — no obligation, pure value.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn btn-white btn-primary-lg">Book a Free Call <ArrowRight size={16} /></Link>
                <Link href="/projects" className="btn btn-ghost-white btn-primary-lg">See Our Results</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
