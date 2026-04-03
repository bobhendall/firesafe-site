import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { LucideIcon } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export interface ToolFeature {
  icon: LucideIcon
  title: string
  description: string
}

export interface ToolFaq {
  question: string
  answer: string
}

interface ToolPageLayoutProps {
  /** Hero icon component */
  icon: LucideIcon
  /** Page h1 title */
  title: string
  /** Hero subtitle paragraph */
  subtitle: string
  /** Hero CTA button text (default: "Start free") */
  ctaText?: string

  /** Overview section heading */
  overviewTitle: string
  /** Overview paragraphs (rendered as <p> elements) */
  overviewParagraphs: string[]

  /** Features grid items (6 recommended) */
  features: ToolFeature[]

  /** Standards section heading */
  standardsTitle: string
  /** Standards intro paragraph (optional) */
  standardsIntro?: string
  /** Standards list items */
  standards: string[]

  /** Optional slot for custom content between standards and FAQ (e.g. PE Tutor exam domains) */
  children?: React.ReactNode

  /** Use cases section (optional â omit for pages without use cases) */
  useCases?: { label: string; text: string }[]

  /** FAQ items (optional â omit for pages without FAQ) */
  faqs?: ToolFaq[]

  /** Bottom CTA heading */
  ctaHeading: string
  /** Bottom CTA subtitle */
  ctaSubtitle: string
  /** Bottom CTA button text (default: "Get started free") */
  ctaButtonText?: string
}

export function ToolPageLayout({
  icon: Icon,
  title,
  subtitle,
  ctaText = 'Start free',
  overviewTitle,
  overviewParagraphs,
  features,
  standardsTitle,
  standardsIntro,
  standards,
  children,
  useCases,
  faqs,
  ctaHeading,
  ctaSubtitle,
  ctaButtonText = 'Get started free',
}: ToolPageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center px-6 pt-20 pb-16 text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href={APP_URL} className="gap-2">
              {ctaText} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">{overviewTitle}</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {overviewParagraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold">Key Capabilities</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const FeatureIcon = feature.icon
            return (
              <div key={feature.title} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <FeatureIcon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Standards */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">{standardsTitle}</h2>
        {standardsIntro && (
          <p className="mb-6 text-muted-foreground">{standardsIntro}</p>
        )}
        <div className="grid gap-3 sm:grid-cols-2">
          {standards.map((standard) => (
            <div key={standard} className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground">
              {standard}
            </div>
          ))}
        </div>
      </section>

      {/* Custom slot for unique page sections */}
      {children}

      {/* Use Cases */}
      {useCases && useCases.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 pb-16">
          <h2 className="mb-4 text-2xl font-semibold">Common Use Cases</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {useCases.map((uc) => (
              <p key={uc.label}>
                <strong className="text-foreground">{uc.label}:</strong> {uc.text}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 pb-20">
          <h2 className="mb-8 text-center text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="flex flex-col items-center border-t border-border px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold">{ctaHeading}</h2>
        <p className="mt-3 max-w-lg text-muted-foreground">{ctaSubtitle}</p>
        <div className="mt-6">
          <Button size="lg" asChild>
            <a href={APP_URL} className="gap-2">
              {ctaButtonText} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
