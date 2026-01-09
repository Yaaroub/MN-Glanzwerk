// src/components/ContactForm.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/src/components/AnimatedSection";

export default function ContactForm() {
  const [state, setState] = useState({ sending: false, ok: null, error: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      street: form.street.value,
      zip: form.zip.value,
      city: form.city.value,
      service: form.service.value,
      objectType: form.objectType.value,
      message: form.message.value,
      company: form.company.value, // Honeypot
    };

    setState({ sending: true, ok: null, error: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Fehler beim Versand.");
      }

      setState({ sending: false, ok: true, error: "" });
      form.reset();
    } catch (err) {
      setState({
        sending: false,
        ok: false,
        error: err?.message || "Fehler",
      });
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr,0.9fr]">
      <div className="rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-6 md:p-8">
        <div className="space-y-6">
          <AnimatedSection>
            <p className="inline-flex items-center rounded-full bg-brand/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              KONTAKT
            </p>
          </AnimatedSection>

          <form className="space-y-5" onSubmit={onSubmit}>
            {/* Honeypot (unsichtbar) */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {/* Name + E-Mail */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <AnimatedSection delay={0.1}>
                  <label className="block text-sm font-medium text-slate-800">
                    Name *
                  </label>
                </AnimatedSection>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand"
                  placeholder="Vor- und Nachname"
                />
              </div>

              <div className="space-y-1.5">
                <AnimatedSection delay={0.2}>
                  <label className="block text-sm font-medium text-slate-800">
                    E-Mail *
                  </label>
                </AnimatedSection>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand"
                  placeholder="Ihre E-Mail-Adresse"
                />
              </div>
            </div>

            {/* Telefon */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <AnimatedSection delay={0.3}>
                  <label className="block text-sm font-medium text-slate-800">
                    Telefon / WhatsApp
                  </label>
                </AnimatedSection>
                <input
                  name="phone"
                  type="tel"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand"
                  placeholder="z. B. 0163 7885512"
                />
              </div>

              <div className="space-y-1.5">
                <AnimatedSection delay={0.35}>
                  <label className="block text-sm font-medium text-slate-800">
                    Objektart
                  </label>
                </AnimatedSection>
                <input
                  name="objectType"
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand"
                  placeholder="z. B. Wohnung, Haus, Büro, Hotel ..."
                />
              </div>
            </div>

            {/* Adresse (Pflicht) */}
            <div className="space-y-3">
              <AnimatedSection delay={0.4}>
                <p className="text-sm font-semibold text-slate-900">
                  Adresse des Objekts *
                </p>
              </AnimatedSection>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-1.5 md:col-span-2">
                  <AnimatedSection delay={0.45}>
                    <label className="block text-sm font-medium text-slate-800">
                      Straße &amp; Hausnummer *
                    </label>
                  </AnimatedSection>
                  <input
                    name="street"
                    type="text"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand"
                    placeholder="z. B. Kurhausstraße 46"
                  />
                </div>

                <div className="space-y-1.5">
                  <AnimatedSection delay={0.5}>
                    <label className="block text-sm font-medium text-slate-800">
                      PLZ *
                    </label>
                  </AnimatedSection>
                  <input
                    name="zip"
                    type="text"
                    required
                    inputMode="numeric"
                    pattern="\d{5}"
                    title="Bitte 5-stellige PLZ eingeben (z. B. 23795)."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand"
                    placeholder="23795"
                  />
                </div>

                <div className="space-y-1.5 md:col-span-3">
                  <AnimatedSection delay={0.55}>
                    <label className="block text-sm font-medium text-slate-800">
                      Ort *
                    </label>
                  </AnimatedSection>
                  <input
                    name="city"
                    type="text"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand"
                    placeholder="z. B. Bad Segeberg"
                  />
                  <p className="text-[11px] text-slate-500">
                    Benötigt zur Einschätzung von Anfahrt &amp; Einsatzgebiet.
                  </p>
                </div>
              </div>
            </div>

            {/* Leistung */}
            <div className="space-y-1.5">
              <AnimatedSection delay={0.6}>
                <label className="block text-sm font-medium text-slate-800">
                  Gewünschte Leistung *
                </label>
              </AnimatedSection>
              <select
                name="service"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand"
              >
                <option value="">Bitte auswählen</option>
                <option>Wohnungs-/Hausreinigung</option>
                <option>Büro- & Firmenreinigung</option>
                <option>Umzugs- & Endreinigung</option>
                <option>Teppich-, Sofa- & Gardinenreinigung</option>
                <option>Hotelreinigung</option>
                <option>Krankenhaus- / Praxisreinigung</option>
                <option>Kindergarten & Schulen</option>
                <option>Sonstiges</option>
              </select>
            </div>

            {/* Nachricht */}
            <div className="space-y-1.5">
              <AnimatedSection delay={0.7}>
                <label className="block text-sm font-medium text-slate-800">
                  Nachricht / Beschreibung *
                </label>
              </AnimatedSection>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand resize-none"
                placeholder="Beschreiben Sie kurz, welche Räume gereinigt werden sollen und wann Sie sich eine Reinigung wünschen."
              />
            </div>

            {/* Datenschutz */}
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <input
                id="privacy"
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand/70"
              />
              <label htmlFor="privacy">
                Ich habe die{" "}
                <a
                  href="/datenschutz"
                  className="text-brand hover:text-brand-accent underline underline-offset-2"
                >
                  Datenschutzerklärung
                </a>{" "}
                gelesen und akzeptiere sie. Ich bin damit einverstanden, dass
                meine Angaben zur Kontaktaufnahme und für Rückfragen gespeichert
                werden.
              </label>
            </div>

            {/* Submit + Status */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={state.sending}
                className="inline-flex items-center px-6 py-3 rounded-full bg-brand text-white text-sm font-semibold shadow-md hover:bg-brand-soft hover:shadow-lg transition-all disabled:opacity-60"
              >
                {state.sending ? "Sende..." : "Anfrage senden"}
              </button>

              {state.ok === true && (
                <p className="mt-2 text-[11px] text-emerald-600">
                  Danke! Ihre Nachricht wurde erfolgreich gesendet.
                </p>
              )}

              {state.ok === false && (
                <p className="mt-2 text-[11px] text-rose-600">
                  Fehler beim Versand: {state.error}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="relative rounded-3xl bg-brand/95 text-slate-50 p-6 md:p-7 shadow-lg space-y-5 overflow-hidden">
        {/* Desktop: Figur schwebt oben rechts */}
        <div className="pointer-events-none absolute -top-10 -right-3 hidden md:block">
          <Image
            src="/mn/contact-support.webp"
            alt="MN Glanzwerk – Kontakt"
            width={320}
            height={320}
            className="w-28 lg:w-36 h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Mobile: Figur über der Box */}
        <div className="flex justify-center md:hidden -mt-8 mb-2">
          <Image
            src="/mn/contact-support.webp"
            alt="MN Glanzwerk – Kontakt"
            width={240}
            height={240}
            className="w-20 h-auto drop-shadow-lg"
          />
        </div>

        <h2 className="text-xl font-semibold">Direkter Kontakt</h2>
        <p className="text-sm text-slate-100">
          Sie möchten lieber direkt anrufen oder per WhatsApp schreiben? Kein
          Problem – wir sind für Sie da.
        </p>

        <div className="space-y-1 text-sm">
          <p className="font-medium">Telefon / WhatsApp</p>
          <p className="text-slate-100">0163 7885512</p>
        </div>

        <div className="space-y-1 text-sm">
          <p className="font-medium">Adresse</p>
          <p className="text-slate-100">
            Kurhausstraße 46
            <br />
            23795 Bad Segeberg
          </p>
        </div>

        <div className="space-y-1 text-sm">
          <p className="font-medium">Öffnungszeiten</p>
          <p className="text-slate-100">
            Mo–Sa: 08:00 – 20:00 Uhr
            <br />
            Notfälle: 24 Stunden erreichbar
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2 text-sm">
          <a
            href="tel:+491637885512"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white text-brand font-semibold shadow hover:bg-slate-100 transition"
          >
            Jetzt anrufen
          </a>
          <a
            href="https://wa.me/491637885512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/25 text-slate-50 hover:bg-white/10 transition"
          >
            WhatsApp-Nachricht senden
          </a>
        </div>

        <div className="pt-4 border-t border-white/20 mt-3">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-100/80 mb-2">
            Folge uns
          </p>

          <div className="flex flex-col gap-3 text-sm">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/glanzwerkglanzwerk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" />
              </svg>
              <span>@glanzwerkglanzwerk</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@glanzwerk.glanzwe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="white"
                aria-hidden="true"
              >
                <path d="M12.5 3h2c.2 1.6 1.4 3.4 3.7 3.8v2.2c-1.5.1-2.9-.4-3.8-1.3v6.6c0 2.9-1.9 5.2-4.9 5.2-3.2 0-5-2.4-5-4.8 0-2.6 1.9-4.7 4.9-4.8.6 0 1.2.1 1.8.3V8.7c-3.4-.1-5.8 2.3-6.3 5-.7 3.8 2.1 7.3 6.3 7.3 4.2 0 7.1-3.3 7.1-7.3V3z" />
              </svg>
              <span>@glanzwerk.glanzwe</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
