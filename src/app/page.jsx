// src/app/page.js
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Building2,
  SprayCan,
  Sofa,
  Hotel,
  Stethoscope,
  School,
  Sparkles,
} from "lucide-react";
import MapBox from "./MapBox";
import AnimatedSection from "@/src/components/AnimatedSection";
import HomePageClient from "@/src/components/HomePageClient";
import StatsSection from "@/src/components/StatsSection";

// --- SEO-Metadaten für die Startseite ---
export const metadata = {
  title:
    "Gebäudereinigung Schleswig-Holstein, Hamburg & Bremen | MN GLANZWERK CLEANING COMPANY",
  description:
    "MN GLANZWERK CLEANING COMPANY ist Ihre Reinigungsfirma für Schleswig-Holstein, Hamburg und Bremen – auf Wunsch auch deutschlandweit. Wir bieten professionelle Gebäudereinigung, Büroreinigung, Endreinigung und Unterhaltsreinigung – zuverlässig, gründlich und regional.",
};

// --- Strukturierte Daten für Google (Local Business) ---
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MN GLANZWERK CLEANING COMPANY",
  image: "/logo-mn.png",
  url: "https://www.mn-glanzwerk.de",
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
  openingHours: "Mo-Sa 08:00-20:00",
  areaServed: ["Schleswig-Holstein", "Hamburg", "Bremen", "Deutschland"],
};

const services = [
  {
    icon: Home,
    title: "Wohnungs-, Haus- & Gebäudereinigung",
    desc: "Gründliche Reinigung für private und gewerbliche Räume – regelmäßig oder nach Bedarf.",
  },
  {
    icon: Building2,
    title: "Büro- & Firmenreinigung",
    desc: "Saubere Arbeitsplätze für Mitarbeiter und Kunden – auch außerhalb Ihrer Öffnungszeiten.",
  },
  {
    icon: SprayCan,
    title: "Umzugs- & Endreinigung",
    desc: "Perfekte Sauberkeit vor Einzug oder nach Auszug – ideal für Wohnungsübergaben.",
  },
  {
    icon: Sofa,
    title: "Teppich-, Sofa- & Gardinenreinigung",
    desc: "Tiefenreinigung von Polstermöbeln und Textilien für ein hygienisches Raumklima.",
  },
  {
    icon: Hotel,
    title: "Regelmäßige Reinigungsangebote",
    desc: "Individuelle Reinigungspläne für Unternehmen, Büros, Hotels und Gewerbeflächen.",
  },
  {
    icon: Stethoscope,
    title: "Hotel-, Krankenhaus- & Kita-Reinigung",
    desc: "Hygienische Reinigung für Hotels, Praxen, Krankenhäuser, Kindergärten & Schulen.",
  },
  {
    icon: School,
    title: "Kindergärten & Schulen",
    desc: "Sichere, saubere Lernumgebungen für Kinder und Jugendliche.",
  },
  {
    icon: Sparkles,
    title: "Regelmäßige Unterhaltsreinigung",
    desc: "Planbare, wiederkehrende Reinigung für Privat- und Geschäftskunden.",
  },
];

export default function HomePage() {
  return (
    <HomePageClient>
      <>
        <div className="space-y-12 md:space-y-20">
          {/* HERO */}
          <AnimatedSection delay={0}>
            <section className="grid gap-10 md:grid-cols-2 items-center">
              {/* Text-Spalte */}
              <div className="space-y-6">
                <p className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm">
                    <Image
                      src="/broom.png"
                      alt="Reinigungs-Icon"
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain"
                    />
                  </span>
                  <span>
                    Professionelle Gebäudereinigung • Schleswig-Holstein •
                    Hamburg • Bremen
                  </span>
                </p>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                  MN GLANZWERK
                </h1>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-800">
                  CLEANING COMPANY – Gebäudereinigung in Schleswig-Holstein,
                  Hamburg &amp; Bremen
                </h3>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Mit Leidenschaft für Sauberkeit – MN GLANZWERK CLEANING
                  COMPANY ist Ihr Reinigungsunternehmen mit Sitz in Bad
                  Segeberg. Wir betreuen Kunden in ganz Schleswig-Holstein,
                  Hamburg und Bremen – und auf Wunsch auch deutschlandweit. Ob
                  Privatwohnung, Büro oder Gewerbe – wir sorgen für ein
                  perfektes Reinigungsergebnis, auf das Sie sich verlassen
                  können.
                </p>

                <ul className="grid gap-2 text-sm text-slate-700">
                  <li>
                    • Modernste Materialien &amp; professionelle Ausrüstung
                  </li>
                  <li>• Geschultes, motiviertes Team</li>
                  <li>• Zuverlässig, gründlich &amp; kundenorientiert</li>
                </ul>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-brand text-white text-sm font-semibold shadow-md hover:bg-brand-soft hover:shadow-lg transition-all"
                  >
                    Kostenloses Angebot anfordern
                  </Link>
                  <a
                    href="tel:+491637885512"
                    className="inline-flex items-center px-5 py-3 rounded-full border border-brand/30 text-sm font-medium text-brand hover:bg-brand/5 transition"
                  >
                    Jetzt anrufen: 0163&nbsp;7885512
                  </a>
                </div>
              </div>

              {/* Info-Karte / Logo-Spalte + Maskottchen */}
              <div className="relative flex flex-col items-center gap-6">
                {/* Lichtschein im Hintergrund */}
                <div className="absolute inset-0 blur-3xl bg-brand/10 -z-10" />

                {/* Infokarte */}
                <div className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur shadow-xl border border-slate-100 p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
                      <Image
                        src="/logo-mn.png"
                        alt="MN GLANZWERK CLEANING COMPANY – Gebäudereinigung in Bad Segeberg"
                        width={56}
                        height={56}
                        className="h-12 w-12 object-contain drop-shadow-sm"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                        Ihr regionaler Partner in Norddeutschland
                      </p>
                      <p className="font-semibold text-slate-900">
                        Professionelle Reinigung mit System
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-slate-500 uppercase">
                        Öffnungszeiten
                      </p>
                      <p className="text-slate-800">
                        Mo–Sa: <br />
                        <span className="font-medium">08:00 – 20:00 Uhr</span>
                      </p>
                      <p className="text-xs text-emerald-600 font-semibold">
                        Notfälle: 24 Stunden erreichbar
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-slate-500 uppercase">
                        Standort
                      </p>
                      <p className="text-slate-800 text-sm">
                        Kurhausstraße 46
                        <br />
                        23795 Bad Segeberg
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 text-xs text-slate-600 space-y-1">
                    <p className="font-semibold text-slate-800">
                      Qualität – Zuverlässigkeit – Vertrauen
                    </p>
                    <p>
                      Wohnungs-, Haus- &amp; Gebäudereinigung • Büros &amp;
                      Firmen • Hotels • Praxen • Kindergärten &amp; Schulen
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Einsatzgebiete: Schleswig-Holstein, Hamburg, Bremen – auf
                      Wunsch deutschlandweit.
                    </p>
                  </div>
                </div>

                {/* Maskottchen: Arme verschränkt */}
                <div className="w-28 sm:w-40 md:w-56 lg:w-64">
                  <Image
                    src="/mn/hero-crossed-arms.png"
                    alt="Reinigungsexperte von MN GLANZWERK"
                    width={260}
                    height={260}
                    className="w-full h-auto drop-shadow-xl pointer-events-none select-none"
                    priority
                  />
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* KENNZAHLEN / MINI-DASHBOARD */}
          <AnimatedSection>
            <StatsSection />
          </AnimatedSection>

          {/* LEISTUNGEN – Highlight-Section */}
          <AnimatedSection delay={0.2}>
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-slate-900 px-6 py-10 md:px-10 md:py-14 text-slate-50">
              {/* Deko-Glows im Hintergrund */}
              <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-40" />
              <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl opacity-60" />

              <div className="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
                {/* Text + Leistungen */}
                <div className="flex-1 space-y-6">
                  {/* Badge */}
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                      <Sparkles size={14} />
                    </span>
                    <span>Unsere Reinigungsleistungen</span>
                  </p>

                  <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-white">
                        Alles aus einer Hand – sauber bis ins Detail
                      </h2>
                      <p className="mt-1 text-sm text-slate-200 max-w-xl">
                        Von Wohnungen über Büros bis hin zu Hotels und sensiblen
                        Einrichtungen – wir bieten Ihnen professionelle
                        Reinigungskonzepte für Schleswig-Holstein, Hamburg und
                        Bremen sowie deutschlandweite Einsätze auf Anfrage.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-3 inline-flex items-center self-start rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-brand shadow-sm hover:bg-white transition md:text-sm"
                    >
                      Individuelles Angebot anfragen →
                    </Link>
                  </div>

                  {/* Grid mit Leistungen */}
                  <div className="grid gap-4 md:grid-cols-2">
                    {services.map(({ icon: Icon, title, desc }) => (
                      <div
                        key={title}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:shadow-md"
                      >
                        <div className="mb-3 flex items_center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white shadow-sm">
                            <Icon size={22} strokeWidth={1.7} />
                          </div>
                          <h3 className="text-sm font-semibold text-white group-hover:text-sky-100">
                            {title}
                          </h3>
                        </div>
                        <p className="text-xs md:text-sm text-slate-100/90 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Figur / Maskottchen rechts */}
                <div className="flex-1">
                  <div className="mx-auto flex max-w-xs flex-col items-center lg:max-w-sm">
                    {/* Glow-Kreis */}
                    <div className="relative mb-3 h-40 w-40 sm:h-48 sm:w-48 lg:h-60 lg:w-60">
                      <div className="absolute inset-0 rounded-full bg-white/15 blur-2xl" />
                      <div className="absolute inset-3 rounded-full border border-white/30" />
                      <Image
                        src="/mn/services-mop.png"
                        alt="MN Glanzwerk Reinigungsexperte"
                        width={520}
                        height={520}
                        className="relative h-full w-full object-contain drop-shadow-2xl"
                      />
                    </div>
                    <p className="text-xs text-slate-100/80 text-center max-w-xs">
                      Ihr persönlicher Reinigungspartner für Wohnungen, Büros,
                      Hotels, Praxen, Kindergärten &amp; mehr – in
                      Schleswig-Holstein, Hamburg, Bremen und auf Wunsch
                      deutschlandweit.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* WARUM WIR */}
          <AnimatedSection delay={0.3}>
            <section className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-start">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                  Warum MN GLANZWERK?
                </h2>
                <p className="text-sm text-slate-600">
                  Wir kombinieren Erfahrung mit modernen Reinigungstechniken und
                  einem ausgeprägten Servicegedanken. Unser Ziel: dauerhafte
                  Sauberkeit und zufriedene Kunden – vom Privathaushalt bis zum
                  Großobjekt.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Langjährige Fachkompetenz und präzises Arbeiten</li>
                  <li>• Qualifiziertes, zuverlässiges und freundliches Team</li>
                  <li>• Moderne Materialien &amp; professionelle Ausrüstung</li>
                  <li>
                    • Flexible Terminvereinbarung – auch kurzfristig &amp; bei
                    Notfällen
                  </li>
                  <li>• Transparente, faire Preise ohne versteckte Kosten</li>
                </ul>
              </div>

              {/* Spray + Daumen hoch + Kontaktkarte */}
              <div className="relative space-y-4">
                {/* Figur – klein über der Karte auf Desktop */}
                <div className="pointer-events-none absolute -top-10 -right-2 hidden md:block">
                  <div className="w-16 lg:w-20">
                    <Image
                      src="/mn/about-spray-thumbs-up.png"
                      alt="Mitarbeiter von MN GLANZWERK"
                      width={300}
                      height={300}
                      className="h-auto w-full drop-shadow-lg"
                    />
                  </div>
                </div>

                {/* Figur – klein zentriert auf Mobile über der Karte */}
                <div className="flex justify-center md:hidden">
                  <div className="w-16">
                    <Image
                      src="/mn/about-spray-thumbs-up.png"
                      alt="Mitarbeiter von MN GLANZWERK"
                      width={200}
                      height={200}
                      className="h-auto w-full drop-shadow-md"
                    />
                  </div>
                </div>

                <div className="rounded-2xl bg-brand/95 text-slate-50 p-6 space-y-4 shadow-lg">
                  <h3 className="text-lg font-semibold">Direkter Kontakt</h3>
                  <p className="text-sm text-slate-100">
                    Sie möchten einen Rückruf oder ein Angebot für ein Objekt in
                    Schleswig-Holstein, Hamburg, Bremen oder deutschlandweit?
                    Kontaktieren Sie uns – wir melden uns so schnell wie
                    möglich.
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium">Telefon / WhatsApp</p>
                    <p className="text-slate-100">0163 7885512</p>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium">Adresse</p>
                    <p className="text-slate-100">
                      Kurhausstraße 46
                      <br />
                      23795 Bad Segeberg
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex mt-2 items-center px-4 py-2 rounded-full bg-white text-brand text-sm font-semibold shadow hover:bg-slate-100 transition"
                  >
                    Kontaktformular öffnen
                  </Link>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* MAP SECTION */}
          <AnimatedSection delay={0.4}>
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-900">
                Unser Standort & Einsatzgebiete
              </h2>
              <p className="text-sm text-center text-slate-600 max-w-2xl mx-auto">
                Unser Firmensitz befindet sich in Bad Segeberg. Von hier aus
                betreuen wir Kunden in ganz Schleswig-Holstein, Hamburg und
                Bremen – und übernehmen auf Wunsch auch deutschlandweite
                Reinigungsprojekte.
              </p>

              <MapBox />
            </section>
          </AnimatedSection>

          {/* CALL TO ACTION */}
          <AnimatedSection delay={0.5}>
            <section className="rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center gap-8">
              {/* Text + CTA – LINKS */}
              <div className="flex-1 space-y-4 text-center md:text-left md:order-1">
                <h2 className="flex items-center justify-center md:justify-start gap-3 text-2xl md:text-3xl font-semibold text-slate-900">
                  <Image
                    src="/broom.png"
                    alt="MN Glanzwerk Reinigung"
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain drop-shadow-sm"
                  />
                  <span>Bereit für perfekte Sauberkeit?</span>
                </h2>

                <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto md:mx-0">
                  Ob in Schleswig-Holstein, Hamburg, Bremen oder deutschlandweit
                  – wir erstellen Ihnen ein individuelles, unverbindliches
                  Angebot für Ihr Objekt.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-brand text-white text-sm font-semibold shadow-md hover:bg-brand-soft hover:shadow-lg transition"
                  >
                    Angebot anfordern
                  </Link>
                  <a
                    href="tel:+491637885512"
                    className="inline-flex items-center px-5 py-3 rounded-full border border-brand/30 text-sm font-medium text-brand hover:bg-brand/5 transition"
                    aria-label="Telefonnummer anrufen: +491637885512"
                  >
                    Jetzt telefonisch anfragen
                  </a>
                </div>
              </div>

              {/* Maskottchen rechts */}
              <div className="w-28 sm:w-40 md:w-56 lg:w-64 md:order-2">
                <Image
                  src="/mn/cta-point-left-cloth.png"
                  alt="Jetzt Angebot anfordern bei MN GLANZWERK"
                  width={260}
                  height={260}
                  className="w-full h-auto drop-shadow-xl pointer-events-none select-none"
                />
              </div>
            </section>
          </AnimatedSection>
        </div>

        {/* Strukturierte Daten für SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </>
    </HomePageClient>
  );
}
