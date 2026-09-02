/**
 * Work index — filterable catalogue of all fifteen projects.
 */

import { icon } from "../layout.mjs";
import { projectCard, ctaBand } from "../partials.mjs";

export function workPage(projects) {
  const product = projects.filter((p) => p.group === "product");
  const ai = projects.filter((p) => p.group === "ai");

  return `
    <section class="page-head">
      <div class="container">
        <span class="eyebrow">Portfolio</span>
        <h1>Fifteen products, built for the real world.</h1>
        <p class="lead">
          Two practices, one standard. Product engineering for mobile, web and platform, alongside multimodal AI
          that connects what happened with why it happened. Every project below has a full case study.
        </p>

        <div class="filters" role="group" aria-label="Filter projects by practice">
          <button class="filter" type="button" data-filter="all" aria-pressed="true">All work <em>15</em></button>
          <button class="filter" type="button" data-filter="product" aria-pressed="false">Product engineering <em>5</em></button>
          <button class="filter" type="button" data-filter="ai" aria-pressed="false">AI systems <em>10</em></button>
          <label class="visually-hidden" for="work-search">Search projects</label>
          <input class="input filters__search" id="work-search" data-work-search type="search" placeholder="Search by name, sector or capability…">
        </div>
        <p class="kicker mt-5" data-work-count>Showing all 15 projects</p>
      </div>
    </section>

    <div data-work-grid>
      <section class="section section--tight" data-work-group>
        <div class="container">
          <div class="group-head">
            <h2>Product Engineering</h2>
            <span class="badge badge--neutral">05 projects</span>
            <span class="kicker">Mobile &middot; Web &middot; Platform</span>
          </div>
          <p class="soft measure group-head__note">
            Applications taken from early concept through to production software that a business runs on daily.
          </p>
          <div class="work-grid" data-reveal-group="60">
            ${product.map((p) => projectCard(p, "")).join("\n            ")}
          </div>
        </div>
      </section>

      <section class="section section--tight" data-work-group>
        <div class="container">
          <div class="group-head">
            <h2>AI Intelligence Systems</h2>
            <span class="badge badge--neutral">10 projects</span>
            <span class="kicker">Multimodal &middot; Evidence-linked</span>
          </div>
          <p class="soft measure group-head__note">
            Systems that correlate video, telemetry, documents and history to turn raw signal into answers you can
            check, each one carrying the evidence that produced it.
          </p>
          <div class="work-grid" data-reveal-group="60">
            ${ai.map((p) => projectCard(p, "")).join("\n            ")}
          </div>
        </div>
      </section>
    </div>

    <div class="container">
      <p class="work-empty" data-work-empty>
        No projects match that search. <button class="link" type="button" onclick="document.querySelector('[data-work-search]').value='';document.querySelector('[data-work-search]').dispatchEvent(new Event('input'))">Clear it</button> to see all fifteen.
      </p>
    </div>

    ${ctaBand("", {
      title: "Don't see your industry?",
      body: "The patterns repeat: operational data, visual evidence, documents and history, correlated into answers. Tell us what you run and we will tell you what we would build."
    })}
`;
}
