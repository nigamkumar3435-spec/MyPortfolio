import React, { useState } from 'react'
import {
  FolderGit2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Info
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import type { Project } from '../types/portfolio'
import { GithubIcon } from './Icons'
import { TiltCard } from './TiltCard'

interface ProjectsProps {
  onSelectProject: (project: Project) => void
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const { projects } = portfolioData
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'ml' | 'agent'>('all')

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true
    return project.category === activeFilter
  })

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Chromatic Accent */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-gradient-to-l from-violet-600/10 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header (Enlarged Typography & Neon Tag) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold shadow-sm shadow-cyan-500/20">
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              <span>02 // FEATURED ENGINEERING WORK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Featured Software &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                ML Systems
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Concrete implementations built with real database schemas, typed architectures, and reproducible evaluation pipelines.
            </p>
          </div>

          {/* Category Filter Tabs (Larger & More Colorful) */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 text-sm font-semibold self-start md:self-auto shadow-lg shadow-black/40">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeFilter === 'fullstack'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Full-Stack &amp; DB (2)
            </button>
            <button
              onClick={() => setActiveFilter('ml')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeFilter === 'ml'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Machine Learning (1)
            </button>
            <button
              onClick={() => setActiveFilter('agent')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeFilter === 'agent'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              AI Agents Lab (1)
            </button>
          </div>
        </div>

        {/* Projects Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => {
            const allStackTags = [
              ...(project.techStack.frontend || []),
              ...(project.techStack.backend || []),
              ...(project.techStack.database || []),
              ...(project.techStack.ml || [])
            ].slice(0, 6)

            // Individual Project Color Identity
            let cardThemeClass = 'card-theme-emerald'
            let glareColor = 'rgba(16, 185, 129, 0.3)'
            let titleHoverClass = 'group-hover:text-emerald-300'
            let accentBorderClass = 'border-emerald-500/40'
            let buttonColorClass = 'text-emerald-300 hover:text-emerald-200'

            if (project.id === 'blood-bank') {
              cardThemeClass = 'card-theme-rose'
              glareColor = 'rgba(244, 63, 94, 0.3)'
              titleHoverClass = 'group-hover:text-rose-300'
              accentBorderClass = 'border-rose-500/40'
              buttonColorClass = 'text-rose-300 hover:text-rose-200'
            } else if (project.id === 'disease-risk') {
              cardThemeClass = 'card-theme-violet'
              glareColor = 'rgba(168, 85, 247, 0.3)'
              titleHoverClass = 'group-hover:text-purple-300'
              accentBorderClass = 'border-purple-500/40'
              buttonColorClass = 'text-purple-300 hover:text-purple-200'
            } else if (project.id === 'foodwise-ai') {
              cardThemeClass = 'card-theme-amber'
              glareColor = 'rgba(245, 158, 11, 0.3)'
              titleHoverClass = 'group-hover:text-amber-300'
              accentBorderClass = 'border-amber-500/40'
              buttonColorClass = 'text-amber-300 hover:text-amber-200'
            }

            const statusColor =
              project.status === 'Verified'
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-400/60 shadow-md shadow-emerald-500/25'
                : project.status === 'Completed'
                ? 'bg-cyan-950/80 text-cyan-300 border-cyan-400/60 shadow-md shadow-cyan-500/25'
                : 'bg-violet-950/80 text-violet-300 border-violet-400/60 shadow-md shadow-violet-500/25'

            return (
              <TiltCard
                key={project.id}
                glareColor={glareColor}
                className={`group rounded-3xl p-8 sm:p-10 flex flex-col justify-between border ${accentBorderClass} ${cardThemeClass} transition-all duration-300 shadow-2xl shadow-black/60`}
              >
                <div className="space-y-6">
                  
                  {/* Card Top Pill Bar */}
                  <div className="flex items-center justify-between tilt-pop">
                    <span className="text-xs sm:text-sm font-mono font-bold px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white border border-white/20 shadow-md">
                      {project.badge}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-mono font-bold px-3.5 py-1.5 rounded-full border ${statusColor}`}
                    >
                      ● {project.status}
                    </span>
                  </div>

                  {/* Title & Tagline (Bigger, Bolder Typography) */}
                  <div className="space-y-2 tilt-pop">
                    <h3 className={`text-3xl sm:text-4xl font-black text-white ${titleHoverClass} transition-colors tracking-tight leading-tight`}>
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-slate-300 leading-snug">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description (Larger text & high contrast) */}
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2.5 text-base text-slate-200 tilt-pop shadow-inner">
                    <div className="text-xs sm:text-sm font-mono uppercase tracking-wider font-extrabold flex items-center gap-2 text-cyan-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      Key Core Capability:
                    </div>
                    <p className="text-slate-100 font-medium leading-relaxed text-sm sm:text-base">
                      {project.keyFeatures[0]}
                    </p>
                  </div>

                  {/* Planned Feature Label Note (if applicable) */}
                  {project.id === 'pockit' && (
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-amber-300 bg-amber-950/50 px-4 py-2 rounded-xl border border-amber-500/50">
                      <Info className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>ML Anomaly &amp; Forecasting module clearly noted as planned work.</span>
                    </div>
                  )}

                  {project.id === 'foodwise-ai' && (
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-violet-300 bg-violet-950/50 px-4 py-2 rounded-xl border border-violet-500/50">
                      <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
                      <span>Prototyping &amp; exploration lab: Multi-step ReAct agent simulation.</span>
                    </div>
                  )}

                  {/* Tech Stack Pills (Vibrant & Readable) */}
                  <div className="pt-2 flex flex-wrap gap-2.5">
                    {allStackTags.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-slate-100 text-xs sm:text-sm font-mono font-semibold border border-white/15 hover:border-cyan-400 hover:text-cyan-300 hover:scale-105 transition-all shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Actions Footer */}
                <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between gap-4 tilt-pop">
                  <button
                    onClick={() => onSelectProject(project)}
                    className={`inline-flex items-center gap-2.5 text-base sm:text-lg font-bold ${buttonColorClass} transition-all group-hover:translate-x-1.5 cursor-pointer`}
                  >
                    <span>Inspect Technical Deep-Dive</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/15 hover:border-cyan-400 text-slate-200 hover:text-white transition-all shadow-lg hover:scale-110"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
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
