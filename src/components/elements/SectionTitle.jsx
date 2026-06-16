import { motion } from 'framer-motion';

const SectionTitle = ({ badge, title, subtitle }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    transition={{ duration: 0.5 }} className="text-center mb-12">
    {badge && <div className="mb-3"><span className="badge">{badge}</span></div>}
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">{title}</h2>
    {subtitle && <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base leading-relaxed">{subtitle}</p>}
  </motion.div>
);

export default SectionTitle;
