// src/components/home/ContactSection.jsx
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import Mascot from "@/src/components/Mascot";
import MapBox from "@/src/app/MapBox";
import { site } from "@/src/lib/site";

export default function ContactSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
        <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-100 blur-2xl" />
        <div className="relative">
          <p className="eyebrow">Direkter Kontakt</p>
          <h2 className="h2 text-2xl md:text-3xl">Wir sind für Sie da.</h2>
        </div>

        {/* Bühne: Figur tippt die Nummer und telefoniert */}
        <div className="relative mt-5 flex h-64 items-end justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-white to-sky-100 px-4 sm:h-72">
          <div aria-hidden="true" className="absolute inset-0 opacity-50 [background-image:radial-gradient(#bae6fd_1.5px,transparent_1.5px)] [background-size:18px_18px]" />
          <div className="relative mr-2 w-32 sm:mr-6 sm:w-36">
            <Mascot fig="phone" speechSide="left" alt="MN GLANZWERK Mitarbeiter tippt die Telefonnummer 0163 7885512 und telefoniert" sizes="144px" effects />
          </div>
        </div>

        <ul className="relative mt-5 space-y-3 text-sm">
          <li>
            <a href={`tel:${site.phoneTel}`} className="group flex items-center gap-3 rounded-2xl bg-slate-50 p-3 transition hover:bg-brand hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-sm"><Phone className="h-5 w-5" aria-hidden="true" /></span>
              <span><span className="block text-xs opacity-70">Telefon</span><span className="font-bold">{site.phoneDisplay}</span></span>
            </a>
          </li>
          <li>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-2xl bg-slate-50 p-3 transition hover:bg-emerald-500 hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm"><MessageCircle className="h-5 w-5" aria-hidden="true" /></span>
              <span><span className="block text-xs opacity-70">WhatsApp</span><span className="font-bold">Nachricht schreiben</span></span>
            </a>
          </li>
          <li className="flex items-center gap-3 p-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-brand"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
            <span>{site.address.street}, {site.address.zip} {site.address.city}</span>
          </li>
          <li className="flex items-center gap-3 p-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-brand"><Clock className="h-5 w-5" aria-hidden="true" /></span>
            <span>{site.hours.days} {site.hours.opens}–{site.hours.closes} Uhr · <span className="font-semibold text-emerald-600">{site.hours.emergency}</span></span>
          </li>
        </ul>

        <Link href="/contact" className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-soft">
          Kontaktformular öffnen
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>

      <div className="min-h-[320px] overflow-hidden rounded-[2rem]">
        <MapBox />
      </div>
    </div>
  );
}
