/**
 * Services page — the eight disciplines, expanded.
 */

import { icon } from "../layout.mjs";
import { ctaBand } from "../partials.mjs";
import { serviceArt } from "../cover.mjs";

const DISCIPLINES = [
  {
    no: "01", kind: "mobile", title: "Mobile Applications",
    lede: "Native-quality iOS and Android for people who are standing up, wearing gloves and out of signal.",
    body: "Most enterprise mobile work fails on environment rather than features. We design for one-handed use, large targets, high-contrast readability under warehouse lighting, and an offline path that is architectural rather than a retry loop bolted on at the end.",
    deliver: ["Offline-first data layer with conflict resolution", "Hardware scanner and camera integration", "Store submission and managed distribution", "Crash and performance monitoring from day one"],
    tech: ["React Native", "Swift", "Kotlin", "SQLite", "MMKV"]
  },
  {
    no: "02", kind: "web", title: "Web Applications",
    lede: "Dashboards, portals and customer-facing product that stay fast as the data grows.",
    body: "A web app slows down in predictable ways: unbounded lists, chatty endpoints, and charts that re-render on every keystroke. We build against those from the start, and hold to WCAG 2.2 AA because an interface a keyboard user cannot operate is an unfinished interface.",
    deliver: ["Component library and design tokens you keep", "Server-driven data with cache invalidation that works", "WCAG 2.2 AA conformance and keyboard paths", "Core Web Vitals budgets enforced in CI"],
    tech: ["React", "TypeScript", "Vite", "TanStack Query", "Visx"]
  },
  {
    no: "03", kind: "ai", title: "AI-Powered Products",
    lede: "Vision, document intelligence and root-cause engines that ship with the evidence attached.",
    body: "The failure mode of applied AI is not accuracy, it is trust. A model that emits a probability with no way to interrogate it gets ignored within a quarter. Everything we build shows its working: the region, the passage, the deviation window, the precedent.",
    deliver: ["Evaluation harness before any model reaches production", "Retrieval and citation layers that gate generation", "Human-in-the-loop review with a full audit trail", "Drift monitoring against real operator decisions"],
    tech: ["PyTorch", "Claude API", "pgvector", "ONNX", "MONAI"]
  },
  {
    no: "04", kind: "saas", title: "SaaS & Enterprise Platforms",
    lede: "Multi-tenant platforms with roles, billing, analytics and the integrations you already depend on.",
    body: "Tenancy, permissions and billing are the three things that are painful to retrofit and straightforward to design in. We settle the isolation model in week one, because every later decision inherits from it.",
    deliver: ["Tenancy and isolation model settled up front", "Role and permission system with an audit trail", "Billing, metering and subscription lifecycle", "SSO, SCIM and enterprise onboarding"],
    tech: ["Node.js", "PostgreSQL", "Redis", "Stripe", "SAML/OIDC"]
  }
];

DISCIPLINES.push(
  {
    no: "05", kind: "blockchain", title: "Blockchain Applications",
    lede: "Wallet identity, encrypted messaging and on-chain records, where they genuinely earn their place.",
    body: "Most problems presented as blockchain problems are database problems, and we will tell you when that is the case. Where a chain genuinely helps, in verifiable existence, keyless identity and multi-party records with no trusted operator, we build it properly and have the cryptography reviewed.",
    deliver: ["Threat model written before any contract is", "Client-side cryptography with audited primitives", "Contracts with external review", "Clear separation of on-chain and off-chain data"],
    tech: ["Solidity", "viem", "libsodium", "Hardhat", "IPFS"]
  },
  {
    no: "06", kind: "data", title: "Data & Analytics",
    lede: "Pipelines, warehouses and the reporting layer above them, with numbers that reconcile.",
    body: "A dashboard nobody trusts is worse than no dashboard, because it generates arguments instead of decisions. We instrument lineage and reconciliation first, so when a number looks wrong you can find out in minutes whether it is.",
    deliver: ["Ingestion with schema contracts and lineage", "Modelled warehouse layer with tested transformations", "Reconciliation against source systems", "Self-serve reporting the team can extend"],
    tech: ["dbt", "Airflow", "TimescaleDB", "Kafka", "DuckDB"]
  },
  {
    no: "07", kind: "integration", title: "API & System Integration",
    lede: "Connecting the systems you already run, including the ones nobody wants to touch.",
    body: "Every operational project meets an ERP, a WMS, a historian or a PACS that predates everyone in the room. We treat those as fixed constraints rather than obstacles, and build the anti-corruption layer that keeps their quirks out of your new system.",
    deliver: ["Integration mapping and failure-mode analysis", "Anti-corruption layers around legacy contracts", "Idempotent, replayable sync with dead-letter handling", "Contract tests against every external system"],
    tech: ["REST", "GraphQL", "OPC UA", "HL7 FHIR", "DICOM"]
  },
  {
    no: "08", kind: "cloud", title: "Cloud & Edge Deployment",
    lede: "From managed cloud to a gateway bolted to a machine on a plant floor.",
    body: "Not every workload belongs in a data centre. Vision inference on a production line runs at the edge because bandwidth and latency say so, and sometimes because footage is not permitted to leave the site. We deploy where the constraints point.",
    deliver: ["Infrastructure as code, handed over in full", "CI/CD with staged rollout and rollback", "Edge fleet management and remote update", "Observability, alerting and an on-call runbook"],
    tech: ["Docker", "Kubernetes", "Terraform", "AWS", "NVIDIA Jetson"]
  }
);

export function servicesPage() {
  return `
    <section class="page-head">
      <div class="container">
        <span class="eyebrow">Services</span>
        <h1>Eight disciplines, one accountable team.</h1>
        <p class="lead">
          We take products from first sketch to production without handing you between agencies. Below is what
          each discipline actually delivers: not a capability list, but the artefacts you end up owning.
        </p>
        <dl class="page-head__meta">
          <div><dt>Engagement</dt><dd>Project or embedded team</dd></div>
          <div><dt>Typical duration</dt><dd>5 to 12 months</dd></div>
          <div><dt>Handover</dt><dd>Source, infra and docs</dd></div>
          <div><dt>Retainer</dt><dd>Optional, never required</dd></div>
        </dl>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid" style="--gap:20px" data-reveal-group="50">
          ${DISCIPLINES.map(disciplineCard).join("\n          ")}
        </div>
      </div>
    </section>

    ${ctaBand("", {
      title: "Not sure which of these you need?",
      body: "That is a normal place to start. Describe the operational problem and we will tell you which disciplines it actually touches, including when the answer is fewer than you expected."
    })}
`;
}

function disciplineCard(d) {
  return `<article class="card card--hover" data-reveal>
    <div class="split split--flush">
      <div class="svc__art svc__art--side">
        ${serviceArt(d.kind)}
      </div>
      <div class="disc__body">
        <span class="svc__no">${d.no} &middot; ${d.title}</span>
        <h2 class="t-h3">${d.lede}</h2>
        <p class="soft">${d.body}</p>
        <h3 class="t-md mt-2">What you get</h3>
        <ul class="outcomes">
          ${d.deliver.map((x) => `<li class="outcome outcome--tight"><span class="outcome__check">${icon.check}</span><p>${x}</p></li>`).join("\n          ")}
        </ul>
        <ul class="svc__meta mt-2">${d.tech.map((t) => `<li>${t}</li>`).join("")}</ul>
      </div>
    </div>
  </article>`;
}
