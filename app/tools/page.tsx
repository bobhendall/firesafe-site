import type { Metadata } from 'next'
import { Flame, ArrowRight } from 'lucide-react'
import { ToolCard } from '@/components/tool-card'
import { tools } from '@/lib/tools'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'All Tools — FireSafe.AI',
  description:
    'The full FireSafe.AI toolkit: FDS/CFD modeling, smoke control, egress analysis, code search, fire detection, suppression design, hazmat compliance, storage protection, and PE exam prep.',
  openGraph: {
    images: [{ url: '/og/tools.png', width: 1200, height: 630 }],
    title: 'All Tools — FireSafe.AI',
    description:
      'Ten AI-powered fire protection engineering tools grounded in NFPA, IBC, and IFC standards.',
  },
}

export default function ToolsIndexPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="px-6 pb-14 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Flame className="h-3.5 w-3.5" />
            The toolkit
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-[1.12]">
            One platform.{' '}
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Ten specialized tools.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Every tool references the actual standard. Every output is
            traceable to a clause, an edition, a page.
          </p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border/50 bg-muted/20 px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Every tool, one account.
          </h2>
          <p className="mt-3 text-muted-foreground">
            The free plan includes three tools. Pro unlocks all ten.
          </p>
          <div className="mt-8">
            <a
              href={APP_URL}
              className="inline-flex items-center gap-2 rounded-[9px] border border-black/12 bg-primary px-7 py-3 text-[15px] font-semibold text-primary-foreground shadow-[0_2px_8px_rgba(212,82,10,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:-translate-y-0.5 hover:bg-[#c04a09]"
            >
              Get started free <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
