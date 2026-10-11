import React from 'react'
import {
  Award,
  GraduationCap,
  ExternalLink,
  Calendar,
  Building2,
  FileCheck2
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export const Certifications: React.FC = () => {
  const { certifications, personal } = portfolioData

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>06 // CREDENTIALS &amp; ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education &amp; Verified Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Formal coursework and verified technical credentials demonstrating commitment to continuous learning and foundational rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formal Education Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Formal Engineering Degree
                  </h3>
                  <p className="text-xs text-slate-400">
                    Undergraduate Academic Track
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Program &amp; Major:
                  </span>
                  <div className="text-slate-100 font-semibold text-base mt-0.5">
                    {personal.degree}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Institution:
                  </span>
                  <div className="text-slate-200 mt-0.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{personal.institution}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Graduation:</span>
                    <span className="text-sm font-bold font-mono text-cyan-300 mt-0.5 block">
                      Class of {personal.graduationYear}
                    </span>
                    <span className="text-[10px] text-slate-500">Expected 4-Year B.Tech</span>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Verified CGPA:</span>
                    <span className="text-sm font-bold font-mono text-emerald-400 mt-0.5 block">
                      {personal.cgpa} / {personal.cgpaScale}
                    </span>
                    <span className="text-[10px] text-slate-500">Easily configurable</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">
                    Core Computer Science Subjects:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Data Structures & Algorithms',
                      'Database Management Systems',
                      'Object-Oriented Programming (Java)',
                      'Operating Systems',
                      'Computer Networks',
                      'Software Engineering'
                    ].map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 text-slate-300 text-[11px] font-mono border border-white/5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Industry Certifications Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between pb-2">
              <span>VERIFIED INDUSTRY CERTIFICATIONS ({certifications.length})</span>
              <span className="text-slate-500">Completed Coursework</span>
            </div>

            <div className="space-y-3.5">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 sm:p-5 rounded-xl glass-card border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/50 text-cyan-300 border border-cyan-800/50">
                        {cert.badgeText}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {cert.year}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-semibold text-slate-100">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-slate-400">
                      Issued by <span className="text-slate-300 font-medium">{cert.issuer}</span>
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono text-slate-400 bg-black/40 px-1.5 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-colors self-start sm:self-center shrink-0"
                    >
                      <FileCheck2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-black/30 border border-white/5 text-[11px] text-slate-500 font-mono">
              Note: Industry certifications represent academic and practical foundations, not senior enterprise work experience.
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
