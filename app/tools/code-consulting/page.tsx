import type { Metadata } from 'next'
import { BookOpen, Search, GitCompare, MapPin, Scale, History, CheckCircle2, Shield, Building } from 'lucide-react'
import { ToolPageLayout } from '@/components/tool-page-layout'

export const metadata: Metadata = {
  title: 'Fire Code Search & Comparison Tool | FireSafe.AI',
  description:
    'Natural language search across IBC, IFC, NFPA, UFC, and federal standards. 30+ jurisdictions with adopted edition tracking, cross-code referencing, and AI-powered compliance guidance.',
  openGraph: {
    images: [{ url: '/og/code-consulting.png', width: 1200, height: 630 }],
    title: 'Fire Code Search & Comparison Tool | FireSafe.AI',
    description:
      'Natural language search across IBC, IFC, NFPA, UFC, and federal standards. 30+ jurisdictions with adopted edition tracking, cross-code referencing, and AI-powered compliance guidance.',
  },
}

const features = [
  { icon: Search, title: 'Natural Language Code Search', description: 'Search fire and building codes using plain language queries instead of section numbers. Ask questions like "What is the maximum travel distance for a Group B occupancy?" and get the relevant IBC section with context, cross-references, and applicable exceptions.' },
  { icon: GitCompare, title: 'Cross-Code Referencing', description: 'Trace requirements across IBC, IFC, NFPA 101, UFC, and NFPA specialty standards. When IBC 903 references NFPA 13, the platform shows both the referring section and the referenced requirement. Identify where codes agree, where they differ, and where local amendments apply.' },
  { icon: MapPin, title: '30+ Jurisdiction Presets', description: 'Select your Authority Having Jurisdiction from 30+ major US cities and states, and the platform auto-sets the adopted code editions. See which edition is enforced, what local amendments apply, and how the adopted code differs from the model code. Includes NYC, LA, Chicago, Houston, and federal/DoD presets.' },
  { icon: Shield, title: 'Federal & Military Codes', description: 'Full support for UFC 3-600-01 (DoD Fire Protection Engineering), UFC 4-010-01 (Antiterrorism Standards), NASA-STD-8719.11 (NASA Fire Protection), and 29 CFR 1910 (OSHA). Essential for defense contractors, federal facility engineers, and NASA program fire protection.' },
  { icon: Scale, title: 'Prescriptive vs. Performance Path', description: 'Evaluate whether a prescriptive or performance-based approach better serves your project. The platform identifies prescriptive requirements, highlights where performance alternatives exist (IBC 104.11, NFPA 101 Chapter 5), and outlines the documentation needed for alternative materials and methods.' },
  { icon: History, title: 'Edition-Specific Code Change Tracking', description: 'Compare code requirements across editions with edition-specific citations. Select any edition from 2009 to 2024 for ICC codes and 2010 to 2025 for NFPA standards. See what changed, why it changed, and how the change affects your design across code adoption cycles.' },
  { icon: Building, title: 'Occupancy & Construction Classification', description: 'Determine occupancy groups per IBC Chapter 3, construction types per Chapter 6, and the resulting allowable height and area per Chapter 5. Apply Chapter 5 increases for sprinklers and frontage, evaluate mixed occupancy (separated vs. non-separated), and verify fire-resistance rating requirements.' },
  { icon: CheckCircle2, title: 'Multi-Code Conflict Detection', description: 'Automatically identify when referenced codes have conflicting requirements. The platform highlights conflicts between IBC and IFC, between model codes and UFC criteria, and between different NFPA standards, with guidance on which requirement governs based on the applicable hierarchy.' },
]

const codeCategories = [
  { heading: 'ICC Codes', codes: ['IBC 2009 – 2024 — International Building Code','IFC 2009 – 2024 — International Fire Code','IMC 2018 – 2024 — International Mechanical Code','IEBC 2018 – 2024 — International Existing Building Code'] },
  { heading: 'NFPA Standards', codes: ['NFPA 1 — Fire Code','NFPA 13 — Sprinkler Systems (2013 – 2025)','NFPA 14 — Standpipe and Hose Systems','NFPA 20 — Fire Pumps','NFPA 25 — Inspection, Testing & Maintenance','NFPA 30 — Flammable & Combustible Liquids','NFPA 55 — Compressed Gases & Cryogenics','NFPA 72 — Fire Alarm and Signaling Code','NFPA 80 — Fire Doors and Other Opening Protectives','NFPA 92 — Smoke Control Systems','NFPA 101 — Life Safety Code','NFPA 110 — Emergency and Standby Power','NFPA 221 — High Challenge Fire Walls'] },
  { heading: 'Federal & Military', codes: ['UFC 3-600-01 — Fire Protection Engineering for Facilities (DoD)','UFC 4-010-01 — Minimum Antiterrorism Standards for Buildings (DoD)','NASA-STD-8719.11 — Fire Protection for NASA Facilities','29 CFR 1910 — OSHA General Industry Standards (fire protection subparts)'] },
]

const useCases = [
  { label: 'Code compliance reviews', text: 'Systematically verify that a building design meets all applicable fire and building code requirements. Start from occupancy classification and trace through to sprinkler requirements, fire alarm requirements, means of egress, and structural fire resistance -- with every code section documented.' },
  { label: 'Variance and alternative methods requests', text: 'When proposing an alternative to a prescriptive code requirement under IBC 104.11, quickly identify the specific prescriptive requirement, compare it against the proposed alternative, and document the technical basis. Cross-reference related sections to ensure the alternative does not create unintended conflicts.' },
  { label: 'Multi-jurisdiction projects', text: 'For architects and engineers working on projects across different cities or states, compare how the same code provision is adopted and amended in each jurisdiction. Identify requirements that may be more stringent in one location and adjust designs accordingly.' },
  { label: 'DoD and federal facility design', text: 'For defense contractors and federal engineers, cross-reference UFC fire protection criteria with NFPA standards. Verify that a facility meets both UFC 3-600-01 Chapter 4 suppression requirements and the referenced NFPA 13 edition, resolving any conflicts between federal and commercial standards.' },
  { label: 'Code change impact analysis', text: 'When a jurisdiction adopts a new code edition, evaluate the impact on existing designs and ongoing projects. Identify significant changes in sprinkler requirements, egress provisions, or occupancy classifications that may affect permitting or construction.' },
]

const faqs = [
  { question: 'Which codes and standards are included?', answer: 'FireSafe.AI covers ICC codes (IBC, IFC, IMC, IEBC) from 2009 to 2024, 13 NFPA standards including NFPA 13, 72, 101, and 92, plus federal and military standards including UFC 3-600-01, UFC 4-010-01, NASA-STD-8719.11, and 29 CFR 1910. Each code supports multiple editions — select the exact edition adopted by your jurisdiction for precise citations.' },
  { question: 'How does the jurisdiction preset work?', answer: 'Choose from 30+ pre-configured US jurisdictions (NYC, LA, Chicago, Houston, Seattle, federal/DoD, and more). When you select a jurisdiction, the platform automatically sets each code to the edition adopted by that AHJ. For example, selecting "New York City" sets IBC to 2014 (NYC Building Code base year) while "California" sets IBC to 2022 (CBC Title 24). You can override individual editions after selecting a preset.' },
  { question: 'How does natural language search work?', answer: 'The search engine uses AI to understand your intent and map it to relevant code sections. You can ask questions like "When is a fire alarm required in a Group R-2 occupancy?" and the platform returns IBC 907.2.9 with the applicable thresholds, exceptions, and cross-references to NFPA 72. Results include code citations with section numbers and edition years.' },
  { question: 'Can I compare requirements across code editions?', answer: 'Yes. Select any two editions of the same code and the platform identifies what changed. This is critical when a jurisdiction adopts a new code cycle — for example, tracking the IBC 2021 to 2024 changes in sprinkler requirements or the NFPA 13 2019 to 2022 revisions to storage protection criteria.' },
  { question: 'Does it support UFC and federal facility standards?', answer: 'Yes. The platform includes UFC 3-600-01 (DoD fire protection engineering criteria), UFC 4-010-01 (antiterrorism standards), NASA-STD-8719.11, and OSHA 29 CFR 1910 fire protection subparts. These are essential for defense contractors, federal facility engineers, and NASA program fire protection engineers who must comply with both UFC and NFPA standards simultaneously.' },
  { question: 'How accurate is the AI-powered code interpretation?', answer: 'FireSafe.AI provides code interpretation guidance with confidence scores on every answer. The AI cites specific code sections, edition years, and quoted requirements. The platform includes a disclaimer that all outputs are for reference and the engineer of record is responsible for code interpretation. The AI flags when AHJ interpretation may vary and notes edition-specific differences.' },
  { question: 'Does the tool support local code amendments?', answer: 'The platform tracks state and major city amendments for 30+ US jurisdictions. When you select an AHJ, the system prompts the AI with jurisdiction-specific context so it can flag locally amended provisions. This is particularly important for jurisdictions like NYC (unique building code), Chicago (non-IBC-based), and California (CBC Title 24 with CalFire amendments).' },
]

export default function CodeConsultingPage() {
  return (
    <ToolPageLayout
      href="/tools/code-consulting"
      icon={BookOpen}
      title="Fire Code Search & Comparison Tool"
      subtitle="Search IBC, IFC, NFPA, UFC, and federal standards using natural language. 30+ jurisdiction presets with adopted edition tracking. Cross-reference codes, compare editions, and navigate fire protection requirements with AI-powered edition-specific citations."
      overviewTitle="Navigate Fire Codes Like You Navigate Code"
      overviewParagraphs={[
        'Fire protection engineers spend a significant portion of their time searching through codes and standards. A single project may require cross-referencing the IBC for occupancy classification and allowable height/area, the IFC for operational requirements, NFPA 13 for sprinkler design criteria, NFPA 72 for detection requirements, and NFPA 92 for smoke control -- each with its own section numbering, terminology, and edition cycle.',
        'FireSafe.AI indexes these codes and makes them searchable through natural language queries. Instead of remembering that travel distance requirements live in IBC 1017.2, you ask "What is the maximum travel distance for a sprinklered Group B occupancy?" and get the answer with the code section, applicable exceptions, and footnotes. The platform also shows related requirements -- like the corridor width needed to serve that travel distance, or the number of exits required based on occupant load.',
        'For engineers working across jurisdictions, the platform includes 30+ pre-configured jurisdiction presets that auto-set code editions to match local adoptions. For federal and military projects, UFC 3-600-01, UFC 4-010-01, and NASA-STD-8719.11 are fully supported alongside the standard ICC and NFPA references.',
      ]}
      features={features}
      useCases={useCases}
      faqs={faqs}
      ctaHeading="Search fire codes in seconds, not hours"
      ctaSubtitle="Natural language search across IBC, IFC, NFPA, UFC, and federal standards. 30+ jurisdictions with edition tracking. Cross-reference and compare editions instantly."
    >
      {/* Categorized standards listing (replaces the layout's flat standards grid) */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Indexed Codes &amp; Standards</h2>
        <p className="mb-6 text-muted-foreground">The code consulting module covers 20+ codes and standards across ICC, NFPA, and federal/military sources, each with multiple edition support:</p>
        <div className="space-y-6">
          {codeCategories.map((cat) => (
            <div key={cat.heading}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{cat.heading}</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {cat.codes.map((standard) => (
                  <div key={standard} className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground">{standard}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </ToolPageLayout>
  )
}
