import { motion } from 'framer-motion';
import { Sheet } from '../../elements/SheetContainer';
import FeatureCarousel from '../../elements/FeatureCarousel';

const FeaturesSection = () => (
  <Sheet id="features" className="bg-slate-50 dark:bg-slate-950 py-15 overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 w-full mb-14">
      {/* heading */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55 }}
        className="max-w-xl">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
          Powerful Features
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
          Everything you need<br />to run your society
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          Powerful tools designed to make society management effortless and transparent.
        </p>
      </motion.div>
    </div>

    {/* carousel */}
    <FeatureCarousel />
  </Sheet>
);

export default FeaturesSection;
