// src/app/projects/ProjectsPage.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "@/src/components/AnimatedSection";

const projects = [
  {
    title: "Fensterreinigung",
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
  const [lightbox, setLightbox] = useState({
    open: false,
    index: 0,
    all: [],
    src: "",
    alt: "",
  });

  // KEYBOARD NAV
  useEffect(() => {
    if (!lightbox.open) return;

    const handler = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  const openLightbox = (allImages, index, alt) => {
    setLightbox({
      open: true,
      index,
      all: allImages,
      src: allImages[index],
      alt,
    });
  };

  const closeLightbox = () =>
    setLightbox({ open: false, index: 0, all: [], src: "", alt: "" });

  const nextImage = () => {
    const newIndex = (lightbox.index + 1) % lightbox.all.length;
    setLightbox({
      ...lightbox,
      index: newIndex,
      src: lightbox.all[newIndex],
      alt: `Bild ${newIndex + 1}`,
    });
  };

  const prevImage = () => {
    const newIndex =
      (lightbox.index - 1 + lightbox.all.length) % lightbox.all.length;
    setLightbox({
      ...lightbox,
      index: newIndex,
      src: lightbox.all[newIndex],
      alt: `Bild ${newIndex + 1}`,
    });
  };

  // TOUCH GESTURES
  let touchStart = 0;
  let touchEnd = 0;

  const onTouchStart = (e) => (touchStart = e.changedTouches[0].screenX);
  const onTouchEnd = (e) => {
    touchEnd = e.changedTouches[0].screenX;
    const delta = touchEnd - touchStart;

    if (delta > 60) prevImage();
    if (delta < -60) nextImage();
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
      {/* HEADER */}
      <AnimatedSection>
        <section className="space-y-5 text-center md:text-left">
          <p className="inline-flex items-center rounded-full bg-brand/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
            Projekte & Referenzen
          </p>

          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              Einblick in unsere Arbeit
            </h1>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
              Auswahl realer Einsätze: Fensterreinigung, Grundreinigung,
              hygienische Bad- & Schlafzimmerreinigung sowie viele weitere
              Objekte.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* PROJECTS */}
      <section className="space-y-10">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand/30 transition-all duration-300 overflow-hidden"
          >
            <div
              className={`grid gap-0 md:grid-cols-2 ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* IMAGES */}
              <div className="p-4 md:p-5 lg:p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {project.images.map((img, i) => (
                    <button
                      key={img}
                      onClick={() =>
                        openLightbox(project.images, i, `${project.title}`)
                      }
                      className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-100/80 ${
                        i === 0
                          ? "col-span-2 md:col-span-3 aspect-[16/9]"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} – Bild ${i + 1}`}
                        width={1200}
                        height={900}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* TEXT */}
              <div className="border-t md:border-t-0 md:border-l border-slate-200 bg-slate-50/70 px-5 py-6 lg:px-7 lg:py-7 flex flex-col justify-between gap-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-brand">
                      {project.type}
                    </span>
                    <span>{project.location}</span>
                    <span>
                      {project.images.length === 1
                        ? "1 Foto"
                        : `${project.images.length} Fotos`}
                    </span>
                  </div>

                  <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                    {project.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Umsetzung mit professionellen Reinigungsmitteln & modernem
                  Equipment – ideal für Privatkunden, Vermieter & Gewerbe.
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* HINWEIS */}
      <section className="rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100/80 border border-dashed border-slate-300 px-6 py-7 text-sm text-slate-600">
        <p className="mb-1 font-medium text-slate-800">
          Weitere Referenzen & Objektbeispiele
        </p>
        <p>
          Schreiben Sie uns über das{" "}
          <a
            href="/contact"
            className="text-brand underline underline-offset-4 font-medium"
          >
            Kontaktformular
          </a>{" "}
          – wir zeigen Ihnen gerne mehr.
        </p>
      </section>

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* CLOSE */}
            <button
              onClick={closeLightbox}
              className="absolute -top-5 -right-5 z-50 bg-white text-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg"
            >
              Schließen ✕
            </button>

            {/* PREV */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur transition z-40"
            >
              ‹
            </button>

            {/* NEXT */}
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur transition z-40"
            >
              ›
            </button>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl border border-white/20 shadow-xl bg-black/40">
              <Image
                key={lightbox.src}
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
