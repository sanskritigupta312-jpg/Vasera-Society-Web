import { motion } from 'framer-motion';
import { Sheet } from '../../elements/SheetContainer';

const CTASection = () => (
  <Sheet id="cta" className="bg-slate-50 dark:bg-slate-950 py-24 overflow-hidden">
    <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
      {/* final cta banner */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="relative rounded-3xl overflow-hidden">
        <img src="/society3.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        <div className="relative z-10 px-8 sm:px-14 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to transform your society?</h3>
            <p className="text-white/60 text-sm">Join thousands of societies using Vasera to create better living experiences.</p>
          </div>
          <div className="flex gap-3 flex-wrap shrink-0">
            <button className="btn-primary px-6 py-3 text-lg cursor-pointer">Get Started Now</button>
          </div>
        </div>
      </motion.div>
    </div>
  </Sheet>
);

export default CTASection
