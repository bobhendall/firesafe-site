import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use — FireSafe.AI',
  description: 'Terms of use for the FireSafe.AI website.',
  robots: { index: true, follow: true },
}

const sections = [
  {
    heading: 'Use of this website',
    paragraphs: [
      'You may use this website for lawful purposes related to evaluating and learning about FireSafe.AI. You may not attempt to disrupt the site, probe or breach its security, scrape it at abusive volume, or misrepresent your affiliation with us.',
      'Use of the FireSafe.AI application (app.firesafe.ai) is governed by the terms presented when you create an account, which control in the event of any conflict with these website terms.',
    ],
  },
  {
    heading: 'Informational content — not engineering advice',
    paragraphs: [
      'Content on this website — including articles, guides, and the free calculators — is provided for general information and study. It is AI-assisted and human-reviewed, but it does not constitute professional engineering advice, formal code interpretations, or compliance determinations.',
      'The free calculators implement published correlations with stated validity limits. Outputs are reference values only. Licensed professionals must apply their own expertise and independent judgment before relying on any output, the engineer of record is responsible for verifying all results against applicable codes and standards, and the Authority Having Jurisdiction retains final authority on all compliance matters.',
    ],
  },
  {
    heading: 'Intellectual property',
    paragraphs: [
      'The website, its design, and its content are owned by FireSafe.AI or its licensors. Code and standard designations referenced on this site (NFPA, IBC, IFC, UFC, and others) are the property of their respective publishers; this site references them for identification and does not reproduce their text.',
    ],
  },
  {
    heading: 'Disclaimer of warranties and limitation of liability',
    paragraphs: [
      'This website is provided "as is" without warranties of any kind, express or implied. To the maximum extent permitted by law, FireSafe.AI will not be liable for any indirect, incidental, consequential, or special damages arising from your use of this website or reliance on its content.',
    ],
  },
  {
    heading: 'Changes and contact',
    paragraphs: [
      'We may update these terms from time to time; the effective date below reflects the latest revision. Continued use of the site after changes constitutes acceptance. Questions: hello@firesafe.ai.',
    ],
  },
]

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-28">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Terms of Use
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Effective June 10, 2026</p>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        These terms govern your use of the firesafe.ai website. By using the
        site, you agree to them.
      </p>
      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-xl font-bold tracking-tight text-foreground">{s.heading}</h2>
            <div className="mt-3 space-y-3">
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-muted-foreground">{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
