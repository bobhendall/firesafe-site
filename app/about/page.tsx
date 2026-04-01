import type { Metadata } from 'next'
import { Flame, ArrowRight, Shield, BookOpen, Users, Building2 } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'About \u2014 FireSafe.AI',
  description:
    'FireSafe.AI builds AI-powered tools for fire protection engineers, AHJs, and field technicians. Ten specialized tools grounded in NFPA, IBC, and IFC standards.',
  openGraph: {
    title: 'About \u2014 FireSafe.AI',
    description:
      'AI-powered fire protection engineering tools built for the professionals who keep buildings safe.',
  },
}

export default function AboutPage() {
  return (
    <main>
      {/* \u2500\u2500 Hero \u2500\u2500 */}
      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Flame className="h-3.5 w-3.5" />
            About FireSafe.AI
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-[1.12]">
            AI tools built by fire protection engineers,{' '}
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              for fire protection engineers.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We&apos;re building the platform we wished existed when we were reviewing plans,
            searching codes, and running calculations at 2 AM before a deadline.
          </p>
        </div>
      </section>

      {/* \u2500\u2500 What We Do \u2500\u2500 */}
      <section className="border-t border-border/50 bg-muted/20 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What we build
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            FireSafe.AI is a suite of ten AI-powered tools purpose-built for fire protection
            engineering workflows. Every tool is grounded in real standards \u2014 NFPA, IBC, IFC,
            UFC \u2014 not general-purpose AI guessing at code language.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              {
                icon: BookOpen,
                title: 'Standards-grounded AI',
                description:
                  'Our models are trained on and cite specific code sections. When FireSafe.AI gives you an answer, it shows you exactly where in NFPA 13, IBC Chapter 9, or IFC Section 5 that answer comes from.',
              },
              {
                icon: Shield,
                title: 'Built for compliance, not shortcuts',
                description:
                  'We don\'t automate away engineering judgment. We eliminate the tedious lookup, cross-reference, and calculation work so engineers can focus on the decisions that matter.',
              },
              {
                icon: Users,
                title: 'For every role in fire safety',
                description:
                  'AHJs reviewing plans. PEs designing systems. Field technicians verifying installations. Students preparing for the PE exam. FireSafe.AI serves the entire ecosystem.',
              },
              {
                icon: Building2,
                title: 'Ten specialized tools',
                description:
                  'FDS/CFD modeling, smoke control analysis, egress calculations, sprinkler design, fire detection layout, hazmat compliance, code search, storage protection, and PE exam prep \u2014 all in one platform.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 Our Approach \u2500\u2500 */}
      <section className="border-t border-border/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How we think about AI in fire safety
          </h2>
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Fire protection engineering is a field where accuracy isn&apos;t optional \u2014 it&apos;s
              life-or-death. We take that seriously. Every feature we ship is designed with one
              question in mind: <span className="font-medium text-foreground">would a licensed PE trust this in their workflow?</span>
            </p>
            <p>
              That means citing sources. That means showing our work. That means building guardrails
              that flag uncertainty instead of hallucinating confidence. General-purpose chatbots
              can&apos;t do this. Purpose-built engineering tools can.
            </p>
            <p>
              We believe the future of fire protection engineering is hybrid: human expertise
              amplified by AI precision. The engineer makes the decisions. The AI does the
              heavy lifting to get them there faster and with fewer errors.
            </p>
          </div>
        </div>
      </section>

      {/* \u2500\u2500 Trust Signals \u2500\u2500 */}
      <section className="border-t border-border/50 bg-muted/20 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why trust an AI for code compliance?
          </h2>
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Fair question. General-purpose AI hallucinates code provisions, invents clause numbers,
              and mixes up editions. We built FireSafe.AI specifically to avoid that.
            </p>
            <p>
              Every tool is constrained to published standards. Outputs include the standard name,
              edition year, and clause number so you or an AHJ can verify in seconds. When the model
              isn&apos;t confident, it says so instead of guessing.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5 text-center">
              <p className="text-3xl font-extrabold text-primary">11,000+</p>
              <p className="mt-1 text-sm text-muted-foreground">Pages of standards indexed</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 text-center">
              <p className="text-3xl font-extrabold text-primary">100%</p>
              <p className="mt-1 text-sm text-muted-foreground">Outputs cite source clauses</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 text-center">
              <p className="text-3xl font-extrabold text-primary">6</p>
              <p className="mt-1 text-sm text-muted-foreground">Major code families covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* \u2500\u2500 CTA \u2500\u2500 */}
      <section className="border-t border-border/50 px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ready to work smarter?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Free for individual engineers. No credit card required.
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
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-[9px] border border-border bg-card px-7 py-3 text-[15px] font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-muted-foreground/30 hover:bg-muted"
            >
              View pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
