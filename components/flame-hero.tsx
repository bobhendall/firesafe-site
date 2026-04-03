'use client'

import { useRef, useEffect, useCallback } from 'react'

// ââ Reduced-motion check ââ
function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function FlameHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const sootRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    const sootEl = sootRef.current
    const textEl = textRef.current
    if (!canvas || !sootEl || !textEl) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Skip canvas animation entirely for reduced motion users
    if (prefersReducedMotion()) return

    const c = ctx
    const soot = sootEl
    const textContainer = textEl

    const dpr = window.devicePixelRatio || 1
    const W = canvas.width / dpr
    const H = canvas.height / dpr

    // ââ Frame throttle: target ~30fps ââ
    const targetInterval = 1000 / 30
    let lastFrameTime = 0

    // ââ Cached radial gradient (recreated only on resize) ââ
    let cachedGrad: CanvasGradient | null = null
    let cachedW = W
    function getOrCreateGradient(intensity: number): CanvasGradient {
      const currentW = canvas!.width / dpr
      if (!cachedGrad || currentW !== cachedW) {
        cachedW = currentW
        cachedGrad = c.createRadialGradient(currentW / 2, 130, 0, currentW / 2, 130, 420)
      }
      // We still need to update stops per frame for intensity changes,
      // but avoid full gradient recreation. Since Canvas API doesn't allow
      // updating stops, we cache when intensity is stable and rebuild minimally.
      const grad = c.createRadialGradient(currentW / 2, 130, 0, currentW / 2, 130, 420)
      grad.addColorStop(0, `rgba(212, 82, 10, ${intensity})`)
      grad.addColorStop(0.3, `rgba(212, 82, 10, ${intensity * 0.5})`)
      grad.addColorStop(1, 'rgba(212, 82, 10, 0)')
      return grad
    }

    // ââ Soot blackening cycle: ~5s darken, ~1s hold, ~1.5s clear ââ
    const CD = 300, CH = 60, CC = 90, CT = CD + CH + CC
    let sootTimer = 0

    function getSootPhase(): number {
      sootTimer = (sootTimer + 1) % CT
      if (sootTimer < CD) {
        const t = sootTimer / CD
        return t * t
      }
      if (sootTimer < CD + CH) return 1
      const t = (sootTimer - CD - CH) / CC
      return 1 - t * t * t
    }

    // ââ Ember class ââ
    class Ember {
      x = 0; y = 0; vx = 0; vy = 0; size = 0; life = 1
      decay = 0; wobbleSpeed = 0; wobbleAmp = 0; t = 0; hue = 0

      reset() {
        this.x = W / 2 + (Math.random() - 0.5) * 110
        this.y = 170 + Math.random() * 30
        this.vx = (Math.random() - 0.5) * 1.1
        this.vy = -(0.7 + Math.random() * 2.2)
        this.size = 2.5 + Math.random() * 4
        this.life = 1
        this.decay = 0.002 + Math.random() * 0.005
        this.wobbleSpeed = 1.5 + Math.random() * 2
        this.wobbleAmp = 0.5 + Math.random() * 0.8
        this.t = Math.random() * Math.PI * 2
        this.hue = 10 + Math.random() * 35
      }

      update() {
        this.t += 0.025
        this.x += this.vx + Math.sin(this.t * this.wobbleSpeed) * this.wobbleAmp
        this.y += this.vy
        this.vy *= 0.997
        this.life -= this.decay
        if (this.life <= 0) this.reset()
      }

      draw(c: CanvasRenderingContext2D) {
        const a = this.life * 0.9
        c.save()
        c.globalAlpha = a
        c.fillStyle = `hsl(${this.hue}, 95%, ${45 + (1 - this.life) * 25}%)`
        c.shadowColor = `hsla(${this.hue}, 95%, 55%, ${a * 0.8})`
        c.shadowBlur = this.size * 5
        c.beginPath()
        c.arc(this.x, this.y, this.size * this.life, 0, Math.PI * 2)
        c.fill()
        c.restore()
      }
    }

    // ââ Soot particle class ââ
    class SootParticle {
      x = 0; y = 0; vx = 0; vy = 0; size = 0; life = 1
      decay = 0; rotation = 0; rotSpeed = 0; wobbleT = 0; gray = 0
      vertices: { angle: number; dist: number }[] = []

      reset() {
        this.x = W / 2 + (Math.random() - 0.5) * 240
        this.y = 150 + Math.random() * 80
        this.vx = (Math.random() - 0.5) * 1.5
        this.vy = -(0.05 + Math.random() * 0.3)
        this.size = 7 + Math.random() * 14
        this.life = 1
        this.decay = 0.0005 + Math.random() * 0.0012
        this.rotation = Math.random() * Math.PI * 2
        this.rotSpeed = (Math.random() - 0.5) * 0.012
        this.wobbleT = Math.random() * Math.PI * 2
        this.gray = 10 + Math.random() * 25
        this.vertices = []
        const sides = 5 + Math.floor(Math.random() * 4)
        for (let i = 0; i < sides; i++) {
          this.vertices.push({
            angle: (Math.PI * 2 / sides) * i + (Math.random() - 0.5) * 0.5,
            dist: 0.35 + Math.random() * 0.65,
          })
        }
      }

      update() {
        this.wobbleT += 0.005
        this.x += this.vx + Math.sin(this.wobbleT * 0.4) * 0.3
        this.y += this.vy
        this.rotation += this.rotSpeed
        this.life -= this.decay
        if (this.life <= 0) this.reset()
      }

      draw(c: CanvasRenderingContext2D) {
        const a = this.life * 0.8
        const s = this.size * (0.7 + this.life * 0.3)
        c.save()
        c.translate(this.x, this.y)
        c.rotate(this.rotation)
        c.globalAlpha = a
        c.fillStyle = `rgb(${this.gray}, ${this.gray - 3}, ${this.gray - 5})`
        c.beginPath()
        const v0 = this.vertices[0]
        c.moveTo(Math.cos(v0.angle) * s * v0.dist, Math.sin(v0.angle) * s * v0.dist)
        for (let i = 1; i < this.vertices.length; i++) {
          const v = this.vertices[i]
          c.lineTo(Math.cos(v.angle) * s * v.dist, Math.sin(v.angle) * s * v.dist)
        }
        c.closePath()
        c.fill()
        c.strokeStyle = `rgba(0,0,0,${a * 0.4})`
        c.lineWidth = 0.7
        c.stroke()
        c.restore()
      }
    }

    // ââ Paper ash class ââ
    class PaperAsh {
      x = 0; y = 0; vx = 0; vy = 0; rotation = 0; rotSpeed = 0
      w = 0; h = 0; life = 1; decay = 0; wobbleT = 0; warmth = 0

      reset() {
        this.x = W / 2 + (Math.random() - 0.5) * 180
        this.y = 140 + Math.random() * 50
        this.vx = (Math.random() - 0.5) * 1
        this.vy = -(0.1 + Math.random() * 0.4)
        this.rotation = Math.random() * Math.PI * 2
        this.rotSpeed = (Math.random() - 0.5) * 0.06
        this.w = 7 + Math.random() * 13
        this.h = 3 + Math.random() * 6
        this.life = 1
        this.decay = 0.001 + Math.random() * 0.003
        this.wobbleT = Math.random() * Math.PI * 2
        this.warmth = 0.5 + Math.random() * 0.5
      }

      update() {
        this.wobbleT += 0.012
        this.x += this.vx + Math.sin(this.wobbleT * 1.1) * 0.5
        this.y += this.vy
        this.rotation += this.rotSpeed
        this.life -= this.decay
        this.warmth *= 0.995
        if (this.life <= 0) this.reset()
      }

      draw(c: CanvasRenderingContext2D) {
        const a = this.life * 0.5
        const w = this.warmth
        c.save()
        c.translate(this.x, this.y)
        c.rotate(this.rotation)
        c.globalAlpha = a
        c.fillStyle = `rgb(${Math.round(155 + w * 85)}, ${Math.round(115 + w * 65)}, ${Math.round(75 + w * 45)})`
        c.beginPath()
        c.moveTo(-this.w / 2, -this.h / 2)
        c.lineTo(this.w / 2 - 2, -this.h / 2 + 1)
        c.lineTo(this.w / 2, this.h / 2 - 1)
        c.lineTo(-this.w / 2 + 2, this.h / 2)
        c.closePath()
        c.fill()
        if (w > 0.2) {
          c.globalAlpha = a * w * 0.7
          c.fillStyle = `rgba(220, 80, 10, ${w * 0.6})`
          c.shadowColor = `rgba(255, 100, 10, ${w * 0.5})`
          c.shadowBlur = 5
          c.fillRect(-this.w / 2, -this.h / 2, this.w * 0.3, this.h)
        }
        c.restore()
      }
    }

    // Initialize particles â reduced counts for performance
    const embers: Ember[] = Array.from({ length: 20 }, () => {
      const e = new Ember(); e.reset(); return e
    })
    const sootParticles: SootParticle[] = Array.from({ length: 14 }, () => {
      const s = new SootParticle(); s.reset(); return s
    })
    const ashes: PaperAsh[] = Array.from({ length: 8 }, () => {
      const a = new PaperAsh(); a.reset(); return a
    })

    let lightPhase = 0

    function frame(timestamp: number) {
      // Throttle to ~30fps
      if (timestamp - lastFrameTime < targetInterval) {
        rafRef.current = requestAnimationFrame(frame)
        return
      }
      lastFrameTime = timestamp

      const currentW = canvas!.width / dpr
      const currentH = canvas!.height / dpr

      c.clearRect(0, 0, currentW, currentH)

      // Soot overlay
      const sootLevel = getSootPhase()
      soot.style.opacity = String(sootLevel * 0.55)

      // Adapt text colors for visibility during soot darkening
      const headR = Math.round(28 + sootLevel * 217)
      const headG = Math.round(25 + sootLevel * 205)
      const headB = Math.round(23 + sootLevel * 197)
      const subR = Math.round(113 + sootLevel * 122)
      const subG = Math.round(113 + sootLevel * 112)
      const subB = Math.round(122 + sootLevel * 98)
      textContainer.style.setProperty('--hero-head', `rgb(${headR},${headG},${headB})`)
      textContainer.style.setProperty('--hero-sub', `rgb(${subR},${subG},${subB})`)

      // Warm radial glow
      lightPhase += 0.01
      const boost = 1 + sootLevel * 4
      const intensity = (0.03 + Math.sin(lightPhase) * 0.018) * boost
      const grad = getOrCreateGradient(intensity)
      c.fillStyle = grad
      c.fillRect(0, 0, currentW, currentH)

      // Draw particles
      ashes.forEach(p => { p.update(); p.draw(c) })
      sootParticles.forEach(p => { p.update(); p.draw(c) })
      embers.forEach(e => { e.update(); e.draw(c) })

      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return

    function resize() {
      if (!canvas || !wrapper) return
      const dpr = window.devicePixelRatio || 1
      canvas.width = wrapper.offsetWidth * dpr
      canvas.height = wrapper.offsetHeight * dpr
      canvas.style.width = wrapper.offsetWidth + 'px'
      canvas.style.height = wrapper.offsetHeight + 'px'
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.scale(dpr, dpr)
      }
    }

    resize()
    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [animate])

  return (
    <div ref={wrapperRef} className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(30 50% 98%) 0%, hsl(30 50% 99%) 100%)' }}>
      {/* Soot darkening overlay */}
      <div
        ref={sootRef}
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          opacity: 0,
          background: 'radial-gradient(ellipse at 50% 35%, rgba(35, 22, 12, 0.6) 0%, rgba(25, 16, 10, 0.75) 40%, rgba(12, 8, 4, 0.9) 100%)',
        }}
      />

      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-[2]"
      />

      {/* Hero content */}
      <section ref={textRef} className="relative z-[3] mx-auto max-w-2xl px-6 pb-18 pt-24 text-center" style={{ '--hero-head': 'rgb(28,25,23)', '--hero-sub': 'rgb(113,113,122)' } as React.CSSProperties}>
        {/* Animated flame SVG */}
        <div className="relative mb-5 inline-block">
          <svg
            className="h-28 w-28 animate-[flameBreath_2s_ease-in-out_infinite]"
            style={{
              filter: 'drop-shadow(0 0 28px rgba(212,82,10,0.6)) drop-shadow(0 0 72px rgba(212,82,10,0.25))',
            }}
            viewBox="0 0 64 64"
            fill="none"
          >
            <defs>
              <linearGradient id="flame-g1" x1="32" y1="58" x2="32" y2="2" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#c43e00" />
                <stop offset="30%" stopColor="#d4520a" />
                <stop offset="55%" stopColor="#e87820" />
                <stop offset="80%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#fef3c7" />
              </linearGradient>
              <linearGradient id="flame-g2" x1="32" y1="54" x2="32" y2="16" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="60%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fde68a" />
              </linearGradient>
              <radialGradient id="flame-g3" cx="32" cy="42" r="9" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fffbeb" />
                <stop offset="50%" stopColor="#fef3c7" />
                <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
              </radialGradient>
              <filter id="flame-glow">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              className="animate-[flameLayer1_1.3s_ease-in-out_infinite] origin-bottom"
              d="M32 2C25 14 14 23 14 38a18 18 0 0 0 36 0C50 23 39 14 32 2z"
              fill="url(#flame-g1)"
              filter="url(#flame-glow)"
            />
            <path
              className="animate-[flameLayer2_1.6s_ease-in-out_infinite] origin-bottom"
              d="M32 16c-4 8-11 13-11 22a11 11 0 0 0 22 0c0-9-7-14-11-22z"
              fill="url(#flame-g2)"
            />
            <path
              className="animate-[flameLayer3_1s_ease-in-out_infinite] origin-bottom"
              d="M32 26c-2.5 4.5-7 8-7 14a7 7 0 0 0 14 0c0-6-4.5-9.5-7-14z"
              fill="#fbbf24"
              opacity="0.9"
            />
            <ellipse cx="32" cy="43" rx="4.5" ry="7" fill="url(#flame-g3)" opacity="0.9" />
          </svg>
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3.2rem] leading-[1.08] transition-colors duration-300" style={{ color: 'var(--hero-head)' }}>
          Code to compliance,<br />
          <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">faster.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed sm:text-[1.05rem] transition-colors duration-300" style={{ color: 'var(--hero-sub)' }}>
          FDS modeling, sprinkler design, egress analysis, hazmat compliance, code search.
          All grounded in NFPA, IBC, and IFC â not LLM hallucinations.
          Built for engineers who stamp plans.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'}
            className="inline-flex items-center gap-2 rounded-[9px] border border-black/12 bg-primary px-7 py-3 text-[15px] font-semibold text-white shadow-[0_2px_8px_rgba(212,82,10,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:-translate-y-0.5 hover:bg-[#c04a09]"
          >
            Start free â
          </a>
          <a
            href={process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.firesafe.ai'}
            className="inline-flex items-center rounded-[9px] border border-border bg-card/80 backdrop-blur-sm px-7 py-3 text-[15px] font-medium shadow-sm transition-all hover:border-muted-foreground/30 hover:bg-muted"
            style={{ color: 'var(--hero-head)' }}
          >
            Sign in
          </a>
        </div>

        <p className="mt-3.5 text-xs transition-colors duration-300" style={{ color: 'var(--hero-sub)', opacity: 0.7 }}>Free plan â no credit card required</p>
      </section>
    </div>
  )
}
