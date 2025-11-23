// src/app/projects/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Fensterreinigung ",
    subtitle: "Streifenfreier Glanz – innen & außen, inklusive Rahmen",
    location: "Bad Segeberg & Umgebung",
    type: "Fensterreinigung",
    images: [
      "/projects/fensterreinigung-wohnraum-glas-bad-segeberg-01.webp",
      "/projects/fensterreinigung-wohnraum-glas-bad-segeberg-02.webp",
      "/projects/fensterreinigung-wohnraum-glas-bad-segeberg-03.webp",
      "/projects/fensterreinigung-wohnraum-glas-bad-segeberg-04.webp",
      "/projects/fensterreinigung-wohnraum-glas-bad-segeberg-05.webp",
    ],
  },
  {
    title: "Grundreinigung",
    subtitle: "Intensive Reinigung leerer Räume – Böden, Oberflächen & Fenster",
    location: "Privatkunde",
    type: "Innenreinigung",
    images: [
      "/projects/grundreinigung-leerraeume-01.webp",
      "/projects/grundreinigung-leerraeume-02.webp",
      "/projects/grundreinigung-leerraeume-03.webp",
      "/projects/grundreinigung-leerraeume-04.webp",
      "/projects/grundreinigung-leerraeume-05.webp",
    ],
  },
  {
    title: "Badezimmer & WC",
    subtitle: "Hygiene-Reinigung von Boden, Keramik & Flächen",
    location: "Altbau",
    type: "Badreinigung",
    images: [
      "/projects/bad-wc-reinigung-altbau-01.webp",
      "/projects/bad-wc-reinigung-altbau-02.webp",
    ],
  },
  {
    title: "Schlafräume & Böden",
    subtitle: "Grundreinigung – Staub, Oberflächen & Holzfußböden",
    location: "Mehrfamilienhaus",
    type: "Grundreinigung",
    images: [
      "/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-02.webp",
      "/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-03.webp",
      "/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-04.webp",
      "/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-05.webp",
      "/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-06.webp",
      "/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-07.webp",
      "/projects/schlafraeume-grundreinigung-holzboden-mehrfamilienhaus-08.webp",
    ],
  },
];

export default function ProjectsPage() {
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });

  return (
    <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
      {/* Kopfbereich */}
      <section className="space-y-5 text-center md:text-left">
        <p className="inline-flex items-center rounded-full bg-brand/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
          Projekte & Referenzen
        </p>
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Einblick in unsere Arbeit
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
            Auswahl realer Einsätze: streifenfreie Fenster- & Glasreinigung,
            Grundreinigung leerer Räume sowie hygienische Bad- und
            Schlafzimmerreinigung. Weitere Referenzen zeigen wir Ihnen gerne
            persönlich.
          </p>
        </div>
      </section>

      {/* Grid mit Projekten */}
      <section className="space-y-10">
        <div className="space-y-8">
          {projects.map((project, projectIndex) => (
            <article
              key={project.title}
              className="rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand/30 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`grid gap-0 md:grid-cols-2 ${
                  projectIndex % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Bilderbereich */}
                <div className="p-4 md:p-5 lg:p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {project.images.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() =>
                          setLightbox({
                            open: true,
                            src,
                            alt: `${project.title} – Bild ${i + 1}`,
                          })
                        }
                        className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-100/80 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-slate-50 ${
                          i === 0 ? "col-span-2 md:col-span-3 aspect-[16/9]" : "aspect-[4/3]"
                        }`}
                        aria-label={`${project.title} vergrößern`}
                      >
                        <Image
                          src={src}
                          alt={`${project.title} – Bild ${i + 1}`}
                          width={1200}
                          height={900}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                        />
                        {/* Overlay */}
                        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-slate-800 shadow-sm flex items-center gap-1">
                          <span>Vergrößern</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Textbereich */}
                <div className="border-t md:border-t-0 md:border-l border-slate-200 bg-slate-50/70 px-5 py-6 lg:px-7 lg:py-7 flex flex-col justify-between gap-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                      <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-brand">
                        {project.type}
                      </span>
                      <span className="h-3 w-px bg-slate-300" />
                      <span>{project.location}</span>
                      <span className="h-3 w-px bg-slate-300" />
                      <span>
                        {project.images.length}{" "}
                        {project.images.length === 1 ? "Foto" : "Fotos"}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                        {project.title}
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-500 leading-relaxed">
                    <p>
                      Umsetzung nach Kundenwunsch: Rahmen, Glas, Böden und
                      Oberflächen mit professionellen Reinigungsmitteln und
                      modernem Equipment.
                    </p>
                    <p>
                      Ideal für{" "}
                      <span className="font-medium text-slate-700">
                        Privatkunden, Vermieter und Gewerbeobjekte
                      </span>
                      , die besonderen Wert auf einen gepflegten ersten Eindruck
                      legen.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Hinweis */}
      <section className="rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100/80 border border-dashed border-slate-300 px-6 py-7 text-sm text-slate-600">
        <p className="mb-1 font-medium text-slate-800">
          Weitere Referenzen & Objektbeispiele
        </p>
        <p>
          Weitere Projekte – auch für Hotels, Praxen, Büros und Gewerbeflächen –
          stellen wir Ihnen gerne persönlich vor. Schreiben Sie uns über das{" "}
          <a
            href="/contact"
            className="text-brand hover:text-brand-accent font-medium underline underline-offset-4 decoration-brand/40"
          >
            Kontaktformular
          </a>{" "}
          oder rufen Sie uns direkt an.
        </p>
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          onClick={() => setLightbox({ open: false, src: "", alt: "" })}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox({ open: false, src: "", alt: "" })}
              className="absolute -top-4 -right-4 z-10 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-md"
            >
              Schließen
            </button>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1920}
                height={1280}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
