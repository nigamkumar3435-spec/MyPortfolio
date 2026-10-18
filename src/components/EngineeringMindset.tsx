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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/90 border border-amber-200/80 text-amber-900 text-xs font-mono font-semibold shadow-xs">
            <Wrench className="w-4 h-4 text-orange-600" />
            <span>04 // HOW I BUILD SOFTWARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Engineering Mindset &amp; <span className="text-orange-600">Principles</span>
          </h2>
          <p className="text-stone-600 text-base max-w-3xl leading-relaxed">
            How I approach ambiguous requirements, architectural trade-offs, defensive debugging, and machine learning rigor in real codebases.
          </p>
        </div>

        {/* 6 Principles Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {engineeringPrinciples.map((item, index) => {
            const Icon = icons[index % icons.length]
            
            // Warm accent rotation: Orange -> Amber/Yellow -> Rose/Red
            const colorThemes = [
              {
                iconBox: 'bg-orange-50 border-orange-200 text-orange-600',
                numColor: 'text-orange-400',
                tagColor: 'text-orange-700',
                badgeBorder: 'hover:border-orange-300'
              },
              {
                iconBox: 'bg-amber-50 border-amber-200 text-amber-600',
                numColor: 'text-amber-400',
                tagColor: 'text-amber-700',
                badgeBorder: 'hover:border-amber-300'
              },
              {
                iconBox: 'bg-rose-50 border-rose-200 text-rose-600',
                numColor: 'text-rose-400',
                tagColor: 'text-rose-700',
                badgeBorder: 'hover:border-rose-300'
              }
            ]
            const currentTheme = colorThemes[index % colorThemes.length]

            return (
              <TiltCard
                key={index}
                glareColor="rgba(254, 243, 199, 0.7)"
                className={`p-7 sm:p-8 rounded-3xl bg-white border border-stone-200 ${currentTheme.badgeBorder} flex flex-col justify-between space-y-5 transition-all duration-300 shadow-xs hover:shadow-md group`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between tilt-pop">
                    <span className={`font-mono text-3xl sm:text-4xl font-black ${currentTheme.numColor} transition-colors`}>
                      {item.number}
                    </span>
                    <div className={`p-3 rounded-2xl border ${currentTheme.iconBox} shadow-xs transition-transform group-hover:scale-105`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug tilt-pop">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                    {item.philosophy}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-3 text-sm tilt-pop">
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                    <span className={`text-xs font-mono uppercase tracking-wider font-bold block ${currentTheme.tagColor}`}>
                      Real Project Decision:
                    </span>
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                      {item.practicalExample}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 text-stone-700 font-mono text-xs sm:text-sm pt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-stone-800">{item.keyTakeaway}</span>
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
