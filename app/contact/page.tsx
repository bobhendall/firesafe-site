import type { Metadata } from 'next'
import { Flame, Mail, Building2, LifeBuoy, ArrowRight } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'Contact — FireSafe.AI',
  description:
    'Get in touch with the FireSafe.AI team — sales inquiries for teams and AHJ offices, product support, and partnership questions.',
  openGraph: {
    title: 'Contact — FireSafe.AI',
    description:
      'Sales, support, and partnership inquiries for FireSafe.AI.',
  },
}

const channels = [
  {
    icon: Building2,
    title: 'Sales',
    description:
      'Team plans, AHJ and public-sector pricing, volume discounts, and procurement questions.',
    email: 'sales@firesafe.ai',
  },
  {
    icon: LifeBuoy,
    title: 'Support',
    description:
      'Help with your account, billing, or any of the tools. Pro subscribers receive priority responses.',
    email: 'support@firesafe.ai',
  },
  {
    icon: Mail,
    title: 'Everything else',
    description:
      'Partnerships, press, standards bodies, or anything that does not fit the other two boxes.',
    email: 'hello@firesafe.ai',
  },
]

export default function ContactPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Flame className="h-3.5 w-3.5" />
            Contact
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-[1.12]">
            Talk to a human.{' '}
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              We respond fast.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Whether you&apos;re evaluating FireSafe.AI for your firm, need help
            with a tool, or want public-sector pricing — pick a channel below.
          </p>
        </div>
      </section>

      {/* ── Channels ── */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                <channel.icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                {channel.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {channel.description}
              </p>
              <a
                href={`mailto:${channel.email}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-[#c04a09]"
              >
                {channel.email} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="border-t border-border/50 bg-muted/20 px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Rather just try it?
          </h2>
          <p className="mt-3 text-muted-foreground">
            The free plan needs no sales call and no credit card.
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
