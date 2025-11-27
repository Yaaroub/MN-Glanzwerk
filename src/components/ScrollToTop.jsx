// src/components/ScrollToTop.jsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Scroll-Restore von Next/Browser ausschalten
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Immer hart nach oben springen – kein smooth
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}
