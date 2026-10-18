import React, { useEffect, useRef, useState } from 'react'

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = Number(((e.clientX / window.innerWidth - 0.5) * 2).toFixed(3))
      const ny = Number(((e.clientY / window.innerHeight - 0.5) * 2).toFixed(3))
      setMouseOffset({ x: nx, y: ny })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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

    // Gentle ambient dust motes (warm amber, peach, stone)
    interface Mote {
      x: number
      y: number
      size: number
      speedY: number
      speedX: number
      alpha: number
      alphaSpeed: number
      color: string
    }

    const colors = [
      'rgba(245, 158, 11, ', // Amber 500
      'rgba(234, 88, 12, ',  // Orange 600
      'rgba(217, 119, 6, ',  // Amber 600
      'rgba(168, 162, 158, ' // Stone 400
    ]

    const moteCount = Math.min(Math.floor(window.innerWidth / 45), 28)
    const motes: Mote[] = []

    for (let i = 0; i < moteCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      motes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.6,
        speedY: Math.random() * 0.25 + 0.08,
        speedX: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.22 + 0.08,
        alphaSpeed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        color
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < motes.length; i++) {
        const mote = motes[i]

        if (!prefersReducedMotion) {
          mote.y -= mote.speedY
          mote.x += mote.speedX + Math.sin(mote.y * 0.01) * 0.08

          mote.alpha += mote.alphaSpeed
          if (mote.alpha > 0.32 || mote.alpha < 0.07) {
            mote.alphaSpeed = -mote.alphaSpeed
          }

          if (mote.y < -10) {
            mote.y = height + 10
            mote.x = Math.random() * width
          }
          if (mote.x < -10) mote.x = width + 10
          if (mote.x > width + 10) mote.x = -10
        }

        ctx.save()
        ctx.beginPath()
        ctx.arc(mote.x, mote.y, mote.size, 0, Math.PI * 2)
        ctx.fillStyle = `${mote.color}${mote.alpha})`
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
      {/* 1. Base Calming Warm Porcelain/Alabaster Canvas */}
      <div className="absolute inset-0 bg-[#faf8f5]" />

      {/* 2. Soft, Eye-Friendly Warm Ambient Light Diffusions */}
      
      {/* Top Center Warm Sunrise Horizon Diffusion */}
      <div
        className="absolute -top-32 left-1/2 w-[900px] h-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(254,243,199,0.45)_0%,rgba(254,215,170,0.25)_35%,transparent_70%)] blur-[90px]"
        style={{
          transform: `translate3d(calc(-50% + ${mouseOffset.x * 20}px), ${mouseOffset.y * 20}px, 0)`,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* Top Left Warm Peach / Terracotta Tint */}
      <div
        className="absolute top-[15%] -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,237,213,0.35)_0%,transparent_65%)] blur-[100px]"
        style={{
          transform: `translate3d(${mouseOffset.x * -16}px, ${mouseOffset.y * -16}px, 0)`,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* Mid Right Warm Golden Amber Tint */}
      <div
        className="absolute top-[45%] -right-32 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(254,243,199,0.4)_0%,rgba(253,230,138,0.2)_45%,transparent_65%)] blur-[100px]"
        style={{
          transform: `translate3d(${mouseOffset.x * 16}px, ${mouseOffset.y * 16}px, 0)`,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* 3. Subtle Warm Architectural Engineering Grid Matrix */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(214, 211, 209, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(214, 211, 209, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 95% 85% at 50% 50%, #000 35%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 50% 50%, #000 35%, transparent 95%)',
          transform: `translate3d(${mouseOffset.x * 8}px, ${mouseOffset.y * 8}px, 0)`,
          transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* 4. Fine Subtle Warm Dot Accents */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(rgba(217, 119, 6, 0.15) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* 5. Minimalist Canvas for Calm Floating Dust Motes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />
    </div>
  )
}
