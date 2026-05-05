import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL = "https://www.yat-m.com";
const SITE_NAME = "YAT";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Global Trade & Logistics Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "YAT Business Group delivers end-to-end import, export, freight, compliance, and trade consulting services across 40+ countries. Your trusted global trade partner.",
  keywords: [
    "global trade", "import services", "export services", "freight logistics",
    "trade compliance", "customs clearance", "supply chain", "international trade",
    "trade consulting", "B2B logistics", "global sourcing", "YAT Business Group",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Global Trade & Logistics Solutions`,
    description:
      "Expert import, export, freight, and compliance services across 40+ countries. Connect with YAT Business Group — your global trade partner.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${SITE_NAME} — Global Trade Partner` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Global Trade & Logistics`,
    description: "Expert import, export, freight & compliance across 40+ countries.",
    images: ["/og-image.png"],
    creator: "@yatbizgroup",
  },
  alternates: { canonical: SITE_URL },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0052CC",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      description:
        "YAT Business Group is a global trade and logistics company providing import, export, freight, compliance, and consulting services across 40+ countries.",
      foundingDate: "2008",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 150 },
      areaServed: "Worldwide",
      serviceType: ["Import Services", "Export Services", "Freight Logistics", "Trade Compliance", "Trade Consulting"],
      contactPoint: [
        { "@type": "ContactPoint", telephone: "+1-234-567-890", contactType: "sales", availableLanguage: ["English", "Arabic", "Chinese"] },
        { "@type": "ContactPoint", telephone: "+1-234-567-891", contactType: "customer service" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "1200 Trade Tower, Financial District",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10004",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.linkedin.com/company/yat-business-group",
        "https://twitter.com/yatbizgroup",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full scroll-smooth ${bricolage.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-100 btn btn-primary">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
