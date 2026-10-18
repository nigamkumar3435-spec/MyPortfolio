import React, { useRef, useState, useCallback } from 'react'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  glareColor?: string
  maxTilt?: number
  scale?: number
  perspective?: number
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glareColor = 'rgba(254, 243, 199, 0.75)',
  maxTilt = 8,
  scale = 1.015,
  perspective = 1100
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      const rotateX = Number(((0.5 - y) * maxTilt * 2).toFixed(2))
      const rotateY = Number(((x - 0.5) * maxTilt * 2).toFixed(2))

      setTilt({ rotateX, rotateY })
      setGlare({
        x: Number((x * 100).toFixed(1)),
        y: Number((y * 100).toFixed(1)),
        opacity: 1
      })
    },
    [maxTilt]
  )

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ rotateX: 0, rotateY: 0 })
    setGlare((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d'
      }}
    >
      <div
        className="w-full h-full rounded-[inherit] transition-transform ease-out"
        style={{
          transform: isHovered
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
          transitionDuration: isHovered ? '120ms' : '500ms'
        }}
      >
        {children}

        {/* Dynamic 3D Glare Sheen (Soft Natural Daylight Reflection) */}
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300"
          style={{
            opacity: glare.opacity * 0.65,
            background: `radial-gradient(circle 380px at ${glare.x}% ${glare.y}%, ${glareColor}, transparent 75%)`,
            mixBlendMode: 'soft-light'
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

