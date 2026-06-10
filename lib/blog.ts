export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }

export interface BlogPost {
  slug: string
  title: string
  description: string
  category: 'Field Notes' | 'Tech in Fire Protection' | 'Career & Industry'
  date: string
  readingMinutes: number
  author: string
  /** Tool page this post should cross-link to (SEO internal linking) */
  relatedTool: { name: string; href: string }
  body: BlogBlock[]
}

export const posts: BlogPost[] = [
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
