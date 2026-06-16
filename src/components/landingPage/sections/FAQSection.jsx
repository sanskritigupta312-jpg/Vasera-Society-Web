import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../../elements/SectionTitle';

const faqs = [
  { q: 'Is this a SaaS-based platform?',  a: 'Yes, Vasera is fully cloud-based. No installation needed — access it from any browser or our mobile app.' },
  { q: 'Is my data secure?',              a: 'Absolutely. We use bank-grade encryption and host on secure servers with daily backups.' },
  { q: 'Can I upgrade my plan later?',    a: 'Yes, you can upgrade or downgrade your plan anytime from your dashboard with no data loss.' },
  { q: 'Do you provide support?',         a: 'We offer 24/7 support via chat and email. Premium plans include a dedicated account manager.' },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 dark:border-slate-800 last:border-0">
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex justify-between items-center py-4 text-left gap-4 cursor-pointer">
        <span className="text-sm font-medium text-slate-900 dark:text-white">{q}</span>
        <span className={`text-slate-400 text-lg leading-none shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="text-sm text-slate-500 dark:text-slate-400 pb-4 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => (
  <section id="faq" className="py-20 px-6 relative z-10">
    <div className="max-w-2xl mx-auto">
      <SectionTitle badge="FAQ" title="Frequently Asked Questions"
        subtitle="Common questions about Vasera." />
      <div className="card">
        {faqs.map(f => <FAQItem key={f.q} {...f} />)}
      </div>
    </div>
  </section>
);

export default FAQSection;
