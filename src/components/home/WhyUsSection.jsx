// src/components/home/WhyUsSection.jsx
import Image from "next/image";
import { PrimaryLink } from "@/src/components/ui/ButtonLink";

export default function WhyUsSection() {
  return (
    <section className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-start">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Warum MN GLANZWERK?
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Wir verbinden Erfahrung in der Gebäudereinigung mit modernen Methoden
          und einem klaren Serviceprozess. Unser Ziel: dauerhaft saubere Objekte
          und Kunden, die sich um nichts kümmern müssen.
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>• Persönliche Beratung und feste Ansprechpartner</li>
          <li>• Qualifiziertes, zuverlässiges und freundliches Team</li>
          <li>• Moderne Materialien &amp; professionelle Ausrüstung</li>
          <li>• Flexible Terminvereinbarung – auch kurzfristig &amp; bei Notfällen</li>
          <li>• Transparente Angebote ohne versteckte Kosten</li>
        </ul>
      </div>

      <div className="relative space-y-4">
        <div className="pointer-events-none absolute -top-10 -right-2 hidden md:block">
          <div className="w-16 lg:w-20">
            <Image
              src="/mn/about-spray-thumbs-up.webp"
              alt="Mitarbeiter von MN GLANZWERK"
              width={300}
              height={300}
              className="h-auto w-full drop-shadow-lg"
            />
          </div>
        </div>

        <div className="flex justify-center md:hidden">
          <div className="w-16">
            <Image
              src="/mn/about-spray-thumbs-up.webp"
              alt="Mitarbeiter von MN GLANZWERK"
              width={200}
              height={200}
              className="h-auto w-full drop-shadow-md"
            />
          </div>
        </div>

        <div className="rounded-2xl bg-brand/95 text-slate-50 p-6 space-y-4 shadow-lg">
          <h3 className="text-lg font-semibold">Direkter Kontakt</h3>
          <p className="text-sm text-slate-100 leading-relaxed">
            Sie möchten ein Angebot oder haben Fragen zu einem konkreten Objekt?
            Schreiben oder rufen Sie uns an – wir melden uns schnell und
            unverbindlich.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <p className="font-medium">Telefon / WhatsApp</p>
              <p className="text-slate-100">0163 7885512</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">Adresse</p>
              <p className="text-slate-100">
                Kurhausstraße 46
                <br />
                23795 Bad Segeberg
              </p>
            </div>
          </div>

          <PrimaryLink href="/contact" className="bg-white text-brand hover:bg-slate-100">
            Kontaktformular öffnen
          </PrimaryLink>
        </div>
      </div>
    </section>
  );
}
