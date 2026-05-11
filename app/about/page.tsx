import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2, Award, Globe, Users, Target, Heart,
  TrendingUp, ShieldCheck, Lightbulb, ArrowRight,
  Handshake
} from "lucide-react";
import { LinkedInIcon } from "@/components/SocialIcons";
import MapContainer from "@/components/MapContainer";


export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about YAT Business Group — our founding story, mission, leadership team, certifications, and 7+ years of global trade expertise across the globe.",
  alternates: { canonical: "https://www.yatbusinessgroup.com/about" },
  openGraph: {
    title: "About YAT Business Group | Global Trade Experts Since 2008",
    description: "7+ years of excellence in international trade, import, export, manufacturing, compliance, consulting and logistics across the globe.",
  },
};

const timeline = [
  { year: "2019", title: "Company Foundation", desc: "YAT Manufacturing P.L.C. was established as a manufacturer of plastic products with a mission to support industrial growth and quality production in Ethiopia." },
  { year: "2020", title: "Expansion Into International Trade", desc: "The company expanded into import and export operations, building partnerships with international suppliers, buyers, and forwarding companies." },
  { year: "2021", title: "Logistics & Forwarding Services", desc: "YAT introduced shipping, freight forwarding, customs clearing, and transportation solutions to provide end-to-end trade support." },
  { year: "2022", title: "Agricultural Export Growth", desc: "The company strengthened its export operations by supplying Ethiopian coffee, sesame, oil seeds, and pulses to international markets." },
  { year: "2023", title: "Industrial Machinery & Factory Solutions", desc: "YAT expanded into industrial machine supply, factory design, installation support, and manufacturing consultancy services." },
  { year: "2024", title: "Business Consultancy & Training", desc: "The company began providing operational training and international business consultancy to support sustainable growth for businesses and employees." },
  { year: "Today", title: "Building Global Trade Connections", desc: "YAT continues to grow as a trusted manufacturing, logistics, and international trade partner focused on quality, precision, innovation, and long-term business relationships." },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We conduct every partnership and operation with honesty, transparency, and professionalism." },
  { icon: Target, title: "Excellence", desc: "We are committed to delivering high-quality services and reliable results that exceed client expectations." },
  { icon: Lightbulb, title: "Creativity", desc: "We embrace innovation and practical thinking to create effective solutions for modern business challenges." },
  { icon: Heart, title: "Teamwork", desc: "We believe strong collaboration and shared expertise are essential for achieving sustainable success." },
  { icon: Handshake, title: "Accountability", desc: "We take responsibility for our actions, decisions, and commitments to ensure trust and consistency." },
];

const leadership = [
  {
    name: "Tagel Melkamu",
    title: "General Manager",
    bio: "General Manager of YAT Manufacturing P.L.C. with an academic background in Mathematics and Economics. He leads the company’s strategic direction, overseeing operations, and international trade activities",
    initials: "TM",
  },
  {
    name: "Amhaslsie Melkamu",
    title: "Marketing Manager",
    bio: "Marketing Manager with expertise in Economics and International Trade. He plays a key role in building international business relationships, and market expansion strategies",
    initials: "AM",
  },
  {
    name: "Yared Melkamu",
    title: "Marketing Officer",
    bio: "Marketing Officer with a background in Computer Science, contributing to marketing operations, business communication, and digital support initiatives.",
    initials: "YM",
  },
  {
    name: "Jingsong Liu",
    title: "YAT Agent at Djibouti",
    bio: "YAT’s representative in Djibouti, supporting international logistics coordination, shipping operations, and cross-border trade activities.",
    initials: "JL",
  },
];

const certifications = [
  { name: "Coffee Training Center Ethiopia", desc: "Basic Coffee Training, Quality Inspection of Raw Coffee, and Roasting & Liquoring", color: "#0052CC" },
  { name: "Certificate of Appreciation", desc: "Timely supply of various types of distribution transformers to Amhara Regional State Electirc Utility", color: "#00875A" },
  // { name: "WCO Accredited", desc: "World Customs Organization", color: "#0747A6" },
  // { name: "IATA Certified", desc: "Air Cargo Handling & Dangerous Goods", color: "#FF8B00" },
  // { name: "AEO Status", desc: "Authorized Economic Operator — EU & UK", color: "#00B8D9" },
  // { name: "UN Global Compact", desc: "Sustainable Trade Signatory", color: "#00875A" },
];

const regions = [
  { name: "Africa", detail: "2 active trade corridors" },
  { name: "Middle East", detail: "Dubai hub + 4 countries" },
  { name: "Asia-Pacific", detail: "China hub + 3 countries" },
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
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", color: "#ffffff" }}
          >
            Pioneering Global Trade<br />Since 2019
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            YAT Business Group was built on a simple conviction: businesses of every size deserve expert, transparent, and results-driven trade support. We've spent 7+ years turning that conviction into a proven global operation.
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
                The Road to Global Trade Powerhouse
              </h2>
              <div className="flex flex-col gap-5 text-[#344563] leading-relaxed">
                <p className="text-justify">
                  YAT Manufacturing P.L.C. was established in 2019 with a vision to build stronger connections between local industries and global opportunities. What began as a plastic manufacturing company has steadily grown into a diversified business operating across manufacturing, import and export trade, logistics, forwarding services, and international business consultancy.
                </p>
                <p className="text-justify">
                  Driven by a commitment to quality, reliability, and innovation, YAT works closely with international suppliers, buyers, shipping companies, and logistics partners to deliver complete business solutions for clients in Ethiopia and beyond. Over the years, the company has expanded its expertise into exporting Ethiopian agricultural products such as coffee, sesame, oil seeds, and pulses while also supporting businesses with industrial machinery imports, customs clearing, transportation, and operational guidance.
                </p>
                <p className="text-justify">
                  At YAT, we believe business is not only about transactions — it is about creating long-term value, empowering industries, and building trusted partnerships. Our team combines technical expertise, international trade knowledge, and practical operational experience to help clients navigate complex markets with confidence.
                </p>
                <p className="text-justify">
                  Today, YAT continues to grow with a clear mission: to contribute to the industrialization, logistics, and trade sectors of Ethiopia while connecting businesses to opportunities across the global market.
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
                Creating endless possibilities to the Manufacturing, logistics and service sector of
                Ethiopia and beyond.
              </p>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 rounded-lg bg-[#E3FCEF] flex items-center justify-center mb-5">
                <TrendingUp size={24} className="text-[#00875A]" />
              </div>
              <h3 className="font-display font-bold text-[#091E42] text-xl mb-3">Our Vision</h3>
              <p className="text-[#344563] leading-relaxed">
                To help our people access worldwide logistics services, Industrialized and eco
                friendly facilities.
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

            {/* Real SVG World Map */}
            <div className="relative">
              <MapContainer />
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
