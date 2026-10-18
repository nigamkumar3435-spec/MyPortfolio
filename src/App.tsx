import { useState } from 'react'
import { CosmicBackground } from './components/CosmicBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { RecruiterBar } from './components/RecruiterBar'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { EngineeringMindset } from './components/EngineeringMindset'
import { InteractiveLab } from './components/InteractiveLab'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ProjectModal } from './components/ProjectModal'
import { ResumeModal } from './components/ResumeModal'
import type { Project } from './types/portfolio'

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col selection:bg-slate-200 selection:text-slate-900 relative">
      {/* Serene, Non-Flashy Architectural Light Background */}
      <CosmicBackground />

      {/* Fixed Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <RecruiterBar onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <EngineeringMindset />
        <InteractiveLab />
        <Certifications />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  )
}

export default App
