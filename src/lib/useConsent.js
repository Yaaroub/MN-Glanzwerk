"use client";

import { useEffect, useState } from "react";

export function useConsent() {
  const [consent, setConsent] = useState({
    essential: true,
    analytics: false,
    maps: false,
  });

  const loadConsent = () => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored) {
      try {
        setConsent(JSON.parse(stored));
      } catch {
        // falls kaputt → ignorieren
      }
    }
  };

  useEffect(() => {
    loadConsent();
    window.addEventListener("cookie-updated", loadConsent);
    return () => window.removeEventListener("cookie-updated", loadConsent);
  }, []);

  return consent;
}
