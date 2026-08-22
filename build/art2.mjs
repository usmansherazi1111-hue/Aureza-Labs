/**
 * Aureza Labs — cover motifs, part two (AI systems).
 */

const r2 = (n) => Math.round(n * 100) / 100;

export const motifs2 = {
  /* Production signal — telemetry trace with a flagged excursion */
  signal(c, rand) {
    let out = "", pts = [], base = 360;
    for (let i = 0; i < 40; i++) {
      const x = 60 + i * 18;
      let y = base + Math.sin(i * 0.55) * 26 + (rand() - 0.5) * 18;
      if (i > 21 && i < 27) y -= 130;
      pts.push(`${r2(x)},${r2(y)}`);
    }
    out += `<rect x="${60 + 21 * 18}" y="150" width="${5 * 18}" height="330" rx="8" fill="${c}" fill-opacity=".2"/>`;
    out += `<polyline points="${pts.join(" ")}" fill="none" stroke="#fff" stroke-opacity=".78" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>`;
    out += `<line x1="60" y1="${base}" x2="760" y2="${base}" stroke="#fff" stroke-opacity=".2" stroke-width="1.5" stroke-dasharray="6 8"/>`;
    for (let i = 0; i < 5; i++) {
      out += `<rect x="${90 + i * 140}" y="500" width="102" height="10" rx="5" fill="#fff" fill-opacity="${i === 3 ? 0.7 : 0.16}"/>`;
    }
    out += `<circle cx="${60 + 24 * 18}" cy="${base - 130}" r="11" fill="${c}"/>`;
    return out;
  },

  /* Network topology — a dependency graph with one failed node */
  nodes(c, rand) {
    const pos = [[400,120],[210,250],[590,250],[130,410],[320,410],[490,410],[670,410],[240,530],[560,530]];
    const edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[4,7],[5,8],[3,7],[6,8]];
    let out = "";
    edges.forEach(([a, b]) => {
      out += `<line x1="${pos[a][0]}" y1="${pos[a][1]}" x2="${pos[b][0]}" y2="${pos[b][1]}"
        stroke="${a === 1 || b === 1 ? c : "#fff"}" stroke-opacity="${a === 1 || b === 1 ? 0.75 : 0.22}" stroke-width="${a === 1 || b === 1 ? 3 : 1.8}"/>`;
    });
    pos.forEach(([x, y], i) => {
      const failed = i === 1;
      out += `<circle cx="${x}" cy="${y}" r="${failed ? 34 : 22}" fill="${failed ? c : "#fff"}" fill-opacity="${failed ? 0.95 : 0.14}" stroke="#fff" stroke-opacity=".34" stroke-width="1.5"/>`;
      if (failed) out += `<path d="M${x - 11} ${y - 11}l22 22M${x + 11} ${y - 11}l-22 22" stroke="#0b1614" stroke-width="3.4" stroke-linecap="round"/>`;
    });
    return out;
  },

  /* Pipeline inspection — a scan sweep across a cylinder */
  scan(c, rand) {
    let out = `<rect x="60" y="210" width="680" height="180" rx="90" fill="#fff" fill-opacity=".08" stroke="#fff" stroke-opacity=".26" stroke-width="1.8"/>`;
    for (let i = 0; i < 14; i++) {
      out += `<line x1="${100 + i * 48}" y1="216" x2="${100 + i * 48}" y2="384" stroke="#fff" stroke-opacity=".12" stroke-width="1.4"/>`;
    }
    out += `<ellipse cx="500" cy="300" rx="46" ry="34" fill="${c}" fill-opacity=".92"/>`;
    out += `<ellipse cx="500" cy="300" rx="74" ry="56" fill="none" stroke="${c}" stroke-width="2.4" stroke-opacity=".5"/>`;
    out += `<ellipse cx="248" cy="300" rx="22" ry="16" fill="#fff" fill-opacity=".38"/>`;
    for (let i = 0; i < 5; i++) {
      const h = [30, 46, 66, 96, 132][i];
      out += `<rect x="${180 + i * 96}" y="${470 - h}" width="52" height="${h}" rx="6" fill="${i === 4 ? c : "#fff"}" fill-opacity="${i === 4 ? 0.9 : 0.18}"/>`;
    }
    return out;
  },

  /* Regulated documents — stacked records with one flagged deviation */
  docs(c, rand) {
    let out = "";
    for (let i = 0; i < 3; i++) {
      const x = 130 + i * 40, y = 120 + i * 24;
      out += `<rect x="${x}" y="${y}" width="380" height="400" rx="14" fill="#0b1614" fill-opacity="${0.18 + i * 0.12}" stroke="#fff" stroke-opacity=".22" stroke-width="1.5"/>`;
    }
    for (let i = 0; i < 9; i++) {
      const w = i === 4 ? 260 : 150 + rand() * 150;
      out += `<rect x="240" y="${190 + i * 34}" width="${r2(w)}" height="11" rx="5.5"
        fill="${i === 4 ? c : "#fff"}" fill-opacity="${i === 4 ? 0.95 : 0.24}"/>`;
    }
    out += `<circle cx="600" cy="${190 + 4 * 34 + 5}" r="19" fill="${c}"/>`;
    out += `<path d="M593 195.5l5 5 9-10" stroke="#0b1614" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    return out;
  },

  /* Safety zones — trajectories converging on a restricted area */
  zones(c, rand) {
    let out = `<rect x="250" y="190" width="300" height="220" rx="16" fill="${c}" fill-opacity=".16" stroke="${c}" stroke-width="2.4" stroke-dasharray="10 8"/>`;
    out += `<path d="M90 500C200 470 300 420 380 330" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="3.4" stroke-linecap="round"/>`;
    out += `<path d="M720 140C620 190 520 240 430 300" fill="none" stroke="${c}" stroke-width="3.8" stroke-linecap="round"/>`;
    out += `<circle cx="380" cy="330" r="17" fill="#fff" fill-opacity=".9"/>`;
    out += `<rect x="412" y="282" width="42" height="30" rx="7" fill="${c}"/>`;
    out += `<circle cx="404" cy="316" r="18" fill="none" stroke="${c}" stroke-width="3"/>`;
    out += `<circle cx="404" cy="316" r="36" fill="none" stroke="${c}" stroke-width="2" stroke-opacity=".5"/>`;
    out += `<circle cx="404" cy="316" r="58" fill="none" stroke="${c}" stroke-width="1.5" stroke-opacity=".25"/>`;
    return out;
  }
};

export { r2 };
