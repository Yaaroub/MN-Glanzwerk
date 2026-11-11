// src/app/layout.jsx
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ClientRoot from "@/src/components/ClientRoot";
import ScrollToTop from "@/src/components/ScrollToTop";
import { site, cities } from "@/src/lib/site";
import { services } from "@/src/data/services";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const viewport = {
  themeColor: "#114c68",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Gebäudereinigung Bad Segeberg, Kiel, Lübeck & Hamburg | MN GLANZWERK",
    template: "%s | MN GLANZWERK",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Gebäudereinigung Bad Segeberg",
    "Reinigungsfirma Bad Segeberg",
    "Büroreinigung Schleswig-Holstein",
    "Unterhaltsreinigung Hamburg",
    "Gebäudereinigung Kiel",
    "Gebäudereinigung Lübeck",
    "Fensterreinigung",
    "Grundreinigung",
    "Umzugsreinigung",
    "Endreinigung",
    "Praxisreinigung",
    "Treppenhausreinigung",
    "Autoreinigung Bad Segeberg",
    "Fahrzeugreinigung Firmenflotte",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Gebäudereinigung",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: "MN GLANZWERK – Gebäudereinigung in Schleswig-Holstein, Hamburg & Bremen",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "MN GLANZWERK – Gebäudereinigung in Norddeutschland",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, address: true, email: true },
  other: { "geo.region": "DE-SH", "geo.placename": "Bad Segeberg", "geo.position": `${site.geo.lat};${site.geo.lng}`, ICBM: `${site.geo.lat}, ${site.geo.lng}` },
};

// Ein konsistentes JSON-LD-Graph für Google, Bing & KI-Suchmaschinen
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["CleaningService", "LocalBusiness"],
      "@id": `${site.url}/#business`,
      name: site.name,
      alternateName: ["MN GLANZWERK Cleaning Company", "MN Glanzwerk Profi. Reinigungsdienst"],
      url: `${site.url}/`,
      logo: `${site.url}/icon.png`,
      image: [`${site.url}/opengraph-image`, `${site.url}/hero/mn-glanzwerk-hero.webp`],
      description: site.description,
      telephone: site.phoneTel,
      email: site.email,
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Überweisung, Bar",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.zip,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
      hasMap: "https://www.google.com/maps/search/?api=1&query=MN+GLANZWERK+Bad+Segeberg",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: site.hours.opens,
          closes: site.hours.closes,
        },
      ],
      areaServed: [
        ...cities.map((name) => ({ "@type": "City", name })),
        { "@type": "State", name: "Schleswig-Holstein" },
        { "@type": "Country", name: "Deutschland" },
      ],
      knowsLanguage: ["de", "en", "ar"],
      sameAs: site.social,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Reinigungsleistungen",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.desc },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      inLanguage: "de-DE",
      publisher: { "@id": `${site.url}/#business` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={font.variable}>
      <body className="bg-slate-50 text-slate-800 antialiased font-sans">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollToTop />
        <Header />

        <main id="inhalt" className="min-h-[75vh] overflow-x-clip">
          {children}
        </main>

        <Footer />
        <ClientRoot />
      </body>
    </html>
  );
}
