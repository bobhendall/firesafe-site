import type { Metadata } from 'next'
import { FlaskConical, Shield, Calculator, Layers, FileSearch, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { ToolPageLayout } from '@/components/tool-page-layout'

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

const useCases = [
  {
    label: 'Laboratory and research facilities',
    text: 'Manage inventories of flammable liquids, corrosives, oxidizers, and compressed gases across multiple laboratories. Calculate MAQ per control area, verify fire barrier ratings between labs, and ensure aggregate quantities do not trigger Group H occupancy reclassification.',
  },
  {
    label: 'Manufacturing plants',
    text: 'Evaluate hazardous material usage in production areas, storage rooms, and loading docks. Perform control area analysis for multi-story facilities, account for sprinkler increases, and generate documentation for fire marshal inspections and permit renewals.',
  },
  {
    label: 'Semiconductor fabrication',
    text: 'Address the specialized requirements of IBC 415.11 (HPM facilities), including gas detection, exhaust ventilation, emergency alarm systems, and liquid storage limitations. Verify compliance with NFPA 318 (clean room fire protection) and FM Global guidelines for semiconductor facilities.',
  },
  {
    label: 'Food and grain processing',
    text: 'Perform Dust Hazard Analyses for facilities handling combustible dusts from grain, sugar, flour, starch, and other agricultural products. Evaluate explosion protection requirements per NFPA 652/654 and design deflagration venting per NFPA 68 or suppression systems per NFPA 69.',
  },
]

const standards = [
  'IBC Ch. 3 & 4 -- Occupancy & Special Uses',
  'IBC 414 -- Hazardous Materials',
  'IFC Ch. 50-67 -- Hazardous Materials',
  'NFPA 400 -- Hazardous Materials Code',
  'NFPA 30 -- Flammable and Combustible Liquids',
  'NFPA 55 -- Compressed Gases and Cryogenic Fluids',
  'NFPA 652 -- Combustible Dusts Fundamentals',
  'NFPA 654 -- Combustible Particulate Solids',
]

export default function HazmatRiskPage() {
  return (
    <ToolPageLayout
      icon={FlaskConical}
      title="HazMat Risk Assessment & MAQ Calculator"
      subtitle="Calculate Maximum Allowable Quantities, design control areas, classify hazardous materials, and perform quantitative fire risk assessments. From SDS parsing to event tree analysis -- built for fire protection engineers managing hazmat compliance."
      ctaText="Start free"
      overviewTitle="Hazardous Materials Compliance, Quantified"
      overviewParagraphs={[
        'Hazardous materials compliance is one of the most complex areas of fire protection engineering. The IBC, IFC, and NFPA standards create an interlocking web of requirements: IBC Chapter 3 defines when hazardous materials quantities trigger a Group H occupancy classification, IBC Section 414 governs control area design, IFC Chapter 50 establishes general hazmat requirements, and material-specific chapters (IFC 54-67) add requirements for specific hazard categories from flammable liquids to oxidizers to organic peroxides.',
        'FireSafe.AI organizes this complexity into a structured workflow. Start by entering your material inventory -- either manually or by uploading Safety Data Sheets that the platform parses for GHS classifications, flash points, and physical hazard properties. The platform maps each material to its IBC hazard category, calculates aggregate quantities against MAQ limits, and determines whether the quantities trigger a Group H occupancy or can be accommodated within control areas.',
        'For facilities that handle combustible dusts, the platform guides you through a Dust Hazard Analysis per NFPA 652, evaluating explosibility parameters (Kst, Pmax, MIE, MEC) and recommending protection measures from NFPA 654 and NFPA 484. For broader risk assessments, the quantitative risk module supports event tree and fault tree analysis, plus semi-quantitative indexing methods like FRAME and Gretener for facility-level risk profiling.',
      ]}
      features={features}
      standardsTitle="Applicable Standards & References"
      standardsIntro="HazMat analysis and risk assessment in FireSafe.AI references the following codes and standards:"
      standards={standards}
      useCases={useCases}
      faqs={faqs}
      ctaHeading="Manage hazmat compliance with precision"
      ctaSubtitle="From MAQ calculations to quantitative risk assessment. Every material tracked, every limit verified."
      ctaButtonText="Get started free"
    />
  )
}
