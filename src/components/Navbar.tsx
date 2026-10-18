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
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Name */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
            aria-label="Nigam Kumar Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 border border-amber-300/40 flex items-center justify-center font-mono font-bold text-white group-hover:scale-105 transition-all shadow-xs">
              NK
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-stone-900 text-sm tracking-tight flex items-center gap-2 group-hover:text-orange-600 transition-colors">
                {personal.name}
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available for Opportunities" />
              </span>
              <span className="text-[11px] font-mono text-stone-500">
                CSE @ IIST '27
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-stone-100/90 border border-stone-200/90 rounded-full px-3 py-1 backdrop-blur-md shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all relative flex items-center gap-1.5 ${
                  link.highlight
                    ? 'text-orange-700 bg-amber-50/80 shadow-xs font-semibold border border-amber-200/80'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/70'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-800">
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
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg text-stone-700 bg-white hover:bg-amber-50/60 border border-stone-300 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              aria-label="View and Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-stone-600" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-slate-200 shadow-lg px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  link.highlight
                    ? 'text-slate-900 bg-slate-100 font-semibold border border-slate-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenResume()
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 shadow-xs"
            >
              <FileText className="w-4 h-4 text-slate-600" />
              <span>View &amp; Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>Let's Connect</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-500 hover:text-slate-900"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-500 hover:text-slate-900"
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
