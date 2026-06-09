import Link from 'next/link'
import type { ToolDefinition } from '@/lib/tools'

export function ToolCard({ tool }: { tool: ToolDefinition }) {
  const Icon = tool.icon
  const isExternal = tool.href.startsWith('http')
  const Wrapper = isExternal ? 'a' : Link

  return (
    <Wrapper
      href={tool.href}
      className="group block rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_2px_12px_rgba(212,82,10,0.06),0_1px_2px_rgba(0,0,0,0.04)]"
    >
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/7 ring-1 ring-primary/15">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <h3 className="mb-1 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">{tool.name}</h3>
      <p className="text-[13px] leading-relaxed text-muted-foreground">{tool.description}</p>
    </Wrapper>
  )
}
