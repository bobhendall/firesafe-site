import type { Metadata } from 'next'
import { Wind, ArrowRight, Layers, Fan, Building2, Gauge, FlameKindling, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'Smoke Control Analysis Software | FireSafe.AI',
  description:
    'NFPA 92 smoke control design tools -- atrium smoke filling, mechanical exhaust, stairwell pressurization, and FDS integration for performance-based analysis.',
  openGraph: {
    title: 'Smoke Control Analysis Software | FireSafe.AI',
    description:
      'NFPA 92 smoke control design tools -- atrium smoke filling, mechanical exhaust, stairwell pressurization, and FDS integration for performance-based analysis.',
  },
}

const features = [
  {
    icon: Layers,
    title: 'Atrium Smoke Filling Analysis',
    description:
      'Calculate smoke layer descent using both algebraic steady-state equations and transient zone model approaches per NFPA 92. Compare axisymmetric, balcony spill, and window plume correlations to select conservative design parameters.',
  },
  {
    icon: Fan,
    title: 'Mechanical Exhaust Design',
    description:
      'Size exhaust fans based on smoke production rate, design clear height, and ambient conditions. Account for plug-holing limits, minimum exhaust point separation, and volumetric flow adjustments for temperature.',
  },
  {
    icon: Building2,
    title: 'Stairwell Pressurization',
    description:
      'Design stairwell pressurization systems per NFPA 92 Section 4.6. Calculate required pressure differentials, supply air volumes accounting for door leakage and stack effect, and verify compliance with door-opening force limits per IBC 1010.1.3.',
  },
  {
    icon: Gauge,
    title: 'Natural Ventilation Analysis',
    description:
      'Evaluate natural smoke venting strategies including roof vents and operable curtain wall panels. Calculate vent areas using buoyancy-driven flow equations with corrections for wind effects and inlet area ratios.',
  },
  {
    icon: FlameKindling,
    title: 'FDS Integration',
    description:
      'When algebraic methods reach their limits, generate FDS input files directly from your smoke control model. Compare zone model predictions against CFD results to build confidence in your design or identify where further refinement is needed.',
  },
  {
    icon: CheckCircle2,
    title: 'Tenability Assessment',
    description:
      'Evaluate tenability conditions at occupied levels using SFPE Handbook criteria for visibility (10m/3m), temperature (60 deg C), CO concentration (1400 ppm), and radiant heat flux (2.5 kW/m2). Generate tenability timelines for ASET determination.',
  },
]

const faqs = [
  {
    question: 'What plume correlations does FireSafe.AI support?',
    answer:
      'The platform implements the primary plume correlations from NFPA 92: axisymmetric plumes (Heskestad, Zukoski), balcony spill plumes (Law, Thomas), and window plumes. Each correlation includes applicability limits and the platform warns you when input parameters fall outside validated ranges -- for example, when a balcony spill plume correlation is applied to a geometry where the spill width exceeds the tested range.',
  },
  {
    question: 'How are make-up air requirements calculated?',
    answer:
      'Make-up air supply must be sufficient to replace exhausted gases without exceeding the velocity threshold at the smoke layer interface. Per NFPA 92 Section 4.5, make-up air velocity at the smoke layer boundary should not exceed 1.02 m/s (200 fpm). FireSafe.AI calculates the required make-up air flow rate and verifies that inlet sizing maintains acceptable velocities, accounting for the number and location of supply points.',
  },
  {
    question: 'Can I model atria with complex geometries?',
    answer:
      'The algebraic tools handle rectangular and simple multi-level atria with defined communicating spaces. For geometries with irregular cross-sections, partial floors, or multiple interconnected volumes, the platform recommends transitioning to CFD analysis and can generate a corresponding FDS input file pre-configured with the geometry and design fire parameters from your zone model.',
  },
  {
    question: 'How does stack effect impact stairwell pressurization?',
    answer:
      'Stack effect creates pressure differences across the building envelope driven by indoor-outdoor temperature differential and building height. In winter conditions, stack effect can augment or oppose the pressurization system depending on the stairwell location relative to the neutral pressure plane. FireSafe.AI models both normal and reverse stack effect scenarios and sizes the supply air system for worst-case conditions.',
  },
  {
    question: 'What standards does this tool reference?',
    answer:
      'The smoke control module is built on NFPA 92 (Standard for Smoke Control Systems), with supporting references to NFPA 204 (Guide for Smoke and Heat Venting), IBC Chapter 9 (Fire Protection and Life Safety Systems), SFPE Handbook Chapter 54 (Smoke Management in Covered Malls and Atria), and the ASHRAE Handbook -- HVAC Applications Chapter 53 (Fire and Smoke Management).',
  },
]

export default function SmokeControlPage() {
  return (
    <>
      <section className="flex flex-col items-center px-6 pt-20 pb-16 text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
          <Wind className="h-7 w-7 text-primary" />
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Smoke Control Analysis Software
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Design and validate smoke control systems per NFPA 92. From atrium smoke filling calculations to stairwell pressurization and mechanical exhaust sizing -- with integrated FDS modeling when algebraic methods reach their limits.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href={APP_URL} className="gap-2">
              Start free <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">NFPA 92 Smoke Control Design, From First Principles</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Smoke control design sits at the intersection of fire dynamics, HVAC engineering, and building code compliance. Whether you are designing a mechanical exhaust system for a 40-meter atrium, pressurizing a stairwell in a 50-story high-rise, or evaluating natural ventilation for a covered mall, the analysis requires careful selection of plume correlations, conservative fire size assumptions, and verification against multiple performance criteria.
          </p>
          <p>
            FireSafe.AI structures that workflow. You define the space geometry, ceiling height, design fire parameters (steady-state or time-dependent), and ambient conditions. The platform runs both algebraic steady-state calculations and transient zone model analyses per NFPA 92, then presents results as smoke layer position vs. time curves, required exhaust rates, and tenability assessments at occupied elevations.
          </p>
          <p>
            For projects where the AHJ requires CFD validation -- or where complex geometry makes algebraic methods unreliable -- the platform generates FDS input files directly from your smoke control model parameters. This bridges the gap between screening-level analysis and detailed performance-based design, preserving your design fire assumptions and geometry definitions throughout the workflow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold">Key Capabilities</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Applicable Standards & References</h2>
        <p className="mb-6 text-muted-foreground">
          Smoke control analysis in FireSafe.AI references the following codes and technical resources:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'NFPA 92 -- Standard for Smoke Control Systems',
            'NFPA 204 -- Guide for Smoke and Heat Venting',
            'IBC Ch. 9 -- Fire Protection and Life Safety',
            'IBC 403 -- High-Rise Buildings',
            'IBC 404 -- Atriums',
            'SFPE Handbook, Ch. 54 -- Smoke Management',
            'ASHRAE Handbook -- HVAC Applications, Ch. 53',
            'NIST FDS Technical Reference Guide',
          ].map((standard) => (
            <div key={standard} className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground">
              {standard}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Common Use Cases</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Multi-story atrium exhaust design:</strong> Calculate smoke production rates for various plume types, determine required exhaust capacities, verify plug-holing limits, and size make-up air inlets to maintain acceptable velocities at the smoke layer interface.
          </p>
          <p>
            <strong className="text-foreground">Stairwell pressurization for high-rises:</strong> Model pressure differentials across closed and open doors, account for stack effect under winter and summer conditions, and verify compliance with IBC door-opening force requirements (30 lbf per 1010.1.3).
          </p>
          <p>
            <strong className="text-foreground">Covered mall smoke management:</strong> Evaluate natural and mechanical venting strategies for covered pedestrian malls per IBC 402. Compare steady-state smoke layer positions against required clear heights for occupant evacuation.
          </p>
          <p>
            <strong className="text-foreground">Underground parking garage ventilation:</strong> Assess CO and smoke dilution strategies for enclosed parking structures. Evaluate jet fan versus ducted exhaust approaches and verify compliance with IMC ventilation requirements.
          </p>
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
        <h2 className="text-2xl font-semibold">Design smoke control systems with confidence</h2>
        <p className="mt-3 max-w-lg text-muted-foreground">
          From NFPA 92 algebraic calculations to FDS-based CFD validation. Start your first analysis in minutes.
        </p>
        <div className="mt-6">
          <Button size="lg" asChild>
            <a href={APP_URL} className="gap-2">
              Get started free <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
