// src/app/projects/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Fensterreinigung im Wohnbereich",
    subtitle: "Streifenfreier Glanz – innen & außen, inklusive Rahmen",
    location: "Bad Segeberg & Umgebung",
    type: "Fensterreinigung",
    images: [
      "/projects/fenster-wohnraum-01.jpg",
      "/projects/fenster-wohnraum-02.jpg",
      "/projects/fenster-rahmen-01.jpg",
    ],
  },
  {
    title: "Terrassen- & Glasflächen",
    subtitle: "Glasdach, Schiebeanlage & Außenflächen – gründlich gereinigt",
    location: "Privatkunde",
    type: "Glas & Außen",
    images: [
      "/projects/terrasse-glas-01.jpg",
      "/projects/terrasse-glas-02.jpg",
      "/projects/terrasse-glasdach-01.jpg",
    ],
  },
  {
    title: "Badezimmer & WC",
    subtitle: "Hygiene-Reinigung von Boden, Keramik & Flächen",
    location: "Altbau",
    type: "Badreinigung",
    images: ["/projects/bad-wc-01.jpg"],
  },
  {
    title: "Schlafräume & Böden",
    subtitle: "Grundreinigung – Staub, Oberflächen & Holzfußböden",
    location: "Mehrfamilienhaus",
    type: "Grundreinigung",
    images: [
      "/projects/schlafzimmer-01.jpg",
      "/projects/schlafzimmer-02.jpg",
      "/projects/schlafzimmer-03.jpg",
    ],
  },
];

export default function ProjectsPage() {
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });

  return (
    <div className="space-y-10 md:space-y-14">
      {/* Kopfbereich */}
      <section className="max-w-3xl space-y-4">
        <p className="inline-flex items-center rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Projekte
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Einblick in unsere Arbeit
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Auswahl realer Einsätze: Fenster- & Glasreinigung,
          Terrassenüberdachung, Grundreinigung von Räumen sowie Bad/WC. Weitere
          Referenzen zeigen wir Ihnen gerne persönlich.
        </p>
      </section>

      {/* Grid mit Projekten */}
      <section className="space-y-8">
        <div className="grid gap-8 lg:gap-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="grid md:grid-cols-[1.4fr,1fr]">
                {/* Bilder */}
                <div className="p-4 md:p-5 lg:p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.images.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() =>
                          setLightbox({ open: true, src, alt: project.title })
                        }
                        className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand/50 ${
                          i === 0 ? "col-span-2 md:col-span-2" : ""
                        }`}
                        aria-label="Bild vergrößern"
                      >
                        <Image
                          src={src}
                          alt={project.title}
                          width={1200}
                          height={900}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                        {/* Overlay */}
                        <span className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                        <span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-slate-800 shadow-sm">
                          Vergrößern
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Textbereich */}
                <div className="border-t md:border-t-0 md:border-l border-slate-200 bg-slate-50/60 p-5 lg:p-6 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <p className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                      {project.type}
                    </p>
                    <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                      {project.title}
                    </h2>
                    <p className="text-sm text-slate-600">{project.subtitle}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Einsatzort: {project.location}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500">
                    Umsetzung nach Kundenwunsch: Rahmen, Glas, Böden und
                    Oberflächen mit professionellen Mitteln und Equipment.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Hinweis */}
      <section className="rounded-2xl bg-white/90 backdrop-blur border border-dashed border-slate-300 px-5 py-6 text-sm text-slate-600">
        Weitere Referenzen – auch für Hotels, Praxen, Büros und Gewerbeflächen –
        stellen wir Ihnen gerne persönlich vor. Schreiben Sie uns über das{" "}
        <a
          href="/contact"
          className="text-brand hover:text-brand-accent font-medium"
        >
          Kontaktformular
        </a>{" "}
        oder rufen Sie uns direkt an.
      </section>

      {/* Lightbox (ohne externe Library) */}
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
              className="absolute -top-3 -right-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow"
            >
              Schließen
            </button>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
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
