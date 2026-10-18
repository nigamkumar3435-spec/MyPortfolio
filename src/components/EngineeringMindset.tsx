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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-semibold">
            <Wrench className="w-4 h-4 text-indigo-600" />
            <span>04 // HOW I BUILD SOFTWARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Engineering Mindset &amp; Principles
          </h2>
          <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
            How I approach ambiguous requirements, architectural trade-offs, defensive debugging, and machine learning rigor in real codebases.
          </p>
        </div>

        {/* 6 Principles Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {engineeringPrinciples.map((item, index) => {
            const Icon = icons[index % icons.length]

            return (
              <TiltCard
                key={index}
                glareColor="rgba(255, 255, 255, 0.7)"
                className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 flex flex-col justify-between space-y-5 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between tilt-pop">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-slate-400">
                      {item.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tilt-pop">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.philosophy}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3 text-sm tilt-pop">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider font-bold block text-indigo-900">
                      Real Project Decision:
                    </span>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                      {item.practicalExample}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 text-slate-700 font-mono text-xs sm:text-sm pt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-800">{item.keyTakeaway}</span>
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
