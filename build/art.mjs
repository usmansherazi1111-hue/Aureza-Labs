/**
 * Aureza Labs — generative artwork.
 *
 * Every cover, illustration and mark on the site is drawn here rather than
 * pulled from a stock library, so the visual language is genuinely the
 * studio's own. Output is deterministic: same input, same file.
 */

/* --------------------------------------------------------
   Deterministic pseudo-random, seeded from a project slug
   -------------------------------------------------------- */

export function seeded(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return function rand() {
    h ^= h << 13; h >>>= 0;
    h ^= h >> 17;
    h ^= h << 5;  h >>>= 0;
    return h / 4294967296;
  };
}

const r2 = (n) => Math.round(n * 100) / 100;

/* --------------------------------------------------------
   Brand mark
   -------------------------------------------------------- */

/**
 * The Aureza monogram: an aperture "A" cut from a rounded tile.
 * The crossbar is offset and open on the right, reading as both a
 * letterform and a signal passing through a gate.
 */
export function logoMark({ size = 34, id = "lm" } = {}) {
  return `<svg class="logo__mark" width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="${id}-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
      <stop stop-color="#12a08f"/><stop offset="1" stop-color="#0a5a51"/>
    </linearGradient>
  </defs>
  <rect width="40" height="40" rx="11" fill="url(#${id}-g)"/>
  <path d="M11 29.5 20 10.5l9 19" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.4 23.2h7.4" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".92"/>
  <circle cx="27.4" cy="23.2" r="1.9" fill="#6fe3cf"/>
</svg>`;
}

/* --------------------------------------------------------
   Project cover posters
   -------------------------------------------------------- */

const W = 800, H = 600;

/**
 * Motif painters. Each returns SVG markup drawn in an 800x600 frame,
 * using `c` (accent colour) and a seeded rand for controlled variation.
 */
const motifs = {
  /* Warehouse racking — nested bins on an isometric skew */
  grid(c, rand) {
    let out = "";
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 6; col++) {
        const x = 110 + col * 100, y = 130 + row * 90;
        const fill = rand() > 0.72 ? c : "none";
        const op = fill === "none" ? 0.34 : 0.85;
        out += `<rect x="${x}" y="${y}" width="82" height="70" rx="6" fill="${fill}" fill-opacity="${op}" stroke="#fff" stroke-opacity=".26" stroke-width="1.5"/>`;
        if (fill !== "none") out += `<rect x="${x + 10}" y="${y + 48}" width="${r2(20 + rand() * 40)}" height="8" rx="4" fill="#fff" fill-opacity=".5"/>`;
      }
    }
    return out;
  },

  /* Market series — a candle field behind a trend line */
  line(c, rand) {
    let out = "", pts = [];
    for (let i = 0; i < 22; i++) {
      const x = 80 + i * 30;
      const y = 420 - i * 9 - rand() * 70;
      pts.push(`${r2(x)},${r2(y)}`);
      const h = 20 + rand() * 90;
      out += `<rect x="${x - 5}" y="${r2(y + 20)}" width="10" height="${r2(h)}" rx="3" fill="#fff" fill-opacity=".10"/>`;
    }
    out += `<polyline points="${pts.join(" ")}" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
    pts.slice(-1).forEach((p) => {
      const [x, y] = p.split(",");
      out += `<circle cx="${x}" cy="${y}" r="9" fill="${c}"/><circle cx="${x}" cy="${y}" r="17" fill="${c}" fill-opacity=".26"/>`;
    });
    return out;
  },

  /* Hiring funnel — stacked stages narrowing, one stage stalled */
  funnel(c, rand) {
    let out = "";
    const stalled = 2;
    for (let i = 0; i < 5; i++) {
      const inset = i * 62, y = 120 + i * 74;
      const isStall = i === stalled;
      out += `<rect x="${140 + inset}" y="${y}" width="${520 - inset * 2}" height="56" rx="10"
        fill="${isStall ? c : "#fff"}" fill-opacity="${isStall ? 0.9 : 0.13}"
        stroke="#fff" stroke-opacity=".22" stroke-width="1.5"/>`;
      if (isStall) out += `<rect x="${158 + inset}" y="${y + 22}" width="120" height="10" rx="5" fill="#0b1614" fill-opacity=".45"/>`;
    }
    return out;
  },

  /* Speech — two interleaved waveforms meeting mid-frame */
  waves(c, rand) {
    let out = "";
    for (let i = 0; i < 34; i++) {
      const x = 90 + i * 19;
      const a = Math.abs(Math.sin(i * 0.42)) * 110 + 14 + rand() * 26;
      out += `<rect x="${x}" y="${r2(300 - a / 2)}" width="7" height="${r2(a)}" rx="3.5"
        fill="${i > 15 && i < 20 ? c : "#fff"}" fill-opacity="${i > 15 && i < 20 ? 0.95 : 0.24}"/>`;
    }
    out += `<circle cx="400" cy="300" r="52" fill="none" stroke="${c}" stroke-width="3" stroke-opacity=".55"/>`;
    return out;
  },

  /* Wallet identity — a hex lattice with one sealed cell */
  hex(c, rand) {
    let out = "";
    const hexPath = (cx, cy, s) => {
      const p = [];
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        p.push(`${r2(cx + s * Math.cos(a))},${r2(cy + s * Math.sin(a))}`);
      }
      return p.join(" ");
    };
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 6; col++) {
        const cx = 150 + col * 104 + (row % 2 ? 52 : 0);
        const cy = 130 + row * 92;
        const hot = row === 2 && col === 2;
        out += `<polygon points="${hexPath(cx, cy, 46)}"
          fill="${hot ? c : "#fff"}" fill-opacity="${hot ? 0.92 : 0.07}"
          stroke="#fff" stroke-opacity=".2" stroke-width="1.5"/>`;
        if (hot) out += `<rect x="${cx - 11}" y="${cy - 13}" width="22" height="17" rx="3" fill="none" stroke="#0b1614" stroke-width="2.6"/><path d="M${cx - 6} ${cy - 13}v-5a6 6 0 0 1 12 0v5" fill="none" stroke="#0b1614" stroke-width="2.6"/>`;
      }
    }
    return out;
  }
};

export { motifs, W, H, r2 };
