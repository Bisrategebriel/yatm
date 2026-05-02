import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "YAT Business Group Terms of Service — the terms governing use of our website and trade services, including disclaimers, limitation of liability, and governing law.",
  alternates: { canonical: "https://www.yatbusinessgroup.com/legal/terms" },
  robots: { index: true, follow: false },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing or using the YAT Business Group website (yatbusinessgroup.com) and any services provided by YAT Business Group LLC ('YAT', 'we', 'us', 'our'), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, users, and anyone who accesses or uses our services.",
  },
  {
    title: "2. Website Use Terms",
    content: "You may use this website for lawful purposes and in accordance with these Terms. You agree not to: use the website in any way that violates applicable laws or regulations; transmit any unsolicited commercial communications; attempt to gain unauthorised access to any part of the website or its related systems; use any automated tools to scrape, crawl, or extract data from this website without our express written permission; or transmit any material that is harmful, offensive, or infringes on intellectual property rights.",
  },
  {
    title: "3. Services Disclaimer",
    content: "The information on this website is provided for general informational purposes only. While we strive to keep information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose. Trade regulations, customs tariffs, and compliance requirements change frequently. Nothing on this website constitutes formal legal, tax, or regulatory advice. Always consult qualified professionals for specific trade compliance guidance.",
  },
  {
    title: "4. Service Agreements",
    content: "Where YAT Business Group provides import, export, logistics, compliance, or consulting services, those services are governed by a separate Service Agreement or Statement of Work entered into between YAT and the client. In the event of any conflict between these Terms and a specific Service Agreement, the Service Agreement shall prevail.",
  },
  {
    title: "5. Limitation of Liability",
    content: "To the fullest extent permitted by applicable law, YAT Business Group, its directors, officers, employees, agents, and partners shall not be liable for: any indirect, incidental, special, consequential, or punitive damages; loss of profits, revenue, data, or business opportunities; customs delays, seizures, or penalties arising from inaccurate information provided by the client; losses arising from force majeure events including natural disasters, strikes, governmental actions, or pandemic disruptions; or any losses exceeding the fees paid to YAT for the specific service giving rise to the claim. Nothing in these Terms shall limit our liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded by law.",
  },
  {
    title: "6. Intellectual Property",
    content: "All content on this website — including text, graphics, logos, images, and software — is the property of YAT Business Group or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent. You may print or download content for your own personal, non-commercial use.",
  },
  {
    title: "7. Third-Party Links",
    content: "This website may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them. The inclusion of a link does not imply endorsement by YAT Business Group.",
  },
  {
    title: "8. Governing Law and Jurisdiction",
    content: "These Terms of Service are governed by and construed in accordance with the laws of the State of New York, United States of America, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of New York County, New York, USA. If you are a consumer in the EU or UK, you may also have rights under the mandatory consumer protection laws of your country of residence.",
  },
  {
    title: "9. Changes to These Terms",
    content: "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website with an updated 'Last Updated' date. Your continued use of the website after changes are posted constitutes your acceptance of the revised Terms. We recommend reviewing these Terms periodically.",
  },
  {
    title: "10. Contact",
    content: "For questions about these Terms of Service, please contact us at: legal@yatbusinessgroup.com, or write to: Legal Department, YAT Business Group, 1200 Trade Tower, Financial District, New York, NY 10004, USA.",
  },
];

export default function TermsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">/</span>
            <span>Legal</span><span className="breadcrumb-sep">/</span>
            <span>Terms of Service</span>
          </nav>
          <h1 className="font-display font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: "1.1" }}
          >
            Terms of Service
          </h1>
          <p className="text-white/60 text-sm">Last updated: 1 April 2026 · Effective: 1 May 2026</p>
        </div>
      </div>

      <section className="section-py bg-white">
        <div className="container-narrow">
          <div className="p-5 rounded-[8px] bg-[#FFFAE6] border border-[#FFE380] mb-10">
            <p className="text-sm text-[#344563] leading-relaxed">
              <strong>Please read these terms carefully</strong> before using our website or engaging our services. By using yatbusinessgroup.com, you agree to these terms.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display font-bold text-[#091E42] text-lg mb-3 pb-2 border-b border-[#EBECF0]">{s.title}</h2>
                <p className="text-[#42526E] text-sm leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-[8px] bg-[#F4F5F7] border border-[#DFE1E6]">
            <h3 className="font-bold text-[#172B4D] mb-3">Related Legal Documents</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/legal/privacy" className="btn btn-secondary text-sm">Privacy Policy</Link>
              <Link href="/legal/cookies" className="btn btn-secondary text-sm">Cookie Policy</Link>
              <Link href="/contact" className="btn btn-primary text-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
