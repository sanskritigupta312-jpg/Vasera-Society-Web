import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';

/* ── Icons ───────────────────────────────────────────── */
const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const ChevronDown = ({ open }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

/* ── Mega menu data ───────────────────────────────────── */
const megas = {
  Features: {
    cols: 2,
    groups: [
      {
        heading: 'Core Tools',
        items: [
          { icon: '💰', title: 'Automated Billing',   desc: 'Bills, reminders & online payments', to: '/features/automated-billing' },
          { icon: '🔐', title: 'Visitor Management',  desc: 'OTP gate entry & visitor logs', to: '/features/visitor-management' },
          { icon: '🛠️', title: 'Complaint Redressal', desc: 'Raise, assign & track tickets', to: '/features/complaint-redressal' },
          { icon: '📈', title: 'Financial Reports',   desc: 'Income, expense & audit reports', to: '/features/financial-reports' },
        ],
      },
      {
        heading: 'Engagement',
        items: [
          { icon: '🔔', title: 'Smart Notices',     desc: 'Digital announcements to all phones', to: '/features/smart-notices' },
          { icon: '🗓️', title: 'Facility Booking',  desc: 'Clubhouse, pool & court bookings', to: '/features/facility-booking' },
          { icon: '🚨', title: 'Emergency Alerts',  desc: 'Instant broadcast to residents', to: '/features/emergency-alerts' },
          { icon: '📝', title: 'Meeting Minutes',   desc: 'Digital AGM & committee records', to: '/features/meeting-minutes' },
        ],
      },
    ],
  },
  About: {
    cols: 1,
    groups: [
      {
        heading: 'Company',
        items: [
          { icon: '🏢', title: 'Our Story',   desc: 'How Vasera was built and why', to: '/about/our-story' },
          { icon: '🤝', title: 'The Team',    desc: 'Meet the people behind the product', to: '/about/the-team' },
          { icon: '🎯', title: 'Mission',     desc: 'Smarter communities across India', to: '/about/mission' },
          { icon: '🏅', title: 'Awards',      desc: 'Recognition & milestones', to: '/about/awards' },
        ],
      },
    ],
  },
  Blog: {
    cols: 1,
    groups: [
      {
        heading: 'Resources',
        items: [
          { icon: '📰', title: 'Latest Articles',   desc: 'Society management tips & guides', to: '/blog/latest-articles' },
          { icon: '🎥', title: 'Video Tutorials',   desc: 'Step-by-step feature walkthroughs', to: '/blog/video-tutorials' },
          { icon: '📊', title: 'Case Studies',      desc: 'Real stories from real societies', to: '/blog/case-studies' },
          { icon: '✉️', title: 'Newsletter',        desc: 'Monthly digest in your inbox', to: '/blog/newsletter' },
        ],
      },
    ],
  },
  Careers: {
    cols: 1,
    groups: [
      {
        heading: 'Join Us',
        items: [
          { icon: '💼', title: 'Open Roles',    desc: 'Engineering, design & ops', to: '/careers/open-roles' },
          { icon: '⭐', title: 'Culture',       desc: 'How we work & what we value', to: '/careers/culture' },
          { icon: '🎓', title: 'Internships',   desc: 'Students & fresh graduates', to: '/careers/internships' },
          { icon: '🎁', title: 'Benefits',      desc: 'What we offer our team', to: '/careers/benefits' },
        ],
      },
    ],
  },
};

const NAV = [
  { label: 'Home',     to: '/'                          },
  { label: 'Features', to: '/#features', mega: 'Features' },
  { label: 'Pricing',  to: '/services'                   },
  { label: 'About',    to: '/about',     mega: 'About'    },
  { label: 'Blog',     to: '/blog',      mega: 'Blog'     },
  { label: 'Careers',  to: '/careers',   mega: 'Careers'  },
  { label: 'Contact',  to: '/contact'                    },
];

/* ── Mega panel ──────────────────────────────────────── */
const MegaPanel = ({ data }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 6 }}
    transition={{ duration: 0.18 }}
    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl p-5 z-50 ${data.cols === 2 ? 'w-[520px]' : 'w-[260px]'}`}
  >
    <div className={`grid gap-6 ${data.cols === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
      {data.groups.map(group => (
        <div key={group.heading}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">{group.heading}</p>
          <div className="flex flex-col gap-1">
            {group.items.map(item => (
              <Link key={item.title} to={item.to}
                className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors no-underline group">
                <span className="text-lg mt-0.5 shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 leading-tight">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

/* ── Mobile accordion item ───────────────────────────── */
const MobileNavItem = ({ link, onClose }) => {
  const [open, setOpen] = useState(false);
  const hasMega = !!link.mega;

  if (!hasMega) return (
    <a href={link.href} onClick={onClose}
      className="block py-3 text-sm font-medium text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-900 no-underline">
      {link.label}
    </a>
  );

  return (
    <div className="border-b border-slate-100 dark:border-slate-900">
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex justify-between items-center py-3 text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
        {link.label}
        <ChevronDown open={open} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
            <div className="pb-3 flex flex-col gap-1 pl-2">
              {megas[link.mega].groups.flatMap(g => g.items).map(item => (
                <Link key={item.title} to={item.to} onClick={onClose}
                  className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 no-underline transition-colors">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{item.title}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Main navbar ─────────────────────────────────────── */
const LandingNavbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [scrolled, setScrolled]     = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const leaveTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const openMega  = (key) => { clearTimeout(leaveTimer.current); setActiveMega(key); };
  const closeMega = ()    => { leaveTimer.current = setTimeout(() => setActiveMega(null), 120); };

  return (
    <>
      {/* ── Desktop nav ── */}
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className={`pointer-events-auto flex items-center justify-between gap-4 h-14 px-5 w-full max-w-5xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-black/5'
            : 'bg-white/60 dark:bg-black/60 backdrop-blur-lg border border-slate-200/60 dark:border-slate-800/60 shadow-md shadow-black/5'
        }`}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline shrink-0">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm shadow-blue-600/30">
              V
            </div>
            <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight">Vasera</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 relative" onMouseLeave={closeMega}>
            {NAV.map(link => (
              <div key={link.label} className="relative"
                onMouseEnter={() => link.mega ? openMega(link.mega) : setActiveMega(null)}>
                <Link to={link.to}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                    pathname === link.to || (link.mega && activeMega === link.mega)
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}>
                  {link.label}
                  {link.mega && <ChevronDown open={activeMega === link.mega} />}
                </Link>

                <AnimatePresence>
                  {activeMega === link.mega && link.mega && (
                    <div onMouseEnter={() => openMega(link.mega)} onMouseLeave={closeMega}>
                      <MegaPanel data={megas[link.mega]} />
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Theme toggle */}
            <button onClick={toggleTheme}
              className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={isDark ? 'sun' : 'moon'}
                  initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0,   scale: 1   }}
                  exit={{    opacity: 0, rotate:  60, scale: 0.6 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center justify-center">
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Login */}
            <Link to="/contact" className="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline px-2">
              Log in
            </Link>

            {/* Sign up */}
            <Link to="/contact" className="hidden md:block btn-primary text-sm px-4 py-2 no-underline">
              Get Started
            </Link>

            {/* Hamburger */}
            <button className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
              onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
              <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }}
                className="block w-5 h-0.5 bg-slate-600 dark:bg-slate-400 rounded-full origin-center" />
              <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="block w-5 h-0.5 bg-slate-600 dark:bg-slate-400 rounded-full" />
              <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }}
                className="block w-5 h-0.5 bg-slate-600 dark:bg-slate-400 rounded-full origin-center" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-sm bg-white dark:bg-slate-950 shadow-2xl md:hidden flex flex-col"
            >
              {/* drawer header */}
              <div className="flex items-center justify-between px-5 py-5 border-b border-slate-100 dark:border-slate-800">
                <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 no-underline">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    V
                  </div>
                  <span className="text-base font-bold text-slate-900 dark:text-white">Vasera</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              {/* nav items — staggered */}
              <div className="flex-1 overflow-y-auto px-4 py-3">
                {NAV.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.055, duration: 0.28, ease: 'easeOut' }}
                  >
                    <MobileNavItem link={{ ...link, href: link.to }} onClose={() => setMobileOpen(false)} />
                  </motion.div>
                ))}
              </div>

              {/* auth buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.28 }}
                className="px-4 py-5 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2"
              >
                <Link to="/contact" className="btn-secondary text-center text-sm no-underline" onClick={() => setMobileOpen(false)}>Log in</Link>
                <Link to="/contact" className="btn-primary text-center text-sm no-underline" onClick={() => setMobileOpen(false)}>Get Started</Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingNavbar;
