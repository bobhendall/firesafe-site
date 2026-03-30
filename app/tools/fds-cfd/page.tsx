import type { Metadata } from 'next'
import { Flame, ArrowRight, Cpu, Eye, Grid3X3, MessageSquare, BarChart3, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export const metadata: Metadata = {
  title: 'FDS/CFD Fire Modeling Software | FireSafe.AI',
  description:
    'AI-powered FDS input file generation, mesh validation, and 3D visualization. Streamline your computational fire dynamics workflow with natural language to FDS conversion.',
  openGraph: {
    title: 'FDS/CFD Fire Modeling Software | FireSafe.AI',
    description:
      'AI-powered FDS input file generation, mesh validation, and 3D visualization. Streamline your computational fire dynamics workflow with natural language to FDS conversion.',
  },
}

const features = [
  {
    icon: MessageSquare,
    title: 'Natural Language to FDS Input',
    description:
      'Describe your fire scenario in plain English and generate syntactically correct FDS input files. Specify geometry, materials, ventilation, and output quantities without memorizing NAMELIST groups.',
  },
  {
    icon: Grid3X3,
    title: 'Mesh Validation & Optimization',
    description:
      'Automatic D*/delta-x ratio analysis ensures your mesh resolution meets NIST guidelines for plume-resolving simulations. Get cell count estimates and multi-mesh partitioning recommendations.',
  },
  {
    icon: Eye,
    title: '3D Geometry Visualization',
    description:
      'Inspect your FDS geometry in an interactive Three.js viewer before submitting to the solver. Verify obstructions, vents, devices, and boundary conditions in real time.',
  },
  {
    icon: Cpu,
    title: 'Simulation Management',
    description:
      'Track running simulations, monitor convergence, and receive notifications on completion. Compare results across parameter studies without leaving the platform.',
  },
  {
    icon: BarChart3,
    title: 'Results Visualization',
    description:
      'Plot HRR curves, temperature slices, visibility contours, and device outputs. Export publication-ready figures or feed results directly into tenability and egress analyses.',
  },
  {
    icon: CheckCircle2,
    title: 'Standards Compliance Checks',
    description:
      'Built-in references to NIST FDS Technical Reference Guide, SFPE Handbook correlations, and NUREG-1824 V&V datasets help you justify modeling assumptions in your report.',
  },
]

const faqs = [
  {
    question: 'How does natural language to FDS conversion work?',
    answer:
      'You describe the fire scenario, room geometry, material properties, and desired outputs in plain language. FireSafe.AI parses your description and generates a complete FDS input file with proper NAMELIST syntax, including MESH, OBST, SURF, REAC, DEVC, and SLCF records. You can then review and edit the generated file before running the simulation.',
  },
  {
    question: 'What mesh resolution does FireSafe.AI recommend?',
    answer:
      'The platform calculates D* (the characteristic fire diameter) based on your specified heat release rate and evaluates the D*/delta-x ratio. For most design fire scenarios, NIST recommends a ratio between 4 and 16. FireSafe.AI flags under-resolved meshes and suggests cell sizes that balance accuracy against computational cost.',
  },
  {
    question: 'Can I import existing FDS input files?',
    answer:
      'Yes. You can paste or upload an existing .fds file and the platform will parse it into editable components. This is useful for validating legacy models, running parameter studies on existing geometries, or migrating models from other pre-processors.',
  },
  {
    question: 'How does this compare to PyroSim?',
    answer:
      'PyroSim is a mature GUI-based pre-processor for FDS. FireSafe.AI takes a different approach: instead of manual point-and-click geometry creation, you describe scenarios in natural language and iterate faster through AI-assisted editing. The 3D viewer provides immediate visual feedback, and mesh validation is automated rather than manual. Both tools generate standard FDS input files.',
  },
  {
    question: 'Which FDS version is supported?',
    answer:
      'FireSafe.AI generates input files compatible with FDS 6.8+ and tracks syntax changes across versions. The platform references the NIST FDS User Guide and Technical Reference Guide to ensure generated input files use current NAMELIST conventions.',
  },
]

export default function FdsCfdPage() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center px-6 pt-20 pb-16 text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
          <Flame className="h-7 w-7 text-primary" />
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          FDS/CFD Fire Modeling Software
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Generate FDS input files from natural language descriptions, validate mesh resolution automatically, and visualize geometry in 3D -- all from your browser. Built for fire protection engineers who need to move faster from scenario definition to simulation results.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href={APP_URL} className="gap-2">
              Start free <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Computational Fire Dynamics, Simplified</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            The Fire Dynamics Simulator (FDS) developed by NIST is the industry standard for computational fluid dynamics modeling of fire-driven flows. It solves the Navier-Stokes equations with an emphasis on smoke and heat transport, and it powers performance-based fire protection designs worldwide. But building correct FDS input files remains a bottleneck -- even experienced modelers spend hours debugging NAMELIST syntax, optimizing mesh resolution, and verifying geometry.
          </p>
          <p>
            FireSafe.AI removes that friction. Describe your scenario -- a warehouse with rack storage, an atrium with a balcony spill plume, a tunnel with longitudinal ventilation -- and receive a complete, standards-referenced FDS input file. The platform understands NFPA 92 smoke layer interfaces, SFPE Handbook fire growth correlations, and NIST Technical Reference Guide validation benchmarks, so the generated files reflect accepted engineering practice rather than arbitrary defaults.
          </p>
          <p>
            Every generated model includes automatic mesh quality assessment. The D*/delta-x metric quantifies whether your grid resolution is sufficient to resolve the fire plume, per the guidance in the FDS User Guide (Section 6.3). Under-resolved meshes are flagged with specific recommendations: refine the cells near the burner, add a finer mesh overlay, or adjust the heat release rate ramp to match your design fire curve.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold">Key Capabilities</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Standards */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Standards & References</h2>
        <p className="mb-6 text-muted-foreground">
          FireSafe.AI&apos;s FDS module references the following standards and technical resources to ensure generated models meet accepted engineering practice:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'NIST Special Publication 1019 — FDS User Guide',
            'NIST Special Publication 1018 — FDS Technical Reference Guide',
            'NUREG-1824 / EPRI 1011999 — V&V of Fire Models',
            'SFPE Handbook of Fire Protection Engineering, 5th Ed.',
            'NFPA 92 — Standard for Smoke Control Systems',
            'SFPE Guide to Performance-Based Fire Protection',
            'ASTM E1355 — Evaluating Predictive Capability of Fire Models',
            'ISO 16733 — Fire Safety Engineering — Design Fire Scenarios',
          ].map((standard) => (
            <div
              key={standard}
              className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground"
            >
              {standard}
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-4 text-2xl font-semibold">Common Use Cases</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Atrium smoke management:</strong> Model balcony spill plumes and axisymmetric plumes to validate NFPA 92 algebraic equations against CFD results. Compare smoke layer descent rates, exhaust volumes, and tenability conditions at occupied levels.
          </p>
          <p>
            <strong className="text-foreground">Warehouse storage fires:</strong> Simulate rack storage fires with specific commodity classifications and ceiling heights. Evaluate sprinkler activation times, ceiling jet temperatures, and smoke detector response to support NFPA 13 design justifications.
          </p>
          <p>
            <strong className="text-foreground">Tunnel ventilation:</strong> Assess longitudinal and transverse ventilation strategies for road and rail tunnels. Model critical velocity, backlayering, and visibility along the evacuation path to support NFPA 502 designs.
          </p>
          <p>
            <strong className="text-foreground">Performance-based design alternatives:</strong> When prescriptive code paths are impractical, use CFD modeling to demonstrate equivalent safety per IBC Section 104.11. FireSafe.AI helps you build the technical basis for code modification requests with defensible simulation data.
          </p>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="flex flex-col items-center border-t border-border px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold">Ready to streamline your fire modeling workflow?</h2>
        <p className="mt-3 max-w-lg text-muted-foreground">
          Start generating FDS input files in minutes. Free plan includes mesh validation and 3D visualization.
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
