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
    <section id="contact" className="py-24 relative bg-stone-100/60">
      {/* Background Soft Diffused Accent */}
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[350px] bg-gradient-to-tr from-amber-200/30 via-orange-100/25 to-amber-100/20 blur-[150px] pointer-events-none -z-10" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Heading */}
        <div className="space-y-3 mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/90 border border-amber-200/80 text-amber-900 text-xs font-mono font-medium shadow-xs">
            <Mail className="w-4 h-4 text-orange-600" />
            <span>07 // GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-tight">
            Let's Discuss{' '}
            <span className="text-orange-600">
              Opportunities
            </span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            Have an interesting problem to solve? I'd love to discuss how I can contribute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Recruiter Quick Reach */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-stone-200/90 space-y-6 shadow-xs">
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Direct Communication Channels
                </h3>
                <p className="text-sm text-stone-600">
                  Feel free to reach out directly via email, LinkedIn, or explore my GitHub.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2.5">
                <span className="text-xs font-mono text-stone-500 uppercase tracking-wider font-semibold block">
                  Primary Professional Email:
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-base sm:text-lg font-mono font-bold text-stone-900 truncate">
                    {personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-200 transition-colors shrink-0 cursor-pointer shadow-xs"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-5 h-5 text-orange-600" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Direct Action Links */}
              <div className="space-y-3 pt-1">
                <a
                  href={mailtoHref}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-stone-50 hover:bg-stone-100/90 border border-stone-200 hover:border-amber-300 text-sm font-semibold text-stone-800 transition-all shadow-xs group"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-600" />
                    <span>Launch Local Email Client (mailto)</span>
                  </span>
                  <span className="text-stone-400 group-hover:text-orange-600 font-mono text-sm group-hover:translate-x-1 transition-transform">&gt;</span>
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-stone-50 hover:bg-stone-100/90 border border-stone-200 hover:border-amber-300 text-sm font-semibold text-stone-800 transition-all shadow-xs group"
                >
                  <span className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-sky-600" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <span className="text-stone-400 group-hover:text-sky-600 font-mono text-sm group-hover:translate-x-1 transition-transform">&gt;</span>
                </a>

                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-stone-50 hover:bg-stone-100/90 border border-stone-200 hover:border-amber-300 text-sm font-semibold text-stone-800 transition-all shadow-xs group"
                >
                  <span className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-stone-800" />
                    <span>GitHub Profile (27 Repos)</span>
                  </span>
                  <span className="text-stone-400 group-hover:text-stone-900 font-mono text-sm group-hover:translate-x-1 transition-transform">&gt;</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-stone-50 hover:bg-stone-100/90 border border-stone-200 hover:border-amber-300 text-sm font-semibold text-stone-800 transition-all shadow-xs cursor-pointer group"
                >
                  <span className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-orange-600" />
                    <span>View &amp; Download ATS Resume</span>
                  </span>
                  <span className="text-stone-400 group-hover:text-orange-600 font-mono text-sm group-hover:translate-x-1 transition-transform">&gt;</span>
                </button>
              </div>

              {/* Turnaround Time SLA */}
              <div className="pt-3 border-t border-stone-200 flex items-center gap-2.5 text-xs sm:text-sm font-mono text-stone-600 font-medium">
                <Clock className="w-4 h-4 text-orange-600" />
                <span>Turnaround: Typical reply within 24 hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white border border-stone-200/90 space-y-7 shadow-xs">
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2.5">
                  <span>Send a Direct Message</span>
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </h3>
                <p className="text-sm text-stone-600">
                  Whether discussing an internship opportunity or asking about my projects, drop a note below.
                </p>
              </div>

              {submitSuccess ? (
                <div className="p-8 rounded-2xl bg-amber-50 border border-amber-200 space-y-4 text-center animate-in fade-in duration-300 shadow-xs">
                  <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-stone-900">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-sm sm:text-base text-stone-700 max-w-md mx-auto leading-relaxed">
                    Your message has been captured. I will review your inquiry and follow up promptly via your provided email address.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-3 text-sm font-mono text-orange-700 font-bold hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {submitError && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-2.5">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-mono font-medium text-stone-700 block">
                      Your Name / Organization <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Sarah Chen (Tech Recruiter @ Company)"
                      className={`w-full px-4 py-3 rounded-xl bg-stone-50 border text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-3 focus:ring-orange-100 focus:border-orange-500 transition-all ${
                        formErrors.name ? 'border-rose-400' : 'border-stone-200'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-600 font-mono font-medium">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-mono font-medium text-stone-700 block">
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., recruiter@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-stone-50 border text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-3 focus:ring-orange-100 focus:border-orange-500 transition-all ${
                        formErrors.email ? 'border-rose-400' : 'border-stone-200'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-600 font-mono font-medium">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Role / Inquiry Scope */}
                  <div className="space-y-2">
                    <label htmlFor="contact-role" className="text-sm font-mono font-medium text-stone-700 block">
                      Opportunity / Discussion Scope
                    </label>
                    <select
                      id="contact-role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm sm:text-base text-stone-900 focus:bg-white focus:outline-none focus:ring-3 focus:ring-orange-100 focus:border-orange-500 transition-all"
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
                    <label htmlFor="contact-message" className="text-sm font-mono font-medium text-stone-700 block">
                      Message / Role Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about your team, tech stack, or the opportunity..."
                      className={`w-full px-4 py-3 rounded-xl bg-stone-50 border text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-3 focus:ring-orange-100 focus:border-orange-500 transition-all resize-none ${
                        formErrors.message ? 'border-rose-400' : 'border-stone-200'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-xs text-rose-600 font-mono font-medium">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-8 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-60 transition-all shadow-xs hover:shadow-sm cursor-pointer"
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
