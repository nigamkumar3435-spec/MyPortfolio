import React, { useState } from 'react'
import {
  Cpu,
  Search,
  Sparkles
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCategories = skillCategories
    .map((category) => {
      const filteredSkills = category.skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.proficiency.toLowerCase().includes(searchQuery.toLowerCase())
      )
      return {
        ...category,
        skills: filteredSkills
      }
    })
    .filter((category) => category.skills.length > 0)

  return (
    <section id="skills" className="py-24 relative bg-black/40">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-red-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header (Bigger Typography & Search) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono font-bold shadow-sm shadow-red-500/20">
              <Cpu className="w-4 h-4 text-red-400" />
              <span>03 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Verified Technical{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-yellow-300">
                Skills
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Honest representation of technologies I can explain in depth during a technical interview. No arbitrary 95% percentage bars.
            </p>
          </div>

          {/* Real-time Search Box (Enlarged) */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g., SQL, Java, React)..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-900 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-red-500/30 focus:border-red-400 transition-all shadow-lg shadow-black/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white font-mono cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Legend for Honest Proficiency (Enlarged Badges) */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/10 flex flex-wrap items-center gap-6 text-sm text-slate-300 font-mono shadow-md">
          <span className="text-white font-bold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Proficiency Standard:
          </span>
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm shadow-yellow-400"></span>
            <span className="font-medium">Core Competency (Interview-Ready, Tested in Code)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400"></span>
            <span className="font-medium">Working Knowledge (Practical Hands-On Usage)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-red-400 shadow-sm shadow-red-400"></span>
            <span className="font-medium">Active Exploration (Foundations &amp; Prototyping)</span>
          </div>
        </div>

        {/* Categorized Bento Skill Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-7 sm:p-9 rounded-3xl glass-card border border-white/10 space-y-6 shadow-xl shadow-black/40"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 mt-1">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-amber-300 self-start sm:self-auto bg-amber-950/60 px-3.5 py-1 rounded-full border border-amber-500/40 shadow-sm">
                  {category.skills.length} skills listed
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4.5 pt-2">
                {category.skills.map((skill, sIdx) => {
                  const badgeColor =
                    skill.proficiency === 'Core Competency'
                      ? 'bg-yellow-950/80 text-yellow-300 border-yellow-400/60 shadow-sm shadow-yellow-500/30'
                      : skill.proficiency === 'Working Knowledge'
                      ? 'bg-amber-950/80 text-amber-300 border-amber-400/60 shadow-sm shadow-amber-500/30'
                      : 'bg-red-950/80 text-red-300 border-red-400/60 shadow-sm shadow-red-500/30'

                  return (
                    <div
                      key={sIdx}
                      className="p-5 rounded-2xl bg-black/60 border border-white/15 hover:border-amber-400/70 hover:bg-slate-900/90 transition-all flex flex-col justify-between space-y-3.5 group shadow-lg hover:scale-[1.02]"
                    >
                      <div className="flex items-start justify-between gap-2.5">
                        <span className="text-lg sm:text-xl font-black text-slate-100 group-hover:text-amber-300 transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${badgeColor} shrink-0`}
                        >
                          {skill.proficiency}
                        </span>
                      </div>
                      <p className="text-sm text-slate-200 leading-relaxed font-mono">
                        {skill.context}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
