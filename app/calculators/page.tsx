import type { Metadata } from 'next'
import Link from 'next/link'
import { Flame, Timer, CloudFog, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free Fire Protection Calculators — FireSafe.AI',
  description:
    'Free, no-login fire protection engineering calculators: ASET/RSET egress margin and NFPA 92 smoke layer height. Built for quick checks and study — with validity limits shown.',
  openGraph: {
    title: 'Free Fire Protection Calculators — FireSafe.AI',
    description:
      'ASET/RSET margin and NFPA 92 smoke layer height calculators. Free, no login.',
  },
}

const calculators = [
  {
    icon: Timer,
    name: 'ASET/RSET Margin Calculator',
    href: '/calculators/aset-rset',
    description:
      'Sum the RSET chain — detection, notification, pre-movement, movement — and compare against your ASET with margin and ratio.',
  },
  {
    icon: CloudFog,
    name: 'Smoke Layer Height Calculator',
    href: '/calculators/smoke-layer',
    description:
      'NFPA 92 steady-fire smoke filling: layer height over time and time-to-critical-height, with correlation validity limits flagged.',
  },
]

export default function CalculatorsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="px-6 pb-14 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Flame className="h-3.5 w-3.5" />
            Free calculators
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-[1.12]">
            Quick checks,{' '}
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              no login.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Free reference calculators for common fire protection
            screening questions. The full toolkit goes much deeper.
          </p>
        </div>
      </section>

      {/* ── Calculators ── */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2">
          {calculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="group block rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_2px_12px_rgba(212,82,10,0.06),0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                <calc.icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                {calc.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {calc.description}
              </p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Open calculator <ArrowRight className="h-3.5 w-3.5" />
              </p>
            </Link>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          These calculators are for reference and study. They implement
          published correlations with their limits shown, but they are not a
          substitute for engineering analysis — the engineer of record is
          responsible for verifying all results against applicable codes and
          standards.
        </p>
      </section>
    </main>
  )
}
