// src/components/Footer.jsx – Server-Komponente
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { site, cities } from "@/src/lib/site";
import { services } from "@/src/data/services";
import CookieSettingsButton from "@/src/components/CookieSettingsButton";

const linkCls = "text-slate-300 transition hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-brand-deep text-slate-200">
      {/* CTA-Band */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative -top-14 -mb-14 overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 via-brand-soft to-brand p-6 shadow-2xl shadow-brand/30 sm:p-8">
          <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <div className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-xl font-extrabold text-white sm:text-2xl">Bereit für echten Glanz?</p>
              <p className="mt-1 text-sm text-sky-50">Kostenloses Festpreis-Angebot – meist innerhalb von 24 Stunden.</p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand shadow-lg transition hover:-translate-y-0.5">
                Angebot anfordern <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-4 pb-8 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Marke */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <Image src="/logo-mn.webp" alt="" width={36} height={36} className="h-8 w-8 object-contain" />
              </span>
              <span className="text-lg font-extrabold text-white">MN GLANZWERK</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Professionelle Gebäudereinigung aus Bad Segeberg – für Unternehmen, Praxen,
              Hotels und Privathaushalte in Schleswig-Holstein, Hamburg und Bremen.
            </p>
            <div className="mt-5 flex gap-2">
              <a href={site.social[0]} target="_blank" rel="noopener noreferrer" aria-label="MN GLANZWERK auf Instagram" className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1.2" />
                </svg>
              </a>
              <a href={site.social[1]} target="_blank" rel="noopener noreferrer" aria-label="MN GLANZWERK auf TikTok" className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white" aria-hidden="true">
                  <path d="M12.5 3h2c.2 1.6 1.4 3.4 3.7 3.8v2.2c-1.5.1-2.9-.4-3.8-1.3v6.6c0 2.9-1.9 5.2-4.9 5.2-3.2 0-5-2.4-5-4.8 0-2.6 1.9-4.7 4.9-4.8.6 0 1.2.1 1.8.3V8.7c-3.4-.1-5.8 2.3-6.3 5-.7 3.8 2.1 7.3 6.3 7.3 4.2 0 7.1-3.3 7.1-7.3V3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">Leistungen</h2>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link href="/#leistungen" className={linkCls}>{s.short}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Seiten */}
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">Unternehmen</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className={linkCls}>Über uns</Link></li>
              <li><Link href="/projects" className={linkCls}>Projekte &amp; Referenzen</Link></li>
              <li><Link href="/contact" className={linkCls}>Kontakt</Link></li>
              <li><Link href="/impressum" className={linkCls}>Impressum</Link></li>
              <li><Link href="/datenschutz" className={linkCls}>Datenschutz</Link></li>
              <li><CookieSettingsButton className={`${linkCls} text-left`} /></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">Kontakt</h2>
            <address className="space-y-3 text-sm not-italic">
              <p className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
                <span>{site.address.street}<br />{site.address.zip} {site.address.city}</span>
              </p>
              <a href={`tel:${site.phoneTel}`} className="flex gap-2.5 text-white hover:text-sky-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" /> {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="flex gap-2.5 hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" /> {site.email}
              </a>
              <p className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
                <span>{site.hours.days} {site.hours.opens}–{site.hours.closes} Uhr<br /><span className="text-emerald-300">{site.hours.emergency}</span></span>
              </p>
            </address>
          </div>
        </div>

        {/* Einsatzgebiete – interne Relevanz für lokale Suche */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-slate-400">
            <span className="font-semibold text-slate-300">Gebäudereinigung in: </span>
            {cities.join(" · ")} · ganz Schleswig-Holstein
          </p>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          © {year} MN GLANZWERK – Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
