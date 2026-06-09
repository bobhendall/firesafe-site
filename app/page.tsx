import { ArrowRight, MessageSquareText, Calculator, FileCheck2 } from 'lucide-react'
import { FlameHero } from '@/components/flame-hero'
import { ToolCard } from '@/components/tool-card'
import { tools } from '@/lib/tools'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

const steps = [
  {
    icon: MessageSquareText,
    title: 'Describe the problem',
    description:
      'A fire scenario, a storage layout, an egress question — in plain English. No input decks, no spreadsheet templates.',
  },
  {
    icon: Calculator,
    title: 'Get traceable calculations',
    description:
      'Occupant loads, hydraulic demands, mesh sizing, MAQs. Every number comes with the assumptions and the method behind it.',
  },
  {
    icon: FileCheck2,
    title: 'Verify against the clause',
    description:
      'Outputs cite the standard, edition, and section — so you, your reviewer, and the AHJ can check the source in seconds.',
  },
]

const standards = [
  'NFPA 13',
  'NFPA 72',
  'NFPA 92',
  'NFPA 101',
  'IBC',
  'IFC',
  'UFC 3-600-01',
  'ASTM E1355',
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
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border/50 bg-muted/20 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-xl font-bold tracking-tight text-foreground">How it works</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">From question to verifiable answer in three steps.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Step {i + 1}</span>
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards strip */}
      <section className="border-t border-border/50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Grounded in the standards you work with
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {standards.map((standard) => (
              <span
                key={standard}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground"
              >
                {standard}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border/50 bg-muted/20 px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Stop searching codes by hand.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Free for individual engineers. No credit card required.
          </p>
          <div className="mt-8">
            <a
              href={APP_URL}
              className="inline-flex items-center gap-2 rounded-[9px] border border-black/12 bg-primary px-7 py-3 text-[15px] font-semibold text-white shadow-[0_2px_8px_rgba(212,82,10,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:-translate-y-0.5 hover:bg-[#c04a09]"
            >
              Get started free <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
