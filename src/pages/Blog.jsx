import { motion } from 'framer-motion';

const posts = [
  { tag: 'Tips', title: 'How to Increase Maintenance Collection to 98%', date: 'Jun 10, 2026', read: '5 min', img: '/feat1.jpg' },
  { tag: 'Security', title: 'Why Digital Visitor Logs Beat Paper Registers', date: 'Jun 5, 2026', read: '4 min', img: '/feat2.jpg' },
  { tag: 'Finance', title: 'A Treasurer\'s Guide to One-Click Audit Reports', date: 'May 28, 2026', read: '6 min', img: '/feat4.jpg' },
  { tag: 'Community', title: 'Building a Happier Society with Smart Notices', date: 'May 20, 2026', read: '3 min', img: '/feat5.jpg' },
  { tag: 'Product', title: 'New Feature: Emergency Alerts in Under 5 Seconds', date: 'May 12, 2026', read: '3 min', img: '/feat7.jpg' },
  { tag: 'Guide', title: 'Onboarding Your Society in 10 Minutes', date: 'May 1, 2026', read: '7 min', img: '/feat8.jpg' },
];

const Blog = () => (
  <div className="bg-white dark:bg-black">
    {/* Hero */}
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
      <img src="/society2.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-5 px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
            Resources
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">Vasera Blog</h1>
          <p className="text-lg text-white/65 leading-relaxed">
            Tips, guides, and insights on society management, community building, and product updates.
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

    {/* Posts Grid */}
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.a key={p.title} href="#"
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group block bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline">
              <div className="relative overflow-hidden" style={{ height: '200px' }}>
                <img src={p.img} alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.read} read</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
