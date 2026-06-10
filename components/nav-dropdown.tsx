'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { tools } from '@/lib/tools'

export function ToolsDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
      >
        Tools
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1 w-72 rounded-xl border border-border bg-background shadow-lg shadow-black/5 py-2 z-50">
          {tools.map((tool) => {
            const Icon = tool.icon
            const isExternal = tool.href.startsWith('http')
            const className =
              'flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors'
            const inner = (
              <>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/7 ring-1 ring-primary/15">
                  <Icon className="h-3.5 w-3.5 text-primary" />
                </span>
                {tool.name}
              </>
            )
            if (isExternal) {
              return (
                <a key={tool.name} href={tool.href} onClick={() => setOpen(false)} className={className}>
                  {inner}
                </a>
              )
            }
            return (
              <Link key={tool.name} href={tool.href} onClick={() => setOpen(false)} className={className}>
                {inner}
              </Link>
            )
          })}
          <div className="mt-2 border-t border-border pt-2">
            <Link
              href="/tools"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-primary hover:bg-muted transition-colors"
            >
              View all tools <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/calculators"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              Free calculators
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
