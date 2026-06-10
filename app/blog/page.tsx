import type { Metadata } from 'next'
import Link from 'next/link'
import { Flame, Clock } from 'lucide-react'
import { posts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — FireSafe.AI',
  description:
    'Field notes on fire protection engineering: code compliance, suppression and detection systems, PE exam prep, and where AI fits into the profession.',
  openGraph: {
    title: 'Blog — FireSafe.AI',
    description:
      'Field notes on fire protection engineering from people who stamp plans.',
    images: [{ url: '/og/blog/index.png', width: 1200, height: 630 }],
  },
}

const dateFormat = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
})

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <main>
      {/* ── Hero ── */}
      <section className="px-6 pb-14 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Flame className="h-3.5 w-3.5" />
            Blog
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-[1.12]">
            Field notes from{' '}
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              the profession.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Code compliance, system design, exam prep, and where AI actually
            fits — written by engineers, not marketers.
          </p>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_2px_12px_rgba(212,82,10,0.06),0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-3 flex items-center gap-2 text-[11px]">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary ring-1 ring-primary/15">
                  {post.category}
                </span>
                <span className="text-muted-foreground">
                  {dateFormat.format(new Date(post.date))}
                </span>
              </div>
              <h2 className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.description}
              </p>
              <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> {post.readingMinutes} min read
                &middot; {post.author}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
