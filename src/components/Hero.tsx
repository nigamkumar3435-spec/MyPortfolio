import React, { useState } from 'react'
import {
  ArrowRight,
  FileText,
  Mail,
  Copy,
  Check,
  Terminal,
  Activity,
  Database,
  Cpu,
  Code2,
  Sparkles
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './Icons'
import { TiltCard } from './TiltCard'
import { ThreeCanvas } from './ThreeCanvas'
import { Box } from 'lucide-react'

interface HeroProps {
  onOpenResume: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [activeConsoleTab, setActiveConsoleTab] = useState<'3d' | 'topology' | 'cli' | 'code'>('3d')
  const [cliOutput, setCliOutput] = useState<string>('System initialized. Ready for recruiter query.')
  const [activeNode, setActiveNode] = useState<string>('api')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleCliCommand = (cmd: string) => {
    switch (cmd) {
      case 'whoami':
        setCliOutput(`Nigam Kumar - B.Tech CSE @ IIST Indore ('27) | CGPA: ${personal.cgpa}/10`)
        break
      case 'target-roles':
        setCliOutput(`Target: ${personal.targetRoles.join(' • ')}`)
        break
      case 'stack':
        setCliOutput(`Primary: Java, Python, React.js, Node.js, MySQL, Scikit-learn, Tailwind CSS`)
        break
      case 'contact':
        setCliOutput(`Email: ${personal.email} | GitHub: ${personal.githubUsername}`)
        break
      default:
        setCliOutput(`Command executed: ${cmd}`)
    }
  }

  return (
    <section id="hero" className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden">
      {/* Soft Daylight Ambient Whisper */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-slate-200/50 blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-20 right-10 w-[550px] h-[350px] bg-indigo-100/40 blur-[130px] pointer-events-none -z-10" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Personal Brand & Hero Copy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Factual Availability Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-800 text-sm font-mono shadow-xs backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="font-semibold tracking-wide">{personal.availability}</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3.5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-slate-900 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700 tracking-tight leading-snug">
                {personal.headline}
              </p>
            </div>

            {/* Compelling Hero Pitch */}
            <div className="space-y-2.5 border-l-2 border-indigo-500/80 pl-5 py-1 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p className="font-semibold text-slate-900 text-base sm:text-lg tracking-tight">
                Building useful software. Exploring intelligent systems.
              </p>
              <p className="text-slate-600 font-normal leading-relaxed text-sm sm:text-base">
                I'm a Computer Science Engineering student at{' '}
                <span className="text-slate-900 font-semibold underline decoration-indigo-300 underline-offset-4">
                  IIST Indore
                </span>{' '}
                (Graduating 2027) who enjoys turning ideas into working products—from full-stack applications with clean database architectures to empirical machine learning pipelines and intelligent automation.
              </p>
            </div>

            {/* Clean Tech Stack Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mr-1">Core Tech:</span>
              {[
                'Java',
                'Python',
                'React.js',
                'TypeScript',
                'MySQL',
                'Scikit-learn',
                'Tailwind CSS'
              ].map((techName) => (
                <span
                  key={techName}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white border border-slate-200 text-slate-700 shadow-xs transition-all hover:border-slate-300 hover:text-slate-900 cursor-default"
                >
                  {techName}
                </span>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-slate-300"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 border border-slate-300 transition-all shadow-xs hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-slate-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-all border border-slate-200"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social & Contact Proof */}
            <div className="pt-1 flex flex-wrap items-center gap-3 text-sm font-mono text-slate-600">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover:text-slate-900 shadow-xs transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-slate-800" />
                <span>github/{personal.githubUsername}</span>
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover:text-slate-900 shadow-xs transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-indigo-600" />
                <span>linkedin/in/nigamkumar3435</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover:text-slate-900 shadow-xs transition-all cursor-pointer"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-slate-700" />
                    <span>{personal.email}</span>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Interactive 3D Canvas & System Telemetry Console */}
          <div className="lg:col-span-5">
            <TiltCard
              glareColor="rgba(255, 255, 255, 0.7)"
              className="rounded-3xl bg-white/95 p-6 sm:p-7 border border-slate-200/90 shadow-sm overflow-hidden"
            >
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 tilt-pop">
                <div className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-xs" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500 shadow-xs" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-xs" />
                  <span className="ml-2 text-sm font-mono font-bold text-slate-800 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-indigo-600" />
                    engine-telemetry.sys
                  </span>
                </div>
                
                {/* Console Mode Switcher */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-mono">
                  <button
                    onClick={() => setActiveConsoleTab('3d')}
                    className={`px-3 py-1.5 rounded-lg transition-all font-semibold cursor-pointer flex items-center gap-1 ${
                      activeConsoleTab === '3d'
                        ? 'bg-white text-slate-900 border border-slate-200 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5 text-indigo-600" />
                    <span>3D Core</span>
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('topology')}
                    className={`px-3 py-1.5 rounded-lg transition-all font-semibold cursor-pointer ${
                      activeConsoleTab === 'topology'
                        ? 'bg-white text-slate-900 border border-slate-200 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Topology
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('cli')}
                    className={`px-3 py-1.5 rounded-lg transition-all font-semibold cursor-pointer ${
                      activeConsoleTab === 'cli'
                        ? 'bg-white text-slate-900 border border-slate-200 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    CLI
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('code')}
                    className={`px-3 py-1.5 rounded-lg transition-all font-semibold cursor-pointer ${
                      activeConsoleTab === 'code'
                        ? 'bg-white text-slate-900 border border-slate-200 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Pattern
                  </button>
                </div>
              </div>

              {/* Console Body Tab 0: Interactive 3D WebGL Engine */}
              {activeConsoleTab === '3d' && (
                <div className="pt-3.5 space-y-3 tilt-pop">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                    <span className="font-bold flex items-center gap-1.5 text-slate-800">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      INTERACTIVE 3D WEBGL CORE
                    </span>
                    <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                      <Activity className="w-3 h-3 animate-pulse text-emerald-600" /> 60 FPS Orbit
                    </span>
                  </div>

                  {/* 3D WebGL Viewport */}
                  <div className="relative w-full h-[320px] rounded-2xl bg-slate-50/90 border border-slate-200/90 overflow-hidden shadow-inner flex flex-col">
                    <ThreeCanvas
                      className="w-full h-full"
                      interactive={true}
                      showControls={true}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-0.5 px-1">
                    <span>Click &amp; drag to rotate • Dynamic ambient lights</span>
                    <span className="text-slate-700 font-bold">WebGL 2.0</span>
                  </div>
                </div>
              )}

              {/* Console Body Tab 1: System Architecture Topology */}
              {activeConsoleTab === 'topology' && (
                <div className="pt-4 space-y-4">
                  <div className="text-xs font-mono text-slate-600 flex items-center justify-between">
                    <span className="font-bold text-slate-800">CONNECTED SYSTEM TOPOLOGY</span>
                    <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                      <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-600" /> Live Telemetry
                    </span>
                  </div>

                  {/* Interactive Architecture Nodes */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <button
                      onClick={() => setActiveNode('ui')}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        activeNode === 'ui'
                          ? 'bg-indigo-50/80 border-indigo-300 text-indigo-950 shadow-xs'
                          : 'bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                        <Code2 className="w-4 h-4 text-indigo-600" />
                        <span>Client / React</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 font-mono">
                        Vite • Tailwind • State Hooks
                      </p>
                    </button>

                    <button
                      onClick={() => setActiveNode('api')}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        activeNode === 'api'
                          ? 'bg-indigo-50/80 border-indigo-300 text-indigo-950 shadow-xs'
                          : 'bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                        <Cpu className="w-4 h-4 text-sky-600" />
                        <span>Server / APIs</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 font-mono">
                        Java Servlets • Node Express
                      </p>
                    </button>

                    <button
                      onClick={() => setActiveNode('db')}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        activeNode === 'db'
                          ? 'bg-indigo-50/80 border-indigo-300 text-indigo-950 shadow-xs'
                          : 'bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                        <Database className="w-4 h-4 text-amber-600" />
                        <span>Persistence</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 font-mono">
                        MySQL 8.0 • 3NF Schemas • ACID
                      </p>
                    </button>

                    <button
                      onClick={() => setActiveNode('ml')}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        activeNode === 'ml'
                          ? 'bg-indigo-50/80 border-indigo-300 text-indigo-950 shadow-xs'
                          : 'bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                        <Sparkles className="w-4 h-4 text-rose-600" />
                        <span>ML / Inference</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 font-mono">
                        Python • Scikit-learn • Flask
                      </p>
                    </button>
                  </div>

                  {/* Node Detail Box */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-1.5 text-slate-700">
                    <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold">
                      Selected Node Spec
                    </div>
                    {activeNode === 'ui' && (
                      <p className="text-slate-800">
                        &gt; Modular components, WCAG accessible contrast, optimistic UI updates, zero hydration mismatch.
                      </p>
                    )}
                    {activeNode === 'api' && (
                      <p className="text-slate-800">
                        &gt; 3-tier MVC routing, defensive validation, prepared statements, stateless REST principles.
                      </p>
                    )}
                    {activeNode === 'db' && (
                      <p className="text-slate-800">
                        &gt; Relational constraints, InnoDB row locking for concurrent stock allocation, zero SQL injection.
                      </p>
                    )}
                    {activeNode === 'ml' && (
                      <p className="text-slate-800">
                        &gt; Supervised pipelines, leak-free feature scaling, cost-sensitive recall metrics over accuracy.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Console Body Tab 2: Interactive CLI */}
              {activeConsoleTab === 'cli' && (
                <div className="pt-4 space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 min-h-[150px] text-slate-200 space-y-2">
                    <p className="text-slate-400">&gt; nigam-kumar --interactive --mode=eval</p>
                    <p className="text-emerald-400 leading-relaxed font-bold">&gt; {cliOutput}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-slate-600 font-semibold">Execute quick probe query:</div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleCliCommand('whoami')}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 cursor-pointer text-xs font-semibold"
                      >
                        $ whoami
                      </button>
                      <button
                        onClick={() => handleCliCommand('target-roles')}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 cursor-pointer text-xs font-semibold"
                      >
                        $ target-roles
                      </button>
                      <button
                        onClick={() => handleCliCommand('stack')}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 cursor-pointer text-xs font-semibold"
                      >
                        $ stack
                      </button>
                      <button
                        onClick={() => handleCliCommand('contact')}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 cursor-pointer text-xs font-semibold"
                      >
                        $ contact
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Console Body Tab 3: Clean Engineering Pattern Code Snippet */}
              {activeConsoleTab === 'code' && (
                <div className="pt-3 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-slate-700 text-xs font-bold">
                    <span>BloodStockDAO.java (Defensive Prepared SQL)</span>
                    <span className="text-indigo-600 font-semibold">Java / JDBC</span>
                  </div>
                  <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 overflow-x-auto leading-relaxed text-[12px]">
{`// ACID Transaction: Reserve units with row-level lock
String sql = "SELECT units_available FROM blood_stock " +
             "WHERE blood_group = ? FOR UPDATE";
try (PreparedStatement ps = conn.prepareStatement(sql)) {
    ps.setString(1, bloodGroup);
    ResultSet rs = ps.executeQuery();
    if (rs.next() && rs.getInt(1) >= requestedUnits) {
        decrementStock(conn, bloodGroup, requestedUnits);
        conn.commit(); // atomic commit
        return AllocationStatus.SUCCESS;
    }
}`}
                  </pre>
                  <p className="text-[11px] text-slate-500">
                    Demonstrates concurrency control, parameterized SQL against injection, and transactional rollback.
                  </p>
                </div>
              )}

              {/* Telemetry Footer Strip */}
              <div className="pt-4 mt-4 flex items-center justify-between text-xs font-mono text-slate-500 border-t border-slate-200">
                <span>Status: <span className="text-emerald-700 font-semibold">● All Systems Nominal</span></span>
                <span>Verified CGPA: <span className="text-slate-900 font-bold">{personal.cgpa}/{personal.cgpaScale}</span></span>
              </div>

            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  )
}
