import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { Geist, Geist_Mono } from 'next/font/google'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { NavDropdown } from '@/components/nav-dropdown'
import { MobileNav } from '@/components/mobile-nav'
import { SiteFooter } from '@/components/site-footer'
import { toolNavLinks } from '@/lib/tools'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s \u2014 FireSafe.AI',
    default: 'FireSafe.AI \u2014 AI Tools for Fire Protection Engineering',
  },
  description:
    'AI-powered fire protection engineering tools: FDS/CFD modeling, smoke control analysis, egress calculations, code consulting, sprinkler design, and more. Built for PEs on NFPA, IBC, and IFC standards.',
  keywords: [
    'fire protection engineering software',
    'AI fire protection',
    'FDS modeling software',
    'smoke control analysis',
    'ASET RSET calculator',
    'NFPA 13 sprinkler design',
    'fire code comparison',
  ],
  metadataBase: new URL('https://firesafe.ai'),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'FireSafe.AI',
    title: 'FireSafe.AI \u2014 AI Tools for Fire Protection Engineering',
    description:
      'AI-powered fire protection engineering tools built on NFPA, IBC, and IFC standards.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FireSafe.AI \u2014 AI-Powered Fire Protection Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FireSafe.AI \u2014 AI Tools for Fire Protection Engineering',
    description:
      'AI-powered fire protection engineering tools built on NFPA, IBC, and IFC standards.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FireSafe.AI',
    url: 'https://firesafe.ai',
    logo: 'https://firesafe.ai/logo-mark.svg',
    description:
      'AI-powered fire protection engineering tools grounded in NFPA, IBC, and IFC standards.',
  }

  return (
    <html lang="en">
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to content
        </a>
        <div className="min-h-screen bg-background">
          <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5">
                <Image
                  src="/logo-mark.svg"
                  alt="FireSafe.AI logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="text-sm font-bold tracking-tight">FireSafe<span className="text-primary">.AI</span></span>
              </Link>

              {/* Center nav links */}
              <div className="hidden md:flex items-center gap-1">
                <NavDropdown label="Tools" items={toolNavLinks} />
                <Link href="/about" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
                  About
                </Link>
                <Link href="/mission" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
                  Mission
                </Link>
                <Link href="/pricing" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
                  Pricing
                </Link>
                <Link href="/contact" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
                  Contact
                </Link>
              </div>

              {/* Right-side CTAs */}
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-3">
                  <Button variant="ghost" size="sm" asChild><a href={APP_URL}>Sign in</a></Button>
                  <Button size="sm" asChild><a href={APP_URL}>Get started</a></Button>
                </div>
                <MobileNav tools={toolNavLinks} appUrl={APP_URL} />
              </div>
            </div>
          </nav>
          <div id="main-content" className="pt-16">
            {children}
          </div>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
