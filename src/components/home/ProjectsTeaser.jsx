// src/components/home/ProjectsTeaser.jsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const shots = [
  { src: "/projects/fensterreinigung-wohnraum-glas-bad-segeberg-01.webp", label: "Fensterreinigung", place: "Bad Segeberg", cls: "md:col-span-2 md:row-span-2" },
  { src: "/projects/grundreinigung-leerraeume-03.webp", label: "Grundreinigung", place: "Leerräume", cls: "" },
  { src: "/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-04.webp", label: "Holzböden", place: "Mehrfamilienhaus", cls: "" },
  { src: "/projects/innenraum-grundreinigung-eventsaal-01.webp", label: "Eventsaal", place: "Grundreinigung", cls: "md:col-span-2" },
];

export default function ProjectsTeaser() {
  return (
    <div>
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Referenzen</p>
          <h2 className="h2">Echte Einsätze. <span className="text-gradient">Echter Glanz.</span></h2>
        </div>
        <Link href="/projects" className="group inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-sm transition hover:border-brand/40 hover:shadow-md">
          Alle Projekte ansehen
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>

      <div className="stagger mt-8 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
        {shots.map((s, i) => (
          <Link
            key={s.src}
            href="/projects"
            className={`group relative overflow-hidden rounded-3xl bg-slate-200 ${s.cls} ${i === 0 ? "col-span-2 row-span-2" : ""} ${i === 3 ? "col-span-2" : ""}`}
          >
            <Image
              src={s.src}
              alt={`${s.label} – ${s.place} – Referenz von MN GLANZWERK`}
              fill
              sizes={i === 0 ? "(max-width: 768px) 100vw, 560px" : "(max-width: 768px) 50vw, 280px"}
              className="object-cover transition duration-700 group-hover:scale-110"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-brand-deep/10 to-transparent opacity-80 transition group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 right-3 translate-y-1 text-white transition group-hover:translate-y-0">
              <span className="block text-sm font-bold md:text-base">{s.label}</span>
              <span className="block text-xs text-sky-100">{s.place}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
