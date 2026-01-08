// src/components/home/CTASection.jsx
import Image from "next/image";
import { PrimaryLink, GhostTel } from "@/src/components/ui/ButtonLink";

export default function CTASection() {
  return (
    <section className="rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 space-y-4 text-center md:text-left md:order-1">
        <h2 className="flex items-center justify-center md:justify-start gap-3 text-2xl md:text-3xl font-semibold text-slate-900">
          <Image
            src="/broom.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 object-contain drop-shadow-sm"
            aria-hidden="true"
          />
          <span>Bereit für perfekte Sauberkeit?</span>
        </h2>

        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
          Erzählen Sie uns kurz, um welches Objekt es geht – wir melden uns mit
          einem individuellen, unverbindlichen Angebot und schlagen Ihnen
          passende Reinigungspakete vor.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <PrimaryLink href="/contact">Angebot anfordern</PrimaryLink>
          <GhostTel
            href="tel:+491637885512"
            ariaLabel="Telefonnummer anrufen: +491637885512"
          >
            Jetzt telefonisch anfragen
          </GhostTel>
        </div>
      </div>

      <div className="w-28 sm:w-40 md:w-56 lg:w-64 md:order-2">
        <Image
          src="/mn/cta-point-left-cloth.webp"
          alt="Jetzt Angebot anfordern bei MN GLANZWERK"
          width={2060}
          height={260}
          sizes="(max-width: 768px) 160px, 220px"
          className="w-full h-auto drop-shadow-xl pointer-events-none select-none"
        />
      </div>
    </section>
  );
}
