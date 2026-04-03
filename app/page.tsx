import Link from 'next/link'
import { FlameHero } from '@/components/flame-hero'
import { tools } from '@/lib/tools'

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
          {tools.map((tool) => {
            const Icon = tool.icon
            const isExternal = tool.href.startsWith('http')
            const Wrapper = isExternal ? 'a' : Link
            return (
              <Wrapper
                key={tool.name}
                href={tool.href}
                className="group block rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_2px_12px_rgba(212,82,10,0.06),0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/7 ring-1 ring-primary/15">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">{tool.name}</h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">{tool.description}</p>
              </Wrapper>
            )
          })}
        </div>
      </section>
    </>
  )
}
