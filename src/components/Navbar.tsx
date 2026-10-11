import React, { useState, useEffect } from 'react'
import {
  Menu,
  X,
  FileText,
  Send
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './Icons'

interface NavbarProps {
  onOpenResume: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { personal } = portfolioData

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects', badge: '4' },
    { label: 'Skills', href: '#skills' },
    { label: 'How I Build', href: '#engineering-mindset' },
    { label: 'Interactive Lab', href: '#interactive-lab', highlight: true },
    { label: 'Credentials', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090d]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Name */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
            aria-label="Nigam Kumar Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-violet-600/20 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all shadow-sm shadow-cyan-500/20">
              NK
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 text-sm tracking-tight flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
                {personal.name}
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for Opportunities" />
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                CSE @ IIST '27
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all relative flex items-center gap-1.5 ${
                  link.highlight
                    ? 'text-cyan-300 hover:text-cyan-200 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="View and Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e14]/95 border-b border-white/10 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  link.highlight
                    ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-800/40'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenResume()
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-slate-200 bg-slate-800 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View &amp; Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              <Send className="w-4 h-4" />
              <span>Let's Connect</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-white"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
