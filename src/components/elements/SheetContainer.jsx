import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SHEETS = [
  { id: 'overview',      label: 'Overview'      },
  { id: 'features',      label: 'Features'      },
  { id: 'roles',         label: 'For Everyone'  },
  { id: 'how-it-works',  label: 'How It Works'  },
  { id: 'testimonials',  label: 'Testimonials'  },
  { id: 'cta',           label: 'Get Started'   },
];

/* ── tiny dot nav ─────────────────────────────────────── */
const SheetNav = ({ active }) => (
  <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
    {SHEETS.map(s => (
      <button
        key={s.id}
        onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
        className="group flex items-center gap-2 cursor-pointer"
        title={s.label}
      >
        <AnimatePresence>
          {active === s.id && (
            <motion.span
              initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }}
              className="text-[11px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap"
            >
              {s.label}
            </motion.span>
          )}
        </AnimatePresence>
        <span className={`block rounded-full transition-all duration-300 ${
          active === s.id
            ? 'w-2.5 h-2.5 bg-blue-600'
            : 'w-1.5 h-1.5 bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-400'
        }`} />
      </button>
    ))}
  </div>
);

/* ── sheet wrapper ─────────────────────────────────────── */
export const Sheet = ({ id, children, className = '' }) => (
  <section
    id={id}
    data-sheet
    className={`w-full relative flex flex-col justify-center ${className}`}
  >
    {children}
  </section>
);

/* ── main container ────────────────────────────────────── */
const SheetContainer = ({ children }) => {
  const [active, setActive] = useState(SHEETS[0].id);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll('[data-sheet]').forEach(el => observer.current.observe(el));
    return () => observer.current?.disconnect();
  }, []);

  return (
    <>
      <SheetNav active={active} />
      {children}
    </>
  );
};

export default SheetContainer;
