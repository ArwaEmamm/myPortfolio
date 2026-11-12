import React from 'react';
import { Briefcase, Calendar, CheckCircle2, GraduationCap, MapPin } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';

const ACCENT_CLASSES = {
  indigo: {
    dot: 'bg-indigo-500 ring-indigo-500/20',
    badge: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/20',
    company: 'text-indigo-600 dark:text-indigo-400',
  },
  cyan: {
    dot: 'bg-cyan-500 ring-cyan-500/20',
    badge: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/20',
    company: 'text-cyan-600 dark:text-cyan-400',
  },
  emerald: {
    dot: 'bg-emerald-500 ring-emerald-500/20',
    badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20',
    company: 'text-emerald-600 dark:text-emerald-400',
  },
  violet: {
    dot: 'bg-violet-500 ring-violet-500/20',
    badge: 'bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/20',
    company: 'text-violet-600 dark:text-violet-400',
  },
  amber: {
    dot: 'bg-amber-500 ring-amber-500/20',
    badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/20',
    company: 'text-amber-600 dark:text-amber-400',
  },
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-mono font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
            02 // Experience & Background
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Hands-on experience delivering multi-school platforms, modular Laravel backends, CRM workflows, and full-stack web applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-8 mb-20">
          {EXPERIENCES.map((exp) => {
            const styles = ACCENT_CLASSES[exp.accent];
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot */}
                <span
                  className={`absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full ring-4 ${styles.dot} transition-transform group-hover:scale-125`}
                />

                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 transition-all shadow-sm hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1">
                        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles.badge}`}
                        >
                          {exp.current && (
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                          )}
                          {exp.type}
                        </span>
                      </div>
                      <p className={`text-base font-semibold flex items-center gap-1.5 ${styles.company}`}>
                        <Briefcase size={15} />
                        {exp.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 self-start">
                      <Calendar size={13} />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-indigo-500 dark:text-indigo-400"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.stack && exp.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Education Section */}
        <div id="education" className="scroll-mt-24">
          <div className="max-w-2xl mb-10">
            <span className="inline-block text-xs font-mono font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-3">
              03 // Academic & Training
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Education
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.institution}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-400/60 dark:hover:border-cyan-500/40 transition-all shadow-sm"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <GraduationCap size={22} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {edu.institution}
                </h3>
                <p className="text-base font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                  {edu.degree}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                  {edu.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  )}
                  {edu.highlight && (
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      {edu.highlight}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

