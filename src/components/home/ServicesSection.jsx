// src/components/home/ServicesSection.jsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/src/data/services";
import Mascot from "@/src/components/Mascot";

export default function ServicesSection() {
  return (
    <div>
      <div className="grid items-end gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <p className="eyebrow">Unsere Leistungen</p>
          <h2 className="h2">
            Alles aus einer Hand –{" "}
            <span className="text-gradient">sauber bis ins Detail</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Von der wöchentlichen Büroreinigung bis zur einmaligen Endreinigung: Wir
            erstellen für jedes Objekt einen passenden Reinigungsplan – mit klaren
            Abläufen und festen Ansprechpartnern.
          </p>
        </div>
        <div className="hidden justify-end lg:flex">
          <div className="w-44">
            <Mascot fig="mop" speech="Streifenfrei!" speechSide="left" alt="" sizes="176px" />
          </div>
        </div>
      </div>

      <ul className="stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <li
            key={title}
            className={`card-shine group relative flex flex-col overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
              i === 0
                ? "border-transparent bg-gradient-to-br from-brand to-brand-deep text-white shadow-xl shadow-brand/25 hover:shadow-brand/30"
                : "border-slate-200 bg-white hover:border-brand/25 hover:shadow-brand/10"
            }`}
          >
            <span
              className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition duration-300 group-hover:-rotate-6 group-hover:scale-110 ${
                i === 0 ? "bg-white/15 text-white" : "bg-sky-50 text-brand group-hover:bg-brand group-hover:text-white"
              }`}
            >
              <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h3 className={`text-base font-bold ${i === 0 ? "text-white" : "text-slate-900"}`}>{title}</h3>
            <p className={`mt-2 flex-1 text-sm leading-relaxed ${i === 0 ? "text-sky-100" : "text-slate-600"}`}>{desc}</p>
            <Link
              href="/contact"
              className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${i === 0 ? "text-white" : "text-brand"}`}
            >
              Angebot anfragen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              <span className="sr-only"> für {title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
