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
import { TiltCard } from './TiltCard'

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
      color: 'text-orange-600 bg-orange-50 border-orange-200'
    },
    {
      icon: Award,
      label: 'Verified CGPA',
      value: `${personal.cgpa} / ${personal.cgpaScale}`,
      subtext: 'B.Tech CSE Track',
      color: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    {
      icon: Briefcase,
      label: 'Target Roles',
      value: 'SDE & Full-Stack Intern',
      subtext: 'AI/ML & Automation',
      color: 'text-rose-700 bg-rose-50 border-rose-200'
    },
    {
      icon: MapPin,
      label: 'Location & Work',
      value: 'Indore, MP, India',
      subtext: 'Open to Remote / Relocation',
      color: 'text-amber-700 bg-amber-50 border-amber-200'
    }
  ]

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 -mt-6 mb-20">
      <div className="rounded-3xl p-5 sm:p-7 border border-amber-200/70 bg-white/95 shadow-sm backdrop-blur-md">
        
        {/* Top Fast-Track Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-5 border-b border-amber-100 gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-mono font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              30-Second Recruiter Fast-Track
            </span>
            <span className="text-stone-300 text-sm hidden sm:inline">•</span>
            <span className="text-sm text-stone-600 hidden sm:inline font-medium">
              Core credentials, verified CGPA, and availability at a glance
            </span>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-stone-700 bg-stone-50 hover:bg-amber-50/70 border border-stone-200 transition-all shadow-xs cursor-pointer"
            >
              <FileText className="w-4 h-4 text-orange-600" />
              <span>Full ATS Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-all shadow-xs"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Contact Directly</span>
            </a>
          </div>
        </div>

        {/* 4 Key Metric Cards (Clean 3D Tilt Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {recruiterHighlights.map((item, index) => {
            const Icon = item.icon

            return (
              <TiltCard
                key={index}
                maxTilt={8}
                scale={1.02}
                glareColor="rgba(254, 243, 199, 0.75)"
                className="rounded-2xl"
              >
                <div
                  className="p-4 sm:p-4.5 rounded-2xl border border-stone-200/90 bg-stone-50/70 hover:bg-white hover:border-amber-300 flex items-start gap-3.5 transition-all shadow-xs h-full"
                >
                  <div className={`p-3 rounded-xl border ${item.color} shrink-0 shadow-xs tilt-pop`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 tilt-pop">
                    <div className="text-xs font-mono text-stone-500 uppercase tracking-wider font-semibold">
                      {item.label}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-stone-900 truncate mt-0.5">
                      {item.value}
                    </div>
                    <div className="text-xs text-stone-600 truncate mt-0.5 font-medium">
                      {item.subtext}
                    </div>
                  </div>
                </div>
              </TiltCard>
            )
          })}
        </div>

      </div>
    </div>
  )
}
