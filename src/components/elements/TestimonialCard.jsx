import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, name, role, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.4, delay }}
    className="card flex flex-col gap-4">
    <div className="text-amber-400 text-sm tracking-wider">★★★★★</div>
    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">"{quote}"</p>
    <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
      <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold text-white shrink-0">
        {name.charAt(0)}
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900 dark:text-white">{name}</div>
        <div className="text-xs text-slate-400">{role}</div>
      </div>
    </div>
  </motion.div>
);

export default TestimonialCard;
