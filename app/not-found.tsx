import Link from 'next/link'
import { Flame, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
        <Flame className="h-7 w-7 text-primary" />
      </div>
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
        This page didn&apos;t survive the burn.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Check
        the address, or head back to safer ground.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-[9px] border border-black/12 bg-primary px-7 py-3 text-[15px] font-semibold text-primary-foreground shadow-[0_2px_8px_rgba(212,82,10,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:-translate-y-0.5 hover:bg-[#c04a09]"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <Link
          href="/pricing"
          className="inline-flex items-center rounded-[9px] border border-border bg-card px-7 py-3 text-[15px] font-medium text-foreground shadow-sm transition-all hover:border-muted-foreground/30 hover:bg-muted"
        >
          View pricing
        </Link>
      </div>
    </main>
  )
}
