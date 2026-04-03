import type { Metadata } from 'next'
import { Wind, Layers, Fan, Building2, Gauge, FlameKindling, CheckCircle2 } from 'lucide-react'
import { ToolPageLayout, type ToolFeature, type ToolFaq } from '@/components/tool-page-layout'

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

const features: ToolFeature[] = [
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

const faqs: ToolFaq[] = [
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

const overviewParagraphs = [
  'Smoke control design sits at the intersection of fire dynamics, HVAC engineering, and building code compliance. Whether you are designing a mechanical exhaust system for a 40-meter atrium, pressurizing a stairwell in a 50-story high-rise, or evaluating natural ventilation for a covered mall, the analysis requires careful selection of plume correlations, conservative fire size assumptions, and verification against multiple performance criteria.',
  'FireSafe.AI structures that workflow. You define the space geometry, ceiling height, design fire parameters (steady-state or time-dependent), and ambient conditions. The platform runs both algebraic steady-state calculations and transient zone model analyses per NFPA 92, then presents results as smoke layer position vs. time curves, required exhaust rates, and tenability assessments at occupied elevations.',
  'For projects where the AHJ requires CFD validation -- or where complex geometry makes algebraic methods unreliable -- the platform generates FDS input files directly from your smoke control model parameters. This bridges the gap between screening-level analysis and detailed performance-based design, preserving your design fire assumptions and geometry definitions throughout the workflow.',
]

const standards = [
  'NFPA 92 -- Standard for Smoke Control Systems',
  'NFPA 204 -- Guide for Smoke and Heat Venting',
  'IBC Ch. 9 -- Fire Protection and Life Safety',
  'IBC 403 -- High-Rise Buildings',
  'IBC 404 -- Atriums',
  'SFPE Handbook, Ch. 54 -- Smoke Management',
  'ASHRAE Handbook -- HVAC Applications, Ch. 53',
  'NIST FDS Technical Reference Guide',
]

const useCases = [
  {
    label: 'Multi-story atrium exhaust design',
    text: 'Calculate smoke production rates for various plume types, determine required exhaust capacities, verify plug-holing limits, and size make-up air inlets to maintain acceptable velocities at the smoke layer interface.',
  },
  {
    label: 'Stairwell pressurization for high-rises',
    text: 'Model pressure differentials across closed and open doors, account for stack effect under winter and summer conditions, and verify compliance with IBC door-opening force requirements (30 lbf per 1010.1.3).',
  },
  {
    label: 'Covered mall smoke management',
    text: 'Evaluate natural and mechanical venting strategies for covered pedestrian malls per IBC 402. Compare steady-state smoke layer positions against required clear heights for occupant evacuation.',
  },
  {
    label: 'Underground parking garage ventilation',
    text: 'Assess CO and smoke dilution strategies for enclosed parking structures. Evaluate jet fan versus ducted exhaust approaches and verify compliance with IMC ventilation requirements.',
  },
]

export default function SmokeControlPage() {
  return (
    <ToolPageLayout
      icon={Wind}
      title="Smoke Control Analysis Software"
      subtitle="Design and validate smoke control systems per NFPA 92. From atrium smoke filling calculations to stairwell pressurization and mechanical exhaust sizing -- with integrated FDS modeling when algebraic methods reach their limits."
      overviewTitle="NFPA 92 Smoke Control Design, From First Principles"
      overviewParagraphs={overviewParagraphs}
      features={features}
      standardsTitle="Applicable Standards & References"
      standardsIntro="Smoke control analysis in FireSafe.AI references the following codes and technical resources:"
      standards={standards}
      useCases={useCases}
      faqs={faqs}
      ctaHeading="Design smoke control systems with confidence"
      ctaSubtitle="From NFPA 92 algebraic calculations to FDS-based CFD validation. Start your first analysis in minutes."
    />
  )
}
