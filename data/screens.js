/**
 * Aureza Labs — interface mockups per project.
 * Hand-built from the shared `.ui` component primitives so every case study
 * shows a real interface rather than a stock illustration.
 */

const screens = {};

screens["razor-erp"] = [
  {
    frame: "phone",
    label: "Bin detail",
    caption: { title: "The floor screen", body: "Counts, scan action and reconciliation state are visible without scrolling, and legible through a scratched screen protector." },
    html: `<div class="ui ui--phone">
<div class="ui__head"><span class="ui__title">Bin A-12</span><span class="ui__pill">SYNCED</span></div>
<div class="ui__grid2">
<div class="ui__tile"><span class="ui__stat"><b>240</b><span>ON HAND</span></span></div>
<div class="ui__tile"><span class="ui__stat"><b>36</b><span>QUEUED</span></span></div>
</div>
<div class="ui__row"><i>Boards &middot; Grade A</i><b>148</b></div>
<div class="ui__row"><i>Boards &middot; Grade B</i><b>62</b></div>
<div class="ui__row ui__row--hot"><i>Unclassified</i><b>30</b></div>
<div class="ui__meter"><i style="width:78%"></i></div>
<div class="ui__legend"><span>78% capacity</span><span>14s ago</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Supervisor console",
    url: "razor.aurezalabs.com/inventory",
    caption: { title: "Exception-first console", body: "The web console leads with what needs a decision — variances, holds, aging stock — rather than a wall of totals nobody reads." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Inventory &middot; Facility 02</span><span class="ui__pill ui__pill--warn">3 EXCEPTIONS</span></div>
<div class="ui__grid2">
<div class="ui__tile"><span class="ui__stat"><b>1,284</b><span>SKUS TRACKED</span></span></div>
<div class="ui__tile"><span class="ui__stat"><b>12</b><span>LOW STOCK</span></span></div>
</div>
<div class="ui__row ui__row--hot"><i>Variance &middot; Bin C-01 &middot; &minus;14 units</i><b>REVIEW</b></div>
<div class="ui__row"><i>Hold &middot; Batch 4471 &middot; customer audit</i><b>2d</b></div>
<div class="ui__row"><i>Aging &middot; Bin B-04 &middot; 91 days</i><b>88</b></div>
<div class="ui__bars"><i style="height:38%"></i><i style="height:52%"></i><i style="height:44%"></i><i style="height:66%"></i><i class="is-strong" style="height:84%"></i><i style="height:58%"></i><i style="height:46%"></i><i style="height:40%"></i></div>
<div class="ui__legend"><span><i></i>Movements per hour</span></div>
</div>`
  }
];

screens["kilwa"] = [
  {
    frame: "browser",
    label: "Investment workspace",
    url: "kilwa.aurezalabs.com/portfolio",
    caption: { title: "Portfolio, cited", body: "Every headline number drills through to the trades and series points that produced it. Nothing on this screen is unsourced." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Portfolio &middot; Growth Mandate</span><span class="ui__pill">LIVE</span></div>
<div class="ui__headline">
<span class="ui__stat"><b>$2.41M</b><span>UNDER ANALYSIS</span></span>
<span class="ui__delta">&plus;3.2% today</span>
</div>
<div class="ui__bars"><i style="height:34%"></i><i style="height:41%"></i><i style="height:37%"></i><i style="height:52%"></i><i style="height:48%"></i><i style="height:63%"></i><i style="height:58%"></i><i class="is-strong" style="height:76%"></i></div>
<div class="ui__row"><i>Sentiment &middot; Semiconductors</i><b>+0.42</b></div>
<div class="ui__row"><i>Macro &middot; 10Y real yield</i><b>1.88%</b></div>
<div class="ui__legend"><span><i></i>NAV</span><span>40 sources</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Research assistant",
    url: "kilwa.aurezalabs.com/research",
    caption: { title: "Citation is a hard constraint", body: "The assistant answers only from retrieved material. A sentence that cannot be sourced is rejected before it renders." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Why did margins compress in Q3?</span><span class="ui__pill">4 SOURCES</span></div>
<div class="ui__row"><i>Input costs rose 210bps year on year</i><b>10-Q p.14</b></div>
<div class="ui__row"><i>Pricing held flat through the quarter</i><b>CALL 11:04</b></div>
<div class="ui__row"><i>Mix shifted toward lower-margin OEM</i><b>10-Q p.22</b></div>
<div class="ui__row ui__row--hot"><i>Unsupported claim &middot; rejected by validator</i><b>BLOCKED</b></div>
<div class="ui__meter"><i style="width:100%"></i></div>
<div class="ui__legend"><span>Retrieval 1.1s</span><span>Generation 2.1s</span></div>
</div>`
  }
];

screens["the-walt"] = [
  {
    frame: "browser",
    label: "Funnel analytics",
    url: "thewalt.aurezalabs.com/funnel",
    caption: { title: "The product names the bottleneck", body: "Rather than rendering a chart and leaving interpretation to the reader, the stage costing the most days is stated in words." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Hiring funnel &middot; Engineering</span><span class="ui__pill ui__pill--warn">BOTTLENECK</span></div>
<div class="ui__row"><i>Applied</i><b>412</b></div>
<div class="ui__row"><i>Screen &middot; 2.1d avg</i><b>186</b></div>
<div class="ui__row ui__row--hot"><i>Screen to onsite &middot; 11.4d avg</i><b>74</b></div>
<div class="ui__row"><i>Onsite &middot; 3.0d avg</i><b>31</b></div>
<div class="ui__row"><i>Offer</i><b>12</b></div>
<div class="ui__meter"><i style="width:38%"></i></div>
<div class="ui__legend"><span>Scheduling costs 11 of 21 days</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Recruiter worklist",
    url: "thewalt.aurezalabs.com/today",
    caption: { title: "Ordered by risk", body: "The daily view lists exactly which candidates need action today, ranked by how close they are to withdrawing." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Needs action today</span><span class="ui__pill">18 ROLES</span></div>
<div class="ui__row ui__row--hot"><i>Stalled 12d &middot; Staff Engineer</i><b>HIGH</b></div>
<div class="ui__row ui__row--hot"><i>Stalled 9d &middot; Platform Lead</i><b>HIGH</b></div>
<div class="ui__row"><i>Awaiting panel &middot; Data Engineer</i><b>4d</b></div>
<div class="ui__row"><i>Offer pending &middot; SRE</i><b>2d</b></div>
<div class="ui__grid2">
<div class="ui__tile"><span class="ui__stat"><b>246</b><span>IN PIPELINE</span></span></div>
<div class="ui__tile"><span class="ui__stat"><b>21d</b><span>TIME TO HIRE</span></span></div>
</div>
</div>`
  }
];

screens["lyfe-languages"] = [
  {
    frame: "phone",
    label: "Consultation view",
    caption: { title: "Confidence is never hidden", body: "Verified, community-validated and machine output are visually distinct, so a clinician always knows what carries institutional backing." },
    html: `<div class="ui ui--phone">
<div class="ui__head"><span class="ui__title">EN &rarr; ES</span><span class="ui__pill">OFFLINE</span></div>
<div class="ui__row"><i>&ldquo;Take one tablet twice daily&rdquo;</i><b>VERIFIED</b></div>
<div class="ui__row"><i>&ldquo;Tome una tableta dos veces al d&iacute;a&rdquo;</i><b>&#9679;</b></div>
<div class="ui__row ui__row--hot"><i>&ldquo;with food&rdquo; &middot; machine output</i><b>REVIEW</b></div>
<div class="ui__meter"><i style="width:92%"></i></div>
<div class="ui__legend"><span>92% verified terms</span><span>Dict v4.1</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Dictionary review",
    url: "lyfe.aurezalabs.com/review",
    caption: { title: "The dictionary compounds", body: "Reviewed machine output is promoted into the verified tier, so clinical coverage grows with use instead of staying static." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Review queue &middot; Clinical linguists</span><span class="ui__pill">14 PENDING</span></div>
<div class="ui__row"><i>&ldquo;shortness of breath&rdquo; &middot; es-MX</i><b>3 VOTES</b></div>
<div class="ui__row"><i>&ldquo;blood thinner&rdquo; &middot; ar</i><b>2 VOTES</b></div>
<div class="ui__row"><i>&ldquo;fasting glucose&rdquo; &middot; ur</i><b>5 VOTES</b></div>
<div class="ui__grid2">
<div class="ui__tile"><span class="ui__stat"><b>3</b><span>CONFIDENCE TIERS</span></span></div>
<div class="ui__tile"><span class="ui__stat"><b>0</b><span>AUDIO RETAINED</span></span></div>
</div>
</div>`
  }
];

screens["chainmail"] = [
  {
    frame: "browser",
    label: "Encrypted inbox",
    url: "chainmail.aurezalabs.com/inbox",
    caption: { title: "The list holds ciphertext", body: "Threads decrypt in the browser only when opened. The relay never sees a subject line, let alone a body." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Inbox &middot; 0x4F2a&hellip;9B1c</span><span class="ui__pill">E2E</span></div>
<div class="ui__row"><i>0x7C88&hellip;31Ad &middot; decrypted locally</i><b>2m</b></div>
<div class="ui__row"><i>0x1A0e&hellip;77Fd &middot; decrypted locally</i><b>41m</b></div>
<div class="ui__row"><i>0x93Bb&hellip;10Ce &middot; sealed</i><b>2h</b></div>
<div class="ui__grid2">
<div class="ui__tile"><span class="ui__stat"><b>0</b><span>PASSWORDS</span></span></div>
<div class="ui__tile"><span class="ui__stat"><b>0</b><span>SERVER KEYS</span></span></div>
</div>
</div>`
  },
  {
    frame: "browser",
    label: "Verification",
    url: "chainmail.aurezalabs.com/verify",
    caption: { title: "The chain carries only proof", body: "A hash commitment shows a message existed at a time. Content and metadata stay off-chain entirely." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Message proof</span><span class="ui__pill">VERIFIED</span></div>
<div class="ui__row"><i>Sender signature</i><b>VALID</b></div>
<div class="ui__row"><i>Commitment on chain</i><b>BLOCK 21,408,663</b></div>
<div class="ui__row"><i>Tamper check</i><b>INTACT</b></div>
<div class="ui__row ui__row--hot"><i>Content stored on chain</i><b>NONE</b></div>
<div class="ui__legend"><span>X25519</span><span>XChaCha20-Poly1305</span></div>
</div>`
  }
];

screens["linetrace"] = [
  {
    frame: "browser",
    label: "Investigation console",
    url: "linetrace.aurezalabs.com/defect/48213",
    caption: { title: "One clock, four streams", body: "Video, PLC tags, batch events and operator actions share a time base, so a defect can be walked backwards across all of them at once." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Defect 48213 &middot; 14:32:07</span><span class="ui__pill ui__pill--warn">T&minus;12s</span></div>
<div class="ui__bars"><i style="height:30%"></i><i style="height:42%"></i><i style="height:36%"></i><i style="height:55%"></i><i class="is-hot" style="height:92%"></i><i style="height:48%"></i><i style="height:38%"></i><i style="height:30%"></i></div>
<div class="ui__row ui__row--hot"><i>Extruder 3 &middot; temp deviation +6.4&deg;C</i><b>RANK 1</b></div>
<div class="ui__row"><i>Tool change &middot; 41 min prior</i><b>RANK 2</b></div>
<div class="ui__row"><i>Material lot 88-C</i><b>RANK 3</b></div>
<div class="ui__legend"><span><i></i>PLC tag</span><span>Video &middot; Batch &middot; Operator aligned</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Evidence bundle",
    url: "linetrace.aurezalabs.com/hypothesis/1",
    caption: { title: "Hypotheses, not verdicts", body: "Each candidate cause opens with its frames, tag traces and historical precedents already assembled for an engineer to confirm or reject." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Hypothesis 1 &middot; Extruder 3</span><span class="ui__pill">EVIDENCE</span></div>
<div class="ui__row"><i>Frames 14:31:55 &ndash; 14:32:09</i><b>14 CLIPS</b></div>
<div class="ui__row"><i>Deviation window</i><b>12.4s</b></div>
<div class="ui__row"><i>Historical precedents</i><b>7 MATCHES</b></div>
<div class="ui__row"><i>Engineer decision</i><b>PENDING</b></div>
<div class="ui__meter"><i style="width:81%"></i></div>
<div class="ui__legend"><span>Association score 0.81</span></div>
</div>`
  }
];

screens["netcause"] = [
  {
    frame: "browser",
    label: "NOC incident view",
    url: "netcause.aurezalabs.com/incident/9042",
    caption: { title: "Eleven thousand alarms, three hypotheses", body: "Candidates are ranked by how much of the observed alarm set each explains, and what each leaves unaccounted for." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Incident 9042 &middot; storm</span><span class="ui__pill ui__pill--rose">11,204 ALARMS</span></div>
<div class="ui__row ui__row--hot"><i>CR-EDGE-14 &middot; card failure</i><b>EXPLAINS 94%</b></div>
<div class="ui__row"><i>Fibre span 88 &middot; degradation</i><b>EXPLAINS 61%</b></div>
<div class="ui__row"><i>Power feed B &middot; brownout</i><b>EXPLAINS 22%</b></div>
<div class="ui__row"><i>Unexplained alarms</i><b>681</b></div>
<div class="ui__meter"><i style="width:94%"></i></div>
<div class="ui__legend"><span>First hypothesis at 47s</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Impact view",
    url: "netcause.aurezalabs.com/impact",
    caption: { title: "Impact in service terms", body: "Escalation is driven by the service map rather than by alarm volume, so the loudest symptom stops setting priority." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Service impact</span><span class="ui__pill ui__pill--warn">P1</span></div>
<div class="ui__row"><i>Enterprise voice &middot; region 4</i><b>4,102 SUBS</b></div>
<div class="ui__row"><i>Mobile backhaul &middot; 12 sites</i><b>DEGRADED</b></div>
<div class="ui__row"><i>Residential broadband</i><b>UNAFFECTED</b></div>
<div class="ui__grid2">
<div class="ui__tile"><span class="ui__stat"><b>3</b><span>HYPOTHESES</span></span></div>
<div class="ui__tile"><span class="ui__stat"><b>47s</b><span>TO FIRST</span></span></div>
</div>
</div>`
  }
];

screens["pipeintegrity"] = [
  {
    frame: "browser",
    label: "Defect history",
    url: "pipeintegrity.aurezalabs.com/defect/CR-1187",
    caption: { title: "A defect with a history is a forecast", body: "The same physical flaw is matched across campaigns, so ranking is driven by growth rate rather than present appearance." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">CR-1187 &middot; KP 42.318</span><span class="ui__pill ui__pill--warn">GROWING</span></div>
<div class="ui__bars"><i style="height:22%"></i><i style="height:31%"></i><i style="height:44%"></i><i style="height:58%"></i><i class="is-hot" style="height:79%"></i></div>
<div class="ui__row"><i>2020 &middot; 12mm</i><b>MONITOR</b></div>
<div class="ui__row"><i>2022 &middot; 19mm</i><b>MONITOR</b></div>
<div class="ui__row ui__row--hot"><i>2024 &middot; 34mm</i><b>SCHEDULE</b></div>
<div class="ui__legend"><span>Threshold in 14 months</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Integrity map",
    url: "pipeintegrity.aurezalabs.com/network",
    caption: { title: "Findings sit in physical space", body: "Every detection is positioned on the asset rather than in a frame, which is what makes cross-campaign identity possible." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Line 4 &middot; campaign 2024-Q3</span><span class="ui__pill">GPS LOCATED</span></div>
<div class="ui__row ui__row--hot"><i>KP 42.3 &middot; crack &middot; growing</i><b>PRIORITY 1</b></div>
<div class="ui__row"><i>KP 61.7 &middot; corrosion &middot; stable</i><b>PRIORITY 6</b></div>
<div class="ui__row"><i>KP 18.2 &middot; coating loss</i><b>PRIORITY 9</b></div>
<div class="ui__grid2">
<div class="ui__tile"><span class="ui__stat"><b>318</b><span>TRACKED DEFECTS</span></span></div>
<div class="ui__tile"><span class="ui__stat"><b>5</b><span>CAMPAIGNS</span></span></div>
</div>
</div>`
  }
];

screens["batchresolve"] = [
  {
    frame: "browser",
    label: "Case file",
    url: "batchresolve.aurezalabs.com/dev/2025-0431",
    caption: { title: "Evidence assembled, not hunted", body: "Investigators open a compiled case file. The system retrieves and links; the quality unit determines and signs." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Deviation 2025-0431</span><span class="ui__pill">EVIDENCE LINKED</span></div>
<div class="ui__row"><i>Batch record &middot; 218 steps parsed</i><b>LINKED</b></div>
<div class="ui__row"><i>SOP-4471 rev C &middot; in force at manufacture</i><b>LINKED</b></div>
<div class="ui__row"><i>Historian &middot; vessel 7 &middot; 04:12&ndash;09:40</i><b>LINKED</b></div>
<div class="ui__row ui__row--hot"><i>Gap &middot; no environmental record for step 114</i><b>NAMED</b></div>
<div class="ui__legend"><span>Determination: quality unit</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Audit trail",
    url: "batchresolve.aurezalabs.com/audit",
    caption: { title: "Inspector-ready by design", body: "Every retrieval, proposal and acceptance is recorded immutably with user, timestamp and rationale." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Audit trail</span><span class="ui__pill">IMMUTABLE</span></div>
<div class="ui__row"><i>09:41 &middot; retrieved SOP-4471 rev C</i><b>SYSTEM</b></div>
<div class="ui__row"><i>09:44 &middot; hypothesis proposed</i><b>SYSTEM</b></div>
<div class="ui__row"><i>11:02 &middot; hypothesis rejected</i><b>QA-114</b></div>
<div class="ui__row"><i>11:26 &middot; determination signed</i><b>QA-007</b></div>
<div class="ui__meter"><i style="width:100%"></i></div>
<div class="ui__legend"><span>Weeks to days</span><span>Every claim sourced</span></div>
</div>`
  }
];

screens["safepredict"] = [
  {
    frame: "browser",
    label: "Floor risk",
    url: "safepredict.aurezalabs.com/floor/2",
    caption: { title: "Risk rises before contact", body: "Trajectories are projected three seconds ahead, so convergence is flagged while there is still time to intervene." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Floor 2 &middot; live risk</span><span class="ui__pill ui__pill--warn">ELEVATED</span></div>
<div class="ui__bars"><i style="height:24%"></i><i style="height:30%"></i><i style="height:28%"></i><i style="height:46%"></i><i style="height:62%"></i><i class="is-hot" style="height:88%"></i><i style="height:54%"></i><i style="height:32%"></i></div>
<div class="ui__row ui__row--hot"><i>Forklift 4 &harr; pedestrian &middot; 2.8s to converge</i><b>ALERT</b></div>
<div class="ui__row"><i>Zone C &middot; restricted &middot; permit active</i><b>OK</b></div>
<div class="ui__row"><i>Near misses today</i><b>6</b></div>
<div class="ui__legend"><span>Anonymised tracking</span><span>Edge inference</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Hotspot analysis",
    url: "safepredict.aurezalabs.com/hotspots",
    caption: { title: "Layout problems, not just behaviour", body: "Near-miss density mapped onto the floor plan separates badly arranged space from individual error." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Near-miss density &middot; 30 days</span><span class="ui__pill">LEADING INDICATOR</span></div>
<div class="ui__row ui__row--hot"><i>Aisle 7 crossing</i><b>41</b></div>
<div class="ui__row"><i>Dock 3 approach</i><b>18</b></div>
<div class="ui__row"><i>Press bay entry</i><b>9</b></div>
<div class="ui__grid2">
<div class="ui__tile"><span class="ui__stat"><b>3s</b><span>HORIZON</span></span></div>
<div class="ui__tile"><span class="ui__stat"><b>0</b><span>FOOTAGE OFF SITE</span></span></div>
</div>
</div>`
  }
];

screens["complianceiq"] = [
  {
    frame: "browser",
    label: "Contradiction finding",
    url: "complianceiq.aurezalabs.com/finding/882",
    caption: { title: "Both sides, side by side", body: "A contradiction is presented as two passages with the conflict stated between them, so an officer verifies in seconds." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Finding 882 &middot; contradiction</span><span class="ui__pill ui__pill--rose">HIGH</span></div>
<div class="ui__row"><i>MSA-2024-11 &sect;7.3 &middot; retain 7 years</i><b>CLAUSE A</b></div>
<div class="ui__row"><i>POL-DATA rev 9 &sect;4 &middot; purge at 24 months</i><b>CLAUSE B</b></div>
<div class="ui__row ui__row--hot"><i>Both cannot hold for customer records</i><b>CONFLICT</b></div>
<div class="ui__row"><i>Owner &middot; data governance</i><b>TRIAGED</b></div>
<div class="ui__legend"><span>Cited to page and clause</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Coverage map",
    url: "complianceiq.aurezalabs.com/coverage",
    caption: { title: "Coverage stated, not assumed", body: "Each requirement shows the control that satisfies it, or shows plainly that nothing does." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Framework coverage</span><span class="ui__pill">4,112 DOCS</span></div>
<div class="ui__row"><i>Access control</i><b>12 / 12</b></div>
<div class="ui__row"><i>Data retention</i><b>7 / 9</b></div>
<div class="ui__row ui__row--hot"><i>Incident notification &middot; no controlling procedure</i><b>0 / 3</b></div>
<div class="ui__meter"><i style="width:74%"></i></div>
<div class="ui__legend"><span>74% requirements covered</span></div>
</div>`
  }
];

screens["cargoinspect"] = [
  {
    frame: "browser",
    label: "Custody delta",
    url: "cargoinspect.aurezalabs.com/unit/MSKU4471882",
    caption: { title: "Difference becomes provable", body: "Controlled capture geometry makes entry and exit images directly comparable, so what changed during custody is isolated rather than argued." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">MSKU 447188-2</span><span class="ui__pill ui__pill--warn">DELTA FOUND</span></div>
<div class="ui__row"><i>Entry &middot; 14 Mar 06:12 &middot; grade B</i><b>6 FACES</b></div>
<div class="ui__row"><i>Exit &middot; 19 Mar 17:48 &middot; grade C</i><b>6 FACES</b></div>
<div class="ui__row ui__row--hot"><i>Left panel &middot; new deformation 340mm</i><b>DURING CUSTODY</b></div>
<div class="ui__row"><i>Repair estimate &middot; code DP-3</i><b>$1,140</b></div>
<div class="ui__legend"><span>Claim package generated</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Fleet trends",
    url: "cargoinspect.aurezalabs.com/trends",
    caption: { title: "Patterns across the fleet", body: "Consistent grading made damage concentration by route and handler visible for the first time." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Damage by handler &middot; 90 days</span><span class="ui__pill">CONSISTENT GRADING</span></div>
<div class="ui__bars"><i style="height:28%"></i><i style="height:36%"></i><i class="is-hot" style="height:84%"></i><i style="height:41%"></i><i style="height:33%"></i><i style="height:47%"></i><i style="height:30%"></i></div>
<div class="ui__row ui__row--hot"><i>Terminal 3 &middot; door damage</i><b>3.1x MEAN</b></div>
<div class="ui__row"><i>Route AE-NL &middot; corrosion</i><b>1.2x MEAN</b></div>
<div class="ui__legend"><span><i></i>Findings per 1,000 moves</span></div>
</div>`
  }
];

screens["stockreconcile"] = [
  {
    frame: "browser",
    label: "Discrepancy queue",
    url: "stockreconcile.aurezalabs.com/queue",
    caption: { title: "A narrow, honest output", body: "Rather than claiming a perfect live count, the system reports specific locations where physical observation and system state disagree." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Discrepancies &middot; 24h</span><span class="ui__pill ui__pill--warn">9 OPEN</span></div>
<div class="ui__row ui__row--hot"><i>Bin D-18 &middot; movement, no transaction</i><b>CLIP 04:12</b></div>
<div class="ui__row"><i>Bin A-03 &middot; transaction, no movement</i><b>CLIP 11:38</b></div>
<div class="ui__row"><i>Bin F-22 &middot; occluded view</i><b>LOW CONF</b></div>
<div class="ui__row"><i>Directed counts issued</i><b>4</b></div>
<div class="ui__legend"><span>Hours, not quarters</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Accuracy trend",
    url: "stockreconcile.aurezalabs.com/accuracy",
    caption: { title: "Accuracy as a live measure", body: "Inventory accuracy is tracked continuously instead of appearing as a quarterly snapshot that is stale on publication." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Inventory accuracy</span><span class="ui__pill">CONTINUOUS</span></div>
<div class="ui__bars"><i style="height:52%"></i><i style="height:58%"></i><i style="height:63%"></i><i style="height:71%"></i><i style="height:78%"></i><i class="is-strong" style="height:88%"></i></div>
<div class="ui__grid2">
<div class="ui__tile"><span class="ui__stat"><b>0</b><span>SHUTDOWN DAYS</span></span></div>
<div class="ui__tile"><span class="ui__stat"><b>4h</b><span>MEDIAN DETECTION</span></span></div>
</div>
<div class="ui__legend"><span><i></i>Weekly accuracy</span></div>
</div>`
  }
];

screens["roadcondition"] = [
  {
    frame: "browser",
    label: "Programme planner",
    url: "roadcondition.aurezalabs.com/programme",
    caption: { title: "Ranked by cost of deferral", body: "Segments are ordered by what waiting will cost, which is the number an engineer actually builds a programme from." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Maintenance programme &middot; FY26</span><span class="ui__pill">4,012 KM</span></div>
<div class="ui__row ui__row--hot"><i>A-road seg 118 &middot; surface window closing</i><b>DEFER +$412k</b></div>
<div class="ui__row"><i>B-road seg 44 &middot; steady decline</i><b>DEFER +$88k</b></div>
<div class="ui__row"><i>Urban seg 902 &middot; stable</i><b>DEFER +$11k</b></div>
<div class="ui__meter"><i style="width:62%"></i></div>
<div class="ui__legend"><span>62% of budget allocated</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Condition survey",
    url: "roadcondition.aurezalabs.com/coverage",
    caption: { title: "Survey without survey runs", body: "Cameras on gritters and refuse trucks provide continuous coverage, so the network is measured rather than sampled." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Network coverage</span><span class="ui__pill">OPPORTUNISTIC</span></div>
<div class="ui__row"><i>Surveyed under 30 days</i><b>2,880 km</b></div>
<div class="ui__row"><i>Surveyed 30&ndash;90 days</i><b>901 km</b></div>
<div class="ui__row ui__row--hot"><i>No recent pass</i><b>231 km</b></div>
<div class="ui__bars"><i style="height:70%"></i><i style="height:78%"></i><i style="height:66%"></i><i class="is-strong" style="height:88%"></i><i style="height:74%"></i><i style="height:59%"></i></div>
<div class="ui__legend"><span><i></i>Weekly km captured</span></div>
</div>`
  }
];

screens["clinicalinsight"] = [
  {
    frame: "browser",
    label: "Reading workspace",
    url: "clinicalinsight.aurezalabs.com/study/44182",
    caption: { title: "A second reader that shows its working", body: "Every finding opens onto the region it rests on, the prior comparison and the literature that informs interpretation." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Study 44182 &middot; CT chest</span><span class="ui__pill">SECOND READER</span></div>
<div class="ui__row"><i>Nodule &middot; RUL &middot; 8.2mm</i><b>REGION SHOWN</b></div>
<div class="ui__row"><i>Prior 2023-11 &middot; 6.1mm</i><b>+34% INTERVAL</b></div>
<div class="ui__row"><i>Literature &middot; 4 passages</i><b>CITED</b></div>
<div class="ui__row ui__row--hot"><i>Clinician decision required</i><b>PENDING</b></div>
<div class="ui__legend"><span>System cannot write to report</span></div>
</div>`
  },
  {
    frame: "browser",
    label: "Performance monitoring",
    url: "clinicalinsight.aurezalabs.com/monitoring",
    caption: { title: "Drift watched in service", body: "Model behaviour is compared continuously against clinician decisions, so degradation is detected rather than assumed away." },
    html: `<div class="ui">
<div class="ui__head"><span class="ui__title">Model performance &middot; live</span><span class="ui__pill">MONITORED</span></div>
<div class="ui__bars"><i style="height:74%"></i><i style="height:78%"></i><i style="height:76%"></i><i style="height:80%"></i><i style="height:77%"></i><i class="is-strong" style="height:82%"></i></div>
<div class="ui__row"><i>Findings accepted</i><b>81%</b></div>
<div class="ui__row"><i>Findings rejected</i><b>19%</b></div>
<div class="ui__row"><i>Drift alerts &middot; 90 days</i><b>0</b></div>
<div class="ui__legend"><span><i></i>Weekly agreement</span></div>
</div>`
  }
];

module.exports = screens;
