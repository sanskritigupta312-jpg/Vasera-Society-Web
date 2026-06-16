import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = {
  Product: [
    { label: 'Features', to: '/#features' },
    { label: 'Pricing',  to: '/services'  },
    { label: 'FAQ',      to: '/#faq'      },
    { label: 'Services', to: '/services'  },
  ],
  Company: [
    { label: 'About Us', to: '/about'    },
    { label: 'Careers',  to: '/careers'  },
    { label: 'Blog',     to: '/blog'     },
    { label: 'Contact',  to: '/contact'  },
  ],
};

const socials = [
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
];

const badges = [
  { icon: '🔒', text: 'Bank-Grade Security' },
  { icon: '✅', text: 'ISO 27001 Certified' },
  { icon: '⚡', text: '99.9% Uptime SLA' },
  { icon: '🇮🇳', text: 'Built for India' },
];

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="relative z-10 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300 overflow-hidden border-t border-slate-200 dark:border-transparent">

      {/* top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-600/60 to-transparent" />

      {/* subtle bg texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.06' }} />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ── top CTA band ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 hidden">
        </motion.div>

        {/* ── main grid ── */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-slate-200 dark:border-slate-800">

          {/* brand col — spans 2 */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 no-underline mb-4">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-600/30">
                V
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">Vasera</span>
            </Link>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 max-w-xs">
              The complete operating system for modern housing societies. Simplify management, enhance security, and build a vibrant community with Vasera.
            </p>

            {/* trust badges */}
            <div className="flex flex-wrap gap-2 mb-7">
              {badges.map(b => (
                <span key={b.text} className="flex items-center gap-1.5 text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-full px-2.5 py-1">
                  <span>{b.icon}</span>{b.text}
                </span>
              ))}
            </div>

            {/* socials */}
            <div className="flex gap-2">
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-200 no-underline">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* link cols */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    <Link to={item.to}
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors no-underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── newsletter ── */}
        <div className="py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Stay Updated</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">Subscribe to our newsletter for the latest updates, features, and community management tips.</p>
          </div>
          {subscribed ? (
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              className="text-sm text-blue-400 font-medium">
              ✓ You're subscribed!
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email" required
                className="w-full sm:w-56 text-sm px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-blue-500 transition-colors"
              />
              <button type="submit" className="btn-primary px-4 py-2 text-sm shrink-0">Subscribe</button>
            </form>
          )}
        </div>

        {/* ── bottom bar ── */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400 dark:text-slate-600">
          <p>© 2026 Vasera. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(l => (
              <a key={l} href="#" className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors no-underline">{l}</a>
            ))}
            <span>·</span>
            <span>Made with ❤️ in India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
