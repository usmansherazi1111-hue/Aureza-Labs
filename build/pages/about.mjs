/**
 * About page — who we are, how we decide, what we refuse.
 */

import { icon } from "../layout.mjs";
import { device, ctaBand, secHead } from "../partials.mjs";

const VALUES = [
  {
    no: "01", t: "Evidence before interface",
    d: "We build the evidence path first and the screen on top of it. A number without a source is a liability, and an alert nobody can interrogate gets muted within a month."
  },
  {
    no: "02", t: "Scope is subtraction",
    d: "The most valuable thing discovery produces is the list of what we are not building. Every feature that survives has to earn its place against the ones we cut."
  },
  {
    no: "03", t: "Design for the environment",
    d: "Gloved hands, poor signal, steel racking, night shifts, a screen in direct sunlight. The environment is a requirement, not a footnote."
  },
  {
    no: "04", t: "You own the result",
    d: "Source, infrastructure, documentation and pipeline are yours from the first commit. We would rather be re-hired than be difficult to leave."
  },
  {
    no: "05", t: "Say the uncomfortable thing early",
    d: "If a project should not be built, or a chain is not the answer, or the data is not there yet, we say so in week two rather than month six."
  },
  {
    no: "06", t: "Ship, then keep shipping",
    d: "Launch is a stage, not a finish line. The products we are proudest of are the ones still getting better three years later."
  }
];

const DISCIPLINE_LIST = [
  { n: "01", t: "Product design & UX", d: "Flows, prototypes and design systems, including the empty, error and offline states most teams skip." },
  { n: "02", t: "Mobile engineering", d: "React Native and native iOS and Android, built offline-first where the environment demands it." },
  { n: "03", t: "Frontend engineering", d: "React and TypeScript, accessible to WCAG 2.2 AA and held to performance budgets in CI." },
  { n: "04", t: "Backend & platform", d: "APIs, data models, tenancy and permissions, designed to survive the second and third customer." },
  { n: "05", t: "Data engineering", d: "Pipelines, warehouses and reconciliation, so the reporting layer agrees with the source systems." },
  { n: "06", t: "Applied AI & vision", d: "Multimodal models, retrieval and evaluation harnesses, always with the evidence path attached." },
  { n: "07", t: "Infrastructure & edge", d: "Cloud, on-premise and industrial edge deployment, defined as code and handed over in full." },
  { n: "08", t: "QA & release", d: "Automated suites, device matrices, load testing and staged rollout with a rollback plan." }
];

export function aboutPage(projects) {
  return `
    <section class="page-head">
      <div class="container">
        <span class="eyebrow">About Aureza Labs</span>
        <h1>One team, from sketch to production.</h1>
        <p class="lead">
          We build software that solves operational, financial and communication problems, and AI that explains
          causes rather than only detecting events. Fifteen products, ten industries, one standard.
        </p>
        <dl class="page-head__meta">
          <div><dt>Founded</dt><dd>Product &amp; applied AI studio</dd></div>
          <div><dt>Model</dt><dd>Remote, working worldwide</dd></div>
          <div><dt>Disciplines</dt><dd>Eight, all in-house</dd></div>
          <div><dt>Shipped</dt><dd>15 products in production</dd></div>
        </dl>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="split">
          <div data-reveal="left">
            <span class="eyebrow">What we actually do</span>
            <h2 class="mt-5">We take the awkward projects: the ones with a warehouse, a regulator or a plant floor attached.</h2>
            <p class="lead mt-6">
              Consumer apps are well served. What is underserved is the operational middle: a recycling facility
              running on paper travellers, a NOC drowning in alarms, a quality unit reconstructing an investigation
              from four disconnected systems.
            </p>
            <p class="soft mt-5 measure">
              Those projects share a shape. There is real-world data nobody has correlated, a legacy system that
              cannot be replaced, an environment hostile to software, and a user who will abandon the product in a
              week if it slows them down. We have built fifteen of them, and the patterns repeat.
            </p>
            <p class="mt-8"><a class="link" href="work.html">See all fifteen ${icon.arrow}</a></p>
          </div>
          <div data-reveal="right">
            ${device(projects.find((p) => p.slug === "batchresolve").screens[1])}
            <p class="screen-note">
              <b>BatchResolve &middot; audit trail</b>
              In a regulated environment every retrieval, proposal and acceptance is recorded immutably, designed
              to be handed to an inspector rather than reconstructed for one.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--sunk">
      <div class="container">
        ${secHead({
          eyebrow: "How we decide",
          title: "Six positions we hold",
          aside: "These are not values on a wall. Each one has cost us work at least once, which is roughly how you tell a position from a slogan."
        })}
        <div class="values" data-reveal-group="60">
          ${VALUES.map(
            (v) => `<article class="value card--hover" data-reveal>
            <span class="value__no">${v.no}</span>
            <h3>${v.t}</h3>
            <p>${v.d}</p>
          </article>`
          ).join("\n          ")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${secHead({
          eyebrow: "The team",
          title: "Eight disciplines under one roof",
          aside: "No subcontracting, no handover between agencies. The people who designed it are the people who build it and the people who deploy it.",
          link: { href: "services.html", label: "What each one delivers" }
        })}
        <div class="disciplines" data-reveal>
          ${DISCIPLINE_LIST.map(
            (d) => `<article class="discipline">
            <span class="discipline__no">${d.n}</span>
            <div class="discipline__body">
              <h3>${d.t}</h3>
              <p>${d.d}</p>
            </div>
          </article>`
          ).join("\n          ")}
        </div>
      </div>
    </section>

    ${ctaBand("", {
      title: "Tell us what you run.",
      body: "Describe the operational problem in a paragraph. We will reply within two business days with what we would build, roughly what it costs, and what we would cut."
    })}
`;
}
