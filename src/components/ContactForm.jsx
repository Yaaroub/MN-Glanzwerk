// src/components/ContactForm.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/src/components/AnimatedSection";

export default function ContactForm() {
  const [state, setState] = useState({
    sending: false,
    ok: null, // true | false | null
    error: "",
  });

  const phoneDisplay = "0163 7885512";
  const phoneTel = "+491637885512";
  const waLink = "https://wa.me/491637885512";

  const isDisabled = state.sending;

  const services = useMemo(
    () => [
      "Wohnungs-/Hausreinigung",
      "Büro- & Firmenreinigung",
      "Umzugs- & Endreinigung",
      "Teppich-, Sofa- & Gardinenreinigung",
      "Hotelreinigung",
      "Krankenhaus- / Praxisreinigung",
      "Kindergarten & Schulen",
      "Sonstiges",
    ],
    []
  );

  // Premium Toast (Bottom) – show/hide + animation
  const [toast, setToast] = useState({
    mounted: false, // in DOM
    visible: false, // animated state
    type: "success", // "success" | "error"
    title: "",
    message: "",
  });

  const toastTimerRef = useRef(null);
  const toastUnmountRef = useRef(null);

  function showToast({ type, title, message }) {
    // Cleanup existing timers
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    if (toastUnmountRef.current) clearTimeout(toastUnmountRef.current);

    // Mount + set content
    setToast({
      mounted: true,
      visible: false,
      type,
      title,
      message,
    });

    // Next frame => animate in
    requestAnimationFrame(() => {
      setToast((t) => ({ ...t, visible: true }));
    });

    // Auto dismiss after 6s
    toastTimerRef.current = setTimeout(() => {
      hideToast();
    }, 6000);
  }

  function hideToast() {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);

    // Animate out
    setToast((t) => ({ ...t, visible: false }));

    // Unmount after animation
    toastUnmountRef.current = setTimeout(() => {
      setToast((t) => ({ ...t, mounted: false }));
    }, 260);
  }

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      if (toastUnmountRef.current) clearTimeout(toastUnmountRef.current);
    };
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    const payload = {
      name: form.name.value?.trim(),
      email: form.email.value?.trim(),
      phone: form.phone.value?.trim(),
      street: form.street.value?.trim(),
      zip: form.zip.value?.trim(),
      city: form.city.value?.trim(),
      service: form.service.value,
      objectType: form.objectType.value?.trim(),
      message: form.message.value?.trim(),
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
      showToast({
        type: "success",
        title: "Danke! ✅",
        message: "Ihre Nachricht wurde erfolgreich gesendet.",
      });

      form.reset();
    } catch (err) {
      const msg = err?.message || "Fehler";
      setState({ sending: false, ok: false, error: msg });

      showToast({
        type: "error",
        title: "Fehler ❌",
        message: msg,
      });
    }
  }

  return (
    <section className="relative">
      {/* MOBILE: Premium Sticky Action Bar (nur mobile) */}
      <div className="lg:hidden fixed bottom-3 left-0 right-0 z-50 px-3">
        <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur shadow-lg p-2">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex items-center justify-center px-3 py-2 rounded-xl bg-brand text-white text-sm font-semibold shadow hover:opacity-95 transition"
            >
              Anrufen
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm font-semibold hover:bg-slate-50 transition"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-2 flex items-center justify-between gap-2">
            <p className="text-[11px] text-slate-600" aria-live="polite">
              {state.sending
                ? "Sende Anfrage…"
                : state.ok === true
                ? "✅ Gesendet"
                : state.ok === false
                ? "❌ Fehler"
                : "Bereit"}
            </p>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("mn-contact-form");
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="text-[11px] font-semibold text-brand hover:opacity-80 transition"
            >
              Zum Formular ↑
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.35fr,0.85fr]">
        {/* SIDEBAR (Premium) */}
        <aside className="order-1 lg:order-2">
          <div className="relative rounded-3xl bg-brand/95 text-slate-50 shadow-lg border border-white/10 overflow-hidden lg:sticky lg:top-24">
            {/* subtle shine */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative p-5 sm:p-6 md:p-7">
              {/* Desktop: Figur schwebt */}
              <div className="pointer-events-none absolute -right-3 hidden lg:block">
                <Image
                  src="/mn/contact-support.webp"
                  alt="MN Glanzwerk – Kontakt"
                  width={320}
                  height={320}
                  className="w-28 lg:w-36 h-auto drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Mobile: Figur inline */}
              <div className="flex items-center gap-3 lg:hidden">
                <Image
                  src="/mn/contact-support.webp"
                  alt="MN Glanzwerk – Kontakt"
                  width={120}
                  height={120}
                  className="w-14 h-auto drop-shadow-md"
                  priority
                />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/80 font-semibold">
                    DIREKTER KONTAKT
                  </p>
                  <h2 className="text-base font-semibold leading-tight">
                    Schnell & unkompliziert
                  </h2>
                  <p className="text-xs text-white/80 leading-snug">
                    Anrufen oder WhatsApp – wir melden uns zeitnah.
                  </p>
                </div>
              </div>

              {/* Desktop headline */}
              <div className="hidden lg:block space-y-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/80 font-semibold">
                  DIREKTER KONTAKT
                </p>
                <h2 className="text-xl font-semibold">Wir sind für Sie da</h2>
                <p className="text-sm text-white/85">
                  Sie möchten lieber direkt anrufen oder per WhatsApp schreiben?
                  Kein Problem – wir sind erreichbar.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${phoneTel}`}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-white text-brand font-semibold shadow hover:bg-slate-100 transition text-sm"
                >
                  Jetzt anrufen
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 transition text-sm"
                >
                  WhatsApp
                </a>
              </div>

              {/* Info chips */}
              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl bg-white/10 border border-white/15 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/70">
                    Telefon / WhatsApp
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {phoneDisplay}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-2xl bg-white/10 border border-white/15 p-3">
                    <p className="text-[11px] uppercase tracking-wide text-white/70">
                      Öffnungszeiten
                    </p>
                    <p className="text-sm text-white/90">
                      Mo–Sa: 08:00 – 20:00 Uhr
                      <br />
                      Notfälle: 24 Stunden erreichbar
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 border border-white/15 p-3">
                    <p className="text-[11px] uppercase tracking-wide text-white/70">
                      Adresse
                    </p>
                    <p className="text-sm text-white/90">
                      Kurhausstraße 46
                      <br />
                      23795 Bad Segeberg
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-5 pt-4 border-t border-white/20">
                <p className="text-xs font-medium uppercase tracking-wide text-white/70 mb-2">
                  Folge uns
                </p>

                <div className="flex flex-col gap-3 text-sm">
                  <a
                    href="https://www.instagram.com/glanzwerkglanzwerk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-85 transition"
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

                  <a
                    href="https://www.tiktok.com/@glanzwerk.glanzwe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-85 transition"
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
            </div>
          </div>
        </aside>

        {/* FORM CARD (Premium) */}
        <div className="order-2 lg:order-1">
          <div className="rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <AnimatedSection>
                    <p className="inline-flex items-center rounded-full bg-brand/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                      KONTAKT
                    </p>
                  </AnimatedSection>
                  <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    Anfrage senden
                  </h1>
                  <p className="text-sm text-slate-600">
                    Teilen Sie uns kurz die wichtigsten Infos mit – wir melden
                    uns zeitnah zurück.
                  </p>
                </div>

                <div className="hidden md:block">
                  <div className="h-12 w-12 rounded-2xl bg-brand/10 border border-brand/15 flex items-center justify-center">
                    <span className="text-brand font-bold">MN</span>
                  </div>
                </div>
              </div>

              <form
                id="mn-contact-form"
                className="space-y-6"
                onSubmit={onSubmit}
              >
                {/* Honeypot (unsichtbar) */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Section: Kontaktdaten */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Kontaktdaten
                    </p>
                    <p className="text-xs text-slate-500">* Pflichtfelder</p>
                  </div>

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
                        disabled={isDisabled}
                        autoComplete="name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand disabled:opacity-60"
                        placeholder="Vor- und Nachname"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <AnimatedSection delay={0.15}>
                        <label className="block text-sm font-medium text-slate-800">
                          E-Mail *
                        </label>
                      </AnimatedSection>
                      <input
                        name="email"
                        type="email"
                        required
                        disabled={isDisabled}
                        autoComplete="email"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand disabled:opacity-60"
                        placeholder="name@beispiel.de"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <AnimatedSection delay={0.2}>
                        <label className="block text-sm font-medium text-slate-800">
                          Telefon / WhatsApp
                        </label>
                      </AnimatedSection>
                      <input
                        name="phone"
                        type="tel"
                        disabled={isDisabled}
                        autoComplete="tel"
                        inputMode="tel"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand disabled:opacity-60"
                        placeholder="z. B. 0163 7885512"
                      />
                      <p className="text-[11px] text-slate-500">
                        Optional – für schnelle Rückfragen.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <AnimatedSection delay={0.25}>
                        <label className="block text-sm font-medium text-slate-800">
                          Objektart
                        </label>
                      </AnimatedSection>
                      <input
                        name="objectType"
                        type="text"
                        disabled={isDisabled}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand disabled:opacity-60"
                        placeholder="Wohnung, Haus, Büro, Hotel …"
                      />
                    </div>
                  </div>
                </div>

                {/* Section: Adresse */}
                <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Adresse des Objekts
                      </p>
                      <p className="text-[12px] text-slate-600">
                        Benötigt zur Einschätzung von Anfahrt & Einsatzgebiet.
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex items-center rounded-full bg-brand/5 px-3 py-1 text-[11px] font-semibold text-brand">
                      Pflicht
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="block text-sm font-medium text-slate-800">
                        Straße &amp; Hausnummer *
                      </label>
                      <input
                        name="street"
                        type="text"
                        required
                        disabled={isDisabled}
                        autoComplete="street-address"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand disabled:opacity-60"
                        placeholder="z. B. Kurhausstraße 46"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-800">
                        PLZ *
                      </label>
                      <input
                        name="zip"
                        type="text"
                        required
                        disabled={isDisabled}
                        inputMode="numeric"
                        pattern="\d{5}"
                        maxLength={5}
                        title="Bitte 5-stellige PLZ eingeben (z. B. 23795)."
                        autoComplete="postal-code"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand disabled:opacity-60"
                        placeholder="23795"
                      />
                    </div>

                    <div className="space-y-1.5 md:col-span-3">
                      <label className="block text-sm font-medium text-slate-800">
                        Ort *
                      </label>
                      <input
                        name="city"
                        type="text"
                        required
                        disabled={isDisabled}
                        autoComplete="address-level2"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand disabled:opacity-60"
                        placeholder="z. B. Bad Segeberg"
                      />
                    </div>
                  </div>
                </div>

                {/* Section: Leistung */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Leistung
                  </p>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-800">
                      Gewünschte Leistung *
                    </label>
                    <select
                      name="service"
                      required
                      disabled={isDisabled}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand disabled:opacity-60"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Bitte auswählen
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Section: Beschreibung */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Beschreibung
                  </p>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-800">
                      Nachricht / Beschreibung *
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      disabled={isDisabled}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand resize-none disabled:opacity-60"
                      placeholder="Kurz: Welche Räume? Wie groß? Wann wünschen Sie die Reinigung? (z. B. nächstes Wochenende / regelmäßig)"
                    />
                    <p className="text-[11px] text-slate-500">
                      Je mehr Infos, desto schneller ein passendes Angebot.
                    </p>
                  </div>
                </div>

                {/* Datenschutz */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <input
                      id="privacy"
                      type="checkbox"
                      required
                      disabled={isDisabled}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand/70 disabled:opacity-60"
                    />
                    <label htmlFor="privacy">
                      Ich habe die{" "}
                      <a
                        href="/datenschutz"
                        className="text-brand hover:text-brand-accent underline underline-offset-2"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und akzeptiere sie. Ich bin damit einverstanden,
                      dass meine Angaben zur Kontaktaufnahme und für Rückfragen
                      gespeichert werden.
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={isDisabled}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand text-white text-sm font-semibold shadow-md hover:opacity-95 hover:shadow-lg transition-all disabled:opacity-60"
                  >
                    {state.sending ? "Sende..." : "Anfrage senden"}
                  </button>

                  <p className="text-[11px] text-slate-500">
                    Antwort in der Regel{" "}
                    <span className="font-semibold text-slate-700">
                      am selben Tag
                    </span>
                    .
                  </p>
                </div>

                {/* Extra spacing for mobile sticky bar */}
                <div className="h-20 lg:hidden" />
              </form>
            </div>
          </div>

          {/* Desktop helper row */}
          <div className="mt-4 hidden lg:flex items-center justify-between text-xs text-slate-500">
            <p>
              Tipp: Für sehr schnelle Hilfe nutzen Sie WhatsApp oder rufen Sie
              direkt an.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:opacity-80 transition"
            >
              WhatsApp öffnen →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Toast (All screens) */}
      {toast.mounted && (
        <div
          aria-live={toast.type === "error" ? "assertive" : "polite"}
          className="fixed inset-x-0 bottom-4 z-[80] flex justify-center px-4"
        >
          <div
            className={[
              "w-full max-w-md sm:w-auto rounded-2xl shadow-2xl border",
              "backdrop-blur bg-white/90",
              "transition-all duration-200 ease-out",
              toast.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3",
              toast.type === "success" ? "border-emerald-200" : "border-rose-200",
            ].join(" ")}
          >
            <div className="flex items-start gap-3 px-4 py-3">
              <div
                className={[
                  "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-white",
                  toast.type === "success" ? "bg-emerald-600" : "bg-rose-600",
                ].join(" ")}
              >
                {toast.type === "success" ? "✓" : "!"}
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900 leading-tight">
                  {toast.title}
                </p>
                <p className="text-[13px] text-slate-600 leading-snug">
                  {toast.message}
                </p>
              </div>

              <button
                type="button"
                onClick={hideToast}
                className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-xl hover:bg-slate-100 transition text-slate-700"
                aria-label="Benachrichtigung schließen"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
