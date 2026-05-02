import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, CheckCircle2, ArrowRight, Target, TrendingUp, Globe, Lightbulb, Map, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Consulting & Advisory",
  description: "YAT Business Group trade consulting: market entry strategy, supply chain cost optimisation, trade route analysis, risk modelling, and custom trade intelligence reporting.",
  alternates: { canonical: "https://www.yatbusinessgroup.com/services/consulting" },
};

const offerings = [
  { icon: Map, title: "Market Entry Strategy", desc: "Comprehensive feasibility studies and go-to-market plans for new export markets, including regulatory requirements, tariff analysis, and competitor landscape." },
  { icon: DollarSign, title: "Supply Chain Cost Optimisation", desc: "End-to-end cost analysis identifying duty savings, carrier rate opportunities, FTA utilisation, and operational efficiencies across your supply chain." },
  { icon: Globe, title: "Trade Route Analysis", desc: "Comparative analysis of alternative sourcing origins and shipping routes to reduce lead times, costs, and single-source dependency." },
  { icon: Target, title: "Vendor Diversification", desc: "Strategic advisory on diversifying your supplier base across alternative geographies to build supply chain resilience against disruptions." },
  { icon: TrendingUp, title: "Trade Finance Advisory", desc: "Guidance on letters of credit, export credit insurance, trade finance facilities, and working capital optimisation for international transactions." },
  { icon: Lightbulb, title: "Risk & Disruption Modelling", desc: "Scenario planning and risk scoring across geopolitical, regulatory, and logistical factors affecting your specific trade lanes and supply chain." },
];

const deliverables = [
  "Market entry feasibility report", "Supply chain cost savings analysis",
  "Trade compliance gap assessment", "FTA tariff benefit calculations",
  "Custom trade KPI dashboard", "Quarterly trade intelligence briefings",
  "Carrier & route benchmarking report", "Supplier risk scoring matrix",
];

const outcomes = [
  { value: "18%", label: "Average cost reduction for consulting clients" },
  { value: "3.2x", label: "Average ROI on consulting engagement" },
  { value: "2–4 wks", label: "Typical turnaround for market entry study" },
  { value: "100%", label: "Client retention rate for consulting retainers" },
];

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
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1" }}
          >
            Strategic Trade Intelligence<br />for Global Growth
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed mb-8">
            Data-driven trade consulting that helps you enter new markets, reduce costs, mitigate risk, and build a resilient international trade operation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-white btn-primary-lg">Book a Consultation <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn btn-ghost-white btn-primary-lg">View Case Studies</Link>
          </div>
        </div>
      </div>

      <section className="bg-[#091E42]" aria-label="Consulting outcomes">
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
      </section>

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label mb-4">Deliverables</span>
              <h2 className="font-display font-bold text-[#091E42] mt-4 mb-5" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                Tangible Outputs You Can Act On
              </h2>
              <p className="text-[#42526E] leading-relaxed mb-6">
                Every engagement concludes with clear, actionable deliverables — not just recommendations, but implementation roadmaps your team can execute immediately.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d) => (
                  <div key={d} className="flex items-start gap-2.5 text-sm text-[#344563]">
                    <CheckCircle2 size={15} className="text-[#00B8D9] mt-0.5 flex-shrink-0" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-8 bg-gradient-to-br from-[#091E42] to-[#0052CC] text-white border-0">
              <h3 className="font-display font-bold text-xl mb-4">Engagement Models</h3>
              <div className="flex flex-col gap-5">
                {[
                  { type: "Project-Based", desc: "Fixed-scope engagements: market entry studies, cost optimisation reviews, compliance audits." },
                  { type: "Retainer", desc: "Ongoing monthly advisory with dedicated analyst support, quarterly reporting, and ad-hoc queries." },
                  { type: "Workshop", desc: "Half-day or full-day in-house strategy workshops with your leadership and operations team." },
                ].map((e) => (
                  <div key={e.type} className="border-b border-white/15 pb-5 last:border-0 last:pb-0">
                    <p className="font-semibold text-white text-sm mb-1">{e.type}</p>
                    <p className="text-sm text-white/65 leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn btn-white w-full justify-center mt-6">
                Discuss Your Needs <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py-sm bg-[#F4F5F7]">
        <div className="container-site">
          <div className="cta-banner text-center">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                Ready to Optimise Your Trade Strategy?
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
