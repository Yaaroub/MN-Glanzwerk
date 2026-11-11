// src/app/leistungen/page.jsx
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import PageHero from "@/src/components/PageHero";
import ScrollProgress from "@/src/components/ScrollProgress";
import ServiceArt from "@/src/components/ServiceArt";
import AnimatedSection from "@/src/components/AnimatedSection";
import { services } from "@/src/data/services";
import { site } from "@/src/lib/site";

export const metadata = {
  title: "Leistungen – Büro-, Unterhalts-, Grund-, Praxis- & Autoreinigung",
  description:
    "Alle Reinigungsleistungen von MN GLANZWERK im Detail: Büroreinigung, Unterhaltsreinigung, Gebäude- & Treppenhausreinigung, Umzugs- & Endreinigung, Praxis-, Hotel-, Polster-, Kita- & Schulreinigung sowie Autoreinigung für Privat- und Geschäftskunden in Schleswig-Holstein, Hamburg & Bremen.",
  alternates: { canonical: "/leistungen" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Reinigungsleistungen von MN GLANZWERK",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      "@id": `${site.url}/leistungen#${s.slug}`,
      name: s.title,
      description: s.long,
      serviceType: s.short,
      provider: { "@id": `${site.url}/#business` },
      areaServed: ["Schleswig-Holstein", "Hamburg", "Bremen"],
      url: `${site.url}/leistungen#${s.slug}`,
    },
  })),
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        path="/leistungen"
        crumb="Leistungen"
        eyebrow="Unsere Leistungen"
        title="Sauber bis ins Detail."
        intro="Neun Leistungen, ein Anspruch: Glanz, den man sieht – vom Büro bis zum Auto. Scrollen Sie durch unsere Leistungen – und sehen Sie, wie aus Schmutz Sauberkeit wird."
        fig="mop"
        speech="Scroll mal runter!"
      >
        {/* Sprungmarken */}
        <nav aria-label="Leistungen" className="hero-in mt-7 flex flex-wrap gap-2" style={{ animationDelay: "0.35s" }}>
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-white hover:text-brand"
            >
              {s.short}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="mx-auto max-w-6xl space-y-20 px-4 pt-16 sm:px-6 md:space-y-32 md:pt-24">
        {services.map((s, i) => {
          const Icon = s.icon;
          const flip = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={s.slug}
              aria-labelledby={`${s.slug}-title`}
              className="grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              {/* Grafik: bewegt sich mit dem Scrollen */}
              <ScrollProgress className={`relative ${flip ? "md:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-sky-50 to-sky-100 p-4 shadow-xl shadow-slate-900/5 sm:p-6">
                  <div aria-hidden="true" className="absolute inset-0 opacity-50 [background-image:radial-gradient(#bae6fd_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
                  <ServiceArt art={s.art} title={`Animierte Grafik: ${s.title}`} className="relative" />
                  {/* Fortschrittsbalken schmutzig → sauber */}
                  <div className="relative mt-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    <span>Vorher</span>
                    <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                      <span className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gradient-to-r from-sky-400 to-emerald-400" style={{ transform: "scaleX(var(--p))" }} />
                    </span>
                    <span className="text-emerald-600">Sauber</span>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className={`absolute -top-5 ${flip ? "-right-3 md:-right-5" : "-left-3 md:-left-5"} flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-xl font-extrabold text-white shadow-lg shadow-brand/30`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </ScrollProgress>

              {/* Text */}
              <AnimatedSection as="div" className={flip ? "md:order-1" : ""}>
                <p className="eyebrow">
                  <Icon className="h-4 w-4" aria-hidden="true" /> {s.short}
                </p>
                <h2 id={`${s.slug}-title`} className="h2">
                  {s.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">{s.long}</p>

                <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-slate-900">Das ist enthalten</h3>
                <ul className="stagger mt-3 grid gap-2 sm:grid-cols-2">
                  {s.includes.map((it) => (
                    <li key={it} className="flex gap-2 rounded-xl bg-white p-2.5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-100">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-slate-500">Ideal für:</span>
                  {s.ideal.map((t) => (
                    <span key={t} className="rounded-full bg-brand/10 px-3 py-1 font-semibold text-brand">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/25 transition hover:-translate-y-0.5 hover:bg-brand-soft"
                >
                  Angebot für {s.short} anfragen
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </AnimatedSection>
            </section>
          );
        })}

        {/* Abschluss */}
        <AnimatedSection className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-deep p-8 text-center text-white shadow-2xl shadow-brand/20 md:p-14">
          <div aria-hidden="true" className="blob absolute -right-16 -top-16 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl" />
          <h2 className="h2 relative text-white">Nicht das Passende dabei?</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-sky-100">
            Wir erstellen für jedes Objekt ein individuelles Reinigungskonzept – sprechen Sie
            uns einfach an.
          </p>
          <div className="relative mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand transition hover:-translate-y-0.5">
              Kostenloses Angebot <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a href={`tel:${site.phoneTel}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
              <Phone className="h-4 w-4" aria-hidden="true" /> {site.phoneDisplay}
            </a>
          </div>
        </AnimatedSection>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
