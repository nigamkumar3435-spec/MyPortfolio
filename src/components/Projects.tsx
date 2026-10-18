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
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-semibold">
              <FolderGit2 className="w-4 h-4 text-orange-600" />
              <span>02 // FEATURED ENGINEERING WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Featured Software &amp;{' '}
              <span className="text-orange-600">
                ML Systems
              </span>
            </h2>
            <p className="text-stone-600 text-base max-w-3xl leading-relaxed">
              Concrete implementations built with real database schemas, typed architectures, and reproducible evaluation pipelines.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200 text-sm font-semibold self-start md:self-auto shadow-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeFilter === 'fullstack'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              Full-Stack &amp; DB (2)
            </button>
            <button
              onClick={() => setActiveFilter('ml')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeFilter === 'ml'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              Machine Learning (1)
            </button>
            <button
              onClick={() => setActiveFilter('agent')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeFilter === 'agent'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
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

            const statusColor =
              project.status === 'Verified'
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : project.status === 'Completed'
                ? 'bg-amber-50 text-amber-800 border-amber-200'
                : 'bg-orange-50 text-orange-800 border-orange-200'

            return (
              <TiltCard
                key={project.id}
                glareColor="rgba(254, 243, 199, 0.75)"
                className="group rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-stone-200/90 bg-white hover:border-amber-300 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div className="space-y-5">
                  
                  {/* Card Top Pill Bar */}
                  <div className="flex items-center justify-between tilt-pop">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                      {project.badge}
                    </span>
                    <span
                      className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${statusColor}`}
                    >
                      ● {project.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5 tilt-pop">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 group-hover:text-orange-600 transition-colors tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-stone-600 leading-snug">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/70 space-y-2 text-sm text-stone-700 tilt-pop">
                    <div className="text-xs font-mono uppercase tracking-wider font-bold flex items-center gap-2 text-amber-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Key Core Capability:
                    </div>
                    <p className="text-stone-700 font-medium leading-relaxed text-xs sm:text-sm">
                      {project.keyFeatures[0]}
                    </p>
                  </div>

                  {/* Planned Feature Label Note (if applicable) */}
                  {project.id === 'pockit' && (
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-900 bg-amber-50 px-3.5 py-1.5 rounded-xl border border-amber-200">
                      <Info className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>ML Anomaly &amp; Forecasting module clearly noted as planned work.</span>
                    </div>
                  )}

                  {project.id === 'foodwise-ai' && (
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-900 bg-amber-50 px-3.5 py-1.5 rounded-xl border border-amber-200">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Prototyping &amp; exploration lab: Multi-step ReAct agent simulation.</span>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="pt-1 flex flex-wrap gap-2">
                    {allStackTags.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-stone-100 text-stone-700 text-xs font-mono font-medium border border-stone-200 hover:border-amber-300 hover:text-stone-900 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Actions Footer */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between gap-4 tilt-pop">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-orange-600 hover:text-orange-800 transition-all group-hover:translate-x-1 cursor-pointer"
                  >
                    <span>Inspect Technical Deep-Dive</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 hover:text-stone-900 transition-all shadow-xs"
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
