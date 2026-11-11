// src/components/StatsSection.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Users2, ClipboardList, Clock } from "lucide-react";

const stats = [
  { label: "Betreute Objekte", to: 50, suffix: "+", description: "Wohn- und Geschäftsräume in Schleswig-Holstein, Hamburg & Bremen.", icon: Building2 },
  { label: "Zufriedene Stammkunden", to: 18, suffix: "+", description: "Privat- und Geschäftskunden, die uns regelmäßig vertrauen.", icon: Users2 },
  { label: "Laufende Aufträge", to: 12, suffix: "", description: "Aktive Reinigungsaufträge im Dauer- oder Turnusservice.", icon: ClipboardList },
  { label: "Notdienst", to: 24, suffix: "/7", description: "Wasserschaden, Übergabe, Event – wir sind schnell vor Ort.", icon: Clock },
];

function Counter({ to, suffix, start }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const dur = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 1400;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);
  return (
    <span className="tabular-nums">
      {start ? val : to}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setStart(true);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="rounded-3xl border border-slate-200 bg-white/90 px-5 py-7 shadow-sm backdrop-blur md:px-8 md:py-9">
      <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Zahlen &amp; Fakten
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Sauberkeit, auf die man sich verlassen kann
          </h2>
        </div>
        <p className="text-xs text-slate-500">* Werte variieren je nach Saison und Auftragslage.</p>
      </div>

      <div className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ icon: Icon, ...s }) => (
          <div
            key={s.label}
            className="card-shine group rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand/20 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="text-4xl font-extrabold text-brand">
                <Counter to={s.to} suffix={s.suffix} start={start} />
              </div>
              <div className="rounded-xl bg-brand/10 p-2 text-brand transition group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{s.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
