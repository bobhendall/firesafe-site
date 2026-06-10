import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { AsetRsetCalculator } from '@/components/calculators/aset-rset-calculator'

export const metadata: Metadata = {
  title: 'Free ASET/RSET Calculator — FireSafe.AI',
  description:
    'Free ASET/RSET egress margin calculator: sum detection, notification, pre-movement, and movement time, then compare against available safe egress time with margin and ratio.',
  openGraph: {
    title: 'Free ASET/RSET Calculator — FireSafe.AI',
    description:
      'Sum the RSET chain and compare against ASET — free, no login.',
  },
}

export default function AsetRsetPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-28">
      <Link
        href="/calculators"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> All calculators
      </Link>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        ASET/RSET Margin Calculator
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Required Safe Egress Time is the sum of detection, notification,
        pre-movement, and movement time. A design works when Available Safe
        Egress Time exceeds it — with explicit margin.
      </p>

      <div className="mt-8">
        <AsetRsetCalculator />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <Link href="/blog/understanding-aset-rset" className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline">
          Read: Understanding ASET/RSET <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href="/tools/egress" className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline">
          Full egress analysis tool <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </main>
  )
}
