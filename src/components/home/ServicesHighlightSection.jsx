// src/components/home/ServicesHighlightSection.jsx
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { LightLink } from "@/src/components/ui/ButtonLink";
import { services } from "@/src/data/services";

export default function ServicesHighlightSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-slate-900 px-6 py-10 md:px-10 md:py-14 text-slate-50">
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-40" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl opacity-60" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <Sparkles size={14} aria-hidden="true" />
            </span>
            <span>Unsere Reinigungsleistungen</span>
          </p>

          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Alles aus einer Hand – sauber bis ins Detail
              </h2>
              <p className="mt-2 text-sm text-slate-200 max-w-xl leading-relaxed">
                Von Wohnungen über Büros bis hin zu Hotels und sensiblen
                Einrichtungen – wir erstellen strukturierte Reinigungspläne mit
                klaren Abläufen und festen Ansprechpartnern.
              </p>
            </div>

            <LightLink href="/contact" className="mt-3 self-start">
              Individuelles Angebot anfragen →
            </LightLink>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white shadow-sm">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-sky-100">
                    {title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-slate-100/90 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="mx-auto flex max-w-xs flex-col items-center lg:max-w-sm">
            <div className="relative mb-3 h-40 w-40 sm:h-48 sm:w-48 lg:h-60 lg:w-60">
              <div className="absolute inset-0 rounded-full bg-white/15 blur-2xl" />
              <div className="absolute inset-3 rounded-full border border-white/30" />
              <Image
                src="/mn/services-mop.webp"
                alt="MN Glanzwerk Reinigungsexperte"
                width={520}
                height={520}
                sizes="(max-width: 768px) 220px, 260px"
                className="relative h-full w-full object-contain drop-shadow-2xl"
              />
            </div>

            <p className="text-xs text-slate-100/80 text-center max-w-xs leading-relaxed">
              Ihr Reinigungspartner für Wohnungen, Büros, Hotels, Praxen,
              Bildungseinrichtungen &amp; mehr – in Schleswig-Holstein, Hamburg,
              Bremen und auf Wunsch deutschlandweit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
