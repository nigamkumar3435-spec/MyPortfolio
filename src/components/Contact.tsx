import React, { useState } from 'react'
import {
  Mail,
  Send,
  Copy,
  Check,
  FileText,
  AlertCircle,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { portfolioData } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './Icons'

interface ContactProps {
  onOpenResume: () => void
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData
  const [copiedEmail, setCopiedEmail] = useState(false)

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'SDE / Engineering Internship',
    message: ''
  })
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const validateForm = () => {
    const errors: { [key: string]: string } = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please provide your name (at least 2 characters).'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid work or personal email address.'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide a brief message (minimum 10 characters).'
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate asynchronous delivery with defensive timeout
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Trigger celebratory recruiter confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#ef4444', '#f59e0b', '#facc15', '#fbbf24']
      })

      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        role: 'SDE / Engineering Internship',
        message: ''
      })
    } catch {
      setSubmitError('Failed to dispatch message. Please use direct email link below.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Pre-filled mailto URL for direct fallback
  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    `Engineering Opportunity - ${formData.role || 'SDE Opportunity'}`
  )}&body=${encodeURIComponent(
    `Hi Nigam,\n\nI came across your portfolio and would like to connect regarding an opportunity at our organization.\n\nBest regards,\n${formData.name || ''}`
  )}`

  return (
    <section id="contact" className="py-24 relative bg-black/60">
      {/* Background Chromatic Accent */}
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[350px] bg-gradient-to-tr from-red-600/10 via-amber-500/10 to-yellow-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Heading (Bigger Typography & Neon Accents) */}
        <div className="space-y-3 mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono font-bold shadow-sm shadow-red-500/20">
            <Mail className="w-4 h-4 text-red-400" />
            <span>07 // GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Let's Discuss{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-yellow-300">
              Opportunities
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed">
            Have an interesting problem to solve? I'd love to discuss how I can contribute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Recruiter Quick Reach */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl glass-card border border-white/15 space-y-6 shadow-2xl">
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Direct Communication Channels
                </h3>
                <p className="text-sm text-slate-300">
                  Feel free to reach out directly via email, LinkedIn, or explore my GitHub.
                </p>
              </div>

              {/* Email Copy Card (Enlarged) */}
              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2.5 shadow-md">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold block">
                  Primary Professional Email:
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-base sm:text-lg font-mono font-bold text-yellow-300 truncate">
                    {personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0 cursor-pointer shadow-sm"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-5 h-5 text-amber-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Direct Action Links (Larger Text & Borders) */}
              <div className="space-y-3 pt-1">
                <a
                  href={mailtoHref}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-white/10 hover:border-amber-400/50 text-sm font-semibold text-slate-100 transition-all shadow-md group"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-amber-400" />
                    <span>Launch Local Email Client (mailto)</span>
                  </span>
                  <span className="text-amber-400 font-mono text-sm group-hover:translate-x-1 transition-transform">&gt;</span>
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-white/10 hover:border-amber-400/50 text-sm font-semibold text-slate-100 transition-all shadow-md group"
                >
                  <span className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-amber-400" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <span className="text-amber-400 font-mono text-sm group-hover:translate-x-1 transition-transform">&gt;</span>
                </a>

                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-white/10 hover:border-red-400/50 text-sm font-semibold text-slate-100 transition-all shadow-md group"
                >
                  <span className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-red-400" />
                    <span>GitHub Profile (27 Repos)</span>
                  </span>
                  <span className="text-red-400 font-mono text-sm group-hover:translate-x-1 transition-transform">&gt;</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-white/10 hover:border-yellow-400/50 text-sm font-semibold text-slate-100 transition-all shadow-md cursor-pointer group"
                >
                  <span className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-yellow-400" />
                    <span>View &amp; Download ATS Resume</span>
                  </span>
                  <span className="text-yellow-400 font-mono text-sm group-hover:translate-x-1 transition-transform">&gt;</span>
                </button>
              </div>

              {/* Turnaround Time SLA */}
              <div className="pt-3 border-t border-white/10 flex items-center gap-2.5 text-xs sm:text-sm font-mono text-slate-300 font-medium">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Turnaround: Typical reply within 24 hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form (Enlarged) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl glass-panel border border-white/15 space-y-7 shadow-2xl">
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                  <span>Send a Direct Message</span>
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </h3>
                <p className="text-sm text-slate-300">
                  Whether discussing an internship opportunity or asking about my projects, drop a note below.
                </p>
              </div>

              {submitSuccess ? (
                <div className="p-8 rounded-2xl bg-amber-950/50 border border-amber-400 space-y-4 text-center animate-in fade-in duration-300 shadow-xl shadow-amber-950/30">
                  <div className="w-14 h-14 rounded-full bg-amber-500/20 text-yellow-400 flex items-center justify-center mx-auto shadow-sm shadow-amber-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 max-w-md mx-auto leading-relaxed">
                    Your message has been captured. I will review your inquiry and follow up promptly via your provided email address.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-3 text-sm font-mono text-amber-400 font-bold hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-950/60 border border-red-500 text-red-200 text-sm flex items-center gap-2.5">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-mono font-semibold text-slate-200 block">
                      Your Name / Organization <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Sarah Chen (Tech Recruiter @ Company)"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900 border text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-red-500/30 focus:border-red-400 transition-all ${
                        formErrors.name ? 'border-red-500' : 'border-white/15'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-400 font-mono font-medium">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-mono font-semibold text-slate-200 block">
                      Your Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., recruiter@company.com"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900 border text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-red-500/30 focus:border-red-400 transition-all ${
                        formErrors.email ? 'border-red-500' : 'border-white/15'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-400 font-mono font-medium">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Role / Inquiry Scope */}
                  <div className="space-y-2">
                    <label htmlFor="contact-role" className="text-sm font-mono font-semibold text-slate-200 block">
                      Opportunity / Discussion Scope
                    </label>
                    <select
                      id="contact-role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-900 border border-white/15 text-sm sm:text-base text-white focus:outline-none focus:ring-4 focus:ring-red-500/30 focus:border-red-400 transition-all"
                    >
                      <option value="Software Development Intern">Software Development Intern (SDE)</option>
                      <option value="Full-Stack Developer Intern">Full-Stack Developer Intern</option>
                      <option value="AI/ML Intern">AI / Machine Learning Intern</option>
                      <option value="AI Automation & Agentic Prototype">AI Automation &amp; Agentic Prototype</option>
                      <option value="Technical Networking & Inquiry">Technical Networking &amp; Other</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-sm font-mono font-semibold text-slate-200 block">
                      Message / Role Details <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about your team, tech stack, or the opportunity..."
                      className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900 border text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-red-500/30 focus:border-red-400 transition-all resize-none ${
                        formErrors.message ? 'border-red-500' : 'border-white/15'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-xs text-red-400 font-mono font-medium">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button (Enlarged) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl text-base font-bold text-slate-950 bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 hover:from-red-400 hover:to-yellow-300 disabled:opacity-60 transition-all shadow-xl shadow-red-500/30 hover:shadow-red-500/50 hover:scale-[1.01] cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                      <span>{isSubmitting ? 'Transmitting Message...' : "Let's Connect"}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
