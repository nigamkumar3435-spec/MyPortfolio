import React, { useState } from 'react'
import {
  Sparkles,
  Database,
  Cpu,
  Play,
  RotateCcw,
  CheckCircle2,
  Activity,
  ShieldCheck,
  Check
} from 'lucide-react'

export const InteractiveLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ml' | 'sql' | 'agent'>('ml')

  // --- ML Sandbox State ---
  const [age, setAge] = useState<number>(54)
  const [restingBp, setRestingBp] = useState<number>(135)
  const [cholesterol, setCholesterol] = useState<number>(245)
  const [maxHeartRate, setMaxHeartRate] = useState<number>(142)
  const [chestPain, setChestPain] = useState<number>(2) // 0: typical, 1: atypical, 2: non-anginal, 3: asymptomatic

  // Compute calibrated risk score using logistic sigmoid function
  const calculateRisk = () => {
    const normAge = (age - 54) / 9.0
    const normBp = (restingBp - 131) / 17.5
    const normChol = (cholesterol - 246) / 51.8
    const normHrf = (150 - maxHeartRate) / 22.8
    const cpWeight = chestPain === 3 ? 0.8 : chestPain === 2 ? 0.2 : chestPain === 1 ? -0.3 : -0.6

    const z = -0.35 + 0.55 * normAge + 0.42 * normBp + 0.38 * normChol + 0.65 * normHrf + cpWeight
    const prob = 1 / (1 + Math.exp(-z))
    return Math.round(prob * 100)
  }

  const riskScore = calculateRisk()
  const riskCategory =
    riskScore >= 65 ? 'Elevated Risk' : riskScore >= 40 ? 'Moderate Risk' : 'Low Risk'

  // --- SQL Explorer State ---
  const [selectedSqlIndex, setSelectedSqlIndex] = useState<number>(0)

  const sqlQueries = [
    {
      name: 'Stock Inventory by Group',
      query:
        'SELECT blood_group, units_available, minimum_threshold, status \nFROM blood_stock \nORDER BY units_available ASC;',
      headers: ['blood_group', 'units_available', 'minimum_threshold', 'status'],
      rows: [
        ['AB-', '3', '10', 'CRITICAL_LOW'],
        ['O-', '5', '15', 'LOW_STOCK'],
        ['B-', '8', '10', 'MONITORING'],
        ['A-', '12', '10', 'SUFFICIENT'],
        ['AB+', '18', '15', 'SUFFICIENT'],
        ['A+', '32', '20', 'OPTIMAL'],
        ['B+', '38', '20', 'OPTIMAL'],
        ['O+', '45', '25', 'OPTIMAL']
      ]
    },
    {
      name: 'Eligible Voluntary Donors (>90 Days)',
      query:
        'SELECT donor_id, full_name, blood_group, DATEDIFF(CURRENT_DATE, last_donation_date) AS days_since_donation \nFROM donors \nWHERE is_medically_cleared = 1 AND DATEDIFF(CURRENT_DATE, last_donation_date) >= 90 \nLIMIT 5;',
      headers: ['donor_id', 'full_name', 'blood_group', 'days_since_donation'],
      rows: [
        ['D-1021', 'Rohan Sharma', 'O+', '114'],
        ['D-1044', 'Ananya Verma', 'AB-', '98'],
        ['D-1089', 'Vikram Patel', 'B+', '142'],
        ['D-1102', 'Priya Joshi', 'A+', '105'],
        ['D-1135', 'Aman Tiwari', 'O-', '92']
      ]
    },
    {
      name: 'Pending Emergency Blood Requests',
      query:
        'SELECT request_id, hospital_name, required_group, units_needed, urgency_level \nFROM emergency_requests \nWHERE request_status = "PENDING" \nORDER BY urgency_level DESC;',
      headers: ['request_id', 'hospital_name', 'required_group', 'units_needed', 'urgency_level'],
      rows: [
        ['REQ-882', 'City Care Hospital', 'O-', '4', 'HIGH_URGENT'],
        ['REQ-885', 'Apollo Transfusion Center', 'AB-', '2', 'HIGH_URGENT'],
        ['REQ-891', 'Indore Trauma Ward', 'B+', '5', 'STANDARD']
      ]
    }
  ]

  // --- Agentic Simulation State ---
  const [agentStep, setAgentStep] = useState<number>(0)
  const [agentRunning, setAgentRunning] = useState<boolean>(false)
  const [managerApproved, setManagerApproved] = useState<boolean>(false)

  const runAgentSimulation = () => {
    setAgentRunning(true)
    setAgentStep(1)
    setManagerApproved(false)

    setTimeout(() => setAgentStep(2), 1100)
    setTimeout(() => setAgentStep(3), 2200)
    setTimeout(() => {
      setAgentStep(4)
      setAgentRunning(false)
    }, 3300)
  }

  const approveDispatch = () => {
    setManagerApproved(true)
    setAgentStep(5)
  }

  const resetAgent = () => {
    setAgentStep(0)
    setAgentRunning(false)
    setManagerApproved(false)
  }

  return (
    <section id="interactive-lab" className="py-24 relative bg-black/60">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-violet-600/10 via-cyan-500/10 to-blue-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Heading (Bigger Typography & Neon Accents) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold shadow-sm shadow-cyan-500/20">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>05 // LIVE RECRUITER LAB</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Interactive Technical{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                Sandbox
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Inspect working logic in real-time: test ML decision inference, execute SQL schema queries, or run an autonomous multi-step agent workflow.
            </p>
          </div>

          {/* Mode Switcher Tabs (Enlarged) */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-white/15 text-sm font-mono self-start md:self-auto shadow-xl shadow-black/40">
            <button
              onClick={() => setActiveTab('ml')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 font-bold cursor-pointer ${
                activeTab === 'ml'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>ML Risk Predictor</span>
            </button>

            <button
              onClick={() => setActiveTab('sql')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 font-bold cursor-pointer ${
                activeTab === 'sql'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-950 shadow-md shadow-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>SQL Schema Explorer</span>
            </button>

            <button
              onClick={() => setActiveTab('agent')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 font-bold cursor-pointer ${
                activeTab === 'agent'
                  ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-md shadow-violet-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Agentic Dispatch Lab</span>
            </button>
          </div>
        </div>

        {/* Tab 1: ML Risk Predictor Sandbox */}
        {activeTab === 'ml' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl">
            {/* Left Column: Clinical Parameters */}
            <div className="lg:col-span-7 space-y-7">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-sm font-mono font-bold uppercase text-cyan-400 tracking-wider">
                  Clinical Input Parameters
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Standardized Scaler Applied
                </span>
              </div>

              {/* Slider 1: Age */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-slate-200">Patient Age (Years)</span>
                  <span className="font-mono text-cyan-300 text-base font-bold">{age} years</span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 h-2.5 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 2: Resting Blood Pressure */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-slate-200">Resting Blood Pressure (mm Hg)</span>
                  <span className="font-mono text-cyan-300 text-base font-bold">{restingBp} mm Hg</span>
                </div>
                <input
                  type="range"
                  min="90"
                  max="200"
                  value={restingBp}
                  onChange={(e) => setRestingBp(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 h-2.5 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 3: Serum Cholesterol */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-slate-200">Serum Cholesterol (mg/dl)</span>
                  <span className="font-mono text-cyan-300 text-base font-bold">{cholesterol} mg/dl</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="380"
                  value={cholesterol}
                  onChange={(e) => setCholesterol(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 h-2.5 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 4: Max Heart Rate */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-slate-200">Maximum Heart Rate Achieved (bpm)</span>
                  <span className="font-mono text-cyan-300 text-base font-bold">{maxHeartRate} bpm</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="210"
                  value={maxHeartRate}
                  onChange={(e) => setMaxHeartRate(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 h-2.5 rounded-lg cursor-pointer"
                />
              </div>

              {/* Chest Pain Selector */}
              <div className="space-y-3">
                <div className="text-sm text-slate-200 font-semibold">Chest Pain Classification</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  {[
                    { id: 0, label: 'Typical Angina' },
                    { id: 1, label: 'Atypical' },
                    { id: 2, label: 'Non-Anginal' },
                    { id: 3, label: 'Asymptomatic' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setChestPain(item.id)}
                      className={`p-3 rounded-xl border transition-all text-center cursor-pointer font-bold ${
                        chestPain === item.id
                          ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/20'
                          : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Model Output & Responsible Disclaimer */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-7 bg-black/60 p-7 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-300 uppercase font-bold">
                    Model Inference Output
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 font-bold">
                    Live Logistic Pipeline
                  </span>
                </div>

                {/* Score Dial (Extra Large & Glowing) */}
                <div className="text-center py-6 space-y-3">
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-black font-mono tracking-tight text-white drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                    {riskScore}%
                  </div>
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-mono font-bold ${
                      riskScore >= 65
                        ? 'bg-rose-950/70 text-rose-300 border border-rose-500/50 shadow-md shadow-rose-900/30'
                        : riskScore >= 40
                        ? 'bg-amber-950/70 text-amber-300 border border-amber-500/50 shadow-md shadow-amber-900/30'
                        : 'bg-emerald-950/70 text-emerald-300 border border-emerald-500/50 shadow-md shadow-emerald-900/30'
                    }`}
                  >
                    <span>{riskCategory}</span>
                  </div>
                  <p className="text-sm text-slate-300 pt-1 font-medium">
                    Calibrated likelihood score across standard clinical validation sets.
                  </p>
                </div>

                {/* Contributing Weights Breakdown */}
                <div className="space-y-2.5 text-xs font-mono bg-slate-900/80 p-4 rounded-2xl border border-white/10">
                  <div className="text-xs text-slate-300 font-bold">
                    Decision Boundary Feature Weights:
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Heart Rate Deficit:</span>
                    <span className="text-cyan-300 font-bold">Weight: +0.65</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Age Factor (Scaled):</span>
                    <span className="text-cyan-300 font-bold">Weight: +0.55</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Resting BP Factor:</span>
                    <span className="text-cyan-300 font-bold">Weight: +0.42</span>
                  </div>
                </div>
              </div>

              {/* Responsible Use Notice */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/30 text-xs space-y-1.5 text-slate-300 shadow-md">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Responsible AI / Ethical Scope:</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  Strictly educational and exploratory research model. Never claim automated diagnosis without physician consultation and medical board compliance.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: SQL Schema Explorer */}
        {activeTab === 'sql' && (
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 space-y-7 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/10 gap-3">
              <div className="flex items-center gap-2.5">
                <Database className="w-5 h-5 text-blue-400" />
                <span className="text-base font-mono font-bold text-slate-100">
                  Blood Bank MySQL 8.0 Schema Query Runner
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                Connected • InnoDB Engine • ACID Isolation
              </span>
            </div>

            {/* Preset Query Buttons */}
            <div className="flex flex-wrap gap-2.5">
              {sqlQueries.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSqlIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all border cursor-pointer ${
                    selectedSqlIndex === idx
                      ? 'bg-blue-950/70 border-blue-400 text-blue-200 shadow-md shadow-blue-500/20'
                      : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Query Preview Terminal */}
            <div className="p-5 rounded-2xl bg-black/80 border border-white/10 font-mono text-sm space-y-2.5 shadow-inner">
              <div className="flex items-center justify-between text-slate-400 text-xs font-bold">
                <span>SQL QUERY (PREPARED STATEMENT COMPATIBLE)</span>
                <span className="text-cyan-400">Execution time: ~8ms</span>
              </div>
              <pre className="text-cyan-300 whitespace-pre-wrap leading-relaxed text-xs sm:text-sm">
                {sqlQueries[selectedSqlIndex].query}
              </pre>
            </div>

            {/* Results Table (Larger font) */}
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/70 shadow-md">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-white/10 text-slate-200 uppercase text-xs border-b border-white/10 font-bold">
                  <tr>
                    {sqlQueries[selectedSqlIndex].headers.map((h, i) => (
                      <th key={i} className="px-5 py-3.5">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200">
                  {sqlQueries[selectedSqlIndex].rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/[0.04] transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-5 py-3 text-slate-200 font-medium">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-xs sm:text-sm text-slate-400 font-mono">
              Schema enforces 3NF normalization, foreign key constraints (CASCADE / RESTRICT), and prepared parameter binding.
            </div>
          </div>
        )}

        {/* Tab 3: Agentic Dispatch Runner (FoodWise-AI) */}
        {activeTab === 'agent' && (
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 space-y-7 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/10 gap-4">
              <div>
                <span className="text-base font-mono font-bold text-violet-300 uppercase">
                  FoodWise-AI Autonomous Agent Workflow (Prototype)
                </span>
                <p className="text-sm text-slate-300 mt-1">
                  Simulating multi-step ReAct pattern: Kitchen sensor -&gt; Surplus detection -&gt; Radius match -&gt; Human confirmation.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={runAgentSimulation}
                  disabled={agentRunning}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 hover:from-violet-300 hover:to-cyan-300 disabled:opacity-50 transition-all shadow-lg shadow-violet-500/20 cursor-pointer"
                >
                  <Play className="w-4 h-4" />
                  <span>{agentRunning ? 'Agent Running...' : 'Run Surplus Agent'}</span>
                </button>
                <button
                  onClick={resetAgent}
                  className="p-3 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-white/15 cursor-pointer"
                  title="Reset simulation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stepper Timeline (Larger Text) */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div
                className={`p-5 rounded-2xl border transition-all ${
                  agentStep >= 1
                    ? 'bg-slate-900/80 border-violet-500/50 text-slate-200'
                    : 'bg-black/30 border-white/5 text-slate-500 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-sm font-bold text-violet-300">
                    STEP 01: SENSOR &amp; INVENTORY TELEMETRY
                  </div>
                  {agentStep >= 1 && <span className="text-emerald-400 text-xs font-bold font-mono">✓ Completed</span>}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-mono">
                  &gt; Ingesting institutional dining hall logs: 42.5 kg perishable prepared meals remaining at 20:30 hrs.
                </p>
              </div>

              {/* Step 2 */}
              <div
                className={`p-5 rounded-2xl border transition-all ${
                  agentStep >= 2
                    ? 'bg-slate-900/80 border-cyan-500/50 text-slate-200'
                    : 'bg-black/30 border-white/5 text-slate-500 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-sm font-bold text-cyan-300">
                    STEP 02: DEMAND PREDICTION VS SURPLUS THRESHOLD
                  </div>
                  {agentStep >= 2 && <span className="text-emerald-400 text-xs font-bold font-mono">✓ Completed</span>}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-mono">
                  &gt; Projected consumption: 12.0 kg. Net surplus: 30.5 kg (&gt;15% trigger condition met). Autonomous dispatch protocol engaged.
                </p>
              </div>

              {/* Step 3 */}
              <div
                className={`p-5 rounded-2xl border transition-all ${
                  agentStep >= 3
                    ? 'bg-slate-900/80 border-amber-500/50 text-slate-200'
                    : 'bg-black/30 border-white/5 text-slate-500 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-sm font-bold text-amber-300">
                    STEP 03: GEOLOCATION TOOL QUERY &amp; NGO MATCH
                  </div>
                  {agentStep >= 3 && <span className="text-emerald-400 text-xs font-bold font-mono">✓ Completed</span>}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-mono">
                  &gt; Querying Haversine geo-index within 5.0 km radius. Matched Partner: "Annapurna Food Bank" (3.2 km away, capacity: 50 kg).
                </p>
              </div>

              {/* Step 4: Human-in-the-Loop Safeguard */}
              <div
                className={`p-5 rounded-2xl border transition-all ${
                  agentStep >= 4
                    ? 'bg-violet-950/40 border-violet-400 text-slate-200 shadow-xl shadow-violet-500/10'
                    : 'bg-black/30 border-white/5 text-slate-500 opacity-60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-sm font-bold text-emerald-300">
                      STEP 04: HUMAN-IN-THE-LOOP APPROVAL CHECKPOINT
                    </div>
                    <p className="text-sm text-slate-200 mt-1 font-medium">
                      Action proposed: Dispatch driver notification for 30.5 kg to Annapurna Food Bank.
                    </p>
                  </div>

                  {agentStep === 4 && !managerApproved && (
                    <button
                      onClick={approveDispatch}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20 cursor-pointer"
                    >
                      <Check className="w-5 h-5" />
                      <span>Authorize Dispatch</span>
                    </button>
                  )}

                  {managerApproved && (
                    <span className="text-sm font-mono text-emerald-400 flex items-center gap-1.5 font-bold">
                      <CheckCircle2 className="w-5 h-5" /> Authorized by Kitchen Supervisor
                    </span>
                  )}
                </div>
              </div>

              {/* Step 5 */}
              {agentStep >= 5 && (
                <div className="p-5 rounded-2xl bg-emerald-950/50 border border-emerald-400 text-emerald-200 font-mono text-sm space-y-1.5 animate-in fade-in duration-300 shadow-lg shadow-emerald-900/30">
                  <div className="font-bold flex items-center gap-2 text-emerald-300 text-base">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>DISPATCH SUCCESSFUL (DISPATCH TOKEN #FW-9921)</span>
                  </div>
                  <p className="text-slate-200">
                    Volunteer team notified via automated webhook. Transit ETA: 18 mins. Food waste diverted: 30.5 kg.
                  </p>
                </div>
              )}
            </div>

            <div className="text-xs sm:text-sm text-slate-400 font-mono">
              Demonstrates why autonomous agents in physical domains require explicit human-in-the-loop checkpoints and defensive fallback policies.
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
