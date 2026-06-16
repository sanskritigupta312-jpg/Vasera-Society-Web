import { motion } from 'framer-motion';
import { Sheet } from '../../elements/SheetContainer';

const testimonials = [
  {
    quote: 'Emergent transformed how we manage our society. Billing used to take days, now it takes minutes. Highly recommended!',
    name: 'Rajesh Kumar', role: 'Secretary', society: 'Palm Heights',
    avatar: 'R', color: 'bg-blue-600', image: '/society5.jpg',
  },
  {
    quote: 'The financial reporting is excellent. I can generate audits in a single click. The SaaS model means we can access it from anywhere.',
    name: 'Priya Sharma', role: 'Treasurer', society: 'Green Valley',
    avatar: 'P', color: 'bg-emerald-600', image: '/society2.jpg',
  },
  {
    quote: 'Love the visitor management feature. I feel much safer knowing exactly who is entering the society premises.',
    name: 'Amit Patel', role: 'Resident', society: 'Blue Ridge',
    avatar: 'A', color: 'bg-violet-600', image: '/society6.jpg',
  },
];

const logos = ['Prestige Group', 'Godrej Properties', 'Mahindra Lifespaces', 'Brigade Group', 'Sobha Developers', 'Embassy Group'];

const TestimonialsSection = () => (
  <Sheet id="testimonials" className="bg-white dark:bg-black py-24 overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 w-full">

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55 }}
        className="text-center max-w-xl mx-auto mb-16">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
          Testimonials
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
          Trusted by Societies Everywhere
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          See what our users have to say about their experience.
        </p>
      </motion.div>

      {/* large featured card */}
      <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55 }}
        className="relative rounded-3xl overflow-hidden mb-5" style={{ minHeight: '340px' }}>
        <img src={testimonials[0].image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        <div className="relative z-10 max-w-xl p-10 lg:p-14 h-full flex flex-col justify-center">
          <div className="text-4xl text-blue-400 mb-4 font-serif leading-none">"</div>
          <p className="text-white text-lg sm:text-xl font-medium leading-relaxed mb-6">
            {testimonials[0].quote}
          </p>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full ${testimonials[0].color} flex items-center justify-center text-white font-bold shrink-0`}>
              {testimonials[0].avatar}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{testimonials[0].name}</p>
              <p className="text-white/50 text-xs">{testimonials[0].role} · {testimonials[0].society}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* two smaller cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {testimonials.slice(1).map((t, i) => (
          <motion.div key={t.name}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.12 }}
            className="relative rounded-3xl overflow-hidden" style={{ minHeight: '260px' }}>
            <img src={t.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="relative z-10 p-7 h-full flex flex-col justify-end">
              <div className="text-2xl text-blue-400 font-serif leading-none mb-2">"</div>
              <p className="text-white text-sm leading-relaxed mb-4">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role} · {t.society}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* trusted by logos */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="border-t border-slate-100 dark:border-slate-900 pt-10">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
          Trusted by India's leading developers
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {logos.map(l => (
            <span key={l} className="text-sm font-semibold text-slate-300 dark:text-slate-700">{l}</span>
          ))}
        </div>
      </motion.div>
    </div>
  </Sheet>
);

export default TestimonialsSection;
