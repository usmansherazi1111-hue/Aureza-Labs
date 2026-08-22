/**
 * Aureza Labs — cover composer.
 * Assembles a motif into a finished 800x600 poster with a mesh gradient
 * ground, an engineering rule grid and a film-grain pass, then writes it
 * to assets/img as a standalone SVG image.
 */

import { seeded, motifs } from "./art.mjs";
import { motifs2 } from "./art2.mjs";
import { motifs3 } from "./art3.mjs";

const ALL = { ...motifs, ...motifs2, ...motifs3 };

export function coverSvg(project) {
  const { slug, name, cover } = project;
  const rand = seeded(slug);
  const painter = ALL[cover.motif];
  if (!painter) throw new Error(`Unknown motif "${cover.motif}" for ${slug}`);

  const id = slug.replace(/[^a-z0-9]/g, "");
  const body = painter(cover.b, rand);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" role="img" aria-label="${name} interface artwork">
  <title>${name}</title>
  <defs>
    <linearGradient id="${id}-ground" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0b1614"/>
      <stop offset=".55" stop-color="${cover.a}" stop-opacity=".92"/>
      <stop offset="1" stop-color="#04231f"/>
    </linearGradient>
    <radialGradient id="${id}-glow" cx="0" cy="0" r="1" gradientTransform="translate(620 110) rotate(128) scale(520 470)" gradientUnits="userSpaceOnUse">
      <stop stop-color="${cover.b}" stop-opacity=".62"/>
      <stop offset="1" stop-color="${cover.b}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${id}-glow2" cx="0" cy="0" r="1" gradientTransform="translate(120 540) rotate(-42) scale(420 380)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4ecdb9" stop-opacity=".34"/>
      <stop offset="1" stop-color="#4ecdb9" stop-opacity="0"/>
    </radialGradient>
    <pattern id="${id}-rule" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0v40" fill="none" stroke="#fff" stroke-opacity=".05" stroke-width="1"/>
    </pattern>
    <filter id="${id}-grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.86" numOctaves="4" stitchTiles="stitch" result="n"/>
      <feColorMatrix type="saturate" values="0" in="n" result="g"/>
      <feComponentTransfer in="g" result="t"><feFuncA type="linear" slope="0.13"/></feComponentTransfer>
      <feBlend in="SourceGraphic" in2="t" mode="overlay"/>
    </filter>
  </defs>

  <g filter="url(#${id}-grain)">
    <rect width="800" height="600" fill="url(#${id}-ground)"/>
    <rect width="800" height="600" fill="url(#${id}-rule)"/>
    <rect width="800" height="600" fill="url(#${id}-glow)"/>
    <rect width="800" height="600" fill="url(#${id}-glow2)"/>
    ${body}
  </g>
</svg>`;
}

/* --------------------------------------------------------
   Service illustrations — duotone, drawn on a 320x200 frame
   -------------------------------------------------------- */

export function serviceArt(kind) {
  const A = 'stroke="currentColor" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"';
  const F = 'fill="currentColor" fill-opacity=".14"';
  const S = 'fill="currentColor" fill-opacity=".9"';

  const art = {
    mobile: `<rect x="116" y="26" width="88" height="148" rx="14" ${F}/><rect x="116" y="26" width="88" height="148" rx="14" ${A}/>
      <path d="M116 52h88M144 162h32" ${A}/>
      <rect x="130" y="66" width="60" height="34" rx="6" ${S}/>
      <path d="M130 116h60M130 132h40" ${A}/>
      <circle cx="236" cy="150" r="20" ${F}/><circle cx="236" cy="150" r="20" ${A}/><path d="M228 150l6 6 11-13" ${A}/>`,

    web: `<rect x="40" y="34" width="240" height="132" rx="12" ${F}/><rect x="40" y="34" width="240" height="132" rx="12" ${A}/>
      <path d="M40 62h240" ${A}/><circle cx="56" cy="48" r="3.4" ${S}/><circle cx="70" cy="48" r="3.4" fill="currentColor" fill-opacity=".4"/>
      <rect x="58" y="78" width="72" height="72" rx="8" ${S}/>
      <path d="M148 84h114M148 104h92M148 124h114M148 144h64" ${A}/>`,

    ai: `<circle cx="160" cy="100" r="26" ${S}/>
      <circle cx="78" cy="52" r="13" ${F}/><circle cx="78" cy="52" r="13" ${A}/>
      <circle cx="242" cy="52" r="13" ${F}/><circle cx="242" cy="52" r="13" ${A}/>
      <circle cx="66" cy="148" r="13" ${F}/><circle cx="66" cy="148" r="13" ${A}/>
      <circle cx="254" cy="148" r="13" ${F}/><circle cx="254" cy="148" r="13" ${A}/>
      <path d="M89 60l48 26M231 60l-48 26M79 140l60-24M241 140l-60-24" ${A}/>
      <path d="M160 34v-18M160 166v18" ${A}/>`,

    blockchain: `<rect x="44" y="30" width="76" height="54" rx="10" ${F}/><rect x="44" y="30" width="76" height="54" rx="10" ${A}/>
      <rect x="122" y="76" width="76" height="54" rx="10" ${S}/>
      <rect x="200" y="122" width="76" height="54" rx="10" ${F}/><rect x="200" y="122" width="76" height="54" rx="10" ${A}/>
      <path d="M120 57h14a8 8 0 0 1 8 8v11M198 103h14a8 8 0 0 1 8 8v11" ${A}/>
      <circle cx="160" cy="103" r="5" fill="currentColor"/>`,

    saas: `<ellipse cx="112" cy="46" rx="58" ry="20" ${F}/><ellipse cx="112" cy="46" rx="58" ry="20" ${A}/>
      <path d="M54 46v66c0 11 26 20 58 20s58-9 58-20V46" ${A}/>
      <path d="M54 79c0 11 26 20 58 20s58-9 58-20" ${A}/>
      <rect x="192" y="82" width="88" height="70" rx="10" ${S}/>
      <path d="M176 117h20m0 0-7-7m7 7-7 7" ${A}/>`,

    data: `<path d="M46 158V96M92 158V60M138 158V116M184 158V38M230 158V84M276 158V126" ${A}/>
      <rect x="38" y="88" width="16" height="70" rx="5" ${S}/>
      <rect x="176" y="30" width="16" height="128" rx="5" ${S}/>
      <path d="M46 96l46-36 46 56 46-78 46 46 46 42" ${A}/>
      <circle cx="184" cy="38" r="7" fill="currentColor"/>`,

    integration: `<circle cx="80" cy="100" r="34" ${F}/><circle cx="80" cy="100" r="34" ${A}/>
      <circle cx="240" cy="100" r="34" ${F}/><circle cx="240" cy="100" r="34" ${A}/>
      <path d="M114 100h92" ${A}/><path d="M186 84l20 16-20 16" ${A}/>
      <path d="M134 100h-20" ${A}/>
      <rect x="146" y="76" width="28" height="48" rx="8" ${S}/>`,

    cloud: `<path d="M96 142a34 34 0 0 1 4-68 46 46 0 0 1 88-8 32 32 0 0 1 10 62z" ${F}/>
      <path d="M96 142a34 34 0 0 1 4-68 46 46 0 0 1 88-8 32 32 0 0 1 10 62z" ${A}/>
      <rect x="204" y="120" width="76" height="46" rx="9" ${S}/>
      <path d="M228 120v-14M256 120v-14" ${A}/>
      <path d="M136 158v18M168 158v18" ${A}/>`
  };

  return `<svg viewBox="0 0 320 200" fill="none" class="art" aria-hidden="true" focusable="false">${art[kind] || art.web}</svg>`;
}
