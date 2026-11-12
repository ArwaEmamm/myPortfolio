import React from 'react';
import { Layout, Server, Database, Layers, Terminal, Cloud } from 'lucide-react';
import { SKILL_CATEGORIES, SkillCategory } from '../data/portfolioData';

const ICONS: Record<SkillCategory['iconName'], React.ReactNode> = {
  layout: <Layout size={20} />,
  server: <Server size={20} />,
  database: <Database size={20} />,
  layers: <Layers size={20} />,
  terminal: <Terminal size={20} />,
  cloud: <Cloud size={20} />,
};

const ICON_COLORS: Record<SkillCategory['iconName'], string> = {
  layout: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
  server: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
  database: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  layers: 'bg-violet-500/10 text-violet-500 border-violet-500/20',
  terminal: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  cloud: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 lg:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-mono font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
            04 // Technical Stack
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Skills &amp; Architecture
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Core technologies, frameworks, architectural patterns, and deployment tools I use to ship production web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 transition-all shadow-sm hover:shadow-md flex flex-col"
            >
              <div className="flex items-start gap-3.5 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${ICON_COLORS[category.iconName]}`}
                >
                  {ICONS[category.iconName]}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/70 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

