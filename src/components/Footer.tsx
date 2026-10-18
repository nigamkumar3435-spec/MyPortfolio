import React from 'react'
import {
  ArrowUp,
  Mail
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './Icons'

export const Footer: React.FC = () => {
  const { personal } = portfolioData

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-xs text-slate-600">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Logo & Headline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center font-mono font-bold text-white text-xs shadow-xs">
                NK
              </div>
              <span className="font-semibold text-slate-900 text-sm">
                {personal.name}
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-mono text-indigo-600 text-xs font-semibold">
                IIST Indore ('27)
              </span>
            </div>
            <p className="text-slate-500 text-xs max-w-md">
              {personal.supportingStatement}
            </p>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-indigo-600" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Integrity Standard */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>All systems verified • Zero fabricated metrics or experience claims</span>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <span>Built with React 19, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
