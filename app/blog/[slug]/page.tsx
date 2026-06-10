import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { posts, getPost } from '@/lib/blog'

const SITE_URL = 'https://firesafe.ai'

const dateFormat = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
})

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — FireSafe.AI`,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'FireSafe.AI',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-mark.svg` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  }

  const morePosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="mx-auto max-w-2xl px-6 pb-16 pt-28">
        {/* Header */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All posts
        </Link>
        <div className="mt-6 flex items-center gap-2 text-[11px]">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary ring-1 ring-primary/15">
            {post.category}
          </span>
          <span className="text-muted-foreground">
            {dateFormat.format(new Date(post.date))}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3 w-3" /> {post.readingMinutes} min read
          </span>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl leading-[1.15]">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {post.description}
        </p>
        <p className="mt-6 border-b border-border pb-6 text-sm text-muted-foreground">
          By <span className="font-medium text-foreground">{post.author}</span>
        </p>

        {/* Body */}
        <div className="mt-8 space-y-5">
          {post.body.map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2 key={i} className="pt-3 text-xl font-bold tracking-tight text-foreground">
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'ul') {
              return (
                <ul key={i} className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted-foreground marker:text-primary">
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={i} className="text-[15px] leading-relaxed text-muted-foreground">
                {block.text}
              </p>
            )
          })}
        </div>

        {/* Related tool callout */}
        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Related:</span>{' '}
            FireSafe.AI&apos;s{' '}
            <Link href={post.relatedTool.href} className="font-semibold text-primary hover:underline">
              {post.relatedTool.name}
            </Link>{' '}
            tool covers this workflow — grounded in the standards, with
            citations you can verify.
          </p>
        </div>
      </article>

      {/* More posts */}
      <section className="mx-auto max-w-2xl border-t border-border px-6 py-12">
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          More posts
        </h2>
        <div className="space-y-4">
          {morePosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-primary/25"
            >
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                {p.title}
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
