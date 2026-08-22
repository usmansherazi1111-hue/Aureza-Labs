/**
 * Link + asset integrity check across all generated pages.
 */
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, resolve, relative, sep as SEP } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function htmlFiles(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name === "node_modules" || e.name === "build") continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) htmlFiles(full, acc);
    else if (e.name.endsWith(".html") && !e.name.includes("_legacy")) acc.push(full);
  }
  return acc;
}

const files = htmlFiles(ROOT);
const problems = [];
let checked = 0;
const ids = new Map();

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const base = dirname(file);
  const rel = relative(ROOT, file).split(SEP).join("/");

  // collect ids for fragment checks
  ids.set(rel, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));

  const refs = [
    ...[...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/src="([^"]+)"/g)].map((m) => m[1])
  ];

  for (const ref of refs) {
    if (/^(https?:|mailto:|data:|#|tel:)/.test(ref)) continue;
    checked++;
    const [path, frag] = ref.split("#");
    const [clean] = path.split("?");
    if (!clean) continue;
    const target = resolve(base, clean);
    if (!existsSync(target) || !statSync(target).isFile()) {
      problems.push(`${rel}  ->  ${ref}  (missing)`);
    }
  }
}

// unmatched fragment targets on same page
for (const file of files) {
  const html = readFileSync(file, "utf8");
  const rel = relative(ROOT, file).split(SEP).join("/");
  const own = ids.get(rel);
  for (const m of html.matchAll(/href="#([^"]+)"/g)) {
    if (!own.has(m[1])) problems.push(`${rel}  ->  #${m[1]}  (no such id)`);
  }
}

console.log(`Pages: ${files.length}`);
console.log(`Local references checked: ${checked}`);
if (problems.length) {
  console.log(`\nPROBLEMS (${problems.length}):`);
  problems.slice(0, 40).forEach((p) => console.log("  " + p));
  process.exitCode = 1;
} else {
  console.log("\nAll local links and assets resolve.");
}
