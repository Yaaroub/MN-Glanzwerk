// src/app/projects/page.jsx
import ProjectsPageClient from "./ProjectsPage";
import PageHero from "@/src/components/PageHero";

export const metadata = {
  title: "Projekte & Referenzen – Fenster-, Grund- & Badreinigung",
  description:
    "Fotos echter Einsätze von MN GLANZWERK: Fensterreinigung, Grundreinigung, Bad- & WC-Reinigung und Bodenpflege in Bad Segeberg und Umgebung.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return (
    <>
      <PageHero
        path="/projects"
        crumb="Projekte"
        eyebrow="Projekte & Referenzen"
        title="Einblick in unsere Arbeit."
        intro="Eine Auswahl realer Einsätze: Fensterreinigung, Grundreinigung, Holzbodenpflege, hygienische Badreinigung und ein Eventsaal – fotografiert direkt vor Ort."
        fig="thumbs"
        speech="Seht selbst! ✨"
      />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 md:pt-14">
        <ProjectsPageClient />
      </div>
    </>
  );
}
