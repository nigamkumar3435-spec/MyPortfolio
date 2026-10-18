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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium">
            <Award className="w-3.5 h-3.5 text-indigo-600" />
            <span>06 // CREDENTIALS &amp; ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education &amp;{' '}
            <span className="text-indigo-600">
              Verified Credentials
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            Formal coursework and verified technical credentials demonstrating commitment to continuous learning and foundational rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formal Education Card */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard
              maxTilt={6}
              scale={1.01}
              glareColor="rgba(255, 255, 255, 0.7)"
              className="rounded-2xl"
            >
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 space-y-5 shadow-xs">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                  <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200/80 text-indigo-600">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Formal Engineering Degree
                    </h3>
                    <p className="text-xs text-slate-500">
                      Undergraduate Academic Track
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Program &amp; Major:
                    </span>
                    <div className="text-slate-900 font-semibold text-base mt-0.5">
                      {personal.degree}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Institution:
                    </span>
                    <div className="text-slate-700 mt-0.5 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>{personal.institution}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Graduation:</span>
                      <span className="text-sm font-bold font-mono text-slate-900 mt-0.5 block">
                        Class of {personal.graduationYear}
                      </span>
                      <span className="text-[10px] text-slate-500">Expected 4-Year B.Tech</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Verified CGPA:</span>
                      <span className="text-sm font-bold font-mono text-indigo-600 mt-0.5 block">
                        {personal.cgpa} / {personal.cgpaScale}
                      </span>
                      <span className="text-[10px] text-slate-500">IIST Indore</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 space-y-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">
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
                          className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-[11px] font-mono border border-slate-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Verified Industry Certifications Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-slate-600 flex items-center justify-between pb-2 font-semibold">
              <span>VERIFIED INDUSTRY CERTIFICATIONS ({certifications.length})</span>
              <span className="text-indigo-600">Completed Coursework</span>
            </div>

            <div className="space-y-3.5">
              {certifications.map((cert) => (
                <TiltCard
                  key={cert.id}
                  maxTilt={5}
                  scale={1.01}
                  glareColor="rgba(255, 255, 255, 0.7)"
                  className="rounded-2xl"
                >
                  <div
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
                  >
                    <div className="space-y-1.5 min-w-0 tilt-pop">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {cert.badgeText}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {cert.year}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {cert.title}
                      </h3>

                      <p className="text-xs text-slate-600">
                        Issued by <span className="text-slate-900 font-semibold">{cert.issuer}</span>
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.skillsCovered.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-mono text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200"
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
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all self-start sm:self-center shrink-0 shadow-xs tilt-pop"
                      >
                        <FileCheck2 className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    )}
                  </div>
                </TiltCard>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-slate-100/70 border border-slate-200 text-[11px] text-slate-500 font-mono">
              Note: Industry certifications represent academic and practical foundations, not senior enterprise work experience.
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
