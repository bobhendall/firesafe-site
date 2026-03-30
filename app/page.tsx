import Link from 'next/link'
import Image from 'next/image'
import { Flame, GitCompare, Warehouse, FlaskConical, GraduationCap, Wind, DoorOpen, Bell, Droplets, BookOpen, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

const tools = [
  {
    icon: Flame,
    name: 'FDS/CFD Modeling',
    href: '/tools/fds-cfd',
    description: 'Natural language to FDS input files, 3D visualization, mesh validation, and simulation management.',
  },
  {
    icon: Wind,
    name: 'Smoke Control',
    href: '/tools/smoke-control',
    description: 'Atrium smoke filling calculations, mechanical exhaust design, and stairwell pressurization per NFPA 92.',
  },
  {
    icon: DoorOpen,
    name: 'Egress Analysis',
    href: '/tools/egress',
    description: 'ASET/RSET framework, occupant load calculations, travel distance verification, and evacuation modeling.',
  },
  {
    icon: GitCompare,
    name: 'CodeCompare',
    href: APP_URL,
    description: 'Instantly diff fire and building codes across editions and jurisdictions. Built for AHJs and PEs.',
  },
  {
    icon: BookOpen,
    name: 'Code Consulting',
    href: '/tools/code-consulting',
    description: 'Natural language code search across IBC, IFC, and NFPA standards with cross-referencing.',
  },
  {
    icon: Bell,
    name: 'Fire Detection',
    href: '/tools/fire-detection',
    description: 'Detector spacing and notification appliance placement per NFPA 72 with compliance checking.',
  },
  {
    icon: Droplets,
    name: 'Suppression Systems',
    href: '/tools/suppression',
    description: 'Sprinkler layout optimization, hydraulic calculations, and hazard classification per NFPA 13.',
  },
  {
    icon: FlaskConical,
    name: 'HazMat & Risk',
    href: '/tools/hazmat-risk',
    description: 'MAQ calculations, control area analysis, hazard classification, and quantitative fire risk assessment.',
  },
  {
    icon: Warehouse,
    name: 'StoragePro',
    href: '/tools/storagepro',
    description: 'NFPA 13 & IFC compliant storage layout analysis. Commodity classification to sprinkler design.',
  },
  {
    icon: GraduationCap,
    name: 'PE Tutor',
    href: '/tools/pe-tutor',
    description: 'NICET and PE exam prep with AI-driven practice problems, code explanations, and flashcards.',
  },
]

export default function MarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-18 pb-20 text-center">
        <div className="mb-6">
          <Image src="/logo.jpg" alt="FireSafe.AI" width={88} height={88} className="rounded-2xl mx-auto shadow-lg shadow-primary/20" />
        </div>
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Flame className="h-3 w-3" />
          Redefining life safety with artificial intelligence
        </div>
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          AI tools for <span className="text-primary">fire protection</span> engineering
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          FireSafe.AI gives AHJs, PEs, and field technicians AI-powered tools for code comparison, storage analysis, hazmat compliance, and more. Built on NFPA, IBC, and IFC — not guesswork.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild><a href={APP_URL} className="gap-2">Start free <ArrowRight className="h-4 w-4" /></a></Button>
          <Button variant="outline" size="lg" asChild><a href={APP_URL}>Sign in</a></Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Free plan — no credit card required</p>
      </section>

      {/* Tools grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-10 text-center text-2xl font-semibold text-foreground">Ten tools. One platform.</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon
            const isExternal = tool.href.startsWith('http')
            const Wrapper = isExternal ? 'a' : Link
            const linkProps = isExternal ? { href: tool.href } : { href: tool.href }
            return (
              <Wrapper key={tool.name} {...linkProps} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-card/80 group">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1.5 font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
              </Wrapper>
            )
          })}
        </div>
      </section>

    </>
  )
}
