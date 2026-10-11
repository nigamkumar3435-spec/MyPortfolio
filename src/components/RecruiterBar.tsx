import React from 'react'
import {
  GraduationCap,
  Award,
  Briefcase,
  MapPin,
  FileText,
  Mail,
  Zap
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
      label: 'Degree & Track',
      value: `${personal.degree}`,
      subtext: `${personal.institution} ('27)`,
      color: 'text-red-400 bg-red-950/50 border-red-500/30'
    },
    {
      icon: Award,
      label: 'Verified CGPA',
      value: `${personal.cgpa} / ${personal.cgpaScale}`,
      subtext: 'B.Tech CSE Track',
      color: 'text-yellow-400 bg-yellow-950/50 border-yellow-500/30'
    },
    {
      icon: Briefcase,
      label: 'Target Roles',
      value: 'SDE & Full-Stack Intern',
      subtext: 'AI/ML & Automation',
      color: 'text-amber-400 bg-amber-950/50 border-amber-500/30'
    },
    {
      icon: MapPin,
      label: 'Location & Work',
      value: 'Indore, MP, India',
      subtext: 'Open to Remote / Relocation',
      color: 'text-rose-400 bg-rose-950/50 border-rose-500/30'
    }
  ]

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 -mt-6 mb-20">
      <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-amber-500/25 shadow-2xl bg-black/60 backdrop-blur-xl">
        
        {/* Top Fast-Track Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-5 border-b border-white/10 gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400/80 animate-pulse"></span>
            <span className="text-sm font-mono font-bold uppercase tracking-wider text-yellow-300 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              30-Second Recruiter Fast-Track
            </span>
            <span className="text-slate-500 text-sm hidden sm:inline">•</span>
            <span className="text-sm text-slate-300 hidden sm:inline font-medium">
              Core credentials, verified CGPA, and availability at a glance
            </span>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-amber-500/40 transition-all shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4 text-yellow-400" />
              <span>Full ATS Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 hover:from-red-400 hover:to-yellow-300 transition-all shadow-sm shadow-red-500/25"
            >
              <Mail className="w-4 h-4 text-slate-950" />
              <span>Contact Directly</span>
            </a>
          </div>
        </div>

        {/* 4 Key Metric Cards (Enlarged with 3D Tilt & Vibrant Red/Yellow Border Accents) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {recruiterHighlights.map((item, index) => {
            const Icon = item.icon
            const cardBgColors = [
              'border-red-500/40 bg-gradient-to-br from-red-950/30 to-black/60',
              'border-yellow-500/40 bg-gradient-to-br from-yellow-950/30 to-black/60',
              'border-amber-500/40 bg-gradient-to-br from-amber-950/30 to-black/60',
              'border-rose-500/40 bg-gradient-to-br from-rose-950/30 to-black/60'
            ]

            return (
              <div
                key={index}
                className={`p-4 sm:p-4.5 rounded-2xl border ${cardBgColors[index]} flex items-start gap-3.5 transition-all shadow-xl hover:scale-[1.02]`}
              >
                <div className={`p-3 rounded-xl border ${item.color} shrink-0 shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold">
                    {item.label}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white truncate mt-0.5">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-300 truncate mt-0.5 font-medium">
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
