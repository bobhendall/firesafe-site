export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'cta'; text: string; href: string; label: string }

export interface BlogPost {
  slug: string
  title: string
  description: string
  category: 'Field Notes' | 'Tech in Fire Protection' | 'Career & Industry' | 'Engineering Guides'
  date: string
  readingMinutes: number
  author: string
  /** Tool page this post should cross-link to (SEO internal linking) */
  relatedTool: { name: string; href: string }
  body: BlogBlock[]
}

export const posts: BlogPost[] = [
  {
    slug: 'understanding-aset-rset',
    title: 'Understanding ASET/RSET: The Foundation of Performance-Based Design',
    description:
      'Available Safe Egress Time versus Required Safe Egress Time — what the framework actually measures, where the numbers come from, and why the margin matters more than either value alone.',
    category: 'Engineering Guides',
    date: '2026-06-09',
    readingMinutes: 6,
    author: 'FireSafe.AI Team',
    relatedTool: { name: 'Egress Analysis', href: '/tools/egress' },
    body: [
      {
        type: 'p',
        text: 'Performance-based fire design stands on one comparison: can everyone get out before conditions become untenable? The ASET/RSET framework turns that question into two quantities. ASET — Available Safe Egress Time — is how long the fire allows: the time from ignition until conditions along the egress path become untenable. RSET — Required Safe Egress Time — is how long the occupants need: the time from ignition until the last occupant reaches safety. A design works when ASET exceeds RSET with margin to spare.',
      },
      { type: 'h2', text: 'Where RSET comes from' },
      {
        type: 'p',
        text: 'RSET is a chain of sequential intervals, and each one is its own engineering problem:',
      },
      {
        type: 'ul',
        items: [
          'Detection time — how long until the fire is detected, governed by detector type, spacing, and fire growth rate.',
          'Notification time — the lag between detection and occupant alerting.',
          'Pre-movement time — recognition and response: occupants perceive the alarm, decide it is real, gather belongings or others, and begin moving. In most occupancies this dominates total RSET, and it is the hardest interval to predict.',
          'Movement time — physical travel to a protected exit or place of safety, driven by occupant load, travel distance, and the capacity of doors, corridors, and stairs.',
        ],
      },
      {
        type: 'p',
        text: 'Movement time is the most calculable piece — hydraulic-style hand methods from the SFPE Handbook or evacuation models give defensible numbers. Pre-movement is where the literature is messiest and where reviewers will probe hardest, so document the basis for every value you assume.',
      },
      { type: 'h2', text: 'Where ASET comes from' },
      {
        type: 'p',
        text: 'ASET requires a fire: a design fire scenario with a specified heat release rate curve. From there, you track tenability along egress paths against criteria such as smoke layer height above head level, visibility, gas temperature, and toxicity (typically via fractional effective dose). The tool you use to compute it scales with the problem: algebraic correlations like the NFPA 92 smoke-filling equations for simple volumes, zone models like CFAST for compartmented buildings, or field models like FDS when geometry and smoke movement are too complex for simpler methods.',
      },
      { type: 'h2', text: 'The margin is the design' },
      {
        type: 'p',
        text: 'A bare ASET > RSET result is not a finished analysis. Both sides carry uncertainty — fire growth assumptions on one side, human behavior on the other — so the comparison needs a deliberate margin of safety. Practice varies: some designs apply a safety factor to RSET, others demonstrate margin across a family of scenarios. What matters is that the margin is explicit, justified, and agreed with the AHJ early, not implied after the fact.',
      },
      {
        type: 'p',
        text: 'Where you will use this: atrium designs, alternative means and methods requests under IBC 104.11, performance-based options under NFPA 101 Chapter 5, and any design where prescriptive travel-distance or smoke-control provisions cannot be met literally.',
      },
      {
        type: 'cta',
        text: 'If you want to feel the sensitivity of the numbers, change the pre-movement time and watch the margin move — that intuition is the foundation the rest of performance-based design builds on.',
        href: '/calculators/aset-rset',
        label: 'Try the free ASET/RSET margin calculator',
      },
    ],
  },
  {
    slug: 'smoke-control-algebraic-vs-cfd',
    title: 'Smoke Control Design: Algebraic vs. CFD Methods Compared',
    description:
      'NFPA 92 hand calculations or a full CFD model? When each method is appropriate, what each one costs you, and how to choose defensibly.',
    category: 'Engineering Guides',
    date: '2026-06-08',
    readingMinutes: 6,
    author: 'FireSafe.AI Team',
    relatedTool: { name: 'Smoke Control', href: '/tools/smoke-control' },
    body: [
      {
        type: 'p',
        text: 'Every atrium smoke control design eventually hits the same fork: do the NFPA 92 algebraic calculations suffice, or does this geometry demand CFD? The answer drives weeks of schedule and a meaningful slice of the fee, so it deserves a better basis than habit.',
      },
      { type: 'h2', text: 'What the algebraic methods give you' },
      {
        type: 'p',
        text: 'NFPA 92 provides closed-form equations for the core quantities: smoke layer descent in a filling volume, plume mass flow (axisymmetric, balcony spill, and window plumes), exhaust rates to hold a design layer height, plugholing limits on individual inlets, and maximum make-up air velocity. They run in minutes, every input is visible, and an AHJ can check them line by line.',
      },
      {
        type: 'p',
        text: 'Their limits are structural: the correlations assume idealized conditions — broadly uniform cross-sections, quiescent ambient, an unobstructed plume. The standard flags the boundaries (the smoke-filling correlation, for instance, is bounded by tested A/H² ranges), and outside them the equations stop being conservative in any knowable way.',
      },
      { type: 'h2', text: 'What CFD adds — and costs' },
      {
        type: 'ul',
        items: [
          'Geometry fidelity: irregular atria, interconnected floor openings, sloped roofs, and obstructions that distort the plume.',
          'Local quantities: visibility and temperature at specific egress paths rather than a single well-mixed layer height.',
          'Interaction effects: make-up air jets disturbing the plume, stratification, wind, and HVAC interplay.',
        ],
      },
      {
        type: 'p',
        text: 'The price is real: model construction, mesh sensitivity studies, multi-hour or multi-day runs per scenario, and a review burden that shifts from checking equations to auditing modeling judgment. A CFD submission without grid sensitivity documentation and validation context invites — and deserves — a hard review.',
      },
      { type: 'h2', text: 'A defensible decision rule' },
      {
        type: 'p',
        text: 'Start algebraic. If the geometry sits inside the correlations’ applicability and the answer passes with margin, you are done — simpler is stronger in review. Escalate to CFD when the geometry breaks the correlations’ assumptions, when the algebraic answer is marginal and the conservatism is costing real equipment, or when the design question is inherently local. And when you do escalate, keep the hand calculations: they are your sanity check on the model, and your AHJ’s fastest path to confidence in it.',
      },
      {
        type: 'cta',
        text: 'You can exercise the first branch of that decision right now — the NFPA 92 steady-fire filling correlation, with its validity limits shown.',
        href: '/calculators/smoke-layer',
        label: 'Try the free smoke layer height calculator',
      },
    ],
  },
  {
    slug: 'fds-modeling-complete-guide',
    title: 'FDS Modeling: A Practical Guide for Fire Protection Engineers',
    description:
      'What the Fire Dynamics Simulator actually solves, the inputs that dominate your results, and the mistakes that get models rejected in review.',
    category: 'Engineering Guides',
    date: '2026-06-07',
    readingMinutes: 7,
    author: 'FireSafe.AI Team',
    relatedTool: { name: 'FDS/CFD Modeling', href: '/tools/fds-cfd' },
    body: [
      {
        type: 'p',
        text: 'NIST’s Fire Dynamics Simulator is the de facto field model of fire protection engineering: a large-eddy simulation CFD code specialized for low-speed, thermally-driven flow with smoke and heat transport. It is free, extensively validated, and unforgiving of careless inputs. This guide covers the parts of FDS practice that actually decide whether your results mean anything.',
      },
      { type: 'h2', text: 'The heat release rate is the model' },
      {
        type: 'p',
        text: 'FDS does not predict your fire for you — in design applications you prescribe the heat release rate, and nearly everything downstream scales with it. The design fire (peak HRR, growth rate, area) is an engineering decision drawn from test data, literature, or hazard analysis, and it belongs in your report with a justification, not buried in an input file. A perfect mesh around the wrong fire is a precise answer to the wrong question.',
      },
      { type: 'h2', text: 'Mesh resolution: the D*/δx test' },
      {
        type: 'p',
        text: 'The standard first check on grid adequacy is the characteristic fire diameter D* divided by the cell size δx. D* is computed from the heat release rate; the FDS User Guide and the NUREG-1824 validation study used D*/δx values in the range of roughly 4 to 16, with more cells across the plume meaning better resolution of the flow that matters. Treat D*/δx as a screening criterion, not a verdict: the real requirement is a grid sensitivity study showing your answer quantities are stable as the mesh refines.',
      },
      {
        type: 'ul',
        items: [
          'Refine where the physics is: plume, ceiling jet, vents, and measurement locations — not uniformly everywhere.',
          'Keep mesh boundaries away from regions of strong flow, and align mesh interfaces carefully when using multiple meshes.',
          'Place open boundaries far enough from the fire that the boundary condition is not shaping the plume.',
        ],
      },
      { type: 'h2', text: 'Outputs that answer design questions' },
      {
        type: 'p',
        text: 'Plan instrumentation before running: devices for layer height, visibility, temperature, and velocities at the locations your acceptance criteria reference; slice files for the planes you will show the AHJ; boundary files for surface temperatures. Smokeview renders are persuasive, but the design case is made by quantitative device outputs against explicit tenability criteria.',
      },
      { type: 'h2', text: 'Verification, validation, and review' },
      {
        type: 'p',
        text: 'You inherit FDS’s pedigree only if you stay inside it. NUREG-1824 / EPRI 1011999 and the FDS Validation Guide document predictive accuracy for specific quantities in specific configurations; ASTM E1355 frames how to evaluate a model’s capability for your use. A submission should state the code version, the validation basis relevant to its configuration, the grid sensitivity results, and the design fire justification. Models get rejected for missing those four things far more often than for the physics.',
      },
      { type: 'h2', text: 'The common failure modes' },
      {
        type: 'ul',
        items: [
          'Meshes too coarse to resolve the plume, with no sensitivity study to expose it.',
          'Burner area inconsistent with the prescribed HRR, producing unphysical flame heights.',
          'Tenability read from a single point instead of along the actual egress paths.',
          'Reporting averages over windows that hide the transient the design must survive.',
        ],
      },
      {
        type: 'p',
        text: 'FDS rewards engineers who treat it as an instrument rather than an oracle. Define the question, justify the fire, prove the grid, instrument the answer — and the model becomes the strongest exhibit in your submission instead of its weakest point.',
      },
    ],
  },
  {
    slug: 'when-the-ahj-is-wrong',
    title: 'When the AHJ Is Wrong — and You Have to Prove It',
    description:
      "The Authority Having Jurisdiction told me my design was wrong. They were wrong. Here's how I handled it.",
    category: 'Field Notes',
    date: '2026-06-02',
    readingMinutes: 3,
    author: 'Bob Hendall',
    relatedTool: { name: 'Code Consulting', href: '/tools/code-consulting' },
    body: [
      {
        type: 'p',
        text: "This is more common than people admit. AHJs are the gatekeepers — they approve your system, and you don't install without them. But they're human, they have varying levels of expertise, and sometimes they misinterpret the code.",
      },
      {
        type: 'p',
        text: "I had a situation where an AHJ rejected a suppression system design because they believed a specific installation method wasn't code-compliant. It was. NFPA 13 had an alternative method provision that addressed exactly what we'd designed.",
      },
      { type: 'h2', text: 'The fix was documentation, not argument' },
      {
        type: 'p',
        text: "Arguing with an AHJ rarely moves a review forward. What does: pulling the specific section, the annex commentary, and — in our case — a prior approval letter from the same jurisdiction on a comparable project. I presented all three calmly, in writing. They approved it.",
      },
      {
        type: 'p',
        text: "That's not a victory over the AHJ. It's the process working the way it's supposed to. The reviewer's job is to protect the public from non-compliant systems; your job is to demonstrate compliance so clearly that approval becomes the easy decision.",
      },
      { type: 'h2', text: 'The lesson' },
      {
        type: 'p',
        text: "You need to know the code cold. You can't bluff your way past an AHJ — and you shouldn't want to. But when you're right, the code is on your side, and the engineer who can cite the section, the edition, and the commentary wins the conversation without raising their voice.",
      },
      {
        type: 'p',
        text: 'Every engineer has an AHJ story. The ones that end well usually end with a citation, not a complaint.',
      },
    ],
  },
  {
    slug: 'sprinkler-systems-data-layer',
    title: "The Sprinkler System Innovation Nobody's Talking About",
    description:
      "The most interesting innovation in sprinkler systems right now isn't the head design. It's the data layer.",
    category: 'Tech in Fire Protection',
    date: '2026-05-19',
    readingMinutes: 3,
    author: 'Bob Hendall',
    relatedTool: { name: 'Suppression Systems', href: '/tools/suppression' },
    body: [
      {
        type: 'p',
        text: "Traditional sprinkler systems are fundamentally passive. Water flows when a head activates. Until something happens, the system doesn't tell you much of anything.",
      },
      {
        type: 'p',
        text: 'New smart monitoring systems change that by adding a data layer: continuous pressure monitoring, flow switch status, valve position sensing, water temperature — all feeding into a dashboard or building management system.',
      },
      { type: 'h2', text: 'Why the data layer matters' },
      {
        type: 'ul',
        items: [
          'Maintenance: a slow pressure drop is visible before it becomes a flooded basement.',
          'Verification: valve status can be confirmed remotely instead of by walking the building.',
          'Inspection: NFPA 25 programs can integrate monitoring data — moving toward risk-based inspection intervals rather than fixed schedules for low-risk systems.',
        ],
      },
      { type: 'h2', text: 'The honest caveat' },
      {
        type: 'p',
        text: "Most existing systems weren't built for retrofit monitoring. Adding sensors to older infrastructure is a project, not a plug-and-play upgrade — budget and plan for it accordingly.",
      },
      {
        type: 'p',
        text: "But the direction is clear: future systems will be monitored continuously. Passive systems are becoming active data sources. That's the shift worth watching, and it's happening in the pipe network, not the sprinkler head.",
      },
    ],
  },
  {
    slug: 'smart-fire-detection-integration',
    title: 'Smart Fire Detection Is Here — But the Integration Problem Is Bigger Than the Technology',
    description:
      "Intelligent fire detection technology has advanced significantly. The problem isn't the sensors anymore. It's everything else.",
    category: 'Tech in Fire Protection',
    date: '2026-05-05',
    readingMinutes: 3,
    author: 'Bob Hendall',
    relatedTool: { name: 'Fire Detection', href: '/tools/fire-detection' },
    body: [
      {
        type: 'p',
        text: 'The state of detection technology in 2026 is impressive. Multi-criteria detectors that measure smoke particle size, heat, and CO — and can distinguish between cooking smoke and structural fire. Video-based fire detection using computer vision. Aspirating systems with sub-threshold sensitivity for high-value environments.',
      },
      {
        type: 'p',
        text: 'The technology is not the bottleneck. The bottleneck is integration, data management, and response protocol.',
      },
      { type: 'h2', text: 'The questions that actually decide performance' },
      {
        type: 'p',
        text: "When you have a hospital with 4,000 detector points, a data center with aspirating systems, and a warehouse with video detection — how does that data flow? Who owns the alert? What's the verified-alarm protocol before emergency services are dispatched?",
      },
      {
        type: 'p',
        text: "These are systems integration problems. They require engineering discipline, clear commissioning protocols, and ongoing coordination between disciplines that don't historically talk to each other well.",
      },
      { type: 'h2', text: 'The field reality' },
      {
        type: 'p',
        text: "I've seen cutting-edge detection technology underperform in field conditions because the integration was done badly. The sensor did its job. The system around it didn't.",
      },
      {
        type: 'p',
        text: 'If you specify advanced detection, specify the integration with the same rigor — or the spec sheet performance will never make it to the building.',
      },
    ],
  },
  {
    slug: 'passed-inspection-is-not-safe',
    title: '"It Passed Inspection" Is Not the Same as "It\'s Safe"',
    description:
      '"It passed inspection" is the most dangerous sentence in fire protection.',
    category: 'Field Notes',
    date: '2026-04-21',
    readingMinutes: 3,
    author: 'Bob Hendall',
    relatedTool: { name: 'Suppression Systems', href: '/tools/suppression' },
    body: [
      {
        type: 'p',
        text: 'A fire protection system that meets minimum code requirements is not necessarily a system that will perform well in a real fire in that specific building with those specific occupants.',
      },
      {
        type: 'p',
        text: 'Inspection is a compliance check. Code compliance is a floor — established from statistical life-safety outcomes across building stock in general, not from an analysis of your building specifically.',
      },
      { type: 'h2', text: 'The most common failure' },
      {
        type: 'p',
        text: 'Systems that are technically compliant but were designed without understanding how the building actually operates. Then the occupancy changes. Storage configurations change. Nobody updates the fire protection analysis — and the compliant system quietly stops matching the hazard it protects.',
      },
      {
        type: 'p',
        text: "NFPA 25 inspection cycles exist for a reason, and they're a minimum. High-risk occupancies should be doing more.",
      },
      { type: 'h2', text: 'The better question' },
      {
        type: 'p',
        text: 'The engineers doing this right are asking "will this system perform?" — not just "does this system comply?" That is a different and much harder question. Compliance does not equal safety.',
      },
    ],
  },
  {
    slug: 'honest-truth-fire-protection-pe',
    title: 'The Honest Truth About Getting Your PE in Fire Protection',
    description:
      "Getting your PE license in fire protection engineering is hard. Nobody tells you how hard until you're already studying.",
    category: 'Career & Industry',
    date: '2026-04-07',
    readingMinutes: 3,
    author: 'Bob Hendall',
    relatedTool: { name: 'PE Tutor', href: '/tools/pe-tutor' },
    body: [
      {
        type: 'p',
        text: "The NCEES Fire Protection PE exam is not a generalist exam. It's deep on hydraulics, fire dynamics, detection and alarm systems, suppression design, and egress. You need to know the NFPA codes — specifically 13, 72, 101, and 25 — at a functional level, not just surface familiarity.",
      },
      { type: 'h2', text: 'What passing actually takes' },
      {
        type: 'p',
        text: 'Most people I know who passed studied 200-plus hours. The ones who failed the first time usually underestimated the hydraulics section: you need to be able to do sprinkler hydraulic calculations under time pressure, not just recognize the method.',
      },
      {
        type: 'ul',
        items: [
          'Get comfortable with the NFPA Handbook — navigation speed matters as much as knowledge.',
          'Use practice exams heavily, under timed conditions.',
          'Find a study group; accountability beats motivation over a six-month grind.',
        ],
      },
      { type: 'h2', text: 'Why it\'s worth it' },
      {
        type: 'p',
        text: 'The PE opens doors that a regular engineering job won\'t. It changes your billing rate, your liability exposure, and your career trajectory. Worth the grind — go in with your eyes open about what the grind is.',
      },
    ],
  },
  {
    slug: 'fire-pe-exam-real-timeline',
    title: 'The Fire PE Exam Is Worth It — But Nobody Tells You the Real Timeline',
    description:
      'The NCEES Fire Protection PE exam: worth it. But the realistic study timeline is longer than you think.',
    category: 'Career & Industry',
    date: '2026-03-24',
    readingMinutes: 3,
    author: 'Bob Hendall',
    relatedTool: { name: 'PE Tutor', href: '/tools/pe-tutor' },
    body: [
      {
        type: 'p',
        text: "Quick reality check for anyone considering the Fire PE: the average study time for people who pass is 200–300 hours. If you're working full-time, that's four to six months minimum of serious study discipline. Plan accordingly.",
      },
      { type: 'h2', text: 'Where exams are won and lost' },
      {
        type: 'ul',
        items: [
          "Hydraulics will make or break you. If you're not comfortable with sprinkler hydraulic calculations under time pressure, start there.",
          'Know your references cold. You can bring them in — the engineers who fail are often the ones who can\'t navigate quickly under exam pressure. Tab and index everything.',
          'The NFPA codes you need most: 13, 13R, 13D, 72, 101, 25, and 2001. Know them well enough to find specific provisions in 60 seconds or less.',
          'Study groups work. Find other people preparing for the same exam.',
        ],
      },
      { type: 'h2', text: 'After you pass' },
      {
        type: 'p',
        text: "Re-evaluate your compensation. A PE in fire protection has real market value — to your firm, to clients, and to the projects you're now allowed to stamp. Don't undersell it.",
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
