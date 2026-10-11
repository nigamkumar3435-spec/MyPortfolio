import React from 'react'
import {
  Wrench,
  Split,
  Database,
  BarChart2,
  ShieldCheck,
  Code2,
  UserCheck,
  CheckCircle2
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { TiltCard } from './TiltCard'

export const EngineeringMindset: React.FC = () => {
  const { engineeringPrinciples } = portfolioData

  const icons = [Split, Database, BarChart2, ShieldCheck, Code2, UserCheck]

  return (
    <section id="engineering-mindset" className="py-24 relative">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Heading */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono font-bold shadow-sm shadow-red-500/20">
            <Wrench className="w-4 h-4 text-red-400" />
            <span>04 // HOW I BUILD SOFTWARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Engineering Mindset &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-yellow-300">
              Principles
            </span>
          </h2>
          <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
            How I approach ambiguous requirements, architectural trade-offs, defensive debugging, and machine learning rigor in real codebases.
          </p>
        </div>

        {/* 6 Principles Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {engineeringPrinciples.map((item, index) => {
            const Icon = icons[index % icons.length]
            const colorPalettes = [
              {
                text: 'text-red-400',
                border: 'border-red-500/40 hover:border-red-400/80',
                bg: 'bg-red-500/15 border-red-500/30 text-red-300',
                glare: 'rgba(239, 68, 68, 0.3)',
                glow: 'shadow-red-950/40'
              },
              {
                text: 'text-amber-400',
                border: 'border-amber-500/40 hover:border-amber-400/80',
                bg: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
                glare: 'rgba(245, 158, 11, 0.3)',
                glow: 'shadow-amber-950/40'
              },
              {
                text: 'text-yellow-400',
                border: 'border-yellow-500/40 hover:border-yellow-400/80',
                bg: 'bg-yellow-500/15 border-yellow-500/30 text-yellow-300',
                glare: 'rgba(250, 204, 21, 0.3)',
                glow: 'shadow-yellow-950/40'
              },
              {
                text: 'text-rose-400',
                border: 'border-rose-500/40 hover:border-rose-400/80',
                bg: 'bg-rose-500/15 border-rose-500/30 text-rose-300',
                glare: 'rgba(244, 63, 94, 0.3)',
                glow: 'shadow-rose-950/40'
              },
              {
                text: 'text-orange-400',
                border: 'border-orange-500/40 hover:border-orange-400/80',
                bg: 'bg-orange-500/15 border-orange-500/30 text-orange-300',
                glare: 'rgba(249, 115, 22, 0.3)',
                glow: 'shadow-orange-950/40'
              },
              {
                text: 'text-yellow-300',
                border: 'border-yellow-400/40 hover:border-yellow-300/80',
                bg: 'bg-yellow-400/15 border-yellow-400/30 text-yellow-200',
                glare: 'rgba(253, 224, 71, 0.3)',
                glow: 'shadow-yellow-950/40'
              }
            ]
            const theme = colorPalettes[index % colorPalettes.length]

            return (
              <TiltCard
                key={index}
                glareColor={theme.glare}
                className={`p-7 sm:p-8 rounded-3xl glass-card border ${theme.border} flex flex-col justify-between space-y-5 transition-all duration-300 shadow-2xl ${theme.glow}`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between tilt-pop">
                    <span className={`font-mono text-3xl sm:text-4xl font-black ${theme.text} drop-shadow-[0_0_20px_currentColor]`}>
                      {item.number}
                    </span>
                    <div className={`p-3 rounded-2xl border ${theme.bg} shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug tilt-pop">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {item.philosophy}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3 text-sm tilt-pop">
                  <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 space-y-1.5 shadow-inner">
                    <span className={`text-xs font-mono uppercase tracking-wider font-extrabold block ${theme.text}`}>
                      Real Project Decision:
                    </span>
                    <p className="text-slate-100 text-xs sm:text-sm leading-relaxed">
                      {item.practicalExample}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 text-slate-200 font-mono text-xs sm:text-sm pt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-300">{item.keyTakeaway}</span>
                  </div>
                </div>

              </TiltCard>
            )
          })}
        </div>

      </div>
    </section>
  )
}
