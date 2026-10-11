import React, { useRef, useState } from 'react'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  glareColor?: string
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glareColor = 'rgba(56, 189, 248, 0.15)'
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Max tilt angles (degrees)
    const rotateX = ((y - centerY) / centerY) * -8.5
    const rotateY = ((x - centerX) / centerX) * 8.5

    setStyle({
      transform: `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.08s ease-out'
    })

    setGlareStyle({
      opacity: 1,
      background: `radial-gradient(circle 350px at ${x}px ${y}px, ${glareColor}, transparent 70%)`,
      transition: 'opacity 0.2s ease-out'
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    })
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.4s ease-out'
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transformStyle: 'preserve-3d' }}
      className={`relative will-change-transform preserve-3d ${className}`}
    >
      {/* Dynamic Specular 3D Glare */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] overflow-hidden"
        style={glareStyle}
        aria-hidden="true"
      />
      {children}
    </div>
  )
}
