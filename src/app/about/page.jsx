import Image from "next/image";

export const metadata = {
  title: "Über uns – MN GLANZWERK CLEANING COMPANY",
  description:
    "Erfahren Sie mehr über MN GLANZWERK CLEANING COMPANY – professionelle Reinigungsdienste mit über 10 Jahren Erfahrung.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Intro */}
      <section className="max-w-3xl space-y-4">
        <p className="inline-flex items-center rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Über uns
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Wer wir sind
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          MN GLANZWERK CLEANING COMPANY ist Ihr professioneller Partner für
          Gebäudereinigung mit Sitz in Bad Segeberg. Wir betreuen Privat- und
          Geschäftskunden in ganz Schleswig-Holstein, Hamburg und Bremen – und
          übernehmen auf Wunsch auch ausgewählte Projekte deutschlandweit.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Unser Anspruch ist es, höchste Qualität mit Zuverlässigkeit und
          Vertrauen zu verbinden. Wir arbeiten mit modernen Reinigungsmitteln,
          professioneller Ausstattung und einem qualifizierten Team, das seine
          Arbeit mit Sorgfalt und Verantwortung ausführt.
        </p>
      </section>

      {/* Mission & Werte */}
      <section className="grid gap-8 md:grid-cols-2 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Unsere Mission
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Sauberkeit ist für uns mehr als nur eine Dienstleistung – sie ist
            ein Versprechen. Wir möchten, dass Sie und Ihre Kunden, Gäste oder
            Patienten sich in Ihren Räumen wohlfühlen. Deshalb planen wir jede
            Reinigung individuell und führen sie so durch, als wären es unsere
            eigenen Räume.
          </p>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Ob einmalige Grundreinigung oder regelmäßige Unterhaltsreinigung –
            wir legen Wert auf langfristige Zusammenarbeit, offene Kommunikation
            und ehrliche Beratung.
          </p>
        </div>

        <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-6 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">Unsere Werte</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              • <span className="font-medium">Qualität:</span> Sorgfältige
              Arbeit bis ins Detail.
            </li>
            <li>
              • <span className="font-medium">Zuverlässigkeit:</span>{" "}
              Pünktlichkeit und Verbindlichkeit sind selbstverständlich.
            </li>
            <li>
              • <span className="font-medium">Vertrauen:</span> Diskrete und
              respektvolle Zusammenarbeit.
            </li>
            <li>
              • <span className="font-medium">Flexibilität:</span> Individuelle
              Lösungen für unterschiedliche Anforderungen.
            </li>
            <li>
              • <span className="font-medium">Transparenz:</span> Faire,
              nachvollziehbare Preise ohne versteckte Kosten.
            </li>
          </ul>
        </div>
      </section>

      {/* Für wen wir arbeiten */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">
          Für wen wir arbeiten
        </h2>
        <p className="text-sm md:text-base text-slate-600 max-w-3xl">
          Unsere Kunden sind so vielfältig wie die Objekte, die wir reinigen.
          Von privaten Haushalten über kleine und mittelständische Unternehmen
          bis hin zu Hotels, medizinischen Einrichtungen und Bildungsträgern –
          vor allem in Schleswig-Holstein, Hamburg und Bremen, bei Bedarf aber
          auch bundesweit – entwickeln wir für jede Umgebung ein passendes
          Reinigungskonzept.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Privathaushalte",
              desc: "Wohnungen, Häuser, Treppenhäuser & Mehrfamilienhäuser.",
            },
            {
              title: "Unternehmen",
              desc: "Büros, Ladenflächen, Kanzleien, Praxen & Studios.",
            },
            {
              title: "Einrichtungen",
              desc: "Hotels, Schulen, Kindergärten, Kliniken & Praxen.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-4 space-y-1"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Erfahrung / Timeline */}
      <section className="grid gap-8 md:grid-cols-[1.3fr,1fr] items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Mehr als 10 Jahre Erfahrung
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Seit über einem Jahrzehnt sind wir in der professionellen
            Gebäudereinigung tätig. In dieser Zeit haben wir zahlreiche
            Stammkunden gewonnen, Notfall-Einsätze übernommen und viele Objekte
            langfristig betreut – von Privatwohnungen über Büros bis hin zu
            größeren Liegenschaften.
          </p>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Heute sind wir vor allem in Schleswig-Holstein, Hamburg und Bremen
            im Einsatz, übernehmen aber auch ausgewählte Projekte in ganz
            Deutschland. Jede Immobilie, jeder Kunde und jede Situation ist
            anders – deshalb nehmen wir uns Zeit für Beratung und Planung, damit
            unsere Leistungen genau zu Ihren Anforderungen passen.
          </p>
        </div>

        {/* rechte Spalte: Figur + Karte */}
        <div className="relative">
          {/* Mobile: Figur oben zentriert */}
          <div className="flex justify-center md:hidden mb-3">
            <Image
              src="/mn/services-vacuum.webP"
              alt="MN Glanzwerk – Staubsauger"
              width={260}
              height={260}
              className="w-24 h-auto drop-shadow-lg"
            />
          </div>

          {/* Karte */}
          <div className="rounded-2xl bg-brand/95 text-slate-50 p-6 shadow-lg space-y-3">
            <h3 className="text-lg font-semibold">Ihr direkter Draht zu uns</h3>
            <p className="text-sm text-slate-100">
              Sie möchten mehr über uns erfahren oder ein persönliches Gespräch
              vereinbaren? Wir freuen uns auf Ihre Anfrage.
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
            <p className="text-xs text-slate-200">
              Öffnungszeiten: Mo–Sa 08:00–20:00 Uhr · Notfälle: 24 Stunden
              erreichbar
            </p>
          </div>

          {/* Desktop: Figur schwebt oben rechts über der Karte */}
          <div className="pointer-events-none absolute -top-8 -right-3 hidden md:block">
            <Image
              src="/mn/services-vacuum.webP"
              alt="MN Glanzwerk – Staubsauger"
              width={300}
              height={300}
              className="w-28 lg:w-36 h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
