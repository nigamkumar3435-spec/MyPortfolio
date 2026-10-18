import React from 'react'
import {
  Layers,
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
      icon: Layers,
      title: 'First-Principles Engineering',
      description:
        'I prioritize core data structures, algorithms, and modular design patterns over surface-level frameworks. Clean abstractions make scaling intuitive.',
      tag: 'DSA & Systems',
      color: 'border-indigo-200 text-indigo-600 bg-indigo-50'
    },
    {
      icon: Database,
      title: 'Relational Database Integrity',
      description:
        'Experienced in designing normalized (3NF) MySQL schemas, enforcing ACID transactions, row-level locks, and utilizing prepared statements against SQL injection.',
      tag: 'MySQL & JDBC',
      color: 'border-emerald-200 text-emerald-700 bg-emerald-50'
    },
    {
      icon: Cpu,
      title: 'Empirical Machine Learning',
      description:
        'Focus on verified data preprocessing, preventing train/test data leakage, tuning decision thresholds, and prioritizing Recall over uncalibrated accuracy scores.',
      tag: 'Scikit-Learn & EDA',
      color: 'border-sky-200 text-sky-700 bg-sky-50'
    },
    {
      icon: BrainCircuit,
      title: 'Responsible AI & Automation',
      description:
        'Exploring agentic tool calling and the ReAct pattern while adhering strictly to human-in-the-loop safeguards before triggering real-world actions.',
      tag: 'Agentic Prototypes',
      color: 'border-amber-200 text-amber-700 bg-amber-50'
    }
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Heading */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-semibold">
            <Compass className="w-4 h-4 text-indigo-600" />
            <span>01 // PROFESSIONAL BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            About Me &amp; Engineering Focus
          </h2>
          <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
            A transparent look into my academic foundation, problem-solving mindset, and software craftsmanship.
          </p>
        </div>

        {/* Narrative & Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Personal Narrative */}
          <div className="lg:col-span-6 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
            {personal.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-700 font-normal">
                {paragraph}
              </p>
            ))}

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 font-mono text-sm shadow-xs">
              <div className="text-slate-900 uppercase tracking-wider font-bold flex items-center gap-2 text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>What Recruiters Can Expect From Me</span>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="text-indigo-600 font-bold font-mono">&gt;</span>
                  <span>Honest communication with zero exaggerations about skill levels or experience.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-indigo-600 font-bold font-mono">&gt;</span>
                  <span>Curiosity paired with disciplined debugging and thorough documentation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-indigo-600 font-bold font-mono">&gt;</span>
                  <span>Readiness to write clean code, accept critical PR code reviews, and ship features rapidly.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Bento Grid of Core Pillars & Stats */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Quick Stat Bar */}
            <div className="grid grid-cols-3 gap-3.5 sm:gap-4">
              <TiltCard
                glareColor="rgba(255, 255, 255, 0.7)"
                className="p-5 rounded-2xl bg-white border border-slate-200 text-center shadow-xs tilt-pop"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900">
                  27
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-mono font-medium mt-1">
                  Public Repos
                </div>
              </TiltCard>

              <TiltCard
                glareColor="rgba(255, 255, 255, 0.7)"
                className="p-5 rounded-2xl bg-white border border-slate-200 text-center shadow-xs tilt-pop"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900">
                  {personal.cgpa}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-mono font-medium mt-1">
                  Verified CGPA
                </div>
              </TiltCard>

              <TiltCard
                glareColor="rgba(255, 255, 255, 0.7)"
                className="p-5 rounded-2xl bg-white border border-slate-200 text-center shadow-xs tilt-pop"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900">
                  5
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-mono font-medium mt-1">
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
                    glareColor="rgba(255, 255, 255, 0.7)"
                    className="p-6 sm:p-7 rounded-2xl bg-white space-y-3.5 flex flex-col justify-between border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3 tilt-pop">
                        <div className={`p-3 rounded-xl border ${pillar.color} shadow-xs`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-xs sm:text-sm font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {pillar.tag}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tilt-pop leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2.5">
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
