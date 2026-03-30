import type { Metadata } from 'next'
import { Droplets, ArrowRight, Gauge, Layers, Target, Wrench, Database, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'Sprinkler Design & Suppression System Software | FireSafe.AI',
  description:
    'AI-powered sprinkler system design with hydraulic calculations, K-factor selection, hazard classification, and NFPA 13 compliance -- from Light Hazard to ESFR.',
  openGraph: {
    title: 'Sprinkler Design & Suppression System Software | FireSafe.AI',
    description:
      'AI-powered sprinkler system design with hydraulic calculations, K-factor selection, hazard classification, and NFPA 13 compliance -- from Light Hazard to ESFR.',
  },
}

const features = [
  { icon: Target, title: 'Sprinkler Layout Optimization', description: 'Generate sprinkler layouts based on hazard classification, coverage area per sprinkler, and maximum spacing requirements per NFPA 13. Account for obstructions, concealed spaces, and special ceiling configurations including sloped, curved, and sawtooth ceilings.' },
  { icon: Gauge, title: 'Hydraulic Calculations', description: 'Perform density/area hydraulic calculations per NFPA 13 Chapter 23. Calculate friction loss using Hazen-Williams, determine system demand curves, and verify that the water supply provides adequate pressure and flow at the hydraulically most remote area. Export calculations in standard NFPA format.' },
  { icon: Layers, title: 'Hazard Classification', description: 'Classify occupancies into Light Hazard, Ordinary Hazard Group 1/2, Extra Hazard Group 1/2, or Special Occupancy categories per NFPA 13 Chapter 5. Get design density and remote area recommendations with commodity classification for storage occupancies.' },
  { icon: Database, title: 'Water Supply Analysis', description: 'Plot water supply curves from flow test data (static, residual, and flowing pressures) and compare against system demand. Account for elevation changes, hose stream allowances per NFPA 13 Table 11.2.3.1.2, and inside hose allowances. Identify supply deficiencies and fire pump requirements.' },
  { icon: Wrench, title: 'K-Factor & Sprinkler Selection', description: 'Select appropriate K-factors based on hazard classification and design criteria. From K-5.6 standard spray sprinklers for Light Hazard to K-25.2 ESFR sprinklers for high-piled storage, the platform matches sprinkler characteristics to design requirements and verifies listed clearance-to-storage dimensions.' },
  { icon: CheckCircle2, title: 'Multi-Standard Support', description: 'Design systems per NFPA 13, 13D (one- and two-family dwellings), 13R (residential up to 4 stories), 14 (standpipe systems), 20 (fire pump installations), and 25 (ITM). The platform identifies which standard governs based on building use, occupancy type, and applicable building code requirements.' },
]

const faqs = [
  { question: 'How are design densities determined?', answer: 'Design densities come from the NFPA 13 density/area curves (Figure 19.3.3.1.1) for non-storage occupancies: Light Hazard requires 0.10 gpm/ft2 over 1,500 ft2, Ordinary Hazard Group 1 requires 0.15 gpm/ft2 over 1,500 ft2, and so on. For storage occupancies, density depends on commodity class, storage height, ceiling height, and sprinkler type (CMSA, ESFR, or in-rack). FireSafe.AI selects the correct curve point based on your hazard classification and remote area configuration.' },
  { question: 'What is the difference between CMSA and ESFR sprinklers?', answer: 'Control Mode Specific Application (CMSA) sprinklers control a fire by pre-wetting surrounding commodities and limiting fire spread, while Early Suppression Fast Response (ESFR) sprinklers are designed to suppress the fire at its origin through high-volume, high-momentum water discharge. ESFR systems (K-14.0 to K-25.2) eliminate the need for in-rack sprinklers in many storage configurations but require specific ceiling height and clearance-to-storage dimensions. FireSafe.AI evaluates both options and identifies which approach is viable for your storage configuration.' },
  { question: 'Can the tool perform pipe sizing?', answer: 'Yes. The platform sizes branch lines, cross mains, and feed mains based on hydraulic demand and NFPA 13 pipe schedule or hydraulic calculation methods. For hydraulically calculated systems, pipe sizes are optimized to balance material cost against friction loss while maintaining velocities below recommended limits (typically 20 fps in branch lines). The calculations use Hazen-Williams C-factors appropriate for the pipe material.' },
  { question: 'How are hose stream allowances determined?', answer: 'Hose stream allowances are added to the sprinkler system demand per NFPA 13 Table 11.2.3.1.2. Light Hazard requires 100 gpm, Ordinary Hazard requires 250 gpm, and Extra Hazard requires 250-500 gpm depending on the group. For storage occupancies, the hose stream demand depends on the protection approach (CMSA vs. ESFR) and storage height. These values are added at the base of the sprinkler riser to determine total water supply demand.' },
  { question: 'Does the tool support fire pump selection?', answer: 'When the available water supply is insufficient to meet system demand, FireSafe.AI calculates the required fire pump pressure and flow rating per NFPA 20. The platform recommends pump types (horizontal split-case, vertical inline, or vertical turbine), accounts for churn, rated, and overload conditions on the pump curve, and verifies that the pump installation meets NFPA 20 requirements for suction conditions, electrical supply, and controller configuration.' },
]

export default function SuppressionPage() {
  return (
    <>
      <section className="flex flex-col items-center px-6 pt-20 pb-16 text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20"><Droplets className="h-7 w-7 text-primary" /></div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Sprinkler Design & Suppression System Software</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Design automatic sprinkler systems with AI-assisted hydraulic calculations, hazard classification, K-factor selection, and water supply analysis. From Light Hazard offices to ESFR warehouse protection -- all per NFPA 13.</p>
        <div className="mt-8"><Button size="lg" asChild><a href={APP_URL} className="gap-2">Start free <ArrowRight className="h-4 w-4" /></a></Button></div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">NFPA 13 Sprinkler Design, End to End</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Automatic sprinkler systems remain the single most effective fire protection measure in buildings. When properly designed and maintained, they control or suppress fires before conditions become untenable for occupants or structurally damaging for the building. But &quot;properly designed&quot; means navigating NFPA 13&apos;s 500+ pages of requirements for hazard classification, sprinkler selection, spacing, hydraulic calculations, and water supply evaluation.</p>
          <p>FireSafe.AI handles the computational burden. You define the occupancy use, building dimensions, storage configuration (if applicable), and water supply data. The platform classifies the hazard, selects appropriate sprinkler types and K-factors, generates a layout meeting spacing and obstruction rules, and performs hydraulic calculations to verify that the water supply meets system demand with required safety margins.</p>
          <p>For storage occupancies, the design process is more involved. NFPA 13 Chapters 20-22 require commodity classification, storage arrangement analysis (rack, palletized, solid pile), and selection between CMSA, ESFR, and in-rack protection approaches. FireSafe.AI walks through this decision tree and provides design criteria specific to your storage configuration, including ceiling sprinkler spacing, design density, and in-rack sprinkler requirements where applicable.</p>
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
        <h2 className="mb-4 text-2xl font-semibold">Applicable Standards & References</h2>
        <p className="mb-6 text-muted-foreground">Suppression system design in FireSafe.AI references the following standards:</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {['NFPA 13 -- Sprinkler Systems','NFPA 13D -- Sprinklers in 1- and 2-Family Dwellings','NFPA 13R -- Sprinklers in Low-Rise Residential','NFPA 14 -- Standpipe and Hose Systems','NFPA 20 -- Stationary Pumps for Fire Protection','NFPA 25 -- Inspection, Testing, and Maintenance','IBC 903 -- Automatic Sprinkler Systems','FM Global Data Sheets (DS 2-0, DS 3-26, DS 8-9)'].map((standard) => (
            <div key={standard} className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground">{standard}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Common Use Cases</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">Office and commercial buildings:</strong> Design Light Hazard and Ordinary Hazard Group 1 systems with standard spray sprinklers. Verify that the municipal water supply meets density/area demands without a fire pump, or size a pump if needed.</p>
          <p><strong className="text-foreground">Warehouse and distribution centers:</strong> Evaluate ESFR vs. CMSA protection for rack storage with specific commodity classes. Determine whether in-rack sprinklers are required, size ceiling sprinklers for the storage height and clearance dimensions, and verify water supply adequacy for high-demand systems.</p>
          <p><strong className="text-foreground">Residential sprinkler systems:</strong> Design NFPA 13D and 13R systems with multipurpose piping configurations. Calculate hydraulic demand for the most remote two-sprinkler design area and verify that the domestic water supply meets the reduced demand of residential sprinkler heads.</p>
          <p><strong className="text-foreground">Standpipe and combined systems:</strong> Design Class I, II, and III standpipe systems per NFPA 14. Calculate hydraulic demand for the most remote standpipe connection, account for combined sprinkler/standpipe demand, and verify fire pump capacity for high-rise buildings requiring high-zone standpipe service.</p>
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
        <h2 className="text-2xl font-semibold">Design sprinkler systems with confidence</h2>
        <p className="mt-3 max-w-lg text-muted-foreground">From hazard classification to hydraulic calculations. Every design parameter traced to NFPA 13.</p>
        <div className="mt-6"><Button size="lg" asChild><a href={APP_URL} className="gap-2">Get started free <ArrowRight className="h-4 w-4" /></a></Button></div>
      </section>
    </>
  )
}
