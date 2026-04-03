import type { Metadata } from 'next'
import { Flame, Cpu, Eye, Grid3X3, MessageSquare, BarChart3, CheckCircle2 } from 'lucide-react'
import { ToolPageLayout } from '@/components/tool-page-layout'

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

const standards = [
  'NIST Special Publication 1019 â FDS User Guide',
  'NIST Special Publication 1018 â FDS Technical Reference Guide',
  'NUREG-1824 / EPRI 1011999 â V&V of Fire Models',
  'SFPE Handbook of Fire Protection Engineering, 5th Ed.',
  'NFPA 92 â Standard for Smoke Control Systems',
  'SFPE Guide to Performance-Based Fire Protection',
  'ASTM E1355 â Evaluating Predictive Capability of Fire Models',
  'ISO 16733 â Fire Safety Engineering â Design Fire Scenarios',
]

const useCases = [
  {
    label: 'Atrium smoke management',
    text: 'Model balcony spill plumes and axisymmetric plumes to validate NFPA 92 algebraic equations against CFD results. Compare smoke layer descent rates, exhaust volumes, and tenability conditions at occupied levels.',
  },
  {
    label: 'Warehouse storage fires',
    text: 'Simulate rack storage fires with specific commodity classifications and ceiling heights. Evaluate sprinkler activation times, ceiling jet temperatures, and smoke detector response to support NFPA 13 design justifications.',
  },
  {
    label: 'Tunnel ventilation',
    text: 'Assess longitudinal and transverse ventilation strategies for road and rail tunnels. Model critical velocity, backlayering, and visibility along the evacuation path to support NFPA 502 designs.',
  },
  {
    label: 'Performance-based design alternatives',
    text: 'When prescriptive code paths are impractical, use CFD modeling to demonstrate equivalent safety per IBC Section 104.11. FireSafe.AI helps you build the technical basis for code modification requests with defensible simulation data.',
  },
]

const overviewParagraphs = [
  'The Fire Dynamics Simulator (FDS) developed by NIST is the industry standard for computational fluid dynamics modeling of fire-driven flows. It solves the Navier-Stokes equations with an emphasis on smoke and heat transport, and it powers performance-based fire protection designs worldwide. But building correct FDS input files remains a bottleneck -- even experienced modelers spend hours debugging NAMELIST syntax, optimizing mesh resolution, and verifying geometry.',
  'FireSafe.AI removes that friction. Describe your scenario -- a warehouse with rack storage, an atrium with a balcony spill plume, a tunnel with longitudinal ventilation -- and receive a complete, standards-referenced FDS input file. The platform understands NFPA 92 smoke layer interfaces, SFPE Handbook fire growth correlations, and NIST Technical Reference Guide validation benchmarks, so the generated files reflect accepted engineering practice rather than arbitrary defaults.',
  'Every generated model includes automatic mesh quality assessment. The D*/delta-x metric quantifies whether your grid resolution is sufficient to resolve the fire plume, per the guidance in the FDS User Guide (Section 6.3). Under-resolved meshes are flagged with specific recommendations: refine the cells near the burner, add a finer mesh overlay, or adjust the heat release rate ramp to match your design fire curve.',
]

export default function FdsCfdPage() {
  return (
    <ToolPageLayout
      icon={Flame}
      title="FDS/CFD Fire Modeling Software"
      subtitle="Generate FDS input files from natural language descriptions, validate mesh resolution automatically, and visualize geometry in 3D -- all from your browser. Built for fire protection engineers who need to move faster from scenario definition to simulation results."
      overviewTitle="Computational Fire Dynamics, Simplified"
      overviewParagraphs={overviewParagraphs}
      features={features}
      standardsTitle="Standards & References"
      standardsIntro="FireSafe.AI&apos;s FDS module references the following standards and technical resources to ensure generated models meet accepted engineering practice:"
      standards={standards}
      useCases={useCases}
      faqs={faqs}
      ctaHeading="Ready to streamline your fire modeling workflow?"
      ctaSubtitle="Start generating FDS input files in minutes. Free plan includes mesh validation and 3D visualization."
    />
  )
}
