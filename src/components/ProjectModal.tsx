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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                {project.badge}
              </span>
              <span
                className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                  project.status === 'Verified'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : project.status === 'Completed'
                    ? 'bg-sky-50 text-sky-700 border-sky-200'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}
              >
                ● {project.status}
              </span>
            </div>
            
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-slate-600">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-slate-800" />
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xs"
            >
              <span>Repository &amp; Demo</span>
              <ExternalLink className="w-3 h-3 text-slate-300" />
            </a>
          )}
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-rose-700 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Problem Addressed</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wider">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Architectural Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Implemented Features &amp; Capabilities</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feature, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700"
              >
                <span className="text-indigo-600 font-mono font-semibold mt-0.5">0{i + 1}.</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Grid */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-900 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-indigo-600" />
            <span>Verified Technology Stack</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {project.techStack.frontend && (
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-[10px] font-mono text-indigo-600 uppercase font-semibold">Frontend</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.frontend.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white text-slate-700 text-[11px] border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.backend && (
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-[10px] font-mono text-sky-600 uppercase font-semibold">Backend</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.backend.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white text-slate-700 text-[11px] border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.database && (
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-[10px] font-mono text-amber-600 uppercase font-semibold">Database</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.database.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white text-slate-700 text-[11px] border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.ml && (
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-[10px] font-mono text-emerald-600 uppercase font-semibold">ML &amp; Analysis</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.ml.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white text-slate-700 text-[11px] border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.tools && (
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-[10px] font-mono text-slate-600 uppercase font-semibold">Tools &amp; Env</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.tools.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white text-slate-700 text-[11px] border border-slate-200">
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
          <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-900 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>My Individual Contribution</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
            {project.myContribution.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges & Engineering Decisions */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-900 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Engineering Challenges &amp; Decisions</span>
          </h3>
          <div className="space-y-3">
            {project.challengesAndDecisions.map((cd, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
                <div className="text-slate-900 font-medium">
                  <span className="font-mono text-[11px] text-rose-600 uppercase mr-2 font-semibold">Challenge:</span>
                  {cd.challenge}
                </div>
                <div className="text-slate-900 font-medium">
                  <span className="font-mono text-[11px] text-emerald-600 uppercase mr-2 font-semibold">Solution:</span>
                  {cd.solution}
                </div>
                <div className="text-slate-600 italic text-xs pt-1 border-t border-slate-200">
                  <span className="font-mono not-italic text-slate-500 uppercase mr-2">Takeaway:</span>
                  {cd.takeaway}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Limitations (Honest & Credible) */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-indigo-600" />
            <span>Results &amp; Factual Limitations</span>
          </div>
          <div className="space-y-2 text-slate-700">
            <p><strong className="text-slate-900">Measured Outcome:</strong> {project.resultsAndLimitations.results}</p>
            <p><strong className="text-slate-900">Current Limitations:</strong> {project.resultsAndLimitations.limitations}</p>
          </div>
          {project.resultsAndLimitations.plannedImprovements && (
            <div className="pt-2 border-t border-slate-200">
              <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1.5 font-medium">Planned Iterations:</span>
              <ul className="space-y-1 text-xs text-slate-600">
                {project.resultsAndLimitations.plannedImprovements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-0.5">→</span>
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
