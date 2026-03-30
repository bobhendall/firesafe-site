import type { Metadata } from 'next'
import { DoorOpen, ArrowRight, Clock, Users, Route, Calculator, BarChart3, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'Egress Analysis & ASET/RSET Calculator | FireSafe.AI',
  description:
    'AI-powered egress analysis with ASET/RSET framework, occupant load calculations per IBC, travel distance verification, and evacuation time modeling.',
  openGraph: {
    title: 'Egress Analysis & ASET/RSET Calculator | FireSafe.AI',
    description:
      'AI-powered egress analysis with ASET/RSET framework, occupant load calculations per IBC, travel distance verification, and evacuation time modeling.',
  },
}

const features = [
  {
    icon: Clock,
    title: 'ASET/RSET Framework',
    description:
      'Calculate Available Safe Egress Time from tenability analysis (FDS, zone models, or hand calculations) and Required Safe Egress Time from occupant load, pre-movement time, travel speed, and flow capacity. Verify that ASET exceeds RSET with an appropriate safety margin per SFPE guidelines.',
  },
  {
    icon: Users,
    title: 'Occupant Load Calculations',
    description:
      'Determine occupant loads per IBC Table 1004.5 with support for multiple occupancy types, mixed-use buildings, and mezzanine levels. Account for accessory, non-simultaneous, and outdoor areas per code-specific provisions.',
  },
  {
    icon: Route,
    title: 'Travel Distance Verification',
    description:
      'Verify common path of travel, dead-end corridor, and exit access travel distances per IBC Table 1017.2. Account for sprinkler system presence and occupancy-specific exceptions. Flag non-compliant paths automatically.',
  },
  {
    icon: Calculator,
    title: 'Exit Capacity Analysis',
    description:
      'Calculate required exit width using the capacity factors from IBC Table 1005.1 (0.2 in./person for stairs, 0.15 in./person for other egress components). Verify compliance with minimum door width, corridor width, and stairway width requirements.',
  },
  {
    icon: BarChart3,
    title: 'Evacuation Time Modeling',
    description:
      'Model evacuation times using hydraulic flow calculations (SFPE Handbook, Nelson/Mowrer method) or agent-based simulation parameters. Account for merge ratios at stair-floor junctions, queuing delays, and reduced movement speeds for mobility-impaired occupants.',
  },
  {
    icon: CheckCircle2,
    title: 'Smoke Control Integration',
    description:
      'Link egress analysis to smoke control results. Determine ASET from smoke layer descent calculations or FDS tenability outputs and compare directly against RSET values -- all within a single integrated workflow.',
  },
]

const faqs = [
  {
    question: 'What is the ASET/RSET framework?',
    answer:
      'ASET (Available Safe Egress Time) represents the time from fire ignition until conditions become untenable along the egress path. RSET (Required Safe Egress Time) is the total time needed for all occupants to reach safety, including detection time, notification time, pre-movement time, and movement time. A design is considered acceptable when ASET exceeds RSET by a sufficient safety margin -- typically 1.5x to 2.0x per SFPE Engineering Guide to Performance-Based Fire Protection.',
  },
  {
    question: 'How are occupant loads calculated per IBC?',
    answer:
      'IBC Table 1004.5 provides occupant load factors (square feet per person) for each occupancy use. FireSafe.AI applies the appropriate factor based on the function of the space, not the occupancy classification of the building. For spaces with fixed seating, the actual seat count governs. The platform handles concentrated and unconcentrated use areas, accessory spaces (IBC 1004.5.1), and non-simultaneous occupancy (1004.5.2).',
  },
  {
    question: 'Does the tool support agent-based evacuation modeling?',
    answer:
      'The current platform provides hydraulic flow-based evacuation time calculations using the Nelson/Mowrer method from the SFPE Handbook. This approach calculates flow rates through corridors, doorways, and stairs based on effective width and density. For projects requiring agent-based modeling (Pathfinder, STEPS, or similar), FireSafe.AI can export occupant load data, starting locations, and exit assignments to prepare the simulation setup.',
  },
  {
    question: 'What pre-movement times should I use?',
    answer:
      'Pre-movement time depends on the alerting system, occupant familiarity, and activity. FireSafe.AI references published data from PD 7974-6 (BSI) and SFPE Handbook Chapter 64, providing default ranges: W1 (awake, familiar) 1-2 min, W2 (awake, unfamiliar) 2-5 min, S1 (sleeping, familiar) 2-5 min, S2 (sleeping, unfamiliar) 5-10+ min. You can override defaults with project-specific data.',
  },
  {
    question: 'How do travel distance exceptions work?',
    answer:
      'IBC 1017.2 provides base travel distances that vary by occupancy group and sprinkler status. Common modifications include increased travel distance in sprinklered buildings (typically 250 ft vs. 200 ft for most occupancies), special provisions for open parking garages (IBC 1017.2.1), and one-story industrial buildings (IBC 1017.2.2). The platform tracks these exceptions and flags applicable provisions based on your project parameters.',
  },
]

export default function EgressPage() {
  return (
    <>
      <section className="flex flex-col items-center px-6 pt-20 pb-16 text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
          <DoorOpen className="h-7 w-7 text-primary" />
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Egress Analysis & ASET/RSET Calculator
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Perform complete egress analyses with occupant load calculations, travel distance verification, exit capacity checks, and ASET/RSET evaluation. Integrated with smoke control and FDS outputs for seamless performance-based design.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href={APP_URL} className="gap-2">Start free <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Egress Design Grounded in Code and Engineering</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Egress analysis is where fire protection engineering meets life safety code compliance. Every occupied building requires a properly designed egress system -- means of egress that allow occupants to travel from any point in the building to a public way within the allowable travel distance, through exits of sufficient width to handle the calculated occupant load, within a time frame that maintains tenable conditions along the entire path.
          </p>
          <p>
            FireSafe.AI brings these calculations together in one place. Define your building&apos;s floor areas by occupancy use, specify exit locations and widths, and set corridor dimensions. The platform calculates occupant loads per IBC Table 1004.5, verifies travel distances per IBC 1017.2, checks exit capacity per IBC 1005.1, and models evacuation time using SFPE Handbook hydraulic flow methods. For performance-based projects, it calculates RSET and compares against ASET values derived from your smoke control or FDS analysis.
          </p>
          <p>
            The result is a defensible egress analysis that traces every assumption back to a code section or published engineering reference. When the AHJ asks why you believe occupants can evacuate before conditions become untenable, you have the data to show your work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold">Key Capabilities</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Applicable Standards & References</h2>
        <p className="mb-6 text-muted-foreground">
          Egress analysis in FireSafe.AI references the following codes and engineering resources:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'IBC Ch. 10 -- Means of Egress',
            'IBC Table 1004.5 -- Occupant Load Factors',
            'IBC Table 1005.1 -- Egress Width Per Occupant',
            'IBC Table 1017.2 -- Exit Access Travel Distance',
            'NFPA 101 -- Life Safety Code',
            'SFPE Handbook, Ch. 59 -- Human Behavior in Fire',
            'SFPE Handbook, Ch. 64 -- Evacuation Modeling',
            'PD 7974-6 -- Human Factors in Fire Safety',
          ].map((standard) => (
            <div key={standard} className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground">
              {standard}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Common Use Cases</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">Assembly occupancy egress:</strong> Calculate occupant loads for concert halls, convention centers, and stadiums. Verify that egress widths accommodate concentrated occupant loads and that travel distances comply with IBC provisions for assembly uses.</p>
          <p><strong className="text-foreground">High-rise evacuation timing:</strong> Model stairwell evacuation for buildings over 75 feet. Evaluate total evacuation time vs. phased evacuation strategies, accounting for stair merge ratios, door queuing, and counterflow from fire department operations.</p>
          <p><strong className="text-foreground">Mixed-use building analysis:</strong> Handle buildings with multiple occupancy types on different floors. Apply correct occupant load factors for each use, aggregate exit capacity requirements, and verify that shared egress components serve the combined occupant load.</p>
          <p><strong className="text-foreground">Performance-based egress design:</strong> For projects pursuing code alternatives under IBC 104.11, develop a complete ASET/RSET analysis that demonstrates equivalent safety. Link fire modeling results to tenability criteria and evacuation timing to support the alternative design request.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="mb-8 text-center text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-foreground">{faq.question}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center border-t border-border px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold">Build defensible egress analyses faster</h2>
        <p className="mt-3 max-w-lg text-muted-foreground">
          From occupant load to ASET/RSET evaluation. Every calculation traced to a code section.
        </p>
        <div className="mt-6">
          <Button size="lg" asChild>
            <a href={APP_URL} className="gap-2">Get started free <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </>
  )
}
