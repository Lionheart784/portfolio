"use client";

import { ExternalLink, Calendar, Users, Target, Database, Lightbulb, BarChart3, CheckCircle } from "lucide-react";

interface Project {
  title: string;
  time: string;
  type: string;
  problem: string;
  data: string;
  method: string;
  outcome: string;
  contribution: string;
  tech: string[];
  githubUrl: string;
  isTeamProject: boolean;
  role?: string;
}

const projects: Project[] = [
  {
    title: "Dungeon Hunter's Notebook",
    time: "2024 - Personal Project",
    type: "AI / Knowledge Graph / RL",
    problem: "Exploration efficiency in Knowledge Graph Completion (KGC) under reinforcement learning scenarios—how can an agent efficiently learn and fill structured knowledge (monster weaknesses/resistances/loot) through active exploration in an incomplete combat environment, while avoiding excessive trial-and-error resource consumption?",
    data: "Self-built game environment with procedural generation. Contains 8 monster types, 4 elemental families (Fire/Ice/Rock/Dark), totaling 28 hidden knowledge entries; family members share weaknesses and resistances, with knowledge structure possessing inferential properties.",
    method: "DQN (Deep Q-Network) reinforcement learning framework. Key innovations: ① Encoding KG completion progress as network state input, enabling the agent to perceive 'known/unknown' distributions and actively plan exploration behavior; ② Introducing family inference mechanism, leveraging kinship relations for cross-entity knowledge transfer. Designed 4 ablation conditions (Full/NoFamily/NoNotebook/Random) to validate marginal contributions of each module.",
    outcome: "Full System achieved 96.1% knowledge graph completion rate and 60.5% perfect clear rate (completing full KG within 3 lives). Ablation experiments revealed critical insight: removing Notebook state representation resulted in zero perfect clear rate, proving state design is the core bottleneck of the entire system—providing design references for subsequent KGC reinforcement learning research.",
    contribution: "Independently completed all design and implementation: game environment construction, DQN network with Replay Buffer, knowledge graph module, ablation experiment framework, and Pygame visualization interface.",
    tech: ["Python", "PyTorch", "DQN", "Knowledge Graph", "Pygame"],
    githubUrl: "https://github.com/Lionheart784/Dungeon-Hunter-s-Notebook",
    isTeamProject: false,
  },
  {
    title: "ChainMonitor",
    time: "2024 - Team Project",
    type: "Blockchain / DeFi / Risk Monitoring",
    problem: "DeFi markets lack automated on-chain risk perception mechanisms—risk signals like price volatility and liquidity contraction are scattered across raw on-chain data. Existing tools cannot quantify these in real-time and persistently record them in a decentralized, trustless manner, making it difficult for investors and protocols to respond promptly.",
    data: "Real-time on-chain Swap events from Uniswap V2 USDC/WETH liquidity pool, fetched via Infura node (Ethereum Mainnet RPC); contract deployed on Sepolia testnet with optional The Graph API integration for extended historical data queries.",
    method: "Three-layer architecture: ① Data collection layer (Python monitor.py continuously subscribes to on-chain Swap records); ② Risk calculation layer (rule-based engine mapping market indicators to 0-3 risk levels); ③ Contract writing layer (calling updateRisk in Solidity RiskMonitor.sol when level changes to persist state on-chain). Contracts managed via Hardhat compilation and deployment scripts, with frontend displaying real-time risk status and historical trends.",
    outcome: "Achieved full-chain automation闭环 from on-chain data collection, risk quantification scoring to contract state recording; risk status can be subscribed and called by any on-chain contract or DApp, combining real-time responsiveness with decentralized trustworthiness.",
    contribution: "Responsible for data ingestion module (Infura node configuration, Swap event parsing and cleaning), risk scoring logic design (scoring rules and level mapping), and frontend website development with interaction design.",
    tech: ["Python", "Solidity", "Web3.py", "Hardhat", "Infura"],
    githubUrl: "https://github.com/Lionheart784/ChainMonitor",
    isTeamProject: true,
    role: "Data Ingestion, Scoring Design, Frontend",
  },
  {
    title: "Database for Blockchain Project",
    time: "2024 - Team Project (Lead)",
    type: "Blockchain / Database / Performance Testing",
    problem: "Cryptocurrency token analysis systems must simultaneously satisfy three conflicting requirements in real business scenarios: low-latency point queries (P95 < 50ms), complex aggregation analysis, and high-concurrency writes (1,000+ tokens/minute). SQL and NoSQL each have trade-offs; this project aims to provide data-driven evidence for technology selection through controlled experiments.",
    data: "Synthetic data generator (data_generator.py) simulating real DEX/CEX API responses, covering 1,000+ tokens, time-series price data exceeding 1M records/month, position snapshots ~100K records/day, alert events ~1,000/day, totaling 7 core entity types.",
    method: "Dual-track parallel comparison experiment—SQL approach (PostgreSQL 14+): 7 normalized tables, time-series tables partitioned by month, B-tree + composite indexes, ACID transaction guarantees; NoSQL approach (MongoDB + Redis): embedded document structure + pre-computed fields + Redis hot cache (TTL=5min). Self-developed benchmark.py performance testing framework, collecting QPS, latency distribution, and storage costs across 5 typical business query scenarios (point query/range/aggregation/multi-table JOIN/batch write).",
    outcome: "Experiments clearly defined the applicable boundaries of both approaches: single-token point queries favor NoSQL (Redis) for lowest latency, multi-table JOIN and aggregation queries favor SQL, batch writes favor NoSQL for higher throughput. Conclusions support 'hybrid architecture' selection. Project delivered complete 10-12 page academic experimental report citing 3+ peer-reviewed papers.",
    contribution: "As team lead, directed overall project planning and division of three sub-teams (SQL implementation, NoSQL implementation, experimental report), responsible for full-cycle progress management and milestone control, final code review and quality assurance, and led performance testing experiment execution and data analysis.",
    tech: ["PostgreSQL", "MongoDB", "Redis", "Python", "Performance Testing"],
    githubUrl: "https://github.com/Lionheart784/database-for-blockchain-project",
    isTeamProject: true,
    role: "Team Lead (Planning, Management, Code Review, Testing)",
  },
  {
    title: "Machine Learning Projects",
    time: "2023-2024 - Team Project",
    type: "Recommendation System / Cold Start / LLM",
    problem: "Steam platform has massive game library (tens of thousands), with sparse user behavior and significant cold-start problems—how to balance recall efficiency with personalization precision while maintaining recommendation quality in new user/item scenarios is the core challenge.",
    data: "Kaggle Steam Game Recommendations dataset (games.csv / users.csv / recommendations.csv), time-series split into train/validation/test sets, strictly adhering to test set exclusion from hyperparameter tuning to ensure leak-free evaluation results.",
    method: "Two-stage recommendation pipeline—Retrieval stage: IDF-weighted ItemKNN (best single model) and truncated SVD in parallel, merged through candidate set complementarity analysis (svd_knn_overlap.py) to expand recall coverage; Ranking stage: User Understanding Agent (UUA) builds user preference profiles, LLM Ranker Agent (GPT-4o, temperature=0.0) for precise ranking of candidates; separate cold-start branch (cold_start.py); ablation_fair.py framework quantifies marginal contributions of each component.",
    outcome: "IDF-weighted ItemKNN emerged as strongest single retrieval model; complete two-stage pipeline outperformed all single-model baselines on validation set; ablation experiments clearly validated independent gains from UUA and LLM Ranker on final recommendation quality, providing empirical references for LLM-augmented recommendation system design.",
    contribution: "Responsible for entire method layer implementation: IDF-weighted ItemKNN, truncated SVD, KNN+SVD complementarity analysis, complete two-stage pipeline (pipeline.py), and fair ablation experiment framework (ablation_fair.py) designed and coded from scratch.",
    tech: ["Python", "scikit-learn", "Pandas", "LLM", "Recommendation System"],
    githubUrl: "https://github.com/Lionheart784/Machine-Learning",
    isTeamProject: true,
    role: "Method Layer (Retrieval + Ranking + Ablation)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Project Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {project.title}
                    </h3>
                    {project.isTeamProject && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                        <Users size={12} />
                        Team Project
                      </span>
                    )}
                    {!project.isTeamProject && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                        <CheckCircle size={12} />
                        Solo Project
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar size={14} />
                    <span>{project.time}</span>
                    <span className="mx-1">|</span>
                    <span className="text-blue-600 font-medium">{project.type}</span>
                  </div>
                  {project.role && (
                    <p className="text-sm text-purple-600 mt-1">
                      My Role: {project.role}
                    </p>
                  )}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Project Content - Structured Layout */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="text-red-500" size={18} />
                      <h4 className="font-semibold text-slate-900">Problem</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.problem}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="text-blue-500" size={18} />
                      <h4 className="font-semibold text-slate-900">Data</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.data}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="text-yellow-500" size={18} />
                      <h4 className="font-semibold text-slate-900">Method</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.method}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="text-green-500" size={18} />
                      <h4 className="font-semibold text-slate-900">Outcome & Impact</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.outcome}</p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="text-purple-500" size={18} />
                      <h4 className="font-semibold text-slate-900">My Contribution</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.contribution}</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-100">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Lionheart784"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
