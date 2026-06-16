import { motion } from 'framer-motion';

const About = () => {
  const team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', emoji: '👔' },
    { name: 'Priya Sharma', role: 'Product Lead', emoji: '🎯' },
    { name: 'Arun Mehta', role: 'CTO', emoji: '⚙️' },
    { name: 'Neha Verma', role: 'Head of Community', emoji: '🤝' },
  ];

  const values = [
    { icon: '🏘️', title: 'Community First', desc: 'We build for communities, not corporations.', color: 'from-blue-500 to-blue-600' },
    { icon: '🔒', title: 'Trust & Security', desc: 'Your data is protected with bank-grade encryption.', color: 'from-violet-500 to-violet-600' },
    { icon: '⚡', title: 'Simple & Fast', desc: 'Easy to use, deployed in minutes.', color: 'from-amber-500 to-amber-600' },
    { icon: '🌱', title: 'Sustainable Growth', desc: "Supporting India's residential spaces.", color: 'from-emerald-500 to-emerald-600' },
  ];

  const milestones = [
    { year: '2022', event: 'Vasera founded in Raipur with a team of 3.' },
    { year: '2023', event: 'First 50 societies onboarded. Seed funding raised.' },
    { year: '2024', event: 'Crossed 200 societies & ₹5Cr in processed collections.' },
    { year: '2025', event: '500+ societies. Series A underway. Expanding PAN India.' },
  ];

  return (
    <div className="bg-white dark:bg-black">

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <img src="/society1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-5 px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
              Our Mission
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">
              Smarter Communities<br />Across India
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              We're transforming residential society management with technology that connects communities, empowers residents, and streamlines operations.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-full h-14 text-white dark:text-black" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 60 800 0 600 20C400 40 200 0 0 20L0 60Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '500+', label: 'Societies served' },
              { num: '50K+', label: 'Residents managed' },
              { num: '₹10Cr+', label: 'Collections processed' },
              { num: '4.9/5', label: 'Average rating' },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
                className="text-center bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl py-8 px-4">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{s.num}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="max-w-xl mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">Our Values</span>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">What We Stand For</h2>
            <p className="text-slate-500 dark:text-slate-400">Four pillars that guide everything we do at Vasera.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-7 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center text-2xl mb-5`}>{v.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="text-center max-w-xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">Our Team</span>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Meet the People Behind Vasera</h2>
            <p className="text-slate-500 dark:text-slate-400">A diverse team passionate about building better communities.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m, i) => (
              <motion.div key={m.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-4">{m.emoji}</div>
                <h3 className="font-bold text-slate-900 dark:text-white">{m.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">Journey</span>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Our Story</h2>
          </motion.div>
          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <motion.div key={m.year}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex gap-6 pb-10 last:pb-0 relative">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0 z-10">{m.year.slice(2)}</div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-slate-200 dark:bg-slate-800 mt-2" />}
                </div>
                <div className="pt-2 pb-4">
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">{m.year}</p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="relative rounded-3xl overflow-hidden">
            <img src="/society6.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            <div className="relative z-10 px-8 sm:px-14 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Want to join our journey?</h3>
                <p className="text-white/60 text-sm">We're hiring across engineering, design, and growth.</p>
              </div>
              <a href="/careers" className="btn-primary no-underline shrink-0">See Open Roles →</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;