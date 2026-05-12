import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "YAT Business Group Privacy Policy — how we collect, use, and protect your personal data in compliance with GDPR, CCPA, and applicable data protection laws.",
  alternates: { canonical: "https://www.yat-m.com/legal/privacy" },
  robots: { index: true, follow: false },
};

const sections = [
  {
    id: "data-collected",
    title: "1. Data We Collect and Why",
    content: [
      {
        sub: "Contact & Enquiry Data",
        text: "When you submit a contact form, request a quote, or email us directly, we collect your name, company name, country, email address, phone number, and the content of your message. We use this to respond to your enquiry, provide quotes, and manage our business relationship with you. Legal basis: Legitimate interests (Article 6(1)(f) GDPR) and, where applicable, performance of a contract (Article 6(1)(b)).",
      },
      {
        sub: "Website Usage Data",
        text: "We automatically collect technical data when you visit our website, including your IP address (anonymized), browser type, device type, pages visited, time on site, and referring URL. This is used for website analytics, security monitoring, and improving user experience. Legal basis: Legitimate interests (Article 6(1)(f) GDPR). See our Cookie Policy for details.",
      },
      {
        sub: "Newsletter & Marketing",
        text: "If you subscribe to our trade insights newsletter, we collect your email address and, optionally, your name and company. Legal basis: Consent (Article 6(1)(a) GDPR). You may unsubscribe at any time using the link in each email.",
      },
      {
        sub: "Client & Supplier Data",
        text: "For ongoing business relationships, we process contact details, transaction data, and any personal data contained in trade documents (invoices, certificates, shipping documents). Legal basis: Performance of a contract (Article 6(1)(b)) and legal obligations (Article 6(1)(c)).",
      },
    ],
  },
  {
    id: "third-party",
    title: "2. Third-Party Data Sharing",
    content: [
      {
        sub: "Service Providers",
        text: "We may share your data with trusted third-party service providers who process data on our behalf under strict data processing agreements. These include: email delivery platforms (e.g., transactional email services), website analytics providers (anonymized data only), CRM and business management software, and cloud storage and infrastructure providers.",
      },
      {
        sub: "Trade Partners & Agents",
        text: "To facilitate trade transactions, we may share relevant personal data (such as contact information on shipping documents) with our in-country agents, freight carriers, and customs brokers. This sharing is necessary to perform the services you have contracted us to provide.",
      },
      {
        sub: "Legal & Regulatory",
        text: "We may disclose personal data to customs authorities, regulatory bodies, law enforcement, or courts where required by law or to protect our legal rights.",
      },
      {
        sub: "What We Don't Do",
        text: "We do not sell, rent, or trade personal data to any third party for marketing or commercial purposes. We do not transfer data outside the EEA, UK, or your jurisdiction without adequate safeguards (standard contractual clauses or equivalent).",
      },
    ],
  },
  {
    id: "your-rights",
    title: "3. Your Rights (GDPR / CCPA)",
    content: [
      {
        sub: "Under GDPR (EU/UK)",
        text: "You have the right to: access the personal data we hold about you; correct inaccurate data; request erasure ('right to be forgotten') where no legal basis for retention exists; restrict or object to processing; receive your data in a portable format; withdraw consent at any time where consent is the legal basis; and lodge a complaint with your national supervisory authority (e.g., ICO in the UK, CNIL in France).",
      },
      {
        sub: "Under CCPA (California)",
        text: "California residents have the right to: know what personal information is collected; know whether personal information is sold or disclosed; opt-out of the sale of personal information (we do not sell personal information); request deletion of personal information; and not be discriminated against for exercising these rights.",
      },
    ],
  },
  {
    id: "retention",
    title: "4. Data Retention",
    content: [
      {
        sub: "Retention Periods",
        text: "Contact enquiry data: 3 years from last contact, unless a business relationship continues. Client/supplier transaction data: 7 years to comply with accounting and tax regulations. Marketing subscription data: Until unsubscribed, plus 1 year. Website analytics data: 26 months (anonymized after 6 months).",
      },
    ],
  },
  {
    id: "security",
    title: "5. Data Security",
    content: [
      {
        sub: "Our Security Measures",
        text: "We implement appropriate technical and organisational measures to protect your personal data, including: TLS/SSL encryption for all data in transit; encryption at rest for stored personal data; access controls limiting data access to authorised staff; regular security audits and penetration testing; and staff training on data protection and security.",
      },
    ],
  },
  {
    id: "cookies",
    title: "6. Cookies",
    content: [
      {
        sub: "Cookie Usage",
        text: "Our website uses cookies to enhance your experience, analyse traffic, and support security features. For full details of the cookies we use, their purpose, and how to manage your preferences, please see our Cookie Policy.",
      },
    ],
  },
  {
    id: "contact-data",
    title: "7. Contact for Data Requests",
    content: [
      {
        sub: "Data Protection Contact",
        text: "To exercise any of your rights, submit a data subject access request, or raise a concern about how we process your personal data, please contact: Data Protection Officer, YAT Business Group, 1200 Trade Tower, Financial District, New York, NY 10004, USA. Email: privacy@yatbusinessgroup.com. We will respond to all requests within 30 calendar days.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">/</span>
            <Link href="/legal/terms">Legal</Link><span className="breadcrumb-sep">/</span>
            <span>Privacy Policy</span>
          </nav>
          <h1 className="font-display font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: "1.1", color: "#FFFFFF" }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm">
            Last updated: 1 April 2026 · Effective: 1 May 2026
          </p>
        </div>
      </div>

      <section className="section-py bg-white">
        <div className="container-narrow">
          <div className="prose-like">
            <div className="p-5 rounded-[8px] bg-[#DEEBFF] border border-[#B3D4FF] mb-10">
              <p className="text-sm text-[#0052CC] leading-relaxed">
                <strong>Summary:</strong> YAT Business Group is committed to protecting your privacy. We collect only the data we need to provide our services and respond to your enquiries. We do not sell your data. You have full rights over your personal information under GDPR, CCPA, and other applicable laws.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {sections.map((sec) => (
                <div key={sec.id} id={sec.id} className="scroll-mt-24">
                  <h2 className="font-display font-bold text-[#091E42] text-xl mb-5 pb-3 border-b border-[#EBECF0]">{sec.title}</h2>
                  <div className="flex flex-col gap-5">
                    {sec.content.map((c) => (
                      <div key={c.sub}>
                        <h3 className="font-semibold text-[#172B4D] text-sm mb-2">{c.sub}</h3>
                        <p className="text-[#42526E] text-sm leading-relaxed">{c.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-[8px] bg-[#F4F5F7] border border-[#DFE1E6]">
              <h3 className="font-bold text-[#172B4D] mb-3">Questions or Requests?</h3>
              <p className="text-sm text-[#42526E] mb-4">Contact our Data Protection Officer at <a href="mailto:privacy@yat-m.com" className="text-[#0052CC] hover:underline">privacy@yat-m.com</a></p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary text-sm">Contact Us</Link>
                <Link href="/legal/cookies" className="btn btn-secondary text-sm">Cookie Policy</Link>
                <Link href="/legal/terms" className="btn btn-secondary text-sm">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
