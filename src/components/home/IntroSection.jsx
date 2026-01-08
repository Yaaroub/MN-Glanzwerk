// src/components/home/IntroSection.jsx
import Image from "next/image";
import { PrimaryLink, GhostTel } from "@/src/components/ui/ButtonLink";

export default function IntroSection() {
  return (
    <section className="grid gap-10 md:grid-cols-2 items-center">
      {/* Text */}
      <div className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm">
            <Image
              src="/broom.png"
              alt=""
              width={16}
              height={16}
              className="h-4 w-4 object-contain"
              aria-hidden="true"
            />
          </span>
          <span>Gebäudereinigung • Schleswig-Holstein • Hamburg • Bremen</span>
        </p>

        {/* Achte drauf: HeroDark sollte idealerweise das H1 haben.
           Wenn HeroDark KEIN H1 hat, mach hier ein H1 draus. */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
          MN GLANZWERK CLEANING COMPANY
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800">
          Ihr Partner für anspruchsvolle Gebäudereinigung in Norddeutschland
        </h3>

        <p className="text-lg text-slate-600 leading-relaxed">
          Als regionale Reinigungsfirma aus Bad Segeberg betreuen wir Privat-
          und Geschäftskunden in Schleswig-Holstein, Hamburg und Bremen. Für
          jedes Objekt entwickeln wir ein individuelles Reinigungskonzept – mit
          klaren Abläufen, festen Ansprechpartnern und planbaren Terminen. Auf
          Wunsch sind wir auch deutschlandweit im Einsatz.
        </p>

        <ul className="grid gap-2 text-sm text-slate-700">
          <li>• Individuelle Reinigungskonzepte statt Standardlösungen</li>
          <li>• Geschultes, festes Team – keine ständig wechselnden Aushilfen</li>
          <li>• Moderne Materialien &amp; professionelle Ausrüstung</li>
          <li>• Transparente, faire Preise ohne versteckte Kosten</li>
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          <PrimaryLink href="/contact">Kostenloses Angebot anfordern</PrimaryLink>
          <GhostTel
            href="tel:+491637885512"
            ariaLabel="Telefonnummer anrufen: +491637885512"
          >
            Jetzt anrufen: 0163&nbsp;7885512
          </GhostTel>
        </div>
      </div>

      {/* Card + Mascot */}
      <div className="relative flex flex-col items-center gap-6">
        <div className="absolute inset-0 -z-10 blur-3xl bg-brand/10" />

        <div className="w-full max-w-md rounded-3xl bg-white/85 backdrop-blur border border-slate-100 shadow-xl p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
              <Image
                src="/logo-mn.png"
                alt="MN GLANZWERK CLEANING COMPANY – Gebäudereinigung in Bad Segeberg"
                width={56}
                height={56}
                className="h-12 w-12 object-contain drop-shadow-sm"
                priority
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                Ihr regionaler Partner in Norddeutschland
              </p>
              <p className="font-semibold text-slate-900">
                Professionelle Reinigung mit System
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-500 uppercase">
                Öffnungszeiten
              </p>
              <p className="text-slate-800">
                Mo–Sa: <br />
                <span className="font-medium">08:00 – 20:00 Uhr</span>
              </p>
              <p className="text-xs text-emerald-600 font-semibold">
                Notfälle: 24 Stunden erreichbar
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-500 uppercase">
                Standort
              </p>
              <p className="text-slate-800 text-sm">
                Kurhausstraße 46
                <br />
                23795 Bad Segeberg
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 text-xs text-slate-600 space-y-1">
            <p className="font-semibold text-slate-800">
              Qualität – Zuverlässigkeit – Vertrauen
            </p>
            <p>
              Wohnungs-, Haus- &amp; Gebäudereinigung • Büros &amp; Firmen •
              Hotels • Praxen • Kindergärten &amp; Schulen
            </p>
            <p className="text-[11px] text-slate-500">
              Einsatzgebiete: Schleswig-Holstein, Hamburg, Bremen – auf Wunsch
              deutschlandweit.
            </p>
          </div>
        </div>

        <div className="w-28 sm:w-40 md:w-56 lg:w-64">
          <Image
            src="/mn/hero-crossed-arms.webp"
            alt="Reinigungsexperte von MN GLANZWERK"
            width={260}
            height={260}
            sizes="(max-width: 768px) 160px, (max-width: 1024px) 220px, 260px"
            className="w-full h-auto drop-shadow-xl pointer-events-none select-none"
            priority
          />
        </div>
      </div>
    </section>
  );
}
