// src/app/datenschutz/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung – MN GLANZWERK CLEANING COMPANY",
  description:
    "Datenschutzerklärung der MN GLANZWERK CLEANING COMPANY für die Website und das Kontaktformular.",
};

export default function DatenschutzPage() {
  return (
    <div className="space-y-10 md:space-y-12">
      {/* Kopf */}
      <section className="max-w-3xl space-y-4">
        <p className="inline-flex items-center rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Datenschutz
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Datenschutzerklärung
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend
          informieren wir Sie darüber, welche Daten wir auf dieser Website
          verarbeiten, zu welchen Zwecken dies geschieht und welche Rechte Sie
          als betroffene Person haben.
        </p>
        <p className="text-[11px] text-slate-500">
          Hinweis: Diese Datenschutzerklärung ist eine Vorlage und ersetzt keine
          individuelle rechtliche Beratung. Bitte lassen Sie die Inhalte bei
          Bedarf von einer Rechtsanwältin / einem Rechtsanwalt prüfen.
        </p>
      </section>

      {/* Verantwortlicher */}
      <section className="space-y-3 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          1. Verantwortlicher
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-4 text-sm text-slate-700">
          <p className="font-semibold">MN GLANZWERK CLEANING COMPANY</p>
          <p>Kurhausstraße 46</p>
          <p>23795 Bad Segeberg</p>
          <p className="mt-2">
            Telefon: 0163 7885512
            <br />
            E-Mail:{" "}
            <span className="text-slate-800">
              {/* passe diese Adresse später an */}
              info@mn-glanzwerk.de
            </span>
          </p>
        </div>
      </section>

      {/* Hosting */}
      <section className="space-y-3 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          2. Hosting der Website
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Unsere Website wird bei einem externen Dienstleister (Webhoster)
          gehostet. Die Nutzung der Hosting-Leistungen erfolgt zum Zweck der
          sicheren, stabilen und effizienten Bereitstellung unseres
          Online-Angebots.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Im Rahmen des Hostings können insbesondere folgende Daten verarbeitet
          werden:
        </p>
        <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
          <li>IP-Adresse des Besuchers</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>aufgerufene Seiten / Dateien</li>
          <li>übertragene Datenmenge</li>
          <li>verwendeter Browser und Betriebssystem</li>
          <li>Referrer-URL (zuvor besuchte Seite)</li>
        </ul>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse) an einer sicheren und zuverlässigen
          Bereitstellung der Website.
        </p>
      </section>

      {/* Zugriffsdaten / Logfiles */}
      <section className="space-y-3 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          3. Zugriffsdaten (Server-Logfiles)
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Beim Aufruf unserer Website werden automatisch Informationen in
          sogenannten Server-Logfiles gespeichert. Diese Daten sind
          technischer Natur und ermöglichen keine direkte Zuordnung zu Ihrer
          Person.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Die Logfiles werden in der Regel für einen begrenzten Zeitraum
          gespeichert und anschließend gelöscht, sofern keine weitere
          Aufbewahrung zu Beweiszwecken im Falle von sicherheitsrelevanten
          Vorfällen erforderlich ist. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
          DSGVO (berechtigtes Interesse an der sicheren und stabilen
          Bereitstellung der Website).
        </p>
      </section>

      {/* Kontaktformular */}
      <section className="space-y-3 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          4. Kontaktaufnahme per Formular, Telefon oder E-Mail
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Wenn Sie uns über das auf dieser Website bereitgestellte
          Kontaktformular kontaktieren oder uns per Telefon, WhatsApp oder
          E-Mail eine Anfrage senden, verarbeiten wir die von Ihnen
          übermittelten personenbezogenen Daten zur Bearbeitung Ihrer Anfrage.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Dies können insbesondere folgende Angaben sein:
        </p>
        <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
          <li>Name</li>
          <li>Kontaktdaten (z. B. Telefonnummer, E-Mail-Adresse)</li>
          <li>Adresse / Einsatzort der Reinigung</li>
          <li>gewünschte Leistung und Terminwünsche</li>
          <li>weitere Angaben, die Sie im Freitext machen</li>
        </ul>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
          (Vertragsanbahnung bzw. Vertragserfüllung), soweit Ihre Anfrage auf
          den Abschluss eines Reinigungsvertrags gerichtet ist, sowie auf Art.
          6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) an der Bearbeitung
          allgemeiner Anfragen.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Die von Ihnen übermittelten Daten werden nur so lange gespeichert, wie
          sie zur Bearbeitung der Anfrage und zur Erfüllung gesetzlicher
          Aufbewahrungspflichten erforderlich sind.
        </p>
      </section>

      {/* WhatsApp-Hinweis */}
      <section className="space-y-3 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          5. Kommunikation über WhatsApp
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Wir bieten Ihnen die Möglichkeit, über WhatsApp mit uns zu
          kommunizieren. Anbieter ist die WhatsApp Ireland Limited, 4 Grand
          Canal Square, Grand Canal Harbour, Dublin 2, Irland.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Wenn Sie WhatsApp nutzen, gelten die Nutzungsbedingungen und
          Datenschutzrichtlinien von WhatsApp. Wir empfehlen, über WhatsApp
          keine besonders sensiblen Informationen zu übermitteln. Die
          Verarbeitung Ihrer Daten im Rahmen der Kommunikation erfolgt auf
          Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung/
          -erfüllung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          einer effizienten Kommunikation mit Kunden).
        </p>
      </section>

      {/* Cookies / Tracking (minimal) */}
      <section className="space-y-3 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          6. Cookies und vergleichbare Technologien
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Unsere Website verwendet derzeit keine Tracking-Cookies zu
          Analyse- oder Marketingzwecken. Es können jedoch technisch notwendige
          Cookies eingesetzt werden, die für den Betrieb der Website
          erforderlich sind, z. B. zur Bereitstellung sicherheitsrelevanter
          Funktionen oder zur Speicherung individueller Einstellungen.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an einem technisch einwandfreien Betrieb der
          Website).
        </p>
      </section>

      {/* Speicherdauer */}
      <section className="space-y-3 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          7. Speicherdauer
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Wir speichern personenbezogene Daten grundsätzlich nur so lange, wie
          dies zur Erreichung der jeweiligen Zwecke erforderlich ist oder wie
          es gesetzliche Aufbewahrungsfristen vorsehen. Nach Wegfall des
          Zwecks bzw. Ablauf der Fristen werden die Daten gemäß den
          gesetzlichen Vorgaben gelöscht oder anonymisiert.
        </p>
      </section>

      {/* Rechte der Betroffenen */}
      <section className="space-y-3 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          8. Ihre Rechte als betroffene Person
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten haben Sie
          nach der DSGVO insbesondere folgende Rechte:
        </p>
        <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>
            Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO), soweit
            die Verarbeitung auf Art. 6 Abs. 1 lit. e oder f DSGVO beruht
          </li>
          <li>
            Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)
          </li>
        </ul>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Wenn Sie eines Ihrer Rechte ausüben möchten, können Sie sich
          jederzeit an uns wenden. Die Kontaktdaten finden Sie oben unter
          „Verantwortlicher“.
        </p>
      </section>

      {/* SSL */}
      <section className="space-y-3 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          9. Datensicherheit (SSL-/TLS-Verschlüsselung)
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Unsere Website nutzt in der Regel eine SSL- bzw.
          TLS-Verschlüsselung, um die Übertragung vertraulicher Inhalte zu
          schützen, z. B. Anfragen, die Sie über das Kontaktformular an uns
          senden. Eine verschlüsselte Verbindung erkennen Sie in der Regel an
          dem Schloss-Symbol in der Adresszeile Ihres Browsers und daran, dass
          die Adresszeile mit „https://“ beginnt.
        </p>
      </section>

      {/* Änderungen / Stand */}
      <section className="space-y-3 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          10. Änderungen dieser Datenschutzerklärung
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Wir behalten uns vor, diese Datenschutzerklärung künftig anzupassen,
          damit sie stets den aktuellen rechtlichen Anforderungen entspricht
          oder um Änderungen unserer Leistungen in der Erklärung zu
          berücksichtigen.
        </p>
        <p className="text-sm text-slate-600">
          Stand dieser Datenschutzerklärung: {new Date().getFullYear()}
        </p>
      </section>
    </div>
  );
}
