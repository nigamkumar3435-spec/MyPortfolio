import React, { useState } from 'react'
import {
  Cpu,
  Search
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
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
              <Cpu className="w-3.5 h-3.5" />
              <span>03 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Verified Technical Skills
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Honest representation of technologies I can explain in depth during a technical interview. No arbitrary 95% percentage bars.
            </p>
          </div>

          {/* Real-time Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g., SQL, Java, React)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Legend for Honest Proficiency */}
        <div className="mb-8 p-3 rounded-xl bg-black/40 border border-white/5 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
          <span className="text-slate-300 font-semibold">Proficiency Standard:</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span>Core Competency (Interview-Ready, Tested in Code)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
            <span>Working Knowledge (Practical Hands-On Usage)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-400"></span>
            <span>Active Exploration (Foundations &amp; Prototyping)</span>
          </div>
        </div>

        {/* Categorized Bento Skill Grid */}
        <div className="space-y-8">
          {filteredCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-6 rounded-2xl glass-card border border-white/10 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/5 gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {category.description}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 self-start sm:self-auto bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-800/40">
                  {category.skills.length} skills listed
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 pt-2">
                {category.skills.map((skill, sIdx) => {
                  const badgeColor =
                    skill.proficiency === 'Core Competency'
                      ? 'bg-cyan-950/50 text-cyan-300 border-cyan-800/50'
                      : skill.proficiency === 'Working Knowledge'
                      ? 'bg-blue-950/50 text-blue-300 border-blue-800/50'
                      : 'bg-violet-950/50 text-violet-300 border-violet-800/50'

                  return (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between space-y-2 group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border ${badgeColor} shrink-0`}
                        >
                          {skill.proficiency}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
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
