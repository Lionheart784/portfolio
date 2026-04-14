"use client";

import { ArrowDown, Mail, Code2, Globe } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="section-container text-center">
        {/* Positioning Statement */}
        <p className="text-blue-600 font-semibold text-lg mb-4 tracking-wide">
          Open to Opportunities
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          AI Agent / LLM / Blockchain / Data Science
        </h1>

        {/* Key Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="tag">Python</span>
          <span className="tag">Solidity</span>
          <span className="tag">RAG</span>
          <span className="tag">LLM</span>
          <span className="tag">Machine Learning</span>
          <span className="tag">Blockchain</span>
          <span className="tag">Knowledge Graph</span>
          <span className="tag">Data Science</span>
        </div>

        {/* Brief Intro */}
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          MRes Advanced Data Science @ Lingnan University. Focused on AI Agents, LLM applications, blockchain technology, and knowledge graph research. Experienced in Python, Solidity, and full-stack development. Passionate about building intelligent systems and decentralized applications.
        </p>

        {/* Contact Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="mailto:chengedejing@outlook.com"
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <Mail size={18} />
            Email
          </a>
          <a
            href="https://github.com/Lionheart784"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Code2 size={18} />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Globe size={18} />
            LinkedIn
          </a>
        </div>

        {/* Scroll Down */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-slate-400 hover:text-slate-600 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}
