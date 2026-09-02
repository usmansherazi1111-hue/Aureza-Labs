/**
 * Contact page — project brief form plus practical detail.
 */

import { icon, SITE } from "../layout.mjs";

const TYPES = [
  ["mobile", "Mobile application"],
  ["web", "Web application"],
  ["saas", "SaaS platform"],
  ["ai-vision", "AI / vision system"],
  ["data", "Data & analytics"],
  ["blockchain", "Blockchain product"],
  ["unsure", "Not sure yet"]
];

const BUDGETS = [
  ["discovery", "Discovery first"],
  ["under-50", "Under $50k"],
  ["50-150", "$50k - $150k"],
  ["150-400", "$150k - $400k"],
  ["400-plus", "$400k+"]
];

const FAQ = [
  { q: "What should I put in the brief?", a: "The operational problem in plain language, who lives with it day to day, what systems are already in place, and what happens if nothing changes. You do not need a specification; if you had one, you would need us less." },
  { q: "Do you sign NDAs?", a: "Yes, on request and before anything substantive is shared. Send the brief at whatever level of detail you are comfortable with, ask for an NDA in it, and we will have one back to you the same day." },
  { q: "Do you take on small projects?", a: "Sometimes. If the work is genuinely small we will often say so and point you at a simpler answer, including one that does not involve hiring us. Discovery is the honest starting point for anything either side is unsure about." },
  { q: "Can you work with our in-house team?", a: "Yes. We run as an embedded team alongside client engineers on roughly half our projects. Where your team will own the result afterwards, handover and training go into the schedule rather than getting bolted on at the end." },
  { q: "What if we already started and it is going badly?", a: "That is a common first conversation. We will review what exists and tell you honestly whether it is worth continuing, refactoring or replacing, including when the answer is that your existing team should finish it." }
];

export function contactPage() {
  return `
    <section class="page-head">
      <div class="container">
        <span class="eyebrow">Contact</span>
        <h1>Tell us what you run.</h1>
        <p class="lead">
          A paragraph is enough to start. We read every brief ourselves and get back to you as soon as we can with a
          considered view, not a calendar link.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div data-reveal="left">
            <h2 class="t-h3">What happens next</h2>
            <ol class="timeline mt-6">
              <li class="tl-item"><span class="tl-item__when">Day 0</span><div class="tl-item__body"><h4>You send a brief</h4><p>The problem, who lives with it, and any constraint you already know about. Rough is fine.</p></div></li>
              <li class="tl-item"><span class="tl-item__when">Shortly after</span><div class="tl-item__body"><h4>We reply with a view</h4><p>What we think you should build, what we would cut, and whether we are the right team for it.</p></div></li>
              <li class="tl-item"><span class="tl-item__when">Week 1</span><div class="tl-item__body"><h4>A 30-minute call</h4><p>No deck. We ask about the environment, the systems already in place, and what happens if nothing changes.</p></div></li>
              <li class="tl-item"><span class="tl-item__when">Week 2</span><div class="tl-item__body"><h4>Scoped proposal</h4><p>Fixed discovery scope, timeline and price, with a written output you keep regardless of what follows.</p></div></li>
            </ol>

            <div class="contact-list">
              <a class="contact-item" href="mailto:${SITE.email}">
                <span class="contact-item__icon">${icon.mail}</span>
                <span class="contact-item__body"><b>Email us directly</b><span>${SITE.email}</span></span>
              </a>
              <div class="contact-item">
                <span class="contact-item__icon">${icon.clock}</span>
                <span class="contact-item__body"><b>Response time</b><span>As soon as we can, on every brief</span></span>
              </div>
              <div class="contact-item">
                <span class="contact-item__icon">${icon.globe}</span>
                <span class="contact-item__body"><b>Where we work</b><span>Remote, worldwide, with overlapping hours agreed up front</span></span>
              </div>
              <div class="contact-item">
                <span class="contact-item__icon">${icon.doc}</span>
                <span class="contact-item__body"><b>Confidentiality</b><span>NDA on request, signed before anything is shared</span></span>
              </div>
            </div>
          </div>

          <div class="contact-card" data-reveal="right">
            <div class="contact-card__intro">
              <span class="badge"><span class="badge__dot"></span>Accepting projects</span>
              <h2 class="t-h3 mt-4">Project brief</h2>
              <p class="soft mt-2 t-base">The fields marked required are the only ones we actually need.</p>
            </div>

            <form class="form" data-contact-form novalidate>
              <div class="form__row">
                <div class="field">
                  <label for="f-name">Name <span>Required</span></label>
                  <input class="input" id="f-name" name="name" type="text" autocomplete="name" placeholder="Jane Cooper">
                  <p class="field__error" role="alert"></p>
                </div>
                <div class="field">
                  <label for="f-email">Email <span>Required</span></label>
                  <input class="input" id="f-email" name="email" type="email" autocomplete="email" placeholder="jane@company.com">
                  <p class="field__error" role="alert"></p>
                </div>
              </div>

              <div class="form__row">
                <div class="field">
                  <label for="f-company">Company</label>
                  <input class="input" id="f-company" name="company" type="text" autocomplete="organization" placeholder="Northwind Logistics">
                </div>
                <div class="field">
                  <label for="f-budget">Budget range</label>
                  <select class="select" id="f-budget" name="budget">
                    ${BUDGETS.map(([v, l]) => `<option value="${v}">${l}</option>`).join("\n                    ")}
                  </select>
                </div>
              </div>

              <fieldset class="field fieldset-reset">
                <legend class="field-legend">What do you need?</legend>
                <div class="chips-input">
                  ${TYPES.map(([v, l], i) => `<input type="radio" name="project-type" id="t-${v}" value="${v}"${i === 0 ? " checked" : ""}><label for="t-${v}">${l}</label>`).join("\n                  ")}
                </div>
              </fieldset>

              <div class="field">
                <label for="f-message">Project description <span>Required</span></label>
                <textarea class="textarea" id="f-message" name="message" placeholder="The operational problem, who lives with it, the systems already in place, and the timeline you are working to."></textarea>
                <p class="field__error" role="alert"></p>
              </div>

              <p class="form__status" data-form-status role="alert"></p>
              <button class="btn btn--lg" type="submit">Send brief ${icon.arrow}</button>
              <p class="form__note">No retainers required &middot; NDA on request &middot; We reply to every brief</p>
            </form>

            <div class="form-success">
              <svg class="form-success__icon" width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                <circle cx="28" cy="28" r="26" stroke="currentColor" stroke-width="2" opacity=".35"/>
                <path d="M17 29l7.5 7.5L39 21" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h3>Brief received.</h3>
              <p>Thank you. We read every brief ourselves, and you will hear back from us as soon as possible.</p>
              <button class="btn btn--ghost" type="button" data-form-reset>Send another</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--sunk" id="faq">
      <div class="container container--narrow">
        <h2 class="center">Working with us</h2>
        <div class="accordion mt-10" data-single data-reveal>
          ${FAQ.map((f, i) => `<div class="accordion__item">
            <button class="accordion__btn" type="button" aria-expanded="${i === 0 ? "true" : "false"}">
              ${f.q}<span class="accordion__icon" aria-hidden="true">${icon.plus}</span>
            </button>
            <div class="accordion__panel"><div class="accordion__inner"><div>${f.a}</div></div></div>
          </div>`).join("\n          ")}
        </div>
      </div>
    </section>
`;
}
