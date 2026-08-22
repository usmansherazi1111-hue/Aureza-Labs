/**
 * Process page — the seven stages, with outputs named.
 */

import { icon } from "../layout.mjs";
import { ctaBand } from "../partials.mjs";

const STEPS = [
  {
    no: "01", title: "Discovery", weeks: "2-4 weeks",
    desc: "We map the operational problem, the people who live with it and the metric that would prove it solved, then cut scope to what can actually ship. Most discovery work is subtraction.",
    out: ["Problem statement", "User map", "Success metric", "Scoped backlog"]
  },
  {
    no: "02", title: "UX & UI Design", weeks: "3-6 weeks",
    desc: "Complete flows for every user type, prototyped and tested before a line of production code. We design the empty, loading, error and offline states too, because that is where most products fall apart.",
    out: ["Flows and wireframes", "Interactive prototype", "Design system", "Accessibility spec"]
  },
  {
    no: "03", title: "Frontend & Mobile", weeks: "6-14 weeks",
    desc: "Designs become real, interactive product. Web and native builds go onto real devices from week one, so the feedback loop runs against something you can hold rather than a slide.",
    out: ["Component library", "Working builds", "Device test matrix", "Performance budgets"]
  },
  {
    no: "04", title: "Backend & Platform", weeks: "6-16 weeks",
    desc: "APIs, data models, authentication and integrations. We settle the tenancy and permission model early because everything downstream inherits from it, and retrofitting it is expensive.",
    out: ["API contracts", "Data model", "Integration layer", "Security review"]
  },
  {
    no: "05", title: "Testing & Hardening", weeks: "3-5 weeks",
    desc: "End-to-end tests across real devices and environments, load testing against realistic volumes, and a security pass. Bugs get found here rather than by your users in week one.",
    out: ["Test suites in CI", "Load test results", "Security findings", "Fix log"]
  },
  {
    no: "06", title: "Launch", weeks: "2-3 weeks",
    desc: "App stores, cloud or on-premise, deployed with monitoring, alerting and a rollback plan written before it is needed. Rollout is staged, never a single switch.",
    out: ["Deployment pipeline", "Monitoring and alerts", "Rollback plan", "Runbook"]
  },
  {
    no: "07", title: "Maintenance & Upgrades", weeks: "Ongoing",
    desc: "Hosting, updates, fixes and new features, or a clean handover to your own team with the documentation to make that realistic. Both are normal endings.",
    out: ["Support agreement", "Handover docs", "Roadmap", "Training"]
  }
];

const FAQ = [
  {
    q: "Can we stop after discovery?",
    a: "Yes, and some clients should. Discovery is a fixed-scope engagement that produces a written problem statement, a scoped backlog and an honest estimate. If that document says the project is not worth building, or that an off-the-shelf tool already covers it, we will say so and the engagement ends there."
  },
  {
    q: "Who owns the code and infrastructure?",
    a: "You do, from the first commit. Repositories sit in your organisation, cloud accounts are yours, and infrastructure is defined as code you can read. There is no proprietary runtime you need us to keep running, and no retainer required to keep the product alive."
  },
  {
    q: "How do you estimate?",
    a: "Per stage, not per project. A twelve-month estimate given in week one is a guess dressed as a commitment. We estimate the next stage precisely and the remainder as a range, then tighten that range at each stage boundary as real information arrives."
  },
  {
    q: "What happens when requirements change mid-build?",
    a: "They will, and the stage structure exists partly for that. Changes are priced and scheduled at stage boundaries rather than absorbed silently, which keeps the trade-off visible: something new comes in, so something else moves out or the stage gets longer."
  },
  {
    q: "Do you work alongside our existing team?",
    a: "Often. We can run as an embedded team beside your engineers, or take a defined component and hand it back with documentation and a walkthrough. Where your team will maintain the result, handover is built into the schedule rather than treated as an afterthought."
  }
];

export function processPage() {
  return `
    <section class="page-head">
      <div class="container">
        <span class="eyebrow">How we work</span>
        <h1>A process built to be interrupted.</h1>
        <p class="lead">
          Every stage produces something you can review, question and stop. If a project is going wrong you should
          find that out at the end of a two-week stage, not at the end of a six-month build.
        </p>
        <dl class="page-head__meta">
          <div><dt>Stages</dt><dd>Seven, each with outputs</dd></div>
          <div><dt>Review cadence</dt><dd>Weekly, against live software</dd></div>
          <div><dt>Typical span</dt><dd>5 to 12 months</dd></div>
          <div><dt>Exit points</dt><dd>End of any stage</dd></div>
        </dl>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="process">
          <aside class="process__rail" data-reveal="left">
            <span class="eyebrow">First sketch to production</span>
            <h2 class="t-h3 mt-5">You are never more than two weeks from something real.</h2>
            <p class="soft mt-5">
              Weekly demos run against working software rather than screenshots. Between them you have access to the
              same board we work from, so progress is observable instead of reported.
            </p>
            <div class="card card--pad mt-8">
              <p class="kicker">Always included</p>
              <ul class="outcomes mt-3">
                <li class="outcome outcome--tight"><span class="outcome__check">${icon.check}</span><p>Fixed-scope stages with named outputs</p></li>
                <li class="outcome outcome--tight"><span class="outcome__check">${icon.check}</span><p>Weekly demo against running software</p></li>
                <li class="outcome outcome--tight"><span class="outcome__check">${icon.check}</span><p>Full source and infrastructure handover</p></li>
                <li class="outcome outcome--tight"><span class="outcome__check">${icon.check}</span><p>NDA on request, before anything is shared</p></li>
              </ul>
            </div>
          </aside>

          <div class="process__steps" data-reveal-group="60">
            ${STEPS.map(stepMarkup).join("\n            ")}
          </div>
        </div>
      </div>
    </section>

    <section class="section section--sunk">
      <div class="container container--narrow">
        <h2 class="center">Questions we get asked first</h2>
        <div class="accordion" data-single data-reveal>
          ${FAQ.map(faqMarkup).join("\n          ")}
        </div>
      </div>
    </section>

    ${ctaBand("", {
      title: "Start with the smallest useful stage.",
      body: "Discovery is fixed-scope and produces a written output. If that document says you should not build the thing, that is a good result, and the project ends there."
    })}
`;
}

function stepMarkup(s) {
  return `<article class="step" data-reveal>
              <span class="step__no">${s.no}</span>
              <div class="step__body">
                <div class="title-row">
                  <h3>${s.title}</h3>
                  <span class="kicker">${s.weeks}</span>
                </div>
                <p>${s.desc}</p>
                <ul class="step__out">${s.out.map((o) => `<li>${o}</li>`).join("")}</ul>
              </div>
            </article>`;
}

function faqMarkup(f, i) {
  return `<div class="accordion__item">
            <button class="accordion__btn" type="button" aria-expanded="${i === 0 ? "true" : "false"}">
              ${f.q}
              <span class="accordion__icon" aria-hidden="true">${icon.plus}</span>
            </button>
            <div class="accordion__panel"><div class="accordion__inner"><div>${f.a}</div></div></div>
          </div>`;
}
