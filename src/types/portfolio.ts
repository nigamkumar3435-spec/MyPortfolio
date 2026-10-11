export interface Project {
  id: string
  title: string
  tagline: string
  category: 'fullstack' | 'ml' | 'agent'
  featured: boolean
  status: 'Completed' | 'Verified' | 'Currently Exploring'
  badge: string
  description: string
  problem: string
  solution: string
  targetUsers: string
  keyFeatures: string[]
  techStack: {
    frontend?: string[]
    backend?: string[]
    database?: string[]
    ml?: string[]
    tools?: string[]
  }
  myContribution: string[]
  challengesAndDecisions: {
    challenge: string
    solution: string
    takeaway: string
  }[]
  resultsAndLimitations: {
    results: string
    limitations: string
    plannedImprovements?: string[]
  }
  githubUrl: string
  demoUrl?: string
  isCollaborative?: boolean
  collaboratorNote?: string
}

export interface SkillItem {
  name: string
  proficiency: 'Core Competency' | 'Working Knowledge' | 'Active Exploration'
  context: string
  icon?: string
}

export interface SkillCategory {
  title: string
  description: string
  skills: SkillItem[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  year: string
  badgeText: string
  verificationUrl?: string
  skillsCovered: string[]
  credentialId?: string
}

export interface EngineeringPrinciple {
  number: string
  title: string
  philosophy: string
  practicalExample: string
  keyTakeaway: string
}

export interface PortfolioData {
  personal: {
    name: string
    headline: string
    supportingStatement: string
    bioParagraphs: string[]
    degree: string
    institution: string
    graduationYear: number
    cgpa: string
    cgpaScale: string
    location: string
    availability: string
    email: string
    githubUsername: string
    githubUrl: string
    linkedinUrl: string
    targetRoles: string[]
  }
  projects: Project[]
  skillCategories: SkillCategory[]
  certifications: Certification[]
  engineeringPrinciples: EngineeringPrinciple[]
}
