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
import { TiltCard } from './TiltCard'

export const Certifications: React.FC = () => {
  const { certifications, personal } = portfolioData

  return (
    <section id="certifications" className="py-20 relative">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono font-bold shadow-sm shadow-red-500/20">
            <Award className="w-3.5 h-3.5 text-red-400" />
            <span>06 // CREDENTIALS &amp; ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-yellow-300">
              Verified Credentials
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            Formal coursework and verified technical credentials demonstrating commitment to continuous learning and foundational rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formal Education Card */}
          <div className="lg:col-span-5 space-y-6 preserve-3d">
            <TiltCard
              maxTilt={5.5}
              scale={1.02}
              glareColor="rgba(239, 68, 68, 0.2)"
              className="p-6 sm:p-7 rounded-3xl glass-card border border-white/10 space-y-5 shadow-2xl shadow-black/50"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-white/10 tilt-pop">
                <div className="p-3 rounded-2xl bg-red-500/15 border border-red-500/30 text-red-400 shadow-md shadow-red-500/20">
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

              <div className="space-y-4 text-xs sm:text-sm preserve-3d">
                <div className="tilt-pop-sm">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Program &amp; Major:
                  </span>
                  <div className="text-slate-100 font-semibold text-base mt-0.5">
                    {personal.degree}
                  </div>
                </div>

                <div className="tilt-pop-sm">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Institution:
                  </span>
                  <div className="text-slate-200 mt-0.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{personal.institution}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 preserve-3d">
                  <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 shadow-lg tilt-pop">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Graduation:</span>
                    <span className="text-sm font-bold font-mono text-amber-300 mt-0.5 block">
                      Class of {personal.graduationYear}
                    </span>
                    <span className="text-[10px] text-slate-500">Expected 4-Year B.Tech</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 shadow-lg tilt-pop">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Verified CGPA:</span>
                    <span className="text-sm font-bold font-mono text-yellow-400 mt-0.5 block">
                      {personal.cgpa} / {personal.cgpaScale}
                    </span>
                    <span className="text-[10px] text-slate-500">IIST Indore</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-2 tilt-pop-sm">
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
                        className="px-2.5 py-1 rounded-lg bg-black/50 text-slate-300 text-[11px] font-mono border border-white/10 hover:border-amber-400/40 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Verified Industry Certifications Grid with 3D TiltCards */}
          <div className="lg:col-span-7 space-y-4 preserve-3d">
            <div className="text-xs font-mono text-slate-300 flex items-center justify-between pb-2 font-bold">
              <span>VERIFIED INDUSTRY CERTIFICATIONS ({certifications.length})</span>
              <span className="text-amber-400">Completed Coursework</span>
            </div>

            <div className="space-y-3.5">
              {certifications.map((cert) => (
                <TiltCard
                  key={cert.id}
                  maxTilt={3.5}
                  scale={1.015}
                  glareColor="rgba(250, 204, 21, 0.15)"
                  className="p-5 rounded-2xl glass-card border border-white/10 hover:border-amber-500/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl hover:bg-black/70"
                >
                  <div className="space-y-1.5 min-w-0 tilt-pop-sm">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-950/60 text-amber-300 border border-amber-800/60 shadow-sm">
                        {cert.badgeText}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {cert.year}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-slate-300">
                      Issued by <span className="text-amber-300 font-semibold">{cert.issuer}</span>
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded-md border border-white/10"
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-black/80 hover:bg-black border border-white/20 hover:border-amber-400/80 transition-all self-start sm:self-center shrink-0 shadow-lg tilt-pop hover:scale-105"
                    >
                      <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  )}
                </TiltCard>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-[11px] text-slate-400 font-mono">
              Note: Industry certifications represent academic and practical foundations, not senior enterprise work experience.
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
