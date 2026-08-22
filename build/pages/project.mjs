/**
 * Case-study page template.
 * Renders one project from the catalogue: problem, approach, features,
 * architecture, stack, outcomes, timeline, interface and neighbours.
 */

import { icon } from "../layout.mjs";
import { device, projectCard } from "../partials.mjs";

const P = "../"; // project pages live one level down

export function projectPage(p, all) {
  const idx = all.findIndex((x) => x.slug === p.slug);
  const prev = all[(idx - 1 + all.length) % all.length];
  const next = all[(idx + 1) % all.length];
  const related = all
    .filter((x) => x.group === p.group && x.slug !== p.slug)
    .slice(0, 3);

  return `
${projHero(p)}
${projMetrics(p)}
${projNarrative(p)}
${projScreens(p)}
${projFeatures(p)}
${projArchitecture(p)}
${projStack(p)}
${projOutcomes(p)}
${projTimeline(p)}
${projRelated(related)}
${projNav(prev, next)}
${projCta(p)}
`;
}

/* ---------------------------------------------------------- */

function projHero(p) {
  return `    <section class="proj-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="${P}index.html">Home</a> ${icon.chevron}
          <a href="${P}work.html">Work</a> ${icon.chevron}
          <a href="${P}work.html?filter=${p.group}">${p.group === "ai" ? "AI systems" : "Product engineering"}</a> ${icon.chevron}
          <span aria-current="page">${p.name}</span>
        </nav>

        <div class="proj-hero__grid">
          <div data-reveal="left">
            <span class="badge">${p.group === "ai" ? "AI intelligence system" : "Product engineering"}</span>
            <h1>${p.name}</h1>
            <p class="proj-hero__tagline">${p.tagline}</p>
            <p class="proj-hero__summary">${p.summary}</p>
            <div class="taglist proj-hero__tags">
              ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("\n              ")}
            </div>
            <dl class="proj-facts">
              <div><dt>Sector</dt><dd>${p.sector}</dd></div>
              <div><dt>Year</dt><dd>${p.year}</dd></div>
              <div><dt>Duration</dt><dd>${p.duration}</dd></div>
              <div><dt>Team</dt><dd>${p.team}</dd></div>
              <div><dt>Platforms</dt><dd>${p.platforms}</dd></div>
              <div><dt>Status</dt><dd>${p.status}</dd></div>
            </dl>
          </div>
          <div data-reveal="right">
            <img src="${P}assets/img/cover-${p.slug}.svg" alt="${p.name} — visual identity for the case study"
                 width="800" height="600" class="cover-figure">
          </div>
        </div>
      </div>
    </section>`;
}

function projMetrics(p) {
  return `    <section class="section section--tight section--sunk">
      <div class="container">
        <div class="stats" data-reveal>
          ${p.metrics
            .map(
              (m) => `<div class="stat">
            <b>${m.value}</b>
            <span>${m.label}</span>
            <span class="stat__note">${m.note}</span>
          </div>`
            )
            .join("\n          ")}
        </div>
      </div>
    </section>`;
}

function projNarrative(p) {
  return `    <section class="section">
      <div class="container">
        <div class="narrative flush" data-reveal>
          <p class="narrative__label">01 — The problem</p>
          <div class="narrative__body">
            ${p.challenge.map((c) => `<p>${c}</p>`).join("\n            ")}
          </div>
        </div>

        <div class="narrative" data-reveal>
          <p class="narrative__label">02 — What we did</p>
          <div class="narrative__body">
            ${p.approach.map((c) => `<p>${c}</p>`).join("\n            ")}
            <blockquote class="pullquote">${p.pullquote}</blockquote>
          </div>
        </div>
      </div>
    </section>`;
}

function projScreens(p) {
  return `    <section class="section section--tight">
      <div class="container">
        <div class="sec-head" data-reveal>
          <div class="sec-head__title">
            <span class="eyebrow">Interface</span>
            <h2>What it looks like in use</h2>
          </div>
          <p class="sec-head__aside">Two of the screens that carry the most weight in daily use, rebuilt here from the production design system.</p>
        </div>
        <div class="screens" data-reveal-group="90">
          ${p.screens
            .map(
              (s) => `<div data-reveal>
            ${s.frame === "phone" ? `<div class="phone-stage">${device(s)}</div>` : device(s)}
            <p class="screen-note"><b>${s.caption.title}</b>${s.caption.body}</p>
          </div>`
            )
            .join("\n          ")}
        </div>
      </div>
    </section>`;
}

function projFeatures(p) {
  return `    <section class="section section--sunk">
      <div class="container">
        <div class="sec-head" data-reveal>
          <div class="sec-head__title">
            <span class="eyebrow">Capabilities</span>
            <h2>What the system does</h2>
          </div>
          <p class="sec-head__aside">Grouped by the job each set of capabilities exists to do, rather than by which team built it.</p>
        </div>
        <div class="fgroups">
          ${p.featureGroups
            .map(
              (g, gi) => `<div data-reveal>
            <div class="fgroup__head">
              <h3>${g.title}</h3>
              <span>${String(gi + 1).padStart(2, "0")} &middot; ${g.note}</span>
            </div>
            <div class="flist" data-reveal-group="50">
              ${g.items
                .map(
                  (it) => `<article class="fitem" data-reveal>
                <span class="fitem__icon">${icon.check}</span>
                <h4>${it.title}</h4>
                <p>${it.desc}</p>
              </article>`
                )
                .join("\n              ")}
            </div>
          </div>`
            )
            .join("\n          ")}
        </div>
      </div>
    </section>`;
}

function projArchitecture(p) {
  return `    <section class="section">
      <div class="container">
        <div class="sec-head" data-reveal>
          <div class="sec-head__title">
            <span class="eyebrow">Architecture</span>
            <h2>How it is put together</h2>
          </div>
          <p class="sec-head__aside">Layer by layer, with the reason each one exists — because the reason is usually the interesting part.</p>
        </div>
        <div class="layers" data-reveal>
          ${p.architecture
            .map(
              (l, i) => `<div class="layer">
            <div class="layer__name"><span class="layer__no">${String(i + 1).padStart(2, "0")}</span>${l.name}</div>
            <p>${l.desc}</p>
            <ul class="layer__tech">${l.tech.map((t) => `<li>${t}</li>`).join("")}</ul>
          </div>`
            )
            .join("\n          ")}
        </div>
      </div>
    </section>`;
}

function projStack(p) {
  return `    <section class="section section--tight">
      <div class="container">
        <div class="narrative" data-reveal>
          <p class="narrative__label">Technology</p>
          <div class="narrative__body narrative__body--wide">
            <div class="stack-grid">
              ${Object.entries(p.stack)
                .map(
                  ([label, items]) => `<div class="stack-col">
                <h4>${label}</h4>
                <ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>
              </div>`
                )
                .join("\n              ")}
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function projOutcomes(p) {
  return `    <section class="section section--sunk">
      <div class="container">
        <div class="split">
          <div data-reveal="left">
            <span class="eyebrow">Outcome</span>
            <h2 class="mt-5">What changed</h2>
            <p class="soft mt-5 measure-sm">
              Measured against how the operation ran before, not against a benchmark chosen after the fact.
            </p>
          </div>
          <div data-reveal="right">
            <ul class="outcomes">
              ${p.outcomes
                .map(
                  (o) => `<li class="outcome">
                <span class="outcome__check">${icon.check}</span>
                <p><strong>${o.strong}</strong> ${o.rest}</p>
              </li>`
                )
                .join("\n              ")}
            </ul>
          </div>
        </div>
      </div>
    </section>`;
}

function projTimeline(p) {
  return `    <section class="section">
      <div class="container">
        <div class="narrative flush" data-reveal>
          <p class="narrative__label">How it ran</p>
          <div class="narrative__body narrative__body--wide">
            <ol class="timeline">
              ${p.timeline
                .map(
                  (t) => `<li class="tl-item">
                <span class="tl-item__when">${t.when}</span>
                <div class="tl-item__body"><h4>${t.title}</h4><p>${t.desc}</p></div>
              </li>`
                )
                .join("\n              ")}
            </ol>
          </div>
        </div>
      </div>
    </section>`;
}

function projRelated(related) {
  if (!related.length) return "";
  return `    <section class="section section--tight section--sunk">
      <div class="container">
        <div class="sec-head" data-reveal>
          <div class="sec-head__title">
            <span class="eyebrow">Related work</span>
            <h2>From the same practice</h2>
          </div>
          <p class="sec-head__aside"><a class="link" href="${P}work.html">All fifteen projects ${icon.arrow}</a></p>
        </div>
        <div class="work-grid" data-reveal-group="60">
          ${related.map((r) => projectCard(r, P)).join("\n          ")}
        </div>
      </div>
    </section>`;
}

function projNav(prev, next) {
  return `    <section>
      <div class="container">
        <nav class="projnav" aria-label="Project navigation">
          <a href="${P}work/${prev.slug}.html">
            <span class="kicker">${icon.arrowLeft} Previous</span>
            <strong>${prev.name}</strong>
            <span class="desc">${prev.tagline}</span>
          </a>
          <a class="is-next" href="${P}work/${next.slug}.html">
            <span class="kicker">Next ${icon.arrow}</span>
            <strong>${next.name}</strong>
            <span class="desc">${next.tagline}</span>
          </a>
        </nav>
      </div>
    </section>`;
}

function projCta(p) {
  const type = p.group === "ai" ? "ai-vision" : "web";
  return `    <section class="section section--flush-top">
      <div class="container">
        <div class="band" data-reveal>
          <div>
            <span class="eyebrow on-dark-accent">Something similar?</span>
            <h2 class="mt-4">Running into the same problem ${p.name} solved?</h2>
            <p>
              Tell us what you run. We will reply within two business days with what we would build for your
              situation — and, just as usefully, what we would leave out.
            </p>
          </div>
          <div class="band__actions">
            <a class="btn btn--on-dark btn--lg" href="${P}contact.html?type=${type}&amp;ref=${encodeURIComponent(p.name)}">Start a conversation ${icon.arrow}</a>
            <a class="btn btn--outline-light btn--lg" href="${P}work.html">More work</a>
          </div>
        </div>
      </div>
    </section>`;
}
