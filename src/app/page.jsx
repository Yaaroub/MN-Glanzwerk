// src/app/page.js
import HeroDark from "@/src/components/HeroDark";
import AnimatedSection from "@/src/components/AnimatedSection";
import IntroSection from "@/src/components/home/IntroSection";
import StatsSection from "@/src/components/StatsSection";
import ServicesHighlightSection from "@/src/components/home/ServicesHighlightSection";
import WhyUsSection from "@/src/components/home/WhyUsSection";
import MapBox from "./MapBox";
import CTASection from "@/src/components/home/CTASection";

// --- SEO-Metadaten für die Startseite ---
export const metadata = {
  metadataBase: new URL("https://www.mn-glanzwerk.de"),
  title: {
    default:
      "Gebäudereinigung Schleswig-Holstein, Hamburg & Bremen | MN GLANZWERK",
    template: "%s | MN GLANZWERK",
  },
  description:
    "MN GLANZWERK CLEANING COMPANY – professionelle Gebäudereinigung in Schleswig-Holstein, Hamburg und Bremen. Büroreinigung, Unterhaltsreinigung, Umzugs- & Endreinigung.",
  alternates: {
    canonical: "https://www.mn-glanzwerk.de/",
  },
  openGraph: {
    type: "website",
    url: "https://www.mn-glanzwerk.de/",
    siteName: "MN GLANZWERK",
    title:
      "Gebäudereinigung Schleswig-Holstein, Hamburg & Bremen | MN GLANZWERK",
    description:
      "Professionelle Gebäudereinigung: Büro, Unterhalt, Umzug/Endreinigung – in SH, Hamburg & Bremen.",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "MN GLANZWERK" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

// --- Strukturierte Daten für Google (CleaningService) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "@id": "https://www.mn-glanzwerk.de/#business",
  name: "MN GLANZWERK CLEANING COMPANY",
  url: "https://www.mn-glanzwerk.de/",
  image: "https://www.mn-glanzwerk.de/logo-mn.png",
  telephone: "+49 163 7885512",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kurhausstraße 46",
    addressLocality: "Bad Segeberg",
    postalCode: "23795",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.9372259,
    longitude: 10.3058085,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  areaServed: ["Schleswig-Holstein", "Hamburg", "Bremen", "Deutschland"],
};

export default function HomePage() {
  return (
    <>
      <div className="space-y-12 md:space-y-20">
        <HeroDark />

        {/* Intro */}
        <AnimatedSection>
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <IntroSection />
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection>
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <StatsSection />
          </div>
        </AnimatedSection>

        {/* Services */}
        <AnimatedSection>
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <ServicesHighlightSection />
          </div>
        </AnimatedSection>

        {/* Why us */}
        <AnimatedSection>
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <WhyUsSection />
          </div>
        </AnimatedSection>

        {/* Map */}
        <AnimatedSection>
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <MapBox/>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div className="mx-auto max-w-6xl px-4 md:px-6 pb-2">
            <CTASection />
          </div>
        </AnimatedSection>
      </div>

      {/* Strukturierte Daten */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
