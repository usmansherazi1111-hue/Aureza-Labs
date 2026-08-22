/**
 * Aureza Labs — cover motifs, part three.
 */

const r2 = (n) => Math.round(n * 100) / 100;

export const motifs3 = {
  /* Cross-document verification — two columns with a conflict bridge */
  cross(c, rand) {
    let out = "";
    [150, 450].forEach((x, col) => {
      out += `<rect x="${x}" y="110" width="200" height="380" rx="14" fill="#fff" fill-opacity=".07" stroke="#fff" stroke-opacity=".24" stroke-width="1.5"/>`;
      for (let i = 0; i < 8; i++) {
        const hot = i === 4;
        out += `<rect x="${x + 22}" y="${145 + i * 42}" width="${r2(90 + rand() * 66)}" height="10" rx="5"
          fill="${hot ? c : "#fff"}" fill-opacity="${hot ? 0.95 : 0.22}"/>`;
      }
    });
    out += `<path d="M352 318h96" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`;
    out += `<circle cx="400" cy="318" r="27" fill="${c}"/>`;
    out += `<path d="M391 309l18 18M409 309l-18 18" stroke="#0b1614" stroke-width="3.4" stroke-linecap="round"/>`;
    return out;
  },

  /* Container inspection — a box with an isolated damage delta */
  container(c, rand) {
    let out = `<rect x="120" y="180" width="560" height="250" rx="12" fill="#fff" fill-opacity=".09" stroke="#fff" stroke-opacity=".3" stroke-width="2"/>`;
    for (let i = 0; i < 17; i++) {
      out += `<line x1="${142 + i * 32}" y1="184" x2="${142 + i * 32}" y2="426" stroke="#fff" stroke-opacity=".13" stroke-width="2.4"/>`;
    }
    out += `<rect x="120" y="180" width="120" height="250" rx="12" fill="#0b1614" fill-opacity=".22"/>`;
    out += `<path d="M470 240c26 18 14 44 34 58s44-4 56 18" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/>`;
    out += `<rect x="440" y="212" width="180" height="128" rx="10" fill="none" stroke="${c}" stroke-width="2.6" stroke-dasharray="9 7"/>`;
    out += `<rect x="440" y="352" width="106" height="26" rx="13" fill="${c}"/>`;
    out += `<circle cx="180" cy="470" r="22" fill="#fff" fill-opacity=".16"/><circle cx="620" cy="470" r="22" fill="#fff" fill-opacity=".16"/>`;
    return out;
  },

  /* Warehouse shelving — physical against digital, one mismatch */
  shelf(c, rand) {
    let out = "";
    for (let row = 0; row < 3; row++) {
      const y = 150 + row * 130;
      out += `<rect x="90" y="${y + 96}" width="620" height="12" rx="6" fill="#fff" fill-opacity=".28"/>`;
      for (let col = 0; col < 7; col++) {
        const x = 104 + col * 88;
        const h = 44 + rand() * 48;
        const bad = row === 1 && col === 4;
        out += `<rect x="${x}" y="${r2(y + 96 - h)}" width="72" height="${r2(h)}" rx="6"
          fill="${bad ? c : "#fff"}" fill-opacity="${bad ? 0.92 : 0.16}" stroke="#fff" stroke-opacity=".22" stroke-width="1.2"/>`;
        if (bad) out += `<path d="M${x + 26} ${y + 62}l20 20M${x + 46} ${y + 62}l-20 20" stroke="#0b1614" stroke-width="3.2" stroke-linecap="round"/>`;
      }
    }
    return out;
  },

  /* Road survey — a carriageway with graded segments */
  road(c, rand) {
    let out = `<path d="M300 560 L360 140 L440 140 L500 560 Z" fill="#fff" fill-opacity=".09" stroke="#fff" stroke-opacity=".24" stroke-width="1.6"/>`;
    for (let i = 0; i < 7; i++) {
      const t = i / 7;
      const y = 540 - i * 58;
      const w = 40 - t * 22;
      out += `<rect x="${r2(400 - w / 2)}" y="${y}" width="${r2(w)}" height="${r2(26 - t * 12)}" rx="4" fill="#fff" fill-opacity=".42"/>`;
    }
    const grades = [0.9, 0.35, 0.2, 0.75, 0.28];
    grades.forEach((g, i) => {
      out += `<rect x="${560}" y="${150 + i * 74}" width="${r2(60 + g * 150)}" height="40" rx="8"
        fill="${g > 0.7 ? c : "#fff"}" fill-opacity="${g > 0.7 ? 0.9 : 0.18}"/>`;
    });
    out += `<circle cx="180" cy="220" r="34" fill="none" stroke="${c}" stroke-width="3"/>`;
    out += `<path d="M180 200v20l14 8" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    return out;
  },

  /* Clinical imaging — a slice with a localised finding and prior overlay */
  scan2(c, rand) {
    let out = `<circle cx="400" cy="300" r="188" fill="#fff" fill-opacity=".07" stroke="#fff" stroke-opacity=".26" stroke-width="1.8"/>`;
    out += `<circle cx="400" cy="300" r="132" fill="#fff" fill-opacity=".05" stroke="#fff" stroke-opacity=".18" stroke-width="1.4"/>`;
    for (let i = 0; i < 24; i++) {
      const a = (Math.PI * 2 * i) / 24;
      out += `<line x1="${r2(400 + 188 * Math.cos(a))}" y1="${r2(300 + 188 * Math.sin(a))}" x2="${r2(400 + 202 * Math.cos(a))}" y2="${r2(300 + 202 * Math.sin(a))}" stroke="#fff" stroke-opacity=".26" stroke-width="2"/>`;
    }
    out += `<circle cx="472" cy="242" r="26" fill="${c}" fill-opacity=".95"/>`;
    out += `<circle cx="472" cy="242" r="46" fill="none" stroke="${c}" stroke-width="2.4"/>`;
    out += `<circle cx="472" cy="242" r="19" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2" stroke-dasharray="5 5"/>`;
    out += `<rect x="150" y="486" width="${r2(120)}" height="10" rx="5" fill="#fff" fill-opacity=".3"/>`;
    out += `<rect x="286" y="486" width="${r2(168)}" height="10" rx="5" fill="${c}" fill-opacity=".85"/>`;
    return out;
  }
};

export { r2 };
