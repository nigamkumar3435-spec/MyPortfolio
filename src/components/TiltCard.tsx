import React from 'react'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  glareColor?: string
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`relative transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
}
