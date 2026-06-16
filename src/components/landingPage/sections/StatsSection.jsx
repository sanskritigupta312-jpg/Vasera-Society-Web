import { motion } from 'framer-motion';
import StatCounter from '../../elements/StatCounter';
import { Sheet } from '../../elements/SheetContainer';

const stats = [
  { value: 500,   suffix: '+',    label: 'Societies on Vasera',   icon: '🏢' },
  { value: 50000, suffix: '+',    label: 'Residents managed',     icon: '👨‍👩‍👧‍👦' },
  { value: 10,    prefix: '₹',   suffix: 'Cr+', label: 'Transactions processed', icon: '💰' },
  { value: 4.9,   suffix: '/5',   label: 'Average rating',        icon: '🌟' },
];

const StatsSection = () => (
  <Sheet id="overview" className="bg-white dark:bg-black overflow-hidden">
    {/* bg image — same for both modes, overlay differs */}
    <div className="absolute inset-0 z-0">
      <img src="/society3.jpg" alt="Society" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-black/55 to-black/60 dark:from-black/70 dark:via-black/60 dark:to-black/80" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 w-full">
      {/* heading */}
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="max-w-2xl mb-20">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 dark:text-blue-400 mb-4">
          Trusted by 500+ societies across India
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Smart Society<br />Management Platform
        </h2>
        <p className="text-white/65 dark:text-white/60 text-lg leading-relaxed mb-8">
          Streamline billing, visitor management, and community engagement. The #1 SaaS-based operating system for modern housing societies.
        </p>
        <div className="flex gap-4 mb-20">
          <a href="#cta" className="btn-primary px-6 py-3 no-underline">Get Started</a>
          <a href="#features" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 px-6 py-3 no-underline">Features</a>
        </div>
      </motion.div>

      {/* stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/15 dark:bg-white/10 border border-white/20 dark:border-white/15 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-white/15 transition-all duration-200">
            <div className="text-3xl mb-3">{s.icon}</div>
            <div className="text-3xl font-bold text-white dark:text-white mb-1">
              <StatCounter value={s.value} prefix={s.prefix || ''} suffix={s.suffix} label="" delay={i * 0.1} />
            </div>
            <p className="text-white/70 dark:text-white/55 text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* trust bar */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 flex flex-wrap gap-6 items-center">
        {['ISO 27001 Certified', 'GDPR Compliant', '99.9% Uptime SLA', 'Bank-Grade Encryption', '24/7 Support'].map(t => (
          <span key={t} className="flex items-center gap-2 text-white/60 dark:text-white/50 text-sm">
            <span className="w-1 h-1 rounded-full bg-blue-300 dark:bg-blue-400 inline-block" />
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  </Sheet>
);

export default StatsSection;
