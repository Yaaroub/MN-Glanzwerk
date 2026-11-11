// src/components/RigFigure.jsx
// Figur aus Grundkörper + beweglichen Teilen (erzeugt von scripts/build-mascots.mjs)
// plus Effekt-Ebenen: Blinzeln, Handy-Display, Sprühnebel, Staub, Wasserglanz, Schaum.
import Image from "next/image";
import rig from "@/src/data/mascotRig.json";

// Augen (Pixel in Figur-Koordinaten): [cx, cy, rx, ry], Hautfarbe fürs Lid
const EYES = {
  phone: { skin: "#f6b584", eyes: [[173, 119, 13, 17], [229, 122, 13, 15]], line: 3.5 },
  thumbs: { skin: "#fbc899", eyes: [[148, 96, 8, 11], [196, 96, 8, 11]], line: 2.5 },
  point: { skin: "#f8c9aa", eyes: [[213, 97, 8, 12], [263, 97, 8, 12]], line: 2.5 },
  pointR: { skin: "#f8c9aa", eyes: [[175, 97, 8, 12], [125, 97, 8, 12]], line: 2.5 },
  mop: { skin: "#fdc89f", eyes: [[181, 89, 6, 9], [218, 89, 6, 9]], line: 2 },
  vacuum: { skin: "#fdca95", eyes: [[226, 85, 8, 9], [263, 85, 8, 9]], line: 2 },
  hero: { skin: "#f8c088", eyes: [[151, 94, 7, 7], [197, 95, 7, 7]], line: 2 },
};

const BLINK_DELAY = { phone: 0.4, thumbs: 1.3, point: 2.1, pointR: 2.1, mop: 0.9, vacuum: 1.7, hero: 0 };

const pct = (v, total) => `${(v / total) * 100}%`;

function Blink({ fig }) {
  const r = rig[fig];
  const e = EYES[fig];
  if (!e) return null;
  return (
    <svg aria-hidden="true" viewBox={`0 0 ${r.w} ${r.h}`} className="pointer-events-none absolute inset-0 h-full w-full">
      {e.eyes.map(([cx, cy, rx, ry], i) => (
        <g key={i} className="rig-blink" style={{ animationDelay: `${BLINK_DELAY[fig]}s` }}>
          <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={e.skin} />
          <path
            d={`M${cx - rx} ${cy + ry * 0.25} Q${cx} ${cy + ry * 0.85} ${cx + rx} ${cy + ry * 0.25}`}
            stroke="#1f2937"
            strokeWidth={e.line}
            strokeLinecap="round"
            fill="none"
          />
        </g>
      ))}
    </svg>
  );
}

function Part({ fig, name, sizes, children }) {
  const r = rig[fig];
  const p = r.parts[name];
  return (
    <div className={`rig-part rig-${fig}-${name} absolute inset-0`} style={{ transformOrigin: p.origin }}>
      <Image src={p.src} alt="" width={r.w} height={r.h} sizes={sizes} draggable={false} className="pointer-events-none absolute inset-0 h-full w-full" />
      {children}
    </div>
  );
}

/* ---------- Effekt-Ebenen je Figur ---------- */

// Handy-Display: Nummer tippen → Anruf-Taste → am Ohr Schallwellen
function PhoneScreen() {
  const W = 409, H = 720;
  return (
    <>
      <div
        aria-hidden="true"
        className="rig-screen absolute overflow-hidden rounded-[10%] bg-gradient-to-b from-sky-50 to-sky-200 [container-type:inline-size]"
        style={{ left: pct(25, W), top: pct(126, H), width: pct(64, W), height: pct(112, H), rotate: "-3deg" }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-[6cqw] font-bold leading-none text-brand">
          <span className="rig-type rig-type-1 block overflow-hidden whitespace-nowrap font-mono text-[19cqw]">0163</span>
          <span className="rig-type rig-type-2 block overflow-hidden whitespace-nowrap font-mono text-[15cqw]">7885512</span>
          {/* Tastenfeld */}
          <span className="rig-keys grid grid-cols-3 gap-[4cqw]">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="block h-[9cqw] w-[9cqw] rounded-full bg-brand/25" style={{ animationDelay: `${(i * 0.37) % 1.2}s` }} />
            ))}
          </span>
        </div>
        {/* Anruf-Taste */}
        <span className="rig-callbtn absolute inset-x-0 bottom-[8%] mx-auto flex h-[30cqw] w-[30cqw] items-center justify-center rounded-full bg-emerald-500 text-white shadow">
          <svg viewBox="0 0 24 24" className="h-[60%] w-[60%]" fill="currentColor"><path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.6 3.6a1 1 0 01-.25 1z" /></svg>
        </span>
        {/* Tipp-Punkt */}
        <span className="rig-tap absolute h-[22cqw] w-[22cqw] rounded-full bg-white/80" style={{ left: "38%", top: "62%" }} />
      </div>
      {/* Schallwellen am Ohr */}
      <svg aria-hidden="true" viewBox="0 0 40 60" className="rig-waves absolute" style={{ left: pct(108, W), top: pct(96, H), width: pct(30, W) }}>
        <path d="M6 18 Q16 30 6 42" stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M16 10 Q32 30 16 50" stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M26 2 Q48 30 26 58" stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    </>
  );
}

function SprayMist() {
  // Düse der Sprühflasche bei ca. (176, 298)
  const W = 329, H = 720;
  const drops = [[-14, -6], [-18, 2], [-12, 6], [-20, -2], [-16, -10], [-22, 6], [-10, -2]];
  return (
    <div aria-hidden="true" className="absolute [container-type:inline-size]" style={{ left: pct(176, W), top: pct(298, H), width: "100%" }}>
      {drops.map(([dx, dy], i) => (
        <span
          key={i}
          className="rig-mist absolute block h-[3.4cqw] w-[3.4cqw] rounded-full bg-sky-300/80"
          style={{ "--dx": `${dx}cqw`, "--dy": `${dy}cqw`, animationDelay: `${i * 0.05}s` }}
        />
      ))}
    </div>
  );
}

function FloorGlints({ fig }) {
  const r = rig[fig];
  const spots = fig === "mop" ? [[20, 712], [70, 716], [120, 712], [165, 708]] : [[400, 712], [450, 716], [500, 708]];
  return (
    <svg aria-hidden="true" viewBox={`0 0 ${r.w} ${r.h}`} className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
      {fig === "mop" && <ellipse className="rig-wet" cx="95" cy="712" rx="105" ry="10" fill="#bae6fd" />}
      {spots.map(([x, y], i) => (
        <path
          key={i}
          className="rig-glint"
          style={{ animationDelay: `${i * 0.45}s` }}
          d={`M${x} ${y - 12} Q${x + 1.5} ${y - 1.5} ${x + 12} ${y} Q${x + 1.5} ${y + 1.5} ${x} ${y + 12} Q${x - 1.5} ${y + 1.5} ${x - 12} ${y} Q${x - 1.5} ${y - 1.5} ${x} ${y - 12}z`}
          fill="#38bdf8"
        />
      ))}
    </svg>
  );
}

function Dust() {
  // Staubkörner fliegen zur Bodendüse (ca. 455, 690)
  const W = 525, H = 720;
  const dust = [[60, -6], [80, -14], [50, -22], [95, -4], [70, -30], [110, -18]];
  return (
    <div aria-hidden="true" className="absolute [container-type:inline-size]" style={{ left: pct(470, W), top: pct(690, H), width: "100%" }}>
      {dust.map(([dx, dy], i) => (
        <span
          key={i}
          className="rig-dust absolute block h-[1.6cqw] w-[1.6cqw] rounded-full bg-slate-400"
          style={{ "--dx": `${dx * 0.18}cqw`, "--dy": `${dy * 0.18}cqw`, animationDelay: `${i * 0.23}s` }}
        />
      ))}
    </div>
  );
}

function Foam() {
  // Schaumblasen aus dem Eimer (Öffnung ca. x 250–390, y 530)
  const W = 400, H = 720;
  const foam = [[270, 8, 0], [300, 11, 0.7], [335, 7, 1.4], [360, 10, 0.35], [318, 6, 2.1]];
  return (
    <>
      {foam.map(([x, s, d], i) => (
        <span
          key={i}
          aria-hidden="true"
          className="rig-foam absolute block rounded-full border border-sky-300/70 bg-white/80"
          style={{ left: pct(x, W), top: pct(528, H), width: pct(s * 2, W), aspectRatio: "1", animationDelay: `${d}s` }}
        />
      ))}
    </>
  );
}

export default function RigFigure({ fig, alt, sizes, priority = false }) {
  const r = rig[fig] ?? rig.hero;
  const name = rig[fig] ? fig : "hero";

  return (
    <div className="relative" style={{ aspectRatio: `${r.w} / ${r.h}` }}>
      {(name === "mop" || name === "vacuum") && <FloorGlints fig={name} />}

      <Image
        src={r.base}
        alt={alt}
        width={r.w}
        height={r.h}
        sizes={sizes}
        priority={priority}
        draggable={false}
        className="pointer-events-none relative h-auto w-full"
      />
      {name !== "hero" && <Blink fig={name} />}

      {name === "phone" && (
        <Part fig="phone" name="arm" sizes={sizes}>
          <PhoneScreen />
        </Part>
      )}
      {name === "thumbs" && (
        <>
          <Part fig="thumbs" name="arm" sizes={sizes} />
          <SprayMist />
        </>
      )}
      {name === "point" && <Part fig="point" name="arm" sizes={sizes} />}
      {name === "pointR" && <Part fig="pointR" name="arm" sizes={sizes} />}
      {name === "mop" && <Part fig="mop" name="mop" sizes={sizes} />}
      {name === "vacuum" && (
        <>
          <Part fig="vacuum" name="nozzle" sizes={sizes} />
          <Dust />
        </>
      )}
      {name === "hero" && (
        <>
          <Part fig="hero" name="head" sizes={sizes}>
            <Blink fig="hero" />
          </Part>
          <Foam />
        </>
      )}
    </div>
  );
}
