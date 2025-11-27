import Image from "next/image";
import AnimatedSection from "@/src/components/AnimatedSection";

export const metadata = {
  title: "Über uns – MN GLANZWERK CLEANING COMPANY",
  description:
    "Erfahren Sie mehr über MN GLANZWERK CLEANING COMPANY – professionelle Reinigungsdienste mit über 10 Jahren Erfahrung.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-20">

      {/* INTRO */}
      <AnimatedSection>
        <section className="max-w-4xl space-y-5">
          <p className="inline-flex items-center rounded-full bg-brand/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.20em] text-brand">
            Über uns
          </p>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Wer wir sind
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            MN GLANZWERK CLEANING COMPANY ist Ihr professioneller Partner für
            hochwertige Gebäudereinigung mit Sitz in Bad Segeberg. Wir betreuen
            Privat- und Geschäftskunden in ganz Schleswig-Holstein, Hamburg und
            Bremen – und übernehmen auf Wunsch auch deutschlandweite Projekte.
          </p>

          <p className="text-base text-slate-600 leading-relaxed">
            Unser Anspruch: höchste Qualität, Zuverlässigkeit und Vertrauen.
            Unser Team arbeitet mit modernen Reinigungsmitteln,
            professioneller Ausrüstung und echtem Verantwortungsbewusstsein.
          </p>
        </section>
      </AnimatedSection>

      {/* MISSION & WERTE */}
      <AnimatedSection delay={0.2}>
        <section className="grid gap-10 md:grid-cols-2 items-start">

          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Unsere Mission
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Sauberkeit ist für uns mehr als eine Dienstleistung – sie ist ein
              Versprechen. Wir wollen, dass Sie und Ihre Kunden sich in Ihren
              Räumen wohlfühlen. Jede Reinigung wird individuell geplant und so
              durchgeführt, als wäre es unser eigenes Objekt.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Ob regelmäßige Unterhaltsreinigung oder einmalige Grundreinigung –
              wir setzen auf langfristige Zusammenarbeit, offene Kommunikation
              und faire Beratung.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Unsere Werte</h3>

            <ul className="space-y-2 text-sm text-slate-700">
              <li>• <span className="font-semibold">Qualität:</span> Sorgfalt und Perfektion im Detail.</li>
              <li>• <span className="font-semibold">Zuverlässigkeit:</span> Termine & Zusagen zählen.</li>
              <li>• <span className="font-semibold">Vertrauen:</span> Diskret, respektvoll, professionell.</li>
              <li>• <span className="font-semibold">Flexibilität:</span> Lösungen für jede Umgebung.</li>
              <li>• <span className="font-semibold">Transparenz:</span> Faire Preise ohne Überraschungen.</li>
            </ul>
          </div>

        </section>
      </AnimatedSection>

      {/* WEN WIR BETREUEN */}
      <AnimatedSection delay={0.3}>
        <section className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Für wen wir arbeiten
          </h2>

          <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
            Unsere Kunden sind vielfältig – von Privathaushalten über kleine und
            mittelständische Unternehmen bis hin zu Hotels, Praxen und
            Bildungseinrichtungen. Für jedes Objekt entwickeln wir ein
            maßgeschneidertes Reinigungskonzept.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Privathaushalte",
                desc: "Wohnungen, Häuser & Treppenhäuser.",
              },
              {
                title: "Unternehmen",
                desc: "Büros, Kanzleien, Shops, Studios & Praxen.",
              },
              {
                title: "Einrichtungen",
                desc: "Hotels, Schulen, Kitas, Kliniken.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-5 space-y-1"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ERFAHRUNG */}
      <AnimatedSection delay={0.4}>
        <section className="grid gap-10 md:grid-cols-[1.4fr,1fr] items-start">

          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Mehr als 10 Jahre Erfahrung
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Seit über einem Jahrzehnt sind wir in der professionellen
              Gebäudereinigung aktiv – mit vielen Stammkunden, Notfall-Einsätzen
              und langfristigen Objektbetreuungen.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Unser Fokus liegt auf Schleswig-Holstein, Hamburg und Bremen, doch
              für ausgewählte Projekte sind wir auch bundesweit im Einsatz.
            </p>
          </div>

          {/* FIGUR + KARTE */}
          <div className="relative">
            {/* Mobile Image */}
            <div className="flex justify-center md:hidden mb-4">
              <Image
                src="/mn/services-vacuum.webp"
                alt="MN Glanzwerk – Staubsauger"
                width={260}
                height={260}
                className="w-24 h-auto drop-shadow-lg"
              />
            </div>

            {/* Kontaktkarte */}
            <div className="rounded-2xl bg-brand/95 text-slate-50 p-6 shadow-lg space-y-4">
              <h3 className="text-lg font-semibold">Ihr direkter Draht zu uns</h3>

              <p className="text-sm text-slate-100">
                Sie möchten mehr über uns erfahren oder ein Gespräch vereinbaren?
                Wir freuen uns auf Ihre Anfrage.
              </p>

              <div className="space-y-1 text-sm">
                <p className="font-medium">Telefon / WhatsApp</p>
                <p className="text-slate-100">0163 7885512</p>
              </div>

              <div className="space-y-1 text-sm">
                <p className="font-medium">Adresse</p>
                <p className="text-slate-100">
                  Kurhausstraße 46<br />23795 Bad Segeberg
                </p>
              </div>

              <p className="text-xs text-slate-200">
                Öffnungszeiten: Mo–Sa 08:00–20:00 Uhr · Notfälle 24/7 erreichbar
              </p>
            </div>

            {/* Desktop Image */}
            <div className="pointer-events-none absolute -top-8 -right-3 hidden md:block">
              <Image
                src="/mn/services-vacuum.webp"
                alt="MN Glanzwerk – Staubsauger"
                width={300}
                height={300}
                className="w-28 lg:w-36 h-auto drop-shadow-2xl"
              />
            </div>
          </div>

        </section>
      </AnimatedSection>

    </div>
  );
}
