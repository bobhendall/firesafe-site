import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SmokeLayerCalculator } from '@/components/calculators/smoke-layer-calculator'

export const metadata: Metadata = {
  title: 'Free Smoke Layer Height Calculator (NFPA 92) — FireSafe.AI',
  description:
    'Free NFPA 92 smoke layer height calculator: steady-fire smoke filling for axisymmetric plumes — layer height over time and time to critical height, with validity limits flagged.',
  openGraph: {
    title: 'Free Smoke Layer Height Calculator — FireSafe.AI',
    description:
      'NFPA 92 steady-fire smoke filling correlation — free, no login.',
  },
}

export default function SmokeLayerPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-28">
      <Link
        href="/calculators"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> All calculators
      </Link>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Smoke Layer Height Calculator
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        NFPA 92 steady-fire smoke filling for an axisymmetric plume in a
        uniform cross-section with no exhaust: where the layer sits at time t,
        and how long until it reaches a critical height.
      </p>

      <div className="mt-8">
        <SmokeLayerCalculator />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <Link href="/blog/smoke-control-algebraic-vs-cfd" className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline">
          Read: Algebraic vs. CFD methods <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href="/tools/smoke-control" className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline">
          Full smoke control tool <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </main>
  )
}
