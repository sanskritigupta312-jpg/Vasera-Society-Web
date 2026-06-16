import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingNavbar from '../components/landingPage/sections/LandingNavbar';
import FooterSection from '../components/landingPage/sections/FooterSection';

const AP = AnimatePresence;

/* ── contact info ──────────────────────────────────── */
const contactMethods = [
  { icon: '📍', title: 'Visit Us', value: 'Office 4074, 4th Floor, Currency Tower, Telibandha, Raipur (C.G)', color: 'from-blue-500 to-blue-600', link: null },
  { icon: '📧', title: 'Email Us', value: 'hello@vasera.app', color: 'from-emerald-500 to-emerald-600', link: 'mailto:hello@vasera.app' },
  { icon: '📞', title: 'Call Us', value: '+91 9584215603', color: 'from-violet-500 to-violet-600', link: 'tel:+919584215603' },
];

const stats = [
  { value: '< 2 hrs', label: 'Avg. response time' },
  { value: '500+', label: 'Societies served' },
  { value: '4.9/5', label: 'Support rating' },
];

const faqs = [
  { q: 'How quickly will you respond?', a: 'Our team typically responds within 2 business hours on weekdays.' },
  { q: 'Do you offer onboarding support?', a: 'Yes! Every new society gets dedicated onboarding assistance at no extra cost.' },
  { q: "Can I request a demo?", a: "Absolutely. Just mention it in your message and we'll schedule a live walkthrough." },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 dark:border-slate-800 last:border-0">
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 cursor-pointer">
        <span className="text-sm font-semibold text-slate-800 dark:text-white">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}
          className="shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold">
          +
        </motion.span>
      </button>
      <AP initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="text-sm text-slate-500 dark:text-slate-400 pb-4 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AP>
    </div>
  );
};

const Card = ({ method }) => (
  <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 text-center hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group cursor-pointer">
    <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-2xl mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
      {method.icon}
    </div>
    <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">{method.title}</h3>
    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{method.value}</p>
  </div>
);

const InputField = ({ label, name, type, value, onChange, placeholder }) => (
  <div>
    <label className="block text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} required placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" />
  </div>
);

/* ── main ─────────────────────────────────────────── */
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }, 4000);
  };

  return (
    <div className="bg-white dark:bg-black">
      <LandingNavbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src="/society3.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-5 px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
              How can we help?
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">Get in Touch</h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-2xl mx-auto mb-10">
              Have questions about our platform or need a custom solution for your society? Our team is here to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }} className="text-center">
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/50 mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-full h-16 text-white dark:text-black" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 60 800 0 600 20C400 40 200 0 0 20L0 60Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white dark:bg-black py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactMethods.map((m, i) => (
              <motion.div key={m.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                {m.link ? <a href={m.link} className="no-underline block h-full"><Card method={m} /></a> : <Card method={m} />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="bg-slate-50 dark:bg-slate-950 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">Send a Message</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">We'd love to hear<br />from you</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">Fill out the form and our team will get back to you within 2 hours.</p>

              <AP mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-3xl p-10 flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-3xl">✅</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">We'll get back to you within 2 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit}
                    className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField label="Name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                      <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Message</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                        placeholder="How can we help you today?"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm" />
                    </div>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit"
                      className="btn-primary w-full py-4 text-base rounded-2xl">
                      Send Message →
                    </motion.button>
                  </motion.form>
                )}
              </AP>
            </motion.div>

            {/* Right — FAQ */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="relative rounded-3xl overflow-hidden mb-8 shadow-lg" style={{ height: '220px' }}>
                <img src="/society7.jpg" alt="Office" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-bold text-base mb-0.5">📍 Raipur Office</p>
                  <p className="text-white/65 text-xs leading-relaxed">4th Floor, Currency Tower,<br />Telibandha, Raipur (C.G)</p>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg">HQ</div>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 mb-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">Common Questions</span>
                {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
              </div>

              <div className="flex flex-wrap gap-2">
                {['🔒 Bank-Grade Security', '✅ ISO 27001', '⚡ 99.9% Uptime', '🇮🇳 Made in India'].map(b => (
                  <span key={b} className="text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1.5">{b}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white dark:bg-black py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="relative rounded-3xl overflow-hidden">
            <img src="/society5.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            <div className="relative z-10 px-8 sm:px-14 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to get started?</h3>
                <p className="text-white/60 text-sm">Join 500+ societies using Vasera. Setup takes 10 minutes.</p>
              </div>
              <div className="flex gap-3 flex-wrap shrink-0">
                <a href="/" className="btn-primary no-underline">Get Started Free →</a>
                <a href="mailto:hello@vasera.app"
                  className="px-6 py-3 rounded-xl text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors whitespace-nowrap no-underline">
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Legal Links */}
      <section className="bg-white dark:bg-black py-10 px-6 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-600">© 2026 Vasera. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(l => (
              <a key={l} href="#"
                className="text-xs text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline">
                {l}
              </a>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Contact;