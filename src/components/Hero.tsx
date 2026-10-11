import React, { useState } from 'react'
import {
  ArrowRight,
  FileText,
  Mail,
  Copy,
  Check,
  Terminal,
  Activity,
  Sparkles,
  Database,
  Cpu,
  Code2
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './Icons'

interface HeroProps {
  onOpenResume: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [activeConsoleTab, setActiveConsoleTab] = useState<'topology' | 'cli' | 'code'>('topology')
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
        setCliOutput(`Nigam Kumar - B.Tech CSE @ IIST Indore ('27) | Full-Stack & ML Explorer`)
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
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-violet-600/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Brand & Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Factual Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.availability}</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">{personal.name}</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-300 tracking-tight leading-snug">
                {personal.headline}
              </p>
            </div>

            {/* Compelling Two-line Copy */}
            <div className="space-y-2 border-l-2 border-cyan-500/40 pl-4 py-1 text-slate-400 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-slate-200">
                Building useful software. Exploring intelligent systems.
              </p>
              <p>
                I'm a Computer Science Engineering student at <span className="text-slate-300 font-medium">IIST Indore</span> (Graduating 2027) who enjoys turning ideas into working products—from full-stack applications with clean database architectures to empirical machine learning pipelines and intelligent automation.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:scale-[1.01]"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social & Contact Proof */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>github/{personal.githubUsername}</span>
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-blue-500/40 hover:text-blue-300 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-300" />
                <span>linkedin/in/nigamkumar3435</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-violet-500/40 hover:text-violet-300 transition-all"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-slate-300" />
                    <span>{personal.email}</span>
                    <Copy className="w-3 h-3 text-slate-500" />
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Engineering Telemetry & Connected Systems Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-panel p-5 border border-white/10 shadow-2xl shadow-cyan-950/30 overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    engine-telemetry.sys
                  </span>
                </div>
                
                {/* Console Mode Switcher */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveConsoleTab('topology')}
                    className={`px-2 py-0.5 rounded transition-all ${
                      activeConsoleTab === 'topology'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Topology
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('cli')}
                    className={`px-2 py-0.5 rounded transition-all ${
                      activeConsoleTab === 'cli'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    CLI
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('code')}
                    className={`px-2 py-0.5 rounded transition-all ${
                      activeConsoleTab === 'code'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Pattern
                  </button>
                </div>
              </div>

              {/* Console Body Tab 1: System Architecture Topology */}
              {activeConsoleTab === 'topology' && (
                <div className="pt-4 space-y-4">
                  <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>CONNECTED SYSTEM TOPOLOGY</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Activity className="w-3 h-3 animate-pulse" /> Live Telemetry
                    </span>
                  </div>

                  {/* Interactive Architecture Nodes */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <button
                      onClick={() => setActiveNode('ui')}
                      className={`text-left p-3 rounded-xl border transition-all ${
                        activeNode === 'ui'
                          ? 'bg-cyan-950/40 border-cyan-500/60 shadow-md shadow-cyan-500/10'
                          : 'bg-slate-900/50 border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                        <Code2 className="w-4 h-4 text-cyan-400" />
                        <span>Client / React</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 font-mono">
                        Vite • Tailwind • State Hooks
                      </p>
                    </button>

                    <button
                      onClick={() => setActiveNode('api')}
                      className={`text-left p-3 rounded-xl border transition-all ${
                        activeNode === 'api'
                          ? 'bg-blue-950/40 border-blue-500/60 shadow-md shadow-blue-500/10'
                          : 'bg-slate-900/50 border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-300">
                        <Cpu className="w-4 h-4 text-blue-400" />
                        <span>Server / APIs</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 font-mono">
                        Java Servlets • Node Express
                      </p>
                    </button>

                    <button
                      onClick={() => setActiveNode('db')}
                      className={`text-left p-3 rounded-xl border transition-all ${
                        activeNode === 'db'
                          ? 'bg-amber-950/40 border-amber-500/60 shadow-md shadow-amber-500/10'
                          : 'bg-slate-900/50 border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                        <Database className="w-4 h-4 text-amber-400" />
                        <span>Persistence</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 font-mono">
                        MySQL 8.0 • 3NF Schemas • ACID
                      </p>
                    </button>

                    <button
                      onClick={() => setActiveNode('ml')}
                      className={`text-left p-3 rounded-xl border transition-all ${
                        activeNode === 'ml'
                          ? 'bg-violet-950/40 border-violet-500/60 shadow-md shadow-violet-500/10'
                          : 'bg-slate-900/50 border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-violet-300">
                        <Sparkles className="w-4 h-4 text-violet-400" />
                        <span>ML / Inference</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 font-mono">
                        Python • Scikit-learn • Flask
                      </p>
                    </button>
                  </div>

                  {/* Node Detail Box */}
                  <div className="p-3 rounded-xl bg-black/50 border border-white/5 font-mono text-xs space-y-1.5 text-slate-300">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Selected Node Spec
                    </div>
                    {activeNode === 'ui' && (
                      <p className="text-cyan-200">
                        &gt; Modular components, WCAG accessible contrast, optimistic UI updates, zero hydration mismatch.
                      </p>
                    )}
                    {activeNode === 'api' && (
                      <p className="text-blue-200">
                        &gt; 3-tier MVC routing, defensive validation, prepared statements, stateless REST principles.
                      </p>
                    )}
                    {activeNode === 'db' && (
                      <p className="text-amber-200">
                        &gt; Relational constraints, InnoDB row locking for concurrent stock allocation, zero SQL injection.
                      </p>
                    )}
                    {activeNode === 'ml' && (
                      <p className="text-violet-200">
                        &gt; Supervised pipelines, leak-free feature scaling, cost-sensitive recall metrics over accuracy.
                      </p>
                    )}
                  </div>

                  {/* Telemetry Footer Strip */}
                  <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/5">
                    <span>Status: <span className="text-emerald-400">All Systems Nominal</span></span>
                    <span>Verified CGPA: <span className="text-cyan-400 font-bold">{personal.cgpa}/{personal.cgpaScale}</span></span>
                  </div>
                </div>
              )}

              {/* Console Body Tab 2: Interactive CLI */}
              {activeConsoleTab === 'cli' && (
                <div className="pt-4 space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-black/60 border border-white/5 min-h-[140px] text-slate-300 space-y-2">
                    <p className="text-slate-500">&gt; nigam-kumar --interactive --mode=eval</p>
                    <p className="text-emerald-400 leading-relaxed">&gt; {cliOutput}</p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[11px] text-slate-400">Execute quick probe query:</div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleCliCommand('whoami')}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700"
                      >
                        $ whoami
                      </button>
                      <button
                        onClick={() => handleCliCommand('target-roles')}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700"
                      >
                        $ target-roles
                      </button>
                      <button
                        onClick={() => handleCliCommand('stack')}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700"
                      >
                        $ stack
                      </button>
                      <button
                        onClick={() => handleCliCommand('contact')}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700"
                      >
                        $ contact
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Console Body Tab 3: Clean Engineering Pattern Code Snippet */}
              {activeConsoleTab === 'code' && (
                <div className="pt-3 font-mono text-[11px] space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-[10px]">
                    <span>BloodStockDAO.java (Defensive Prepared SQL)</span>
                    <span className="text-cyan-400">Java / JDBC</span>
                  </div>
                  <pre className="p-3 rounded-xl bg-black/70 border border-white/5 text-slate-300 overflow-x-auto leading-relaxed">
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
                  <p className="text-[10px] text-slate-400">
                    Demonstrates concurrency control, parameterized SQL against injection, and transactional rollback.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
