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
    <footer className="border-t border-white/10 bg-[#080506] py-12 text-xs text-slate-400">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Headline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-yellow-400 flex items-center justify-center font-mono font-black text-slate-950 text-xs shadow-md shadow-red-500/20">
                NK
              </div>
              <span className="font-semibold text-slate-200 text-sm">
                {personal.name}
              </span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-yellow-400 text-xs font-bold">
                IIST Indore ('27)
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-md">
              {personal.supportingStatement}
            </p>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/5 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/5 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/5 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Integrity Standard */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>All systems verified • Zero fabricated metrics or experience claims</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Built with React 19, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
