// src/app/about/page.jsx
import Link from "next/link";
import { Gem, Handshake, ShieldCheck, Shuffle, Eye, Home, Briefcase, Hospital, ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/src/components/AnimatedSection";
import PageHero from "@/src/components/PageHero";
import Mascot from "@/src/components/Mascot";
import StatsSection from "@/src/components/StatsSection";
import { site } from "@/src/lib/site";

export const metadata = {
  title: "Über uns – Ihre Reinigungsfirma aus Bad Segeberg",
  description:
    "Lernen Sie MN GLANZWERK kennen: Reinigungsfirma aus Bad Segeberg mit über 10 Jahren Erfahrung in Gebäude-, Büro- und Unterhaltsreinigung in Schleswig-Holstein, Hamburg & Bremen.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Gem, t: "Qualität", d: "Sorgfalt und Perfektion bis ins Detail." },
  { icon: Handshake, t: "Zuverlässigkeit", d: "Termine und Zusagen zählen – immer." },
  { icon: ShieldCheck, t: "Vertrauen", d: "Diskret, respektvoll und professionell." },
  { icon: Shuffle, t: "Flexibilität", d: "Lösungen für jedes Objekt und jede Zeit." },
  { icon: Eye, t: "Transparenz", d: "Faire Festpreise ohne Überraschungen." },
];

const clients = [
  { icon: Home, t: "Privathaushalte", d: "Wohnungen, Häuser & Treppenhäuser – regelmäßig oder einmalig." },
  { icon: Briefcase, t: "Unternehmen", d: "Büros, Kanzleien, Shops, Studios & Gewerbeflächen." },
  { icon: Hospital, t: "Einrichtungen", d: "Hotels, Praxen, Kliniken, Schulen & Kitas." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        path="/about"
        crumb="Über uns"
        eyebrow="Über MN GLANZWERK"
        title="Wer wir sind."
        intro="MN GLANZWERK ist Ihr Partner für hochwertige Gebäudereinigung mit Sitz in Bad Segeberg. Wir betreuen Privat- und Geschäftskunden in ganz Schleswig-Holstein, Hamburg und Bremen – und übernehmen auf Wunsch auch deutschlandweite Projekte."
        fig="vacuum"
        speech="Schön, dass du da bist!"
      />

      <div className="mx-auto max-w-6xl space-y-24 px-4 pt-16 sm:px-6 md:space-y-28 md:pt-20">
        {/* Mission */}
        <AnimatedSection className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">Unsere Mission</p>
            <h2 className="h2">
              Sauberkeit ist für uns <span className="text-gradient">ein Versprechen.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Wir wollen, dass Sie und Ihre Kunden sich in Ihren Räumen wohlfühlen. Jede
              Reinigung wird individuell geplant und so durchgeführt, als wäre es unser
              eigenes Objekt.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Ob regelmäßige Unterhaltsreinigung oder einmalige Grundreinigung – wir setzen
              auf langfristige Zusammenarbeit, offene Kommunikation und faire Beratung.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div aria-hidden="true" className="absolute inset-4 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-brand to-brand-deep" />
            <div className="relative flex items-end justify-center gap-2 rounded-[2.5rem] px-6 pt-8">
              <div className="w-36"><Mascot fig="mop" dark speech="Mit Liebe geputzt" speechSide="right" alt="" sizes="144px" /></div>
              <div className="w-32"><Mascot fig="thumbs" dark alt="" sizes="128px" delay={0.3} /></div>
            </div>
          </div>
        </AnimatedSection>

        {/* Werte */}
        <AnimatedSection>
          <p className="eyebrow">Unsere Werte</p>
          <h2 className="h2">Worauf Sie sich verlassen können</h2>
          <ul className="stagger mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(({ icon: Icon, t, d }) => (
              <li key={t} className="card-shine group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand/25 hover:shadow-xl">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-brand transition group-hover:rotate-6 group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-bold text-slate-900">{t}</h3>
                <p className="mt-1 text-sm text-slate-600">{d}</p>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Für wen */}
        <AnimatedSection className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-deep px-6 py-12 text-white md:px-12">
          <div aria-hidden="true" className="blob absolute -left-16 -top-16 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative">
            <p className="eyebrow eyebrow-dark">Für wen wir arbeiten</p>
            <h2 className="h2 max-w-2xl text-white">Vom Privathaushalt bis zur Klinik.</h2>
            <p className="mt-4 max-w-2xl text-sky-100">
              Für jedes Objekt entwickeln wir ein maßgeschneidertes Reinigungskonzept –
              abgestimmt auf Nutzung, Zeiten und Hygieneanforderungen.
            </p>
            <ul className="stagger mt-8 grid gap-4 md:grid-cols-3">
              {clients.map(({ icon: Icon, t, d }) => (
                <li key={t} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                  <Icon className="h-7 w-7 text-sky-300" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold">{t}</h3>
                  <p className="mt-1 text-sm text-sky-100/90">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Erfahrung + Zahlen */}
        <AnimatedSection className="space-y-10">
          <div className="max-w-3xl">
            <p className="eyebrow">Erfahrung</p>
            <h2 className="h2">Mehr als 10 Jahre in der Gebäudereinigung</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Seit über einem Jahrzehnt sind wir in der professionellen Gebäudereinigung
              aktiv – mit vielen Stammkunden, Notfall-Einsätzen und langfristigen
              Objektbetreuungen. Unser Fokus liegt auf Schleswig-Holstein, Hamburg und
              Bremen; für ausgewählte Projekte sind wir bundesweit im Einsatz.
            </p>
          </div>
          <StatsSection />
        </AnimatedSection>

        {/* Kontakt */}
        <AnimatedSection className="flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 md:flex-row">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Lernen wir uns kennen.</h2>
            <p className="mt-1 text-slate-600">Rufen Sie an oder schreiben Sie uns – wir freuen uns auf Ihre Anfrage.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={`tel:${site.phoneTel}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/25 px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand/5">
              <Phone className="h-4 w-4" aria-hidden="true" /> {site.phoneDisplay}
            </a>
            <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-soft">
              Angebot anfordern <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
