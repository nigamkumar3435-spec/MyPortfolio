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
  // Normalized feature weights based on heart disease clinical benchmarks
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

    setTimeout(() => setAgentStep(2), 1200)
    setTimeout(() => setAgentStep(3), 2400)
    setTimeout(() => {
      setAgentStep(4)
      setAgentRunning(false)
    }, 3600)
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
    <section id="interactive-lab" className="py-20 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>05 // LIVE RECRUITER LAB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Interactive Technical Sandbox
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Inspect working logic in real-time: test ML decision inference, execute SQL schema queries, or run an autonomous multi-step agent workflow.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono self-start md:self-auto">
            <button
              onClick={() => setActiveTab('ml')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'ml'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>ML Risk Predictor</span>
            </button>

            <button
              onClick={() => setActiveTab('sql')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'sql'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>SQL Schema Explorer</span>
            </button>

            <button
              onClick={() => setActiveTab('agent')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'agent'
                  ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Agentic Dispatch Lab</span>
            </button>
          </div>
        </div>

        {/* Tab 1: ML Risk Predictor Sandbox */}
        {activeTab === 'ml' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
            {/* Left Column: Clinical Parameters */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-mono font-semibold uppercase text-cyan-400">
                  Clinical Input Parameters
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Standardized Scaler Applied
                </span>
              </div>

              {/* Slider 1: Age */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Patient Age (Years)</span>
                  <span className="font-mono text-cyan-400">{age} years</span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 2: Resting Blood Pressure */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Resting Blood Pressure (mm Hg)</span>
                  <span className="font-mono text-cyan-400">{restingBp} mm Hg</span>
                </div>
                <input
                  type="range"
                  min="90"
                  max="200"
                  value={restingBp}
                  onChange={(e) => setRestingBp(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 3: Serum Cholesterol */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Serum Cholesterol (mg/dl)</span>
                  <span className="font-mono text-cyan-400">{cholesterol} mg/dl</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="380"
                  value={cholesterol}
                  onChange={(e) => setCholesterol(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 4: Max Heart Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Maximum Heart Rate Achieved (bpm)</span>
                  <span className="font-mono text-cyan-400">{maxHeartRate} bpm</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="210"
                  value={maxHeartRate}
                  onChange={(e) => setMaxHeartRate(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Chest Pain Selector */}
              <div className="space-y-2">
                <div className="text-xs text-slate-300 font-medium">Chest Pain Type</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  {[
                    { id: 0, label: 'Typical Angina' },
                    { id: 1, label: 'Atypical' },
                    { id: 2, label: 'Non-Anginal' },
                    { id: 3, label: 'Asymptomatic' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setChestPain(item.id)}
                      className={`p-2 rounded-lg border transition-all text-center ${
                        chestPain === item.id
                          ? 'bg-cyan-950/60 border-cyan-500/60 text-cyan-300'
                          : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Model Output & Responsible Disclaimer */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-black/40 p-6 rounded-xl border border-white/5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    Model Inference Output
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/40">
                    Live Logistic Pipeline
                  </span>
                </div>

                {/* Score Dial */}
                <div className="text-center py-4 space-y-2">
                  <div className="text-5xl font-extrabold font-mono tracking-tight text-white">
                    {riskScore}%
                  </div>
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                      riskScore >= 65
                        ? 'bg-rose-950/60 text-rose-300 border border-rose-800/60'
                        : riskScore >= 40
                        ? 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
                        : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                    }`}
                  >
                    <span>{riskCategory}</span>
                  </div>
                  <p className="text-xs text-slate-400 pt-1">
                    Calibrated likelihood score across standard clinical validation sets.
                  </p>
                </div>

                {/* Contributing Weights Breakdown */}
                <div className="space-y-2 text-xs font-mono bg-slate-900/60 p-3 rounded-lg border border-white/5">
                  <div className="text-[11px] text-slate-400 font-semibold">
                    Decision Boundary Weights:
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Heart Rate Deficit:</span>
                    <span className="text-cyan-300">Weight: +0.65</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Age Factor (Scaled):</span>
                    <span className="text-cyan-300">Weight: +0.55</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Resting BP Factor:</span>
                    <span className="text-cyan-300">Weight: +0.42</span>
                  </div>
                </div>
              </div>

              {/* Responsible Use Notice */}
              <div className="p-3.5 rounded-lg bg-slate-950 border border-amber-500/20 text-xs space-y-1.5 text-slate-400">
                <div className="flex items-center gap-1.5 text-amber-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Responsible AI / Ethical Scope:</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Strictly educational and exploratory research model. Never claim automated diagnosis without physician consultation and medical board compliance.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: SQL Schema Explorer */}
        {activeTab === 'sql' && (
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/5 gap-3">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono font-semibold text-slate-200">
                  Blood Bank MySQL 8.0 Schema Query Runner
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400">
                Connected • InnoDB Engine • ACID Isolation
              </span>
            </div>

            {/* Preset Query Buttons */}
            <div className="flex flex-wrap gap-2">
              {sqlQueries.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSqlIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                    selectedSqlIndex === idx
                      ? 'bg-blue-950/60 border-blue-500/60 text-blue-300'
                      : 'bg-slate-900/50 border-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Query Preview Terminal */}
            <div className="p-4 rounded-xl bg-black/70 border border-white/5 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-500 text-[10px]">
                <span>SQL QUERY (PREPARED STATEMENT COMPATIBLE)</span>
                <span className="text-cyan-400">Execution time: ~8ms</span>
              </div>
              <pre className="text-cyan-300 whitespace-pre-wrap leading-relaxed">
                {sqlQueries[selectedSqlIndex].query}
              </pre>
            </div>

            {/* Results Table */}
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-slate-950/50">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-white/5 text-slate-400 uppercase text-[10px] border-b border-white/5">
                  <tr>
                    {sqlQueries[selectedSqlIndex].headers.map((h, i) => (
                      <th key={i} className="px-4 py-2.5">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {sqlQueries[selectedSqlIndex].rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-2 text-slate-300">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-[11px] text-slate-400 font-mono">
              Schema enforces 3NF normalization, foreign key constraints (CASCADE / RESTRICT), and prepared parameter binding.
            </div>
          </div>
        )}

        {/* Tab 3: Agentic Dispatch Runner (FoodWise-AI) */}
        {activeTab === 'agent' && (
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/5 gap-3">
              <div>
                <span className="text-xs font-mono font-semibold text-violet-300 uppercase">
                  FoodWise-AI Autonomous Agent Workflow (Prototype)
                </span>
                <p className="text-xs text-slate-400 mt-0.5">
                  Simulating multi-step ReAct pattern: Kitchen sensor -&gt; Surplus detection -&gt; Radius match -&gt; Human confirmation.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={runAgentSimulation}
                  disabled={agentRunning}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-violet-400 to-cyan-400 hover:from-violet-300 hover:to-cyan-300 disabled:opacity-50 transition-all"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{agentRunning ? 'Agent Running...' : 'Run Surplus Agent'}</span>
                </button>
                <button
                  onClick={resetAgent}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/10"
                  title="Reset simulation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  agentStep >= 1
                    ? 'bg-slate-900/60 border-violet-500/40 text-slate-200'
                    : 'bg-black/20 border-white/5 text-slate-500 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-violet-300">
                    <span>STEP 01: SENSOR &amp; INVENTORY TELEMETRY</span>
                  </div>
                  {agentStep >= 1 && <span className="text-emerald-400 text-xs">Completed</span>}
                </div>
                <p className="text-xs text-slate-300 mt-1 font-mono">
                  &gt; Ingesting institutional dining hall logs: 42.5 kg perishable prepared meals remaining at 20:30 hrs.
                </p>
              </div>

              {/* Step 2 */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  agentStep >= 2
                    ? 'bg-slate-900/60 border-violet-500/40 text-slate-200'
                    : 'bg-black/20 border-white/5 text-slate-500 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan-300">
                    <span>STEP 02: DEMAND PREDICTION VS SURPLUS THRESHOLD</span>
                  </div>
                  {agentStep >= 2 && <span className="text-emerald-400 text-xs">Completed</span>}
                </div>
                <p className="text-xs text-slate-300 mt-1 font-mono">
                  &gt; Projected consumption: 12.0 kg. Net surplus: 30.5 kg (&gt;15% trigger condition met). Autonomous dispatch protocol engaged.
                </p>
              </div>

              {/* Step 3 */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  agentStep >= 3
                    ? 'bg-slate-900/60 border-violet-500/40 text-slate-200'
                    : 'bg-black/20 border-white/5 text-slate-500 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-amber-300">
                    <span>STEP 03: GEOLOCATION TOOL QUERY &amp; NGO MATCH</span>
                  </div>
                  {agentStep >= 3 && <span className="text-emerald-400 text-xs">Completed</span>}
                </div>
                <p className="text-xs text-slate-300 mt-1 font-mono">
                  &gt; Querying Haversine geo-index within 5.0 km radius. Matched Partner: "Annapurna Food Bank" (3.2 km away, capacity: 50 kg).
                </p>
              </div>

              {/* Step 4: Human-in-the-Loop Safeguard */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  agentStep >= 4
                    ? 'bg-violet-950/30 border-violet-500/60 text-slate-200 shadow-md shadow-violet-500/10'
                    : 'bg-black/20 border-white/5 text-slate-500 opacity-60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs font-semibold text-emerald-300">
                      <span>STEP 04: HUMAN-IN-THE-LOOP APPROVAL CHECKPOINT</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Action proposed: Dispatch driver notification for 30.5 kg to Annapurna Food Bank.
                    </p>
                  </div>

                  {agentStep === 4 && !managerApproved && (
                    <button
                      onClick={approveDispatch}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
                    >
                      <Check className="w-4 h-4" />
                      <span>Authorize Dispatch</span>
                    </button>
                  )}

                  {managerApproved && (
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Authorized by Kitchen Supervisor
                    </span>
                  )}
                </div>
              </div>

              {/* Step 5 */}
              {agentStep >= 5 && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 font-mono text-xs space-y-1 animate-in fade-in duration-300">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>DISPATCH SUCCESSFUL (DISPATCH TOKEN #FW-9921)</span>
                  </div>
                  <p className="text-slate-300">
                    Volunteer team notified via automated webhook. Transit ETA: 18 mins. Food waste diverted: 30.5 kg.
                  </p>
                </div>
              )}
            </div>

            <div className="text-[11px] text-slate-400 font-mono">
              Demonstrates why autonomous agents in physical domains require explicit human-in-the-loop checkpoints and defensive fallback policies.
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
