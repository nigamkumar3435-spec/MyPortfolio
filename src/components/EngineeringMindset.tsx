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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold shadow-sm shadow-cyan-500/20">
            <Wrench className="w-4 h-4 text-cyan-400" />
            <span>04 // HOW I BUILD SOFTWARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Engineering Mindset &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-300">
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
                text: 'text-cyan-400',
                border: 'border-cyan-500/40 hover:border-cyan-400/80',
                bg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
                glare: 'rgba(56, 189, 248, 0.25)',
                glow: 'shadow-cyan-950/40'
              },
              {
                text: 'text-blue-400',
                border: 'border-blue-500/40 hover:border-blue-400/80',
                bg: 'bg-blue-500/15 border-blue-500/30 text-blue-300',
                glare: 'rgba(59, 130, 246, 0.25)',
                glow: 'shadow-blue-950/40'
              },
              {
                text: 'text-teal-400',
                border: 'border-teal-500/40 hover:border-teal-400/80',
                bg: 'bg-teal-500/15 border-teal-500/30 text-teal-300',
                glare: 'rgba(20, 184, 166, 0.25)',
                glow: 'shadow-teal-950/40'
              },
              {
                text: 'text-emerald-400',
                border: 'border-emerald-500/40 hover:border-emerald-400/80',
                bg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
                glare: 'rgba(16, 185, 129, 0.25)',
                glow: 'shadow-emerald-950/40'
              },
              {
                text: 'text-amber-400',
                border: 'border-amber-500/40 hover:border-amber-400/80',
                bg: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
                glare: 'rgba(245, 158, 11, 0.25)',
                glow: 'shadow-amber-950/40'
              },
              {
                text: 'text-sky-400',
                border: 'border-sky-500/40 hover:border-sky-400/80',
                bg: 'bg-sky-500/15 border-sky-500/30 text-sky-300',
                glare: 'rgba(14, 165, 233, 0.25)',
                glow: 'shadow-sky-950/40'
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
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-semibold text-emerald-300">{item.keyTakeaway}</span>
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
