import type { Metadata } from 'next'
import { Droplets, Gauge, Layers, Target, Wrench, Database, CheckCircle2 } from 'lucide-react'
import { ToolPageLayout } from '@/components/tool-page-layout'

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

const useCases = [
  {
    label: 'Office and commercial buildings',
    text: 'Design Light Hazard and Ordinary Hazard Group 1 systems with standard spray sprinklers. Verify that the municipal water supply meets density/area demands without a fire pump, or size a pump if needed.',
  },
  {
    label: 'Warehouse and distribution centers',
    text: 'Evaluate ESFR vs. CMSA protection for rack storage with specific commodity classes. Determine whether in-rack sprinklers are required, size ceiling sprinklers for the storage height and clearance dimensions, and verify water supply adequacy for high-demand systems.',
  },
  {
    label: 'Residential sprinkler systems',
    text: 'Design NFPA 13D and 13R systems with multipurpose piping configurations. Calculate hydraulic demand for the most remote two-sprinkler design area and verify that the domestic water supply meets the reduced demand of residential sprinkler heads.',
  },
  {
    label: 'Standpipe and combined systems',
    text: 'Design Class I, II, and III standpipe systems per NFPA 14. Calculate hydraulic demand for the most remote standpipe connection, account for combined sprinkler/standpipe demand, and verify fire pump capacity for high-rise buildings requiring high-zone standpipe service.',
  },
]

const standards = [
  'NFPA 13 -- Sprinkler Systems',
  'NFPA 13D -- Sprinklers in 1- and 2-Family Dwellings',
  'NFPA 13R -- Sprinklers in Low-Rise Residential',
  'NFPA 14 -- Standpipe and Hose Systems',
  'NFPA 20 -- Stationary Pumps for Fire Protection',
  'NFPA 25 -- Inspection, Testing, and Maintenance',
  'IBC 903 -- Automatic Sprinkler Systems',
  'FM Global Data Sheets (DS 2-0, DS 3-26, DS 8-9)',
]

export default function SuppressionPage() {
  return (
    <ToolPageLayout
      icon={Droplets}
      title="Sprinkler Design & Suppression System Software"
      subtitle="Design automatic sprinkler systems with AI-assisted hydraulic calculations, hazard classification, K-factor selection, and water supply analysis. From Light Hazard offices to ESFR warehouse protection -- all per NFPA 13."
      ctaText="Start free"
      overviewTitle="NFPA 13 Sprinkler Design, End to End"
      overviewParagraphs={[
        'Automatic sprinkler systems remain the single most effective fire protection measure in buildings. When properly designed and maintained, they control or suppress fires before conditions become untenable for occupants or structurally damaging for the building. But "properly designed" means navigating NFPA 13\'s 500+ pages of requirements for hazard classification, sprinkler selection, spacing, hydraulic calculations, and water supply evaluation.',
        'FireSafe.AI handles the computational burden. You define the occupancy use, building dimensions, storage configuration (if applicable), and water supply data. The platform classifies the hazard, selects appropriate sprinkler types and K-factors, generates a layout meeting spacing and obstruction rules, and performs hydraulic calculations to verify that the water supply meets system demand with required safety margins.',
        'For storage occupancies, the design process is more involved. NFPA 13 Chapters 20-22 require commodity classification, storage arrangement analysis (rack, palletized, solid pile), and selection between CMSA, ESFR, and in-rack protection approaches. FireSafe.AI walks through this decision tree and provides design criteria specific to your storage configuration, including ceiling sprinkler spacing, design density, and in-rack sprinkler requirements where applicable.',
      ]}
      features={features}
      standardsTitle="Applicable Standards & References"
      standardsIntro="Suppression system design in FireSafe.AI references the following standards:"
      standards={standards}
      useCases={useCases}
      faqs={faqs}
      ctaHeading="Design sprinkler systems with confidence"
      ctaSubtitle="From hazard classification to hydraulic calculations. Every design parameter traced to NFPA 13."
      ctaButtonText="Get started free"
    />
  )
}
