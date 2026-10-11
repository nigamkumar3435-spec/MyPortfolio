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

export const EngineeringMindset: React.FC = () => {
  const { engineeringPrinciples } = portfolioData

  const icons = [Split, Database, BarChart2, ShieldCheck, Code2, UserCheck]

  return (
    <section id="engineering-mindset" className="py-20 relative">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
            <Wrench className="w-3.5 h-3.5" />
            <span>04 // HOW I BUILD SOFTWARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Mindset &amp; Principles
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            How I approach ambiguous requirements, architectural trade-offs, defensive debugging, and machine learning rigor in real codebases.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={index}
                className="p-6 rounded-2xl glass-card border border-white/10 flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-extrabold text-cyan-500/40">
                      {item.number}
                    </span>
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.philosophy}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                      Real Project Example:
                    </span>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {item.practicalExample}
                    </p>
                  </div>

                  <div className="flex items-start gap-1.5 text-slate-300 font-mono text-[11px] pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item.keyTakeaway}</span>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
