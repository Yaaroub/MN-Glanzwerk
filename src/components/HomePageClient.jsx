// src/components/HomePageClient.jsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// Wird im Browser-Modul gespeichert und bleibt
// bestehen, solange die Seite nicht neu geladen wird.
let introShownThisSession = false;

export default function HomePageClient({ children }) {
  // Wenn das Modul frisch geladen wird (Seite neu geladen):
  // introShownThisSession === false → Intro an
  // Wenn schon einmal gezeigt (Navigation innerhalb der App):
  // introShownThisSession === true → Intro aus
  const [showIntro, setShowIntro] = useState(!introShownThisSession);

  useEffect(() => {
    if (introShownThisSession) {
      // Intro wurde in dieser Browser-Sitzung schon gezeigt
      setShowIntro(false);
      return;
    }

    // Markiere: Intro in dieser Session gezeigt
    introShownThisSession = true;

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2200); // ~2,2 Sekunden sichtbar

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="flex flex-col items-center text-center space-y-4"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/logo-mn.png"
                alt="MN GLANZWERK CLEANING COMPANY Logo"
                width={100}
                height={100}
                className="drop-shadow-md"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-brand tracking-wide">
                MN GLANZWERK CLEANING COMPANY
              </h1>
              <p className="text-slate-600 font-medium text-sm md:text-base max-w-md">
                Professionelle Gebäudereinigung in Schleswig-Holstein &amp; Bremen
              </p>

              <motion.div
                className="mt-4 h-1 w-32 rounded-full bg-brand"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
