/**
 * Aureza Labs — reusable markup partials.
 */

import { icon } from "./layout.mjs";

/** Render a UI mockup inside a browser or phone frame. */
export function device(screen, opts = {}) {
  const { className = "" } = opts;
  if (screen.frame === "phone") {
    return `<div class="device device--phone ${className}">
  <div class="device__screen">
    <div class="phone__status">
      <span>9:41</span>
      <span aria-hidden="true"><svg width="34" height="9" viewBox="0 0 34 9" fill="currentColor"><rect x="0" y="5" width="3" height="4" rx="1"/><rect x="5" y="3.5" width="3" height="5.5" rx="1"/><rect x="10" y="2" width="3" height="7" rx="1"/><rect x="15" y="0" width="3" height="9" rx="1"/><rect x="22" y="1" width="10" height="7" rx="2" fill="none" stroke="currentColor" stroke-width="1"/><rect x="23.5" y="2.5" width="6" height="4" rx="1"/></svg></span>
    </div>
    ${screen.html}
  </div>
</div>`;
  }
  return `<div class="device device--browser ${className}">
  <div class="device__bar">
    <span class="device__dots" aria-hidden="true"><i></i><i></i><i></i></span>
    <span class="device__url">${screen.url || "aurezalabs.com"}</span>
  </div>
  <div class="device__screen">
    ${screen.html}
  </div>
</div>`;
}

/** A project card for the work index and the related-work rail. */
export function projectCard(p, prefix = "") {
  const search = [p.name, p.tagline, p.sector, ...(p.tags || [])].join(" ").toLowerCase();
  return `<article class="card card--hover card--spot pcard" data-group="${p.group}" data-search="${escapeAttr(search)}" data-reveal>
  <a class="pcard__cover" href="${prefix}work/${p.slug}.html" tabindex="-1" aria-hidden="true">
    <span class="pcard__badge">${p.group === "ai" ? "AI system" : "Product"}</span>
    <img src="${prefix}assets/img/cover-${p.slug}.svg" alt="" width="800" height="600" loading="lazy" decoding="async">
  </a>
  <div class="pcard__body">
    <span class="pcard__sector">${p.sector}</span>
    <h3><a href="${prefix}work/${p.slug}.html">${p.name}</a></h3>
    <p class="pcard__tagline">${p.tagline}</p>
    <p>${p.summary.split(". ")[0]}.</p>
    <div class="pcard__foot">
      <span class="pcard__year">${p.year} &middot; ${p.duration}</span>
      <span class="link" aria-hidden="true">Case study ${icon.arrow}</span>
    </div>
  </div>
</article>`;
}

export function escapeAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

/** Section heading with an optional right-hand aside. */
export function secHead({ eyebrow, title, aside, center = false, link }) {
  return `<div class="sec-head${center ? " sec-head--center" : ""}" data-reveal>
  <div class="sec-head__title">
    ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ""}
    <h2>${title}</h2>
  </div>
  ${aside || link ? `<div class="sec-head__aside">${aside || ""}${link ? `<p class="mt-4"><a class="link" href="${link.href}">${link.label} ${icon.arrow}</a></p>` : ""}</div>` : ""}
</div>`;
}

/** Dark call-to-action band used at the foot of most pages. */
export function ctaBand(prefix = "", o = {}) {
  const title = o.title || "Tell us what you run.";
  const body =
    o.body ||
    "A 30-minute call. We will tell you what we would build, roughly what it costs and, more usefully, what we would cut.";
  return `<section class="section">
  <div class="container">
    <div class="band" data-reveal>
      <div>
        <span class="eyebrow on-dark-accent">Start here</span>
        <h2 class="mt-4">${title}</h2>
        <p>${body}</p>
      </div>
      <div class="band__actions">
        <a class="btn btn--on-dark btn--lg" href="${prefix}contact.html">Book a discovery call ${icon.arrow}</a>
        <a class="btn btn--outline-light btn--lg" href="${prefix}work.html">See the work</a>
      </div>
    </div>
  </div>
</section>`;
}
