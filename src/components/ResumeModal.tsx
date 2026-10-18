import React, { useEffect, useState } from 'react'
import {
  X,
  Download,
  Printer,
  Copy,
  Check,
  FileText,
  Mail,
  MapPin
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal } = portfolioData
  const [copiedSummary, setCopiedSummary] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    const resumeText = `===============================================================
${personal.name.toUpperCase()}
${personal.headline}
Email: ${personal.email} | Location: ${personal.location}
GitHub: ${personal.githubUrl}
LinkedIn: ${personal.linkedinUrl}
===============================================================

EDUCATION
---------------------------------------------------------------
${personal.degree}
${personal.institution}
Expected Graduation: ${personal.graduationYear} | CGPA: ${personal.cgpa}/${personal.cgpaScale}

TECHNICAL SKILLS
---------------------------------------------------------------
* Programming Languages: Java, Python, C, C++, JavaScript (ES6+), TypeScript, SQL
* Frontend: React.js, Tailwind CSS, HTML5, CSS3, Modern UI Systems, Vite
* Backend & Databases: Node.js, Express.js, Java Servlets, JSP, MySQL, MongoDB, JDBC
* AI & Machine Learning: Scikit-learn, Pandas, NumPy, Data Preprocessing, Model Evaluation
* Developer Tools: Git, GitHub, Linux / Bash, Postman, Docker Fundamentals, AWS Basics

FEATURED ENGINEERING PROJECTS
---------------------------------------------------------------
1. POCKIT - Personal Finance Software & Budget Telemetry
   Stack: React.js, Tailwind CSS, Node.js, Express, MongoDB/SQLite
   * Designed personal-finance management platform for tracking atomic expenses and enforcing category budget limits.
   * Implemented transaction state reconciliation, responsive cash flow visualization, and exportable financial summaries.
   * Planned module: Machine learning expense clustering and spending anomaly detection.

2. BLOOD BANK MANAGEMENT SYSTEM - Database-Driven Healthcare Web App
   Stack: Java Servlets, JSP, MySQL 8.0, JDBC, Apache Tomcat
   Repo: https://github.com/nigamkumar3435-spec/blood_bank_project
   * Built 3-tier MVC healthcare application to manage blood donation, donor records, and real-time stock across 8 blood groups.
   * Designed 3NF normalized schema with MySQL row-level locking (FOR UPDATE) to prevent concurrency race conditions during emergency unit allocation.
   * Enforced parameterized PreparedStatements to eliminate SQL injection vulnerabilities.

3. DISEASE RISK PREDICTION PIPELINE - Supervised ML Classification
   Stack: Python 3, Scikit-learn, Pandas, NumPy, Flask, Joblib
   Repo: https://github.com/nigamkumar3435-spec/DiseaseRiskPrediction
   * Trained empirical supervised classification models on clinical datasets to predict risk probability based on physiological indicators.
   * Preprocessed features with leak-free scaling pipelines; evaluated models prioritizing Recall over raw accuracy to minimize false negatives.
   * Deployed inference API using Flask with responsible AI disclaimers (informational/educational scope).

4. FOODWISE-AI - Demand Forecasting & Agentic Dispatch Lab (Prototype)
   Stack: Python, Flask, Prompt Engineering, Agentic Tool Calling, Pytest
   Repo: https://github.com/nigamkumar3435-spec/FoodWise-AI
   * Prototyped intelligent surplus estimation and autonomous NGO routing workflow using ReAct agent pattern.
   * Implemented mandatory Human-in-the-Loop approval state machine before dispatching notifications.

CERTIFICATIONS
---------------------------------------------------------------
* AWS Academy Graduate — Cloud Foundations (AWS Academy, 2024)
* Oracle Generative AI Certified Professional (Oracle University, 2024)
* IBM SQL and Relational Databases 101 (IBM Developer Skills Network, 2024)
* Cisco Cybersecurity Essentials (Cisco Networking Academy, 2024)
* Linux Unhatched (NDG / Cisco, 2023)
===============================================================`

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `Resume_Nigam_Kumar_${personal.graduationYear}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleCopySummary = () => {
    const summary = `${personal.name} | ${personal.headline} | B.Tech CSE @ IIST Indore (CGPA: ${personal.cgpa}/10) | GitHub: ${personal.githubUrl} | Email: ${personal.email}`
    navigator.clipboard.writeText(summary)
    setCopiedSummary(true)
    setTimeout(() => setCopiedSummary(false), 2500)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 p-5 sm:p-8 space-y-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            <h2 id="resume-modal-title" className="text-lg font-bold text-slate-900">
              Curriculum Vitae / ATS-Formatted Resume
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xs cursor-pointer"
              title="Download ATS text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download TXT</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-600" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleCopySummary}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
              title="Copy Recruiter One-Line Bio"
            >
              {copiedSummary ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ATS Resume Sheet Layout */}
        <div className="p-6 sm:p-10 rounded-xl bg-slate-50/50 border border-slate-200 font-sans text-slate-800 space-y-6 shadow-xs print:p-0 print:border-none">
          
          {/* Header */}
          <div className="text-center space-y-1.5 pb-4 border-b border-slate-200">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
              {personal.name}
            </h1>
            <p className="text-xs sm:text-sm text-indigo-700 font-medium">
              {personal.headline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 pt-1 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-indigo-600" /> {personal.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-indigo-600" /> {personal.location}
              </span>
              <span>•</span>
              <a href={personal.githubUrl} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                github.com/{personal.githubUsername}
              </a>
              <span>•</span>
              <a href={personal.linkedinUrl} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                linkedin.com/in/nigamkumar3435
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-200">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
              <div>
                <span className="font-bold text-slate-900">{personal.degree}</span>
                <div className="text-slate-600">{personal.institution}</div>
              </div>
              <div className="text-left sm:text-right mt-1 sm:mt-0 font-mono text-xs">
                <span className="text-slate-600 font-medium">2023 – 2027 (Expected)</span>
                <div className="text-indigo-700 font-bold">CGPA: {personal.cgpa} / {personal.cgpaScale}</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2 text-xs">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-200">
              Technical Skills
            </h3>
            <div className="space-y-1.5 text-slate-700">
              <p>
                <strong className="text-slate-900">Languages:</strong> Java, Python, C, C++, JavaScript (ES6+), TypeScript, SQL
              </p>
              <p>
                <strong className="text-slate-900">Frontend:</strong> React.js, Tailwind CSS, HTML5, CSS3, Vite, Responsive Web Design
              </p>
              <p>
                <strong className="text-slate-900">Backend &amp; Databases:</strong> Node.js, Express.js, Java Servlets, JSP, MySQL 8.0, MongoDB, JDBC, REST APIs
              </p>
              <p>
                <strong className="text-slate-900">AI / Machine Learning:</strong> Scikit-learn, Pandas, NumPy, Data Preprocessing, Model Evaluation, Flask
              </p>
              <p>
                <strong className="text-slate-900">Developer Tools:</strong> Git, GitHub, Linux (Bash), Postman, Docker Basics, Cloud &amp; AWS Fundamentals
              </p>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3 text-xs">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-200">
              Technical Projects
            </h3>
            
            {/* Project 1 */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">Pockit — Personal Finance Platform</span>
                <span className="font-mono text-[11px] text-slate-500">React.js, Node.js, Express, MongoDB/SQLite</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                <li>Engineered personal finance software with atomic transaction recording and category budget limits.</li>
                <li>Implemented sub-50ms query filtering, memoized selectors, and cash-flow breakdown visualization.</li>
                <li>Designed planned AI anomaly clustering pipeline to alert users to irregular discretionary spending.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">Blood Bank Management System</span>
                <span className="font-mono text-[11px] text-slate-500">Java Servlets, JSP, MySQL 8.0, JDBC</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                <li>Built a 3-tier MVC database application managing donor lifecycle and blood stock across 8 groups.</li>
                <li>Implemented MySQL row-level locking (SELECT ... FOR UPDATE) to eliminate race conditions during emergency blood claims.</li>
                <li>Guarded all database layers using parameterized PreparedStatements against SQL injection vulnerabilities.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">Disease Risk Prediction Pipeline</span>
                <span className="font-mono text-[11px] text-slate-500">Python 3, Scikit-learn, Pandas, Flask, Joblib</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                <li>Built an end-to-end supervised machine learning classification pipeline on clinical diagnostic data.</li>
                <li>Evaluated baseline Logistic Regression vs Random Forest models, prioritizing Recall on positive cases.</li>
                <li>Deployed serialized model inference endpoint via lightweight Flask service with ethical AI disclaimers.</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">FoodWise-AI &amp; Agentic Lab (Prototype)</span>
                <span className="font-mono text-[11px] text-slate-500">Python, ReAct Agent Pattern, Geolocation Index</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                <li>Prototyped demand forecasting and autonomous surplus matching agent using multi-step ReAct pattern.</li>
                <li>Engineered mandatory Human-in-the-Loop approval checkpoints before dispatching notifications.</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2 text-xs">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-200">
              Verified Certifications
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-700">
              <li>• AWS Academy Graduate — Cloud Foundations (AWS, 2024)</li>
              <li>• Oracle Generative AI Certified Professional (Oracle, 2024)</li>
              <li>• IBM SQL and Relational Databases 101 (IBM, 2024)</li>
              <li>• Cisco Cybersecurity Essentials (Cisco, 2024)</li>
              <li>• Linux Unhatched (NDG / Cisco, 2023)</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}
