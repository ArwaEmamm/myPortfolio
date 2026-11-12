import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (value: string, field: 'email' | 'phone') => {
    navigator.clipboard?.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-mono font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
            06 // Let&apos;s Connect
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Looking for a Full Stack or Backend Developer for your team or project? Reach out directly or send a message below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3.5 min-w-0 group"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Email</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-indigo-500 transition-colors">
                    {PROFILE.email}
                  </p>
                </div>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(PROFILE.email, 'email')}
                aria-label="Copy email"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors shrink-0"
              >
                {copiedField === 'email' ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-4">
              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3.5 min-w-0 group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Phone</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-emerald-500 transition-colors">
                    {PROFILE.phone}
                  </p>
                </div>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(PROFILE.phone, 'phone')}
                aria-label="Copy phone number"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors shrink-0"
              >
                {copiedField === 'phone' ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Location</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {PROFILE.location}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4 pt-1">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all flex items-center gap-3"
              >
                <Linkedin size={20} className="text-indigo-500" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">LinkedIn</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">/in/arwa-emam</p>
                </div>
              </a>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all flex items-center gap-3"
              >
                <Github size={20} className="text-slate-800 dark:text-white" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">GitHub</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">@ArwaEmamm</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ahmed Mohamed"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your role, project, or collaboration idea..."
                  className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5"
                >
                  <Send size={16} />
                  Send Message
                </button>

                {submitted && (
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    Opening your mail client with the message pre-filled!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

