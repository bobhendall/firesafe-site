import type { Metadata } from 'next'
import { Bell, ArrowRight, Ruler, Volume2, ThermometerSun, LayoutGrid, Settings2, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'Fire Detection System Design Tool | FireSafe.AI',
  description:
    'AI-assisted fire detection design per NFPA 72 -- detector spacing, notification appliance placement, ceiling height adjustments, and compliance checking.',
  openGraph: {
    title: 'Fire Detection System Design Tool | FireSafe.AI',
    description:
      'AI-assisted fire detection design per NFPA 72 -- detector spacing, notification appliance placement, ceiling height adjustments, and compliance checking.',
  },
}

const features = [
  {
    icon: LayoutGrid,
    title: 'Detector Spacing Layout',
    description:
      'Calculate detector spacing per NFPA 72 Chapter 17 for smoke detectors, heat detectors, and multi-criteria devices. Apply listed spacing with adjustments for ceiling height, beam depth, HVAC airflow, and sloped ceiling geometry.',
  },
  {
    icon: ThermometerSun,
    title: 'Ceiling Height Adjustments',
    description:
      'Automatically apply height correction factors from NFPA 72 Table 17.6.3.5.1 for smoke detectors installed above the standard reference height. Account for stratification effects and recommend detector types appropriate for high-ceiling spaces.',
  },
  {
    icon: Settings2,
    title: 'HVAC Interaction Analysis',
    description:
      'Evaluate the impact of HVAC supply and return air on detector response per NFPA 72 Section 17.7.3.2. Verify that detector placement accounts for air changes per hour, supply diffuser locations, and the dilution effect on smoke concentration reaching the detector.',
  },
  {
    icon: Volume2,
    title: 'Notification Appliance Design',
    description:
      'Design audible and visible notification appliance layouts per NFPA 72 Chapter 18. Calculate sound pressure levels for audible appliances (meeting the 15 dB above ambient or 75 dBA threshold) and verify candela ratings for visible appliances based on room dimensions.',
  },
  {
    icon: Ruler,
    title: 'Pathway & Circuit Design',
    description:
      'Determine circuit class requirements (Class A, B, X) and verify pathway survivability per NFPA 72 Chapter 12. Evaluate voltage drop calculations for notification appliance circuits and ensure adequate battery standby capacity per NFPA 72 Section 10.6.7.',
  },
  {
    icon: CheckCircle2,
    title: 'Compliance Verification',
    description:
      'Run automated compliance checks against NFPA 72, IBC 907, and IFC 907 requirements. Verify that detector coverage, notification appliance placement, and system configuration meet prescriptive requirements for the specified occupancy and building type.',
  },
]

const faqs = [
  {
    question: 'How is detector spacing calculated per NFPA 72?',
    answer:
      'NFPA 72 Chapter 17 provides listed spacing for smoke and heat detectors on smooth ceilings. The base spacing for spot-type smoke detectors is typically 30 ft (9.1 m), applied in a grid pattern. Spacing must be reduced for beam depths exceeding 4 inches (Table 17.6.3.2.3.1), adjusted for ceiling height (Table 17.6.3.5.1), and modified for sloped ceilings (Section 17.6.3.4). FireSafe.AI applies all applicable adjustments and generates a compliant layout.',
  },
  {
    question: 'What candela ratings should I use for visible notification appliances?',
    answer:
      'NFPA 72 Table 18.5.5.5.1(a) specifies minimum candela ratings based on the maximum room dimension. For wall-mounted appliances in a room up to 20 ft x 20 ft, 15 cd is required. Larger rooms require higher candela ratings or additional appliances. Ceiling-mounted appliances use Table 18.5.5.5.1(b) with different coverage areas. FireSafe.AI selects the minimum candela rating for each space and verifies coverage.',
  },
  {
    question: 'When should I use heat detectors vs. smoke detectors?',
    answer:
      'Smoke detectors generally provide faster fire detection, but NFPA 72 and the applicable building code may require heat detectors in specific environments: areas with high ambient particulate (parking garages, commercial kitchens), locations where smoke detectors would cause frequent unwanted alarms, and elevator lobbies/hoistways per ASME A17.1. FireSafe.AI recommends detector types based on occupancy use and environmental conditions.',
  },
  {
    question: 'How does the tool handle high-ceiling spaces?',
    answer:
      'For ceilings above the standard detector reference height (typically 10 ft for smoke detectors), NFPA 72 requires spacing adjustments per Table 17.6.3.5.1. At extreme heights (above 30 ft), smoke stratification may prevent ceiling-mounted detectors from responding. FireSafe.AI flags these conditions and recommends supplemental detection strategies: projected beam detectors, air sampling (VESDA), or detector arrays at multiple elevations.',
  },
  {
    question: 'Does this tool design fire alarm control panels?',
    answer:
      'FireSafe.AI focuses on detection and notification layout design rather than control panel programming. The platform generates device schedules, circuit loading calculations, and battery calculations that can be used to specify and program the fire alarm control unit. It verifies that the initiating device circuits and notification appliance circuits meet NFPA 72 Chapter 12 requirements for pathway class and survivability.',
  },
]

export default function FireDetectionPage() {
  return (
    <>
      <section className="flex flex-col items-center px-6 pt-20 pb-16 text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
          <Bell className="h-7 w-7 text-primary" />
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Fire Detection System Design Tool</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Design fire detection and notification systems per NFPA 72. Automated detector spacing with ceiling height adjustments, notification appliance layout with candela verification, and comprehensive compliance checking against IBC 907.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild><a href={APP_URL} className="gap-2">Start free <ArrowRight className="h-4 w-4" /></a></Button>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">NFPA 72 Detection Design, Automated</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Fire detection system design requires navigating a complex matrix of code requirements, environmental factors, and performance objectives. NFPA 72 Chapter 17 governs initiating device placement, Chapter 18 governs notification appliances, and the applicable building code (IBC Section 907 or IFC Section 907) dictates which occupancies and building types require detection, how much coverage is needed, and where notification must reach.</p>
          <p>FireSafe.AI systematizes this process. You define room dimensions, ceiling heights and types (smooth, beamed, sloped), ambient conditions, and occupancy use. The platform calculates detector spacing with all applicable NFPA 72 adjustments, generates notification appliance layouts with candela and sound pressure level verification, and checks the complete design against IBC/IFC requirements for your building type.</p>
          <p>The tool is particularly valuable for complex buildings with varying ceiling heights, mixed occupancies, and high-ceiling spaces where stratification affects detector performance. Instead of manually referencing tables and applying correction factors, you get a compliant layout with clear documentation of every code provision applied.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold">Key Capabilities</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20"><Icon className="h-5 w-5 text-primary" /></div>
                <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Applicable Standards & References</h2>
        <p className="mb-6 text-muted-foreground">Fire detection design in FireSafe.AI references the following codes and technical resources:</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {['NFPA 72 -- National Fire Alarm and Signaling Code','NFPA 72 Ch. 17 -- Initiating Devices','NFPA 72 Ch. 18 -- Notification Appliances','NFPA 72 Ch. 12 -- Circuits and Pathways','IBC 907 -- Fire Alarm and Detection Systems','IFC 907 -- Fire Alarm and Detection Systems','UL 268 -- Smoke Detectors for Fire Alarm Systems','UL 217 -- Smoke Alarms'].map((standard) => (
            <div key={standard} className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground">{standard}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Common Use Cases</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">High-rise office buildings:</strong> Design detection systems meeting IBC 907.2.13 requirements for high-rise buildings. Lay out smoke detectors in elevator lobbies, notification appliances in occupied spaces, and verify circuit survivability for pathway Class A wiring per NFPA 72.</p>
          <p><strong className="text-foreground">Warehouse and distribution centers:</strong> Address detection challenges in high-bay spaces with ceiling heights of 30 ft or more. Evaluate projected beam detectors, air sampling systems, and in-rack detection strategies as alternatives to ceiling-mounted spot detectors where stratification limits performance.</p>
          <p><strong className="text-foreground">Healthcare facilities:</strong> Design systems meeting NFPA 72 requirements for healthcare occupancies with attention to sleeping area notification (low-frequency 520 Hz audible appliances per NFPA 72 18.4.5.3), area of refuge communication, and elevator recall integration.</p>
          <p><strong className="text-foreground">Retrofit and renovation projects:</strong> Evaluate existing detection systems against current NFPA 72 requirements. Identify gaps in coverage, verify that existing device spacing meets current table values, and generate upgrade recommendations that bring the system into compliance.</p>
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
        <h2 className="text-2xl font-semibold">Design fire detection systems with precision</h2>
        <p className="mt-3 max-w-lg text-muted-foreground">Automated NFPA 72 compliance checks. Every spacing adjustment documented.</p>
        <div className="mt-6">
          <Button size="lg" asChild><a href={APP_URL} className="gap-2">Get started free <ArrowRight className="h-4 w-4" /></a></Button>
        </div>
      </section>
    </>
  )
}
