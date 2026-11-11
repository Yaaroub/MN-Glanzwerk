// src/components/home/ServicesSection.jsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/src/data/services";
import Mascot from "@/src/components/Mascot";
import ScrollProgress from "@/src/components/ScrollProgress";
import ServiceArt from "@/src/components/ServiceArt";

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

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc, slug, art }) => (
          <li key={slug}>
            <Link
              href={`/leistungen#${slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-brand/25 hover:shadow-2xl hover:shadow-brand/10"
            >
              <ScrollProgress className="relative border-b border-slate-100 bg-gradient-to-br from-white via-sky-50 to-sky-100 px-3 pt-3">
                <ServiceArt art={art} />
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-brand shadow-sm transition group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.9} aria-hidden="true" />
                </span>
              </ScrollProgress>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <Link
          href="/leistungen"
          className="group inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-6 py-3 text-sm font-semibold text-brand shadow-sm transition hover:border-brand/40 hover:shadow-md"
        >
          Alle Leistungen im Detail
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
