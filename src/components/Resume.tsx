"use client";

import { Download, FileText, Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Le Wagon Shanghai",
    title: "Full-Stack Developer Trainee",
    period: "Oct 2023 - Dec 2023",
    location: "Shanghai",
    achievements: [
      "Completed intensive 9-week full-stack bootcamp, graduation project scored 8.5/10",
      "Mastered Ruby on Rails, JavaScript, SQL, HTML/CSS, WeChat Mini Program development",
      "Independently developed movie watchlist web application (Rails Watch List)",
      "Built Yelp MVP clone with business listings and review system",
    ],
  },
  {
    company: "Time Weekly (Guangdong Times Media Group)",
    title: "Tech Reporter",
    period: "Dec 2022 - Jul 2023",
    location: "Shenzhen",
    achievements: [
      "Focused on AI and securities coverage, built tech industry resource network",
      "Monitored fintech industry trends, produced multiple reports sparking industry discussion",
    ],
  },
  {
    company: "IT Times / Shanghai Telecom News",
    title: "Industry Reporter",
    period: "Jun 2021 - Dec 2022",
    location: "Shanghai",
    achievements: [
      "Tracked developments in e-commerce, smart manufacturing, VR/AR and AI sectors",
      'Won "Monthly Excellence Award" for 10 consecutive months',
    ],
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-slate-50">
      <div className="section-container">
        <h2 className="section-title">Resume</h2>

        {/* Download Section */}
        <div className="bg-blue-600 rounded-lg p-6 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Download Full Resume</h3>
                <p className="text-blue-100 text-sm">
                  PDF format with detailed work experience and projects
                </p>
              </div>
            </div>
            <a
              href="/CV.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>

        {/* Quick Resume Overview */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Summary */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-slate-900">
                    Lingnan University
                  </h4>
                  <span className="text-sm text-slate-500">2025.09 - Present</span>
                </div>
                <p className="text-slate-600">MRes in Advanced Data Science</p>
                <p className="text-sm text-slate-500">Hong Kong</p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-slate-900">
                    Le Wagon Shanghai
                  </h4>
                  <span className="text-sm text-slate-500">2023.10 - 2023.12</span>
                </div>
                <p className="text-slate-600">Full-Stack Bootcamp (8.5/10)</p>
                <p className="text-sm text-slate-500">Shanghai</p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-slate-900">
                    Shandong University of Technology
                  </h4>
                  <span className="text-sm text-slate-500">2015.08 - 2019.05</span>
                </div>
                <p className="text-slate-600">B.S. in Bioengineering</p>
                <p className="text-sm text-slate-500">Zibo, China</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Certifications & Languages
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-slate-700">Le Wagon Full-Stack Bootcamp (8.5/10)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-slate-700">Securities Qualification Certificate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-slate-700">Computer Level 2 Certificate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-slate-700">CET-6: 524</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-slate-700">IELTS: 7.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-200 flex items-center gap-2">
            <Briefcase size={20} className="text-blue-600" />
            Work Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={index > 0 ? "border-t border-slate-100 pt-8" : ""}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg">
                      {exp.company}
                    </h4>
                    <p className="text-slate-600">{exp.title}</p>
                  </div>
                  <div className="text-sm text-slate-500 text-right">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-slate-600 text-sm"
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
