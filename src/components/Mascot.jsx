// src/components/Mascot.jsx
// Animierte MN-Figur: Auftritt mit Sprung, Schweben & Atmen, Schatten,
// Funkeln, Seifenblasen, Sprechblase und Neigung zur Maus – alles CSS + wenig JS.
"use client";

import { useEffect, useRef, useState } from "react";
import RigFigure from "@/src/components/RigFigure";

const SPARKS = [
  { top: "8%", left: "6%", s: 18, d: 0 },
  { top: "22%", left: "88%", s: 14, d: 0.9 },
  { top: "48%", left: "-2%", s: 12, d: 1.6 },
  { top: "60%", left: "94%", s: 16, d: 0.4 },
  { top: "2%", left: "60%", s: 10, d: 2.1 },
];

const BUBBLES = [
  { left: "12%", s: 14, dur: 5.5, d: 0 },
  { left: "78%", s: 20, dur: 7, d: 1.4 },
  { left: "30%", s: 9, dur: 4.8, d: 2.6 },
  { left: "64%", s: 12, dur: 6.2, d: 3.3 },
  { left: "88%", s: 8, dur: 5, d: 0.8 },
];

function Spark({ size, color = "#38bdf8" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 0c.6 5.4 3.6 9.6 12 12-8.4 2.4-11.4 6.6-12 12-.6-5.4-3.6-9.6-12-12 8.4-2.4 11.4-6.6 12-12z" />
    </svg>
  );
}

/**
 * @param {"hero"|"mop"|"vacuum"|"thumbs"|"point"|"phone"} fig
 * @param {string} speech  Text der Sprechblase (optional)
 * @param {"left"|"right"} speechSide
 * @param {boolean} dark   Effekte für dunklen Hintergrund
 * @param {boolean} flip   Figur spiegeln
 */
export default function Mascot({
  fig = "hero",
  alt,
  speech,
  speechSide = "left",
  className = "",
  sizes = "(max-width: 768px) 45vw, 280px",
  priority = false,
  dark = false,
  flip = false,
  delay = 0,
  effects = true,
}) {
  const wrap = useRef(null);
  const tilt = useRef(null);
  const [seen, setSeen] = useState(false);

  // Auftritt beim ersten Sichtkontakt; Bewegungen nur laufen lassen, solange sichtbar
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        el.classList.toggle("is-on", e.isIntersecting);
        if (e.isIntersecting) setSeen(true);
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Neigung Richtung Maus (nur Desktop, nur ohne reduced-motion)
  useEffect(() => {
    const el = wrap.current;
    const t = tilt.current;
    if (!el || !t) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
        const dy = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
        t.style.transform = `perspective(900px) rotateY(${dx * 14}deg) rotateX(${-dy * 8}deg) translateX(${dx * 10}px)`;
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      ref={wrap}
      className={`mascot relative select-none ${seen ? "is-in" : ""} ${className}`}
      style={{ "--m-delay": `${delay}s` }}
    >
      {effects && (<>
      {/* Leuchtender Hintergrund-Kreis */}
      <div
        aria-hidden="true"
        className={`mascot-halo absolute left-1/2 top-[42%] -z-0 aspect-square w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full ${
          dark ? "bg-sky-400/25" : "bg-gradient-to-br from-sky-200/70 to-brand/10"
        } blur-2xl`}
      />
      <div
        aria-hidden="true"
        className={`mascot-ring absolute left-1/2 top-[42%] aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed ${
          dark ? "border-white/20" : "border-brand/15"
        }`}
      />

      {/* Seifenblasen */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-[10%] top-0 overflow-visible">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="mascot-bubble"
            style={{ left: b.left, width: b.s, height: b.s, animationDuration: `${b.dur}s`, animationDelay: `${b.d}s` }}
          />
        ))}
      </div>

      </>)}

      {/* Bodenschatten */}
      <div aria-hidden="true" className="mascot-shadow absolute bottom-0 left-1/2 h-4 w-[55%] rounded-[50%] bg-slate-900/25 blur-md" />

      {/* Figur */}
      <div ref={tilt} className="mascot-tilt relative transition-transform duration-300 ease-out">
        <div className="mascot-pop">
          <div className="mascot-idle">
            <div className={`relative drop-shadow-[0_18px_25px_rgba(15,40,60,0.25)] ${flip ? "-scale-x-100" : ""}`}>
              <RigFigure fig={fig} alt={alt} sizes={sizes} priority={priority} />
            </div>
          </div>
        </div>
      </div>

      {/* Funkeln */}
      {effects && SPARKS.map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="mascot-spark absolute"
          style={{ top: s.top, left: s.left, animationDelay: `${s.d}s` }}
        >
          <Spark size={s.s} color={dark ? "#ffffff" : i % 2 ? "#38bdf8" : "#114c68"} />
        </span>
      ))}

      {/* Handy-Figur: Sprechblase läuft synchron zum Anruf */}
      {fig === "phone" && effects && (
        <div
          aria-hidden="true"
          className={`call-bubble absolute top-[2%] z-10 grid whitespace-nowrap rounded-2xl px-3.5 py-2 text-xs font-semibold shadow-xl sm:text-sm ${
            speechSide === "left" ? "right-[70%] rounded-br-sm" : "left-[70%] rounded-bl-sm"
          } ${dark ? "bg-white text-brand" : "bg-brand text-white"}`}
        >
          <span className="call-line call-line-1 [grid-area:1/1]">
            📱 <span className="call-digits font-mono">0163 7885512</span>
          </span>
          <span className="call-line call-line-2 [grid-area:1/1]">Tuut… tuut… 📞</span>
          <span className="call-line call-line-3 [grid-area:1/1]">Moin, MN GLANZWERK! 👋</span>
        </div>
      )}

      {/* Sprechblase */}
      {speech && fig !== "phone" && (
        <div
          className={`mascot-speech absolute top-[4%] z-10 max-w-[12rem] rounded-2xl px-3.5 py-2 text-xs font-semibold shadow-xl sm:text-sm ${
            speechSide === "left" ? "right-[72%] rounded-br-sm" : "left-[72%] rounded-bl-sm"
          } ${dark ? "bg-white text-brand" : "bg-brand text-white"}`}
        >
          {speech}
        </div>
      )}
    </div>
  );
}
