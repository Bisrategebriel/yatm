import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2, Award, Globe, Users, Target, Heart,
  TrendingUp, ShieldCheck, Lightbulb, ArrowRight
} from "lucide-react";
import { LinkedInIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about YAT Business Group — our founding story, mission, leadership team, certifications, and 15+ years of global trade expertise across 40+ countries.",
  alternates: { canonical: "https://www.yatbusinessgroup.com/about" },
  openGraph: {
    title: "About YAT Business Group | Global Trade Experts Since 2008",
    description: "15+ years of excellence in international trade, import, export, and logistics across 40+ countries.",
  },
};

const timeline = [
  { year: "2008", title: "Founded in New York", desc: "YAT Business Group established as a boutique trade consultancy serving North American importers." },
  { year: "2011", title: "First International Expansion", desc: "Opened regional office in Dubai, UAE, gaining direct access to Middle Eastern and African trade corridors." },
  { year: "2014", title: "ISO 9001 Certification", desc: "Achieved ISO 9001:2015 quality management certification — a milestone in our commitment to process excellence." },
  { year: "2016", title: "FIATA Membership", desc: "Joined the International Federation of Freight Forwarders Associations, strengthening our global network." },
  { year: "2019", title: "Asia-Pacific Office", desc: "Established Singapore hub to serve clients across Southeast Asia, China, and the broader Asia-Pacific region." },
  { year: "2022", title: "$2B+ Annual Trade Volume", desc: "Crossed $2 billion in annual trade facilitated — a testament to our growing client base and operational scale." },
  { year: "2024", title: "40+ Countries Milestone", desc: "Expanded active operations to over 40 countries with 1,200+ partners across all major trade regions." },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We operate with complete transparency. Every decision is guided by ethical conduct and fiduciary responsibility to our clients." },
  { icon: Target, title: "Precision", desc: "Trade demands accuracy. From HS code classification to customs documentation, we leave no detail unchecked." },
  { icon: Globe, title: "Global Thinking", desc: "We bring a genuinely global perspective — understanding the cultural, regulatory, and market nuances of every region we serve." },
  { icon: Heart, title: "Partnership", desc: "We are invested in your success, not just the transaction. Long-term relationships are the foundation of our business." },
  { icon: Lightbulb, title: "Innovation", desc: "We continuously invest in technology and processes to deliver smarter, faster, and more cost-effective trade solutions." },
];

const leadership = [
  {
    name: "Jonathan A. Yates",
    title: "Founder & CEO",
    bio: "30+ years in international trade and supply chain. Former SVP at a Fortune 500 logistics firm. Speaks at global trade conferences and is a WCO advisory panel member.",
    initials: "JY",
  },
  {
    name: "Amira Hassan",
    title: "COO — MENA & Africa",
    bio: "15 years managing trade operations across the Middle East and African continent. Expert in emerging market compliance, customs facilitation, and corridor development.",
    initials: "AH",
  },
  {
    name: "David Chen",
    title: "Managing Director, Asia-Pacific",
    bio: "Based in Singapore with deep expertise in Asian trade corridors, ASEAN regulations, and cross-border e-commerce logistics. MBA from NUS.",
    initials: "DC",
  },
  {
    name: "Elena Vasquez",
    title: "Chief Compliance Officer",
    bio: "Former customs attorney with 18 years specializing in trade law, sanctions compliance, and WTO regulations. Licensed customs broker in 6 jurisdictions.",
    initials: "EV",
  },
];

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management Systems", color: "#0052CC" },
  { name: "FIATA Member", desc: "International Federation of Freight Forwarders", color: "#00875A" },
  { name: "WCO Accredited", desc: "World Customs Organization", color: "#0747A6" },
  { name: "IATA Certified", desc: "Air Cargo Handling & Dangerous Goods", color: "#FF8B00" },
  { name: "AEO Status", desc: "Authorized Economic Operator — EU & UK", color: "#00B8D9" },
  { name: "UN Global Compact", desc: "Sustainable Trade Signatory", color: "#00875A" },
];

const regions = [
  { name: "North America", detail: "HQ + 3 agent offices" },
  { name: "Europe", detail: "6 active trade corridors" },
  { name: "Middle East & Africa", detail: "Dubai hub + 12 countries" },
  { name: "Asia-Pacific", detail: "Singapore hub + 8 countries" },
  { name: "Latin America", detail: "4 emerging markets" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span>About Us</span>
          </nav>
          <span className="section-label section-label-light mb-4">Our Story</span>
          <h1 className="font-display font-extrabold text-white mt-4 mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1" }}
          >
            Pioneering Global Trade<br />Since 2008
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            YAT Business Group was built on a simple conviction: businesses of every size deserve expert, transparent, and results-driven trade support. We've spent 15+ years turning that conviction into a proven global operation.
          </p>
        </div>
      </div>

      {/* ── Company Story ── */}
      <section className="section-py bg-white" aria-labelledby="story-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label mb-4">Our Story</span>
              <h2 id="story-heading" className="font-display font-bold text-[#091E42] mt-4 mb-6"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                From a Boutique Consultancy to a Global Trade Powerhouse
              </h2>
              <div className="flex flex-col gap-5 text-[#344563] leading-relaxed">
                <p>
                  YAT Business Group was founded in New York in 2008 by Jonathan A. Yates, a seasoned trade executive who recognized a fundamental gap: small and mid-size businesses were navigating complex international trade regulations without adequate support, losing millions to customs delays, compliance failures, and missed market opportunities.
                </p>
                <p>
                  What began as a consultancy serving a handful of North American importers quickly evolved. As our client roster grew, so did our capabilities. By 2011 we had opened our first international office in Dubai — a strategic gateway to the Middle East and African markets. By 2019 we extended our reach into Asia-Pacific with a Singapore hub.
                </p>
                <p>
                  Today, YAT Business Group facilitates over $2.8 billion in annual trade volume across 40+ countries. We serve multinational corporations, growing mid-market companies, and emerging enterprises — all with the same commitment to precision, compliance, and partnership.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div id="history" aria-label="Company timeline">
              <h3 className="font-display font-bold text-[#091E42] text-xl mb-8">Key Milestones</h3>
              <div>
                {timeline.map((item) => (
                  <div key={item.year} className="timeline-item">
                    <div className="timeline-dot" />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold bg-[#DEEBFF] text-[#0052CC] px-2 py-0.5 rounded-[3px]">{item.year}</span>
                        <h4 className="font-semibold text-[#172B4D] text-sm">{item.title}</h4>
                      </div>
                      <p className="text-sm text-[#6B778C] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission, Vision, Values ── */}
      <section className="section-py bg-[#F4F5F7]" aria-labelledby="mission-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-label mb-4">Purpose & Values</span>
            <h2 id="mission-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <div className="card p-8">
              <div className="w-12 h-12 rounded-lg bg-[#DEEBFF] flex items-center justify-center mb-5">
                <Target size={24} className="text-[#0052CC]" />
              </div>
              <h3 className="font-display font-bold text-[#091E42] text-xl mb-3">Our Mission</h3>
              <p className="text-[#344563] leading-relaxed">
                To empower businesses worldwide with reliable, transparent, and expert trade solutions that open markets, reduce complexity, and create measurable growth — regardless of company size or sector.
              </p>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 rounded-lg bg-[#E3FCEF] flex items-center justify-center mb-5">
                <TrendingUp size={24} className="text-[#00875A]" />
              </div>
              <h3 className="font-display font-bold text-[#091E42] text-xl mb-3">Our Vision</h3>
              <p className="text-[#344563] leading-relaxed">
                To be the world&#39;s most trusted trade partner — a company where any business, anywhere, can access global markets with confidence and clarity.
              </p>
            </div>
          </div>

          <h3 className="font-display font-bold text-[#091E42] text-xl text-center mb-8">Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {values.map((v) => (
              <div key={v.title} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-[#DEEBFF] flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-[#0052CC]" />
                </div>
                <h4 className="font-bold text-[#091E42] mb-2">{v.title}</h4>
                <p className="text-xs text-[#6B778C] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="section-py bg-white" id="leadership" aria-labelledby="leadership-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-label mb-4">The Team</span>
            <h2 id="leadership-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Executive Leadership
            </h2>
            <p className="text-[#42526E] mt-4 max-w-2xl mx-auto">
              Our leadership team brings together decades of experience across trade law, logistics, supply chain management, and global market development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((l) => (
              <div key={l.name} className="card p-6 text-center group">
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#DEEBFF] to-[#B3D4FF] flex items-center justify-center mx-auto mb-5 text-2xl font-bold text-[#0052CC] font-display group-hover:from-[#0052CC] group-hover:to-[#0747A6] group-hover:text-white transition-all duration-300">
                  {l.initials}
                </div>
                <h3 className="font-bold text-[#091E42] mb-1">{l.name}</h3>
                <p className="text-xs font-semibold text-[#0052CC] mb-3 uppercase tracking-[0.06em]">{l.title}</p>
                <p className="text-xs text-[#6B778C] leading-relaxed mb-4">{l.bio}</p>
                <a href="#" aria-label={`${l.name} on LinkedIn`} className="inline-flex items-center gap-1.5 text-xs text-[#0052CC] hover:underline font-medium">
                  <LinkedInIcon size={12} /> LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="section-py bg-[#F4F5F7]" id="certifications" aria-labelledby="certs-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Credentials</span>
            <h2 id="certs-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Certifications & Memberships
            </h2>
            <p className="text-[#42526E] mt-4 max-w-xl mx-auto">
              Our credentials reflect our commitment to international standards, compliance excellence, and industry best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((c) => (
              <div key={c.name} className="card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${c.color}18` }}>
                  <Award size={22} style={{ color: c.color }} />
                </div>
                <div>
                  <p className="font-bold text-[#172B4D] text-sm">{c.name}</p>
                  <p className="text-xs text-[#6B778C]">{c.desc}</p>
                </div>
                <CheckCircle2 size={18} className="ml-auto shrink-0" style={{ color: c.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Presence ── */}
      <section className="section-py bg-white" aria-labelledby="presence-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4">Global Presence</span>
              <h2 id="presence-heading" className="font-display font-bold text-[#091E42] mt-4 mb-5"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                Offices, Agents & Trade Corridors Worldwide
              </h2>
              <p className="text-[#42526E] leading-relaxed mb-8">
                Our global footprint gives clients direct access to local expertise, established regulatory relationships, and on-ground logistics support in every major trade region.
              </p>
              <div className="flex flex-col gap-4">
                {regions.map((r) => (
                  <div key={r.name} className="flex items-center gap-4 p-4 rounded-lg border border-[#DFE1E6] hover:border-[#B3D4FF] hover:bg-[#F4F5F7] transition-all">
                    <div className="w-2 h-2 rounded-full bg-[#0052CC] shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-[#172B4D] text-sm">{r.name}</p>
                      <p className="text-xs text-[#6B778C]">{r.detail}</p>
                    </div>
                    <Globe size={16} className="text-[#C1C7D0]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative world map placeholder */}
            <div className="relative">
              <div className="aspect-16/10 rounded-xl bg-linear-to-br from-[#091E42] to-[#172B4D] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                {/* Decorative dots for office locations */}
                {[
                  { top: "35%", left: "22%", label: "New York" },
                  { top: "42%", left: "48%", label: "London" },
                  { top: "48%", left: "57%", label: "Dubai" },
                  { top: "55%", left: "72%", label: "Singapore" },
                ].map((dot) => (
                  <div key={dot.label} className="absolute flex flex-col items-center gap-1" style={{ top: dot.top, left: dot.left }}>
                    <div className="w-3 h-3 rounded-full bg-[#00C7E6] shadow-[0_0_12px_rgba(0,199,230,0.6)]" />
                    <span className="text-[9px] text-white/60 font-medium whitespace-nowrap">{dot.label}</span>
                  </div>
                ))}
                <div className="relative z-10 text-center">
                  <Globe size={48} className="text-white/20 mx-auto mb-3" />
                  <p className="text-white/40 text-sm font-medium">Interactive map available in<br />Global Network section</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link href="/network" className="btn btn-secondary text-sm">
                  View Global Network <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-py-sm bg-[#F4F5F7]">
        <div className="container-site">
          <div className="cta-banner text-center">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                Partner with a Team That Delivers
              </h2>
              <p className="text-white/65 mb-7 max-w-lg mx-auto">
                15+ years of results-driven trade expertise is ready to work for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn btn-white btn-primary-lg">
                  Start a Conversation <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn btn-ghost-white btn-primary-lg">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
