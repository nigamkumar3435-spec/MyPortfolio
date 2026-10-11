import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Nigam Kumar',
    headline: 'Computer Science Engineer | Full-Stack Developer | Exploring AI Engineering',
    supportingStatement:
      'I build practical software solutions by combining full-stack development, machine learning, and intelligent automation.',
    bioParagraphs: [
      "I am a Computer Science Engineering undergraduate at Indore Institute of Science and Technology (IIST), Indore, graduating in 2027. My engineering focus sits at the intersection of robust web architectures, relational database engineering, and practical machine learning systems.",
      "Rather than chasing hype or superficial demos, I prefer building software from first principles—whether that means implementing normalized MySQL schemas with prepared statements in Java, crafting responsive frontends with React, or training and validating supervised classification pipelines in Python.",
      "I approach development systematically: decomposing complex requirements into testable modules, designing defensive error boundaries, and verifying model metrics with cross-validation. I am currently seeking software engineering, full-stack, or AI/ML internship opportunities where I can contribute to production-grade systems alongside experienced engineering teams."
    ],
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Indore Institute of Science and Technology (IIST), Indore',
    graduationYear: 2027,
    cgpa: '8.2', // Editable: Update with your latest verified semester CGPA
    cgpaScale: '10.0',
    location: 'Indore, Madhya Pradesh, India',
    availability: 'Actively seeking 2025/2026 SDE & AI/ML Internships',
    email: 'nigamkumar3435@gmail.com',
    githubUsername: 'nigamkumar3435-spec',
    githubUrl: 'https://github.com/nigamkumar3435-spec',
    linkedinUrl: 'https://www.linkedin.com/in/nigamkumar3435', // Update with exact LinkedIn handle if different
    targetRoles: [
      'Software Development Intern',
      'Full-Stack Developer Intern',
      'AI/ML Intern',
      'AI Automation & Agentic AI Opportunities'
    ]
  },

  projects: [
    {
      id: 'pockit',
      title: 'Pockit',
      tagline: 'Personal Finance Software & Budget Telemetry Platform',
      category: 'fullstack',
      featured: true,
      status: 'Completed',
      badge: 'Full-Stack Software',
      description:
        'A comprehensive personal-finance management platform engineered to track granular income and expense streams, enforce category-specific spending limits, and visualize monthly cash-flow health.',
      problem:
        'Personal financial budgeting frequently fails because users lack real-time visibility into discretionary spending velocity. Spreadsheets are cumbersome on mobile devices, while existing commercial tools often lock essential budget limit alerts behind paywalls.',
      solution:
        'Designed and built an intuitive, responsive personal finance tracking system with atomic transaction recording, instant category classification, visual budget threshold meters, and exportable financial summaries.',
      targetUsers:
        'College students, young professionals, and budget-conscious individuals seeking a friction-free way to monitor spending leaks and track financial goals.',
      keyFeatures: [
        'Atomic transaction logging with real-time balance reconciliation',
        'Dynamic category budget allocation with visual threshold progress bars',
        'Interactive cash flow distribution charts by category and timeframe',
        'Client-side search and filtering across transaction notes and amounts',
        'Local data persistence and CSV export for personal accounting records',
        'Planned AI Module: Spending anomaly detection & budget forecasting (in development)'
      ],
      techStack: {
        frontend: ['React.js', 'Tailwind CSS', 'TypeScript', 'Lucide Icons'],
        backend: ['Node.js', 'Express.js', 'RESTful API'],
        database: ['MongoDB / SQLite Local Storage'],
        tools: ['Vite', 'Postman', 'Git / GitHub']
      },
      myContribution: [
        'Architected the entire frontend UI component hierarchy using reusable React hooks and Tailwind CSS',
        'Implemented the transaction state management pipeline with optimistic UI updates and local persistence',
        'Designed analytical charts and budget consumption meters with responsive layout recalculations',
        'Engineered defensive boundary validation for financial inputs (preventing negative or malformed currency figures)'
      ],
      challengesAndDecisions: [
        {
          challenge: 'Floating point rounding discrepancies during continuous currency calculations',
          solution: 'Implemented integer-cent arithmetic for internal calculations before formatting for UI display',
          takeaway: 'Financial software must never rely on standard floating point math without deterministic precision controls.'
        },
        {
          challenge: 'Maintaining instant UI responsiveness when filtering extensive transaction histories',
          solution: 'Applied memoized React selectors and debounced search filters to eliminate unnecessary DOM re-renders',
          takeaway: 'Premature rendering optimizations add clutter, but memoizing derived array computations is critical for table performance.'
        }
      ],
      resultsAndLimitations: {
        results:
          'Delivered a fluid, responsive financial management interface that renders transaction queries with sub-50ms latency and provides clear visual feedback on budget limits.',
        limitations:
          'Currently uses client-side and local database storage. Bank SMS parsing and automated multi-currency conversion are planned for future iterations.',
        plannedImprovements: [
          'Integration with Plaid / Open Banking APIs for automatic bank feed sync',
          'Lightweight Python/Scikit-learn spending anomaly detector to flag irregular expenses',
          'Exportable PDF monthly financial health reports'
        ]
      },
      githubUrl: 'https://github.com/nigamkumar3435-spec',
      demoUrl: '#demo-pockit'
    },

    {
      id: 'blood-bank-system',
      title: 'Blood Bank Management System',
      tagline: 'Database-Driven Healthcare Web Application',
      category: 'fullstack',
      featured: true,
      status: 'Verified',
      badge: 'Java & MySQL Web App',
      description:
        'A robust web application engineered using Java Servlets, JSP, and MySQL to streamline donor registrations, track blood unit inventory across 8 blood groups, process emergency recipient requests, and audit stock levels.',
      problem:
        'Hospitals and blood transfusion centers experience critical delays during emergency transfusions due to fragmented manual paper logs, opaque blood unit inventory counts, and slow donor eligibility verification.',
      solution:
        'Built a centralized 3-tier MVC database application that automates donor lifecycle records, maintains real-time blood group unit counts, validates recipient requests against current stock, and provides an administrative management dashboard.',
      targetUsers:
        'Blood bank administrators, hospital procurement staff, voluntary donors, and emergency patient coordinators.',
      keyFeatures: [
        'Donor registration and medical eligibility tracking (last donation date, health status)',
        'Real-time blood stock inventory matrix across all groups (A+, A-, B+, B-, O+, O-, AB+, AB-)',
        'Emergency blood request dispatch and approval workflow',
        'Low-stock threshold warning triggers for scarce blood groups',
        'Administrative dashboard for inventory reconciliation and operational audit logging',
        'Normalized relational database schema with referential integrity constraints'
      ],
      techStack: {
        frontend: ['JSP (JavaServer Pages)', 'HTML5', 'CSS3', 'Bootstrap'],
        backend: ['Java Servlets', 'JDBC (Java Database Connectivity)', 'Apache Tomcat'],
        database: ['MySQL 8.0 (InnoDB Engine)'],
        tools: ['NetBeans / Eclipse IDE', 'mysql-connector-j-8.0.33', 'Git / GitHub']
      },
      myContribution: [
        'Designed the 3NF relational database schema including tables for donors, blood_stock, requests, and admin_users',
        'Wrote JDBC Data Access Objects (DAO) using parameterized PreparedStatements to eliminate SQL injection risks',
        'Implemented the core Servlet controller routing logic handling HTTP GET/POST requests and session management',
        'Configured Apache Tomcat server deployment and wrote database initialization SQL scripts'
      ],
      challengesAndDecisions: [
        {
          challenge: 'Race conditions when multiple concurrent requests attempted to claim the last available blood unit',
          solution: 'Implemented MySQL transaction management with row-level locking (SELECT ... FOR UPDATE) during inventory decrement',
          takeaway: 'In life-critical systems, database-level ACID transactions are non-negotiable to prevent double-allocation.'
        },
        {
          challenge: 'Handling malformed dates and invalid donor health metrics during form submission',
          solution: 'Enforced dual-layer validation—client-side HTML5 input constraints backed by strict server-side Java regex parsing',
          takeaway: 'Never trust client-side validation alone; the backend must always independently verify payload integrity.'
        }
      ],
      resultsAndLimitations: {
        results:
          'Successfully verified end-to-end blood donation and request pipelines with ACID transaction safety on MySQL 8.0, demonstrating reliable inventory reconciliation.',
        limitations:
          'Utilizes traditional server-rendered JSP architecture rather than a modern decoupled REST/SPA frontend.',
        plannedImprovements: [
          'Migration to Spring Boot REST backend with React frontend for mobile-first accessibility',
          'Automated SMS / Email notification dispatch to compatible donors during critical shortages',
          'Role-based access control (RBAC) with Spring Security and JWT tokens'
        ]
      },
      githubUrl: 'https://github.com/nigamkumar3435-spec/blood_bank_project',
      demoUrl: 'https://github.com/nigamkumar3435-spec/blood_bank_project'
    },

    {
      id: 'disease-risk-prediction',
      title: 'Disease Risk Prediction Pipeline',
      tagline: 'Supervised Machine Learning Classification & Risk Stratification',
      category: 'ml',
      featured: true,
      status: 'Verified',
      badge: 'Machine Learning',
      description:
        'An empirical machine learning classification system trained on clinical diagnostic datasets to predict health risk likelihood using preprocessed physiological indicators, paired with a lightweight Flask web interface.',
      problem:
        'Early detection of chronic disease risks is often missed in preliminary checkups because individual biometric indicators appear borderline normal when analyzed in isolation rather than synergistically.',
      solution:
        'Constructed a reproducible ML pipeline in Python that standardizes continuous physiological features, evaluates candidate classification models, and outputs a calibrated risk probability score to aid preventive awareness.',
      targetUsers:
        'Health-conscious individuals and students studying predictive modeling in preventive healthcare (educational research use).',
      keyFeatures: [
        'Structured clinical data ingestion pipeline with train/test partitioning',
        'Data preprocessing: StandardScaler normalization and median imputation for null values',
        'Model exploration: Benchmarked Logistic Regression baseline against Decision Trees and Random Forest',
        'Comprehensive evaluation: Precision, Recall, F1-Score, Confusion Matrix, and ROC-AUC curve analysis',
        'Lightweight Flask serving endpoint accepting JSON payloads and returning risk probabilities',
        'Explicit responsible-use guardrails stating non-diagnostic, informational scope'
      ],
      techStack: {
        frontend: ['HTML5', 'CSS3', 'Jinja2 Templates'],
        backend: ['Flask (Python Web Server)'],
        ml: ['Python 3', 'Scikit-Learn', 'Pandas', 'NumPy', 'Joblib'],
        tools: ['Jupyter Notebook', 'Git / GitHub']
      },
      myContribution: [
        'Conducted exploratory data analysis (EDA) to detect feature collinearity and evaluate target class balance',
        'Engineered preprocessing transformers ensuring feature scalers were fitted exclusively on training sets to prevent data leakage',
        'Trained and tuned classification models, prioritizing Recall on high-risk classes to reduce false negatives',
        'Exported serialized models and scalers with Joblib and deployed them within a clean Flask web service'
      ],
      challengesAndDecisions: [
        {
          challenge: 'Avoiding data leakage between training and testing sets during normalization',
          solution: 'Encapsulated preprocessing steps within Scikit-learn Pipeline objects, fitting solely on training data',
          takeaway: 'Data leakage gives deceptively high validation scores that crumble in real inference; strict separation is essential.'
        },
        {
          challenge: 'Imbalanced consequences of False Positives vs. False Negatives in health risk contexts',
          solution: 'Adjusted decision threshold classification cutoffs to optimize Recall for potential high-risk cases',
          takeaway: 'Accuracy is an insufficient metric for health datasets; cost-sensitive evaluation must guide threshold selection.'
        }
      ],
      resultsAndLimitations: {
        results:
          'Achieved balanced classification metrics with high recall on positive risk cases across held-out test splits, validated through confusion matrix inspections.',
        limitations:
          'Trained on standard academic datasets (e.g., Heart Disease clinical parameters) which do not represent universal demographic diversity.',
        plannedImprovements: [
          'Incorporate SHAP / LIME explainability values to show which physiological indicators influenced the prediction',
          'Deploy containerized Docker image to Cloud Run for automated inference scaling',
          'Integrate broader cross-validation folds and hyperparameter tuning with Optuna'
        ]
      },
      githubUrl: 'https://github.com/nigamkumar3435-spec/DiseaseRiskPrediction',
      demoUrl: 'https://github.com/nigamkumar3435-spec/DiseaseRiskPrediction'
    },

    {
      id: 'foodwise-ai',
      title: 'FoodWise-AI: Intelligent Surplus & Agentic Dispatch',
      tagline: 'Demand Forecasting & Autonomous NGO Surplus Matching (Exploring & Prototyping)',
      category: 'agent',
      featured: true,
      status: 'Currently Exploring',
      badge: 'AI Lab & Automation Prototype',
      description:
        'An experimental AI platform that predicts daily commercial kitchen demand, identifies perishable surplus thresholds, and orchestrates an autonomous agent workflow to match and route excess food to nearby hunger relief NGOs.',
      problem:
        'Commercial restaurants and institutional cafeterias waste metric tons of edible food daily due to inaccurate demand forecasting and the logistical friction of finding and contacting nearby volunteer organizations within safe consumption windows.',
      solution:
        'Prototyped a multi-step intelligent workflow combining time-series demand predictions with an autonomous dispatch agent that verifies surplus quantities, queries geolocation radii for eligible NGOs, and drafts alert dispatches with human supervisor confirmation.',
      targetUsers:
        'Institutional kitchen managers, corporate dining services, and food bank coordinators.',
      keyFeatures: [
        'Predictive demand estimator analyzing historical consumption, day of week, and event schedules',
        'Autonomous threshold detection: Automatically flags surplus when inventory exceeds anticipated demand by >15%',
        'Agentic NGO Matching Workflow: Queries geo-coordinates to identify eligible recipient partners within optimal transit radius',
        'Human-in-the-Loop Safeguard: Generates structured dispatch proposals requiring manager sign-off before notifying volunteers',
        'Defensive API retry mechanisms and graceful fallback to manual emergency phone lists if agentic tools fail'
      ],
      techStack: {
        frontend: ['React.js / Streamlit Prototyping'],
        backend: ['Python', 'Flask / FastAPI'],
        ml: ['Scikit-learn', 'Pandas', 'NumPy'],
        tools: ['LangChain / ReAct Pattern Prototypes', 'Pytest', 'Git / GitHub']
      },
      myContribution: [
        'Designed the core system architecture separating demand forecasting from the agentic decision workflow',
        'Implemented historical surplus heuristic calculators and geolocation distance filtering in Python',
        'Structured the supervisor approval state machine ensuring automated agents cannot dispatch unverified orders',
        'Authored comprehensive test suites with Pytest covering edge cases such as zero surplus and outside-operating-hours runs'
      ],
      challengesAndDecisions: [
        {
          challenge: 'Risk of autonomous agents sending erroneous surplus dispatches during noisy prediction spikes',
          solution: 'Instituted a mandatory Human-in-the-Loop checkpoint where the agent only drafts the dispatch for kitchen approval',
          takeaway: 'Autonomous agentic systems handling physical logistics must never bypass explicit human verification checkpoints.'
        },
        {
          challenge: 'Managing external API failures during address geocoding and routing calculations',
          solution: 'Implemented exponential backoff retries with fallback to pre-cached postal code lookup tables',
          takeaway: 'Agent tool execution must be architected defensively with deterministic fallbacks when external APIs degrade.'
        }
      ],
      resultsAndLimitations: {
        results:
          'Prototyped working demand vs surplus models and demonstrated end-to-end agentic dispatch simulations with simulated commercial kitchen logs.',
        limitations:
          'Currently in prototype exploration status; requires pilot partnerships with regional NGOs and live IoT weight sensor feeds.',
        plannedImprovements: [
          'Integration with real-time food temperature sensors via MQTT for automated food safety validation',
          'WhatsApp Business API integration for rapid volunteer confirmation',
          'Multi-agent debate pattern to evaluate route efficiency vs cold-chain urgency'
        ]
      },
      githubUrl: 'https://github.com/nigamkumar3435-spec/FoodWise-AI',
      demoUrl: 'https://github.com/nigamkumar3435-spec/FoodWise-AI'
    }
  ],

  skillCategories: [
    {
      title: 'Programming Languages',
      description: 'Core languages used for systems programming, data structures, backend services, and machine learning pipelines.',
      skills: [
        { name: 'Java', proficiency: 'Core Competency', context: 'DSA, OOP, Servlets, JDBC, Enterprise App Design' },
        { name: 'Python', proficiency: 'Core Competency', context: 'Data Analysis, ML Pipelines, Flask, Scripting & Automation' },
        { name: 'C', proficiency: 'Working Knowledge', context: 'System Fundamentals, Memory Management, Academic Core' },
        { name: 'C++', proficiency: 'Working Knowledge', context: 'Object-Oriented Programming, Algorithm Design' },
        { name: 'JavaScript (ES6+)', proficiency: 'Core Competency', context: 'Asynchronous Programming, DOM, Full-Stack Development' },
        { name: 'TypeScript', proficiency: 'Working Knowledge', context: 'Typed Component Systems, Type Safety in React' },
        { name: 'SQL', proficiency: 'Core Competency', context: 'Complex Joins, Aggregations, Indexing, Schema Normalization' }
      ]
    },
    {
      title: 'Frontend Development',
      description: 'Modern, accessible, and responsive user interfaces built with component modularity and clean state patterns.',
      skills: [
        { name: 'React.js', proficiency: 'Core Competency', context: 'Hooks, Component Lifecycle, Modular Architecture, State' },
        { name: 'Tailwind CSS', proficiency: 'Core Competency', context: 'Utility-first Responsive Layouts, Glassmorphism, Design Systems' },
        { name: 'HTML5 & Semantic Web', proficiency: 'Core Competency', context: 'Accessible DOM Structures, WCAG Standards, SEO Metadata' },
        { name: 'Modern CSS & Flexbox/Grid', proficiency: 'Core Competency', context: 'Complex Layouts, Transitions, Media Queries' },
        { name: 'Vite & Build Tooling', proficiency: 'Working Knowledge', context: 'Module Bundling, Fast Refresh, Production Optimization' }
      ]
    },
    {
      title: 'Backend & Databases',
      description: 'Reliable server-side architectures, RESTful API conventions, and relational database integrity.',
      skills: [
        { name: 'Node.js & Express.js', proficiency: 'Core Competency', context: 'REST APIs, Middleware, Async Control Flow, Routing' },
        { name: 'MySQL', proficiency: 'Core Competency', context: '3NF Schema Design, Transactions, Foreign Keys, Stored Procedures' },
        { name: 'Java Servlets & JSP', proficiency: 'Working Knowledge', context: 'MVC Architecture, Session Management, JDBC Data Layers' },
        { name: 'MongoDB', proficiency: 'Working Knowledge', context: 'Document Models, Mongoose Schema Modeling, CRUD Operations' },
        { name: 'RESTful API Design', proficiency: 'Core Competency', context: 'Status Codes, Defensive Validation, Error Payloads' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      description: 'Practical, empirical data science workflows—from feature engineering to validated model inference.',
      skills: [
        { name: 'Scikit-Learn', proficiency: 'Core Competency', context: 'Supervised Models, Pipelines, Ensembles, Evaluation' },
        { name: 'Pandas & NumPy', proficiency: 'Core Competency', context: 'Data Cleaning, Vectorized Ops, Matrix Math, EDA' },
        { name: 'Data Preprocessing', proficiency: 'Core Competency', context: 'Scaling, Encoding, Imputation, Leakage Prevention' },
        { name: 'Model Evaluation & Metrics', proficiency: 'Core Competency', context: 'Precision/Recall Trade-offs, ROC-AUC, Confusion Matrix' },
        { name: 'AI APIs & LLM Prompting', proficiency: 'Working Knowledge', context: 'Structured Output Prompts, Context Engineering, Tool Calling' },
        { name: 'Agentic Workflows (ReAct)', proficiency: 'Active Exploration', context: 'Multi-step Tool Orchestration, Human-in-the-Loop' }
      ]
    },
    {
      title: 'Developer Tools & Core Foundations',
      description: 'Engineering workflows, version control discipline, and operating systems fundamentals.',
      skills: [
        { name: 'Git & GitHub', proficiency: 'Core Competency', context: 'Branching, Clean Commit History, PRs, Issue Tracking' },
        { name: 'Linux / Bash Shell', proficiency: 'Working Knowledge', context: 'File Navigation, Permissions, CLI Tooling, Shell Scripts' },
        { name: 'Postman', proficiency: 'Working Knowledge', context: 'API Endpoint Testing, Mocking, Payload Validation' },
        { name: 'Docker Fundamentals', proficiency: 'Active Exploration', context: 'Container Concepts, Dockerfiles, Environment Parity' },
        { name: 'Cloud & AWS Fundamentals', proficiency: 'Working Knowledge', context: 'EC2, S3, IAM, Cloud Architecture Foundations' }
      ]
    }
  ],

  certifications: [
    {
      id: 'aws-cloud',
      title: 'AWS Academy Graduate — Cloud Foundations',
      issuer: 'Amazon Web Services (AWS Academy)',
      year: '2024',
      badgeText: 'Cloud Infrastructure & Services',
      skillsCovered: ['Cloud Architecture', 'AWS IAM & Security', 'EC2 & Compute', 'S3 & Storage', 'VPC Networking'],
      credentialId: 'AWS-ACADEMY-FOUNDATIONS',
      verificationUrl: 'https://aws.amazon.com/training/'
    },
    {
      id: 'oracle-genai',
      title: 'Oracle Generative AI Certified Professional',
      issuer: 'Oracle University',
      year: '2024',
      badgeText: 'Generative AI & LLM Systems',
      skillsCovered: ['Large Language Models', 'Prompt Engineering', 'RAG Fundamentals', 'Fine-Tuning Concepts', 'Model Evaluation'],
      credentialId: 'ORACLE-GENAI-CERT',
      verificationUrl: 'https://education.oracle.com/'
    },
    {
      id: 'ibm-sql',
      title: 'IBM SQL and Relational Databases 101',
      issuer: 'IBM Developer Skills Network',
      year: '2024',
      badgeText: 'Database Engineering & Queries',
      skillsCovered: ['Relational Algebra', 'Complex SQL Joins', 'Subqueries & Views', 'Schema Constraints', 'Aggregation Functions'],
      credentialId: 'IBM-SQL-RELATIONAL',
      verificationUrl: 'https://www.credly.com/'
    },
    {
      id: 'cisco-cyber',
      title: 'Cisco Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      year: '2024',
      badgeText: 'Information Security & Defensive Ops',
      skillsCovered: ['Network Threat Landscapes', 'Cryptographic Basics', 'Access Controls', 'Defensive Hardening'],
      credentialId: 'CISCO-NETACAD-CYBER',
      verificationUrl: 'https://www.netacad.com/'
    },
    {
      id: 'linux-unhatched',
      title: 'Linux Unhatched',
      issuer: 'NDG / Cisco Networking Academy',
      year: '2023',
      badgeText: 'Operating Systems & CLI',
      skillsCovered: ['Linux Shell', 'File Hierarchy System', 'Permissions & Ownership', 'Process Management'],
      credentialId: 'NDG-LINUX-UNHATCHED',
      verificationUrl: 'https://www.netacad.com/'
    }
  ],

  engineeringPrinciples: [
    {
      number: '01',
      title: 'Deconstruct Ambiguous Problems into Atomic Specifications',
      philosophy:
        'Software problems rarely arrive with clean instructions. Before touching an IDE, I deconstruct high-level requirements into state diagrams, discrete data contracts, and boundary conditions.',
      practicalExample:
        'In Pockit, instead of treating budget overspending as a UI alert afterthought, I modeled it as a state machine where transactions trigger atomic balance recalculations and threshold triggers.',
      keyTakeaway: 'Clear specifications eliminate 80% of downstream refactoring before the first line of code is written.'
    },
    {
      number: '02',
      title: 'Relational Integrity & Schema Normalization First',
      philosophy:
        'Bad database design ruins good application code. I believe in normalized schemas (3NF), declarative foreign key constraints, and transactional consistency over loose, unstructured data stores.',
      practicalExample:
        'In the Blood Bank Management System, emergency blood allocation uses MySQL row-level locking (SELECT ... FOR UPDATE) to prevent race conditions during concurrent blood unit reservations.',
      keyTakeaway: 'Data models must protect consistency at the persistence layer, not just in application memory.'
    },
    {
      number: '03',
      title: 'Empirical Evaluation Over Blind Machine Learning Hype',
      philosophy:
        'A machine learning model is only as good as its cross-validation strategy. I test simple baselines first (Logistic Regression, Decision Trees) before considering complex ensembles, and evaluate business costs (Recall vs Precision) rather than just accuracy.',
      practicalExample:
        'In DiseaseRiskPrediction, a high general accuracy score was misleading due to class distribution. I prioritized Recall for potential high-risk cases to minimize life-impacting false negatives.',
      keyTakeaway: 'In machine learning, the right metric depends on the penalty of being wrong.'
    },
    {
      number: '04',
      title: 'Defensive Programming & Graceful Error Handling',
      philosophy:
        'Every external input is untrusted, and every network call can fail. I write defensive guards: boundary parameter checking, strict TypeScript types, prepared SQL statements, and clear fallback UI states.',
      practicalExample:
        'In the Blood Bank project, all database operations use parameterized PreparedStatements in Java to strictly eliminate SQL injection vulnerabilities.',
      keyTakeaway: 'Good code behaves predictably when happy; exceptional code fails gracefully when things go wrong.'
    },
    {
      number: '05',
      title: 'Clean, Maintainable, and Readable Code Over Cleverness',
      philosophy:
        'Code is read ten times more often than it is written. I prefer explicit variable naming, modular service decomposition, and self-documenting logic over condensed, opaque one-liners.',
      practicalExample:
        'In React projects, I isolate business logic into modular custom hooks and keep presentational components pure and predictable.',
      keyTakeaway: 'Clever code confuses teams; clear code compounds velocity.'
    },
    {
      number: '06',
      title: 'Human-in-the-Loop Safeguards for Autonomous Systems',
      philosophy:
        'While autonomous AI agents and automated workflows offer immense efficiency, actions that impact real-world resources must always feature audit trails, rate limits, and human approval checkpoints.',
      practicalExample:
        'In the FoodWise-AI prototype, the autonomous surplus matching agent prepares NGO dispatch recommendations but mandates manager confirmation before triggering outbound communications.',
      keyTakeaway: 'Automation should amplify human judgment, not remove accountability.'
    }
  ]
}
