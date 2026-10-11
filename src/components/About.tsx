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
import { TiltCard } from './TiltCard'

export const About: React.FC = () => {
  const { personal } = portfolioData

  const bentoPillars = [
    {
      icon: Code,
      title: 'First-Principles Engineering',
      description:
        'I prioritize core data structures, algorithms, and modular design patterns over surface-level frameworks. Clean abstractions make scaling intuitive.',
      tag: 'DSA & Systems',
      color: 'border-cyan-400/50 text-cyan-300 bg-cyan-950/40 shadow-cyan-500/10'
    },
    {
      icon: Database,
      title: 'Relational Database Integrity',
      description:
        'Experienced in designing normalized (3NF) MySQL schemas, enforcing ACID transactions, row-level locks, and utilizing prepared statements against SQL injection.',
      tag: 'MySQL & JDBC',
      color: 'border-blue-400/50 text-blue-300 bg-blue-950/40 shadow-blue-500/10'
    },
    {
      icon: Cpu,
      title: 'Empirical Machine Learning',
      description:
        'Focus on verified data preprocessing, preventing train/test data leakage, tuning decision thresholds, and prioritizing Recall over uncalibrated accuracy scores.',
      tag: 'Scikit-Learn & EDA',
      color: 'border-amber-400/50 text-amber-300 bg-amber-950/40 shadow-amber-500/10'
    },
    {
      icon: BrainCircuit,
      title: 'Responsible AI & Automation',
      description:
        'Exploring agentic tool calling and the ReAct pattern while adhering strictly to human-in-the-loop safeguards before triggering real-world actions.',
      tag: 'Agentic Prototypes',
      color: 'border-emerald-400/50 text-emerald-300 bg-emerald-950/40 shadow-emerald-500/10'
    }
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Heading (Balanced Sleek Typography) */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold shadow-sm shadow-cyan-500/20">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>01 // PROFESSIONAL BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            About Me &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-300">
              Engineering Focus
            </span>
          </h2>
          <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
            A transparent look into my academic foundation, problem-solving mindset, and software craftsmanship.
          </p>
        </div>

        {/* Narrative & Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Personal Narrative */}
          <div className="lg:col-span-6 space-y-5 text-slate-200 text-base sm:text-lg leading-relaxed">
            {personal.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-200/90 font-normal">
                {paragraph}
              </p>
            ))}

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3 font-mono text-sm shadow-xl shadow-black/40">
              <div className="text-slate-300 uppercase tracking-wider font-bold flex items-center gap-2 text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>What Recruiters Can Expect From Me</span>
              </div>
              <ul className="space-y-2 text-slate-200 text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold">&gt;</span>
                  <span>Honest communication with zero exaggerations about skill levels or experience.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold">&gt;</span>
                  <span>Curiosity paired with disciplined debugging and thorough documentation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold">&gt;</span>
                  <span>Readiness to write clean code, accept critical PR code reviews, and ship features rapidly.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Bento Grid of Core Pillars & Stats */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Quick Stat Bar (Balanced 3D Tilt Stats) */}
            <div className="grid grid-cols-3 gap-3.5 sm:gap-4">
              <TiltCard
                glareColor="rgba(56, 189, 248, 0.25)"
                className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 text-center shadow-xl shadow-cyan-950/40 tilt-pop"
              >
                <div className="text-3xl sm:text-4xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                  27
                </div>
                <div className="text-xs sm:text-sm text-slate-200 font-mono font-semibold mt-1">
                  Public Repos
                </div>
              </TiltCard>

              <TiltCard
                glareColor="rgba(59, 130, 246, 0.25)"
                className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/40 text-center shadow-xl shadow-blue-950/40 tilt-pop"
              >
                <div className="text-3xl sm:text-4xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                  {personal.cgpa}
                </div>
                <div className="text-xs sm:text-sm text-slate-200 font-mono font-semibold mt-1">
                  Verified CGPA
                </div>
              </TiltCard>

              <TiltCard
                glareColor="rgba(16, 185, 129, 0.25)"
                className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/40 text-center shadow-xl shadow-emerald-950/40 tilt-pop"
              >
                <div className="text-3xl sm:text-4xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  5
                </div>
                <div className="text-xs sm:text-sm text-slate-200 font-mono font-semibold mt-1">
                  Certifications
                </div>
              </TiltCard>
            </div>

            {/* 4 Bento Pillars with 3D Tilt Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {bentoPillars.map((pillar, i) => {
                const Icon = pillar.icon
                return (
                  <TiltCard
                    key={i}
                    glareColor="rgba(56, 189, 248, 0.2)"
                    className="p-6 sm:p-7 rounded-2xl glass-card space-y-3.5 flex flex-col justify-between border border-white/15 hover:border-cyan-400/60 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3 tilt-pop">
                        <div className={`p-3 rounded-xl border ${pillar.color} shadow-md`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-xs sm:text-sm font-mono font-bold px-3 py-1 rounded-full bg-slate-900/90 text-slate-200 border border-white/15">
                          {pillar.tag}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white tilt-pop leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-200 leading-relaxed mt-2.5">
                        {pillar.description}
                      </p>
                    </div>
                  </TiltCard>
                )
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
