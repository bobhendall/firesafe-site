import type { Metadata } from 'next'
import { Warehouse, ArrowRight, Layers, Package, Ruler, Droplets, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'StoragePro — NFPA 13 Storage Sprinkler Design | FireSafe.AI',
  description:
    'AI-powered storage fire protection analysis with commodity classification, rack sprinkler design, ESFR eligibility, flue space rules, and NFPA 13 compliance for warehouses and distribution centers.',
  openGraph: {
    title: 'StoragePro — NFPA 13 Storage Sprinkler Design | FireSafe.AI',
    description:
      'AI-powered storage fire protection analysis with commodity classification, rack sprinkler design, ESFR eligibility, flue space rules, and NFPA 13 compliance.',
  },
}

const features = [
  { icon: Package, title: 'Commodity Classification', description: 'Classify stored materials into Class I-IV or Group A/B Plastics per NFPA 13 Chapter 5. The platform evaluates product composition, packaging materials, and container types to determine the correct commodity class -- the foundation of every storage sprinkler design.' },
  { icon: Layers, title: 'Storage Arrangement Analysis', description: 'Analyze palletized, solid pile, single-row rack, double-row rack, multi-row rack, shelf, and bin box storage configurations. Each arrangement has different sprinkler design criteria, in-rack requirements, and flue space rules per NFPA 13 Chapters 13-20.' },
  { icon: Droplets, title: 'Ceiling & In-Rack Sprinkler Design', description: 'Calculate ceiling sprinkler density and design area based on commodity class, storage height, and ceiling clearance. Determine in-rack sprinkler levels, K-factors, and spacing for rack storage exceeding height thresholds. Compare CMSA vs. ESFR protection options.' },
  { icon: Ruler, title: 'Flue Space Compliance', description: 'Verify transverse and longitudinal flue space requirements per NFPA 13. The platform checks minimum 3-inch transverse flues and 6-inch longitudinal flues for Group A Plastics and Class IV commodities in double-row and multi-row rack configurations.' },
  { icon: AlertTriangle, title: 'ESFR Eligibility Check', description: 'Evaluate whether Early Suppression Fast Response (ESFR) sprinklers can eliminate in-rack sprinklers for your storage configuration. Checks ceiling height limits, storage height maximums, clearance-to-storage dimensions, and storage arrangement compatibility.' },
  { icon: CheckCircle2, title: 'Water Demand Calculation', description: 'Calculate total water supply demand including ceiling sprinkler flow, in-rack sprinkler flow, and hose stream allowance. Determine supply duration requirements based on commodity class and hazard level per NFPA 13.' },
]

const faqs = [
  { question: 'How do I determine the commodity class for my product?', answer: 'Commodity classification depends on the product material, packaging, and container. Class I is non-combustible product on wood pallets or in single-layer cartons. Class II adds slatted wood crates or multi-layer cartons. Class III includes wood, paper, and natural fiber products. Class IV is Class I-III with appreciable Group A plastics. Group A Plastics include ABS, polystyrene, polyurethane foam, and similar high-heat-release materials. FireSafe.AI guides you through the classification process with specific examples.' },
  { question: 'When are in-rack sprinklers required?', answer: 'In-rack sprinklers are generally required for rack storage exceeding 12 ft in height, depending on commodity class and storage arrangement. ESFR ceiling sprinklers can sometimes eliminate the need for in-rack sprinklers in palletized and single/double-row rack storage up to 35 ft. For multi-row racks, solid shelves, or Group A Plastics at height, in-rack sprinklers are typically required regardless of ceiling sprinkler type.' },
  { question: 'What is the difference between ESFR and CMSA for storage?', answer: 'ESFR sprinklers (K-14.0 to K-25.2) are designed to suppress fires at the point of origin through high-volume, high-momentum water discharge. They can eliminate in-rack sprinklers in many configurations. CMSA sprinklers control fires by pre-wetting surrounding commodities. CMSA systems often require in-rack sprinklers for high storage heights but have lower water demand. FireSafe.AI evaluates both options for your configuration.' },
  { question: 'What flue space requirements apply to my storage?', answer: 'NFPA 13 requires minimum 3-inch transverse flue spaces in all rack storage. Longitudinal flue spaces of 6 inches are required for Group A Plastics and Class IV commodities in double-row and multi-row racks. These flue spaces must be maintained from floor to ceiling to allow sprinkler water penetration into the rack structure. FireSafe.AI checks your configuration against these requirements.' },
]

export default function StorageProPage() {
  return (
    <>
      <section className="flex flex-col items-center px-6 pt-20 pb-16 text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20"><Warehouse className="h-7 w-7 text-primary" /></div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Storage Fire Protection Design</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Design sprinkler protection for warehouses and distribution centers. Commodity classification, rack analysis, ESFR eligibility, in-rack sprinkler layout, and flue space verification -- all per NFPA 13.</p>
        <div className="mt-8"><Button size="lg" asChild><a href={APP_URL} className="gap-2">Start free <ArrowRight className="h-4 w-4" /></a></Button></div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Why Storage Occupancies Need Special Attention</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Storage occupancies represent some of the most challenging fire protection designs. The combination of high storage heights, densely packed combustible materials, and narrow aisles creates conditions where fires can grow rapidly and overwhelm standard sprinkler systems. NFPA 13 dedicates eight chapters (13-20) to storage protection -- more than any other occupancy type.</p>
          <p>StoragePro handles the complexity. Input your commodity class, storage arrangement, heights, and ceiling configuration. The platform determines the correct NFPA 13 chapter, calculates ceiling sprinkler design criteria, identifies in-rack sprinkler requirements, checks flue space compliance, evaluates ESFR eligibility, and calculates total water demand with hose stream allowances.</p>
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
        <h2 className="mb-4 text-2xl font-semibold">Applicable Standards</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {['NFPA 13 Chapters 13-20 -- Storage','NFPA 13 Chapter 5 -- Commodity Classification','IFC Chapter 32 -- High-Piled Storage','FM Global DS 8-9 -- Storage of Class 1-4 Commodities','FM Global DS 8-1 -- Commodity Classification','FM Global DS 8-24 -- Idle Pallet Storage'].map((standard) => (
            <div key={standard} className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground">{standard}</div>
          ))}
        </div>
      </section>

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

      <section className="flex flex-col items-center border-t border-border px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold">Design storage sprinkler systems with confidence</h2>
        <p className="mt-3 max-w-lg text-muted-foreground">From commodity classification to water demand. Every design parameter traced to NFPA 13.</p>
        <div className="mt-6"><Button size="lg" asChild><a href={APP_URL} className="gap-2">Get started free <ArrowRight className="h-4 w-4" /></a></Button></div>
      </section>
    </>
  )
}
