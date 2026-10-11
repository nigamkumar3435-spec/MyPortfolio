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
    <section id="projects" className="py-20 relative">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>02 // FEATURED ENGINEERING WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Software &amp; ML Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Concrete implementations built with real database schemas, typed architectures, and reproducible evaluation pipelines.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-medium self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === 'fullstack'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full-Stack &amp; DB (2)
            </button>
            <button
              onClick={() => setActiveFilter('ml')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === 'ml'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Machine Learning (1)
            </button>
            <button
              onClick={() => setActiveFilter('agent')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === 'agent'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI Agents Lab (1)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const allStackTags = [
              ...(project.techStack.frontend || []),
              ...(project.techStack.backend || []),
              ...(project.techStack.database || []),
              ...(project.techStack.ml || [])
            ].slice(0, 5)

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl glass-card p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  
                  {/* Card Top Pill Bar */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                      {project.badge}
                    </span>
                    <span
                      className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                        project.status === 'Verified'
                          ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40'
                          : project.status === 'Completed'
                          ? 'bg-blue-950/40 text-blue-300 border-blue-800/40'
                          : 'bg-violet-950/40 text-violet-300 border-violet-800/40'
                      }`}
                    >
                      ● {project.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1.5 text-xs text-slate-300">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      Key Core Capability:
                    </div>
                    <p className="text-slate-300 line-clamp-2">
                      {project.keyFeatures[0]}
                    </p>
                  </div>

                  {/* Planned Feature Label Note (if applicable) */}
                  {project.id === 'pockit' && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-300/90 bg-amber-950/30 px-2.5 py-1 rounded-lg border border-amber-800/30">
                      <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>ML Anomaly &amp; Forecasting module clearly noted as planned work.</span>
                    </div>
                  )}

                  {project.id === 'foodwise-ai' && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-violet-300/90 bg-violet-950/30 px-2.5 py-1 rounded-lg border border-violet-800/30">
                      <Sparkles className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                      <span>Prototyping &amp; exploration lab: Multi-step ReAct agent simulation.</span>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {allStackTags.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-slate-300 text-[11px] font-mono border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Actions Footer */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors group-hover:translate-x-1 transition-transform"
                  >
                    <span>Inspect Technical Deep-Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
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
