// src/components/StatsSection.jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Betreute Objekte",
    value: 24, // 👉 hier echte Zahl eintragen
    suffix: "+",
    description: "Wohn- und Geschäftsräume in Schleswig-Holstein & Bremen.",
  },
  {
    label: "Zufriedene Kunden",
    value: 18, // 👉 hier echte Zahl eintragen
    suffix: "+",
    description: "Privat- und Geschäftskunden, die uns regelmäßig vertrauen.",
  },
  {
    label: "Aktive Aufträge",
    value: 12, // 👉 hier echte Zahl eintragen
    suffix: "",
    description: "Laufende Reinigungsaufträge im Dauer- oder Turnusservice.",
  },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId;
    const duration = 1200; // ms
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * value);
      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return (
    <span className="text-3xl md:text-4xl font-bold tabular-nums text-slate-900">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm px-5 py-6 md:px-8 md:py-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Zahlen, Daten, Fakten
          </h2>
          <p className="text-sm text-slate-600">
            Ein kurzer Überblick über unsere aktuellen Objekte und Kunden.
          </p>
        </div>
        <p className="text-xs md:text-sm text-slate-500">
          * Werte können je nach Saison und Auftragseingang leicht variieren.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="rounded-2xl border border-slate-100 bg-white/80 px-4 py-4 shadow-sm flex flex-col gap-1"
            whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {stat.label}
            </p>
            <p className="text-xs text-slate-600">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
