import React, { useState, useEffect } from 'react';
import {
  Github,
  ExternalLink,
  PlayCircle,
  BookOpen,
  Building2,
  GraduationCap,
  QrCode,
  Workflow,
  Stethoscope,
  Briefcase,
  Coffee,
  Gamepad2,
  Sparkles,
  Users,
  X,
  ChevronLeft,
  ChevronRight,
  Check,
} from 'lucide-react';
import Carousel from '../Carousel';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolioData';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Backend & Laravel',
  'Full-Stack',
  'Frontend & Mobile',
];

const PROJECT_ICONS: Record<NonNullable<ProjectItem['iconName']>, React.ReactNode> = {
  school: <GraduationCap size={34} className="text-indigo-400" />,
  courses: <BookOpen size={34} className="text-cyan-400" />,
  realestate: <Building2 size={34} className="text-violet-400" />,
  workflow: <Workflow size={34} className="text-indigo-400" />,
  iti: <Users size={34} className="text-emerald-400" />,
  attendance: <QrCode size={34} className="text-emerald-400" />,
  kindergarten: <Sparkles size={34} className="text-amber-400" />,
  medical: <Stethoscope size={34} className="text-rose-400" />,
  jobs: <Briefcase size={34} className="text-blue-400" />,
  cafeteria: <Coffee size={34} className="text-amber-400" />,
  games: <Gamepad2 size={34} className="text-purple-400" />,
  amazepms: <ExternalLink size={34} className="text-indigo-400" />,
};

interface LightboxState {
  images: string[];
  index: number;
  title: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') {
        setLightbox((prev) =>
          prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                index: (prev.index - 1 + prev.images.length) % prev.images.length,
              }
            : null
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  return (
    <section id="projects" className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-mono font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
              05 // Portfolio Showcase
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Key Projects &amp; Systems
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              A selection of multi-role Laravel platforms, workflow automation systems, graduation projects, and interactive web applications.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const count =
                category === 'All'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === category).length;
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    active
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                      active
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-400/60 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              {/* Visual Header: Screenshot Carousel OR Architecture Blueprint */}
              {project.images.length > 0 ? (
                <Carousel
                  images={project.images}
                  title={project.title}
                  onExpand={(_, idx) =>
                    setLightbox({
                      images: project.images,
                      index: idx,
                      title: project.title,
                    })
                  }
                />
              ) : (
                <div className="relative h-52 p-5 flex flex-col justify-between bg-slate-950 bg-grid-pattern border-b border-slate-800 overflow-hidden">
                  <div className="pointer-events-none absolute -right-10 -top-10 w-36 h-36 rounded-full bg-indigo-500/20 blur-2xl" />
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shadow-inner">
                      {project.iconName && PROJECT_ICONS[project.iconName]}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900/90 text-slate-300 border border-slate-700/80">
                      System Architecture
                    </span>
                  </div>

                  {project.architectureModules && (
                    <div className="flex flex-wrap gap-1.5 relative z-10">
                      {project.architectureModules.map((mod) => (
                        <span
                          key={mod}
                          className="px-2 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-indigo-300 border border-indigo-500/25"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Category & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                    {project.subtitle}
                  </p>
                )}

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Highlights */}
                {project.highlights.length > 0 && (
                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.slice(0, 3).map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                      >
                        <Check size={13} className="mt-0.5 shrink-0 text-cyan-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack + Action Links pushed to bottom */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.codeLinks.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.codeLinks.map((link) => {
                        const isLive = link.type === 'live';
                        const isVideo = link.type === 'video';
                        return (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                              isLive
                                ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm'
                                : isVideo
                                  ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25 hover:bg-cyan-500/20'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            {isLive ? (
                              <ExternalLink size={13} />
                            ) : isVideo ? (
                              <PlayCircle size={13} />
                            ) : (
                              <Github size={13} />
                            )}
                            <span>{link.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800">
              <div>
                <h4 className="font-display font-bold text-white text-sm sm:text-base">
                  {lightbox.title}
                </h4>
                <p className="text-xs font-mono text-slate-400">
                  Screenshot {lightbox.index + 1} of {lightbox.images.length}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close preview"
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative bg-slate-950 flex items-center justify-center max-h-[75vh]">
              <img
                src={lightbox.images[lightbox.index]}
                alt={`${lightbox.title} preview ${lightbox.index + 1}`}
                className="max-h-[75vh] w-auto object-contain"
              />
              {lightbox.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox((prev) =>
                        prev
                          ? {
                              ...prev,
                              index:
                                (prev.index - 1 + prev.images.length) %
                                prev.images.length,
                            }
                          : null
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-indigo-600 transition-colors border border-white/10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox((prev) =>
                        prev
                          ? { ...prev, index: (prev.index + 1) % prev.images.length }
                          : null
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-indigo-600 transition-colors border border-white/10"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

