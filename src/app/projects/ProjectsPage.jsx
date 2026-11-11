// src/app/projects/ProjectsPage.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, MapPin, Camera, Expand, ArrowRight } from "lucide-react";
import AnimatedSection from "@/src/components/AnimatedSection";

// o: "l" = Querformat (2000×1500), "p" = Hochformat (1500×2000)
const projects = [
  {
    id: "fenster",
    filter: "Fenster",
    title: "Fensterreinigung",
    subtitle: "Streifenfreier Glanz – innen & außen, inklusive Rahmen und Falze.",
    location: "Bad Segeberg & Umgebung",
    type: "Fensterreinigung",
    points: ["Glasflächen innen & außen", "Rahmen & Fensterbänke", "Streifenfrei getrocknet"],
    images: [
      ["/projects/fensterreinigung-wohnraum-glas-bad-segeberg-01.webp", "l"],
      ["/projects/fensterreinigung-wohnraum-glas-bad-segeberg-02.webp", "p"],
      ["/projects/fensterreinigung-wohnraum-glas-bad-segeberg-03.webp", "l"],
      ["/projects/fensterreinigung-wohnraum-glas-bad-segeberg-04.webp", "p"],
      ["/projects/fensterreinigung-wohnraum-glas-bad-segeberg-05.webp", "l"],
    ],
  },
  {
    id: "grund",
    filter: "Grundreinigung",
    title: "Grundreinigung leerer Räume",
    subtitle: "Intensive Reinigung vor Übergabe oder Einzug – Böden, Oberflächen & Fenster.",
    location: "Privatkunde",
    type: "Grundreinigung",
    points: ["Böden intensiv gereinigt", "Oberflächen & Türen", "Übergabefertig"],
    images: [
      ["/projects/grundreinigung-leerraeume-01.webp", "l"],
      ["/projects/grundreinigung-leerraeume-02.webp", "p"],
      ["/projects/grundreinigung-leerraeume-03.webp", "l"],
      ["/projects/grundreinigung-leerraeume-04.webp", "p"],
      ["/projects/grundreinigung-leerraeume-05.webp", "l"],
    ],
  },
  {
    id: "boeden",
    filter: "Böden",
    title: "Schlafräume & Holzböden",
    subtitle: "Grundreinigung im Mehrfamilienhaus – Staub, Oberflächen und schonende Holzbodenpflege.",
    location: "Mehrfamilienhaus",
    type: "Bodenpflege",
    points: ["Holzböden schonend gepflegt", "Staubfreie Oberflächen", "Mehrere Wohneinheiten"],
    images: [
      ["/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-04.webp", "l"],
      ["/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-02.webp", "p"],
      ["/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-03.webp", "p"],
      ["/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-06.webp", "l"],
      ["/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-05.webp", "p"],
      ["/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-07.webp", "l"],
      ["/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-08.webp", "p"],
    ],
  },
  {
    id: "bad",
    filter: "Bad & WC",
    title: "Badezimmer & WC",
    subtitle: "Hygienische Reinigung von Boden, Keramik, Armaturen und Fliesen im Altbau.",
    location: "Altbau",
    type: "Badreinigung",
    points: ["Keramik & Armaturen", "Fliesen & Fugen", "Hygienisch sauber"],
    images: [
      ["/projects/bad-wc-reinigung-altbau-01.webp", "p"],
      ["/projects/bad-wc-reinigung-altbau-02.webp", "p"],
    ],
  },
  {
    id: "event",
    filter: "Eventsaal",
    title: "Eventsaal",
    subtitle: "Grundreinigung eines Veranstaltungsraums – bereit für die nächsten Gäste.",
    location: "Gewerbekunde",
    type: "Objektreinigung",
    points: ["Große Bodenflächen", "Kurzfristig umgesetzt", "Veranstaltungsbereit"],
    images: [["/projects/innenraum-grundreinigung-eventsaal-01.webp", "l"]],
  },
];

const totalPhotos = projects.reduce((n, p) => n + p.images.length, 0);

function Lightbox({ project, index, onClose, onIndex }) {
  const touchX = useRef(0);
  const count = project.images.length;
  const [src, o] = project.images[index];
  const handlers = useRef({ onClose, onIndex, count });

  useEffect(() => {
    handlers.current = { onClose, onIndex, count };
  });

  // Tastatur + Scroll-Sperre nur einmal beim Öffnen einrichten
  useEffect(() => {
    const onKey = (e) => {
      const h = handlers.current;
      if (e.key === "Escape") h.onClose();
      if (e.key === "ArrowRight") h.onIndex((i) => (i + 1) % h.count);
      if (e.key === "ArrowLeft") h.onIndex((i) => (i - 1 + h.count) % h.count);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} – Bild ${index + 1} von ${count}`}
      className="fixed inset-0 z-[60] flex flex-col bg-brand-deep/95 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Kopfzeile */}
      <div className="flex items-center justify-between gap-4 px-4 py-3 text-white sm:px-6" onClick={(e) => e.stopPropagation()}>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold sm:text-base">{project.title}</p>
          <p className="text-xs text-sky-200">
            Bild {index + 1} von {count}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Galerie schließen"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Bild */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16"
        onTouchStart={(e) => (touchX.current = e.changedTouches[0].screenX)}
        onTouchEnd={(e) => {
          const d = e.changedTouches[0].screenX - touchX.current;
          if (d > 60) onIndex((i) => (i - 1 + count) % count);
          if (d < -60) onIndex((i) => (i + 1) % count);
        }}
      >
        <Image
          key={src}
          src={src}
          alt={`${project.title} – Bild ${index + 1}`}
          width={o === "p" ? 1500 : 2000}
          height={o === "p" ? 2000 : 1500}
          sizes="100vw"
          style={{ maxHeight: "calc(100dvh - 190px)" }}
          className="lightbox-in h-auto w-auto max-w-full rounded-2xl object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          priority
        />
        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Vorheriges Bild"
              onClick={(e) => {
                e.stopPropagation();
                onIndex((i) => (i - 1 + count) % count);
              }}
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 sm:left-4"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Nächstes Bild"
              onClick={(e) => {
                e.stopPropagation();
                onIndex((i) => (i + 1) % count);
              }}
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 sm:right-4"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Vorschaubilder */}
      {count > 1 && (
        <div className="flex justify-center gap-2 overflow-x-auto px-4 py-4" onClick={(e) => e.stopPropagation()}>
          {project.images.map(([s], i) => (
            <button
              key={s}
              type="button"
              aria-label={`Bild ${i + 1} anzeigen`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => onIndex(() => i)}
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl transition sm:h-16 sm:w-16 ${
                i === index ? "ring-2 ring-sky-300 ring-offset-2 ring-offset-brand-deep" : "opacity-50 hover:opacity-100"
              }`}
            >
              <Image src={s} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("Alle");
  const [box, setBox] = useState(null); // { id, index }

  const visible = filter === "Alle" ? projects : projects.filter((p) => p.filter === filter);
  const boxProject = box && projects.find((p) => p.id === box.id);

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Filter */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div role="tablist" aria-label="Projekte filtern" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0">
          {["Alle", ...projects.map((p) => p.filter)].map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === f
                  ? "bg-brand text-white shadow-md shadow-brand/30"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-brand/30 hover:text-brand"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="inline-flex items-center gap-2 text-sm text-slate-500">
          <Camera className="h-4 w-4" aria-hidden="true" />
          {projects.length} Projekte · {totalPhotos} Fotos
        </p>
      </div>

      {/* Projekte */}
      <div className="space-y-16 md:space-y-24">
        {visible.map((project) => (
          <AnimatedSection
            as="article"
            key={project.id}
            id={project.id}
            aria-labelledby={`${project.id}-title`}
            className="grid scroll-mt-28 gap-6 lg:grid-cols-[320px_1fr] lg:gap-10"
          >
            {/* Info-Karte */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-deep p-6 text-white shadow-xl shadow-brand/20 sm:p-7">
                <div aria-hidden="true" className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-400/25 blur-2xl" />
                <span className="relative inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                  {project.type}
                </span>
                <h2 id={`${project.id}-title`} className="relative mt-4 text-2xl font-extrabold leading-tight">
                  {project.title}
                </h2>
                <p className="relative mt-3 text-sm leading-relaxed text-sky-100/90">{project.subtitle}</p>
                <ul className="relative mt-5 space-y-2 text-sm">
                  {project.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-6 flex flex-wrap gap-x-4 gap-y-1 border-t border-white/15 pt-4 text-xs text-sky-100">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {project.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Camera className="h-3.5 w-3.5" aria-hidden="true" />
                    {project.images.length === 1 ? "1 Foto" : `${project.images.length} Fotos`}
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand transition hover:-translate-y-0.5"
                >
                  Ähnliches anfragen
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Galerie: Hoch- und Querformate gemischt */}
            <div
              className={`stagger gap-3 sm:gap-4 ${
                project.images.length > 2 ? "columns-2 xl:columns-3" : project.images.length === 2 ? "columns-2" : ""
              }`}
            >
              {project.images.map(([src, o], i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setBox({ id: project.id, index: i })}
                  aria-label={`${project.title} – Bild ${i + 1} groß anzeigen`}
                  className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-3xl bg-slate-200 shadow-sm sm:mb-4"
                >
                  <Image
                    src={src}
                    alt={`${project.title} – ${project.location} – Bild ${i + 1}`}
                    width={o === "p" ? 1500 : 2000}
                    height={o === "p" ? 2000 : 1500}
                    sizes={project.images.length > 1 ? "(max-width: 1024px) 50vw, (max-width: 1280px) 400px, 280px" : "(max-width: 1024px) 100vw, 800px"}
                    className="h-auto w-full transition duration-700 group-hover:scale-105"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-deep/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <span aria-hidden="true" className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-brand opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Expand className="h-4 w-4" />
                  </span>
                </button>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Abschluss */}
      <AnimatedSection className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-900/5 md:p-12">
        <div aria-hidden="true" className="absolute inset-0 opacity-40 [background-image:radial-gradient(#bae6fd_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
        <h2 className="h2 relative">Ihr Objekt als nächstes Projekt?</h2>
        <p className="relative mx-auto mt-3 max-w-xl text-slate-600">
          Weitere Referenzen und Objektbeispiele zeigen wir Ihnen gerne persönlich – fragen
          Sie einfach unverbindlich an.
        </p>
        <Link
          href="/contact"
          className="group relative mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-soft"
        >
          Kostenloses Angebot anfordern
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </AnimatedSection>

      {boxProject && (
        <Lightbox
          project={boxProject}
          index={box.index}
          onClose={() => setBox(null)}
          onIndex={(fn) => setBox((b) => (b ? { ...b, index: fn(b.index) } : b))}
        />
      )}
    </div>
  );
}
