'use client'

import { useState } from 'react'

interface Field {
  key: string
  label: string
  hint: string
  default: number
}

const rsetFields: Field[] = [
  { key: 'detection', label: 'Detection time (s)', hint: 'Ignition until detector activation', default: 60 },
  { key: 'notification', label: 'Notification time (s)', hint: 'Detection until occupant alerting', default: 15 },
  { key: 'premovement', label: 'Pre-movement time (s)', hint: 'Recognition + response before moving', default: 120 },
  { key: 'movement', label: 'Movement time (s)', hint: 'Travel to exit / place of safety', default: 90 },
]

function formatSeconds(s: number): string {
  if (!isFinite(s)) return '—'
  const m = Math.floor(Math.abs(s) / 60)
  const sec = Math.round(Math.abs(s) % 60)
  const sign = s < 0 ? '−' : ''
  return m > 0 ? `${sign}${m}m ${sec}s` : `${sign}${sec}s`
}

export function AsetRsetCalculator() {
  const [aset, setAset] = useState(420)
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(rsetFields.map((f) => [f.key, f.default]))
  )

  const rset = rsetFields.reduce((sum, f) => sum + (values[f.key] || 0), 0)
  const margin = aset - rset
  const ratio = rset > 0 ? aset / rset : Infinity
  const pass = margin > 0

  const inputClass =
    'w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20'

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            RSET components
          </h2>
          <div className="mt-4 space-y-4">
            {rsetFields.map((f) => (
              <label key={f.key} className="block">
                <span className="text-sm font-medium text-foreground">{f.label}</span>
                <input
                  type="number"
                  min={0}
                  value={values[f.key]}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, [f.key]: Math.max(0, Number(e.target.value)) }))
                  }
                  className={`mt-1.5 ${inputClass}`}
                />
                <span className="mt-1 block text-xs text-muted-foreground">{f.hint}</span>
              </label>
            ))}
          </div>

          <h2 className="mt-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            ASET
          </h2>
          <label className="mt-4 block">
            <span className="text-sm font-medium text-foreground">Available Safe Egress Time (s)</span>
            <input
              type="number"
              min={0}
              value={aset}
              onChange={(e) => setAset(Math.max(0, Number(e.target.value)))}
              className={`mt-1.5 ${inputClass}`}
            />
            <span className="mt-1 block text-xs text-muted-foreground">
              From your tenability analysis (smoke layer, visibility, FED, temperature)
            </span>
          </label>
        </div>

        {/* Results */}
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Result
          </h2>
          <div
            className={`mt-4 rounded-xl border p-6 text-center ${
              pass
                ? 'border-emerald-500/30 bg-emerald-500/5'
                : 'border-destructive/30 bg-destructive/5'
            }`}
          >
            <p
              className={`text-sm font-bold uppercase tracking-widest ${
                pass ? 'text-emerald-600 dark:text-emerald-400' : 'text-destructive'
              }`}
            >
              {pass ? 'ASET exceeds RSET' : 'RSET exceeds ASET'}
            </p>
            <p className="mt-3 font-display text-5xl font-extrabold tracking-tight text-foreground">
              {formatSeconds(margin)}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">margin</p>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg border border-border bg-background p-3">
              <p className="text-lg font-bold text-foreground">{formatSeconds(rset)}</p>
              <p className="text-xs text-muted-foreground">RSET total</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <p className="text-lg font-bold text-foreground">{formatSeconds(aset)}</p>
              <p className="text-xs text-muted-foreground">ASET</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <p className="text-lg font-bold text-foreground">
                {isFinite(ratio) ? ratio.toFixed(2) : '—'}
              </p>
              <p className="text-xs text-muted-foreground">ASET / RSET</p>
            </div>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            A bare ASET &gt; RSET result is rarely sufficient: both sides carry
            uncertainty, so designs typically demonstrate an explicit margin of
            safety agreed with the AHJ. Many reviewers look for an ASET/RSET
            ratio well above 1.0 or a margin applied to RSET — document the
            basis either way.
          </p>
        </div>
      </div>
    </div>
  )
}
