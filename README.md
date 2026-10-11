# Nigam Kumar — CSE Student @ IIST Portfolio

A production-grade, recruiter-optimized portfolio website built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**. Designed specifically for technical recruiters, hiring managers, and senior engineers to evaluate engineering depth, problem-solving maturity, and authentic project implementations within 30–60 seconds.

---

## ⚡ Key Highlights

- **30-Second Recruiter Fast-Track**: Immediate visibility of degree, verified CGPA, target roles, location, and verified repositories above the fold.
- **Deep Technical Rigor**: Dedicated project deep-dive architecture views for **Pockit**, **Blood Bank Management System**, **Disease Risk Prediction Pipeline**, and **FoodWise-AI**.
- **Interactive Recruiter Sandbox**:
  - **ML Risk Predictor**: Live client-side decision inference calculating calibrated probability scores with feature standard scaling and responsible AI disclosures.
  - **SQL Schema Explorer**: Interactive MySQL 8.0 query inspector demonstrating schema normalization, row-level locks, and ACID transactions.
  - **Agentic Dispatch Lab**: Step-by-step simulation of an autonomous ReAct agent with human-in-the-loop approval.
- **Interactive Telemetry Console**: Hero-level switchable console featuring system topology, interactive CLI, and clean prepared statement code patterns.
- **ATS-Compliant Resume Modal**: Built-in resume viewer with instant `.txt` ATS download, print-to-PDF formatting, and one-click copy summary.
- **Functional Contact Pipeline**: Form validation, response time commitment, direct email client fallback, and celebratory feedback.
- **Zero Fabrications**: Honest representation of technologies, clearly labeled prototype/planned modules, and zero arbitrary 95% skill percentage bars.

---

## 📁 Project Architecture

```text
MyPortfolio/
├── public/
│   ├── favicon.svg            # Custom geometric branding favicon
│   ├── robots.txt             # Search engine crawler instructions
│   └── sitemap.xml            # SEO indexing specification
├── src/
│   ├── components/
│   │   ├── About.tsx          # Authentic background & core engineering pillars
│   │   ├── Certifications.tsx # Education card & 5 verified credentials
│   │   ├── Contact.tsx         # Functional contact form & SLA commitment
│   │   ├── EngineeringMindset.tsx # "How I Build" (6 practical principles)
│   │   ├── Footer.tsx         # System status beacon & back-to-top button
│   │   ├── Hero.tsx           # High-conversion hero & telemetry console
│   │   ├── Icons.tsx          # Clean SVG icons (GitHub, LinkedIn)
│   │   ├── InteractiveLab.tsx # ML Sandbox, SQL Explorer, Agent Lab
│   │   ├── Navbar.tsx         # Sticky glassmorphic nav & mobile drawer
│   │   ├── ProjectModal.tsx   # Comprehensive architectural deep-dive modal
│   │   ├── Projects.tsx       # Featured project cards & category filter
│   │   ├── RecruiterBar.tsx   # 30-second fast-track credentials strip
│   │   ├── ResumeModal.tsx    # ATS-formatted resume viewer & exporter
│   │   └── Skills.tsx         # Categorized Bento skills with live search
│   ├── data/
│   │   └── portfolioData.ts   # SINGLE SOURCE OF TRUTH for personal details
│   ├── types/
│   │   └── portfolio.ts       # Strict TypeScript type definitions
│   ├── App.tsx                # Master page assembly & modal controllers
│   ├── index.css              # Glassmorphic utilities & custom scrollbar
│   └── main.tsx               # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Single Source of Truth Configuration (`portfolioData.ts`)

All personal details, CGPA, links, projects, and credentials are intentionally centralized in `src/data/portfolioData.ts`. When you need to update information:

1. **Update CGPA / Semester Progress**:
   ```typescript
   cgpa: '7.48', // Update whenever latest semester results arrive
   cgpaScale: '10.0',
   ```

2. **Update Contact & Social Profiles**:
   ```typescript
   email: 'nigamkumar3435@gmail.com',
   githubUrl: 'https://github.com/nigamkumar3435-spec',
   linkedinUrl: 'https://www.linkedin.com/in/nigamkumar3435',
   ```

3. **Update Target Roles**:
   ```typescript
   targetRoles: [
     'Software Development Intern',
     'Full-Stack Developer Intern',
     'AI/ML Intern',
     'AI Automation & Agentic AI Opportunities'
   ]
   ```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18 or higher recommended; tested on v24.15.0)
- npm (v9 or higher)

### Installation & Run

1. Clone or open the repository:
   ```bash
   cd MyPortfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Production Build:
   ```bash
   npm run build
   ```

---

## 🚀 Deployment Instructions

### Option 1: Deploy on Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete elite portfolio website"
   git remote add origin https://github.com/nigamkumar3435-spec/MyPortfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. Your portfolio will be live in under 45 seconds with automated HTTPS and CDN edge caching.

### Option 2: Deploy on Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Set Build command to `npm run build`.
3. Set Publish directory to `dist`.
4. Click **Deploy Site**.

---

## 📋 Verification & Personalization Checklist

Before sending to recruiters, verify the following:

- [ ] **CGPA**: Confirm `src/data/portfolioData.ts` has your latest semester CGPA.
- [ ] **LinkedIn URL**: Confirm your LinkedIn custom vanity URL matches `src/data/portfolioData.ts`.
- [ ] **Email Address**: Ensure `nigamkumar3435@gmail.com` receives forwarded notifications.
- [ ] **Resume**: If you have a custom PDF resume, place it in `public/Nigam_Kumar_Resume.pdf` and link it in `portfolioData.ts`.
- [ ] **Domain**: (Optional) Attach a custom domain like `nigamkumar.dev` on Vercel/Netlify DNS settings.

---

## 📄 License

Crafted for Nigam Kumar. Available under the MIT License.
