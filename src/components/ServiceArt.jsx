// src/components/ServiceArt.jsx
// Animierte Leistungs-Grafiken. Gesteuert durch --p (0 → 1, Scroll-Fortschritt aus <ScrollProgress>):
// beim Scrollen wird aus „schmutzig“ Schritt für Schritt „sauber“. Kleine Dauer-Animationen halten sie lebendig.

const B = "#114c68";
const S = "#2a6f94";
const A = "#38bdf8";
const L = "#e0f2fe";
const L2 = "#bae6fd";
const W = "#ffffff";
const DIRT = "#8b6b4a";
const G = "#94a3b8";

// Rampe 0 → 1 zwischen Scroll-Fortschritt a und b
const k = (a, b) => `clamp(0, calc((var(--p) - ${a}) / ${b - a}), 1)`;
const inv = (a, b) => `calc(1 - ${k(a, b)})`;
const px = (expr, n) => `calc(${expr} * ${n}px)`;

function Spark({ x, y, r = 8, at = 0.82, d = 0, c = A }) {
  return (
    <g style={{ transform: `scale(${k(at, at + 0.12)})` }} className="o">
      <path
        className="sa-twinkle o"
        style={{ animationDelay: `${d}s` }}
        d={`M${x} ${y - r}Q${x + r * 0.15} ${y - r * 0.15} ${x + r} ${y}Q${x + r * 0.15} ${y + r * 0.15} ${x} ${y + r}Q${x - r * 0.15} ${y + r * 0.15} ${x - r} ${y}Q${x - r * 0.15} ${y - r * 0.15} ${x} ${y - r}z`}
        fill={c}
      />
    </g>
  );
}

function Floor({ y = 182 }) {
  return (
    <>
      <rect x="0" y={y} width="320" height={200 - y} fill={L} />
      <line x1="0" y1={y} x2="320" y2={y} stroke={L2} strokeWidth="2" />
    </>
  );
}

/* 1 ─ Büro: Tuch wischt den Schreibtisch, Flecken verschwinden, Bildschirm zeigt ✓ */
function Office() {
  const dirt = [[60, 128, 9], [110, 131, 7], [150, 127, 10], [200, 130, 6], [90, 188, 12], [230, 190, 10]];
  return (
    <>
      <Floor />
      {/* Fenster */}
      <rect x="214" y="18" width="84" height="66" rx="6" fill={L2} stroke={S} strokeWidth="3" />
      <line x1="256" y1="18" x2="256" y2="84" stroke={S} strokeWidth="3" />
      <circle className="sa-float" cx="280" cy="38" r="9" fill="#fde68a" />
      {/* Schreibtisch */}
      <rect x="30" y="134" width="210" height="9" rx="3" fill={S} />
      <rect x="42" y="143" width="7" height="39" fill={B} />
      <rect x="220" y="143" width="7" height="39" fill={B} />
      {/* Monitor */}
      <rect x="70" y="72" width="88" height="56" rx="6" fill={B} />
      <rect x="76" y="78" width="76" height="44" rx="3" fill={L} />
      <rect x="108" y="128" width="12" height="6" fill={B} />
      <g style={{ opacity: inv(0.2, 0.6) }}>
        <ellipse cx="96" cy="95" rx="12" ry="7" fill={G} opacity=".55" />
        <ellipse cx="130" cy="108" rx="9" ry="5" fill={G} opacity=".45" />
      </g>
      <path d="M100 100l9 9 18-18" fill="none" stroke="#10b981" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: k(0.7, 0.85) }} />
      <rect className="sa-blink" x="82" y="84" width="3" height="10" fill={B} style={{ opacity: inv(0.65, 0.7) }} />
      {/* Pflanze */}
      <rect x="186" y="112" width="20" height="22" rx="3" fill="#f97316" />
      <g className="sa-sway o" style={{ transformOrigin: "50% 100%" }}>
        <path d="M196 112c-14-10-16-26-12-32 8 6 12 18 12 32zM196 112c12-12 20-22 18-30-10 6-16 18-18 30z" fill="#10b981" />
      </g>
      {/* Tasse */}
      <rect x="164" y="118" width="14" height="16" rx="3" fill={W} stroke={S} strokeWidth="2" />
      <path className="sa-steam" d="M168 112c-3-4 3-6 0-10M174 112c-3-4 3-6 0-10" stroke={G} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Schmutz */}
      {dirt.map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.45} fill={DIRT} style={{ opacity: inv(0.1 + i * 0.09, 0.25 + i * 0.09) }} />
      ))}
      {/* Wischtuch fährt über den Tisch */}
      <g style={{ transform: `translateX(${px(k(0.05, 0.75), 180)})`, opacity: inv(0.8, 0.9) }}>
        <rect x="30" y="118" width="34" height="16" rx="6" fill={A} />
        <path d="M34 122h26M34 127h26" stroke={W} strokeWidth="2" opacity=".7" />
        <circle className="sa-bubble o" cx="40" cy="114" r="4" fill={W} stroke={L2} />
      </g>
      <Spark x={60} y={60} r={9} />
      <Spark x={170} y={66} r={7} d={0.6} at={0.86} />
      <Spark x={140} y={170} r={8} d={1.1} at={0.9} />
    </>
  );
}

/* 2 ─ Unterhaltsreinigung: Kalender hakt Termine ab, Uhr dreht sich */
function Routine() {
  const cells = Array.from({ length: 12 }, (_, i) => [52 + (i % 4) * 36, 74 + Math.floor(i / 4) * 32]);
  return (
    <>
      <Floor y={190} />
      <rect x="38" y="30" width="160" height="148" rx="12" fill={W} stroke={L2} strokeWidth="3" />
      <rect x="38" y="30" width="160" height="30" rx="12" fill={B} />
      <rect x="38" y="48" width="160" height="12" fill={B} />
      <circle cx="74" cy="30" r="5" fill={L2} />
      <circle cx="162" cy="30" r="5" fill={L2} />
      <text x="118" y="51" textAnchor="middle" fontSize="13" fontWeight="700" fill={W}>Reinigungsplan</text>
      {cells.map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="28" height="24" rx="5" fill={L} />
          <g className="o" style={{ transform: `scale(${k(0.04 + i * 0.06, 0.1 + i * 0.06)})` }}>
            <rect x={x} y={y} width="28" height="24" rx="5" fill="#10b981" />
            <path d={`M${x + 8} ${y + 12}l5 5 9-10`} fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      ))}
      {/* Uhr */}
      <g transform="translate(258 80)">
        <circle r="40" fill={W} stroke={S} strokeWidth="5" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1="0" y1="-33" x2="0" y2={i % 3 ? -30 : -27} stroke={B} strokeWidth="2.5" transform={`rotate(${i * 30})`} />
        ))}
        <line x1="0" y1="0" x2="0" y2="-18" stroke={B} strokeWidth="5" strokeLinecap="round" style={{ transform: `rotate(calc(var(--p) * 120deg))` }} />
        <line x1="0" y1="0" x2="0" y2="-28" stroke={A} strokeWidth="3.5" strokeLinecap="round" style={{ transform: `rotate(calc(var(--p) * 1080deg))` }} />
        <circle r="4" fill={B} />
      </g>
      {/* Wiederholungs-Pfeile */}
      <g transform="translate(258 150)">
        <g className="sa-spin">
          <path d="M-16 -4a16 16 0 0 1 28-8" fill="none" stroke={A} strokeWidth="5" strokeLinecap="round" />
          <path d="M16 4a16 16 0 0 1-28 8" fill="none" stroke={A} strokeWidth="5" strokeLinecap="round" />
          <path d="M14 -18l-1 8-8-2z M-14 18l1-8 8 2z" fill={A} />
        </g>
      </g>
      <Spark x={214} y={30} r={8} at={0.75} />
      <Spark x={296} y={130} r={7} d={0.7} />
    </>
  );
}

/* 3 ─ Gebäude: Fassaden-Gondel fährt herunter, Fenster werden blitzblank */
function Building() {
  const rows = 4, cols = 3;
  return (
    <>
      <Floor y={186} />
      <g className="sa-drift"><ellipse cx="50" cy="34" rx="22" ry="9" fill={W} /><ellipse cx="66" cy="30" rx="14" ry="9" fill={W} /></g>
      <g className="sa-drift" style={{ animationDelay: "-6s" }}><ellipse cx="276" cy="50" rx="20" ry="8" fill={W} /></g>
      {/* Bäume */}
      <circle className="sa-sway o" cx="40" cy="150" r="22" fill="#10b981" style={{ transformOrigin: "50% 100%" }} />
      <rect x="37" y="160" width="6" height="26" fill="#92400e" />
      <circle className="sa-sway o" cx="282" cy="156" r="18" fill="#34d399" style={{ transformOrigin: "50% 100%", animationDelay: "-1.5s" }} />
      <rect x="279" y="164" width="6" height="22" fill="#92400e" />
      {/* Haus */}
      <rect x="92" y="34" width="136" height="152" rx="4" fill={S} />
      <rect x="86" y="26" width="148" height="12" rx="3" fill={B} />
      {Array.from({ length: rows * cols }).map((_, i) => {
        const r = Math.floor(i / cols), c = i % cols;
        const x = 106 + c * 38, y = 48 + r * 30;
        const a = 0.12 + r * 0.17;
        return (
          <g key={i}>
            <rect x={x} y={y} width="28" height="21" rx="2" fill="#64748b" />
            <path d={`M${x + 3} ${y + 4}l10 12M${x + 14} ${y + 3}l9 10`} stroke={DIRT} strokeWidth="3" opacity=".7" />
            <g style={{ opacity: k(a, a + 0.12) }}>
              <rect x={x} y={y} width="28" height="21" rx="2" fill={L2} />
              <path className="sa-glint" style={{ animationDelay: `${i * 0.3}s` }} d={`M${x + 5} ${y + 16}l8-11M${x + 11} ${y + 17}l6-8`} stroke={W} strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>
        );
      })}
      {r_door()}
      {/* Gondel */}
      <g style={{ transform: `translateY(${px(k(0.05, 0.8), 122)})`, opacity: inv(0.86, 0.95) }}>
        <line x1="104" y1="-140" x2="104" y2="40" stroke={B} strokeWidth="2" />
        <line x1="216" y1="-140" x2="216" y2="40" stroke={B} strokeWidth="2" />
        <rect x="96" y="40" width="128" height="9" rx="2" fill="#f59e0b" />
        <rect x="96" y="49" width="128" height="4" fill="#b45309" />
        {/* Fensterputzer */}
        <g className="sa-wipe">
          <circle cx="160" cy="16" r="7" fill="#fdc89f" />
          <rect x="153" y="23" width="14" height="17" rx="4" fill={A} />
          <path d="M166 28l14-10" stroke="#fdc89f" strokeWidth="4" strokeLinecap="round" />
          <rect x="176" y="10" width="4" height="14" rx="1" fill={B} />
        </g>
      </g>
      <Spark x={240} y={70} r={8} at={0.85} />
      <Spark x={80} y={90} r={7} d={0.8} at={0.9} />
    </>
  );
}
function r_door() {
  return (
    <>
      <rect x="146" y="160" width="28" height="26" rx="3" fill={B} />
      <circle cx="168" cy="174" r="2" fill="#fde68a" />
    </>
  );
}

/* 4 ─ Umzug/Endreinigung: Kartons fahren raus, Mopp wischt, Schlüssel zur Übergabe */
function Moving() {
  const dirt = [[80, 188, 14], [150, 192, 10], [210, 187, 13], [262, 191, 9]];
  return (
    <>
      <rect x="0" y="0" width="320" height="176" fill="#f8fafc" />
      <Floor y={176} />
      <rect x="200" y="30" width="70" height="58" rx="4" fill={L2} stroke={S} strokeWidth="3" />
      <line x1="235" y1="30" x2="235" y2="88" stroke={S} strokeWidth="3" />
      {/* Kartons */}
      <g style={{ transform: `translateX(${px(k(0.05, 0.4), 300)})`, opacity: inv(0.3, 0.42) }}>
        {[[30, 126, 50, 50], [84, 140, 38, 36], [40, 88, 40, 38]].map(([x, y, w, h], i) => (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} rx="3" fill="#d4a373" stroke="#a16207" strokeWidth="2" />
            <path d={`M${x} ${y + 10}h${w}M${x + w / 2} ${y}v10`} stroke="#a16207" strokeWidth="2" />
          </g>
        ))}
      </g>
      {/* Schmutz am Boden */}
      {dirt.map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.35} fill={DIRT} style={{ opacity: inv(0.4 + i * 0.08, 0.5 + i * 0.08) }} />
      ))}
      {/* Nasser Glanz hinter dem Mopp */}
      <rect x="40" y="182" width="250" height="12" rx="6" fill={L2} className="o" style={{ transformOrigin: "0% 50%", transform: `scaleX(${k(0.35, 0.82)})`, opacity: 0.8 }} />
      {/* Mopp */}
      <g style={{ transform: `translateX(${px(k(0.35, 0.82), 220)})` }}>
        <g className="sa-mop o" style={{ transformOrigin: "50% 100%" }}>
          <line x1="70" y1="96" x2="56" y2="184" stroke={B} strokeWidth="5" strokeLinecap="round" />
          <rect x="36" y="182" width="42" height="7" rx="3" fill={S} />
          <path d="M38 189v6M46 189v6M54 189v6M62 189v6M70 189v6" stroke={W} strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
      {/* Schlüssel */}
      <g style={{ opacity: k(0.82, 0.92) }}>
        <g className="sa-swing" style={{ transformOrigin: "120px 26px" }}>
          <line x1="120" y1="26" x2="120" y2="52" stroke={G} strokeWidth="2" />
          <circle cx="120" cy="62" r="11" fill="none" stroke="#f59e0b" strokeWidth="5" />
          <path d="M120 73v26M120 88h8M120 96h6" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
          <rect x="128" y="50" width="34" height="16" rx="4" fill="#10b981" />
          <text x="145" y="62" textAnchor="middle" fontSize="10" fontWeight="700" fill={W}>OK ✓</text>
        </g>
      </g>
      <Spark x={290} y={150} r={8} at={0.86} />
      <Spark x={180} y={120} r={7} d={0.7} at={0.9} />
    </>
  );
}

/* 5 ─ Praxis/Hygiene: Desinfektion – Keime verschwinden, Schutzschild erscheint */
function Clinic() {
  const germs = [[150, 60, 13], [196, 48, 10], [236, 84, 14], [180, 118, 11], [244, 140, 10], [138, 150, 9]];
  return (
    <>
      <Floor y={190} />
      {/* Sprühflasche */}
      <g className="sa-squeeze o" style={{ transformOrigin: "50% 100%" }}>
        <rect x="34" y="96" width="48" height="84" rx="10" fill={W} stroke={S} strokeWidth="3" />
        <rect x="44" y="124" width="28" height="30" rx="4" fill={L2} />
        <path d="M58 132v14M51 139h14" stroke={B} strokeWidth="4" strokeLinecap="round" />
        <rect x="46" y="74" width="24" height="24" rx="3" fill={B} />
        <path d="M70 80h22v8H70z" fill={B} />
        <path d="M58 98l-12 18" stroke={B} strokeWidth="5" strokeLinecap="round" />
      </g>
      {/* Sprühnebel */}
      <g style={{ opacity: inv(0.75, 0.85) }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={i} className="sa-mist o" cx="96" cy="84" r={3 + (i % 3)} fill={A} style={{ "--mx": `${40 + i * 18}px`, "--my": `${(i % 3) * 14 - 16}px`, animationDelay: `${i * 0.18}s` }} />
        ))}
      </g>
      {/* Keime */}
      {germs.map(([x, y, r], i) => (
        <g key={i} className="o" style={{ transform: `scale(${inv(0.1 + i * 0.1, 0.24 + i * 0.1)})` }}>
          <g className="sa-wobble o" style={{ animationDelay: `${i * 0.25}s` }}>
            {Array.from({ length: 8 }).map((_, j) => (
              <line key={j} x1={x} y1={y} x2={x + Math.cos((j * Math.PI) / 4) * (r + 6)} y2={y + Math.sin((j * Math.PI) / 4) * (r + 6)} stroke="#65a30d" strokeWidth="3" strokeLinecap="round" />
            ))}
            <circle cx={x} cy={y} r={r} fill="#84cc16" />
            <circle cx={x - r * 0.35} cy={y - r * 0.15} r={r * 0.18} fill="#1f2937" />
            <circle cx={x + r * 0.35} cy={y - r * 0.15} r={r * 0.18} fill="#1f2937" />
            <path d={`M${x - r * 0.35} ${y + r * 0.4}q${r * 0.35} -${r * 0.3} ${r * 0.7} 0`} stroke="#1f2937" strokeWidth="2" fill="none" />
          </g>
        </g>
      ))}
      {/* Schutzschild */}
      <g className="o" style={{ transform: `scale(${k(0.72, 0.9)})` }}>
        <path d="M200 40l46 16v34c0 32-22 52-46 62-24-10-46-30-46-62V56z" fill={B} />
        <path d="M200 52l34 12v26c0 24-16 40-34 48-18-8-34-24-34-48V64z" fill={S} />
        <path d="M193 74h14v14h14v14h-14v14h-14v-14h-14V88h14z" fill={W} />
        <circle cx="236" cy="132" r="14" fill="#10b981" stroke={W} strokeWidth="3" />
        <path d="M229 132l5 5 9-10" stroke={W} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <Spark x={276} y={44} r={9} at={0.86} />
      <Spark x={140} y={60} r={7} d={0.5} at={0.9} />
    </>
  );
}

/* 6 ─ Hotel: Decke glättet sich, Kissen fallen aufs Bett, 5 Sterne leuchten auf */
function HotelArt() {
  const star = (cx, cy, r) =>
    Array.from({ length: 10 })
      .map((_, i) => {
        const a = (Math.PI / 5) * i - Math.PI / 2;
        const rr = i % 2 ? r * 0.45 : r;
        return `${(cx + Math.cos(a) * rr).toFixed(1)},${(cy + Math.sin(a) * rr).toFixed(1)}`;
      })
      .join(" ");
  return (
    <>
      <Floor y={180} />
      {/* Sterne */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <polygon points={star(100 + i * 30, 30, 11)} fill={L2} />
          <g className="o" style={{ transform: `scale(${k(0.55 + i * 0.07, 0.62 + i * 0.07)})` }}>
            <polygon points={star(100 + i * 30, 30, 11)} fill="#fbbf24" />
          </g>
        </g>
      ))}
      {/* Bett */}
      <rect x="44" y="70" width="18" height="110" rx="4" fill={B} />
      <rect x="62" y="84" width="200" height="16" rx="6" fill={S} />
      <rect x="62" y="116" width="210" height="40" rx="8" fill={W} stroke={L2} strokeWidth="3" />
      <rect x="62" y="156" width="210" height="12" rx="3" fill={B} />
      <rect x="66" y="168" width="8" height="12" fill={B} />
      <rect x="260" y="168" width="8" height="12" fill={B} />
      {/* Kissen */}
      {[0, 1].map((i) => (
        <g key={i} style={{ transform: `translateY(${px(inv(0.25 + i * 0.1, 0.42 + i * 0.1), -90)})`, opacity: k(0.25 + i * 0.1, 0.32 + i * 0.1) }}>
          <rect x={72 + i * 46} y="98" width="42" height="22" rx="10" fill={W} stroke={L2} strokeWidth="3" />
        </g>
      ))}
      {/* Decke: zerknittert → glatt */}
      <g
        className="o"
        style={{
          transformOrigin: "100% 100%",
          transform: `translate(${px(inv(0.05, 0.45), 26)}, ${px(inv(0.05, 0.45), -8)}) rotate(calc(${inv(0.05, 0.45)} * -10deg))`,
        }}
      >
        <path d="M150 118h124a6 6 0 0 1 6 6v34H150z" fill={A} />
        <path d="M150 118h124a6 6 0 0 1 6 6v6H150z" fill={W} opacity=".8" />
        <path d="M168 136q16 -8 32 0t32 0t32 0" stroke={W} strokeWidth="2" fill="none" style={{ opacity: inv(0.3, 0.45) }} />
      </g>
      {/* Pralinen-Gruß */}
      <rect x="128" y="104" width="12" height="8" rx="2" fill="#92400e" style={{ opacity: k(0.85, 0.95) }} />
      {/* Nachttisch + Klingel */}
      <rect x="282" y="132" width="32" height="48" rx="4" fill={S} />
      <g className="sa-ring o" style={{ transformOrigin: "50% 100%" }}>
        <path d="M286 130a12 12 0 0 1 24 0z" fill="#fbbf24" />
        <rect x="284" y="129" width="28" height="4" rx="2" fill="#b45309" />
        <circle cx="298" cy="115" r="2.5" fill="#b45309" />
      </g>
      <Spark x={36} y={52} r={8} at={0.86} />
      <Spark x={256} y={60} r={7} d={0.6} at={0.9} />
    </>
  );
}

/* 7 ─ Polster/Sofa: Polster-Düse fährt übers Sofa, Flecken lösen sich auf */
function SofaArt() {
  const stains = [[86, 120, 12], [140, 128, 9], [188, 118, 13], [236, 126, 10], [118, 150, 8]];
  const start = (x) => 0.1 + ((x - 50) / 220) * 0.7;
  return (
    <>
      <Floor y={180} />
      {/* Teppich */}
      <ellipse cx="160" cy="188" rx="130" ry="9" fill={L2} />
      {/* Sofa */}
      <rect x="40" y="70" width="240" height="56" rx="16" fill={S} />
      <rect x="28" y="100" width="34" height="70" rx="12" fill={B} />
      <rect x="258" y="100" width="34" height="70" rx="12" fill={B} />
      <rect x="56" y="110" width="208" height="54" rx="10" fill={S} />
      <line x1="160" y1="112" x2="160" y2="160" stroke={B} strokeWidth="3" opacity=".5" />
      <rect x="62" y="164" width="8" height="14" fill={B} />
      <rect x="250" y="164" width="8" height="14" fill={B} />
      {/* Flecken */}
      {stains.map(([x, y, r], i) => (
        <path
          key={i}
          d={`M${x - r} ${y}c0-${r * 0.8} ${r * 0.6}-${r} ${r}-${r * 0.6}s${r * 0.4} ${r * 1.2}-${r * 0.2} ${r * 1.1}-${r * 1.6}-${r * 0.1}-${r * 0.8}-${r * 0.5}z`}
          fill={DIRT}
          style={{ opacity: inv(start(x), start(x) + 0.08) }}
        />
      ))}
      {/* Frische-Glanz */}
      <g style={{ opacity: k(0.8, 0.95) }}>
        <path d="M72 84q20-8 40 0" stroke={W} strokeWidth="4" fill="none" strokeLinecap="round" opacity=".7" />
        <path d="M200 84q20-8 40 0" stroke={W} strokeWidth="4" fill="none" strokeLinecap="round" opacity=".7" />
      </g>
      {/* Polsterdüse mit Schlauch */}
      <g style={{ transform: `translateX(${px(k(0.08, 0.82), 200)})`, opacity: inv(0.86, 0.95) }}>
        <path d="M70 102c0-30 20-50 60-60" stroke={G} strokeWidth="6" fill="none" strokeLinecap="round" />
        <g className="sa-scrub">
          <rect x="54" y="100" width="32" height="14" rx="4" fill={A} />
          <rect x="54" y="112" width="32" height="5" rx="2" fill={B} />
        </g>
        {[0, 1, 2].map((i) => (
          <circle key={i} className="sa-bubble o" cx={60 + i * 10} cy="100" r={3 + i} fill={W} stroke={L2} style={{ animationDelay: `${i * 0.35}s` }} />
        ))}
      </g>
      <Spark x={292} y={66} r={9} at={0.86} />
      <Spark x={34} y={70} r={7} d={0.5} at={0.9} />
    </>
  );
}

/* 8 ─ Kita/Schule: Schwamm wischt die Tafel, ABC erscheint, Bauklötze stapeln sich */
function School() {
  const blocks = [
    [228, 150, "#f43f5e", "A"],
    [262, 150, "#f59e0b", "B"],
    [245, 120, "#10b981", "C"],
  ];
  return (
    <>
      <Floor y={180} />
      {/* Sonne */}
      <g transform="translate(290 28)">
        <g className="sa-spin-slow">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1="0" y1="-20" x2="0" y2="-14" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" transform={`rotate(${i * 45})`} />
          ))}
        </g>
        <circle r="10" fill="#fde68a" />
      </g>
      {/* Tafel */}
      <rect x="26" y="24" width="174" height="104" rx="6" fill="#92400e" />
      <rect x="32" y="30" width="162" height="92" rx="3" fill="#1f4d3a" />
      <rect x="40" y="128" width="146" height="5" rx="2" fill="#92400e" />
      {/* Kritzeleien */}
      <g style={{ opacity: inv(0.2, 0.55) }}>
        <path d="M44 50q20-14 36 4t30-6 26 10M50 82q16 10 30-4t26 8M120 96q20-16 40 2t24-8M60 106l60-6" stroke="#e5e7eb" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".75" />
      </g>
      {/* sauberes ABC */}
      <text x="113" y="88" textAnchor="middle" fontSize="38" fontWeight="800" fill="#f8fafc" letterSpacing="6" style={{ opacity: k(0.55, 0.7) }}>
        ABC
      </text>
      <path d="M66 104h94" stroke="#fde68a" strokeWidth="3" strokeLinecap="round" style={{ opacity: k(0.62, 0.72) }} />
      {/* Schwamm */}
      <g style={{ transform: `translateX(${px(k(0.08, 0.55), 130)})`, opacity: inv(0.55, 0.62) }}>
        <g className="sa-scrub">
          <rect x="36" y="56" width="30" height="20" rx="4" fill="#fbbf24" />
          <rect x="36" y="70" width="30" height="6" rx="2" fill="#2563eb" />
        </g>
      </g>
      {/* Bauklötze fallen */}
      {blocks.map(([x, y, c, t], i) => (
        <g key={t} style={{ transform: `translateY(${px(inv(0.4 + i * 0.1, 0.52 + i * 0.1), -210)})`, opacity: k(0.4 + i * 0.1, 0.43 + i * 0.1) }}>
          <rect x={x} y={y} width="30" height="30" rx="4" fill={c} />
          <text x={x + 15} y={y + 21} textAnchor="middle" fontSize="16" fontWeight="800" fill={W}>
            {t}
          </text>
        </g>
      ))}
      {/* Apfel */}
      <g className="sa-float">
        <circle cx="210" cy="168" r="10" fill="#ef4444" />
        <path d="M210 158q2-6 7-7" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <Spark x={204} y={30} r={9} at={0.84} c="#fbbf24" />
      <Spark x={292} y={100} r={7} d={0.6} at={0.9} />
    </>
  );
}

/* 9 ─ Autoreinigung: Hochdrucklanze fährt übers Auto, Schlamm & Staub verschwinden, Lack glänzt */
function CarArt() {
  const mud = [[58, 142, 9], [104, 147, 7], [146, 140, 8], [196, 148, 7], [252, 140, 9], [276, 132, 6]];
  const start = (x) => 0.08 + ((x - 30) / 270) * 0.72;
  return (
    <>
      <Floor y={178} />
      {/* Pfütze / Nässe */}
      <ellipse cx="160" cy="182" rx="140" ry="8" fill={L2} className="o" style={{ transform: `scaleX(${k(0.25, 0.9)})`, opacity: 0.9 }} />
      {/* Karosserie */}
      <path d="M30 140Q30 118 52 116L92 112L122 80Q128 74 138 74H206Q216 74 222 82L248 112L272 116Q292 120 292 138V150Q292 156 286 156H34Q30 156 30 150Z" fill={S} />
      <path d="M30 140H292V150Q292 156 286 156H34Q30 156 30 150Z" fill={B} />
      <line x1="170" y1="112" x2="170" y2="150" stroke={B} strokeWidth="2" opacity=".6" />
      <rect x="148" y="120" width="14" height="4" rx="2" fill={L} />
      <rect x="190" y="120" width="14" height="4" rx="2" fill={L} />
      <rect x="278" y="124" width="12" height="8" rx="3" fill="#fde68a" />
      <rect x="31" y="124" width="9" height="8" rx="3" fill="#f43f5e" />
      {/* Scheiben */}
      {[
        ["M126 110L144 84H166V110Z", 140],
        ["M174 110V84H204L222 110Z", 200],
      ].map(([d, x], i) => (
        <g key={i}>
          <path d={d} fill={L2} />
          <path d={d} fill="#8a96a8" style={{ opacity: inv(start(x), start(x) + 0.1) }} />
          <path d={i ? "M186 104l14-16" : "M136 104l14-16"} stroke={W} strokeWidth="3" strokeLinecap="round" style={{ opacity: k(0.8, 0.92) }} />
        </g>
      ))}
      {/* Räder */}
      {[86, 238].map((x) => (
        <g key={x}>
          <circle cx={x} cy="156" r="23" fill="#1f2937" />
          <circle cx={x} cy="156" r="12" fill="#94a3b8" />
          <circle cx={x} cy="156" r="12" fill="#e2e8f0" style={{ opacity: k(start(x), start(x) + 0.1) }} />
          <circle cx={x} cy="156" r="4" fill={B} />
          <circle cx={x} cy="156" r="18" fill="none" stroke={DIRT} strokeWidth="5" strokeDasharray="10 8" style={{ opacity: inv(start(x), start(x) + 0.1) }} />
        </g>
      ))}
      {/* Schlamm */}
      {mud.map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.6} fill={DIRT} style={{ opacity: inv(start(x), start(x) + 0.08) }} />
      ))}
      {/* Glanz-Streifen auf dem Lack */}
      <path d="M60 126Q160 116 268 126" stroke={W} strokeWidth="4" fill="none" strokeLinecap="round" style={{ opacity: k(0.82, 0.95) }} />
      {/* Hochdrucklanze mit Wasserfächer */}
      <g style={{ transform: `translateX(${px(k(0.06, 0.8), 260)})`, opacity: inv(0.85, 0.94) }}>
        <rect x="18" y="20" width="44" height="10" rx="4" fill="#f59e0b" />
        <rect x="26" y="28" width="10" height="16" rx="3" fill="#b45309" />
        <rect x="58" y="22" width="18" height="6" rx="2" fill={G} />
        <g className="sa-water">
          <path d="M76 25L54 92M76 25L72 96M76 25L90 94" stroke={A} strokeWidth="3" strokeLinecap="round" strokeDasharray="6 7" />
        </g>
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} className="sa-bubble o" cx={58 + i * 10} cy={i % 2 ? 80 : 86} r={4 + (i % 2) * 2} fill={W} stroke={L2} style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </g>
      <Spark x={86} y={128} r={8} at={0.86} />
      <Spark x={238} y={128} r={8} d={0.5} at={0.88} />
      <Spark x={196} y={64} r={7} d={0.9} at={0.9} />
    </>
  );
}

const ARTS = {
  car: CarArt, office: Office, routine: Routine, building: Building, moving: Moving, clinic: Clinic, hotel: HotelArt, sofa: SofaArt, school: School };

export default function ServiceArt({ art, className = "", title }) {
  const Art = ARTS[art] ?? Office;
  return (
    <svg viewBox="0 0 320 200" className={`service-art block h-auto w-full ${className}`} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : "true"}>
      <Art />
    </svg>
  );
}
