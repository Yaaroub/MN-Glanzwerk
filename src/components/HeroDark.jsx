// src/components/HeroDark.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function HeroDark() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 rounded-xl">
      {/* Hintergrundbild */}
      <Image
        src="/hero/mn-glanzwerk-hero.webp"
        alt="MN GLANZWERK – professionelle Gebäudereinigung"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-80 hero-zoom-pan"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/90" />

      {/* CONTENT zentriert */}
      <div className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center"
        >
          {/* Badge */}
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1
            text-[10px] font-semibold uppercase tracking-[0.20em] text-sky-100"
          >
            <span className="h-3 w-3 bg-brand rounded-full" />
            MN GLANZWERK CLEANING COMPANY
          </motion.p>

          {/* Titel */}
          <motion.h1
            variants={item}
            className="text-xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
            Professionelle Gebäudereinigung
            <span className="block text-brand-soft mt-2">
              in Schleswig-Holstein, Hamburg &amp; Bremen.
            </span>
          </motion.h1>

          {/* Untertitel */}
          <motion.p
            variants={item}
            className=" text-[11px] mt-5 max-w-2xl text-slate-200 text-base md:text-lg leading-relaxed"
          >
            Sauberkeit auf Premium-Niveau für Wohnungen, Büros, Hotels und
            Gewerbeflächen – mit klaren Abläufen, festen Ansprechpartnern und
            einem zuverlässigen Team. Auf Wunsch sind wir auch deutschlandweit
            für Sie im Einsatz.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="rounded-full bg-brand px-8 py-3 text-sm md:text-base font-semibold 
              text-white shadow-xl shadow-brand/30 hover:bg-brand-soft transition-all hover:scale-[1.04]"
            >
              Angebot anfordern
            </Link>

            <a
              href="tel:+491637885512"
              className="rounded-full border border-slate-400/50 bg-slate-900/60 px-8 py-3 
              text-sm md:text-base font-semibold text-slate-200 hover:bg-slate-800 
              hover:border-slate-300 transition-all hover:scale-[1.04]"
            >
              Jetzt anrufen: 0163&nbsp;7885512
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
