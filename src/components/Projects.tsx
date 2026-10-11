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
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-gradient-to-l from-red-600/10 via-amber-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header (Enlarged Typography & Neon Tag) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono font-bold shadow-sm shadow-red-500/20">
              <FolderGit2 className="w-4 h-4 text-red-400" />
              <span>02 // FEATURED ENGINEERING WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Featured Software &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-yellow-300">
                ML Systems
              </span>
            </h2>
            <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
              Concrete implementations built with real database schemas, typed architectures, and reproducible evaluation pipelines.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/15 text-sm font-semibold self-start md:self-auto shadow-xl shadow-black/40">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 text-slate-950 font-bold shadow-md shadow-red-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeFilter === 'fullstack'
                  ? 'bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 text-slate-950 font-bold shadow-md shadow-red-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Full-Stack &amp; DB (2)
            </button>
            <button
              onClick={() => setActiveFilter('ml')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeFilter === 'ml'
                  ? 'bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 text-slate-950 font-bold shadow-md shadow-red-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Machine Learning (1)
            </button>
            <button
              onClick={() => setActiveFilter('agent')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeFilter === 'agent'
                  ? 'bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 text-slate-950 font-bold shadow-md shadow-red-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              AI Agents Lab (1)
            </button>
          </div>
        </div>

        {/* Projects Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8">
          {filteredProjects.map((project) => {
            const allStackTags = [
              ...(project.techStack.frontend || []),
              ...(project.techStack.backend || []),
              ...(project.techStack.database || []),
              ...(project.techStack.ml || [])
            ].slice(0, 6)

            // Individual Project Color Identity
            let cardThemeClass = 'card-theme-flame'
            let glareColor = 'rgba(239, 68, 68, 0.3)'
            let titleHoverClass = 'group-hover:text-amber-300'
            let accentBorderClass = 'border-red-500/40'
            let buttonColorClass = 'text-amber-300 hover:text-yellow-200'

            if (project.id === 'blood-bank') {
              cardThemeClass = 'card-theme-red'
              glareColor = 'rgba(239, 68, 68, 0.35)'
              titleHoverClass = 'group-hover:text-red-300'
              accentBorderClass = 'border-red-500/40'
              buttonColorClass = 'text-red-300 hover:text-red-200'
            } else if (project.id === 'disease-risk') {
              cardThemeClass = 'card-theme-yellow'
              glareColor = 'rgba(250, 204, 21, 0.35)'
              titleHoverClass = 'group-hover:text-yellow-300'
              accentBorderClass = 'border-yellow-500/40'
              buttonColorClass = 'text-yellow-300 hover:text-yellow-200'
            } else if (project.id === 'foodwise-ai') {
              cardThemeClass = 'card-theme-amber'
              glareColor = 'rgba(245, 158, 11, 0.35)'
              titleHoverClass = 'group-hover:text-amber-300'
              accentBorderClass = 'border-amber-500/40'
              buttonColorClass = 'text-amber-300 hover:text-amber-200'
            }

            const statusColor =
              project.status === 'Verified'
                ? 'bg-red-950/80 text-red-300 border-red-400/60 shadow-md shadow-red-500/25'
                : project.status === 'Completed'
                ? 'bg-amber-950/80 text-amber-300 border-amber-400/60 shadow-md shadow-amber-500/25'
                : 'bg-yellow-950/80 text-yellow-300 border-yellow-400/60 shadow-md shadow-yellow-500/25'

            return (
              <TiltCard
                key={project.id}
                glareColor={glareColor}
                className={`group rounded-3xl p-7 sm:p-8 flex flex-col justify-between border ${accentBorderClass} ${cardThemeClass} transition-all duration-300 shadow-2xl shadow-black/60`}
              >
                <div className="space-y-5">
                  
                  {/* Card Top Pill Bar */}
                  <div className="flex items-center justify-between tilt-pop">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-black/80 text-white border border-white/20 shadow-md">
                      {project.badge}
                    </span>
                    <span
                      className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${statusColor}`}
                    >
                      ● {project.status}
                    </span>
                  </div>

                  {/* Title & Tagline (Balanced Typography) */}
                  <div className="space-y-1.5 tilt-pop">
                    <h3 className={`text-2xl sm:text-3xl font-extrabold text-white ${titleHoverClass} transition-colors tracking-tight leading-snug`}>
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-slate-300 leading-snug">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2 text-sm text-slate-200 tilt-pop shadow-inner">
                    <div className="text-xs font-mono uppercase tracking-wider font-extrabold flex items-center gap-2 text-amber-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      Key Core Capability:
                    </div>
                    <p className="text-slate-100 font-medium leading-relaxed text-xs sm:text-sm">
                      {project.keyFeatures[0]}
                    </p>
                  </div>

                  {/* Planned Feature Label Note (if applicable) */}
                  {project.id === 'pockit' && (
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-300 bg-amber-950/50 px-3.5 py-1.5 rounded-xl border border-amber-500/50">
                      <Info className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>ML Anomaly &amp; Forecasting module clearly noted as planned work.</span>
                    </div>
                  )}

                  {project.id === 'foodwise-ai' && (
                    <div className="flex items-center gap-2 text-xs font-mono text-yellow-300 bg-yellow-950/50 px-3.5 py-1.5 rounded-xl border border-yellow-500/50">
                      <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" />
                      <span>Prototyping &amp; exploration lab: Multi-step ReAct agent simulation.</span>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="pt-1 flex flex-wrap gap-2">
                    {allStackTags.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md text-slate-100 text-xs font-mono font-medium border border-white/15 hover:border-amber-400 hover:text-amber-300 hover:scale-105 transition-all shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Actions Footer */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-4 tilt-pop">
                  <button
                    onClick={() => onSelectProject(project)}
                    className={`inline-flex items-center gap-2 text-sm sm:text-base font-bold ${buttonColorClass} transition-all group-hover:translate-x-1 cursor-pointer`}
                  >
                    <span>Inspect Technical Deep-Dive</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-black/70 hover:bg-black/90 border border-white/15 hover:border-amber-400 text-slate-200 hover:text-amber-300 transition-all shadow-lg hover:scale-110"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon className="w-4.5 h-4.5" />
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
