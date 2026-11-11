// src/components/home/WhyUsSection.jsx
import { CheckCircle2 } from "lucide-react";
import Mascot from "@/src/components/Mascot";
import StatsSection from "@/src/components/StatsSection";

const points = [
  { t: "Persönliche Beratung", d: "Ein fester Ansprechpartner kennt Ihr Objekt und Ihre Wünsche." },
  { t: "Geschultes, festes Team", d: "Keine ständig wechselnden Aushilfen – dieselben Gesichter, gleiche Qualität." },
  { t: "Moderne Ausrüstung", d: "Professionelle Maschinen und materialschonende Reinigungsmittel." },
  { t: "Flexible Zeiten", d: "Früh, abends oder am Wochenende – auch kurzfristig und im Notfall." },
  { t: "Transparente Festpreise", d: "Klare Angebote ohne versteckte Kosten oder Überraschungen." },
];

export default function WhyUsSection() {
  return (
    <div className="space-y-12">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative order-2 mx-auto w-full max-w-sm lg:order-1">
          <div aria-hidden="true" className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-sky-100 via-white to-brand/10 rotate-[-4deg]" />
          <div className="relative grid grid-cols-2 items-end gap-2 px-4 pt-6">
            <Mascot fig="thumbs" speech="Top Ergebnis! 👍" speechSide="right" alt="" sizes="180px" />
            <Mascot fig="vacuum" alt="" sizes="200px" delay={0.25} className="-ml-4" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">Warum MN GLANZWERK?</p>
          <h2 className="h2">
            Sauberkeit mit System – <span className="text-gradient">und mit Herz.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Wir verbinden über zehn Jahre Erfahrung in der Gebäudereinigung mit modernen
            Methoden und einem klaren Serviceprozess. Unser Ziel: dauerhaft saubere
            Objekte und Kunden, die sich um nichts kümmern müssen.
          </p>
          <ul className="stagger mt-6 space-y-3">
            {points.map((p) => (
              <li key={p.t} className="flex gap-3 rounded-2xl border border-transparent p-2 transition hover:border-slate-200 hover:bg-white hover:shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-slate-900">{p.t}</span>
                  <span className="block text-sm text-slate-600">{p.d}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <StatsSection />
    </div>
  );
}
