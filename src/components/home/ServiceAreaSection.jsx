// src/components/home/ServiceAreaSection.jsx
import { MapPin } from "lucide-react";
import { cities } from "@/src/lib/site";

export default function ServiceAreaSection() {
  const loop = [...cities, ...cities];
  return (
    <div className="space-y-6">
      <div className="max-w-3xl">
        <p className="eyebrow">Einsatzgebiet</p>
        <h2 className="h2">
          Ihre Reinigungsfirma für Schleswig-Holstein, Hamburg &amp; Bremen
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          Von unserem Standort in <strong>Bad Segeberg</strong> erreichen wir schnell
          ganz Norddeutschland. Wir übernehmen Gebäudereinigung, Büroreinigung und
          Unterhaltsreinigung in <strong>Kiel</strong>, <strong>Lübeck</strong>,{" "}
          <strong>Hamburg</strong>, <strong>Neumünster</strong>,{" "}
          <strong>Norderstedt</strong> und Umgebung – größere Projekte auch
          deutschlandweit.
        </p>
      </div>

      <div
        className="marquee-wrap relative overflow-hidden rounded-2xl border border-slate-200 bg-white py-4 shadow-sm [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-label="Einsatzgebiete"
      >
        <ul className="marquee gap-3 px-3">
          {loop.map((c, i) => (
            <li
              key={i}
              aria-hidden={i >= cities.length ? "true" : undefined}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand/15 bg-brand/5 px-4 py-2 text-sm font-medium text-brand"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Gebäudereinigung {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
