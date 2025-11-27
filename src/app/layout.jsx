// src/app/layout.js
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ClientRoot from "@/src/components/ClientRoot";
import ScrollToTop from "@/src/components/ScrollToTop";

// JSON-LD SCHEMA: LocalBusiness & CleaningService
const mnGlanzwerkSchema = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "@id": "https://www.mn-glanzwerk.de/#localbusiness",
  "name": "MN GLANZWERK Cleaning Company",
  "url": "https://www.mn-glanzwerk.de/",
  "image": "https://www.mn-glanzwerk.de/logo.png",
  "description":
    "Professionelle Gebäudereinigung, Büroreinigung und Unterhaltsreinigung in Schleswig-Holstein, Hamburg und Bremen.",
  "telephone": "+49-163-7885512",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kurhausstraße 46",
    "postalCode": "23795",
    "addressLocality": "Bad Segeberg",
    "addressRegion": "Schleswig-Holstein",
    "addressCountry": "DE"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Schleswig-Holstein" },
    { "@type": "City", "name": "Bad Segeberg" },
    { "@type": "City", "name": "Kiel" },
    { "@type": "City", "name": "Lübeck" },
    { "@type": "City", "name": "Neumünster" },
    { "@type": "City", "name": "Flensburg" },
    { "@type": "City", "name": "Hamburg" },
    { "@type": "City", "name": "Plön" },
    { "@type": "City", "name": "Eutin" },
    { "@type": "City", "name": "Preetz" },
    { "@type": "City", "name": "Schwentintal" },
    // lieber "Deutschlandweit" als Land statt City:
    { "@type": "Country", "name": "Deutschland" },
    { "@type": "AdministrativeArea", "name": "Bremen" }
  ],
  "priceRange": "$$",
  "serviceType": [
    "Gebäudereinigung",
    "Büroreinigung",
    "Unterhaltsreinigung",
    "Treppenhausreinigung",
    "Praxisreinigung",
    "Hotel- und Objektreinigung"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "sameAs": ["https://www.mn-glanzwerk.de/"]
};

export const metadata = {
  title: "MN GLANZWERK Cleaning Company",
  description:
    "Professionelle Reinigungsdienste in Bad Segeberg – Qualität, Zuverlässigkeit, Vertrauen."
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mnGlanzwerkSchema)
          }}
        />
      </head>

      <body className="bg-slate-50 text-slate-800 antialiased">
        {/* WICHTIG: sorgt dafür, dass bei jedem Routenwechsel nach oben gesprungen wird */}
        <ScrollToTop />

        <Header />

        <main className="pt-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 min-h-[75vh]">
          <div className="max-w-7xl mx-auto px-6 py-10">{children}</div>
        </main>

        <Footer />
        <ClientRoot />
      </body>
    </html>
  );
}
