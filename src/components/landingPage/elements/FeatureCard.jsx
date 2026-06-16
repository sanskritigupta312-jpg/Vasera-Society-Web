import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    transition={{ duration: 0.4, delay }} className="card hover:border-blue-200 dark:hover:border-blue-900 transition-colors duration-200">
    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-xl mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-base text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
  </motion.div>
);

export default FeatureCard;
