import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — FireSafe.AI',
  description:
    'How FireSafe.AI collects, uses, and protects information on this website.',
  robots: { index: true, follow: true },
}

const sections = [
  {
    heading: 'What we collect',
    paragraphs: [
      'This website collects limited information automatically: standard server logs (IP address, browser type, pages visited) and, where analytics is enabled, usage data via Google Analytics (approximate location, device type, pages viewed, and interaction events). Analytics data is collected using cookies or similar identifiers.',
      'If you contact us by email, we receive the information you choose to send — your email address and the contents of your message.',
      'The FireSafe.AI application (app.firesafe.ai) collects additional information related to your account and use of the tools; this policy covers the marketing website, and account-related data practices are described to you when you create an account.',
    ],
  },
  {
    heading: 'How we use it',
    paragraphs: [
      'We use website data to understand how the site is used, improve content and performance, respond to inquiries, and maintain security. We do not sell personal information. We do not use your inquiries or website activity to train AI models.',
    ],
  },
  {
    heading: 'Cookies and analytics',
    paragraphs: [
      'Google Analytics sets cookies to distinguish visitors and measure usage. You can block cookies in your browser settings or use Google’s opt-out tools; the website works without them. We do not run advertising trackers.',
    ],
  },
  {
    heading: 'Sharing',
    paragraphs: [
      'We share data only with service providers that operate the site on our behalf (such as hosting and analytics providers), when required by law, or in connection with a business transaction such as a merger or acquisition. Service providers are bound to use data only to provide their services.',
    ],
  },
  {
    heading: 'Retention and security',
    paragraphs: [
      'Server logs and analytics data are retained for as long as needed for the purposes above and then deleted or aggregated. Data is encrypted in transit. No method of transmission or storage is perfectly secure, but we take reasonable measures appropriate to the nature of the data.',
    ],
  },
  {
    heading: 'Your choices and rights',
    paragraphs: [
      'Depending on where you live, you may have rights to access, correct, or delete personal information we hold about you. To exercise these rights, or to ask anything about this policy, email hello@firesafe.ai and we will respond promptly.',
    ],
  },
  {
    heading: 'Changes',
    paragraphs: [
      'We may update this policy as the site evolves. Material changes will be reflected by the effective date below, and significant changes will be noted on this page.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-28">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Effective June 10, 2026</p>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        FireSafe.AI (&ldquo;we&rdquo;) operates firesafe.ai. This policy
        describes what information this website collects, how we use it, and
        the choices you have.
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
