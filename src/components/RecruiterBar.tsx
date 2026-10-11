import React from 'react'
import {
  GraduationCap,
  Award,
  Briefcase,
  MapPin,
  FileText,
  Mail
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

interface RecruiterBarProps {
  onOpenResume: () => void
}

export const RecruiterBar: React.FC<RecruiterBarProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData

  const recruiterHighlights = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: `${personal.degree}`,
      subtext: `${personal.institution} ('27)`,
      color: 'text-cyan-400'
    },
    {
      icon: Award,
      label: 'Verified CGPA',
      value: `${personal.cgpa} / ${personal.cgpaScale}`,
      subtext: 'B.Tech CSE Track',
      color: 'text-amber-400'
    },
    {
      icon: Briefcase,
      label: 'Target Roles',
      value: 'SDE & Full-Stack Intern',
      subtext: 'AI/ML & Automation',
      color: 'text-emerald-400'
    },
    {
      icon: MapPin,
      label: 'Location & Work',
      value: 'Indore, MP, India',
      subtext: 'Open to Remote / Relocation',
      color: 'text-violet-400'
    }
  ]

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 -mt-4 mb-16">
      <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 shadow-xl bg-slate-900/70">
        
        {/* Top Fast-Track Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
              30-Second Recruiter Fast-Track
            </span>
            <span className="text-slate-500 text-xs hidden sm:inline">•</span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Core credentials and availability at a glance
            </span>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full ATS Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Directly</span>
            </a>
          </div>
        </div>

        {/* 4 Key Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recruiterHighlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3.5 hover:border-white/10 transition-colors"
              >
                <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-slate-100 truncate mt-0.5">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-400 truncate">
                    {item.subtext}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
