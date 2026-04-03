import {
  Flame,
  GitCompare,
  Warehouse,
  FlaskConical,
  GraduationCap,
  Wind,
  DoorOpen,
  Bell,
  Droplets,
  BookOpen,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

export interface ToolDefinition {
  icon: LucideIcon
  name: string
  href: string
  description: string
}

export const tools: ToolDefinition[] = [
  {
    icon: Flame,
    name: 'FDS/CFD Modeling',
    href: '/tools/fds-cfd',
    description:
      'Describe a fire scenario in English, get a syntactically correct FDS input file. Mesh validation via D*/Î´x. 3D preview before you run the solver.',
  },
  {
    icon: Wind,
    name: 'Smoke Control',
    href: '/tools/smoke-control',
    description:
      'Atrium smoke filling, mechanical exhaust sizing, stairwell pressurization. Calculations per NFPA 92 with assumptions you can trace.',
  },
  {
    icon: DoorOpen,
    name: 'Egress Analysis',
    href: '/tools/egress',
    description:
      'ASET/RSET framework. Occupant load calcs, travel distance checks, evacuation modeling. The math AHJs actually ask for.',
  },
  {
    icon: GitCompare,
    name: 'CodeCompare',
    href: APP_URL,
    description:
      'Diff fire and building codes across editions and jurisdictions. See exactly what changed between IBC 2018 and 2021, line by line.',
  },
  {
    icon: BookOpen,
    name: 'Code Consulting',
    href: '/tools/code-consulting',
    description:
      'Natural language search across IBC, IFC, and NFPA. Ask a question, get the clause â with cross-references.',
  },
  {
    icon: Bell,
    name: 'Fire Detection',
    href: '/tools/fire-detection',
    description:
      "Detector spacing and notification appliance placement per NFPA 72. Compliance checks that catch what you'd miss at 2am.",
  },
  {
    icon: Droplets,
    name: 'Suppression Systems',
    href: '/tools/suppression',
    description:
      'Sprinkler layout, hydraulic calcs, hazard classification per NFPA 13. Pipe schedules without the spreadsheet archaeology.',
  },
  {
    icon: FlaskConical,
    name: 'HazMat & Risk',
    href: '/tools/hazmat-risk',
    description:
      'MAQ calculations, control area analysis, quantitative risk assessment. When the AHJ wants numbers, not narratives.',
  },
  {
    icon: Warehouse,
    name: 'StoragePro',
    href: '/tools/storagepro',
    description:
      'NFPA 13 & IFC storage layout. Commodity classification â ceiling height â sprinkler design. One flow.',
  },
  {
    icon: GraduationCap,
    name: 'PE Tutor',
    href: '/tools/pe-tutor',
    description:
      "NICET and PE exam prep. AI practice problems, code walkthroughs, flashcards. Study the hard parts until they're not.",
  },
]

/** Nav-only subset: name + href for the dropdown menu */
export const toolNavLinks = tools.map(({ name, href }) => ({ name, href }))
