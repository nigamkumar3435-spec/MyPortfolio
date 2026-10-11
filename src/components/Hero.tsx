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
  Code2,
  Box
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './Icons'
import { ThreeCanvas, type ThreeModelType } from './ThreeCanvas'
import { TiltCard } from './TiltCard'

interface HeroProps {
  onOpenResume: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [activeConsoleTab, setActiveConsoleTab] = useState<'3d' | 'topology' | 'cli' | 'code'>('3d')
  const [threeModel, setThreeModel] = useState<ThreeModelType>('neural')
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
      {/* Dynamic Ambient Red & Yellow Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-red-600/15 via-amber-600/15 to-yellow-950/20 blur-[160px] pointer-events-none -z-10 rounded-full animate-pulse-halo" />
      <div className="absolute top-20 right-10 w-[650px] h-[450px] bg-gradient-to-bl from-amber-600/15 via-red-600/10 to-slate-900/20 blur-[150px] pointer-events-none -z-10" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Personal Brand & Hero Copy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Factual Availability Pill */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/95 border border-amber-500/40 text-yellow-300 text-sm sm:text-base font-mono shadow-xl shadow-amber-950/30 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
              </span>
              <span className="font-bold tracking-wide">{personal.availability}</span>
            </div>

            {/* Name & Headline (Fiery Crimson & Solar Gold) */}
            <div className="space-y-3.5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-yellow-300 drop-shadow-[0_0_25px_rgba(245,158,11,0.25)]">
                  {personal.name}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-100 tracking-tight leading-snug">
                {personal.headline}
              </p>
            </div>

            {/* Compelling Hero Pitch */}
            <div className="space-y-2.5 border-l-3 border-amber-500 pl-5 py-1 text-slate-200 text-base sm:text-lg leading-relaxed">
              <p className="font-bold text-white text-base sm:text-lg tracking-tight">
                Building useful software. Exploring intelligent systems.
              </p>
              <p className="text-slate-300 font-normal leading-relaxed text-sm sm:text-base">
                I'm a Computer Science Engineering student at{' '}
                <span className="text-yellow-300 font-semibold underline decoration-amber-400/50 underline-offset-4">
                  IIST Indore
                </span>{' '}
                (Graduating 2027) who enjoys turning ideas into working products—from full-stack applications with clean database architectures to empirical machine learning pipelines and intelligent automation.
              </p>
            </div>

            {/* Floating 3D Micro Tech Stack Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mr-1">Core Tech:</span>
              {[
                { name: 'Java', color: 'border-red-500/40 text-red-300 bg-red-950/30' },
                { name: 'Python', color: 'border-amber-500/40 text-amber-300 bg-amber-950/30' },
                { name: 'React.js', color: 'border-yellow-500/40 text-yellow-300 bg-yellow-950/30' },
                { name: 'TypeScript', color: 'border-red-500/40 text-red-300 bg-red-950/30' },
                { name: 'MySQL', color: 'border-amber-500/40 text-amber-300 bg-amber-950/30' },
                { name: 'Scikit-learn', color: 'border-yellow-500/40 text-yellow-300 bg-yellow-950/30' },
                { name: 'Tailwind CSS', color: 'border-red-500/40 text-red-300 bg-red-950/30' },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border ${tech.color} shadow-sm transition-all hover:scale-105 cursor-default`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Primary & Secondary CTAs (Fiery Red & Solar Gold Buttons) */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 hover:from-red-400 hover:to-yellow-300 transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-amber-400/40"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/50 transition-all shadow-lg shadow-black/40 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-amber-500/30"
              >
                <FileText className="w-4 h-4 text-yellow-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-all border border-white/10 hover:border-amber-400/30"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social & Contact Proof */}
            <div className="pt-1 flex flex-wrap items-center gap-4 text-sm sm:text-base font-mono text-slate-300">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/15 hover:border-yellow-400/70 hover:text-yellow-300 hover:shadow-lg hover:shadow-yellow-500/20 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-yellow-400" />
                <span>github/{personal.githubUsername}</span>
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/15 hover:border-amber-400/70 hover:text-amber-300 hover:shadow-lg hover:shadow-amber-500/20 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-amber-400" />
                <span>linkedin/in/nigamkumar3435</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/15 hover:border-red-400/70 hover:text-red-300 hover:shadow-lg hover:shadow-red-500/20 transition-all cursor-pointer"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>{personal.email}</span>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Interactive 3D Canvas & System Telemetry Console */}
          <div className="lg:col-span-5">
            <TiltCard
              glareColor="rgba(245, 158, 11, 0.3)"
              className="rounded-3xl glass-panel p-6 sm:p-7 border border-white/20 shadow-2xl shadow-red-950/50 overflow-hidden"
            >
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 tilt-pop">
                <div className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                  <span className="ml-2 text-sm sm:text-base font-mono font-bold text-slate-200 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-yellow-400" />
                    engine-telemetry.sys
                  </span>
                </div>
                
                {/* Console Mode Switcher */}
                <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-white/10 text-xs font-mono">
                  <button
                    onClick={() => setActiveConsoleTab('3d')}
                    className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 font-bold ${
                      activeConsoleTab === '3d'
                        ? 'bg-gradient-to-r from-red-500/30 to-amber-500/30 text-yellow-300 border border-amber-400/60 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>3D Orbit</span>
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('topology')}
                    className={`px-2.5 py-1 rounded-lg transition-all font-bold ${
                      activeConsoleTab === 'topology'
                        ? 'bg-gradient-to-r from-red-500/30 to-amber-500/30 text-yellow-300 border border-amber-400/60 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Topology
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('cli')}
                    className={`px-2.5 py-1 rounded-lg transition-all font-bold ${
                      activeConsoleTab === 'cli'
                        ? 'bg-gradient-to-r from-red-500/30 to-amber-500/30 text-yellow-300 border border-amber-400/60 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    CLI
                  </button>
                  <button
                    onClick={() => setActiveConsoleTab('code')}
                    className={`px-2.5 py-1 rounded-lg transition-all font-bold ${
                      activeConsoleTab === 'code'
                        ? 'bg-gradient-to-r from-red-500/30 to-amber-500/30 text-yellow-300 border border-amber-400/60 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Pattern
                  </button>
                </div>
              </div>

              {/* Console Body Tab 0: Interactive 3D WebGL Orbit Canvas */}
              {activeConsoleTab === '3d' && (
                <div className="pt-4 space-y-3.5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-1.5 text-yellow-300 font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                      INTERACTIVE 3D WEBGL RENDER
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1 font-bold">
                      <Activity className="w-3.5 h-3.5 animate-pulse" /> Three.js GPU
                    </span>
                  </div>

                  {/* 3D Geometry Selector Pills */}
                  <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10 text-xs font-mono">
                    <span className="text-[11px] text-slate-400 px-2 uppercase font-bold">Geometry:</span>
                    {[
                      { id: 'neural' as const, label: '🧠 Neural Core' },
                      { id: 'torus' as const, label: '🌀 Torus Knot' },
                      { id: 'cube' as const, label: '🧊 Hypercube' },
                      { id: 'galaxy' as const, label: '✨ Galaxy' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setThreeModel(item.id)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          threeModel === item.id
                            ? 'bg-amber-500/30 text-yellow-300 border border-amber-400/60 shadow-sm shadow-amber-500/20'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* 3D Canvas Container */}
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-black/70 border border-white/15 overflow-hidden shadow-inner flex items-center justify-center">
                    <ThreeCanvas model={threeModel} className="w-full h-full" />
                    
                    {/* 3D Canvas Overlay Badges */}
                    <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/30 text-xs font-mono text-yellow-300 tilt-pop shadow-md">
                      ⚡ Move mouse to tilt in 3D
                    </div>
                    <div className="absolute top-3 right-3 bg-red-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-red-500/40 text-xs font-mono text-red-300 tilt-pop shadow-md">
                      {threeModel === 'neural' && 'Dual Core • Polyhedron Wireframe'}
                      {threeModel === 'torus' && 'Quantum Knot • Specular Light'}
                      {threeModel === 'cube' && 'Nested 3-Axis • Cyber Matrix'}
                      {threeModel === 'galaxy' && '750 Swirling Particle Vortex'}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-slate-300">
                    Interactive WebGL render representing connected full-stack services, database integrity, and autonomous ML intelligence.
                  </p>
                </div>
              )}

              {/* Console Body Tab 1: System Architecture Topology */}
              {activeConsoleTab === 'topology' && (
                <div className="pt-4 space-y-4">
                  <div className="text-xs font-mono text-slate-300 flex items-center justify-between">
                    <span className="font-bold">CONNECTED SYSTEM TOPOLOGY</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 animate-pulse" /> Live Telemetry
                    </span>
                  </div>

                  {/* Interactive Architecture Nodes */}
                  <div className="grid grid-cols-2 gap-3.5 pt-1">
                    <button
                      onClick={() => setActiveNode('ui')}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        activeNode === 'ui'
                          ? 'bg-red-950/50 border-red-400 shadow-md shadow-red-500/20'
                          : 'bg-slate-900/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm font-bold text-red-300">
                        <Code2 className="w-4 h-4 text-red-400" />
                        <span>Client / React</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 font-mono">
                        Vite • Tailwind • State Hooks
                      </p>
                    </button>

                    <button
                      onClick={() => setActiveNode('api')}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        activeNode === 'api'
                          ? 'bg-amber-950/50 border-amber-400 shadow-md shadow-amber-500/20'
                          : 'bg-slate-900/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm font-bold text-amber-300">
                        <Cpu className="w-4 h-4 text-amber-400" />
                        <span>Server / APIs</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 font-mono">
                        Java Servlets • Node Express
                      </p>
                    </button>

                    <button
                      onClick={() => setActiveNode('db')}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        activeNode === 'db'
                          ? 'bg-yellow-950/50 border-yellow-400 shadow-md shadow-yellow-500/20'
                          : 'bg-slate-900/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm font-bold text-yellow-300">
                        <Database className="w-4 h-4 text-yellow-400" />
                        <span>Persistence</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 font-mono">
                        MySQL 8.0 • 3NF Schemas • ACID
                      </p>
                    </button>

                    <button
                      onClick={() => setActiveNode('ml')}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        activeNode === 'ml'
                          ? 'bg-rose-950/50 border-rose-400 shadow-md shadow-rose-500/20'
                          : 'bg-slate-900/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm font-bold text-rose-300">
                        <Sparkles className="w-4 h-4 text-rose-400" />
                        <span>ML / Inference</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 font-mono">
                        Python • Scikit-learn • Flask
                      </p>
                    </button>
                  </div>

                  {/* Node Detail Box */}
                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs space-y-1.5 text-slate-300">
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">
                      Selected Node Spec
                    </div>
                    {activeNode === 'ui' && (
                      <p className="text-red-200">
                        &gt; Modular components, WCAG accessible contrast, optimistic UI updates, zero hydration mismatch.
                      </p>
                    )}
                    {activeNode === 'api' && (
                      <p className="text-amber-200">
                        &gt; 3-tier MVC routing, defensive validation, prepared statements, stateless REST principles.
                      </p>
                    )}
                    {activeNode === 'db' && (
                      <p className="text-yellow-200">
                        &gt; Relational constraints, InnoDB row locking for concurrent stock allocation, zero SQL injection.
                      </p>
                    )}
                    {activeNode === 'ml' && (
                      <p className="text-rose-200">
                        &gt; Supervised pipelines, leak-free feature scaling, cost-sensitive recall metrics over accuracy.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Console Body Tab 2: Interactive CLI */}
              {activeConsoleTab === 'cli' && (
                <div className="pt-4 space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-black/70 border border-white/10 min-h-[150px] text-slate-200 space-y-2">
                    <p className="text-slate-400">&gt; nigam-kumar --interactive --mode=eval</p>
                    <p className="text-yellow-400 leading-relaxed font-bold">&gt; {cliOutput}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-slate-300 font-semibold">Execute quick probe query:</div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleCliCommand('whoami')}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-yellow-300 border border-slate-700 cursor-pointer text-xs"
                      >
                        $ whoami
                      </button>
                      <button
                        onClick={() => handleCliCommand('target-roles')}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 cursor-pointer text-xs"
                      >
                        $ target-roles
                      </button>
                      <button
                        onClick={() => handleCliCommand('stack')}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-red-300 border border-slate-700 cursor-pointer text-xs"
                      >
                        $ stack
                      </button>
                      <button
                        onClick={() => handleCliCommand('contact')}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-yellow-400 border border-slate-700 cursor-pointer text-xs"
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
                  <div className="flex items-center justify-between text-slate-300 text-xs font-bold">
                    <span>BloodStockDAO.java (Defensive Prepared SQL)</span>
                    <span className="text-yellow-400">Java / JDBC</span>
                  </div>
                  <pre className="p-4 rounded-xl bg-black/80 border border-white/10 text-slate-200 overflow-x-auto leading-relaxed text-[12px]">
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
                  <p className="text-[11px] text-slate-400">
                    Demonstrates concurrency control, parameterized SQL against injection, and transactional rollback.
                  </p>
                </div>
              )}

              {/* Telemetry Footer Strip */}
              <div className="pt-4 mt-4 flex items-center justify-between text-xs font-mono text-slate-300 border-t border-white/10">
                <span>Status: <span className="text-emerald-400 font-bold">● All Systems Nominal</span></span>
                <span>Verified CGPA: <span className="text-yellow-400 font-bold">{personal.cgpa}/{personal.cgpaScale}</span></span>
              </div>

            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  )
}
