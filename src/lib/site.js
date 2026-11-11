// src/lib/site.js
// Zentrale Firmendaten – EINE Quelle für Metadaten, JSON-LD, Footer & llms.txt

export const site = {
  name: "MN GLANZWERK",
  legalName: "MN GLANZWERK – Einzelunternehmen",
  tagline: "Professionelle Gebäudereinigung in Norddeutschland",
  url: "https://www.mn-glanzwerk.de",
  phoneDisplay: "0163 7885512",
  phoneTel: "+491637885512",
  whatsapp: "https://wa.me/491637885512",
  email: "kontakt@mn-glanzwerk.de",
  address: {
    street: "Kurhausstraße 46",
    zip: "23795",
    city: "Bad Segeberg",
    region: "Schleswig-Holstein",
    country: "DE",
  },
  geo: { lat: 53.9372259, lng: 10.3058085 },
  hours: { days: "Mo–Sa", opens: "08:00", closes: "20:00", emergency: "Notdienst 24/7" },
  social: [
    "https://www.instagram.com/glanzwerkglanzwerk/",
    "https://www.tiktok.com/@glanzwerk.glanzwe",
  ],
  description:
    "MN GLANZWERK aus Bad Segeberg: professionelle Gebäudereinigung, Büroreinigung, Unterhaltsreinigung, Fensterreinigung, Grundreinigung sowie Umzugs- & Endreinigung in Schleswig-Holstein, Hamburg und Bremen – feste Ansprechpartner, faire Festpreise, Notdienst 24/7.",
};

export const cities = [
  "Bad Segeberg",
  "Kiel",
  "Lübeck",
  "Hamburg",
  "Neumünster",
  "Norderstedt",
  "Bad Oldesloe",
  "Kaltenkirchen",
  "Henstedt-Ulzburg",
  "Plön",
  "Eutin",
  "Preetz",
  "Schwentintal",
  "Flensburg",
  "Bremen",
];

export const faqs = [
  {
    q: "Welche Reinigungsleistungen bietet MN GLANZWERK an?",
    a: "Wir bieten Gebäudereinigung, Büro- und Firmenreinigung, Unterhaltsreinigung, Grundreinigung, Fensterreinigung, Umzugs- und Endreinigung, Teppich- und Polsterreinigung, Hotel- und Objektservice, Praxis- und Hygienereinigung sowie die Reinigung von Kitas und Schulen an.",
  },
  {
    q: "In welchen Regionen ist MN GLANZWERK tätig?",
    a: "Unser Firmensitz ist in Bad Segeberg. Wir reinigen in ganz Schleswig-Holstein – u. a. Kiel, Lübeck, Neumünster, Norderstedt, Plön und Eutin – sowie in Hamburg und Bremen. Größere Projekte übernehmen wir auf Wunsch deutschlandweit.",
  },
  {
    q: "Was kostet eine Reinigung bei MN GLANZWERK?",
    a: "Der Preis hängt von Objektgröße, Verschmutzungsgrad und Intervall ab. Sie erhalten nach einer kurzen Anfrage ein kostenloses, unverbindliches Festpreisangebot – transparent und ohne versteckte Kosten.",
  },
  {
    q: "Wie schnell kann MN GLANZWERK einen Reinigungstermin anbieten?",
    a: "In der Regel innerhalb weniger Tage. Für dringende Fälle bieten wir einen Notdienst an, der 24 Stunden am Tag erreichbar ist.",
  },
  {
    q: "Wie erreiche ich MN GLANZWERK?",
    a: "Telefonisch oder per WhatsApp unter 0163 7885512 (Mo–Sa 08:00–20:00 Uhr, Notfälle 24/7), per E-Mail an kontakt@mn-glanzwerk.de oder über das Kontaktformular auf www.mn-glanzwerk.de/contact.",
  },
  {
    q: "Reinigt MN GLANZWERK auch außerhalb der Geschäftszeiten?",
    a: "Ja. Büros, Praxen und Gewerbeflächen reinigen wir auf Wunsch früh morgens, abends oder am Wochenende, damit Ihr Betrieb ungestört weiterläuft.",
  },
];
