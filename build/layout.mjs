/**
 * Aureza Labs — shared page chrome.
 * `page()` wraps body markup in the document shell so head tags, header,
 * footer and script order stay identical across all 22 pages.
 */

import { logoMark } from "./art.mjs";

export const SITE = {
  name: "Aureza Labs",
  tagline: "Digital Products & Applied AI",
  email: "hello@aurezalabs.com",
  domain: "aurezalabs.com",
  description:
    "Aureza Labs designs and builds mobile, web and platform applications, and multimodal AI systems that explain why something happened. From first sketch to production."
};

/* Nav definition — `key` matches the `active` argument passed to page(). */
const NAV = [
  { key: "home", label: "Home", href: "index.html" },
  { key: "services", label: "Services", href: "services.html" },
  { key: "work", label: "Work", href: "work.html" },
  { key: "process", label: "Process", href: "process.html" },
  { key: "about", label: "About", href: "about.html" }
];

export const icon = {
  arrow: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  arrowLeft: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
  check: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>',
  plus: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  chevron: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
  spark: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.2 6.1L20.5 10l-6.3 1.9L12 18l-2.2-6.1L3.5 10l6.3-1.9z"/></svg>',
  shield: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5V11c0 4.6-3 8.3-7 9.5-4-1.2-7-4.9-7-9.5V5.5z"/><path d="M9 12l2 2 4-4"/></svg>',
  bolt: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
  mail: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="3"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/></svg>',
  clock: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5.4l3.4 2"/></svg>',
  globe: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9S14.5 21.3 12 21c-2.5-.3-3.8-6-3.8-9S9.5 5.7 12 3z"/></svg>',
  doc: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>'
};

export const scribble = `<svg viewBox="0 0 140 12" preserveAspectRatio="none" aria-hidden="true"><path d="M3 9c24-6 47-6 66-4 22 2 45 2 68-3" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></svg>`;

/* Favicon carries the same monogram as the header mark. */
const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='11' fill='%230e7f72'/%3E%3Cpath d='M11 29.5 20 10.5l9 19' stroke='white' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15.4 23.2h7.4' stroke='white' stroke-width='3' stroke-linecap='round'/%3E%3Ccircle cx='27.4' cy='23.2' r='1.9' fill='%236fe3cf'/%3E%3C/svg%3E";

function logo(prefix, extraClass = "") {
  return `<a class="logo ${extraClass}" href="${prefix}index.html" aria-label="${SITE.name} home">
        ${logoMark({ id: prefix ? "lmf" : "lmh" })}
        <span class="logo__type">
          <span class="logo__name">Aureza Labs</span>
          <span class="logo__sub">Product &amp; Applied AI</span>
        </span>
      </a>`;
}

function header(active, prefix) {
  const links = NAV.map((n) => {
    const current = n.key === active ? ' aria-current="page"' : "";
    return `<a class="nav__link" href="${prefix}${n.href}"${current}>${n.label}</a>`;
  }).join("\n          ");

  return `<header class="site-header">
    <div class="container nav">
      ${logo(prefix)}
      <nav class="nav__menu" id="primary-menu" aria-label="Primary">
          ${links}
      </nav>
      <div class="nav__actions">
        <button class="theme-toggle" data-theme-toggle type="button" aria-label="Switch colour theme">
          <svg class="icon-sun" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"/></svg>
          <svg class="icon-moon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.2A8.4 8.4 0 0 1 9.8 4a8.6 8.6 0 1 0 10.2 10.2z"/></svg>
        </button>
        <a class="btn btn--sm" href="${prefix}contact.html">Start a project</a>
        <button class="burger" data-burger type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="primary-menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="scroll-progress" aria-hidden="true"></div>
    </div>
  </header>`;
}

function footer(prefix) {
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          ${logo(prefix, "logo--footer")}
          <p class="footer__blurb">Digital products and multimodal AI systems, from first sketch to production. Remote, working worldwide.</p>
          <div class="socials">
            <a href="https://www.linkedin.com" aria-label="Aureza Labs on LinkedIn" rel="noopener"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5zM3 9h4v12H3zM9 9h3.8v1.7h.06c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z"/></svg></a>
            <a href="https://x.com" aria-label="Aureza Labs on X" rel="noopener"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.8 2h3l-7.4 8.5L22 22h-6.6l-5-6.5L4.6 22h-3l7.9-9.1L1.5 2h6.8l4.5 6z"/></svg></a>
            <a href="https://github.com" aria-label="Aureza Labs on GitHub" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg></a>
            <a href="mailto:${SITE.email}" aria-label="Email Aureza Labs">${icon.mail}</a>
          </div>
        </div>
        <div class="footer__col">
          <h4>Company</h4>
          <a href="${prefix}about.html">About</a>
          <a href="${prefix}process.html">How we work</a>
          <a href="${prefix}services.html">Services</a>
          <a href="${prefix}contact.html">Contact</a>
        </div>
        <div class="footer__col">
          <h4>Work</h4>
          <a href="${prefix}work.html">All projects</a>
          <a href="${prefix}work.html?filter=product">Product engineering</a>
          <a href="${prefix}work.html?filter=ai">AI systems</a>
          <a href="${prefix}work/linetrace.html">Featured: LineTrace</a>
        </div>
        <div class="footer__col">
          <h4>Contact</h4>
          <a href="mailto:${SITE.email}">${SITE.email}</a>
          <a href="${prefix}contact.html">Project brief form</a>
          <a href="${prefix}contact.html#faq">Working with us</a>
        </div>
      </div>
      <div class="footer__bottom">
        <span>&copy; <span data-year>2026</span> Aureza Labs. All rights reserved.</span>
        <span>Mobile &middot; Web &middot; Platform &middot; AI</span>
      </div>
    </div>
  </footer>`;
}

/**
 * Wrap page markup in the document shell.
 *
 * @param {object} o
 * @param {string} o.title    Document title, without the brand suffix.
 * @param {string} o.desc     Meta description.
 * @param {string} o.active   Nav key to mark as current.
 * @param {string} o.body     Page markup.
 * @param {string} [o.prefix] Relative path back to site root ("" or "../").
 * @param {string[]} [o.scripts] Extra scripts, relative to prefix.
 * @param {string} [o.bodyClass]
 */
export function page(o) {
  const prefix = o.prefix || "";
  const scripts = (o.scripts || [])
    .map((s) => `\n  <script src="${prefix}${s}" defer></script>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${o.title} | ${SITE.name}</title>
  <meta name="description" content="${o.desc}">
  <meta name="theme-color" content="#0e7f72" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#060d0c" media="(prefers-color-scheme: dark)">
  <link rel="icon" href="${FAVICON}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${SITE.name}">
  <meta property="og:title" content="${o.title} | ${SITE.name}">
  <meta property="og:description" content="${o.desc}">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,500&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="${prefix}assets/css/tokens.css">
  <link rel="stylesheet" href="${prefix}assets/css/base.css">
  <link rel="stylesheet" href="${prefix}assets/css/components.css">
  <link rel="stylesheet" href="${prefix}assets/css/pages.css">

  <script>
    /* Apply the stored theme before first paint to avoid a flash. */
    (function () {
      try {
        var t = localStorage.getItem("aureza-theme");
        if (t === "dark" || t === "light") document.documentElement.setAttribute("data-theme", t);
      } catch (e) {}
    })();
  </script>
</head>
<body${o.bodyClass ? ` class="${o.bodyClass}"` : ""}>
  <a class="skip-link" href="#main">Skip to content</a>

  ${header(o.active, prefix)}

  <main id="main">
${o.body}
  </main>

  ${footer(prefix)}

  <button class="to-top" data-to-top type="button" aria-label="Back to top">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>
  </button>

  <div class="toast" data-toast role="status" aria-live="polite">
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
    <span></span>
  </div>

  <script src="${prefix}assets/js/app.js" defer></script>${scripts}
</body>
</html>
`;
}
