// src/components/HeroDark.jsx
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Clock, BadgeEuro, Star } from "lucide-react";
import Mascot from "@/src/components/Mascot";
import { site } from "@/src/lib/site";

const bubbles = [
  { left: "4%", size: 18, dur: 13, delay: 0 },
  { left: "16%", size: 10, dur: 10, delay: 3 },
  { left: "28%", size: 24, dur: 16, delay: 6 },
  { left: "44%", size: 12, dur: 11, delay: 1.5 },
  { left: "58%", size: 16, dur: 15, delay: 4 },
  { left: "72%", size: 9, dur: 9, delay: 7 },
  { left: "86%", size: 28, dur: 18, delay: 2 },
  { left: "95%", size: 12, dur: 12, delay: 5 },
];

function Chip({ icon: Icon, title, text, className, style }) {
  return (
    <div
      className={`chip-float absolute z-20 flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/90 px-3 py-2 text-left shadow-xl shadow-black/20 backdrop-blur ${className}`}
      style={style}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-white">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="block text-xs font-bold text-slate-900">{title}</span>
        <span className="block text-[11px] text-slate-500">{text}</span>
      </span>
    </div>
  );
}

export default function HeroDark() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-brand-deep pt-28 pb-24 text-white md:pt-32 md:pb-32">
      {/* Hintergrund-Grafik */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(56,189,248,0.35),transparent_50%),radial-gradient(ellipse_at_85%_70%,rgba(42,111,148,0.7),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="blob absolute -left-24 top-10 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="blob absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-brand-soft/40 blur-3xl [animation-delay:-7s]" />
        {bubbles.map((b, i) => (
          <span key={i} className="bubble" style={{ left: b.left, width: b.size, height: b.size, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }} />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div className="text-center lg:text-left">
          <p className="hero-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-100 backdrop-blur" style={{ animationDelay: "0.05s" }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Reinigungsfirma aus Bad Segeberg
          </p>

          <h1 id="hero-title" className="hero-rise text-[2.35rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            Gebäudereinigung,
            <br />
            <span className="text-shine">die man sieht.</span>
          </h1>

          <p className="hero-in mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg lg:mx-0" style={{ animationDelay: "0.25s" }}>
            Büro-, Unterhalts-, Grund- und Fensterreinigung in{" "}
            <strong className="font-semibold text-white">Schleswig-Holstein, Hamburg &amp; Bremen</strong> – mit festem
            Team, klaren Abläufen und fairen Festpreisen.
          </p>

          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start" style={{ animationDelay: "0.4s" }}>
            <Link href="/contact" className="btn-glow group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-brand shadow-xl shadow-black/25 transition hover:-translate-y-0.5">
              Kostenloses Angebot
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a href={`tel:${site.phoneTel}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>

          <ul className="hero-in mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-300 lg:justify-start" style={{ animationDelay: "0.55s" }}>
            <li className="inline-flex items-center gap-1.5"><Star className="h-4 w-4 fill-amber-300 text-amber-300" aria-hidden="true" /> 10+ Jahre Erfahrung</li>
            <li className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-sky-300" aria-hidden="true" /> Mo–Sa 08–20 Uhr</li>
          </ul>
        </div>

        {/* Figur mit Motion + schwebende Info-Karten */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative mx-auto w-52 sm:w-64 lg:w-72">
            <Mascot
              fig="hero"
              dark
              priority
              speech="Moin! Wir machen's sauber ✨"
              speechSide="left"
              alt="MN GLANZWERK Reinigungskraft mit Eimer"
              sizes="(max-width: 640px) 208px, 288px"
              delay={0.2}
            />
          </div>
          <Chip icon={ShieldCheck} title="Festes Team" text="Geschult & zuverlässig" className="left-0 top-[30%] sm:-left-6" style={{ animationDelay: "0s" }} />
          <Chip icon={Clock} title="Notdienst 24/7" text="Schnell vor Ort" className="right-0 top-[56%] sm:-right-4" style={{ animationDelay: "-2s" }} />
          <Chip icon={BadgeEuro} title="Festpreis" text="Kostenloses Angebot" className="bottom-[2%] left-2 hidden sm:flex" style={{ animationDelay: "-4s" }} />
        </div>
      </div>

      {/* Welle */}
      <svg aria-hidden="true" className="absolute -bottom-px left-0 w-full text-slate-50" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path fill="currentColor" d="M0 50c180-40 360-40 540-10s360 40 540 10 270-40 360-30v60H0z" />
      </svg>
    </section>
  );
}
