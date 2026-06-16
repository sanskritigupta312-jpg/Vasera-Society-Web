import { motion } from 'framer-motion';

const MegaPageTemplate = ({ title, subtitle, category, icon, image, children }) => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/95" />
        
        {/* Decorative Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-blue-300 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md shadow-lg shadow-blue-500/10">
                <span className="text-base">{icon}</span>
                {category}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
              {subtitle}
            </p>
            <a href="#content" className="btn-primary no-underline text-base px-8 py-4 shadow-xl shadow-blue-600/20">
              Explore Details ↓
            </a>
          </motion.div>
        </div>
      </section>

      <section id="content" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {children || (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-10 md:p-16 text-center shadow-sm"
            >
              <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🛠️
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Content Coming Soon</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-lg mx-auto">
                This is the dedicated page for <strong>{title}</strong>. We are currently building out detailed documentation, interactive previews, and deep dives for this section. Stay tuned!
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MegaPageTemplate;
