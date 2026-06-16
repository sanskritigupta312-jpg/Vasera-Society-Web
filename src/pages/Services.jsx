import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  { icon: '💳', tag: 'Finance',       title: 'Automated Billing',   desc: 'Generate maintenance bills automatically every month. Send reminders via SMS & Email. Residents pay online in seconds.',       color: 'from-blue-500 to-blue-600'    },
  { icon: '🚪', tag: 'Security',      title: 'Visitor Management',  desc: 'Secure your gate with OTP-based visitor approval. Track every entry — guests, delivery agents, and cabs — in real time.',      color: 'from-orange-500 to-orange-600' },
  { icon: '🔧', tag: 'Maintenance',   title: 'Complaint Redressal', desc: 'Residents raise tickets in one tap. Assign to staff, track status, and close — all with automatic notifications.',             color: 'from-emerald-500 to-emerald-600'},
  { icon: '📊', tag: 'Transparency',  title: 'Financial Reports',   desc: 'View income, expenses, defaulters, and audit trails in one click. Share reports with committee members instantly.',              color: 'from-violet-500 to-violet-600' },
  { icon: '📢', tag: 'Communication', title: 'Smart Notices',       desc: "Stop printing paper notices. Publish announcements to every resident's phone instantly — with read receipts.",                  color: 'from-pink-500 to-pink-600'    },
  { icon: '🏊', tag: 'Amenities',     title: 'Facility Booking',    desc: 'Let residents book the clubhouse, pool, or tennis court from the app. No clashes, no calls, no confusion.',                    color: 'from-cyan-500 to-cyan-600'    },
  { icon: '🚨', tag: 'Safety',        title: 'Emergency Alerts',    desc: 'Broadcast urgent notifications to all residents instantly — fire drills, power cuts, water supply updates.',                   color: 'from-rose-500 to-rose-600'    },
  { icon: '📋', tag: 'Governance',    title: 'Meeting Minutes',     desc: 'Record AGM and committee meeting minutes digitally. Share with all residents and archive for compliance.',                     color: 'from-amber-500 to-amber-600'  },
];

const plansData = {
  monthly: [
    {
      name: 'Basic Plan', price: '₹ 0.00', period: 'month',
      desc: 'Perfect for small societies with basic needs',
      features: ['500 Units', '100 Users', '5 GB Storage', 'Email Notifications', 'SMS Notifications', 'WhatsApp Integration', 'Mobile App Access', 'Advanced Reports', 'API Access', 'Custom Branding', 'Priority Support'],
      cta: 'Choose Basic Plan', highlight: false,
    },
    {
      name: 'Premium Plan', price: '₹ 5,000.00', period: 'month',
      desc: 'Ideal for medium to large societies with advanced features',
      features: ['2000 Units', '500 Users', '50 GB Storage', 'Email Notifications', 'SMS Notifications', 'WhatsApp Integration', 'Mobile App Access', 'Advanced Reports', 'API Access', 'Custom Branding', 'Priority Support'],
      cta: 'Choose Premium Plan', highlight: true,
    },
    {
      name: 'Enterprise Plan', price: '₹ 15,000.00', period: 'month',
      desc: 'For large societies requiring unlimited features and white-label solution',
      features: ['9999 Units', '9999 Users', '200 GB Storage', 'Email Notifications', 'SMS Notifications', 'WhatsApp Integration', 'Mobile App Access', 'Advanced Reports', 'API Access', 'Custom Branding', 'Priority Support'],
      cta: 'Choose Enterprise Plan', highlight: false,
    }
  ],
  yearly: [
    {
      name: 'Basic Plan', price: '₹ 0.00', period: 'year',
      desc: 'Perfect for small societies with basic needs',
      features: ['500 Units', '100 Users', '5 GB Storage', 'Email Notifications', 'SMS Notifications', 'WhatsApp Integration', 'Mobile App Access', 'Advanced Reports', 'API Access', 'Custom Branding', 'Priority Support'],
      cta: 'Choose Basic Plan', highlight: false,
    },
    {
      name: 'Premium Plan', price: '₹ 50,000', period: 'year',
      desc: 'Ideal for medium to large societies with advanced features',
      features: ['2000 Units', '500 Users', '50 GB Storage', 'Email Notifications', 'SMS Notifications', 'WhatsApp Integration', 'Mobile App Access', 'Advanced Reports', 'API Access', 'Custom Branding', 'Priority Support'],
      cta: 'Choose Premium Plan', highlight: true,
    },
    {
      name: 'Enterprise Plan', price: '₹ 150,000', period: 'year',
      desc: 'For large societies requiring unlimited features and white-label solution',
      features: ['9999 Units', '9999 Users', '200 GB Storage', 'Email Notifications', 'SMS Notifications', 'WhatsApp Integration', 'Mobile App Access', 'Advanced Reports', 'API Access', 'Custom Branding', 'Priority Support'],
      cta: 'Choose Enterprise Plan', highlight: false,
    }
  ]
};

const Services = () => {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? plansData.yearly : plansData.monthly;

  return (
    <div className="bg-white dark:bg-black">

    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img src="/society6.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-5 px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
            What We Offer
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">Our Services</h1>
          <p className="text-lg text-white/65 leading-relaxed">
            Everything your residential society needs to thrive in the digital age. From payments to security, we've got you covered.
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

    {/* Services Grid */}
    <section className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="max-w-xl mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">Features</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Complete Suite of Tools</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">All the tools you need to manage your community efficiently.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-1 transition-all duration-300 group">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-xl mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-2 block">{s.tag}</span>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Choose the plan that fits your society's needs. No hidden fees.</p>
          
          {/* Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${!isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 rounded-full bg-blue-600 transition-colors p-1 cursor-pointer focus:outline-none"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>Yearly</span>
              <span className="text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full uppercase tracking-wider">Save 16%</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                p.highlight
                  ? 'bg-slate-900 dark:bg-slate-800 text-white shadow-2xl shadow-blue-900/20 md:-mt-4 md:mb-4 border border-slate-800 dark:border-slate-700'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800'
              }`}>
              {p.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most popular
                </span>
              )}
              
              <div className="mb-8 border-b border-slate-200 dark:border-slate-700/50 pb-8">
                <h3 className={`text-2xl font-bold mb-3 ${p.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{p.name}</h3>
                <p className={`text-sm leading-relaxed min-h-[40px] ${p.highlight ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>{p.desc}</p>
                <div className="flex items-end gap-1 mt-6">
                  <span className={`text-4xl lg:text-5xl font-black tracking-tight ${p.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{p.price}</span>
                  <span className={`text-sm mb-1.5 font-medium ${p.highlight ? 'text-slate-400' : 'text-slate-500'}`}>/{p.period}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <p className={`text-xs font-bold uppercase tracking-widest mb-6 ${p.highlight ? 'text-slate-400' : 'text-slate-400'}`}>What's included:</p>
                <ul className="flex flex-col gap-4 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="12" fill={p.highlight ? '#3b82f6' : '#eff6ff'} className={p.highlight ? 'fill-blue-500' : 'fill-blue-50 dark:fill-blue-900/50'} />
                        <path d="M7 12l3 3 7-7" stroke={p.highlight ? '#ffffff' : '#3b82f6'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className={`font-medium ${p.highlight ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`w-full py-4 rounded-xl text-sm font-bold transition-all duration-200 mt-auto ${
                p.highlight 
                  ? 'bg-blue-500 text-white hover:bg-blue-400 shadow-lg shadow-blue-500/25' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}>
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="relative rounded-3xl overflow-hidden">
          <img src="/society5.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
          <div className="relative z-10 px-8 sm:px-14 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Need a custom plan?</h3>
              <p className="text-white/60 text-sm">For larger societies or special requirements, contact our team.</p>
            </div>
            <a href="/contact" className="btn-primary no-underline shrink-0">Talk to Sales →</a>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
  );
};

export default Services;