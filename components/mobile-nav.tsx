'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { tools } from '@/lib/tools'

export function MobileNav({ appUrl }: { appUrl: string }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the panel whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock body scroll while the panel is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto border-t border-border bg-background px-6 py-6"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Tools
          </p>
          <div className="mb-6 grid grid-cols-1 gap-0.5">
            {tools.map((item) => {
              const Icon = item.icon
              const inner = (
                <>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/7 ring-1 ring-primary/15">
                    <Icon className="h-3.5 w-3.5 text-primary" />
                  </span>
                  {item.name}
                </>
              )
              const className =
                'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
              return item.href.startsWith('http') ? (
                <a key={item.name} href={item.href} className={className}>
                  {inner}
                </a>
              ) : (
                <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className={className}>
                  {inner}
                </Link>
              )
            })}
            <Link
              href="/tools"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center gap-1.5 rounded-md px-3 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-muted"
            >
              View all tools
            </Link>
          </div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Company
          </p>
          <div className="mb-8 grid grid-cols-1 gap-0.5">
            {[
              { name: 'About', href: '/about' },
              { name: 'Mission', href: '/mission' },
              { name: 'Pricing', href: '/pricing' },
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={appUrl}
              className="inline-flex items-center justify-center rounded-[9px] border border-black/12 bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(212,82,10,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:bg-[#c04a09]"
            >
              Get started free
            </a>
            <a
              href={appUrl}
              className="inline-flex items-center justify-center rounded-[9px] border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-muted"
            >
              Sign in
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
