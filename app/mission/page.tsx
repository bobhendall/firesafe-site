import type { Metadata } from 'next'
import { Flame, ArrowRight, Sparkles, BookOpen, Clock, Users } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'Our Mission â FireSafe.AI',
  description:
    'We gave ourselves fire. We owe ourselves mastery over it. FireSafe.AI exists to close the gap between what we know about fire safety and what we apply.',
  openGraph: {
    title: 'Our Mission â FireSafe.AI',
    description:
      'We gave ourselves fire. We owe ourselves mastery over it.',
  },
}

const milestones = [
  {
    year: '10,000 BC',
    event: 'Controlled fire',
    detail: 'Humanity learns to hold flame â agriculture, warmth, civilization follow.',
  },
  {
    year: '64 AD',
    event: 'Great Fire of Rome',
    detail: 'First building codes emerge from catastrophe. The pattern begins.',
  },
  {
    year: '1911',
    event: 'Triangle Shirtwaist',
    detail: '146 lives lost. Modern fire codes and labor protections are born from grief.',
  },
  {
    year: '1896',
    event: 'NFPA founded',
    detail: 'The profession organizes. Standards become systematic, shared, enforceable.',
  },
  {
    year: '2024',
    event: 'FireSafe.AI',
    detail: 'AI meets fire protection engineering. The tools finally catch up to the knowledge.',
  },
]

export default function MissionPage() {
  return (
    <main className="overflow-hidden">
      {/* ââ Hero â Manifesto Opening ââ */}
      <section className="relative bg-gradient-to-b from-background via-background to-muted/20 px-6 pb-28 pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Flame className="h-3.5 w-3.5" />
            Our Mission
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            We gave ourselves fire.
            <br />
            <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
              We owe ourselves mastery over it.
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Ten thousand years ago, a species that had no right to survive learned to hold flame in its hands. That act â reckless, sacred, world-changing â made everything possible.
          </p>
        </div>
        {/* Decorative gradient orb */}
        <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[100px]" />
      </section>

      {/* ââ The Arc â Narrative ââ */}
      <section className="border-t border-border/50 bg-muted/20 px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <p className="text-lg leading-[1.85] text-muted-foreground sm:text-xl">
            Agriculture. Industry. Cities. Civilization is a fire story.
          </p>
          <p className="mt-6 text-lg font-semibold leading-[1.85] text-foreground sm:text-xl">
            But we never finished the work.
          </p>
          <p className="mt-6 text-lg leading-[1.85] text-muted-foreground sm:text-xl">
            We built towers of glass and steel and filled them with people and called them safe. We wrote codes â thousands of pages, tens of thousands of clauses â that encode the hard-won lessons of every fire that ever stole a life. NFPA. IBC. IFC. The collected grief of centuries, translated into numbers and distances and flow rates.
          </p>
          <p className="mt-6 text-lg leading-[1.85] text-muted-foreground sm:text-xl">
            And then we asked engineers to search those codes by hand.
          </p>
        </div>
      </section>

      {/* ââ Stats Ribbon â Startup-style impact numbers ââ */}
      <section className="border-t border-border/50 bg-foreground px-6 py-20 text-background">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-3">
          {[
            { stat: '3,700+', label: 'Americans die in structure fires each year', accent: 'text-red-400' },
            { stat: '11,000+', label: 'pages of active fire code standards', accent: 'text-amber-400' },
            { stat: '$14B', label: 'in annual US fire property damage', accent: 'text-orange-400' },
          ].map((item) => (
            <div key={item.stat} className="text-center">
              <p className={`text-5xl font-extrabold tracking-tight sm:text-6xl ${item.accent}`}>
                {item.stat}
              </p>
              <p className="mt-3 text-sm leading-snug text-background/60">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ââ The Reckoning â Pull Quote ââ */}
      <section className="border-t border-border/50 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <blockquote className="border-l-4 border-primary pl-6 sm:pl-8">
            <p className="text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              They die not because the knowledge doesn&apos;t exist â it does, in meticulous detail, across dozens of standards. They die because the distance between knowledge and action is still measured in hours, weeks, and human error.
            </p>
          </blockquote>
          <div className="mt-12 space-y-6">
            <p className="text-lg leading-[1.85] text-muted-foreground">
              A plans reviewer misses a cross-reference at 2 AM. A sprinkler calculation uses a table from the wrong edition. A code search returns the right section but not the exception clause three chapters later that reverses its meaning.
            </p>
            <p className="text-lg leading-[1.85] text-muted-foreground">
              These are not failures of intelligence. They are failures of speed. And speed, in fire protection, is measured in lives.
            </p>
          </div>
        </div>
      </section>

      {/* ââ Timeline â History of fire & code (startup "journey" element) ââ */}
      <section className="border-t border-border/50 bg-muted/20 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
            The arc of fire
          </h2>
          <p className="mb-16 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Every code clause was written in the aftermath of tragedy.
          </p>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-px" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 sm:gap-12 ${
                    i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background sm:left-1/2" />
                  {/* Content */}
                  <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-16 sm:text-right' : 'sm:pl-16'}`}>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">{m.year}</p>
                    <p className="mt-1 text-lg font-semibold text-foreground">{m.event}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ââ The Conviction ââ */}
      <section className="border-t border-border/50 px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            The conviction
          </h2>
          <p className="text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
            The next chapter of humanity&apos;s relationship with fire is not written in new codes. The codes are sufficient. It is written in the tools we use to read them.
          </p>
          <div className="mt-10 space-y-6">
            <p className="text-lg leading-[1.85] text-muted-foreground">
              AI does not tire at 2 AM. AI does not skip the exception clause. AI does not forget that NFPA 13 Section 8.15.8.1 was revised in 2022 and that the 2019 edition â the one your jurisdiction still enforces â says something different.
            </p>
            <p className="text-lg leading-[1.85] text-muted-foreground">
              This is not automation. This is <span className="font-semibold text-foreground">amplification</span>. The engineer decides. The AI ensures nothing was missed in the deciding.
            </p>
          </div>
        </div>
      </section>

      {/* ââ The Path Forward â Pillars (startup "values" element) ââ */}
      <section className="border-t border-border/50 bg-foreground px-6 py-24 text-background">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-orange-400">
            The path forward
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Four commitments that guide everything we build.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                icon: Users,
                title: 'Democratize mastery',
                description:
                  'A solo PE in a rural county deserves the same depth of code knowledge as a 200-person consulting firm in Manhattan. We make that real.',
              },
              {
                icon: Clock,
                title: 'Compress the silence',
                description:
                  'The weeks between plan submission and review are weeks a building sits unverified. We turn weeks into minutes without turning rigor into shortcuts.',
              },
              {
                icon: BookOpen,
                title: 'Honor the record',
                description:
                  'Behind every code clause is a fire. Behind every fire is a name. We build tools that remember that, even when the math feels abstract.',
              },
              {
                icon: Sparkles,
                title: 'Complete the Promethean project',
                description:
                  'We stole fire. We built the world with it. Now we finish the work of living safely beside it. That is the mission. That is the only mission.',
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-background/10 bg-background/[0.04] p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <pillar.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/60">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ââ Closing â "Open letter" style (startup manifesto closer) ââ */}
      <section className="border-t border-border/50 bg-gradient-to-b from-muted/20 to-background px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-3xl font-extrabold leading-snug tracking-tight text-foreground sm:text-4xl">
            Every building on Earth is either provably fire-safe or it is a question waiting to be answered.
          </p>
          <p className="mt-8 text-xl font-semibold text-primary">
            FireSafe.AI exists to answer every question.
          </p>
          <div className="mx-auto mt-12 h-px w-16 bg-border" />
          <p className="mt-8 text-sm italic text-muted-foreground">
            â The FireSafe.AI Team
          </p>
        </div>
      </section>

      {/* ââ CTA ââ */}
      <section className="border-t border-border/50 px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Join the mission.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start using FireSafe.AI today â free for individual engineers.
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

