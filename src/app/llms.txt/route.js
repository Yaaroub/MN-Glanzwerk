// /llms.txt – kompakte, maschinenlesbare Zusammenfassung für KI-Suchsysteme (LLM / GEO)
import { site, cities, faqs } from "@/src/lib/site";
import { services } from "@/src/data/services";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.description}

## Firmendaten
- Name: ${site.name} (Gebäudereinigung / Reinigungsfirma)
- Adresse: ${site.address.street}, ${site.address.zip} ${site.address.city}, ${site.address.region}, Deutschland
- Telefon / WhatsApp: ${site.phoneDisplay} (${site.phoneTel})
- E-Mail: ${site.email}
- Erreichbarkeit: ${site.hours.days} ${site.hours.opens}–${site.hours.closes} Uhr, ${site.hours.emergency}
- Website: ${site.url}
- Angebot anfordern: ${site.url}/contact

## Leistungen
${services.map((s) => `- ${s.title}: ${s.desc}`).join("\n")}

## Einsatzgebiet
${cities.join(", ")} – ganz Schleswig-Holstein, Hamburg und Bremen; größere Projekte deutschlandweit.

## Häufige Fragen
${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Seiten
- [Startseite](${site.url}/): Überblick über Leistungen und Einsatzgebiet
- [Kontakt & Angebot](${site.url}/contact): kostenloses Angebot anfordern
- [Projekte & Referenzen](${site.url}/projects): Fotos realer Einsätze
- [Über uns](${site.url}/about): Team, Werte und Erfahrung
- [Impressum](${site.url}/impressum)
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
