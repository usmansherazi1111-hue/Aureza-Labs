/**
 * Aureza Labs — project catalogue.
 * Single source of truth for the work index and every case-study page.
 * Consumed by build/generate.mjs.
 */

const projects = [];

projects.push({
  slug: "razor-erp",
  name: "Razor ERP",
  tagline: "One connected system for a warehouse that ran on paper.",
  group: "product",
  sector: "Recycling & E-Waste",
  year: "2024",
  duration: "7 months",
  team: "6 people",
  status: "In production",
  platforms: "iOS · Android · Web admin",
  cover: { a: "#0e7f72", b: "#0a655c", motif: "grid" },
  tags: ["Recycling", "E-waste", "Warehousing", "IT Asset Management", "Offline-first"],
  summary:
    "A mobile-first ERP for warehouse and e-waste operations that replaced a decade of spreadsheets, paper travellers and radio calls with a single connected system that works on the floor.",
  challenge: [
    "The client processed thousands of end-of-life IT assets a month across three facilities. Every movement, from goods-in and triage through teardown, resale and destruction, was written on a paper traveller, then keyed into a shared spreadsheet by an admin team the following morning.",
    "The result was a permanent 24-hour blind spot. Stock counts drifted, certificates of destruction were reconstructed from memory, and nobody could answer the question auditors always asked: <strong>where is serial number X right now, and who touched it?</strong>"
  ],
  approach: [
    "We started on the floor, not in Figma. Two weeks of shadowing goods-in, teardown and dispatch produced a movement model built on six verbs: receive, move, process, hold, ship and destroy. Every physical action maps onto one of them. Everything else in the product is a projection of that ledger.",
    "The mobile app was designed for gloved hands, poor Wi-Fi and steel racking. Targets are large, the primary action is always the scanner, and every write is queued locally then reconciled server-side, so a dead zone in aisle C never stops a shift."
  ],
  pullquote: "The warehouse stopped reporting yesterday and started reporting now.",
  metrics: [
    { value: "1,284", label: "SKUs live-tracked", note: "Across 36 bins and 3 facilities" },
    { value: "24h to 0", label: "Reporting lag", note: "Stock is current, not next-morning" },
    { value: "99.4%", label: "Scan-to-record accuracy", note: "Measured against quarterly counts" },
    { value: "6", label: "Movement verbs", note: "The entire domain model" }
  ],
  featureGroups: [
    {
      title: "Warehouse operations",
      note: "The daily floor loop",
      items: [
        { title: "Bin and zone management", desc: "A hierarchy of facility, zone, aisle and bin, each with capacity rules and a printable location label." },
        { title: "Barcode and QR scanning", desc: "Camera and hardware-scanner input share one pipeline, so a rugged sled and a phone camera behave identically." },
        { title: "Guided put-away", desc: "The app suggests a destination bin from item class, current fill and pick frequency, and explains why it chose it." },
        { title: "Cycle counting", desc: "Rolling counts scheduled per zone, with variance raised for approval instead of silently overwritten." }
      ]
    },
    {
      title: "Asset lifecycle",
      note: "Serial-level custody",
      items: [
        { title: "Serialised intake", desc: "Every asset gets an identity at goods-in with photos, condition grade and the customer it belongs to." },
        { title: "Teardown and yield", desc: "Parent assets break into child components with weights and commodity classes carried through to resale." },
        { title: "Certificates of destruction", desc: "Generated from the movement ledger rather than typed by hand, with operator, timestamp and method attached." },
        { title: "Chain of custody", desc: "A full audit trail per serial, exportable as a document an auditor will accept." }
      ]
    },
    {
      title: "Inventory intelligence",
      note: "What the office needs",
      items: [
        { title: "Live stock tracking", desc: "Balances update as scans land, with a visible reconciliation state for anything still queued offline." },
        { title: "Batch management", desc: "Lots grouped by customer, contract or commodity, with per-batch margin once resale prices land." },
        { title: "Low-stock and aging alerts", desc: "Thresholds per commodity class, plus an aging report for stock that has sat too long to be worth holding." },
        { title: "Logistics tracking", desc: "Outbound consignments with carrier, manifest and proof-of-delivery capture." }
      ]
    }
  ],
  architecture: [
    { name: "Mobile client", desc: "React Native app with a local SQLite mirror. The UI reads only from local state, so it never blocks on the network.", tech: ["React Native", "SQLite", "MMKV"] },
    { name: "Sync engine", desc: "An append-only outbox of movement events with idempotency keys, replayed on reconnect and resolved server-side by timestamp and operator precedence.", tech: ["Event outbox", "Idempotency keys"] },
    { name: "Core services", desc: "A movement ledger that is the system of record. Balances and reports are derived views, never edited directly.", tech: ["Node.js", "Fastify", "PostgreSQL"] },
    { name: "Admin and reporting", desc: "Web console for supervisors: approvals, exceptions, batch pricing and export.", tech: ["React", "TanStack Query", "Vite"] },
    { name: "Platform", desc: "Containerised deployment with per-facility tenancy, nightly backup and audit-log retention.", tech: ["Docker", "AWS ECS", "S3"] }
  ],
  stack: {
    Mobile: ["React Native", "TypeScript", "SQLite", "Scanner SDK"],
    Backend: ["Node.js", "Fastify", "PostgreSQL", "Redis", "BullMQ"],
    Frontend: ["React", "TypeScript", "Vite", "TanStack Query"],
    Platform: ["Docker", "AWS ECS", "S3", "GitHub Actions"]
  },
  outcomes: [
    { strong: "Reporting lag went from 24 hours to real time.", rest: "Supervisors stopped starting the day by reconciling yesterday." },
    { strong: "Certificates of destruction became a by-product.", rest: "They are generated from the ledger, so they always match what actually happened." },
    { strong: "Offline was designed for, not patched in.", rest: "A full shift can run with no connectivity and reconcile cleanly at the end." },
    { strong: "Three facilities on one model.", rest: "New sites are a configuration exercise, not a fork." }
  ],
  timeline: [
    { when: "Weeks 1-2", title: "Floor discovery", desc: "Shadowed three shifts across goods-in, teardown and dispatch. Mapped every paper artefact in use." },
    { when: "Weeks 3-5", title: "Movement model", desc: "Reduced the domain to six verbs and validated them against a year of historical paper records." },
    { when: "Weeks 6-12", title: "Mobile core", desc: "Scanning, put-away and the offline outbox, tested on real devices in the aisles from week seven." },
    { when: "Weeks 13-20", title: "Admin and reporting", desc: "Supervisor console, approvals, batch pricing and the audit export." },
    { when: "Weeks 21-28", title: "Rollout", desc: "Facility-by-facility migration with a two-week parallel run against paper at each site." }
  ]
});

projects.push({
  slug: "kilwa",
  name: "Kilwa",
  tagline: "Market data, sentiment and research in one investment workspace.",
  group: "product",
  sector: "Investment & Asset Management",
  year: "2025",
  duration: "9 months",
  team: "7 people",
  status: "In production",
  platforms: "Web · iOS companion",
  cover: { a: "#0a655c", b: "#1a8a7c", motif: "line" },
  tags: ["Investment", "Finance", "Asset Management", "Market Research", "LLM"],
  summary:
    "An AI investment-intelligence platform that pulls market data, news sentiment and analyst research into a single workspace, so an investment team can go from a question to a defensible answer without leaving the screen.",
  challenge: [
    "A mid-sized asset manager was running its process across four terminals, two data vendors, a shared drive of PDFs and a group chat. Analysts spent more of the week assembling context than forming a view.",
    "They had tried generic AI assistants and abandoned them. The models produced fluent summaries with no lineage, and an analyst cannot put a number in front of an investment committee when they cannot say where it came from."
  ],
  approach: [
    "We treated citation as a hard product constraint rather than a feature. Nothing surfaces in Kilwa without a source object attached: a price series, a filing paragraph, a dated news item. If the system cannot cite it, the system does not say it.",
    "The research assistant was built as a retrieval-first pipeline. Questions are decomposed into structured sub-queries against the market store and the document index, results are ranked, and only then does a model write prose over material the analyst can click straight through to."
  ],
  pullquote: "An answer an analyst cannot trace is not an answer. It is a liability.",
  metrics: [
    { value: "$2.41M", label: "Portfolio under analysis", note: "Live in the reference deployment" },
    { value: "40+", label: "Data sources unified", note: "Market, macro, filings and news" },
    { value: "100%", label: "Cited outputs", note: "Every generated claim links to a source" },
    { value: "3.2s", label: "Median answer time", note: "Retrieval through to rendered response" }
  ],
  featureGroups: [
    {
      title: "Investment workspace",
      note: "The daily surface",
      items: [
        { title: "Portfolio dashboard", desc: "Positions, exposure and attribution in one view, with drill-through from a headline number to the trades behind it." },
        { title: "Real-time indicators", desc: "Streaming prices and macro series with configurable alerting per instrument and threshold." },
        { title: "Watchlists and theses", desc: "An analyst pins a thesis to a name and the workspace tracks evidence for and against it over time." },
        { title: "Scenario comparison", desc: "Side-by-side modelling of assumptions with the deltas made explicit rather than buried in a spreadsheet." }
      ]
    },
    {
      title: "Research assistant",
      note: "Retrieval-first, never freehand",
      items: [
        { title: "Grounded question answering", desc: "Questions decompose into structured retrieval before any generation happens, so answers are assembled from sources rather than recalled." },
        { title: "Citation-linked responses", desc: "Every sentence carries its provenance. Clicking a claim opens the exact passage or series point it rests on." },
        { title: "Filing and document search", desc: "Semantic search across annual reports, transcripts and internal notes, scoped by entity and date." },
        { title: "Comparative briefs", desc: "Automatic side-by-side briefs across a peer set, built from the same cited material." }
      ]
    },
    {
      title: "Signal and sentiment",
      note: "Context, quantified",
      items: [
        { title: "Sentiment analysis", desc: "News and transcript sentiment scored per entity with the underlying articles always one click away." },
        { title: "Country and market analysis", desc: "Macro dashboards per market with the indicator history and revision trail intact." },
        { title: "Anomaly surfacing", desc: "Movement that breaks an instrument's own historical pattern is raised rather than waiting to be noticed." },
        { title: "Insight digest", desc: "A morning brief assembled from overnight movement across everything the desk holds or watches." }
      ]
    }
  ],
  architecture: [
    { name: "Ingestion", desc: "Scheduled and streaming connectors normalise vendor feeds, filings and news into a common entity model with revision history.", tech: ["Airflow", "Kafka", "Entity resolution"] },
    { name: "Stores", desc: "A time-series store for market data alongside a vector and keyword index for documents, queried together rather than separately.", tech: ["TimescaleDB", "pgvector", "OpenSearch"] },
    { name: "Retrieval layer", desc: "Hybrid dense and lexical retrieval with reranking, returning source objects that the UI can render and link.", tech: ["Hybrid search", "Cross-encoder rerank"] },
    { name: "Generation", desc: "Constrained generation over retrieved passages only, with a citation validator that rejects any unsupported sentence.", tech: ["Claude", "Citation validator"] },
    { name: "Application", desc: "A streaming React workspace where answers render progressively with their citations attached.", tech: ["React", "TypeScript", "SSE"] }
  ],
  stack: {
    Frontend: ["React", "TypeScript", "Vite", "Visx", "TanStack Query"],
    Backend: ["Python", "FastAPI", "Celery", "PostgreSQL"],
    "Data & AI": ["TimescaleDB", "pgvector", "OpenSearch", "Claude API"],
    Platform: ["Kubernetes", "Terraform", "Grafana", "Sentry"]
  },
  outcomes: [
    { strong: "Every generated claim is traceable.", rest: "Analysts can take output into an investment committee and defend it line by line." },
    { strong: "Four tools collapsed into one workspace.", rest: "Context assembly stopped being the bulk of the working week." },
    { strong: "Sentiment became evidence, not vibes.", rest: "Scores always open onto the articles and passages that produced them." },
    { strong: "Latency held under load.", rest: "Median answer time stayed near three seconds as the document corpus grew past a million passages." }
  ],
  timeline: [
    { when: "Weeks 1-3", title: "Process mapping", desc: "Traced how three analysts actually built a view, from first question to committee memo." },
    { when: "Weeks 4-8", title: "Data foundation", desc: "Entity model, ingestion connectors and the combined time-series and document stores." },
    { when: "Weeks 9-18", title: "Retrieval and citation", desc: "Hybrid retrieval, reranking and the citation validator that gates generation." },
    { when: "Weeks 19-30", title: "Workspace", desc: "Dashboard, watchlists, scenario comparison and the streaming assistant surface." },
    { when: "Weeks 31-38", title: "Hardening", desc: "Load testing against a full corpus, access controls and audit logging for regulated review." }
  ]
});

projects.push({
  slug: "the-walt",
  name: "The Walt",
  tagline: "Where candidates move, and where they stall.",
  group: "product",
  sector: "HR Tech & Recruitment",
  year: "2024",
  duration: "5 months",
  team: "5 people",
  status: "In production",
  platforms: "Web · Email integrations",
  cover: { a: "#1a8a7c", b: "#0e7f72", motif: "funnel" },
  tags: ["HR Tech", "Recruitment", "Talent Acquisition", "Analytics", "Enterprise HR"],
  summary:
    "A recruitment analytics platform that turns an applicant tracking system's raw event log into a picture of where a hiring funnel actually leaks, with the bottleneck named rather than left to be inferred.",
  challenge: [
    "The talent team ran a competent ATS and still could not answer basic questions. Time-to-hire was reported as a single company-wide average that hid a three-week gap between engineering and commercial roles.",
    "Worse, nobody could see stalls while they were happening. A candidate sitting untouched for eleven days between a technical screen and an onsite only became visible when they withdrew."
  ],
  approach: [
    "We rebuilt the funnel as a state machine over the ATS event stream, so every candidate has a precise dwell time in every stage rather than a status field that was last updated whenever someone remembered.",
    "Then we made the product argue. Instead of rendering a chart and leaving interpretation to the reader, The Walt names the stage costing the most days, quantifies it against the team's own baseline, and links to the specific candidates sitting in it right now."
  ],
  pullquote: "A dashboard that does not name the bottleneck is just a prettier spreadsheet.",
  metrics: [
    { value: "246", label: "Candidates in pipeline", note: "Across 18 open roles" },
    { value: "21d", label: "Average time-to-hire", note: "Down from 34 days at rollout" },
    { value: "11d", label: "Longest stage stall found", note: "Screen to onsite scheduling" },
    { value: "18", label: "Open roles tracked", note: "Each with its own baseline" }
  ],
  featureGroups: [
    {
      title: "Funnel analytics",
      note: "The core measurement",
      items: [
        { title: "Stage dwell times", desc: "Precise time-in-stage per candidate derived from the event stream, not from a manually updated status." },
        { title: "Conversion by stage", desc: "Pass-through rates per stage, per role and per source, with confidence bands so small samples are not over-read." },
        { title: "Cohort comparison", desc: "This quarter against last, and this role family against the company baseline." },
        { title: "Source attribution", desc: "Which channels produce candidates who actually convert, rather than which produce the most applications." }
      ]
    },
    {
      title: "Bottleneck detection",
      note: "The product's opinion",
      items: [
        { title: "Named bottlenecks", desc: "The stage costing the most days is stated in words, with the size of the cost and the candidates affected." },
        { title: "Stall alerts", desc: "Candidates exceeding the dwell threshold for their stage are surfaced while it is still recoverable." },
        { title: "Interviewer load", desc: "Scheduling delay traced to specific panel availability instead of blamed on the process in general." },
        { title: "Drop-off diagnosis", desc: "Withdrawals correlated with the stage and dwell time that preceded them." }
      ]
    },
    {
      title: "Team workflow",
      note: "Getting it acted on",
      items: [
        { title: "Recruiter dashboard", desc: "A per-recruiter view of exactly which candidates need action today, ordered by risk." },
        { title: "Hiring manager digest", desc: "A weekly email that states what moved, what stalled and what needs a decision." },
        { title: "Role scorecards", desc: "Structured evaluation captured against consistent criteria so comparisons are meaningful." },
        { title: "ATS write-back", desc: "Actions taken in The Walt sync back so the ATS stays the system of record." }
      ]
    }
  ],
  architecture: [
    { name: "Ingestion", desc: "Connectors poll ATS webhooks and history endpoints, reconstructing a complete event stream including backfilled history.", tech: ["Webhooks", "Backfill jobs"] },
    { name: "Funnel engine", desc: "A state machine that replays events into per-candidate stage transitions, producing dwell times that survive out-of-order delivery.", tech: ["Event sourcing", "PostgreSQL"] },
    { name: "Analytics", desc: "Pre-aggregated rollups per role, stage and cohort, refreshed incrementally so dashboards stay fast as history grows.", tech: ["Materialised views", "dbt"] },
    { name: "Insight layer", desc: "Rule-based detection of stalls and bottlenecks, scored against each team's own historical baseline rather than an industry average.", tech: ["Baseline scoring", "Alerting"] },
    { name: "Application", desc: "React dashboard with server-driven charts and a digest mailer.", tech: ["React", "Visx", "Postmark"] }
  ],
  stack: {
    Frontend: ["React", "TypeScript", "Visx", "Tailwind"],
    Backend: ["Node.js", "NestJS", "PostgreSQL", "Redis"],
    Data: ["dbt", "Materialised views", "Event sourcing"],
    Platform: ["AWS", "Docker", "GitHub Actions", "Datadog"]
  },
  outcomes: [
    { strong: "Time-to-hire fell from 34 days to 21.", rest: "Most of the gain came from one scheduling stall the team had never been able to see." },
    { strong: "Averages stopped hiding role differences.", rest: "Each role family is measured against its own baseline." },
    { strong: "Stalls became recoverable.", rest: "Alerts fire while a candidate is still engaged rather than after they withdraw." },
    { strong: "The ATS stayed the system of record.", rest: "Write-back means the team did not end up maintaining two truths." }
  ],
  timeline: [
    { when: "Weeks 1-2", title: "Data audit", desc: "Assessed ATS event completeness and found the history gaps that had to be backfilled." },
    { when: "Weeks 3-6", title: "Funnel engine", desc: "State machine, event replay and dwell-time computation validated against manual reconstruction." },
    { when: "Weeks 7-12", title: "Analytics and insights", desc: "Rollups, baselines and the bottleneck detection rules." },
    { when: "Weeks 13-18", title: "Workflow surfaces", desc: "Recruiter dashboard, digest mailer, scorecards and ATS write-back." },
    { when: "Weeks 19-22", title: "Rollout", desc: "Phased by department with baselines established before any target was set." }
  ]
});

projects.push({
  slug: "lyfe-languages",
  name: "Lyfe Languages",
  tagline: "Clinical translation where a wrong word has consequences.",
  group: "product",
  sector: "Healthcare & Clinical Communication",
  year: "2023",
  duration: "8 months",
  team: "6 people",
  status: "In production",
  platforms: "iOS · Android · Web",
  cover: { a: "#0e7f72", b: "#3f9f92", motif: "waves" },
  tags: ["Healthcare", "Clinical Communication", "Patient Services", "Speech", "Accessibility"],
  summary:
    "A translation platform built specifically for clinical settings, where general-purpose translation is not safe enough and a verified medical dictionary sits between the model and the patient.",
  challenge: [
    "Clinicians were using consumer translation apps in consultations because the alternative was a two-hour wait for a human interpreter. Those apps translate fluently and confidently, including when they are wrong.",
    "The failure mode is specific and dangerous: a general model renders a clinical term into a colloquial near-equivalent. Dosage instructions, consent language and symptom descriptions are exactly where an approximate answer stops being acceptable."
  ],
  approach: [
    "We inverted the usual pipeline. A verified clinical dictionary is consulted first; only language the dictionary does not cover reaches a general model, and anything the model produces in a clinical register is flagged for review rather than shown as settled.",
    "The interface tells the truth about its own confidence. Verified terms, machine-translated phrasing and community-validated entries are visually distinct, so a clinician always knows which part of a sentence carries institutional backing and which does not."
  ],
  pullquote: "Fluent and wrong is the worst possible output in a consultation room.",
  metrics: [
    { value: "3 tiers", label: "Confidence levels shown", note: "Verified, validated, machine" },
    { value: "sub-second", label: "Verified term lookup", note: "Fully offline for the core dictionary" },
    { value: "2-way", label: "Audio translation", note: "Speech in, speech out, both directions" },
    { value: "Reviewed", label: "Every clinical term", note: "Before it enters the verified tier" }
  ],
  featureGroups: [
    {
      title: "Consultation flow",
      note: "What happens in the room",
      items: [
        { title: "Language selection", desc: "Fast switching with recently used pairs surfaced first, because a clinic sees the same languages repeatedly." },
        { title: "Audio translation", desc: "Speech recognition and synthesis in both directions, with the transcript kept visible so nothing is lost to mishearing." },
        { title: "Phrase shortcuts", desc: "Common clinical exchanges available as one tap, pre-verified so the highest-frequency phrases never route through a model." },
        { title: "Offline core", desc: "The verified dictionary and phrase set work with no connectivity, which matters in basements and rural clinics." }
      ]
    },
    {
      title: "Clinical safety",
      note: "Where the product is opinionated",
      items: [
        { title: "Verified medical dictionary", desc: "A curated term base reviewed by clinical linguists, consulted before any general translation happens." },
        { title: "Confidence banding", desc: "Verified, community-validated and machine output are visually distinct in the transcript, never blended together." },
        { title: "Translation review queue", desc: "Machine output in clinical registers is queued for expert review and, once approved, promoted into the verified tier." },
        { title: "Ambiguity prompts", desc: "Where a term has multiple clinical senses, the app asks rather than guessing." }
      ]
    },
    {
      title: "Community and governance",
      note: "How the dictionary grows",
      items: [
        { title: "Community validation", desc: "Native-speaker clinicians propose and vote on renderings, with contribution history attached to every entry." },
        { title: "Dialect handling", desc: "Regional variants held as siblings rather than overwritten, so the right variant reaches the right clinic." },
        { title: "Change history", desc: "Every dictionary entry carries its full revision trail and the reviewer who approved it." },
        { title: "Institution scoping", desc: "Hospitals can layer local terminology over the shared base without forking it." }
      ]
    }
  ],
  architecture: [
    { name: "Client", desc: "Cross-platform app with a bundled offline dictionary and on-device speech where the platform supports it.", tech: ["React Native", "SQLite", "On-device ASR"] },
    { name: "Term resolution", desc: "A cascade that consults verified terms, then validated community entries, then general translation, tagging output with its tier.", tech: ["Cascade resolver", "Tier tagging"] },
    { name: "Speech pipeline", desc: "Streaming recognition and synthesis with clinical vocabulary biasing to improve recognition of drug and condition names.", tech: ["Streaming ASR", "TTS", "Vocabulary biasing"] },
    { name: "Dictionary service", desc: "Versioned term base with proposal, review and promotion workflows plus per-institution overlays.", tech: ["PostgreSQL", "Workflow engine"] },
    { name: "Platform", desc: "Regional deployment with data residency controls and no retention of consultation audio.", tech: ["Regional hosting", "Zero audio retention"] }
  ],
  stack: {
    Mobile: ["React Native", "TypeScript", "SQLite", "Native speech APIs"],
    Backend: ["Node.js", "PostgreSQL", "Redis", "Workflow engine"],
    Speech: ["Streaming ASR", "Neural TTS", "Vocabulary biasing"],
    Platform: ["Regional hosting", "Docker", "Audit logging"]
  },
  outcomes: [
    { strong: "Confidence is never hidden.", rest: "A clinician can always see which part of a translation is institutionally verified." },
    { strong: "The dictionary compounds.", rest: "Reviewed machine output is promoted, so coverage grows with use instead of staying static." },
    { strong: "It works where connectivity does not.", rest: "The verified core is fully offline." },
    { strong: "Consultation audio is not retained.", rest: "The privacy position is architectural rather than a policy statement." }
  ],
  timeline: [
    { when: "Weeks 1-4", title: "Clinical discovery", desc: "Observed interpreted consultations and catalogued the failure modes of consumer translation in clinical use." },
    { when: "Weeks 5-10", title: "Dictionary foundation", desc: "Term base schema, review workflow and the initial verified vocabulary." },
    { when: "Weeks 11-20", title: "Resolution cascade", desc: "Tiered lookup, confidence banding and the ambiguity prompts." },
    { when: "Weeks 21-28", title: "Speech and offline", desc: "Two-way audio, vocabulary biasing and the offline bundle." },
    { when: "Weeks 29-34", title: "Governance", desc: "Community validation, institution overlays and change history." }
  ]
});

projects.push({
  slug: "chainmail",
  name: "ChainMail",
  tagline: "Encrypted mail with a wallet as the only identity.",
  group: "product",
  sector: "Web3 & Secure Communications",
  year: "2023",
  duration: "6 months",
  team: "5 people",
  status: "In production",
  platforms: "Web · Browser extension",
  cover: { a: "#0a655c", b: "#073c37", motif: "hex" },
  tags: ["Web3", "Blockchain", "Secure Communications", "Cryptography", "Zero-knowledge"],
  summary:
    "An end-to-end encrypted email client where a wallet signature replaces the account entirely: no password, no recovery email, and no server that can read a message even if it wanted to.",
  challenge: [
    "Encrypted email has existed for decades and almost nobody uses it, because key management was always the user's problem. The moment a product asks somebody to back up a private key, adoption stops.",
    "Web3 offered a way out. Users already hold a keypair they guard carefully. The question was whether a wallet could carry a mail identity without leaking the contents of a mailbox onto a public ledger."
  ],
  approach: [
    "We separated identity from transport. The chain holds only what must be public: an address-to-public-key binding and a tamper-evident record that a message existed. Content and metadata never touch it.",
    "Encryption happens in the browser before anything leaves the client. The relay stores ciphertext it cannot open, keyed by a recipient identifier that reveals nothing about the sender. Compromising the server yields an undifferentiated pile of encrypted blobs."
  ],
  pullquote: "The server holds the envelopes. It has never held a key.",
  metrics: [
    { value: "0", label: "Passwords stored", note: "There is no password to store" },
    { value: "Client-side", label: "Encryption boundary", note: "Nothing leaves unencrypted" },
    { value: "On-chain", label: "Existence proof", note: "Content stays off-chain entirely" },
    { value: "X25519", label: "Key agreement", note: "Derived from the wallet keypair" }
  ],
  featureGroups: [
    {
      title: "Identity and access",
      note: "No account to create",
      items: [
        { title: "Wallet login", desc: "A signature challenge establishes a session. There is no registration step and nothing to reset." },
        { title: "Key derivation", desc: "Messaging keys are derived deterministically from a wallet signature, so a mailbox follows the wallet across devices." },
        { title: "Address book", desc: "Contacts resolve through on-chain name services, with the underlying address always visible." },
        { title: "Multi-wallet", desc: "Several identities in one client with strict separation between their mailboxes." }
      ]
    },
    {
      title: "Messaging",
      note: "Familiar surface, different substrate",
      items: [
        { title: "Encrypted inbox", desc: "Threads decrypt in the browser on open. The list view holds ciphertext until you ask for it." },
        { title: "Encrypted composition", desc: "Recipient public keys are fetched and content sealed before the request is made, per recipient." },
        { title: "Wallet-to-wallet messaging", desc: "Direct addressing between wallets with no directory in the middle to enumerate." },
        { title: "Secure attachments", desc: "Files encrypted client-side and stored on distributed storage, with only the decryption key travelling in the message." }
      ]
    },
    {
      title: "Verifiability",
      note: "What the chain is actually for",
      items: [
        { title: "Existence records", desc: "A hash commitment proves a specific message existed at a specific time without revealing anything about it." },
        { title: "Sender attestation", desc: "Signatures verify in-client, so a sender cannot be spoofed by a compromised relay." },
        { title: "Tamper evidence", desc: "Any alteration in transit breaks verification visibly rather than silently." },
        { title: "Exportable proofs", desc: "A verifiable record of correspondence that can be checked independently of the product." }
      ]
    }
  ],
  architecture: [
    { name: "Client crypto", desc: "All encryption and decryption in the browser using audited primitives, with keys held only in memory for the session.", tech: ["libsodium", "X25519", "XChaCha20-Poly1305"] },
    { name: "Identity binding", desc: "A smart contract mapping wallet addresses to messaging public keys, with rotation support and history.", tech: ["Solidity", "EVM", "Key rotation"] },
    { name: "Relay", desc: "A zero-knowledge store-and-forward service holding ciphertext blobs indexed by opaque recipient tags.", tech: ["Node.js", "PostgreSQL", "Opaque tags"] },
    { name: "Storage", desc: "Attachments encrypted client-side and pinned to distributed storage, referenced by content hash.", tech: ["IPFS", "Content addressing"] },
    { name: "Application", desc: "React client with wallet connectors and a background decryption worker so the inbox stays responsive.", tech: ["React", "wagmi", "Web Workers"] }
  ],
  stack: {
    Frontend: ["React", "TypeScript", "wagmi", "viem", "Web Workers"],
    Cryptography: ["libsodium", "X25519", "XChaCha20-Poly1305"],
    Chain: ["Solidity", "Hardhat", "EVM networks"],
    Platform: ["Node.js", "PostgreSQL", "IPFS", "Docker"]
  },
  outcomes: [
    { strong: "Key management stopped being the user's job.", rest: "Messaging keys derive from the wallet, so there is nothing extra to back up." },
    { strong: "The relay is uninteresting to attack.", rest: "It holds ciphertext indexed by opaque tags and no key material." },
    { strong: "The chain carries only what must be public.", rest: "Identity binding and existence proofs, never content or metadata." },
    { strong: "Correspondence is independently verifiable.", rest: "Proofs can be checked without trusting the product." }
  ],
  timeline: [
    { when: "Weeks 1-3", title: "Threat modelling", desc: "Defined the adversary set and wrote down exactly what a compromised relay would learn." },
    { when: "Weeks 4-8", title: "Crypto core", desc: "Key derivation, sealing and the browser worker, reviewed against the threat model." },
    { when: "Weeks 9-14", title: "Identity contracts", desc: "On-chain key registry with rotation, plus name-service resolution." },
    { when: "Weeks 15-20", title: "Client", desc: "Inbox, composition, attachments and the background decryption pipeline." },
    { when: "Weeks 21-26", title: "Audit and hardening", desc: "External review of the cryptographic implementation and the contract surface." }
  ]
});

/* ==========================================================
   AI INTELLIGENCE SYSTEMS
   ========================================================== */

projects.push({
  slug: "linetrace",
  name: "LineTrace",
  tagline: "From defect detection to defect causality.",
  group: "ai",
  sector: "Manufacturing & Production Quality",
  year: "2025",
  duration: "10 months",
  team: "8 people",
  status: "In production",
  platforms: "Edge · Web console",
  cover: { a: "#0e7f72", b: "#e19334", motif: "signal" },
  tags: ["Manufacturing", "Production", "Quality", "Industrial AI", "Multimodal", "Root cause"],
  summary:
    "A multimodal system that correlates line video, machine telemetry, batch records and operator actions to explain why a defect happened, not merely that it did.",
  challenge: [
    "The plant already had vision inspection. It reliably flagged defective units and stopped there. Every flag opened an investigation that a quality engineer ran by hand: pull the video, pull the PLC history, find the batch sheet, interview the shift.",
    "Investigations took days and usually ended in a plausible story rather than a demonstrated cause. By the time anyone concluded that an extruder temperature excursion was responsible, four more hours of product had gone through the same excursion."
  ],
  approach: [
    "The core insight is that causality lives in time alignment. We built a temporal correlation engine that puts video frames, PLC tags, batch events and operator actions on one clock, so a defect at 14:32:07 can be walked backwards across every modality simultaneously.",
    "Rather than a black-box classifier, the system produces ranked hypotheses with the evidence attached: the deviation window, the frames, the tag traces and the historical precedents. A quality engineer confirms or rejects a hypothesis, and that judgement feeds back into ranking."
  ],
  pullquote: "Detection tells you a unit is bad. Causality tells you what to change.",
  metrics: [
    { value: "12s", label: "Defect-to-event window", note: "Median correlation lookback" },
    { value: "4 streams", label: "Aligned on one clock", note: "Video, PLC, batch, operator" },
    { value: "Ranked", label: "Hypotheses, not verdicts", note: "Each with its own evidence set" },
    { value: "Days to minutes", label: "Investigation time", note: "For recurring defect classes" }
  ],
  featureGroups: [
    {
      title: "Multimodal monitoring",
      note: "Everything on one clock",
      items: [
        { title: "Synchronised ingestion", desc: "Camera streams, PLC and SCADA tags, MES batch events and operator terminal actions ingested with a common time base." },
        { title: "Clock drift correction", desc: "Continuous alignment against a reference source, because a two-second drift destroys causal reasoning silently." },
        { title: "Edge preprocessing", desc: "Frame selection and feature extraction at the line so bandwidth carries signal rather than raw footage." },
        { title: "Retention windows", desc: "Full-fidelity retention around flagged events and downsampled retention elsewhere." }
      ]
    },
    {
      title: "Causal analysis",
      note: "The reason the system exists",
      items: [
        { title: "Defect-to-event correlation", desc: "Each defect is walked backwards across every modality within a configurable window to find coincident deviations." },
        { title: "Temporal root-cause ranking", desc: "Candidate causes scored on temporal proximity, historical association and deviation magnitude." },
        { title: "Machine behaviour modelling", desc: "Per-asset normal envelopes learned from history, so deviation is judged against that machine rather than a spec sheet." },
        { title: "Batch intelligence", desc: "Defect clustering by material lot, shift, tool change and recipe version to separate systemic from incidental causes." }
      ]
    },
    {
      title: "Investigation workflow",
      note: "Built for a quality engineer",
      items: [
        { title: "Evidence bundles", desc: "Every hypothesis opens with its frames, tag traces, batch context and precedents already assembled." },
        { title: "Explainable review", desc: "The reasoning path is inspectable at each step rather than delivered as a score." },
        { title: "Engineer feedback loop", desc: "Confirmed and rejected hypotheses adjust ranking for future occurrences." },
        { title: "Recurrence tracking", desc: "Once a cause is confirmed, its signature is watched for and flagged on first recurrence." }
      ]
    }
  ],
  architecture: [
    { name: "Edge layer", desc: "Industrial gateways performing frame selection, feature extraction and buffering, resilient to plant network interruption.", tech: ["NVIDIA Jetson", "GStreamer", "OPC UA"] },
    { name: "Time alignment", desc: "A synchronisation service that normalises timestamps across sources and continuously corrects drift.", tech: ["PTP", "Drift correction"] },
    { name: "Vision models", desc: "Defect detection and segmentation trained per product family, with frame-level embeddings retained for similarity search.", tech: ["PyTorch", "Detection", "Embeddings"] },
    { name: "Correlation engine", desc: "Windowed multi-stream analysis producing candidate causes with proximity, magnitude and historical-association scores.", tech: ["Time-series analysis", "Association mining"] },
    { name: "Console", desc: "Investigation workspace with synchronised video scrubbing against tag traces and batch context.", tech: ["React", "WebCodecs", "TimescaleDB"] }
  ],
  stack: {
    Edge: ["NVIDIA Jetson", "GStreamer", "OPC UA", "MQTT"],
    "AI & Vision": ["PyTorch", "ONNX Runtime", "Vector search"],
    Backend: ["Python", "FastAPI", "TimescaleDB", "Kafka"],
    Frontend: ["React", "TypeScript", "WebCodecs", "Visx"]
  },
  outcomes: [
    { strong: "Investigations moved from days to minutes.", rest: "Evidence assembly, previously the bulk of the work, is automatic." },
    { strong: "Causes are demonstrated, not argued.", rest: "Every hypothesis carries the frames and traces that support it." },
    { strong: "The system learns from its engineers.", rest: "Confirmations and rejections change how future hypotheses rank." },
    { strong: "Recurrence is caught on the first repeat.", rest: "Confirmed signatures become monitored patterns." }
  ],
  timeline: [
    { when: "Months 1-2", title: "Instrumentation audit", desc: "Catalogued every available signal and, critically, measured the clock drift between them." },
    { when: "Months 3-4", title: "Time alignment", desc: "Built and validated synchronisation before any modelling, because nothing downstream works without it." },
    { when: "Months 5-7", title: "Vision and correlation", desc: "Per-family detection models and the windowed correlation engine." },
    { when: "Months 8-9", title: "Investigation console", desc: "Synchronised scrubbing, evidence bundles and the feedback loop." },
    { when: "Month 10", title: "Line rollout", desc: "Deployed line by line with a shadow period against manual investigation on each." }
  ]
});

projects.push({
  slug: "netcause",
  name: "NetCause",
  tagline: "Not alarm detection. Failure hypothesis reduction.",
  group: "ai",
  sector: "Telecommunications & Network Operations",
  year: "2025",
  duration: "8 months",
  team: "6 people",
  status: "In production",
  platforms: "Web NOC console · API",
  cover: { a: "#1a8a7c", b: "#3a86b5", motif: "nodes" },
  tags: ["Telecommunications", "Network Operations", "Topology", "Incident Response"],
  summary:
    "A correlation engine that turns an alarm storm into a short ranked list of probable root causes by reasoning over network topology and fault propagation rather than alarm counts.",
  challenge: [
    "A single core failure produced eleven thousand alarms in nine minutes. The NOC's tooling ranked by severity and volume, which meant the loudest downstream symptom sat at the top and the actual cause was buried on page forty.",
    "Engineers had learned to ignore the tool and reason from topology diagrams by hand. That works when one senior engineer is on shift and fails completely at three in the morning."
  ],
  approach: [
    "We modelled the network as a dependency graph and treated an alarm storm as evidence to be explained. The question stops being which alarm matters most and becomes which single failure best accounts for everything observed.",
    "Fault propagation rules encode how a failure at one node manifests downstream. Candidate causes are scored on how much of the observed alarm set they explain and how little they leave unexplained, which collapses eleven thousand alarms into three hypotheses."
  ],
  pullquote: "The loudest alarm is almost never the broken thing.",
  metrics: [
    { value: "11,000 to 3", label: "Alarms to hypotheses", note: "Worked example from a core failure" },
    { value: "Sub-minute", label: "Time to first hypothesis", note: "From storm onset" },
    { value: "Explained", label: "Scoring basis", note: "Coverage of the observed alarm set" },
    { value: "Live", label: "Topology model", note: "Reconciled continuously against discovery" }
  ],
  featureGroups: [
    {
      title: "Ingestion and modelling",
      note: "Knowing the network",
      items: [
        { title: "Real-time alarm ingestion", desc: "High-volume alarm streams normalised across vendors into a common event schema." },
        { title: "Topology modelling", desc: "A live dependency graph built from discovery, inventory and routing state rather than a static diagram." },
        { title: "Drift reconciliation", desc: "Continuous comparison between documented and observed topology, because the diagram is always slightly wrong." },
        { title: "Service mapping", desc: "Customer-facing services mapped onto infrastructure so impact is expressed in service terms." }
      ]
    },
    {
      title: "Correlation and ranking",
      note: "The reasoning core",
      items: [
        { title: "Alarm correlation", desc: "Alarms grouped into incidents by topological and temporal relationship instead of by text similarity." },
        { title: "Fault propagation modelling", desc: "Encoded rules for how a failure at a node manifests at its dependents, used to predict expected symptom sets." },
        { title: "Root-cause ranking", desc: "Hypotheses scored on explanatory coverage: how much of the observed set each accounts for, and what it leaves over." },
        { title: "Confidence and gaps", desc: "Unexplained alarms are surfaced explicitly rather than quietly dropped from the story." }
      ]
    },
    {
      title: "Operations surface",
      note: "What the NOC sees",
      items: [
        { title: "Automated incident summaries", desc: "A written incident narrative with affected services, probable cause and supporting alarms." },
        { title: "Impact assessment", desc: "Customer and service impact computed from the service map, not estimated from alarm counts." },
        { title: "Timeline reconstruction", desc: "The propagation sequence rendered in order so an engineer can verify the reasoning." },
        { title: "Post-incident export", desc: "A complete record suitable for review and regulatory reporting." }
      ]
    }
  ],
  architecture: [
    { name: "Alarm ingestion", desc: "Streaming pipeline handling burst loads an order of magnitude above steady state without dropping events.", tech: ["Kafka", "Flink", "Vendor adapters"] },
    { name: "Topology store", desc: "Graph database holding the live dependency model with temporal versioning so past incidents are reasoned about against the topology of the time.", tech: ["Neo4j", "Temporal versioning"] },
    { name: "Propagation engine", desc: "Rule and model hybrid that predicts expected symptom sets for candidate failures and compares them against observation.", tech: ["Rule engine", "Bayesian scoring"] },
    { name: "Narrative layer", desc: "Structured incident facts rendered into readable summaries with every claim linked to its supporting alarms.", tech: ["Template + LLM", "Fact grounding"] },
    { name: "Console", desc: "NOC workspace with live incident view, topology overlay and timeline reconstruction.", tech: ["React", "Cytoscape", "WebSocket"] }
  ],
  stack: {
    Streaming: ["Kafka", "Apache Flink", "Protobuf"],
    Graph: ["Neo4j", "Cypher", "Temporal versioning"],
    Backend: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    Frontend: ["React", "TypeScript", "Cytoscape.js", "WebSocket"]
  },
  outcomes: [
    { strong: "Storms became incidents.", rest: "Engineers work a short hypothesis list instead of paging through alarm tables." },
    { strong: "Junior engineers reason like senior ones.", rest: "The topology knowledge that lived in a few heads is encoded in the model." },
    { strong: "Unexplained signal is visible.", rest: "The system says what it cannot account for instead of presenting a tidy incomplete story." },
    { strong: "Impact is stated in service terms.", rest: "Escalation decisions stopped depending on alarm volume." }
  ],
  timeline: [
    { when: "Months 1-2", title: "Topology reconstruction", desc: "Built the dependency graph from discovery and measured how far documentation had drifted from reality." },
    { when: "Months 3-4", title: "Ingestion at burst scale", desc: "Pipeline sized for storm conditions rather than steady state." },
    { when: "Months 5-6", title: "Propagation and ranking", desc: "Encoded propagation rules and validated hypothesis ranking against a year of resolved incidents." },
    { when: "Months 7-8", title: "NOC console", desc: "Live incident view, narrative summaries and post-incident export." }
  ]
});

projects.push({
  slug: "pipeintegrity",
  name: "PipeIntegrity",
  tagline: "From a single inspection to longitudinal asset integrity.",
  group: "ai",
  sector: "Oil & Gas · Asset Integrity",
  year: "2024",
  duration: "9 months",
  team: "7 people",
  status: "In production",
  platforms: "Web · Field tablet",
  cover: { a: "#0a655c", b: "#c97a1f", motif: "scan" },
  tags: ["Oil & Gas", "Energy", "Asset Integrity", "Computer Vision", "Geospatial"],
  summary:
    "A vision system that detects and localises pipeline deterioration, then tracks each defect across inspection cycles so maintenance is prioritised by progression rather than by appearance.",
  challenge: [
    "Drone and crawler inspections generated terabytes of imagery per campaign. Analysts reviewed it, wrote a report, and filed it. The next campaign started from scratch.",
    "This meant the single most useful fact about a defect was unavailable: whether it was getting worse. A stable twenty-year-old corrosion patch and a crack that had doubled since spring looked identical in a report that only described the present."
  ],
  approach: [
    "We made identity across time the core problem. Defects are localised to real-world coordinates on the asset, so the same physical flaw is recognised as the same entity across campaigns even when captured from a different angle, altitude and light.",
    "Once a defect has a history, prioritisation changes completely. The system ranks by rate of change and projected time-to-threshold rather than by current severity, which is what an integrity engineer actually needs to schedule work."
  ],
  pullquote: "A defect without a history is a photograph. With one, it is a forecast.",
  metrics: [
    { value: "Cycle-to-cycle", label: "Defect identity", note: "Same flaw recognised across campaigns" },
    { value: "GPS-located", label: "Every finding", note: "Positioned on the asset, not just in a frame" },
    { value: "Rate of change", label: "Ranking basis", note: "Not present severity alone" },
    { value: "Terabyte-scale", label: "Campaign ingestion", note: "Per inspection run" }
  ],
  featureGroups: [
    {
      title: "Capture and ingestion",
      note: "From the field",
      items: [
        { title: "Drone and crawler ingestion", desc: "Imagery and video from aerial and in-line platforms with flight and telemetry logs preserved." },
        { title: "Geospatial registration", desc: "Frames registered against the asset model so every pixel has a position on the pipeline." },
        { title: "Capture quality gating", desc: "Blur, exposure and coverage gaps flagged during the campaign while the crew is still on site." },
        { title: "Field tablet review", desc: "Crews confirm coverage and mark points of interest before leaving the location." }
      ]
    },
    {
      title: "Detection and measurement",
      note: "What is there",
      items: [
        { title: "Corrosion and crack detection", desc: "Segmentation models trained per surface and coating type, since a coated line and bare steel behave differently." },
        { title: "Dimensional estimation", desc: "Defect extent estimated in physical units using capture geometry rather than reported in pixels." },
        { title: "Classification", desc: "Findings typed against the client's integrity taxonomy so they map onto existing procedures." },
        { title: "Confidence reporting", desc: "Low-confidence detections routed to analyst review instead of entering the record unflagged." }
      ]
    },
    {
      title: "Longitudinal intelligence",
      note: "The differentiator",
      items: [
        { title: "Historical comparison", desc: "Each defect matched to prior campaigns by position and shape signature, with the match evidence shown." },
        { title: "Progression tracking", desc: "Growth rate computed per defect across the full inspection history." },
        { title: "Time-to-threshold projection", desc: "Projected date at which a defect reaches an intervention threshold, with uncertainty stated." },
        { title: "Maintenance prioritisation", desc: "A work list ordered by projected risk and access cost rather than by current appearance." }
      ]
    }
  ],
  architecture: [
    { name: "Ingestion pipeline", desc: "Bulk campaign upload with automatic association of imagery to telemetry and asset segment.", tech: ["S3", "Batch processing", "EXIF/telemetry fusion"] },
    { name: "Registration", desc: "Photogrammetric alignment of frames to the asset model producing per-detection world coordinates.", tech: ["Photogrammetry", "PostGIS"] },
    { name: "Vision models", desc: "Segmentation and classification per surface class with calibrated confidence outputs.", tech: ["PyTorch", "Segmentation", "Calibration"] },
    { name: "Identity matching", desc: "Cross-campaign defect matching on position, shape descriptor and surrounding context.", tech: ["Spatial matching", "Shape descriptors"] },
    { name: "Integrity console", desc: "Map-based workspace with defect history, progression charts and the prioritised work list.", tech: ["React", "MapLibre", "Deck.gl"] }
  ],
  stack: {
    Vision: ["PyTorch", "Segmentation models", "Photogrammetry"],
    Geospatial: ["PostGIS", "MapLibre", "Deck.gl", "GDAL"],
    Backend: ["Python", "FastAPI", "PostgreSQL", "Celery"],
    Platform: ["S3", "Kubernetes", "GPU nodes", "Airflow"]
  },
  outcomes: [
    { strong: "Inspections stopped being disposable.", rest: "Each campaign now adds to a defect history instead of replacing the last report." },
    { strong: "Prioritisation is based on movement.", rest: "Engineers schedule against growth rate and projected thresholds." },
    { strong: "Coverage gaps are caught on site.", rest: "Quality gating happens while the crew can still re-fly a section." },
    { strong: "Findings sit in physical space.", rest: "Every defect has coordinates on the asset, not a frame number." }
  ],
  timeline: [
    { when: "Months 1-2", title: "Data and taxonomy", desc: "Assessed historical campaigns and mapped the client integrity taxonomy onto model outputs." },
    { when: "Months 3-4", title: "Registration", desc: "Built geospatial registration first, because cross-campaign identity depends on it entirely." },
    { when: "Months 5-6", title: "Detection models", desc: "Per-surface segmentation with confidence calibration and analyst review routing." },
    { when: "Months 7-8", title: "Progression engine", desc: "Cross-campaign matching, growth computation and threshold projection." },
    { when: "Month 9", title: "Console and rollout", desc: "Map workspace, prioritised work list and integration with the maintenance system." }
  ]
});

projects.push({
  slug: "batchresolve",
  name: "BatchResolve",
  tagline: "From deviation to evidence, with the audit trail intact.",
  group: "ai",
  sector: "Pharmaceutical & Regulated Manufacturing",
  year: "2025",
  duration: "11 months",
  team: "8 people",
  status: "In production",
  platforms: "Web · Validated environment",
  cover: { a: "#0e7f72", b: "#6d5ce0", motif: "docs" },
  tags: ["Pharmaceutical", "Quality Assurance", "Regulated Manufacturing", "GxP", "Document AI"],
  summary:
    "A deviation investigation assistant that assembles batch records, equipment telemetry, inspection imagery, SOPs and historical deviations into an evidence-linked case file a quality unit can defend to a regulator.",
  challenge: [
    "A single deviation investigation consumed weeks of a quality investigator's time, most of it spent locating documents. Batch records in one system, telemetry in a historian, SOPs in a document store, prior deviations in a spreadsheet nobody trusted.",
    "The regulatory constraint made the obvious AI approach unusable. In a GxP environment, an unciteable conclusion is worse than no conclusion, and any system touching the investigation record must itself be validated and fully auditable."
  ],
  approach: [
    "We built retrieval and assembly, not judgement. BatchResolve locates and links every piece of relevant evidence and proposes hypotheses, but the investigator's determination remains the record. The system never writes a conclusion into the file on its own.",
    "Every action the system takes is logged in an immutable audit trail: what was retrieved, which version of which SOP, what was proposed, who accepted it and when. The trail is designed to be handed to an inspector as-is."
  ],
  pullquote: "In a regulated environment, an uncited conclusion is worse than none.",
  metrics: [
    { value: "Weeks to days", label: "Investigation cycle", note: "Driven by evidence assembly time" },
    { value: "Every claim", label: "Source-linked", note: "To document, page and passage" },
    { value: "Immutable", label: "Audit trail", note: "Retrieval through to determination" },
    { value: "Version-exact", label: "SOP retrieval", note: "The revision in force at batch time" }
  ],
  featureGroups: [
    {
      title: "Evidence assembly",
      note: "The bulk of the old work",
      items: [
        { title: "Batch record analysis", desc: "Executed batch records parsed into structured steps, parameters and signatures, including handwritten annotations." },
        { title: "Version-exact SOP retrieval", desc: "The procedure revision in force at the time of manufacture, never the current one." },
        { title: "Equipment telemetry correlation", desc: "Historian data pulled for the exact equipment and window, aligned to batch process steps." },
        { title: "Inspection imagery", desc: "Visual inspection results linked to the units and steps they relate to." }
      ]
    },
    {
      title: "Investigation support",
      note: "Proposals, never verdicts",
      items: [
        { title: "Root-cause hypotheses", desc: "Candidate causes proposed with the specific evidence supporting each, and what would confirm or exclude it." },
        { title: "Historical deviation search", desc: "Semantically similar prior deviations surfaced with their determinations and effectiveness checks." },
        { title: "Parameter excursion detection", desc: "Process parameters compared against validated ranges across the batch timeline." },
        { title: "Gap identification", desc: "Evidence the investigation would need but that does not exist is named explicitly." }
      ]
    },
    {
      title: "Compliance and control",
      note: "Non-negotiable",
      items: [
        { title: "Complete audit trail", desc: "Every retrieval, proposal and acceptance recorded immutably with user, timestamp and rationale." },
        { title: "Electronic signatures", desc: "Signature workflows meeting regulatory expectations for record integrity." },
        { title: "Validation package", desc: "Documentation supporting computerised system validation delivered with the software." },
        { title: "Role-based control", desc: "Segregation of duties between investigator, reviewer and approver enforced in the system." }
      ]
    }
  ],
  architecture: [
    { name: "Document processing", desc: "Layout-aware extraction of executed batch records including handwriting, with confidence per field and review routing.", tech: ["Layout models", "Handwriting OCR"] },
    { name: "Knowledge index", desc: "Version-aware index over SOPs, specifications and prior deviations, queryable as of any historical date.", tech: ["pgvector", "Temporal index"] },
    { name: "Correlation", desc: "Alignment of historian telemetry to batch process steps for the exact equipment train used.", tech: ["Historian API", "Step alignment"] },
    { name: "Reasoning layer", desc: "Hypothesis generation constrained strictly to retrieved evidence, with a validator rejecting any unsupported statement.", tech: ["Claude", "Evidence validator"] },
    { name: "Records system", desc: "Immutable audit store with electronic signature workflow and segregation of duties.", tech: ["Append-only store", "e-signature"] }
  ],
  stack: {
    "Document AI": ["Layout models", "Handwriting OCR", "pgvector"],
    Backend: ["Python", "FastAPI", "PostgreSQL", "Celery"],
    Frontend: ["React", "TypeScript", "PDF.js"],
    Compliance: ["Append-only audit", "e-signature", "Validation package"]
  },
  outcomes: [
    { strong: "Evidence assembly stopped being manual.", rest: "Investigators start from a compiled case file rather than a document hunt." },
    { strong: "Every statement is traceable to a source.", rest: "Down to the document version, page and passage." },
    { strong: "The audit trail is inspector-ready.", rest: "It was designed to be handed over rather than reconstructed." },
    { strong: "Determination stayed with the quality unit.", rest: "The system proposes and evidences; a human decides and signs." }
  ],
  timeline: [
    { when: "Months 1-2", title: "Regulatory framing", desc: "Established the validation approach and the boundary between system proposal and human determination." },
    { when: "Months 3-5", title: "Document processing", desc: "Batch record extraction including handwriting, with confidence gating throughout." },
    { when: "Months 6-7", title: "Version-aware retrieval", desc: "Temporal index so every SOP is retrieved as it stood at manufacture." },
    { when: "Months 8-9", title: "Hypothesis and validation", desc: "Constrained generation with the evidence validator gating every output." },
    { when: "Months 10-11", title: "Validation and rollout", desc: "Computerised system validation execution and phased introduction alongside existing process." }
  ]
});

projects.push({
  slug: "safepredict",
  name: "SafePredict",
  tagline: "From incident detection to incident prevention.",
  group: "ai",
  sector: "Industrial Safety",
  year: "2024",
  duration: "8 months",
  team: "7 people",
  status: "In production",
  platforms: "Edge · Web console · Mobile alerts",
  cover: { a: "#0e7f72", b: "#d1495b", motif: "zones" },
  tags: ["Industrial Safety", "Manufacturing", "Warehousing", "Computer Vision", "Trajectory"],
  summary:
    "A vision system that models how people, vehicles and machinery move through a shared space, scoring emerging risk from trajectories and near misses instead of waiting for an incident to detect.",
  challenge: [
    "Safety programmes are built on incident reports, which means they learn from the events organisations most want to prevent. Near misses, which are far more frequent and equally instructive, were recorded only when somebody bothered to file one.",
    "Existing camera systems detected a person in a restricted zone after entry. By then the useful window for intervention had closed. The client wanted to know about the convergence, not the collision."
  ],
  approach: [
    "We model motion rather than presence. Workers, forklifts and machinery are tracked as trajectories, and risk is computed from projected paths, meaning where those bodies will be in three seconds given where they are heading now.",
    "Near misses became first-class data. Every convergence that came within a defined margin is recorded automatically, giving the safety team a dense stream of leading indicators instead of a sparse trickle of lagging ones."
  ],
  pullquote: "Waiting for an incident to learn from is the most expensive possible training set.",
  metrics: [
    { value: "3s", label: "Prediction horizon", note: "Trajectory projection window" },
    { value: "Automatic", label: "Near-miss capture", note: "No reliance on voluntary reporting" },
    { value: "On-edge", label: "Inference location", note: "No footage leaves the site" },
    { value: "Anonymised", label: "Worker tracking", note: "Identity is not part of the model" }
  ],
  featureGroups: [
    {
      title: "Perception",
      note: "Seeing the floor",
      items: [
        { title: "Worker and machinery tracking", desc: "Multi-object tracking across overlapping camera coverage with consistent identity through occlusion." },
        { title: "Anonymous by design", desc: "No facial recognition and no worker identification. The model reasons about bodies and vehicles, not people." },
        { title: "Restricted-zone monitoring", desc: "Geofenced areas with rules that vary by time, machine state and permit status rather than being always-on." },
        { title: "Multi-camera fusion", desc: "Overlapping views fused into a single floor-plan coordinate space." }
      ]
    },
    {
      title: "Risk modelling",
      note: "The predictive core",
      items: [
        { title: "Trajectory prediction", desc: "Short-horizon path projection for every tracked body, accounting for speed, heading and typical routes." },
        { title: "Interaction analysis", desc: "Pairwise convergence risk between people, vehicles and moving machinery." },
        { title: "Near-miss detection", desc: "Convergences within a defined margin logged automatically with the clip and trajectory context." },
        { title: "Real-time risk scoring", desc: "A live floor-level score that rises before contact rather than reporting after it." }
      ]
    },
    {
      title: "Response and analysis",
      note: "Closing the loop",
      items: [
        { title: "Graduated alerting", desc: "Escalation from local visual warning to supervisor notification based on score and persistence." },
        { title: "Hotspot analysis", desc: "Near-miss density mapped onto the floor plan, showing where layout rather than behaviour is the problem." },
        { title: "Shift and condition correlation", desc: "Risk patterns correlated with shift, congestion and production rate." },
        { title: "Intervention tracking", desc: "Whether a layout or process change actually reduced near-miss density, measured rather than assumed." }
      ]
    }
  ],
  architecture: [
    { name: "Edge inference", desc: "Detection and tracking run on site. Only anonymised trajectory data leaves the camera network.", tech: ["NVIDIA Jetson", "TensorRT", "Multi-object tracking"] },
    { name: "Spatial fusion", desc: "Homography calibration mapping every camera view into a shared floor-plan coordinate system.", tech: ["Homography", "Calibration tooling"] },
    { name: "Prediction", desc: "Short-horizon trajectory models with interaction-aware scoring across tracked pairs.", tech: ["Trajectory models", "Interaction scoring"] },
    { name: "Alerting", desc: "Graduated notification with local signalling, supervisor push and escalation policy.", tech: ["MQTT", "Push notifications"] },
    { name: "Analytics", desc: "Near-miss store with floor-plan heatmapping and intervention effectiveness tracking.", tech: ["PostgreSQL", "PostGIS", "React"] }
  ],
  stack: {
    Edge: ["NVIDIA Jetson", "TensorRT", "GStreamer", "ONNX"],
    "AI & Vision": ["PyTorch", "Multi-object tracking", "Trajectory models"],
    Backend: ["Python", "FastAPI", "PostgreSQL", "MQTT"],
    Frontend: ["React", "TypeScript", "Floor-plan rendering"]
  },
  outcomes: [
    { strong: "Leading indicators replaced lagging ones.", rest: "The safety team works from near-miss density instead of incident counts." },
    { strong: "Layout problems became visible.", rest: "Hotspot mapping separated where the floor is badly arranged from where behaviour is at fault." },
    { strong: "Footage never leaves the site.", rest: "Inference runs at the edge and only anonymised trajectories are stored." },
    { strong: "Interventions are measured.", rest: "A change is judged by whether near-miss density actually fell." }
  ],
  timeline: [
    { when: "Months 1-2", title: "Site study and consultation", desc: "Mapped movement patterns and agreed the privacy position with the workforce before any camera was configured." },
    { when: "Months 3-4", title: "Perception and calibration", desc: "Tracking, multi-camera fusion and the floor-plan calibration tooling." },
    { when: "Months 5-6", title: "Prediction and scoring", desc: "Trajectory models and interaction risk, tuned against historical near-miss footage." },
    { when: "Months 7-8", title: "Alerting and analytics", desc: "Graduated alerting, hotspot analysis and intervention tracking." }
  ]
});

projects.push({
  slug: "complianceiq",
  name: "ComplianceIQ",
  tagline: "From document summary to document-to-document verification.",
  group: "ai",
  sector: "Legal, Risk & Compliance",
  year: "2025",
  duration: "7 months",
  team: "6 people",
  status: "In production",
  platforms: "Web · API",
  cover: { a: "#0a655c", b: "#6d5ce0", motif: "cross" },
  tags: ["Enterprise", "Legal & Compliance", "Regulated Industries", "Document AI", "Contradiction detection"],
  summary:
    "A verification engine that reads contracts, policies, procedures and regulatory text together and reports where they contradict each other, where evidence is missing and where an obligation has no controlling procedure.",
  challenge: [
    "The compliance function held four thousand documents. Contracts committed the business to controls that internal policy did not require. Policies referenced procedures that had been superseded. Nobody knew, because verifying it meant reading everything against everything.",
    "Summarisation tools made this worse rather than better. A good summary of a bad policy is still a bad policy, and summarising each document separately is exactly the wrong operation when the problem lives between documents."
  ],
  approach: [
    "We built for the space between documents. Obligations, controls and definitions are extracted as structured claims with their source location attached, then compared across the corpus. The unit of analysis is the claim, not the file.",
    "Findings are asserted with both sides shown. A contradiction is reported as two passages side by side with the reasoning between them, so a compliance officer verifies in seconds instead of taking the system's word for it."
  ],
  pullquote: "Summarising each document separately is the wrong operation when the problem is between them.",
  metrics: [
    { value: "Claim-level", label: "Unit of analysis", note: "Not document-level" },
    { value: "Both sides", label: "Shown per finding", note: "Passage against passage" },
    { value: "4,000+", label: "Documents in corpus", note: "Reference deployment" },
    { value: "Cited", label: "Every finding", note: "To document, clause and page" }
  ],
  featureGroups: [
    {
      title: "Ingestion and extraction",
      note: "Making documents comparable",
      items: [
        { title: "Multi-format ingestion", desc: "Contracts, policies, procedures and regulatory text from documents, scans and content systems." },
        { title: "Clause extraction", desc: "Obligations, controls, definitions and exceptions extracted as structured claims with precise source anchors." },
        { title: "Definition resolution", desc: "Defined terms resolved per document, since the same word often means different things in two contracts." },
        { title: "Version awareness", desc: "Supersession chains tracked so comparison runs against the controlling revision." }
      ]
    },
    {
      title: "Cross-document verification",
      note: "The core capability",
      items: [
        { title: "Obligation mapping", desc: "Every external obligation mapped to the internal policy and procedure intended to satisfy it." },
        { title: "Contradiction detection", desc: "Claims that cannot both hold surfaced with both passages and the conflict stated explicitly." },
        { title: "Gap detection", desc: "Obligations with no controlling procedure, and controls with no evidence requirement attached." },
        { title: "Regulatory mapping", desc: "Framework requirements mapped onto the internal control set with coverage stated per requirement." }
      ]
    },
    {
      title: "Review and reporting",
      note: "Getting it used",
      items: [
        { title: "Citation-linked findings", desc: "Every finding opens directly onto the source passages on both sides." },
        { title: "Triage workflow", desc: "Findings routed by severity and owner with accept, dispute and remediate states." },
        { title: "Change impact", desc: "When a document changes, everything downstream that depended on it is re-verified and flagged." },
        { title: "Audit reporting", desc: "Coverage and exception reports generated from the live finding set." }
      ]
    }
  ],
  architecture: [
    { name: "Ingestion", desc: "Format-agnostic pipeline with layout-aware parsing and OCR for scanned material, preserving structure and page anchors.", tech: ["Layout parsing", "OCR", "Structure preservation"] },
    { name: "Claim extraction", desc: "Structured extraction of obligations, controls and definitions with span-level source anchors.", tech: ["Extraction models", "Span anchoring"] },
    { name: "Comparison engine", desc: "Candidate pair generation via semantic retrieval followed by entailment and contradiction classification.", tech: ["pgvector", "NLI models"] },
    { name: "Verification", desc: "A validator requiring both supporting spans before any finding is published, discarding unsupported detections.", tech: ["Span validator", "Claude"] },
    { name: "Workspace", desc: "Side-by-side review interface with triage, ownership and change-impact tracking.", tech: ["React", "PDF.js", "PostgreSQL"] }
  ],
  stack: {
    "Document AI": ["Layout parsing", "OCR", "NLI models", "pgvector"],
    Backend: ["Python", "FastAPI", "PostgreSQL", "Celery"],
    Frontend: ["React", "TypeScript", "PDF.js"],
    Platform: ["Kubernetes", "S3", "Audit logging"]
  },
  outcomes: [
    { strong: "Conflicts between documents became visible.", rest: "Contradictions that had survived years of separate reviews were surfaced in the first full pass." },
    { strong: "Coverage is stated, not assumed.", rest: "Each regulatory requirement shows the control that satisfies it, or shows that none does." },
    { strong: "Verification takes seconds per finding.", rest: "Both passages are shown, so an officer confirms rather than investigates." },
    { strong: "Document changes trigger re-verification.", rest: "Downstream dependencies are re-checked automatically." }
  ],
  timeline: [
    { when: "Months 1-2", title: "Corpus analysis", desc: "Assessed document types, formats and how badly supersession chains had degraded." },
    { when: "Months 3-4", title: "Claim extraction", desc: "Structured extraction with span anchoring, validated against manually marked-up documents." },
    { when: "Month 5", title: "Comparison engine", desc: "Retrieval-based pairing and contradiction classification with the span validator." },
    { when: "Months 6-7", title: "Review workspace", desc: "Side-by-side interface, triage workflow and change-impact re-verification." }
  ]
});

projects.push({
  slug: "cargoinspect",
  name: "CargoInspect",
  tagline: "From inspection image to defensible damage evidence.",
  group: "ai",
  sector: "Logistics, Freight & Insurance",
  year: "2024",
  duration: "6 months",
  team: "6 people",
  status: "In production",
  platforms: "Gate kiosk · Web · Mobile",
  cover: { a: "#1a8a7c", b: "#c97a1f", motif: "container" },
  tags: ["Logistics", "Freight & Shipping", "Insurance", "Computer Vision", "Claims"],
  summary:
    "An automated container and cargo inspection system that captures condition at entry and exit, classifies damage consistently, and produces an evidence package that stands up in a claim.",
  challenge: [
    "Damage disputes were settled by argument. A container arrived damaged, the terminal said it arrived that way, the carrier said it did not, and the evidence was a handful of phone photographs taken from inconsistent angles by whoever was on the gate.",
    "The inconsistency was the real cost. Two inspectors graded the same dent differently, so claims outcomes depended on who was working that shift rather than on the condition of the box."
  ],
  approach: [
    "We standardised capture before touching classification. A fixed multi-camera portal photographs every face of every container under controlled geometry and lighting, so entry and exit images are directly comparable rather than approximately similar.",
    "With comparable capture, difference becomes provable. The system aligns entry and exit imagery, isolates what changed during custody, and produces a package with both images, the delta, the classification and the full chain of custody attached."
  ],
  pullquote: "You cannot prove a difference between two photographs taken from different angles.",
  metrics: [
    { value: "6-face", label: "Capture coverage", note: "Every face, controlled geometry" },
    { value: "Entry vs exit", label: "Comparison basis", note: "Custody delta, not opinion" },
    { value: "Consistent", label: "Severity grading", note: "Independent of who is on shift" },
    { value: "Claim-ready", label: "Evidence package", note: "Generated automatically" }
  ],
  featureGroups: [
    {
      title: "Capture",
      note: "Controlled by design",
      items: [
        { title: "Multi-camera portal", desc: "Fixed camera array capturing every container face under consistent geometry and lighting as it passes the gate." },
        { title: "Identity capture", desc: "Container number and seal read automatically and reconciled against the booking." },
        { title: "Quality gating", desc: "Occlusion, motion blur and exposure problems detected at capture so the pass can be repeated immediately." },
        { title: "Mobile supplement", desc: "Inspectors add close-range detail shots that inherit the same metadata and chain of custody." }
      ]
    },
    {
      title: "Assessment",
      note: "Consistent grading",
      items: [
        { title: "Damage detection and segmentation", desc: "Dents, punctures, corrosion, door damage and structural deformation localised on the container surface model." },
        { title: "Severity assessment", desc: "Graded against the industry damage taxonomy so results are consistent across shifts and terminals." },
        { title: "Before and after comparison", desc: "Entry and exit imagery aligned to isolate exactly what changed during custody." },
        { title: "Repair estimation", desc: "Detected damage mapped onto standard repair codes and estimated cost." }
      ]
    },
    {
      title: "Evidence and claims",
      note: "The commercial payoff",
      items: [
        { title: "Report generation", desc: "Inspection reports produced automatically with annotated imagery and classification rationale." },
        { title: "Insurance evidence package", desc: "A complete bundle: both captures, the delta, grading, timestamps and custody chain." },
        { title: "Dispute support", desc: "Side-by-side presentation designed for a claims adjuster rather than an engineer." },
        { title: "Fleet condition trends", desc: "Damage patterns tracked by route, handler and equipment type." }
      ]
    }
  ],
  architecture: [
    { name: "Capture portal", desc: "Synchronised multi-camera rig with controlled lighting and trigger detection, producing a consistent capture set per pass.", tech: ["Industrial cameras", "Hardware trigger", "Controlled lighting"] },
    { name: "Identity resolution", desc: "OCR of container and seal numbers reconciled against terminal booking systems.", tech: ["OCR", "Terminal integration"] },
    { name: "Damage models", desc: "Segmentation and classification trained against the industry damage taxonomy with calibrated severity output.", tech: ["PyTorch", "Segmentation", "Taxonomy mapping"] },
    { name: "Comparison", desc: "Geometric alignment of entry and exit captures with change isolation on the container surface model.", tech: ["Image registration", "Change detection"] },
    { name: "Evidence service", desc: "Immutable storage of captures and findings with signed, exportable evidence bundles.", tech: ["S3 object lock", "Signed exports"] }
  ],
  stack: {
    Vision: ["PyTorch", "Segmentation", "Image registration", "OCR"],
    Hardware: ["Industrial cameras", "Edge compute", "Controlled lighting"],
    Backend: ["Python", "FastAPI", "PostgreSQL", "S3"],
    Frontend: ["React", "TypeScript", "Annotation tooling"]
  },
  outcomes: [
    { strong: "Grading stopped depending on the shift.", rest: "The same damage receives the same severity regardless of who is on the gate." },
    { strong: "Custody deltas are provable.", rest: "Controlled capture geometry makes entry-to-exit comparison meaningful." },
    { strong: "Claims packages are automatic.", rest: "Evidence bundles are generated from the inspection record, not assembled after a dispute." },
    { strong: "Patterns emerged across the fleet.", rest: "Damage concentrated by route and handler became visible for the first time." }
  ],
  timeline: [
    { when: "Months 1-2", title: "Capture design", desc: "Designed and validated the portal geometry, because comparability depends entirely on it." },
    { when: "Month 3", title: "Identity and integration", desc: "Container and seal OCR with terminal system reconciliation." },
    { when: "Months 4-5", title: "Damage models", desc: "Detection, taxonomy-aligned grading and entry-exit change isolation." },
    { when: "Month 6", title: "Evidence and rollout", desc: "Report generation, signed evidence bundles and gate deployment." }
  ]
});

projects.push({
  slug: "stockreconcile",
  name: "StockReconcile",
  tagline: "From box counting to continuous reconciliation.",
  group: "ai",
  sector: "Warehousing, Retail & Supply Chain",
  year: "2025",
  duration: "7 months",
  team: "6 people",
  status: "In production",
  platforms: "Edge · Web console",
  cover: { a: "#0e7f72", b: "#0a655c", motif: "shelf" },
  tags: ["Warehousing", "Retail", "Supply Chain", "Computer Vision", "WMS integration"],
  summary:
    "A vision system that watches warehouse activity and continuously compares what is physically on the shelf against what the WMS believes, so discrepancies surface within hours instead of at the next stock count.",
  challenge: [
    "Physical inventory counts happened quarterly, shut down half the floor for two days, and produced a number that was already stale when it was published. Between counts, the WMS was assumed correct because nothing contradicted it.",
    "The discrepancies were not random. Misplacement, mis-picks and unrecorded movements accumulated in predictable places, but by the time a count found them the trail was three months cold and no cause could be established."
  ],
  approach: [
    "We stopped treating counting as an event. Cameras already covering the aisles observe pallet and case movement continuously, and every observation is reconciled against the WMS transaction stream as it happens.",
    "The output is deliberately narrow: a discrepancy queue. Rather than claiming a perfect real-time count, the system reports specific locations where physical observation and system state disagree, with the clip and the transaction that should have matched."
  ],
  pullquote: "A quarterly count tells you that you were wrong. It never tells you when you became wrong.",
  metrics: [
    { value: "Hours", label: "Discrepancy detection", note: "Previously a quarterly cycle" },
    { value: "Clip-backed", label: "Every discrepancy", note: "With the transaction it should match" },
    { value: "Continuous", label: "Reconciliation cadence", note: "Against the WMS stream" },
    { value: "No shutdown", label: "Operational impact", note: "The floor keeps running" }
  ],
  featureGroups: [
    {
      title: "Observation",
      note: "Watching the aisles",
      items: [
        { title: "Pallet and SKU recognition", desc: "Case and pallet identification from label, shape and placement context across aisle cameras." },
        { title: "Multi-camera tracking", desc: "Movement followed across camera boundaries so a pallet leaving one view is the same pallet entering the next." },
        { title: "Location inference", desc: "Physical position resolved to the bin and level of the racking model rather than to a camera frame." },
        { title: "Occlusion handling", desc: "Confidence lowered rather than fabricated when a view is blocked, with the gap reported." }
      ]
    },
    {
      title: "Reconciliation",
      note: "Physical against digital",
      items: [
        { title: "WMS integration", desc: "Live transaction stream consumed and matched against observed movement within a tolerance window." },
        { title: "Physical-versus-digital comparison", desc: "Continuous comparison producing a discrepancy queue rather than a claimed absolute count." },
        { title: "Misplacement detection", desc: "Stock present in a location the system does not expect, flagged with both records." },
        { title: "Unauthorised movement alerts", desc: "Movement with no corresponding transaction raised while the clip is still available." }
      ]
    },
    {
      title: "Operations",
      note: "Acting on it",
      items: [
        { title: "Discrepancy triage", desc: "A worklist ordered by value and age, each item opening onto its clip and expected transaction." },
        { title: "Targeted counts", desc: "Cycle counts directed at locations the system flags instead of scheduled blindly by zone." },
        { title: "Root-cause patterns", desc: "Discrepancy clustering by shift, zone and equipment to separate process problems from one-offs." },
        { title: "Accuracy trending", desc: "Inventory accuracy tracked continuously as a live measure rather than a quarterly snapshot." }
      ]
    }
  ],
  architecture: [
    { name: "Edge vision", desc: "Aisle cameras with on-site inference producing movement events; footage is retained briefly and only around flagged events.", tech: ["Edge GPU", "Detection", "Short retention"] },
    { name: "Spatial model", desc: "Racking model mapping camera coordinates to bin and level so observations land in warehouse terms.", tech: ["Calibration", "Racking model"] },
    { name: "Event matching", desc: "Temporal matching of observed movements against WMS transactions with configurable tolerance and confidence.", tech: ["Stream matching", "Tolerance windows"] },
    { name: "Discrepancy service", desc: "Queue of unmatched observations and unobserved transactions with evidence attached to each.", tech: ["PostgreSQL", "Evidence linking"] },
    { name: "Console", desc: "Triage workspace with clip playback, expected transaction and directed count generation.", tech: ["React", "Video playback", "WMS API"] }
  ],
  stack: {
    Edge: ["Edge GPU", "TensorRT", "GStreamer"],
    "AI & Vision": ["PyTorch", "Multi-object tracking", "Label recognition"],
    Backend: ["Python", "FastAPI", "Kafka", "PostgreSQL"],
    Integration: ["WMS API", "ERP sync", "Webhooks"]
  },
  outcomes: [
    { strong: "Discrepancies surface in hours.", rest: "The trail is still warm, so causes can actually be established." },
    { strong: "Counts became targeted.", rest: "Cycle counting goes where the system flags rather than sweeping zones on a schedule." },
    { strong: "The floor stopped shutting down.", rest: "Continuous reconciliation replaced the two-day quarterly count." },
    { strong: "The system states its uncertainty.", rest: "Occluded views lower confidence and report a gap rather than inventing a number." }
  ],
  timeline: [
    { when: "Months 1-2", title: "Coverage and calibration", desc: "Assessed existing camera coverage and built the racking model that observations map into." },
    { when: "Months 3-4", title: "Recognition and tracking", desc: "Pallet and case recognition with cross-camera tracking through occlusion." },
    { when: "Month 5", title: "WMS reconciliation", desc: "Transaction stream integration and the tolerance-window matching engine." },
    { when: "Months 6-7", title: "Triage console", desc: "Discrepancy queue, clip playback, directed counts and accuracy trending." }
  ]
});

projects.push({
  slug: "roadcondition",
  name: "RoadCondition",
  tagline: "From road condition to maintenance priority.",
  group: "ai",
  sector: "Government & Public Infrastructure",
  year: "2024",
  duration: "8 months",
  team: "6 people",
  status: "In production",
  platforms: "Vehicle capture · Web GIS",
  cover: { a: "#0a655c", b: "#e19334", motif: "road" },
  tags: ["Government", "Public Infrastructure", "Transportation", "Computer Vision", "GIS"],
  summary:
    "A survey system that converts vehicle-mounted road imagery into per-segment condition scores, deterioration trends and a maintenance programme ranked by cost of deferral rather than by complaint volume.",
  challenge: [
    "The authority maintained four thousand kilometres of road on a maintenance programme driven largely by public complaints. Roads in visible, vocal areas were resurfaced while quieter segments deteriorated past the point where surface treatment would have been enough.",
    "Formal condition surveys existed but were manual, expensive and infrequent. By the time a survey was processed, the programme it informed was already a year behind the road."
  ],
  approach: [
    "We made survey capture cheap enough to repeat. Cameras mounted on vehicles already driving the network, such as inspection vans, gritters and refuse trucks, produce continuous imagery with no dedicated survey run.",
    "The scoring model was tuned to the decision, not the defect. Individual cracks matter far less than the segment-level trajectory, so the system reports condition per maintainable segment and ranks by projected cost of deferral, which is the number an engineer builds a programme from."
  ],
  pullquote: "The cheapest repair is the one done before the segment needs rebuilding.",
  metrics: [
    { value: "4,000km", label: "Network covered", note: "Continuous, not sampled" },
    { value: "Per-segment", label: "Scoring granularity", note: "Matched to maintenance units" },
    { value: "Cost of deferral", label: "Ranking basis", note: "Not complaint volume" },
    { value: "Opportunistic", label: "Capture model", note: "Vehicles already on the network" }
  ],
  featureGroups: [
    {
      title: "Capture",
      note: "Survey without survey runs",
      items: [
        { title: "Vehicle-mounted ingestion", desc: "Imagery from cameras on operational vehicles with GPS and IMU logged alongside every frame." },
        { title: "Automatic segment matching", desc: "Frames matched to the authority's maintainable segment definitions rather than to arbitrary distances." },
        { title: "Coverage tracking", desc: "Network coverage and recency mapped so gaps are visible and routable." },
        { title: "Condition-aware quality control", desc: "Poor light, rain and speed effects detected and excluded rather than scored badly." }
      ]
    },
    {
      title: "Assessment",
      note: "What the road is doing",
      items: [
        { title: "Crack and pothole detection", desc: "Surface defect detection and classification aligned to the national condition standard." },
        { title: "Deterioration scoring", desc: "Segment-level condition scores computed from defect density, type and extent." },
        { title: "Historical comparison", desc: "Scores tracked across survey passes so trajectory, not just current state, is known." },
        { title: "Prediction", desc: "Projected condition at horizon, with the point at which treatment options narrow made explicit." }
      ]
    },
    {
      title: "Programme planning",
      note: "The output that matters",
      items: [
        { title: "GIS integration", desc: "Scores and defects published into the authority's existing GIS rather than a separate map nobody opens." },
        { title: "Repair prioritisation", desc: "Segments ranked by projected cost of deferral, balancing current condition against deterioration rate." },
        { title: "Treatment matching", desc: "Appropriate intervention suggested per segment, since a surface dressing and a rebuild are not interchangeable." },
        { title: "Budget scenarios", desc: "Programme outcomes modelled against different budget envelopes to support funding cases." }
      ]
    }
  ],
  architecture: [
    { name: "Capture kit", desc: "Low-cost vehicle units logging imagery with synchronised GPS and IMU, uploading opportunistically over cellular.", tech: ["Vehicle cameras", "GPS/IMU", "Cellular upload"] },
    { name: "Map matching", desc: "Trajectory snapping to the road network and association of frames with maintainable segments.", tech: ["Map matching", "PostGIS"] },
    { name: "Detection models", desc: "Surface defect detection aligned to the national standard, robust to varying capture conditions.", tech: ["PyTorch", "Detection", "Condition robustness"] },
    { name: "Scoring and prediction", desc: "Segment score aggregation with deterioration modelling across survey history.", tech: ["Scoring model", "Trend projection"] },
    { name: "Planning console", desc: "GIS-integrated workspace with prioritised programme, treatment matching and budget scenarios.", tech: ["React", "MapLibre", "GIS export"] }
  ],
  stack: {
    Vision: ["PyTorch", "Detection models", "Image quality gating"],
    Geospatial: ["PostGIS", "Map matching", "MapLibre", "GDAL"],
    Backend: ["Python", "FastAPI", "PostgreSQL", "Celery"],
    Platform: ["S3", "Kubernetes", "GPU batch", "Airflow"]
  },
  outcomes: [
    { strong: "The programme stopped following complaints.", rest: "Prioritisation is driven by condition trajectory and cost of deferral." },
    { strong: "Survey became continuous.", rest: "Vehicles already on the network provide coverage without dedicated runs." },
    { strong: "Deterioration is visible before it is expensive.", rest: "Segments are treated while surface options still exist." },
    { strong: "Funding cases got evidence.", rest: "Budget scenarios model programme outcomes rather than asserting need." }
  ],
  timeline: [
    { when: "Months 1-2", title: "Standards alignment", desc: "Mapped model outputs onto the national condition standard and the authority segment definitions." },
    { when: "Months 3-4", title: "Capture and matching", desc: "Vehicle kits, upload pipeline and trajectory-to-segment map matching." },
    { when: "Months 5-6", title: "Detection and scoring", desc: "Defect models with condition robustness and segment score aggregation." },
    { when: "Months 7-8", title: "Planning tools", desc: "Deterioration modelling, prioritisation, treatment matching and budget scenarios." }
  ]
});

projects.push({
  slug: "clinicalinsight",
  name: "ClinicalInsight",
  tagline: "From image finding to evidence-linked insight.",
  group: "ai",
  sector: "Healthcare & Clinical Imaging",
  year: "2025",
  duration: "12 months",
  team: "9 people",
  status: "In clinical evaluation",
  platforms: "Web · PACS integration",
  cover: { a: "#0e7f72", b: "#3a86b5", motif: "scan2" },
  tags: ["Healthcare", "Clinical Imaging", "Diagnostics Support", "Multimodal", "Human in the loop"],
  summary:
    "A clinician-facing decision support system that combines medical imaging, patient history and retrieved literature into findings a radiologist reviews, with the model positioned as a second reader rather than a decision maker.",
  challenge: [
    "Imaging AI tends to fail in the same way. A model outputs a probability for a finding, the clinician has no way to interrogate it, and it becomes another number to either trust blindly or ignore entirely. Most are ignored.",
    "The clinically useful work is not detection alone. It is relating a current finding to the patient's prior imaging, their history, and what the literature says about that combination, which is exactly the part that gets left to the clinician's memory at the end of a long list."
  ],
  approach: [
    "We designed the system as a second reader that shows its working. Every finding comes with the region it rests on, the comparison against prior studies, the relevant history, and the literature that informs interpretation, all inspectable before the clinician forms a view.",
    "The workflow is explicitly human-in-the-loop, and structurally so. The system cannot write to the report. It prepares, evidences and prioritises; a clinician reviews, accepts or rejects, and every one of those decisions is recorded with its rationale."
  ],
  pullquote: "A probability without a reason is another number to ignore at the end of a long list.",
  metrics: [
    { value: "Second reader", label: "System role", note: "Never the decision maker" },
    { value: "Longitudinal", label: "Comparison scope", note: "Against the patient's own priors" },
    { value: "Cited", label: "Literature support", note: "Retrieved, never recalled" },
    { value: "Full", label: "Audit trail", note: "Every acceptance and rejection" }
  ],
  featureGroups: [
    {
      title: "Imaging",
      note: "Reading the study",
      items: [
        { title: "Medical image ingestion", desc: "DICOM ingestion from PACS with modality-aware preprocessing and study-level organisation." },
        { title: "Anatomical segmentation", desc: "Structures segmented so findings are described in anatomical terms rather than pixel coordinates." },
        { title: "Abnormality detection", desc: "Candidate findings localised with the supporting region highlighted for direct inspection." },
        { title: "Calibrated confidence", desc: "Confidence expressed against measured operating characteristics rather than a raw model score." }
      ]
    },
    {
      title: "Clinical context",
      note: "Where the value is",
      items: [
        { title: "Longitudinal comparison", desc: "Current study compared against the patient's own prior imaging with change quantified and shown." },
        { title: "History integration", desc: "Relevant history, medications and prior results surfaced alongside the finding they bear on." },
        { title: "Literature retrieval", desc: "Passages retrieved from trusted sources for the specific finding and patient context, always cited." },
        { title: "Differential support", desc: "Considerations presented as a structured set with the evidence for each, not a ranked verdict." }
      ]
    },
    {
      title: "Workflow and governance",
      note: "Safety by construction",
      items: [
        { title: "Clinician review workflow", desc: "Every finding requires explicit acceptance or rejection. Nothing propagates unreviewed." },
        { title: "Worklist prioritisation", desc: "Studies ordered by finding urgency so time-critical cases reach a reader sooner." },
        { title: "Complete audit trail", desc: "Every model output, clinician decision and rationale recorded immutably." },
        { title: "Performance monitoring", desc: "Live tracking of model behaviour against clinician decisions to detect drift in service." }
      ]
    }
  ],
  architecture: [
    { name: "PACS integration", desc: "Standards-based DICOM integration with the imaging estate, operating alongside existing workflow rather than replacing it.", tech: ["DICOM", "HL7", "DICOMweb"] },
    { name: "Imaging models", desc: "Segmentation and detection per modality and body region with calibrated confidence outputs.", tech: ["PyTorch", "MONAI", "Calibration"] },
    { name: "Longitudinal engine", desc: "Registration of current against prior studies with quantified interval change.", tech: ["Image registration", "Change quantification"] },
    { name: "Knowledge retrieval", desc: "Retrieval over curated clinical literature scoped to finding and patient context, with citation enforced.", tech: ["pgvector", "Curated corpus", "Citation gate"] },
    { name: "Review application", desc: "Reading workspace with region overlay, prior comparison, evidence panel and the decision audit trail.", tech: ["React", "Cornerstone", "Audit store"] }
  ],
  stack: {
    "AI & Imaging": ["PyTorch", "MONAI", "Registration", "pgvector"],
    Integration: ["DICOM", "DICOMweb", "HL7 FHIR"],
    Backend: ["Python", "FastAPI", "PostgreSQL", "Celery"],
    Frontend: ["React", "TypeScript", "Cornerstone.js"]
  },
  outcomes: [
    { strong: "The model is inspectable.", rest: "Every finding opens onto the region, the prior comparison and the literature behind it." },
    { strong: "Prior studies are always in view.", rest: "Interval change is computed rather than left to recall." },
    { strong: "The clinician remains the decision maker.", rest: "The system cannot write to the report, by construction." },
    { strong: "Drift is monitored in service.", rest: "Model behaviour is continuously compared against clinician decisions." }
  ],
  timeline: [
    { when: "Months 1-3", title: "Clinical and regulatory framing", desc: "Defined the intended use, the second-reader boundary and the evaluation protocol with the clinical team." },
    { when: "Months 4-6", title: "Integration", desc: "PACS and record integration built to standards so the system sits inside existing workflow." },
    { when: "Months 7-9", title: "Models and longitudinal engine", desc: "Segmentation, detection, calibration and prior-study registration." },
    { when: "Months 10-11", title: "Evidence and review", desc: "Literature retrieval with citation gating and the clinician review workspace." },
    { when: "Month 12", title: "Clinical evaluation", desc: "Shadow-mode operation with performance monitored against clinician decisions." }
  ]
});

/* Attach per-project interface mockups, then freeze the catalogue. */
const screens = require("./screens.js");
projects.forEach(function (p) {
  p.screens = screens[p.slug] || [];
});

module.exports = projects;
