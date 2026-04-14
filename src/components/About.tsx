"use client";

import { GraduationCap, MapPin, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Self Introduction */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Introduction
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              I&apos;m Pengzhi CUI, a developer focused on AI Agents, LLM applications, and blockchain technology. From a background in Bioengineering to Fintech journalism, then to full-stack development and data science, I consistently explore the intersection of cutting-edge technology and practical applications.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              After completing the full-stack development bootcamp at Le Wagon, I delved deep into Python, Solidity, and machine learning. I&apos;ve built multiple technical projects on GitHub covering knowledge graph completion, blockchain monitoring tools, and smart contract development. Currently pursuing MRes in Advanced Data Science at Lingnan University, focusing on RAG, LLM applications, and reinforcement learning research.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I&apos;m passionate about building intelligent systems and decentralized applications, eager to combine AI Agents, blockchain, and data analytics capabilities to create value in technology innovation.
            </p>
          </div>

          {/* Education & Info */}
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-blue-600" size={24} />
                <h3 className="text-lg font-semibold text-slate-900">
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <h4 className="font-semibold text-slate-900">
                    Lingnan University
                  </h4>
                  <p className="text-slate-600">
                    MRes in Advanced Data Science
                  </p>
                  <p className="text-sm text-slate-500">
                    Sep 2025 - Present | Hong Kong
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    Research: AI & Games, RL, LLM, Narrative Generation, Knowledge Graph
                  </p>
                  <p className="text-sm text-slate-600">
                    Courses: Database, Data Mining, DL Applications, Business ML, Blockchain
                  </p>
                </div>

                <div className="border-l-2 border-slate-300 pl-4">
                  <h4 className="font-semibold text-slate-900">
                    Shandong University of Technology
                  </h4>
                  <p className="text-slate-600">B.S. in Bioengineering</p>
                  <p className="text-sm text-slate-500">
                    Aug 2015 - May 2019 | Zibo, China
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-blue-600" size={24} />
                <h3 className="text-lg font-semibold text-slate-900">Location</h3>
              </div>
              <p className="text-slate-600">Hong Kong / Shenzhen</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-blue-600" size={24} />
                <h3 className="text-lg font-semibold text-slate-900">
                  Strengths
                </h3>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    <strong>Interdisciplinary Background:</strong> Unique combination of Bioengineering + Data Science + Fintech Media
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    <strong>Business Acumen:</strong> 2+ years in fintech media, deep understanding of industry needs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    <strong>Content Creation:</strong> Published 100+ tech & finance articles, skilled in data storytelling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    <strong>Languages:</strong> CET-6 (524), IELTS (7.0), bilingual in English and Chinese
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
