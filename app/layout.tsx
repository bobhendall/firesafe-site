import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { Geist, Geist_Mono } from 'next/font/google'
import { Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s — FireSafe.AI',
    default: 'FireSafe.AI — AI Tools for Fire Protection Engineering',
  },
  description:
    'AI-powered fire protection engineering tools: FDS/CFD modeling, smoke control analysis, egress calculations, code consulting, sprinkler design, and more. Built for CFPEs on NFPA, IBC, and IFC standards.',
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
  openGraph: {
    type: 'website',
    siteName: 'FireSafe.AI',
    title: 'FireSafe.AI — AI Tools for Fire Protection Engineering',
    description:
      'AI-powered fire protection engineering tools built on NFPA, IBC, and IFC standards.',
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
  return (
    <html lang="en" className="dark">
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
        <div className="min-h-screen bg-background">
          <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                  <Flame className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-semibold">FireSafe<span className="text-primary">.AI</span></span>
              </Link>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" asChild><a href={APP_URL}>Sign in</a></Button>
                <Button size="sm" asChild><a href={APP_URL}>Get started</a></Button>
              </div>
            </div>
          </nav>
          <div className="pt-14">
            {children}
          </div>
          <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground">
            <p>FireSafe.AI outputs are for reference only and do not constitute engineering advice. The engineer of record is responsible for verifying all outputs against applicable codes. AHJ has final authority.</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} FireSafe.AI</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
