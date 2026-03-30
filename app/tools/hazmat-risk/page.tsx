import type { Metadata } from 'next'
import { FlaskConical, ArrowRight, Shield, Calculator, Layers, FileSearch, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'HazMat Risk Assessment & MAQ Calculator | FireSafe.AI',
  description:
    'Hazardous materials analysis and fire risk assessment -- MAQ calculations, control area analysis, combustible dust assessment, and quantitative risk modeling.',
  openGraph: {
    title: 'HazMat Risk Assessment & MAQ Calculator | FireSafe.AI',
    description:
      'Hazardous materials analysis and fire risk assessment -- MAQ calculations, control area analysis, combustible dust assessment, and quantitative risk modeling.',
  },
}

const features = [
  { icon: Calculator, title: 'MAQ Calculator', description: 'Calculate Maximum Allowable Quantities per IBC Table 307.1(1) and 307.1(2) for all hazard categories. Account for control area reductions by floor level, sprinkler increases, and gas detection/ventilation increases. Determine when quantities trigger a change to Group H occupancy.' },
  { icon: Layers, title: 'Control Area Analysis', description: 'Design and evaluate control areas per IBC 414.2. Calculate the number of control areas per floor, apply floor-level reduction factors (Table 414.2.2), and verify that each control area maintains MAQ compliance for all hazardous material categories present in the space.' },
  { icon: Shield, title: 'Hazard Classification', description: 'Classify hazardous materials using NFPA 400, NFPA 30 (flammable/combustible liquids), NFPA 55 (compressed gases), and IBC Chapter 3 occupancy provisions. Parse Safety Data Sheets to identify GHS hazard categories and map them to IBC hazardous material classifications.' },
  { icon: FileSearch, title: 'SDS Parsing & Analysis', description: 'Upload Safety Data Sheets and extract relevant hazard information: flash point, boiling point, vapor pressure, GHS classifications, and storage compatibility. Automatically map SDS data to IBC hazard categories and calculate MAQ compliance for the material inventory.' },
  { icon: AlertTriangle, title: 'Combustible Dust Assessment', description: 'Perform Dust Hazard Analyses per NFPA 652. Evaluate dust explosibility characteristics (Kst, Pmax, MIE, MEC), identify deflagration scenarios, and recommend protection measures per NFPA 654 (combustible dusts) and NFPA 484 (combustible metals).' },
  { icon: CheckCircle2, title: 'Quantitative Risk Assessment', description: 'Build event trees and fault trees to quantify fire and explosion risk scenarios. Apply semi-quantitative methods including FRAME (Fire Risk Assessment Method for Engineering) and Gretener indexing to evaluate facility risk profiles and prioritize mitigation measures.' },
]

const faqs = [
  { question: 'What are Maximum Allowable Quantities (MAQ)?', answer: 'MAQ are the maximum quantities of hazardous materials that may be stored or used in a single control area before the space must be classified as a Group H (High Hazard) occupancy. IBC Tables 307.1(1) (storage) and 307.1(2) (use-open/use-closed) define MAQ for each hazard category. For example, the MAQ for Class I flammable liquids in storage is 120 gallons per control area at grade. MAQ can be increased with approved sprinkler systems, gas detection, or ventilation per the table footnotes.' },
  { question: 'How do control areas work?', answer: 'Control areas are spaces within a building where hazardous materials are stored, dispensed, used, or handled. IBC Section 414.2 limits the number of control areas per floor and applies reduction factors for above-grade and below-grade floors. At grade level, up to 4 control areas are permitted at 100% MAQ each. On the second floor above grade, 3 control areas are permitted at 75% MAQ. The percentage continues to decrease with height and depth. Each control area must be separated from adjacent control areas by fire barriers.' },
  { question: 'When is a Dust Hazard Analysis (DHA) required?', answer: 'NFPA 652 requires a DHA for any facility that handles, processes, or stores combustible dust or particulate solids. The DHA identifies locations where combustible dust may accumulate, evaluates ignition sources, and recommends protection measures. OSHA also references DHA requirements through its Combustible Dust National Emphasis Program. FireSafe.AI guides you through the DHA process and generates documentation meeting NFPA 652 Section 7.1 requirements.' },
  { question: 'What is the FRAME method?', answer: 'FRAME (Fire Risk Assessment Method for Engineering) is a semi-quantitative risk indexing method developed by the Geneva Association. It evaluates three risk categories: property risk (R), occupant risk (R1), and activity risk (R2) by scoring building characteristics, fire protection measures, and occupancy factors. A FRAME score below 1.0 indicates acceptable risk. FireSafe.AI automates the scoring process and identifies which factors most influence the overall risk profile.' },
  { question: 'Can the tool handle mixed hazardous material inventories?', answer: 'Yes. Real facilities typically store multiple hazardous materials across several hazard categories. The platform tracks each material by hazard category, calculates aggregate quantities against MAQ limits for each category, checks storage compatibility per IFC Table 5003.9.8, and verifies that the total inventory within each control area complies with all applicable limits. When quantities exceed MAQ for any category, the platform identifies which materials drive the exceedance.' },
]

export default function HazmatRiskPage() {
  return (
    <>
      <section className="flex flex-col items-center px-6 pt-20 pb-16 text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20"><FlaskConical className="h-7 w-7 text-primary" /></div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">HazMat Risk Assessment & MAQ Calculator</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Calculate Maximum Allowable Quantities, design control areas, classify hazardous materials, and perform quantitative fire risk assessments. From SDS parsing to event tree analysis -- built for fire protection engineers managing hazmat compliance.</p>
        <div className="mt-8"><Button size="lg" asChild><a href={APP_URL} className="gap-2">Start free <ArrowRight className="h-4 w-4" /></a></Button></div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Hazardous Materials Compliance, Quantified</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Hazardous materials compliance is one of the most complex areas of fire protection engineering. The IBC, IFC, and NFPA standards create an interlocking web of requirements: IBC Chapter 3 defines when hazardous materials quantities trigger a Group H occupancy classification, IBC Section 414 governs control area design, IFC Chapter 50 establishes general hazmat requirements, and material-specific chapters (IFC 54-67) add requirements for specific hazard categories from flammable liquids to oxidizers to organic peroxides.</p>
          <p>FireSafe.AI organizes this complexity into a structured workflow. Start by entering your material inventory -- either manually or by uploading Safety Data Sheets that the platform parses for GHS classifications, flash points, and physical hazard properties. The platform maps each material to its IBC hazard category, calculates aggregate quantities against MAQ limits, and determines whether the quantities trigger a Group H occupancy or can be accommodated within control areas.</p>
          <p>For facilities that handle combustible dusts, the platform guides you through a Dust Hazard Analysis per NFPA 652, evaluating explosibility parameters (Kst, Pmax, MIE, MEC) and recommending protection measures from NFPA 654 and NFPA 484. For broader risk assessments, the quantitative risk module supports event tree and fault tree analysis, plus semi-quantitative indexing methods like FRAME and Gretener for facility-level risk profiling.</p>
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
        <p className="mb-6 text-muted-foreground">HazMat analysis and risk assessment in FireSafe.AI references the following codes and standards:</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {['IBC Ch. 3 & 4 -- Occupancy & Special Uses','IBC 414 -- Hazardous Materials','IFC Ch. 50-67 -- Hazardous Materials','NFPA 400 -- Hazardous Materials Code','NFPA 30 -- Flammable and Combustible Liquids','NFPA 55 -- Compressed Gases and Cryogenic Fluids','NFPA 652 -- Combustible Dusts Fundamentals','NFPA 654 -- Combustible Particulate Solids'].map((standard) => (
            <div key={standard} className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground">{standard}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Common Use Cases</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">Laboratory and research facilities:</strong> Manage inventories of flammable liquids, corrosives, oxidizers, and compressed gases across multiple laboratories. Calculate MAQ per control area, verify fire barrier ratings between labs, and ensure aggregate quantities do not trigger Group H occupancy reclassification.</p>
          <p><strong className="text-foreground">Manufacturing plants:</strong> Evaluate hazardous material usage in production areas, storage rooms, and loading docks. Perform control area analysis for multi-story facilities, account for sprinkler increases, and generate documentation for fire marshal inspections and permit renewals.</p>
          <p><strong className="text-foreground">Semiconductor fabrication:</strong> Address the specialized requirements of IBC 415.11 (HPM facilities), including gas detection, exhaust ventilation, emergency alarm systems, and liquid storage limitations. Verify compliance with NFPA 318 (clean room fire protection) and FM Global guidelines for semiconductor facilities.</p>
          <p><strong className="text-foreground">Food and grain processing:</strong> Perform Dust Hazard Analyses for facilities handling combustible dusts from grain, sugar, flour, starch, and other agricultural products. Evaluate explosion protection requirements per NFPA 652/654 and design deflagration venting per NFPA 68 or suppression systems per NFPA 69.</p>
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
        <h2 className="text-2xl font-semibold">Manage hazmat compliance with precision</h2>
        <p className="mt-3 max-w-lg text-muted-foreground">From MAQ calculations to quantitative risk assessment. Every material tracked, every limit verified.</p>
        <div className="mt-6"><Button size="lg" asChild><a href={APP_URL} className="gap-2">Get started free <ArrowRight className="h-4 w-4" /></a></Button></div>
      </section>
    </>
  )
}
