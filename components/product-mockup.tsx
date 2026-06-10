import { Search, Sparkles, ExternalLink } from 'lucide-react'

/**
 * Stylized in-browser preview of the code search workflow.
 * Pure JSX/tokens (no raster image) so it follows the theme and dark mode.
 */
export function ProductMockup() {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card shadow-[0_8px_40px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex-1 rounded-md bg-muted px-3 py-1 text-center text-[11px] text-muted-foreground">
          app.firesafe.ai/code-search
        </div>
      </div>

      {/* App body */}
      <div className="p-5 sm:p-6">
        {/* Query */}
        <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="truncate text-sm text-foreground">
            What is the maximum travel distance for a sprinklered Group B occupancy?
          </p>
        </div>

        {/* Answer card */}
        <div className="mt-4 rounded-xl border border-border bg-background p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-2.5 py-0.5 text-[11px] font-semibold text-primary ring-1 ring-primary/20">
              <Sparkles className="h-3 w-3" /> Answer
            </span>
            <span className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
              IBC 2021 &sect; 1017.2
            </span>
            <span className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
              Table 1017.2
            </span>
            <span className="ml-auto rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
              High confidence
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            <span className="font-semibold">300 feet</span> with an approved automatic
            sprinkler system per Table 1017.2 (Group B, sprinklered). Without
            sprinkler protection the limit is 200 feet.
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
            Exception: travel distance may increase per &sect; 1017.2.2 where the
            exit access stairway is open per &sect; 1019.3. Corridor width serving
            this path is governed by &sect; 1020.2.
          </p>
          <div className="mt-3 flex items-center gap-4 border-t border-border pt-3 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <ExternalLink className="h-3 w-3" /> View clause in context
            </span>
            <span>Cross-refs: NFPA 101 &sect; 7.6 &middot; IFC &sect; 1017</span>
          </div>
        </div>

        {/* Trace line */}
        <p className="mt-4 text-center font-mono text-[11px] text-muted-foreground">
          query &rarr; IBC 2021 (adopted edition: your AHJ) &rarr; cited answer in 2.1s
        </p>
      </div>
    </div>
  )
}
