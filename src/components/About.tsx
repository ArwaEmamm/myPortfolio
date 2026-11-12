import React from 'react';
import { Code2, Shield, Workflow, Globe, Languages, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const PILLARS = [
  {
    icon: ServerIcon,
    title: 'Backend & RESTful APIs',
    desc: 'Designing modular Laravel, Node.js, and Django services with clean database schemas and query optimization.',
    color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon: Shield,
    title: 'Multi-Role & RBAC Systems',
    desc: 'Implementing granular authentication, authorization, and role-based dashboards for schools, SaaS & rentals.',
    color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: Code2,
    title: 'Responsive Frontend UI',
    desc: 'Building interactive, reusable component interfaces using React, Angular, Vue.js, and TypeScript.',
    color: 'text-violet-500 bg-violet-500/10 border-violet-500/20',
  },
  {
    icon: Workflow,
    title: 'Workflow & CRM Automation',
    desc: 'Automating approvals, notifications, academic structures, and CRM operations for real-world businesses.',
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
  },
];

function ServerIcon({ size, className }: { size?: number; className?: string }) {
  return <Globe size={size} className={className} />;
}

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 lg:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-xs font-mono font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
            01 // About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Engineering reliable systems from database schema to user interface.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {PROFILE.summary}
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400/60 dark:hover:border-indigo-500/50 transition-all shadow-sm hover:shadow-md"
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${pillar.color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Soft Skills & Languages Row */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2.5 mb-4">
              <Sparkles size={18} className="text-indigo-500" />
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Soft Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {PROFILE.softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2.5 mb-4">
              <Languages size={18} className="text-cyan-500" />
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Languages
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {PROFILE.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800"
                >
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {lang.name}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-300">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

