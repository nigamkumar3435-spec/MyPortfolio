import React, { useEffect, useRef } from 'react'

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Particle definition: Molten embers blending crimson, amber & gold
    interface Ember {
      x: number
      y: number
      size: number
      speedY: number
      speedX: number
      alpha: number
      alphaSpeed: number
      color: string
      glowColor: string
    }

    const colors = [
      { fill: 'rgba(239, 68, 68, ', glow: 'rgba(239, 68, 68, 0.6)' },    // Crimson Red
      { fill: 'rgba(245, 158, 11, ', glow: 'rgba(245, 158, 11, 0.6)' },  // Solar Amber
      { fill: 'rgba(250, 204, 21, ', glow: 'rgba(250, 204, 21, 0.7)' },  // Radiant Gold
      { fill: 'rgba(251, 113, 133, ', glow: 'rgba(251, 113, 133, 0.5)' }  // Rose Flame
    ]

    const emberCount = Math.min(Math.floor(window.innerWidth / 35), 45)
    const embers: Ember[] = []

    for (let i = 0; i < emberCount; i++) {
      const palette = colors[Math.floor(Math.random() * colors.length)]
      embers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedY: Math.random() * 0.45 + 0.15,
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.6 + 0.2,
        alphaSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        color: palette.fill,
        glowColor: palette.glow
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < embers.length; i++) {
        const ember = embers[i]

        // Update position (rising gently)
        if (!prefersReducedMotion) {
          ember.y -= ember.speedY
          ember.x += ember.speedX + Math.sin(ember.y * 0.01) * 0.15

          // Pulse opacity
          ember.alpha += ember.alphaSpeed
          if (ember.alpha > 0.85 || ember.alpha < 0.15) {
            ember.alphaSpeed = -ember.alphaSpeed
          }

          // Respawn at bottom if floated past top
          if (ember.y < -10) {
            ember.y = height + 10
            ember.x = Math.random() * width
          }
          if (ember.x < -10) ember.x = width + 10
          if (ember.x > width + 10) ember.x = -10
        }

        // Draw glowing ember
        ctx.save()
        ctx.beginPath()
        ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2)
        ctx.fillStyle = `${ember.color}${ember.alpha})`
        ctx.shadowBlur = ember.size * 5
        ctx.shadowColor = ember.glowColor
        ctx.fill()
        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Deep Obsidian & Molten Wine Base Gradient */}
      <div className="absolute inset-0 bg-[#070405] bg-[radial-gradient(ellipse_120%_90%_at_50%_-15%,#1c080d_0%,#0e0508_40%,#060304_100%)]" />

      {/* 2. Fluid Blended Ambient Aura Mesh (Animated Drift) */}
      
      {/* Top Center Hero Halo: Fusion of Crimson and Solar Yellow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.22)_0%,rgba(245,158,11,0.15)_38%,rgba(250,204,21,0.08)_60%,transparent_75%)] blur-[130px] animate-pulse-halo" />

      {/* Top Left Radiant Solar Gold Aura */}
      <div className="absolute top-[18%] -left-36 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15)_0%,rgba(245,158,11,0.10)_45%,transparent_70%)] blur-[140px] animate-float-slow" />

      {/* Top Right Fiery Crimson Blaze */}
      <div className="absolute top-[28%] -right-36 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.18)_0%,rgba(245,158,11,0.08)_50%,transparent_72%)] blur-[140px] animate-float-slow" style={{ animationDelay: '-4s' }} />

      {/* Mid Left Molten Amber Vortex */}
      <div className="absolute top-[55%] -left-48 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.16)_0%,rgba(239,68,68,0.12)_42%,transparent_70%)] blur-[150px] animate-pulse-halo" style={{ animationDelay: '-2s' }} />

      {/* Mid Right Solar Yellow Fusion */}
      <div className="absolute top-[68%] -right-40 w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15)_0%,rgba(225,29,72,0.12)_48%,transparent_72%)] blur-[145px] animate-float-slow" style={{ animationDelay: '-7s' }} />

      {/* Bottom Center Horizon Glow: Warm Golden Hearth */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.18)_0%,rgba(239,68,68,0.15)_45%,transparent_75%)] blur-[160px] animate-pulse-halo" />

      {/* 3. High-Tech Cybernetic Dual-Tone Grid Matrix */}
      <div
        className="absolute inset-0 opacity-[0.45] mix-blend-screen"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(239, 68, 68, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(250, 204, 21, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 95% 85% at 50% 50%, #000 30%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 50% 50%, #000 30%, transparent 95%)'
        }}
      />

      {/* 4. Fine Hexagonal Tech Accents Overlay */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.12) 1.2px, transparent 1.2px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* 5. Subtle Canvas for Rising Red & Golden Ember Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
      />

      {/* 6. Soft Cinematic Vignette to keep text focused & edges rich */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,2,3,0.55)_100%)]" />
    </div>
  )
}
