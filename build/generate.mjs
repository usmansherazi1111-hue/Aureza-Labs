/**
 * Aureza Labs — static site generator.
 *
 * Renders every page and every cover image from data/ + build/.
 * Run with:  node build/generate.mjs
 *
 * Output is plain static HTML: it opens straight from the filesystem and
 * deploys to any static host without a runtime.
 */

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

import { page, SITE, icon } from "./layout.mjs";
import { coverSvg } from "./cover.mjs";
import { homePage, homeRest, homeProof } from "./pages/home.mjs";
import { servicesPage } from "./pages/services.mjs";
import { processPage } from "./pages/process.mjs";
import { workPage } from "./pages/work.mjs";
import { aboutPage } from "./pages/about.mjs";
import { contactPage } from "./pages/contact.mjs";
import { projectPage } from "./pages/project.mjs";
import { encodeAmpersands } from "./encode.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const require = createRequire(import.meta.url);
const projects = require("../data/projects.js");

let written = 0;

/** Case-study titles must clear the 70-character budget once the brand suffix lands. */
function shortTitle(p) {
  const full = `${p.name} | ${p.sector}`;
  return full.length <= 52 ? full : p.name;
}

function write(relPath, contents) {
  if (relPath.endsWith(".html")) contents = encodeAmpersands(contents);
  const full = join(ROOT, relPath);
  const dir = dirname(full);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(full, contents, "utf8");
  written++;
  const kb = (Buffer.byteLength(contents, "utf8") / 1024).toFixed(1);
  console.log(`  ${relPath.padEnd(34)} ${kb.padStart(7)} kB`);
}

/* ---------------------------------------------------------- */
console.log("\nCover artwork");
for (const p of projects) {
  write(`assets/img/cover-${p.slug}.svg`, coverSvg(p));
}

/* ---------------------------------------------------------- */
console.log("\nPages");

write(
  "index.html",
  page({
    title: "Digital Products & Applied AI",
    desc: SITE.description,
    active: "home",
    body: homePage(projects) + homeRest(projects) + homeProof(projects)
  })
);

write(
  "services.html",
  page({
    title: "Services",
    desc: "Eight disciplines under one roof: mobile, web, AI, SaaS platforms, blockchain, data, integration and cloud or edge deployment.",
    active: "services",
    body: servicesPage()
  })
);

write(
  "process.html",
  page({
    title: "How We Work",
    desc: "Seven stages from discovery to maintenance, each with named outputs and an exit point. A process built to be interrupted.",
    active: "process",
    body: processPage()
  })
);

write(
  "work.html",
  page({
    title: "Work",
    desc: "Fifteen products in production across manufacturing, healthcare, logistics, finance, warehousing, energy, pharma, public infrastructure, recruitment and Web3.",
    active: "work",
    body: workPage(projects),
    scripts: ["assets/js/work.js"]
  })
);

write(
  "about.html",
  page({
    title: "About",
    desc: "One team, from sketch to production. Eight disciplines in-house, fifteen products shipped, and six positions we actually hold.",
    active: "about",
    body: aboutPage(projects)
  })
);

write(
  "contact.html",
  page({
    title: "Contact",
    desc: "Send a project brief. We read every one ourselves and reply as soon as we can with a view, not a calendar link.",
    active: "contact",
    body: contactPage(),
    scripts: ["https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"]
  })
);

write(
  "404.html",
  page({
    title: "Page Not Found",
    desc: "That page does not exist.",
    active: "",
    body: `
    <section class="container">
      <div class="nf">
        <span class="nf__code">404</span>
        <h1>That page has moved on.</h1>
        <p class="lead center">
          The link is broken or the page was retired. The work is all still here.
        </p>
        <div class="actions-center mt-2">
          <a class="btn btn--lg" href="index.html">Back to home ${icon.arrow}</a>
          <a class="btn btn--ghost btn--lg" href="work.html">Browse the work</a>
        </div>
      </div>
    </section>`
  })
);

/* ---------------------------------------------------------- */
console.log("\nCase studies");
for (const p of projects) {
  write(
    `work/${p.slug}.html`,
    page({
      title: shortTitle(p),
      desc: p.summary,
      active: "work",
      prefix: "../",
      body: projectPage(p, projects)
    })
  );
}

console.log(`\nDone. ${written} files written.\n`);
