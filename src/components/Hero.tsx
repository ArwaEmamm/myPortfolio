import React from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Terminal,
  ShieldCheck,
  Database,
  Layers,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Gradient Orbs */}
      <div className="pointer-events-none absolute -top-28 left-1/4 w-96 h-96 rounded-full bg-indigo-500/15 dark:bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-cyan-500/15 dark:bg-cyan-500/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Status & Location */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Open to Full-Stack & Backend Opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                <MapPin size={13} className="text-indigo-500" />
                {PROFILE.location}
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <p className="text-sm font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
                {PROFILE.role}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Building scalable{' '}
                <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                  multi-role platforms
                </span>{' '}
                & modern web systems.
              </h1>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              I&apos;m <strong className="font-semibold text-slate-900 dark:text-white">{PROFILE.displayName}</strong>, a
              Full Stack Developer crafting database-driven web apps, RESTful APIs, RBAC architectures, and business
              workflow platforms using{' '}
              <span className="font-medium text-slate-900 dark:text-slate-100">
                Laravel, React, Angular, and Node.js
              </span>
              .
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowRight size={17} />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 text-slate-800 dark:text-slate-100 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all hover:-translate-y-0.5"
              >
                Get In Touch
              </button>
            </div>

            {/* Social & Direct Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
              >
                <Mail size={15} />
                {PROFILE.email}
              </a>
              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
              >
                <Phone size={15} />
                {PROFILE.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-slate-900/10 dark:shadow-black/50 overflow-hidden">
              {/* Terminal Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/70">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400/90" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/90" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Terminal size={12} className="text-indigo-500" />
                  developer.profile.ts
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                  v2026
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5">
                {/* Code snippet */}
                <div className="font-mono text-xs sm:text-[13px] leading-relaxed rounded-xl p-4 bg-slate-950 text-slate-300 border border-slate-800 overflow-x-auto">
                  <div>
                    <span className="text-violet-400">const</span>{' '}
                    <span className="text-cyan-300">arwa</span> = {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-emerald-300">&quot;Full Stack Developer&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">current:</span>{' '}
                    <span className="text-emerald-300">&quot;Backend Developer @ RoyalTechni&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">coreStack:</span> [
                    <span className="text-amber-300">&quot;Laravel&quot;</span>,{' '}
                    <span className="text-amber-300">&quot;React&quot;</span>,{' '}
                    <span className="text-amber-300">&quot;Angular&quot;</span>,{' '}
                    <span className="text-amber-300">&quot;Node.js&quot;</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span> [
                    <span className="text-cyan-300">&quot;RBAC&quot;</span>,{' '}
                    <span className="text-cyan-300">&quot;REST APIs&quot;</span>,{' '}
                    <span className="text-cyan-300">&quot;Modular Systems&quot;</span>]
                  </div>
                  <div>{'}'};</div>
                </div>

                {/* Quick Engineering Highlights */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
                      <Layers size={15} />
                      <span className="text-xs font-semibold">Architecture</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Modular Laravel, MVC, SOLID & Multi-Role SaaS
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
                      <ShieldCheck size={15} />
                      <span className="text-xs font-semibold">Security & Auth</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      RBAC, Permissions & Protected REST APIs
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                      <Database size={15} />
                      <span className="text-xs font-semibold">Databases</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      MySQL, PostgreSQL, MongoDB & SQLite
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 mb-1">
                      <Sparkles size={15} />
                      <span className="text-xs font-semibold">Education</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      ITI Full-Stack Track & CS Bachelor&apos;s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

