// src/components/home/ProcessSection.jsx
import { MessageSquareText, ClipboardCheck, Sparkles, BadgeCheck } from "lucide-react";
import Mascot from "@/src/components/Mascot";

const steps = [
  { icon: MessageSquareText, title: "Anfrage senden", text: "Per Formular, Telefon oder WhatsApp – in 2 Minuten erledigt." },
  { icon: ClipboardCheck, title: "Festpreis-Angebot", text: "Nach kurzer Abstimmung oder Besichtigung erhalten Sie Ihr Angebot." },
  { icon: Sparkles, title: "Reinigung", text: "Unser festes Team reinigt zum vereinbarten Termin – gründlich & diskret." },
  { icon: BadgeCheck, title: "Qualitätskontrolle", text: "Wir prüfen das Ergebnis und bleiben Ihr fester Ansprechpartner." },
];

export default function ProcessSection() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-brand to-brand-deep px-6 py-12 text-white shadow-2xl shadow-brand/20 md:px-12 md:py-16">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]" />
      <div aria-hidden="true" className="blob absolute -left-16 -top-16 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr]">
        {/* Figur links, zeigt nach rechts auf Überschrift & Schritte */}
        <div className="mx-auto w-36 sm:w-40 lg:mx-0">
          <Mascot fig="pointR" dark speech="Hier entlang!" speechSide="right" alt="" sizes="160px" />
        </div>
        <div className="text-center lg:text-left">
          <p className="eyebrow eyebrow-dark">So einfach geht&apos;s</p>
          <h2 className="h2 text-white">In 4 Schritten zum sauberen Objekt</h2>
        </div>
      </div>

      <ol className="stagger relative mt-10 grid gap-6 md:grid-cols-4">
        <span aria-hidden="true" className="draw-line absolute left-[12%] right-[12%] top-7 hidden h-0.5 bg-gradient-to-r from-sky-300 via-white/60 to-sky-300 md:block" />
        {steps.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className="relative text-center">
            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand shadow-lg shadow-black/20 ring-4 ring-brand">
              <Icon className="h-6 w-6" aria-hidden="true" />
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-sky-400 text-xs font-bold text-brand-deep">
                {i + 1}
              </span>
            </span>
            <h3 className="mt-4 text-base font-bold">{title}</h3>
            <p className="mx-auto mt-1.5 max-w-[16rem] text-sm leading-relaxed text-sky-100/90">{text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
