import type { Metadata } from 'next'
import { Flame, ArrowRight, Check } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'Pricing — FireSafe.AI',
  description:
    'Simple, transparent pricing for AI-powered fire protection engineering tools. Free for individuals, powerful plans for teams.',
  openGraph: {
    title: 'Pricing — FireSafe.AI',
    description:
      'Start free. Upgrade when you need more. No surprises.',
  },
}

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  cta: string
  highlighted: boolean
  features: string[]
}

const tiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For individual engineers exploring AI-assisted fire protection workflows.',
    cta: 'Start free',
    highlighted: false,
    features: [
      '3 tools included (Code Search, PE Tutor, HazMat Calculator)',
      '25 queries per day',
      'NFPA, IBC, and IFC code references',
      'Basic export (copy/paste)',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For practicing PEs and consultants who need the full toolkit every day.',
    cta: 'Start 14-day trial',
    highlighted: true,
    features: [
      'All 10 tools unlocked',
      'Unlimited queries',
      'FDS/CFD modeling & mesh validation',
      'NFPA 13 sprinkler design assistant',
      'NFPA 92 smoke control analysis',
      'Egress modeling with ASET/RSET',
      'PDF report export',
      'Calculation audit trails',
      'Priority support',
    ],
  },
  {
    name: 'Team',
    price: '$39',
    period: '/user/month',
    description: 'For fire protection firms and AHJ offices collaborating on projects.',
    cta: 'Contact sales',
    highlighted: false,
    features: [
      'Everything in Pro',
      '5+ seats (volume discounts available)',
      'Shared project workspaces',
      'Admin dashboard & usage analytics',
      'Custom code library uploads',
      'SSO & team management',
      'Dedicated account manager',
      'SLA & uptime guarantee',
    ],
  },
]

export default function PricingPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Flame className="h-3.5 w-3.5" />
            Pricing
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-[1.12]">
            Start free.{' '}
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Scale with confidence.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            No credit card required. No surprise charges. Upgrade when your workflow demands it.
          </p>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                tier.highlighted
                  ? 'border-primary bg-primary/[0.02] shadow-[0_4px_24px_rgba(212,82,10,0.1)]'
                  : 'border-border bg-card'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-white">
                  Most popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-foreground">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
              </div>

              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mb-8 inline-flex items-center justify-center gap-2 rounded-[9px] border px-6 py-2.5 text-[15px] font-semibold transition-all hover:-translate-y-0.5 ${
                  tier.highlighted
                    ? 'border-black/12 bg-primary text-white shadow-[0_2px_8px_rgba(212,82,10,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-[#c04a09]'
                    : 'border-border bg-card text-foreground shadow-sm hover:border-muted-foreground/30 hover:bg-muted'
                }`}
              >
                {tier.cta} {tier.highlighted && <ArrowRight className="h-4 w-4" />}
              </a>

              <ul className="flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className={`h-4 w-4 shrink-0 mt-0.5 ${tier.highlighted ? 'text-primary' : 'text-muted-foreground/50'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-border/50 bg-muted/20 px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: 'Can I use FireSafe.AI for real projects?',
                a: 'Yes. FireSafe.AI is designed for professional use. All code references cite specific sections, and calculation outputs include audit trails. As with any tool, final engineering judgment rests with the licensed professional.',
              },
              {
                q: 'What happens when I hit the free plan limits?',
                a: 'You\'ll see a clear message letting you know you\'ve reached your daily query limit. Your work is never lost. You can upgrade to Pro instantly, or wait until the next day for your queries to reset.',
              },
              {
                q: 'Do you offer discounts for government AHJs?',
                a: 'Yes. We offer special pricing for government agencies and AHJ offices. Contact our sales team for details on public-sector plans.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Absolutely. No contracts, no cancellation fees. Cancel from your account settings and you\'ll retain access through the end of your billing period.',
              },
              {
                q: 'Is my project data secure?',
                a: 'Yes. All data is encrypted in transit and at rest. We do not use your project data to train AI models. Enterprise customers can request SOC 2 documentation.',
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="text-base font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="border-t border-border/50 px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Ready to streamline your fire protection workflow?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start with the free plan today. No credit card required.
          </p>
          <div className="mt-8">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[9px] border border-black/12 bg-primary px-7 py-3 text-[15px] font-semibold text-white shadow-[0_2px_8px_rgba(212,82,10,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:-translate-y-0.5 hover:bg-[#c04a09]"
            >
              Get started free <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
