import Link from "next/link";
import Mascot from "@/src/components/Mascot";

export const metadata = { title: "Seite nicht gefunden", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 pt-36 pb-10 text-center">
      <div className="w-40">
        <Mascot fig="point" speech="Hier ist nichts zu putzen!" speechSide="right" alt="" sizes="160px" />
      </div>
      <p className="mt-8 text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-2 text-2xl font-bold text-slate-900">Diese Seite gibt es nicht (mehr).</h1>
      <p className="mt-2 text-slate-600">Kein Problem – hier geht&apos;s weiter:</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white">Zur Startseite</Link>
        <Link href="/contact" className="rounded-full border border-brand/25 px-6 py-3 text-sm font-semibold text-brand">Angebot anfordern</Link>
      </div>
    </div>
  );
}
