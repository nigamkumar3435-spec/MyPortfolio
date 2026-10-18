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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-stone-200 p-6 sm:p-8 space-y-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between pb-4 border-b border-stone-200 gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                {project.badge}
              </span>
              <span
                className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                  project.status === 'Verified'
                    ? 'bg-orange-50 text-orange-800 border-orange-200'
                    : project.status === 'Completed'
                    ? 'bg-amber-50 text-amber-800 border-amber-200'
                    : 'bg-rose-50 text-rose-800 border-rose-200'
                }`}
              >
                ● {project.status}
              </span>
            </div>
            
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-stone-600">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-100 border border-stone-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-stone-800" />
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3 h-3 text-stone-400" />
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 transition-all shadow-xs"
            >
              <span>Repository &amp; Demo</span>
              <ExternalLink className="w-3 h-3 text-amber-100" />
            </a>
          )}
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4.5 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-rose-700 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Problem Addressed</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-800 uppercase tracking-wider">
              <CheckCircle className="w-4 h-4 text-orange-600" />
              <span>Architectural Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-stone-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-orange-600" />
            <span>Implemented Features &amp; Capabilities</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feature, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5 text-xs text-stone-700"
              >
                <span className="text-orange-600 font-mono font-bold mt-0.5">0{i + 1}.</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Grid */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-stone-900 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-orange-600" />
            <span>Verified Technology Stack</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {project.techStack.frontend && (
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                <span className="text-[10px] font-mono text-orange-700 uppercase font-bold">Frontend</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.frontend.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white text-stone-700 text-[11px] border border-stone-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.backend && (
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                <span className="text-[10px] font-mono text-amber-700 uppercase font-bold">Backend</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.backend.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white text-stone-700 text-[11px] border border-stone-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.database && (
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                <span className="text-[10px] font-mono text-orange-700 uppercase font-bold">Database</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.database.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white text-stone-700 text-[11px] border border-stone-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.ml && (
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                <span className="text-[10px] font-mono text-rose-700 uppercase font-bold">ML &amp; Analysis</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.ml.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white text-stone-700 text-[11px] border border-stone-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.tools && (
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                <span className="text-[10px] font-mono text-stone-600 uppercase font-bold">Tools &amp; Env</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.tools.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white text-stone-700 text-[11px] border border-stone-200">
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
          <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-stone-900 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-orange-600" />
            <span>My Individual Contribution</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-700 bg-stone-50 p-4 rounded-2xl border border-stone-200">
            {project.myContribution.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-orange-600 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges & Engineering Decisions */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-stone-900 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Engineering Challenges &amp; Decisions</span>
          </h3>
          <div className="space-y-3">
            {project.challengesAndDecisions.map((cd, i) => (
              <div key={i} className="p-4.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs sm:text-sm">
                <div className="text-stone-900 font-medium">
                  <span className="font-mono text-[11px] text-rose-600 uppercase mr-2 font-bold">Challenge:</span>
                  {cd.challenge}
                </div>
                <div className="text-stone-900 font-medium">
                  <span className="font-mono text-[11px] text-orange-700 uppercase mr-2 font-bold">Solution:</span>
                  {cd.solution}
                </div>
                <div className="text-stone-600 italic text-xs pt-1 border-t border-stone-200">
                  <span className="font-mono not-italic text-stone-500 uppercase mr-2 font-semibold">Takeaway:</span>
                  {cd.takeaway}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Limitations (Honest & Credible) */}
        <div className="p-4.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-stone-700 uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-orange-600" />
            <span>Results &amp; Factual Limitations</span>
          </div>
          <div className="space-y-2 text-stone-700">
            <p><strong className="text-stone-900">Measured Outcome:</strong> {project.resultsAndLimitations.results}</p>
            <p><strong className="text-stone-900">Current Limitations:</strong> {project.resultsAndLimitations.limitations}</p>
          </div>
          {project.resultsAndLimitations.plannedImprovements && (
            <div className="pt-2 border-t border-stone-200">
              <span className="text-[11px] font-mono text-stone-500 uppercase block mb-1.5 font-bold">Planned Iterations:</span>
              <ul className="space-y-1 text-xs text-stone-600">
                {project.resultsAndLimitations.plannedImprovements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-orange-600 mt-0.5">→</span>
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
