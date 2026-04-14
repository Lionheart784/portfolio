"use client";

import {
  Code2,
  BarChart3,
  Brain,
  Layers,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Core Skills",
    icon: <Code2 className="text-blue-600" size={24} />,
    skills: [
      { name: "Python", level: "Proficient", desc: "Data processing, ML, backend development" },
      { name: "Solidity", level: "Good", desc: "Smart contract development, DApp building" },
      { name: "RAG", level: "Good", desc: "Retrieval-Augmented Generation, KG integration" },
      { name: "LLM", level: "Good", desc: "Large Language Models, Agent dev, prompt engineering" },
      { name: "SQL", level: "Proficient", desc: "Data querying, database design" },
    ],
  },
  {
    title: "AI & Data Science",
    icon: <Brain className="text-purple-600" size={24} />,
    skills: [
      { name: "Machine Learning", level: "Proficient", desc: "Supervised/Unsupervised learning, model tuning" },
      { name: "Knowledge Graph", level: "Good", desc: "Graph DB, entity extraction, completion" },
      { name: "Reinforcement Learning", level: "Good", desc: "Deep Q-Learning, policy optimization" },
      { name: "Deep Learning", level: "Good", desc: "Neural networks, PyTorch framework" },
      { name: "Data Mining", level: "Good", desc: "Pattern recognition, feature engineering" },
    ],
  },
  {
    title: "Blockchain & Web3",
    icon: <Layers className="text-orange-600" size={24} />,
    skills: [
      { name: "Smart Contracts", level: "Good", desc: "Solidity development, contract security" },
      { name: "On-chain Analytics", level: "Good", desc: "Chain data querying, monitoring tools" },
      { name: "Web3.js/Ethers.js", level: "Basic", desc: "Smart contract interaction" },
      { name: "DeFi Protocols", level: "Basic", desc: "Decentralized finance applications" },
    ],
  },
  {
    title: "Dev & Tools",
    icon: <Wrench className="text-green-600" size={24} />,
    skills: [
      { name: "Git/GitHub", level: "Proficient", desc: "Version control, collaborative development" },
      { name: "Ruby on Rails", level: "Good", desc: "Full-stack web application development" },
      { name: "JavaScript/HTML/CSS", level: "Good", desc: "Frontend development" },
      { name: "pandas / numpy", level: "Proficient", desc: "Data processing & analysis" },
      { name: "scikit-learn", level: "Good", desc: "Machine learning library" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-slate-200 p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-slate-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-start justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-900">
                          {skill.name}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded ${
                            skill.level === "Proficient"
                              ? "bg-green-100 text-green-700"
                              : skill.level === "Good"
                              ? "bg-blue-100 text-blue-700"
                              : skill.level === "Learning"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-0.5">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="text-blue-600" size={24} />
            <h3 className="text-xl font-semibold text-slate-900">
              Certifications
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Le Wagon Full-Stack Bootcamp (8.5/10)",
              "Securities Qualification Certificate",
              "Computer Level 2 Certificate",
              "CET-6 (524)",
              "IELTS (7.0)",
            ].map((cert, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
