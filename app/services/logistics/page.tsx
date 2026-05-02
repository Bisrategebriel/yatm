import type { Metadata } from "next";
import Link from "next/link";
import { Truck, CheckCircle2, ArrowRight, Anchor, Plane, Train, Warehouse, Thermometer, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Freight & Logistics",
  description: "Multimodal freight forwarding by sea, air, and road. YAT Business Group provides end-to-end logistics with real-time tracking, warehousing, and last-mile delivery.",
  alternates: { canonical: "https://www.yatbusinessgroup.com/services/logistics" },
};

const modes = [
  { icon: Anchor, title: "Ocean Freight", color: "#0052CC", bg: "#DEEBFF", features: ["Full Container Load (FCL)", "Less than Container Load (LCL)", "Bulk & break-bulk cargo", "RORO services", "500+ global port connections"] },
  { icon: Plane, title: "Air Freight", color: "#0747A6", bg: "#DEEBFF", features: ["Standard air cargo", "Express & time-critical shipments", "Temperature-controlled air freight", "Dangerous goods handling", "Charter services for large volumes"] },
  { icon: Truck, title: "Road Freight", color: "#FF8B00", bg: "#FFF0B3", features: ["Full truckload (FTL)", "Less than truckload (LTL)", "Cross-border road transport", "Refrigerated trucking", "Oversized & project cargo"] },
  { icon: Train, title: "Rail Freight", color: "#00875A", bg: "#E3FCEF", features: ["Intercontinental rail routes", "China-Europe rail corridor", "Block train services", "Intermodal rail solutions", "Port-to-rail transfers"] },
  { icon: Warehouse, title: "Warehousing", color: "#00B8D9", bg: "#E6FCFF", features: ["Bonded warehouse facilities", "Distribution centre management", "Pick, pack & ship", "Inventory management systems", "Cross-docking services"] },
  { icon: Thermometer, title: "Cold Chain", color: "#DE350B", bg: "#FFEBE6", features: ["Temperature-controlled storage", "Pharmaceutical logistics", "Perishable food exports", "IoT temperature monitoring", "HACCP-compliant handling"] },
];

const highlights = [
  "Real-time cargo tracking & visibility dashboard",
  "Dedicated account manager for each client",
  "Carrier rate benchmarking & optimization",
  "Full cargo insurance coordination",
  "Dangerous goods (IMDG/IATA) certified handling",
  "Project cargo & heavy lift specialist services",
  "Emergency freight & expedited solutions",
  "Customs-bonded warehousing & duty deferment",
];

export default function LogisticsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">/</span>
            <Link href="/services">Services</Link><span className="breadcrumb-sep">/</span>
            <span>Freight & Logistics</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-[8px] bg-white/10 flex items-center justify-center">
              <Truck size={24} className="text-white" />
            </div>
            <span className="section-label section-label-light">Freight & Logistics</span>
          </div>
          <h1 className="font-display font-extrabold text-white mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1" }}
          >
            Multimodal Freight Solutions<br />Across 6 Continents
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed mb-8">
            Sea, air, road, and rail — with real-time visibility, warehousing, and cold chain capabilities. We move your cargo reliably from origin to destination.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-white btn-primary-lg">Request a Quote <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn btn-ghost-white btn-primary-lg">Track a Shipment</Link>
          </div>
        </div>
      </div>

      <section className="section-py bg-[#F4F5F7]" aria-labelledby="modes-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-label mb-4">Freight Modes</span>
            <h2 id="modes-heading" className="font-display font-bold text-[#091E42] mt-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Every Mode. Any Cargo. Any Route.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modes.map((m) => (
              <div key={m.title} className="card p-6">
                <div className="w-12 h-12 rounded-[8px] flex items-center justify-center mb-5" style={{ background: m.bg }}>
                  <m.icon size={22} style={{ color: m.color }} />
                </div>
                <h3 className="font-bold text-[#091E42] text-lg mb-4">{m.title}</h3>
                <ul className="flex flex-col gap-2">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#344563]">
                      <CheckCircle2 size={13} style={{ color: m.color }} className="flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4">Added Value</span>
              <h2 className="font-display font-bold text-[#091E42] mt-4 mb-5"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                More Than Moving Boxes
              </h2>
              <p className="text-[#42526E] leading-relaxed mb-6">
                Our logistics service is built around end-to-end accountability. From rate negotiation and carrier selection to customs clearance and delivery confirmation — you get one point of contact and full visibility at every step.
              </p>
              <ul className="grid gap-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-[#344563]">
                    <CheckCircle2 size={15} className="text-[#0052CC] mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Port Connections" },
                { value: "99.2%", label: "On-Time Delivery Rate" },
                { value: "24/7", label: "Shipment Visibility" },
                { value: "6", label: "Continents Covered" },
              ].map((s) => (
                <div key={s.label} className="card p-6 text-center">
                  <p className="font-display font-extrabold text-[#0052CC] text-3xl mb-1">{s.value}</p>
                  <p className="text-sm text-[#6B778C] font-medium">{s.label}</p>
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
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                Get a Freight Quote Today
              </h2>
              <p className="text-white/65 mb-7 max-w-md mx-auto">Tell us your origin, destination, cargo type, and timeline. We'll send a competitive rate within 24 hours.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn btn-white btn-primary-lg">Request a Rate <ArrowRight size={16} /></Link>
                <Link href="/contact" className="btn btn-ghost-white btn-primary-lg">Talk to Logistics Team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
