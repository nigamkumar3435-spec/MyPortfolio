import React, { useEffect } from 'react'
import {
  X,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  ShieldAlert
} from 'lucide-react'
import type { Project } from '../types/portfolio'
import { GithubIcon } from './Icons'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-red-500/20 p-6 sm:p-8 space-y-6 shadow-2xl bg-[#0e0a0b]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-red-950/60 text-red-300 border border-red-800/60">
                {project.badge}
              </span>
              <span
                className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                  project.status === 'Verified'
                    ? 'bg-red-950/40 text-red-300 border-red-800/40'
                    : project.status === 'Completed'
                    ? 'bg-amber-950/40 text-amber-300 border-amber-800/40'
                    : 'bg-yellow-950/40 text-yellow-300 border-yellow-800/40'
                }`}
              >
                ● {project.status}
              </span>
            </div>
            
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-slate-300">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Links Bar */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-red-400" />
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 hover:from-red-400 hover:to-yellow-300 transition-all shadow-md shadow-red-500/20"
            >
              <span>Repository &amp; Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>Problem Addressed</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
              <CheckCircle className="w-4 h-4" />
              <span>Architectural Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-amber-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Implemented Features &amp; Capabilities</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feature, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-slate-900/40 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
              >
                <span className="text-amber-400 font-mono mt-0.5">0{i + 1}.</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Grid */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-300 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-red-400" />
            <span>Verified Technology Stack</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {project.techStack.frontend && (
              <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1.5">
                <span className="text-[10px] font-mono text-red-400 uppercase">Frontend</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.frontend.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white/5 text-slate-300 text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.backend && (
              <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1.5">
                <span className="text-[10px] font-mono text-amber-400 uppercase">Backend</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.backend.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white/5 text-slate-300 text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.database && (
              <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1.5">
                <span className="text-[10px] font-mono text-yellow-400 uppercase">Database</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.database.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white/5 text-slate-300 text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.ml && (
              <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1.5">
                <span className="text-[10px] font-mono text-red-400 uppercase">ML &amp; Analysis</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.ml.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white/5 text-slate-300 text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.tools && (
              <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1.5">
                <span className="text-[10px] font-mono text-amber-400 uppercase">Tools &amp; Env</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.tools.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white/5 text-slate-300 text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* My Individual Contribution */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-amber-300 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span>My Individual Contribution</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 bg-slate-900/50 p-4 rounded-xl border border-white/5">
            {project.myContribution.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges & Engineering Decisions */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-yellow-300 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-yellow-400" />
            <span>Engineering Challenges &amp; Decisions</span>
          </h3>
          <div className="space-y-3">
            {project.challengesAndDecisions.map((cd, i) => (
              <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs sm:text-sm">
                <div className="text-red-300 font-medium">
                  <span className="font-mono text-[11px] text-slate-400 uppercase mr-2">Challenge:</span>
                  {cd.challenge}
                </div>
                <div className="text-amber-300 font-medium">
                  <span className="font-mono text-[11px] text-slate-400 uppercase mr-2">Solution:</span>
                  {cd.solution}
                </div>
                <div className="text-slate-400 italic text-xs pt-1 border-t border-white/5">
                  <span className="font-mono not-italic text-slate-500 uppercase mr-2">Takeaway:</span>
                  {cd.takeaway}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Limitations (Honest & Credible) */}
        <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span>Results &amp; Factual Limitations</span>
          </div>
          <div className="space-y-2 text-slate-300">
            <p><strong className="text-amber-300">Measured Outcome:</strong> {project.resultsAndLimitations.results}</p>
            <p><strong className="text-yellow-300">Current Limitations:</strong> {project.resultsAndLimitations.limitations}</p>
          </div>
          {project.resultsAndLimitations.plannedImprovements && (
            <div className="pt-2 border-t border-white/5">
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1.5">Planned Iterations:</span>
              <ul className="space-y-1 text-xs text-slate-400">
                {project.resultsAndLimitations.plannedImprovements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">→</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
