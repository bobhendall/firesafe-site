'use client'

import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'

/**
 * NFPA 92 steady-fire smoke filling correlation (axisymmetric plume,
 * uniform cross-section, no smoke exhaust):
 *   z/H = 1.11 - 0.28 * ln[ (t * Q^(1/3) / H^(4/3)) / (A / H^2) ]
 * Fit range: A/H^2 from 0.9 to 14, z/H >= 0.2.
 */
function layerHeight(t: number, Q: number, H: number, A: number): number {
  if (t <= 0 || Q <= 0 || H <= 0 || A <= 0) return H
  const ratio = (t * Math.cbrt(Q)) / Math.pow(H, 4 / 3) / (A / (H * H))
  if (ratio <= 0) return H
  const zOverH = 1.11 - 0.28 * Math.log(ratio)
  return Math.min(H, Math.max(0, zOverH * H))
}

function timeToHeight(z: number, Q: number, H: number, A: number): number {
  // Invert the correlation for the time at which the layer reaches z
  const zOverH = z / H
  const ratio = Math.exp((1.11 - zOverH) / 0.28)
  return (ratio * (A / (H * H)) * Math.pow(H, 4 / 3)) / Math.cbrt(Q)
}

export function SmokeLayerCalculator() {
  const [Q, setQ] = useState(5000) // kW
  const [H, setH] = useState(15) // m
  const [A, setA] = useState(900) // m^2
  const [t, setT] = useState(120) // s
  const [zCrit, setZCrit] = useState(3) // m

  const z = layerHeight(t, Q, H, A)
  const tCrit = zCrit < H ? timeToHeight(zCrit, Q, H, A) : 0
  const aOverH2 = A / (H * H)
  const zOverH = z / H

  const warnings: string[] = []
  if (aOverH2 < 0.9 || aOverH2 > 14)
    warnings.push(
      `A/H² = ${aOverH2.toFixed(2)} is outside the correlation's tested range (0.9–14) — results are extrapolated.`
    )
  if (zOverH < 0.2 && z > 0)
    warnings.push(
      'Predicted z/H is below 0.2, outside the correlation fit range — treat the value as indicative only.'
    )
  if (z >= H)
    warnings.push('Layer has not yet descended below ceiling height at this time.')

  const inputClass =
    'w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20'

  const fields = [
    { label: 'Steady heat release rate Q (kW)', value: Q, set: setQ, hint: 'Design fire, steady state' },
    { label: 'Ceiling height H (m)', value: H, set: setH, hint: 'Floor to ceiling' },
    { label: 'Floor area A (m²)', value: A, set: setA, hint: 'Uniform cross-section assumed' },
    { label: 'Time t (s)', value: t, set: setT, hint: 'Elapsed time from steady burning' },
    { label: 'Critical layer height (m)', value: zCrit, set: setZCrit, hint: 'e.g. head height + margin' },
  ]

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Inputs
          </h2>
          <div className="mt-4 space-y-4">
            {fields.map((f) => (
              <label key={f.label} className="block">
                <span className="text-sm font-medium text-foreground">{f.label}</span>
                <input
                  type="number"
                  min={0}
                  value={f.value}
                  onChange={(e) => f.set(Math.max(0, Number(e.target.value)))}
                  className={`mt-1.5 ${inputClass}`}
                />
                <span className="mt-1 block text-xs text-muted-foreground">{f.hint}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Result
          </h2>
          <div className="mt-4 rounded-xl border border-border bg-background p-6 text-center">
            <p className="text-sm text-muted-foreground">Smoke layer height at t = {t}s</p>
            <p className="mt-2 font-display text-5xl font-extrabold tracking-tight text-foreground">
              {z.toFixed(1)} m
            </p>
            <p className="mt-1 text-sm text-muted-foreground">z/H = {zOverH.toFixed(2)}</p>
          </div>

          <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
            <p className="text-sm text-muted-foreground">
              Time for layer to reach {zCrit} m
            </p>
            <p className="mt-1 text-2xl font-bold text-foreground">
              {tCrit > 0 && isFinite(tCrit) ? `${Math.round(tCrit)} s` : '—'}
            </p>
          </div>

          {warnings.length > 0 && (
            <div className="mt-4 space-y-2">
              {warnings.map((w) => (
                <p
                  key={w}
                  className="flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-xs leading-relaxed text-muted-foreground"
                >
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                  {w}
                </p>
              ))}
            </div>
          )}

          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Implements the NFPA 92 steady-fire smoke filling correlation
            (axisymmetric plume, uniform cross-section, no exhaust). Real
            designs must address growing fires, exhaust operation, plugholing,
            and make-up air — see the standard and a licensed engineer.
          </p>
        </div>
      </div>
    </div>
  )
}
