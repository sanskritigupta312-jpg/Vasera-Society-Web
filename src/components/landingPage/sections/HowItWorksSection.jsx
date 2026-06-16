import { motion } from 'framer-motion';
import { Sheet } from '../../elements/SheetContainer';

const steps = [
  {
    num: '01', icon: '🏢',
    title: 'Register Your Society',
    desc: 'Sign up and create your society profile.',
    detail: ['Create society profile', 'Add towers & flat numbers', 'Configure roles & permissions', 'Invite committee members'],
    image: '/society1.jpg',
  },
  {
    num: '02', icon: '🪪',
    title: 'Add Members & Units',
    desc: 'Import member data and set up units.',
    detail: ['Bulk import via Excel', 'Auto-send invite links', 'WhatsApp & SMS onboarding', 'Owner & tenant distinction'],
    image: '/society4.jpg',
  },
  {
    num: '03', icon: '🚀',
    title: 'Start Managing',
    desc: 'Automate billing and engagement.',
    detail: ['Auto-generate monthly bills', 'Real-time visitor gate log', 'Complaints routed to staff', 'Dashboard analytics live'],
    image: '/society7.jpg',
  },
];

const HowItWorksSection = () => (
  <Sheet id="how-it-works" className="bg-slate-50 dark:bg-slate-950 py-24">
    <div className="max-w-6xl mx-auto px-6 w-full">

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55 }}
        className="max-w-xl mb-16">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
          How It Works
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
          How It Works
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          Get started with Vasera in three simple steps.
        </p>
      </motion.div>

      <div className="flex flex-col gap-5">
        {steps.map((step, i) => (
          <motion.div key={step.num}
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 group hover:shadow-lg transition-shadow duration-300`}>

            {/* image side */}
            <div className="relative lg:w-[45%] h-56 lg:h-auto shrink-0 overflow-hidden">
              <img src={step.image} alt={step.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:bg-gradient-to-t lg:from-transparent" />
              <span className="absolute top-5 left-5 text-6xl font-black text-white/20 select-none leading-none">
                {step.num}
              </span>
            </div>

            {/* content side */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{step.desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {step.detail.map(d => (
                  <li key={d} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
                      <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Sheet>
);

export default HowItWorksSection;
