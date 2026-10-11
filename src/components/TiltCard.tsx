import React, { useRef, useState, useEffect } from 'react'

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
  glareColor = 'rgba(250, 204, 21, 0.22)',
  maxTilt = 10.5,
  scale = 1.025,
  perspective = 1100
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate rotation angles
    const rotateX = ((y - centerY) / centerY) * -maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    // Dynamic 3D lighting drop shadow (casts opposite to light source)
    const shadowX = -rotateY * 2.2
    const shadowY = rotateX * 2.2

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      boxShadow: `${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px 40px -10px rgba(0, 0, 0, 0.75), 0 0 28px -5px rgba(239, 68, 68, 0.25), 0 0 1px 1px rgba(250, 204, 21, 0.35)`,
      transition: 'transform 0.08s ease-out, box-shadow 0.08s ease-out'
    })

    setGlareStyle({
      opacity: 1,
      background: `radial-gradient(circle 380px at ${x}px ${y}px, ${glareColor}, rgba(239, 68, 68, 0.12) 40%, transparent 75%)`,
      transition: 'opacity 0.15s ease-out'
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease-out'
    })
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.4s ease-out'
    })
  }

  // Handle device orientation on touch screens
  useEffect(() => {
    return () => {
      // clean up
    }
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        willChange: 'transform, box-shadow'
      }}
      className={`relative preserve-3d group ${className}`}
    >
      {/* Dynamic Specular 3D Glare */}
      <div
        className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] overflow-hidden"
        style={glareStyle}
        aria-hidden="true"
      />

      {/* 3D Border Glow Aura */}
      <div
        className={`pointer-events-none absolute -inset-[1px] rounded-[inherit] transition-opacity duration-300 z-10 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.5) 0%, rgba(245, 158, 11, 0.45) 50%, rgba(250, 204, 21, 0.4) 100%)',
          maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px'
        }}
        aria-hidden="true"
      />

      {children}
    </div>
  )
}
