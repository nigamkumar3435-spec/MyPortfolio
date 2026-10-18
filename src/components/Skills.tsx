import React, { useState } from 'react'
import {
  Cpu,
  Search,
  Sparkles
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { TiltCard } from './TiltCard'

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
    <section id="skills" className="py-24 relative bg-stone-100/40">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/90 border border-amber-200/80 text-amber-900 text-xs font-mono font-semibold shadow-xs">
              <Cpu className="w-4 h-4 text-orange-600" />
              <span>03 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Verified <span className="text-orange-600">Technical Skills</span>
            </h2>
            <p className="text-stone-600 text-base max-w-3xl leading-relaxed">
              Honest representation of technologies I can explain in depth during a technical interview. No arbitrary percentage bars.
            </p>
          </div>

          {/* Real-time Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g., SQL, Java, React)..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-orange-500 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 font-mono cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Legend for Honest Proficiency - Warm Accents */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 flex flex-wrap items-center gap-6 text-sm text-stone-700 font-mono shadow-xs">
          <span className="text-stone-900 font-bold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-orange-600" />
            Proficiency Standard:
          </span>
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-xs"></span>
            <span className="font-medium text-xs sm:text-sm text-stone-800">Core Competency (Interview-Ready, Tested in Code)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-xs"></span>
            <span className="font-medium text-xs sm:text-sm text-stone-800">Working Knowledge (Practical Hands-On Usage)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-xs"></span>
            <span className="font-medium text-xs sm:text-sm text-stone-800">Active Exploration (Foundations &amp; Prototyping)</span>
          </div>
        </div>

        {/* Categorized Bento Skill Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-7 sm:p-9 rounded-3xl bg-white border border-stone-200/90 space-y-6 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-100 gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm text-stone-600 mt-1">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold text-stone-700 self-start sm:self-auto bg-stone-100 px-3.5 py-1 rounded-full border border-stone-200">
                  {category.skills.length} skills listed
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pt-2">
                {category.skills.map((skill, sIdx) => {
                  const badgeColor =
                    skill.proficiency === 'Core Competency'
                      ? 'bg-orange-50 text-orange-800 border-orange-200'
                      : skill.proficiency === 'Working Knowledge'
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : 'bg-rose-50 text-rose-800 border-rose-200'

                  return (
                    <TiltCard
                      key={sIdx}
                      maxTilt={8}
                      scale={1.02}
                      glareColor="rgba(254, 243, 199, 0.7)"
                      className="rounded-2xl h-full"
                    >
                      <div className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200 hover:border-amber-300 hover:bg-white transition-all flex flex-col justify-between space-y-3.5 group shadow-xs h-full">
                        <div className="flex items-start justify-between gap-2.5 tilt-pop">
                          <span className="text-lg font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                            {skill.name}
                          </span>
                          <span
                            className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border ${badgeColor} shrink-0`}
                          >
                            {skill.proficiency}
                          </span>
                        </div>
                        <p className="text-sm text-stone-600 leading-relaxed font-sans tilt-pop">
                          {skill.context}
                        </p>
                      </div>
                    </TiltCard>
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
