import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "YAT Business Group Cookie Policy — the types of cookies we use, their purpose, and how to manage your cookie preferences.",
  alternates: { canonical: "https://www.yat-m.com/legal/cookies" },
  robots: { index: true, follow: false },
};

const cookieTypes = [
  {
    type: "Strictly Necessary",
    color: "#0052CC",
    bg: "#DEEBFF",
    canDisable: false,
    desc: "Essential for the website to function. These cannot be switched off. They include cookies for session management, security tokens, and load balancing.",
    cookies: [
      { name: "session_id", purpose: "Maintains your session state while browsing", duration: "Session (expires on browser close)", third_party: "No" },
      { name: "csrf_token", purpose: "Protects against cross-site request forgery attacks", duration: "Session", third_party: "No" },
    ],
  },
  {
    type: "Analytics & Performance",
    color: "#0747A6",
    bg: "#DEEBFF",
    canDisable: true,
    desc: "Help us understand how visitors interact with our website — which pages are visited, how long visitors stay, and where they come from. All data is anonymized.",
    cookies: [
      { name: "_ga", purpose: "Google Analytics — distinguishes unique users (anonymized IP)", duration: "2 years", third_party: "Google LLC" },
      { name: "_ga_*", purpose: "Google Analytics 4 — session state", duration: "2 years", third_party: "Google LLC" },
      { name: "_gid", purpose: "Google Analytics — distinguishes users (resets daily)", duration: "24 hours", third_party: "Google LLC" },
    ],
  },
  {
    type: "Functional",
    color: "#00875A",
    bg: "#E3FCEF",
    canDisable: true,
    desc: "Enable enhanced functionality such as remembering your language preference or region. Disabling these may affect some features.",
    cookies: [
      { name: "pref_lang", purpose: "Stores your language/region preference", duration: "1 year", third_party: "No" },
      { name: "cookie_consent", purpose: "Stores your cookie consent preferences", duration: "1 year", third_party: "No" },
    ],
  },
  {
    type: "Marketing & Targeting",
    color: "#FF8B00",
    bg: "#FFF0B3",
    canDisable: true,
    desc: "Used to deliver relevant content and measure the effectiveness of our advertising campaigns. We currently use minimal marketing cookies and do not engage in cross-site tracking.",
    cookies: [
      { name: "_fbp", purpose: "Facebook Pixel — page view tracking for ad measurement", duration: "3 months", third_party: "Meta Platforms Inc." },
      { name: "li_fat_id", purpose: "LinkedIn Insight Tag — conversion tracking", duration: "30 days", third_party: "LinkedIn Corporation" },
    ],
  },
];

export default function CookiePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site relative z-10">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">/</span>
            <span>Legal</span><span className="breadcrumb-sep">/</span>
            <span>Cookie Policy</span>
          </nav>
          <h1 className="font-display font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: "1.1", color: "#FFFFFF" }}
          >
            Cookie Policy
          </h1>
          <p className="text-white/60 text-sm">Last updated: 1 April 2026</p>
        </div>
      </div>

      <section className="section-py bg-white">
        <div className="container-narrow">
          <p className="text-[#42526E] text-sm leading-relaxed mb-8">
            YAT Business Group uses cookies and similar tracking technologies on our website (yatbusinessgroup.com) to enhance your experience, analyse performance, and — with your consent — support relevant marketing activities. This policy explains what cookies we use, why, and how you can control them.
          </p>

          <h2 className="font-display font-bold text-[#091E42] text-xl mb-6">Cookie Categories</h2>

          <div className="flex flex-col gap-6">
            {cookieTypes.map((ct) => (
              <div key={ct.type} className="rounded-[8px] border border-[#DFE1E6] overflow-hidden">
                <div className="p-5 flex items-center justify-between gap-4" style={{ background: `${ct.color}08`, borderBottom: `1px solid ${ct.color}20` }}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ background: ct.color }} />
                    <h3 className="font-bold text-[#172B4D]">{ct.type}</h3>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-[3px] ${ct.canDisable ? "bg-[#FFF0B3] text-[#FF8B00]" : "bg-[#E3FCEF] text-[#00875A]"}`}>
                    {ct.canDisable ? "Can be disabled" : "Always active"}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#42526E] leading-relaxed mb-4">{ct.desc}</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs" aria-label={`${ct.type} cookies`}>
                      <thead>
                        <tr className="border-b border-[#EBECF0]">
                          <th className="text-left font-semibold text-[#344563] py-2 pr-4">Cookie Name</th>
                          <th className="text-left font-semibold text-[#344563] py-2 pr-4">Purpose</th>
                          <th className="text-left font-semibold text-[#344563] py-2 pr-4">Duration</th>
                          <th className="text-left font-semibold text-[#344563] py-2">Third Party</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ct.cookies.map((c) => (
                          <tr key={c.name} className="border-b border-[#EBECF0] last:border-0">
                            <td className="py-2.5 pr-4 font-mono text-[#0052CC]">{c.name}</td>
                            <td className="py-2.5 pr-4 text-[#42526E]">{c.purpose}</td>
                            <td className="py-2.5 pr-4 text-[#6B778C] whitespace-nowrap">{c.duration}</td>
                            <td className="py-2.5 text-[#6B778C]">{c.third_party}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-[8px] bg-[#DEEBFF] border border-[#B3D4FF]">
            <h3 className="font-bold text-[#091E42] mb-3">Managing Your Cookie Preferences</h3>
            <p className="text-sm text-[#344563] leading-relaxed mb-4">
              You can manage your cookie preferences at any time. Strictly necessary cookies cannot be disabled as they are essential for the website to function. For all other cookies, you can use your browser settings to block or delete cookies, or adjust your preferences via the cookie consent banner that appears on your first visit.
            </p>
            <p className="text-sm text-[#344563] leading-relaxed mb-4">
              Note that disabling certain cookies may affect the functionality of the website and your user experience.
            </p>
            <p className="text-sm text-[#344563]">
              For more information about how we handle your personal data, please see our{" "}
              <Link href="/legal/privacy" className="text-[#0052CC] hover:underline font-medium">Privacy Policy</Link>.
              For questions, contact <a href="mailto:privacy@yat-m.com" className="text-[#0052CC] hover:underline">privacy@yat-m.com</a>.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/legal/privacy" className="btn btn-secondary text-sm">Privacy Policy</Link>
            <Link href="/legal/terms" className="btn btn-secondary text-sm">Terms of Service</Link>
            <Link href="/contact" className="btn btn-primary text-sm">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
