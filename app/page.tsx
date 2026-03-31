import Link from 'next/link'
import { Flame, GitCompare, Warehouse, FlaskConical, GraduationCap, Wind, DoorOpen, Bell, Droplets, BookOpen } from 'lucide-react'
import { FlameHero } from '@/components/flame-hero'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

const tools = [
  {
    icon: Flame,
    name: 'FDS/CFD Modeling',
    href: '/tools/fds-cfd',
    description: 'Describe a fire scenario in English, get a syntactically correct FDS input file. Mesh validation via D*/δx. 3D preview before you run the solver.',
  },
  {
    icon: Wind,
    name: 'Smoke Control',
    href: '/tools/smoke-control',
    description: 'Atrium smoke filling, mechanical exhaust sizing, stairwell pressurization. Calculations per NFPA 92 with assumptions you can trace.',
  },
  {
    icon: DoorOpen,
    name: 'Egress Analysis',
    href: '/tools/egress',
    description: 'ASET/RSET framework. Occupant load calcs, travel distance checks, evacuation modeling. The math AHJs actually ask for.',
  },
  {
    icon: GitCompare,
    name: 'CodeCompare',
    href: APP_URL,
    description: 'Diff fire and building codes across editions and jurisdictions. See exactly what changed between IBC 2018 and 2021, line by line.',
  },
  {
    icon: BookOpen,
    name: 'Code Consulting',
    href: '/tools/code-consulting',
    description: 'Natural language search across IBC, IFC, and NFPA. Ask a question, get the clause — with cross-references.',
  },
  {
    icon: Bell,
    name: 'Fire Detection',
    href: '/tools/fire-detection',
    description: 'Detector spacing and notification appliance placement per NFPA 72. Compliance checks that catch what you\'d miss at 2am.',
  },
  {
    icon: Droplets,
    name: 'Suppression Systems',
    href: '/tools/suppression',
    description: 'Sprinkler layout, hydraulic calcs, hazard classification per NFPA 13. Pipe schedules without the spreadsheet archaeology.',
  },
  {
    icon: FlaskConical,
    name: 'HazMat & Risk',
    href: '/tools/hazmat-risk',
    description: 'MAQ calculations, control area analysis, quantitative risk assessment. When the AHJ wants numbers, not narratives.',
  },
  {
    icon: Warehouse,
    name: 'StoragePro',
    href: '/tools/storagepro',
    description: 'NFPA 13 & IFC storage layout. Commodity classification → ceiling height → sprinkler design. One flow.',
  },
  {
    icon: GraduationCap,
    name: 'PE Tutor',
    href: '/tools/pe-tutor',
    description: 'NICET and PE exam prep. AI practice problems, code walkthroughs, flashcards. Study the hard parts until they\'re not.',
  },
]

export default function MarketingPage() {
  return (
    <>
      {/* Hero with flame animation */}
      <FlameHero />

      {/* Tools grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12 text-center">
          <h2 className="text-xl font-bold tracking-tight text-foreground">The toolkit</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">Every tool references the actual standard. Every output is traceable.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon
            const isExternal = tool.href.startsWith('http')
            const Wrapper = isExternal ? 'a' : Link
            return (
              <Wrapper
                key={tool.name}
                href={tool.href}
                className="group block rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_2px_12px_rgba(212,82,10,0.06),0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/7 ring-1 ring-primary/15">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">{tool.name}</h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">{tool.description}</p>
              </Wrapper>
            )
          })}
        </div>
      </section>
    </>
  )
}
