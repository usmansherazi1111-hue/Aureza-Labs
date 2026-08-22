/**
 * Home page.
 */

import { icon, scribble } from "../layout.mjs";
import { device, secHead, ctaBand } from "../partials.mjs";
import { serviceArt } from "../cover.mjs";

const SERVICES = [
  { no: "01", kind: "mobile", title: "Mobile Applications", desc: "Native-quality iOS and Android built for the field, the floor and the warehouse — including the parts with no signal.", meta: ["React Native", "Offline-first", "Device hardware"] },
  { no: "02", kind: "web", title: "Web Applications", desc: "Dashboards, portals and customer-facing product that stay fast as the data grows and accessible as the team does.", meta: ["React", "TypeScript", "WCAG 2.2"] },
  { no: "03", kind: "ai", title: "AI-Powered Products", desc: "Vision, document intelligence and root-cause engines that ship with evidence attached, never a bare probability.", meta: ["Multimodal", "RAG", "Evaluation"] },
  { no: "04", kind: "saas", title: "SaaS & Enterprise Platforms", desc: "Multi-tenant platforms with roles, billing, analytics and the integrations your operation already runs on.", meta: ["Multi-tenant", "SSO", "Billing"] },
  { no: "05", kind: "blockchain", title: "Blockchain Applications", desc: "Wallet identity, encrypted messaging and on-chain records — used where they genuinely help, not as decoration.", meta: ["EVM", "Cryptography", "Audited"] },
  { no: "06", kind: "data", title: "Data & Analytics", desc: "Pipelines, warehouses and the reporting layer above them, built so the numbers reconcile with the source systems.", meta: ["Pipelines", "Warehouse", "dbt"] }
];

export function homePage(projects) {
  const featured = ["razor-erp", "kilwa", "linetrace", "chainmail"]
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean);

  const heroScreen = projects.find((p) => p.slug === "linetrace").screens[0];
  const heroPhone = projects.find((p) => p.slug === "razor-erp").screens[0];

  return `
    <!-- ============================ HERO ============================ -->
    <section class="hero grain">
      <div class="hero__bg" aria-hidden="true"></div>
      <div class="hero__mesh" aria-hidden="true"></div>
      <div class="container hero__grid">
        <div data-reveal="left">
          <span class="eyebrow">Product engineering &middot; Applied AI</span>
          <h1>
            Software for operations that
            <span class="ink">actually run${scribble}</span>
            on it.
          </h1>
          <p class="lead hero__lead">
            Aureza Labs builds <strong>mobile, web and platform applications</strong> — and multimodal AI systems
            that connect what happened with <strong>why it happened</strong>. Fifteen products shipped into
            warehouses, hospitals, plants and trading desks.
          </p>
          <div class="hero__actions">
            <a class="btn btn--lg" href="contact.html">Start a project ${icon.arrow}</a>
            <a class="btn btn--ghost btn--lg" href="work.html">See the work</a>
          </div>
          <div class="hero__proof">
            <div class="hero__proof-item">
              <b><span data-count="15">15</span></b>
              <span>Products in production</span>
            </div>
            <div class="hero__proof-item">
              <b><span data-count="10">10</span></b>
              <span>Industries served</span>
            </div>
            <div class="hero__proof-item">
              <b><span data-count="8">8</span></b>
              <span>Disciplines in-house</span>
            </div>
          </div>
        </div>

        <div class="hero__visual" data-reveal="right">
          <span class="hero__chip hero__chip--tl">${icon.spark} Evidence-linked outputs</span>
          ${device(heroScreen)}
          ${device(heroPhone)}
          <span class="hero__chip hero__chip--bl">${icon.shield} Works offline on the floor</span>
        </div>
      </div>
    </section>

    <!-- ============================ CAPABILITY TICKER ============================ -->
    <section class="strip">
      <div class="container">
        <p class="strip__label">Shipped across</p>
      </div>
      <div class="marquee" aria-hidden="true">
        <div class="marquee__track">
          ${marqueeItems()}
        </div>
        <div class="marquee__track">
          ${marqueeItems()}
        </div>
      </div>
      <p class="visually-hidden">Manufacturing, healthcare, logistics and freight, finance, warehousing, oil and gas, pharmaceutical, public infrastructure, recruitment, and Web3.</p>
    </section>
`;
}

function marqueeItems() {
  const items = [
    "Manufacturing", "Healthcare", "Logistics & Freight", "Finance", "Warehousing",
    "Oil & Gas", "Pharmaceutical", "Public Infrastructure", "Recruitment", "Web3"
  ];
  return items
    .map(
      (t) =>
        `<span class="marquee__item"><svg width="7" height="7" viewBox="0 0 8 8" aria-hidden="true"><circle cx="4" cy="4" r="4" fill="currentColor"/></svg>${t}</span>`
    )
    .join("\n          ");
}

export { SERVICES };

/** Remainder of the home page: services, approach, work, proof, CTA. */
export function homeRest(projects) {
  const featured = ["razor-erp", "kilwa", "linetrace", "chainmail"]
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean);

  return `
    <!-- ============================ SERVICES ============================ -->
    <section class="section" id="services">
      <div class="container">
        ${secHead({
          eyebrow: "What we build",
          title: "Eight disciplines, one team",
          aside:
            "Design, mobile, web, backend, data, AI, infrastructure and QA sit under one roof — so nothing gets lost in the handover between three agencies.",
          link: { href: "services.html", label: "All services" }
        })}
        <div class="svc-grid" data-reveal-group="60">
          ${SERVICES.map(
            (s) => `<article class="card card--hover svc" data-reveal>
            <div class="svc__art">${serviceArt(s.kind)}</div>
            <div class="svc__body">
              <span class="svc__no">${s.no}</span>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
              <ul class="svc__meta">${s.meta.map((m) => `<li>${m}</li>`).join("")}</ul>
            </div>
          </article>`
          ).join("\n          ")}
        </div>
        <p class="soft mt-8 t-base" data-reveal>
          <strong>Also in-house:</strong> enterprise systems &middot; API and system integrations &middot; cloud and edge deployment &middot; QA and release engineering.
          <a class="link" href="services.html">See how each works ${icon.arrow}</a>
        </p>
      </div>
    </section>

    <!-- ============================ POSITION ============================ -->
    <section class="section section--sunk">
      <div class="container">
        <div class="split">
          <div data-reveal="left">
            <span class="eyebrow">How we think</span>
            <h2 class="mt-5">Most systems tell you <em class="editorial">what</em> happened. The useful ones tell you <em class="editorial">why</em>.</h2>
            <p class="lead mt-6">
              A vision system that flags a defective unit has done a fraction of the job. The expensive question is
              what changed twelve seconds earlier — and answering it means putting video, telemetry, batch records
              and operator actions on one clock.
            </p>
            <p class="soft mt-5 measure">
              That principle runs through everything we ship. A number without its source is a liability, an alert
              without its evidence gets ignored, and a model that cannot show its working gets switched off within a
              quarter. So we build the evidence path first and the interface on top of it.
            </p>
            <p class="mt-8"><a class="link" href="process.html">How we work, stage by stage ${icon.arrow}</a></p>
          </div>
          <div data-reveal="right">
            ${device(projects.find((p) => p.slug === "netcause").screens[0])}
            <p class="screen-note">
              <b>NetCause &middot; incident view</b>
              Eleven thousand alarms reduced to three ranked hypotheses — each scored on how much of the observed
              alarm set it explains, and what it leaves unaccounted for.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================ SELECTED WORK ============================ -->
    <section class="section">
      <div class="container">
        ${secHead({
          eyebrow: "Selected work",
          title: "Recently shipped",
          aside: "Four of fifteen. Each case study covers the problem, the architecture, the stack and what actually changed.",
          link: { href: "work.html", label: "Full portfolio" }
        })}
        <div class="feature-grid" data-reveal-group="80">
          ${featured.map((p) => featureCard(p)).join("\n          ")}
        </div>
      </div>
    </section>
`;
}

function featureCard(p) {
  return `<article class="card card--hover card--spot fcard" data-reveal>
    <a class="fcard__media" href="work/${p.slug}.html" tabindex="-1" aria-hidden="true">
      ${device(p.screens.find((s) => s.frame === "browser") || p.screens[0])}
    </a>
    <div class="fcard__body">
      <span class="fcard__tag">${p.sector} &middot; ${p.group === "ai" ? "AI system" : "Product"}</span>
      <h3><a href="work/${p.slug}.html">${p.name}</a></h3>
      <p>${p.tagline}</p>
      <div class="fcard__foot">
        <span class="fcard__stat">${p.metrics[0].value} ${p.metrics[0].label}</span>
        <a class="link" href="work/${p.slug}.html">Case study ${icon.arrow}</a>
      </div>
    </div>
  </article>`;
}

/** Proof metrics, testimonial-free social proof, and the closing band. */
export function homeProof(projects) {
  return `
    <!-- ============================ PROOF ============================ -->
    <section class="section section--sunk">
      <div class="container">
        ${secHead({
          eyebrow: "Live from our products",
          title: "Numbers our software actually reports",
          aside: "Figures pulled from product dashboards rather than a marketing deck. Each one links to the case study behind it."
        })}
        <div class="stats" data-reveal>
          <div class="stat"><b><span data-count="1284">1,284</span></b><span>SKUs live-tracked &middot; <a class="link link--quiet" href="work/razor-erp.html">Razor ERP</a></span></div>
          <div class="stat"><b><span data-count="2.41" data-prefix="$" data-suffix="M" data-decimals="2">$2.41M</span></b><span>Portfolio under analysis &middot; <a class="link link--quiet" href="work/kilwa.html">Kilwa</a></span></div>
          <div class="stat"><b><span data-count="11204">11,204</span></b><span>Alarms reduced to 3 causes &middot; <a class="link link--quiet" href="work/netcause.html">NetCause</a></span></div>
          <div class="stat"><b><span data-count="21" data-suffix="d">21d</span></b><span>Average time-to-hire &middot; <a class="link link--quiet" href="work/the-walt.html">The Walt</a></span></div>
        </div>

        <div class="grid cols-3 mt-12" style="--gap:20px" data-reveal-group="70">
          ${[
            { i: icon.shield, t: "Evidence before interface", d: "Every system we ship can show its working. If a claim cannot be traced to a source, it does not get rendered." },
            { i: icon.bolt, t: "Built for the environment", d: "Gloved hands, poor signal, steel racking, night shifts. We design for where the software actually runs." },
            { i: icon.doc, t: "You own everything", d: "Source, infrastructure, documentation and the deployment pipeline. No retainer required to keep the lights on." }
          ]
            .map(
              (c) => `<div class="card card--pad card--hover" data-reveal>
            <div class="fitem__icon icon-chip-sm">${c.i}</div>
            <h3 class="mt-4 t-lg">${c.t}</h3>
            <p class="soft mt-2 t-base">${c.d}</p>
          </div>`
            )
            .join("\n          ")}
        </div>
      </div>
    </section>

    ${ctaBand("")}
`;
}
