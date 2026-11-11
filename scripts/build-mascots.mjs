// scripts/build-mascots.mjs
// Zerlegt die MN-Figuren in Grundkörper + bewegliche Teile ("Rig").
// Aufruf:  node scripts/build-mascots.mjs [--preview]
// Ausgabe: public/mn/rig/<fig>-base.webp, <fig>-<teil>.webp, src/data/mascotRig.json
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC = "public/mn/fig";
const OUT = "public/mn/rig";
const PREVIEW = process.argv.includes("--preview");
const PREVIEW_DIR = process.env.MN_PREVIEW_DIR || "mascot-preview";

// Koordinaten in Pixeln der zugeschnittenen Figuren (public/mn/fig)
export const RIG = {
  phone: {
    file: "contact-support.webp",
    parts: {
      // Unterarm + Hand + Handy, Gelenk = Ellbogen
      arm: {
        poly: [[0, 100], [112, 100], [124, 200], [116, 262], [108, 292], [96, 330], [84, 352], [62, 368], [40, 352], [34, 318], [30, 292], [0, 262]],
        pivot: [64, 352],
        keep: 20,
      },
    },
  },
  thumbs: {
    file: "about-spray-thumbs-up.webp",
    parts: {
      arm: {
        poly: [[0, 155], [62, 155], [76, 215], [80, 262], [92, 290], [92, 330], [50, 338], [20, 315], [0, 292]],
        pivot: [66, 318],
        keep: 18,
      },
    },
  },
  point: {
    file: "cta-point-left-cloth.webp",
    parts: {
      arm: {
        poly: [[0, 172], [78, 176], [118, 218], [140, 248], [150, 268], [138, 300], [126, 318], [100, 304], [60, 292], [22, 272], [0, 222]],
        pivot: [132, 296],
        keep: 18,
      },
    },
  },
  // Zeige-Figur gespiegelt (zeigt nach rechts), Logo auf der Schürze bleibt lesbar
  pointR: {
    mirrorOf: "point",
    width: 388,
    logo: [190, 256, 100, 60],
  },
  mop: {
    file: "services-mop.webp",
    parts: {
      // Stiel oberhalb der Hand + unterhalb + Moppkopf, Gelenk = Griffhand
      mop: {
        polys: [
          [[38, 0], [78, 0], [76, 214], [42, 214]],
          [[50, 298], [80, 298], [84, 640], [190, 650], [190, 720], [0, 720], [0, 645], [48, 640]],
        ],
        pivot: [62, 258],
      },
    },
  },
  vacuum: {
    file: "services-vacuum.webp",
    parts: {
      // Unteres Saugrohr + Bodendüse, Gelenk = unter der rechten Hand
      nozzle: {
        poly: [[318, 428], [348, 418], [372, 470], [440, 610], [525, 640], [525, 712], [380, 712], [380, 672], [410, 640], [356, 520]],
        pivot: [332, 430],
        keep: 10,
      },
    },
  },
  hero: {
    file: "hero-crossed-arms.webp",
    parts: {
      // Kopf, Gelenk = Hals
      head: {
        poly: [[88, 0], [252, 0], [252, 120], [232, 150], [208, 168], [176, 176], [140, 168], [112, 150], [88, 125]],
        pivot: [172, 178],
        keep: 22,
      },
    },
  },
};

// Gespiegelte Variante: x-Koordinaten aller Polygone und Gelenke spiegeln
function mirrorCfg(orig, extra) {
  const W = extra.width;
  const mx = ([x, y]) => [W - x, y];
  const parts = Object.fromEntries(
    Object.entries(orig.parts).map(([k, p]) => [
      k,
      {
        ...p,
        poly: p.poly && p.poly.map(mx),
        polys: p.polys && p.polys.map((poly) => poly.map(mx)),
        pivot: mx(p.pivot),
      },
    ])
  );
  return { file: orig.file, parts, mirrorW: W };
}

// Maske: Polygone weiß, Gelenk-Kreise (keeps) bleiben im Grundkörper stehen
function polySvg(w, h, polys, keeps = []) {
  const paths = polys
    .map((p) => `<polygon points="${p.map(([x, y]) => `${x},${y}`).join(" ")}" fill="white"/>`)
    .join("");
  const circles = keeps.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="black"/>`).join("");
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><mask id="m"><rect width="${w}" height="${h}" fill="black"/>${paths}${circles}</mask></defs><rect width="${w}" height="${h}" fill="white" mask="url(#m)"/></svg>`
  );
}

async function build() {
  fs.mkdirSync(OUT, { recursive: true });
  if (PREVIEW) fs.mkdirSync(PREVIEW_DIR, { recursive: true });
  const manifest = {};

  for (const [name, rawCfg] of Object.entries(RIG)) {
    const cfg = rawCfg.mirrorOf ? mirrorCfg(RIG[rawCfg.mirrorOf], rawCfg) : rawCfg;
    const src = path.join(SRC, cfg.file);
    const { width: w, height: h } = await sharp(src).metadata();
    let srcBuf = await sharp(src).ensureAlpha().png().toBuffer();
    if (cfg.mirrorW) {
      // Spiegeln – Schriftzug (Logo) danach wieder lesbar einsetzen
      const [lx, ly, lw, lh] = rawCfg.logo;
      const logo = await sharp(srcBuf).extract({ left: lx, top: ly, width: lw, height: lh }).png().toBuffer();
      const flopped = await sharp(srcBuf).flop().png().toBuffer();
      srcBuf = await sharp(flopped).composite([{ input: logo, left: w - lx - lw, top: ly }]).png().toBuffer();
    }
    const allPolys = Object.values(cfg.parts).flatMap((p) => p.polys ?? [p.poly]);
    const keeps = Object.values(cfg.parts)
      .filter((p) => p.keep)
      .map((p) => [...p.pivot, p.keep]);

    // Grundkörper = Original ohne bewegliche Teile (Gelenke bleiben als Überlappung)
    const base = await sharp(srcBuf)
      .composite([{ input: polySvg(w, h, allPolys, keeps), blend: "dest-out" }])
      .png()
      .toBuffer();
    await sharp(base).webp({ quality: 84, alphaQuality: 90 }).toFile(path.join(OUT, `${name}-base.webp`));

    manifest[name] = { w, h, base: `/mn/rig/${name}-base.webp`, parts: {} };

    for (const [pName, part] of Object.entries(cfg.parts)) {
      const polys = part.polys ?? [part.poly];
      const layer = await sharp(srcBuf)
        .composite([{ input: polySvg(w, h, polys), blend: "dest-in" }])
        .png()
        .toBuffer();
      await sharp(layer).webp({ quality: 84, alphaQuality: 90 }).toFile(path.join(OUT, `${name}-${pName}.webp`));
      manifest[name].parts[pName] = {
        src: `/mn/rig/${name}-${pName}.webp`,
        origin: `${((part.pivot[0] / w) * 100).toFixed(2)}% ${((part.pivot[1] / h) * 100).toFixed(2)}%`,
      };

      if (PREVIEW) {
        // Vorschau: Teil um verschiedene Winkel gedreht über dem Grundkörper
        for (const deg of [-6, 0, 14]) {
          const rot = await rotateAround(layer, w, h, part.pivot, deg);
          await sharp({ create: { width: w, height: h, channels: 4, background: "#fde68a" } })
            .composite([{ input: base }, { input: rot }])
            .png()
            .toFile(path.join(PREVIEW_DIR, `${name}-${pName}-${deg}.png`));
        }
      }
    }
    console.log(name, w, h, Object.keys(cfg.parts).join(","));
  }

  fs.writeFileSync("src/data/mascotRig.json", JSON.stringify(manifest, null, 2));
}

// Ebene um einen Pivot drehen und wieder auf w×h zuschneiden
async function rotateAround(buf, w, h, [px, py], deg) {
  if (!deg) return buf;
  const pad = Math.ceil(Math.hypot(w, h));
  const big = await sharp({ create: { width: pad * 2, height: pad * 2, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: buf, left: pad - px, top: pad - py }])
    .png()
    .toBuffer();
  const rotated = await sharp(big).rotate(deg, { background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const m = await sharp(rotated).metadata();
  const cx = Math.round(m.width / 2), cy = Math.round(m.height / 2);
  return sharp(rotated).extract({ left: cx - px, top: cy - py, width: w, height: h }).png().toBuffer();
}

build();
