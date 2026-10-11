import React from 'react'
import {
  Code,
  Database,
  Cpu,
  BrainCircuit,
  Compass,
  CheckCircle
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export const About: React.FC = () => {
  const { personal } = portfolioData

  const bentoPillars = [
    {
      icon: Code,
      title: 'First-Principles Engineering',
      description:
        'I prioritize core data structures, algorithms, and modular design patterns over surface-level frameworks. Clean abstractions make scaling intuitive.',
      tag: 'DSA & Systems',
      color: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20'
    },
    {
      icon: Database,
      title: 'Relational Database Integrity',
      description:
        'Experienced in designing normalized (3NF) MySQL schemas, enforcing ACID transactions, row-level locks, and utilizing prepared statements against SQL injection.',
      tag: 'MySQL & JDBC',
      color: 'border-blue-500/30 text-blue-400 bg-blue-950/20'
    },
    {
      icon: Cpu,
      title: 'Empirical Machine Learning',
      description:
        'Focus on verified data preprocessing, preventing train/test data leakage, tuning decision thresholds, and prioritizing Recall over uncalibrated accuracy scores.',
      tag: 'Scikit-Learn & EDA',
      color: 'border-violet-500/30 text-violet-400 bg-violet-950/20'
    },
    {
      icon: BrainCircuit,
      title: 'Responsible AI & Automation',
      description:
        'Exploring agentic tool calling and the ReAct pattern while adhering strictly to human-in-the-loop safeguards before triggering real-world actions.',
      tag: 'Agentic Prototypes',
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20'
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>01 // PROFESSIONAL BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me & Engineering Focus
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A transparent look into my academic foundation, problem-solving mindset, and software craftsmanship.
          </p>
        </div>

        {/* Narrative & Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authentic Personal Narrative */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            {personal.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-300/90">
                {paragraph}
              </p>
            ))}

            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-3 font-mono text-xs">
              <div className="text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>What Recruiters Can Expect From Me</span>
              </div>
              <ul className="space-y-1.5 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">&gt;</span>
                  <span>Honest communication with zero exaggerations about skill levels or production experience.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">&gt;</span>
                  <span>Curiosity paired with disciplined debugging and thorough documentation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">&gt;</span>
                  <span>Readiness to write clean code, accept critical PR code reviews, and ship features rapidly.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Bento Grid of Core Pillars & Stats */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Quick Stat Bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-center">
                <div className="text-2xl font-bold font-mono text-cyan-400">27</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">Public Repos</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-center">
                <div className="text-2xl font-bold font-mono text-blue-400">{personal.cgpa}</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">Verified CGPA</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-center">
                <div className="text-2xl font-bold font-mono text-violet-400">5</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">Certifications</div>
              </div>
            </div>

            {/* 4 Bento Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {bentoPillars.map((pillar, i) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl glass-card space-y-2.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg border ${pillar.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                          {pillar.tag}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-slate-100">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
