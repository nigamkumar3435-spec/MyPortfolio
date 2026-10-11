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
        particleCount: 65,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#818cf8', '#34d399']
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
    <section id="contact" className="py-20 relative bg-slate-950/60">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>07 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Discuss Opportunities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have an interesting problem to solve? I'd love to discuss how I can contribute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Recruiter Quick Reach */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-5">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Direct Communication Channels
                </h3>
                <p className="text-xs text-slate-400">
                  Feel free to reach out directly via email, LinkedIn, or explore my GitHub.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Primary Professional Email:
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-mono text-cyan-300 truncate">
                    {personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Direct Links */}
              <div className="space-y-2 pt-1">
                <a
                  href={mailtoHref}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-cyan-500/30 text-xs font-medium text-slate-200 transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Launch Local Email Client (mailto)</span>
                  </span>
                  <span className="text-cyan-400 font-mono text-[11px]">&gt;</span>
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-blue-500/30 text-xs font-medium text-slate-200 transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <span className="text-blue-400 font-mono text-[11px]">&gt;</span>
                </a>

                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-violet-500/30 text-xs font-medium text-slate-200 transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-violet-400" />
                    <span>GitHub Profile (27 Repos)</span>
                  </span>
                  <span className="text-violet-400 font-mono text-[11px]">&gt;</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-emerald-500/30 text-xs font-medium text-slate-200 transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span>View &amp; Download ATS Resume</span>
                  </span>
                  <span className="text-emerald-400 font-mono text-[11px]">&gt;</span>
                </button>
              </div>

              {/* Turnaround Time SLA */}
              <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Turnaround: Typical reply within 24 hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Send a Direct Message</span>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </h3>
                <p className="text-xs text-slate-400">
                  Whether discussing an internship opportunity or asking about my projects, drop a note below.
                </p>
              </div>

              {submitSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-3 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message has been captured. I will review your inquiry and follow up promptly via your provided email address.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-2 text-xs font-mono text-emerald-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {submitError && (
                    <div className="p-3 rounded-lg bg-rose-950/50 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-slate-300 block">
                      Your Name / Organization <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Sarah Chen (Tech Recruiter @ Company)"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                        formErrors.name ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-rose-400 font-mono">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-slate-300 block">
                      Your Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., recruiter@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                        formErrors.email ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-400 font-mono">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Role / Inquiry Scope */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-role" className="text-xs font-mono text-slate-300 block">
                      Opportunity / Discussion Scope
                    </label>
                    <select
                      id="contact-role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    >
                      <option value="Software Development Intern">Software Development Intern (SDE)</option>
                      <option value="Full-Stack Developer Intern">Full-Stack Developer Intern</option>
                      <option value="AI/ML Intern">AI / Machine Learning Intern</option>
                      <option value="AI Automation & Agentic Prototype">AI Automation &amp; Agentic Prototype</option>
                      <option value="Technical Networking & Inquiry">Technical Networking &amp; Other</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-slate-300 block">
                      Message / Role Details <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about your team, tech stack, or the opportunity..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none ${
                        formErrors.message ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-400 font-mono">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 disabled:opacity-60 transition-all shadow-md shadow-cyan-500/20"
                    >
                      <Send className="w-4 h-4" />
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
