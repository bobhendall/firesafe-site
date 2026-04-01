import type { Metadata } from 'next'
import { Flame, Shield, Zap, Globe, Heart, ArrowRight } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'Our Mission — FireSafe.AI',
  description:
    'FireSafe.AI exists to eliminate preventable fire deaths through AI-powered engineering tools. Our mission is to make every building on Earth provably fire-safe.',
  openGraph: {
    title: 'Our Mission — FireSafe.AI',
    description:
      'Eliminating preventable fire deaths through AI-powered fire protection engineering.',
  },
}

export default function MissionPage() {
  return (
    <main className="overflow-hidden">
      {/* ── Opening Statement ── */}
      <section className="relative bg-gradient-to-b from-background to-muted/30 px-6 pb-24 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Flame className="h-3.5 w-3.5" />
            Our Mission
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.08]">
            Zero preventable fire deaths<br />
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">in our lifetime.</span>
          </h1>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="border-t border-border/50 bg-muted/20 px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Every year, thousands of people die in structure fires that should have been
            preventable. Not because we lack the knowledge — but because the tools we
            use to apply that knowledge haven&apos;t kept up.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Fire protection engineers still spend <span className="font-semibold text-foreground">40% of their time</span> on
            manual code lookups. Plans reviewers catch errors weeks after submission.
            Critical compliance gaps hide in plain sight, buried in thousand-page standards.
          </p>
        </div>
      </section>

      {/* ── Stat Callouts ── */}
      <section className="border-t border-border/50 px-6 py-20">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          {[
            { stat: '3,700+', label: 'Americans die in structure fires every year', color: 'text-red-600' },
            { stat: '40%', label: 'of an engineer\'s time lost to manual lookups', color: 'text-primary' },
            { stat: '$14B', label: 'in annual US property damage from fires', color: 'text-orange-600' },
          ].map((item) => (
            <div key={item.stat} className="text-center">
              <p className={`text-5xl font-extrabold tracking-tight ${item.color} sm:text-6xl`}>{item.stat}</p>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Belief ── */}
      <section className="border-t border-border/50 bg-foreground px-6 py-24 text-background">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            We believe AI can change this.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-background/70 sm:text-xl">
            Not by replacing engineers — by making every engineer
            ten times more effective. Not by cutting corners — by ensuring no
            corner is ever missed.
          </p>
        </div>
      </section>

      {/* ── How We Get There ── */}
      <section className="border-t border-border/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The path forward
          </h2>
          <div className="grid gap-12 sm:grid-cols-2">
            {[
              {
                icon: Shield,
                title: 'Democratize fire safety expertise',
                description:
                  'Every AHJ, every PE, every technician — regardless of firm size or budget — deserves access to the same depth of code knowledge that top consultancies have.',
              },
              {
                icon: Zap,
                title: 'Compress weeks into minutes',
                description:
                  'Code searches that took hours. Plan reviews that took weeks. Compliance checks that took months. AI compresses the timeline without compressing the rigor.',
              },
              {
                icon: Globe,
                title: 'Build a global standard of care',
                description:
                  'NFPA, IBC, IFC — and eventually every fire code on the planet. One platform where the world\'s fire protection knowledge is searchable, cross-referenced, and actionable.',
              },
              {
                icon: Heart,
                title: 'Put humans at the center',
                description:
                  'Behind every code section is a lesson learned from tragedy. Behind every plan review is a family\'s safety. We build tools that honor that gravity.',
              },
            ].map((pillar) => (
              <div key={pillar.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <pillar.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Future ── */}
      <section className="border-t border-border/50 bg-gradient-to-b from-muted/30 to-background px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
            We imagine a world where every building is provably fire-safe.
            Where compliance isn&apos;t a checkbox — it&apos;s a guarantee.
            Where no family loses a home to a code gap that a machine could have caught.
          </p>
          <p className="mt-8 text-lg text-muted-foreground">
            That world is closer than you think.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border/50 px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Join us.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start using FireSafe.AI today — free for individual engineers.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
