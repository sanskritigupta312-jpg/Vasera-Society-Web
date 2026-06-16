import { motion } from 'framer-motion';
import LandingNavbar from '../components/landingPage/sections/LandingNavbar';
import FooterSection from '../components/landingPage/sections/FooterSection';

const openings = [
  { title: 'Frontend Engineer', team: 'Engineering', location: 'Raipur / Remote', type: 'Full-time', color: 'from-blue-500 to-blue-600' },
  { title: 'Backend Engineer', team: 'Engineering', location: 'Raipur / Remote', type: 'Full-time', color: 'from-violet-500 to-violet-600' },
  { title: 'Product Designer', team: 'Design', location: 'Remote', type: 'Full-time', color: 'from-pink-500 to-pink-600' },
  { title: 'Community Manager', team: 'Growth', location: 'Raipur', type: 'Full-time', color: 'from-emerald-500 to-emerald-600' },
  { title: 'DevOps Engineer', team: 'Engineering', location: 'Remote', type: 'Contract', color: 'from-orange-500 to-orange-600' },
  { title: 'Sales Executive', team: 'Sales', location: 'Pan India', type: 'Full-time', color: 'from-amber-500 to-amber-600' },
];

const perks = [
  { icon: '🏠', title: 'Remote Friendly', desc: 'Work from wherever you do your best work.' },
  { icon: '📈', title: 'Fast Growth', desc: 'Be part of a rocketship in its early days.' },
  { icon: '🏥', title: 'Health Cover', desc: 'Comprehensive health insurance for you and family.' },
  { icon: '🎓', title: 'Learning Budget', desc: '₹30,000/year for courses, books, and conferences.' },
  { icon: '🌴', title: 'Generous PTO', desc: '24 days off annually + all national holidays.' },
  { icon: '💰', title: 'ESOPs', desc: 'Ownership stake in what you help build.' },
];

const Careers = () => (
  <div className="bg-white dark:bg-black">
    <LandingNavbar />
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img src="/society4.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-5 px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
            Join Us
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">
            Build the Future<br />of Communities
          </h1>
          <p className="text-lg text-white/65 leading-relaxed mb-8">
            Join a passionate team on a mission to transform how 100 million Indians live in housing societies.
          </p>
          <a href="#openings"
            className="btn-primary px-8 py-3.5 text-base no-underline inline-block">
            View Open Roles →
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 text-white dark:text-black" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 60 800 0 600 20C400 40 200 0 0 20L0 60Z" fill="currentColor" />
        </svg>
      </div>
    </section>

    {/* Perks */}
    <section className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">Why Vasera</span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Perks & Benefits</h2>
          <p className="text-slate-500 dark:text-slate-400">We take care of our team so they can take care of our users.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {perks.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-7 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{p.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Open Roles */}
    <section id="openings" className="py-20 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">Open Positions</span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Current Openings</h2>
          <p className="text-slate-500 dark:text-slate-400">Don't see your role? Write to us at <a href="mailto:careers@vasera.app" className="text-blue-600 dark:text-blue-400">careers@vasera.app</a></p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {openings.map((job, i) => (
            <motion.a key={job.title} href="#"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex items-center justify-between gap-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-5 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md transition-all duration-300 no-underline">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {job.title[0]}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{job.title}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{job.team} · {job.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden sm:block text-xs font-medium bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900 px-3 py-1 rounded-full">{job.type}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className="text-slate-300 group-hover:text-blue-500 transition-colors">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="relative rounded-3xl overflow-hidden">
          <img src="/society5.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
          <div className="relative z-10 px-8 sm:px-14 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Don't see your role?</h3>
              <p className="text-white/60 text-sm">We're always looking for great people. Drop us a note.</p>
            </div>
            <a href="mailto:careers@vasera.app"
              className="btn-primary no-underline shrink-0">Send Open Application →</a>
          </div>
        </motion.div>
      </div>
    </section>
    {/* Legal Links */}
    <section className="bg-white dark:bg-black py-10 px-6 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400 dark:text-slate-600">&copy; 2026 Vasera. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(l => (
            <a key={l} href="#"
              className="text-xs text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline">
              {l}
            </a>
          ))}
        </div>
      </div>
    </section>
    <FooterSection />
  </div>
);

export default Careers;
