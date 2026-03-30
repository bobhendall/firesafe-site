import type { Metadata } from 'next'
import { GraduationCap, ArrowRight, BookOpen, Brain, ClipboardList, Target, Flame, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'PE Fire Protection Exam Prep & NICET Study Tool | FireSafe.AI',
  description:
    'AI-powered PE Fire Protection and NICET exam preparation with practice problems, concept explanations, quizzes, and spaced repetition. Covers fire dynamics, NFPA 13/72, IBC egress, and all PE exam domains.',
  openGraph: {
    title: 'PE Fire Protection Exam Prep & NICET Study Tool | FireSafe.AI',
    description:
      'AI-powered PE and NICET exam prep with practice problems, concept explanations, quizzes, and spaced repetition across all fire protection engineering domains.',
  },
}

const features = [
  { icon: ClipboardList, title: 'Practice Problems', description: 'Generate PE-level practice problems across all exam domains. Each problem includes given data, code references, step-by-step solutions, key formulas, and common mistakes. Filter by domain (fire dynamics, suppression, egress, etc.) and difficulty level.' },
  { icon: BookOpen, title: 'Concept Explanations', description: 'Get detailed explanations of any fire protection engineering topic. From Hazen-Williams calculations to ASET/RSET analysis, each explanation includes key concepts, relevant formulas, code references, worked examples, and exam tips.' },
  { icon: Brain, title: 'Multiple-Choice Quizzes', description: 'Test your knowledge with AI-generated multiple-choice quizzes that mirror PE exam format. 5-question quizzes with explanations for each answer. Track your performance and focus on weak areas.' },
  { icon: Target, title: 'Exam Domain Coverage', description: 'Comprehensive coverage of all PE Fire Protection exam domains with weighted study recommendations: Fire Dynamics (15%), Fire Protection Systems (30%), Passive Fire Protection (15%), Egress (15%), Codes & Standards (15%), and HazMat & Risk (10%).' },
  { icon: Flame, title: 'Code Reference Library', description: 'Quick access to fire code references across NFPA 13, 14, 20, 25, 72, 80, 92, 101, IBC, and IFC. Each reference includes section numbers, requirements, and context for when and how to apply them in engineering practice.' },
  { icon: CheckCircle2, title: 'AI Tutor', description: 'Ask any fire protection engineering question and get expert-level explanations with code citations. The AI tutor understands the full breadth of FPE topics and provides responses tailored to exam preparation.' },
]

const examDomains = [
  { domain: 'Fire Protection Systems', weight: '30%', topics: 'NFPA 13, 14, 20, 25, 72, 92; hydraulic calculations; special suppression' },
  { domain: 'Fire Dynamics', weight: '15%', topics: 'HRR, t-squared growth, plume models, ceiling jets, flashover, enclosure fires' },
  { domain: 'Passive Fire Protection', weight: '15%', topics: 'Fire resistance ratings, barriers, doors, dampers, structural protection' },
  { domain: 'Means of Egress', weight: '15%', topics: 'IBC Ch. 10, NFPA 101, occupant loads, exit capacity, ASET/RSET' },
  { domain: 'Codes & Standards', weight: '15%', topics: 'IBC construction types, occupancy classification, IFC Ch. 50, AHJ' },
  { domain: 'Hazmat & Risk', weight: '10%', topics: 'Group H occupancy, MAQ, NFPA 30/55, fire risk assessment' },
]

export default function PETutorPage() {
  return (
    <>
      <section className="flex flex-col items-center px-6 pt-20 pb-16 text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20"><GraduationCap className="h-7 w-7 text-primary" /></div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">PE Fire Protection Exam Prep</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">AI-powered study tool for PE Fire Protection and NICET certification exams. Practice problems, concept explanations, quizzes, and an AI tutor that knows fire protection engineering inside and out.</p>
        <div className="mt-8"><Button size="lg" asChild><a href={APP_URL} className="gap-2">Start studying <ArrowRight className="h-4 w-4" /></a></Button></div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Study Smarter, Not Harder</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>The PE Fire Protection exam covers a wide range of topics -- from fire dynamics and sprinkler hydraulics to egress analysis and code interpretation. Traditional study methods rely on reading standards cover-to-cover and working through limited problem sets. PE Tutor generates unlimited practice problems tailored to your weak areas.</p>
          <p>Each practice problem is generated at PE exam difficulty with realistic given data, code references, and step-by-step solutions. The AI tutor can explain any concept in depth, generate quizzes for quick knowledge checks, and provide exam strategies based on the weighted domain breakdown.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold">Key Capabilities</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => { const Icon = feature.icon; return (
            <div key={feature.title} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20"><Icon className="h-5 w-5 text-primary" /></div>
              <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          )})}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-semibold">PE Exam Domain Breakdown</h2>
        <div className="space-y-3">
          {examDomains.map((d) => (
            <div key={d.domain} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-foreground">{d.domain}</span>
                <span className="text-sm font-mono text-primary">{d.weight}</span>
              </div>
              <p className="text-sm text-muted-foreground">{d.topics}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">References Covered</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {['NFPA 13 -- Sprinkler Systems','NFPA 72 -- Fire Alarm and Signaling','NFPA 101 -- Life Safety Code','NFPA 92 -- Smoke Control Systems','NFPA 14, 20, 25 -- Standpipe, Pumps, ITM','IBC -- International Building Code','IFC -- International Fire Code','SFPE Handbook of Fire Protection Engineering'].map((ref) => (
            <div key={ref} className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground">{ref}</div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center border-t border-border px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold">Pass the PE Fire Protection exam</h2>
        <p className="mt-3 max-w-lg text-muted-foreground">Unlimited practice problems, expert explanations, and an AI tutor that knows every code section.</p>
        <div className="mt-6"><Button size="lg" asChild><a href={APP_URL} className="gap-2">Start studying free <ArrowRight className="h-4 w-4" /></a></Button></div>
      </section>
    </>
  )
}
