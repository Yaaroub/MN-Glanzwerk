// src/components/StatsSection.jsx
"use client";

import { motion } from "framer-motion";
import { Building2, Users2, ClipboardList } from "lucide-react";

const stats = [
  {
    label: "Betreute Objekte",
    value: "24+",
    description: "Wohn- und Geschäftsräume in Schleswig-Holstein & Bremen.",
    icon: Building2,
  },
  {
    label: "Zufriedene Kunden",
    value: "18+",
    description: "Privat- und Geschäftskunden, die uns regelmäßig vertrauen.",
    icon: Users2,
  },
  {
    label: "Aktive Aufträge",
    value: "12",
    description: "Laufende Reinigungsaufträge im Dauer- oder Turnusservice.",
    icon: ClipboardList,
  },
];

export default function StatsSection() {
  return (
    <section className="rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm px-5 py-6 md:px-8 md:py-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 mb-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Aktueller Überblick
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Zahlen, Daten, Fakten
          </h2>
          <p className="text-sm text-slate-600">
            Ein kurzer Überblick über unsere aktuellen Objekte und Kunden.
          </p>
        </div>

        <p className="text-xs md:text-sm text-slate-500">
          * Werte können je nach Saison und Auftragseingang variieren.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="group rounded-2xl border border-slate-100 bg-white/80 px-4 py-4 shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="text-3xl md:text-4xl font-bold tabular-nums text-slate-900">
                    {stat.value}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {stat.label}
                  </p>
                </div>

                {Icon ? (
                  <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition group-hover:shadow-md">
                    <Icon className="h-5 w-5 text-slate-700" />
                  </div>
                ) : null}
              </div>

              <div className="mt-3 h-px w-full bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100" />

              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
