"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, Globe,
  Package, ArrowLeftRight, Truck, ShieldCheck, BarChart3, HelpCircle,
} from "lucide-react";
import { LinkedInIcon, XIcon, FacebookIcon } from "@/components/SocialIcons";

const offices = [
  {
    city: "New York",
    flag: "🇺🇸",
    address: "1200 Trade Tower, Financial District, New York, NY 10004, USA",
    phone: "+1 (212) 555-0100",
    email: "newyork@yatbusinessgroup.com",
    hours: "Mon–Fri: 8:00 AM – 6:00 PM EST",
  },
  {
    city: "Dubai",
    flag: "🇦🇪",
    address: "Global Trade Centre, Level 12, Sheikh Zayed Road, Dubai, UAE",
    phone: "+971 4 555 0200",
    email: "dubai@yatbusinessgroup.com",
    hours: "Sun–Thu: 8:00 AM – 5:30 PM GST",
  },
  {
    city: "Singapore",
    flag: "🇸🇬",
    address: "Suite 800, International Plaza, 10 Anson Road, Singapore 068796",
    phone: "+65 6555 0300",
    email: "singapore@yatbusinessgroup.com",
    hours: "Mon–Fri: 8:30 AM – 5:30 PM SGT",
  },
];

const serviceOptions = [
  { value: "import", label: "Import Services", icon: Package },
  { value: "export", label: "Export Services", icon: ArrowLeftRight },
  { value: "logistics", label: "Freight & Logistics", icon: Truck },
  { value: "compliance", label: "Trade Compliance", icon: ShieldCheck },
  { value: "consulting", label: "Consulting & Advisory", icon: BarChart3 },
  { value: "other", label: "Other / General Enquiry", icon: HelpCircle },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [selectedService, setSelectedService] = useState("");
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState({
    name: "", company: "", country: "", email: "", phone: "",
    subject: "", message: "", service: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setFormState("submitting");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
  };

  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">/</span>
            <span>Contact Us</span>
          </nav>
          <span className="section-label section-label-light mb-4">Get in Touch</span>
          <h1 className="font-display font-extrabold text-white mt-4 mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1" }}
          >
            Let's Start a Conversation
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            Whether you need a quote, have a trade question, or want to explore how YAT can support your business — our team typically responds within 2 business hours.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="section-py bg-[#F4F5F7]">
        <div className="container-site">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              {formState === "success" ? (
                <div className="card p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#E3FCEF] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} className="text-[#00875A]" />
                  </div>
                  <h2 className="font-display font-bold text-[#091E42] text-2xl mb-3">Message Received!</h2>
                  <p className="text-[#42526E] mb-6 max-w-sm mx-auto">
                    Thank you for reaching out. One of our specialists will respond to your enquiry within 2 business hours.
                  </p>
                  <button onClick={() => { setFormState("idle"); setConsent(false); setSelectedService(""); setFormData({ name:"",company:"",country:"",email:"",phone:"",subject:"",message:"",service:"" }); }}
                    className="btn btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="card p-8">
                  <h2 className="font-display font-bold text-[#091E42] text-xl mb-2">Send Us a Message</h2>
                  <p className="text-[#6B778C] text-sm mb-7">Fill out the form and we'll be in touch. All fields marked <span className="text-[#DE350B]">*</span> are required.</p>

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Service selector */}
                    <div className="mb-6">
                      <label className="label-ads mb-3">
                        I&apos;m interested in <span className="text-[#DE350B]">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {serviceOptions.map((s) => (
                          <button
                            key={s.value}
                            type="button"
                            onClick={() => { setSelectedService(s.value); setFormData((prev) => ({ ...prev, service: s.value })); }}
                            className={`flex items-center gap-2 p-3 rounded-md border-2 text-sm font-medium transition-all text-left ${
                              selectedService === s.value
                                ? "border-[#0052CC] bg-[#DEEBFF] text-[#0052CC]"
                                : "border-[#DFE1E6] bg-white text-[#344563] hover:border-[#B3D4FF]"
                            }`}
                          >
                            <s.icon size={15} className={selectedService === s.value ? "text-[#0052CC]" : "text-[#97A0AF]"} />
                            <span className="leading-tight">{s.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Company */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="name" className="label-ads">Full Name <span className="text-[#DE350B]">*</span></label>
                        <input id="name" name="name" type="text" required autoComplete="name" placeholder="John Smith" className="input-ads" value={formData.name} onChange={handleChange} />
                      </div>
                      <div>
                        <label htmlFor="company" className="label-ads">Company <span className="text-[#DE350B]">*</span></label>
                        <input id="company" name="company" type="text" required autoComplete="organization" placeholder="Your Company Ltd." className="input-ads" value={formData.company} onChange={handleChange} />
                      </div>
                    </div>

                    {/* Country & Email */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="country" className="label-ads">Country <span className="text-[#DE350B]">*</span></label>
                        <input id="country" name="country" type="text" required autoComplete="country-name" placeholder="United States" className="input-ads" value={formData.country} onChange={handleChange} />
                      </div>
                      <div>
                        <label htmlFor="email" className="label-ads">Business Email <span className="text-[#DE350B]">*</span></label>
                        <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className="input-ads" value={formData.email} onChange={handleChange} />
                      </div>
                    </div>

                    {/* Phone & Subject */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="phone" className="label-ads">Phone Number</label>
                        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" className="input-ads" value={formData.phone} onChange={handleChange} />
                      </div>
                      <div>
                        <label htmlFor="subject" className="label-ads">Subject <span className="text-[#DE350B]">*</span></label>
                        <input id="subject" name="subject" type="text" required placeholder="How can we help?" className="input-ads" value={formData.subject} onChange={handleChange} />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label htmlFor="message" className="label-ads">Message <span className="text-[#DE350B]">*</span></label>
                      <textarea
                        id="message" name="message" required rows={5}
                        placeholder="Please describe your trade requirements, origin/destination countries, cargo type, or any other details that would help us respond accurately..."
                        className="input-ads resize-none"
                        value={formData.message} onChange={handleChange}
                      />
                    </div>

                    {/* GDPR Consent */}
                    <div className="mb-6 p-4 rounded-md bg-[#F4F5F7] border border-[#DFE1E6]">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="mt-1 w-4 h-4 rounded accent-[#0052CC] shrink-0"
                        />
                        <span className="text-xs text-[#344563] leading-relaxed">
                          I consent to YAT Business Group storing and processing my personal data to respond to this enquiry, in accordance with our{" "}
                          <Link href="/legal/privacy" className="text-[#0052CC] hover:underline">Privacy Policy</Link>.
                          You may withdraw consent at any time by contacting us at privacy@yatbusinessgroup.com.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={formState === "submitting" || !consent}
                      className="btn btn-primary btn-primary-lg w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formState === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-[#97A0AF] text-center mt-4">
                      Typical response time: 2 business hours · We never share your data with third parties
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Quick contact */}
              <div className="card p-6">
                <h3 className="font-display font-bold text-[#091E42] mb-4">Quick Contact</h3>
                <div className="flex flex-col gap-4">
                  <a href="tel:+12125550100" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-md bg-[#DEEBFF] flex items-center justify-center shrink-0 group-hover:bg-[#0052CC] transition-colors">
                      <Phone size={15} className="text-[#0052CC] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-[#97A0AF] font-medium">Global HQ (New York)</p>
                      <p className="text-sm font-semibold text-[#172B4D] group-hover:text-[#0052CC] transition-colors">+1 (212) 555-0100</p>
                    </div>
                  </a>
                  <a href="mailto:info@yatbusinessgroup.com" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-md bg-[#DEEBFF] flex items-center justify-center shrink-0 group-hover:bg-[#0052CC] transition-colors">
                      <Mail size={15} className="text-[#0052CC] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-[#97A0AF] font-medium">General Enquiries</p>
                      <p className="text-sm font-semibold text-[#172B4D] group-hover:text-[#0052CC] transition-colors break-all">info@yatbusinessgroup.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-[#DEEBFF] flex items-center justify-center shrink-0">
                      <Clock size={15} className="text-[#0052CC]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#97A0AF] font-medium">Response Time</p>
                      <p className="text-sm font-semibold text-[#172B4D]">Within 2 business hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-[#EBECF0]">
                  <p className="text-xs text-[#97A0AF] font-bold uppercase tracking-[0.06em] mb-3">Follow Us</p>
                  <div className="flex gap-2">
                    {[
                      { href: "https://linkedin.com", Icon: LinkedInIcon, label: "LinkedIn" },
                      { href: "https://twitter.com", Icon: XIcon, label: "Twitter / X" },
                      { href: "https://facebook.com", Icon: FacebookIcon, label: "Facebook" },
                    ].map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                        className="w-8 h-8 rounded-md border border-[#DFE1E6] flex items-center justify-center text-[#6B778C] hover:text-[#0052CC] hover:border-[#0052CC] transition-all"
                      >
                        <s.Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office directory */}
              <div className="card p-0 overflow-hidden" id="offices">
                <div className="p-5 bg-[#F4F5F7] border-b border-[#EBECF0]">
                  <h3 className="font-display font-bold text-[#091E42]">Office Directory</h3>
                </div>
                <div className="divide-y divide-[#EBECF0]">
                  {offices.map((o) => (
                    <div key={o.city} className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg">{o.flag}</span>
                        <h4 className="font-bold text-[#172B4D] text-sm">{o.city}</h4>
                      </div>
                      <div className="flex flex-col gap-2 text-xs">
                        <div className="flex items-start gap-2 text-[#6B778C]">
                          <MapPin size={11} className="text-[#97A0AF] mt-0.5 shrink-0" />
                          {o.address}
                        </div>
                        <a href={`tel:${o.phone}`} className="flex items-center gap-2 text-[#0052CC] hover:underline">
                          <Phone size={11} className="shrink-0" /> {o.phone}
                        </a>
                        <a href={`mailto:${o.email}`} className="flex items-center gap-2 text-[#0052CC] hover:underline break-all">
                          <Mail size={11} className="shrink-0" /> {o.email}
                        </a>
                        <div className="flex items-center gap-2 text-[#6B778C]">
                          <Clock size={11} className="shrink-0" /> {o.hours}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RFQ callout */}
              <div id="rfq" className="scroll-mt-24 rounded-lg bg-linear-to-br from-[#091E42] to-[#0052CC] p-6 text-white">
                <Globe size={28} className="text-white/30 mb-3" />
                <h3 className="font-display font-bold text-lg mb-2">Request for Quotation</h3>
                <p className="text-white/65 text-sm mb-4 leading-relaxed">
                  Need a formal quote? Use the contact form and select your service. Include cargo details, origin, destination, and timeline for the most accurate quote.
                </p>
                <ul className="flex flex-col gap-2 mb-5">
                  {["Respond within 2 business hours", "No obligation, free quote", "Competitive rates benchmarked across 50+ carriers"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-white/80">
                      <CheckCircle2 size={12} className="text-[#00C7E6] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
