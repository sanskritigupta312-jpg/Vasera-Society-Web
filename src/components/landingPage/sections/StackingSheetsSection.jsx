import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { CreditCard, ShieldCheck, BarChart3, Users } from 'lucide-react';
import SheetCard from './SheetCard';

/* ─── desktop guard ──────────────────────────────────────────────────────── */
function useIsDesktop(bp = 1024) {
  const [ok, setOk] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= bp : false
  );
  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${bp}px)`);
    const cb = () => setOk(mql.matches);
    mql.addEventListener('change', cb);
    return () => mql.removeEventListener('change', cb);
  }, [bp]);
  return ok;
}

/* ─── accent tokens ──────────────────────────────────────────────────────── */
const ACCENT = {
  blue: {
    pill:    'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800',
    dot:     'bg-blue-500',
    heading: 'text-blue-600 dark:text-blue-400',
  },
  orange: {
    pill:    'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800',
    dot:     'bg-orange-500',
    heading: 'text-orange-500 dark:text-orange-400',
  },
  violet: {
    pill:    'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-300 dark:border-violet-800',
    dot:     'bg-violet-500',
    heading: 'text-violet-600 dark:text-violet-400',
  },
  emerald: {
    pill:    'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
    dot:     'bg-emerald-500',
    heading: 'text-emerald-600 dark:text-emerald-400',
  },
};

/* ─── sheet data ─────────────────────────────────────────────────────────── */
const SHEETS = [
  {
    id: 1, num: '01', label: 'Finance', accent: 'blue',
    title: 'Automate Payroll & Billing',
    sub: 'Zero-effort maintenance collection and vendor payouts. Bills go out automatically, payments come in instantly.',
    lightBg: '#f0f6ff', darkBg: '#0c1526',
    alwaysDark: false,
    Icon: CreditCard,
    /*
     * Desktop layout: left column = heading block, right = cards
     * gridCols controls the right-side card grid
     */
    gridCols: 'grid-cols-1 md:grid-cols-2',
    cards: [
      {
        image: '/society1.jpg',
        spanType: 'wide',
        title: 'For Residents',
        tag: 'Pay Instantly',
        desc: 'Pay maintenance, penalties, and special levies in one tap via UPI, card, or net banking.',
        tint: 'bg-blue-50', tintDark: 'dark:bg-blue-950/40',
      },
      {
        image: '/society2.jpg',
        spanType: 'wide',
        title: 'For Admins',
        tag: 'Full Control',
        desc: 'Bulk-generate invoices, auto-send reminders, and track defaulters with one click.',
        tint: 'bg-sky-50', tintDark: 'dark:bg-sky-950/40',
      },
    ],
  },
  {
    id: 2, num: '02', label: 'Security', accent: 'orange',
    title: 'Secure Your Gate 24 / 7',
    sub: 'OTP-verified entry, digital visitor logs, and real-time resident notifications — all in one platform.',
    lightBg: '#0f172a', darkBg: '#020617',
    alwaysDark: true,
    Icon: ShieldCheck,
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    cards: [
      {
        image: '/society4.jpg',
        spanType: 'default',
        title: 'For Guards',
        tag: 'OTP Entry',
        desc: 'Scan visitor QR codes or send OTP to the resident for instant approval.',
        tint: 'bg-orange-950/40', tintDark: 'dark:bg-orange-950/40',
      },
      {
        image: '/society5.jpg',
        spanType: 'default',
        title: 'Deliveries & Cabs',
        tag: 'Auto Verify',
        desc: 'Swiggy, Amazon, Uber — verified automatically before entry.',
        tint: 'bg-amber-950/40', tintDark: 'dark:bg-amber-950/40',
      },
      {
        image: '/society6.jpg',
        spanType: 'default',
        title: 'For Residents',
        tag: 'Pre-Approve',
        desc: 'Pre-approve expected guests. Block unwanted visitors instantly.',
        tint: 'bg-slate-800', tintDark: 'dark:bg-slate-800',
      },
    ],
  },
  {
    id: 3, num: '03', label: 'Community', accent: 'violet',
    title: 'Connect Your Community',
    sub: 'Digital notices, instant complaints, and seamless facility bookings — community living reimagined.',
    lightBg: '#faf9f6', darkBg: '#1e1b2e',
    alwaysDark: false,
    Icon: Users,
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    cards: [
      {
        image: '/society7.jpg',
        spanType: 'default',
        title: 'Smart Notices',
        tag: 'Instant',
        desc: 'Post announcements to every phone with read receipts. No more bulletin boards.',
        tint: 'bg-violet-50', tintDark: 'dark:bg-violet-950/40',
      },
      {
        image: '/society2.jpg',
        spanType: 'default',
        title: 'Complaint Tickets',
        tag: 'Track Live',
        desc: 'Raise a complaint with a photo. Staff notified instantly, ETAs tracked live.',
        tint: 'bg-purple-50', tintDark: 'dark:bg-purple-950/40',
      },
      {
        image: '/society1.jpg',
        spanType: 'default',
        title: 'Facility Booking',
        tag: 'No Clashes',
        desc: 'Book the clubhouse or pool in seconds. No double-bookings, ever.',
        tint: 'bg-fuchsia-50', tintDark: 'dark:bg-fuchsia-950/40',
      },
    ],
  },
  {
    id: 4, num: '04', label: 'Transparency', accent: 'emerald',
    title: 'Total Financial Clarity',
    sub: 'Every rupee tracked. Every decision documented. Complete trust between residents and committee.',
    lightBg: '#f0f7f4', darkBg: '#0b1f18',
    alwaysDark: false,
    Icon: BarChart3,
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    cards: [
      {
        image: '/society3.jpg',
        spanType: 'default',
        title: 'Live Reports',
        tag: 'Real-Time',
        desc: 'Income, expense, and defaulter lists updated live.',
        tint: 'bg-emerald-50', tintDark: 'dark:bg-emerald-950/40',
      },
      {
        image: '/society2.jpg',
        spanType: 'default',
        title: 'Meeting Minutes',
        tag: 'AGM Ready',
        desc: 'Digital AGM records — searchable, shareable, legally compliant.',
        tint: 'bg-teal-50', tintDark: 'dark:bg-teal-950/40',
      },
      {
        image: '/society1.jpg',
        spanType: 'default',
        title: 'Emergency Alerts',
        tag: '< 5 sec',
        desc: 'Broadcast to every resident instantly. Works even on silent mode.',
        tint: 'bg-green-50', tintDark: 'dark:bg-green-950/40',
      },
      {
        image: '/society4.jpg',
        spanType: 'default',
        title: 'Document Vault',
        tag: 'Secure',
        desc: 'Store bylaws, vendor contracts, and land docs in a role-based vault.',
        tint: 'bg-cyan-50', tintDark: 'dark:bg-cyan-950/40',
      },
    ],
  },
];

const N = SHEETS.length;

/* ─── Progress indicator (desktop only) ─────────────────────────────────── */
function ProgressBar({ scrollProgress }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const unsub = scrollProgress.on('change', v => {
      setActive(Math.min(Math.floor(v * N), N - 1));
    });
    return unsub;
  }, [scrollProgress]);

  return (
    <div className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-2.5">
      {SHEETS.map((sheet, i) => {
        const a = ACCENT[sheet.accent];
        return (
          <div
            key={sheet.id}
            className={`rounded-full transition-all duration-300 ease-out ${
              active === i
                ? `w-1.5 h-7 ${a.dot}`
                : 'w-1.5 h-1.5 bg-slate-300/70 dark:bg-slate-600/70'
            }`}
          />
        );
      })}
    </div>
  );
}

/* ─── Single Sheet ───────────────────────────────────────────────────────── */
function Sheet({ sheet, index, scrollProgress }) {
  const reduced  = useReducedMotion();
  const desktop  = useIsDesktop();
  const stacking = desktop && !reduced;

  const accent = ACCENT[sheet.accent];
  const dark   = sheet.alwaysDark;

  /* Scroll segment for this sheet */
  const segStart  = index / N;
  const segEnd    = Math.min((index + 1) / N, 1);
  /* Exit transition starts at 72% through this sheet's window */
  const exitStart = segStart + 0.72 * (segEnd - segStart);
  const isLast    = index === N - 1;

  /* Only animate non-last sheets shrinking as the next slides on */
  const scale   = useTransform(scrollProgress, [exitStart, segEnd], isLast ? [1, 1] : [1, 0.94]);
  const dimness = useTransform(scrollProgress, [exitStart, segEnd], isLast ? [0, 0] : [0, 0.45]);

  /* text colour tokens */
  const headingCls = dark ? 'text-white'     : 'text-slate-900 dark:text-white';
  const subCls     = dark ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400';
  const labelCls   = dark ? 'text-slate-500' : 'text-slate-400 dark:text-slate-500';
  const borderTop  = dark ? 'border-white/[0.07]' : 'border-slate-200/50 dark:border-slate-700/40';

  const pillCls = dark
    ? 'bg-white/10 text-white/75 border-white/20'
    : accent.pill;

  return (
    <motion.div
      style={stacking ? {
        position: 'sticky',
        top: 0,
        scale,
        transformOrigin: 'top center',
        zIndex: 10 + index,
      } : {
        position: 'relative',
        zIndex: 10 + index,
      }}
      className={`w-full overflow-hidden border-t ${borderTop} ${stacking ? 'min-h-screen' : 'min-h-[auto]'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {dark ? (
          <div className="absolute inset-0" style={{ backgroundColor: sheet.darkBg }} />
        ) : (
          <>
            <div className="absolute inset-0 dark:hidden"       style={{ backgroundColor: sheet.lightBg }} />
            <div className="absolute inset-0 hidden dark:block" style={{ backgroundColor: sheet.darkBg }} />
          </>
        )}
      </div>

      {/* Dim overlay when receding */}
      {stacking && !isLast && (
        <motion.div
          style={{ opacity: dimness }}
          className="absolute inset-0 z-50 bg-black pointer-events-none"
        />
      )}

      {/* ── Sheet content ── */}
      <div className={`relative z-10 flex flex-col px-6 sm:px-10 md:px-14 lg:px-24 xl:px-32 2xl:px-36 py-10 sm:py-12 md:py-14 ${stacking ? 'min-h-screen' : 'py-12 sm:py-14'}`}>

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 md:mb-12 max-w-[1280px] w-full mx-auto">
          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest ${pillCls}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
            {sheet.label}
          </span>
          <span className={`font-mono text-[10px] sm:text-[11px] tabular-nums ${labelCls}`}>
            {sheet.num} / {String(N).padStart(2, '0')}
          </span>
        </div>

        {/* ── Two-column layout on desktop ──────────────────────────
            Left  : heading text (fixed width)
            Right : cards grid (fills remaining space)
        ──────────────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 xl:gap-16 flex-1 items-start max-w-[1280px] w-full mx-auto">

          {/* LEFT: heading */}
          <div className="w-full lg:w-[280px] xl:w-[320px] 2xl:w-[340px] shrink-0 lg:sticky lg:top-16 flex flex-col gap-4">
            <div className={`w-8 h-0.5 rounded-full ${accent.dot}`} />

            <h2 className={`text-2xl sm:text-3xl md:text-4xl xl:text-[42px] font-bold leading-[1.1] tracking-tight ${headingCls}`}>
              {sheet.title}
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed ${subCls}`}>
              {sheet.sub}
            </p>

            {/* Icon watermark */}
            <div className={`mt-4 sm:mt-6 hidden sm:block ${dark ? 'text-white/15' : 'text-slate-900/10 dark:text-white/10'}`}>
              <sheet.Icon size={40} strokeWidth={1.5} />
            </div>
          </div>

          {/* RIGHT: cards grid */}
          <div className={`flex-1 w-full grid gap-3 sm:gap-4 ${sheet.gridCols}`}>
            {sheet.cards.map((card, ci) => (
              <SheetCard
                key={card.title}
                card={card}
                index={ci}
                isDark={dark}
                spanType={card.spanType}
              />
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export default function StackingSheetsSection() {
  const containerRef = useRef(null);
  const reduced = useReducedMotion();
  const desktop = useIsDesktop();
  const stacking = desktop && !reduced;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="relative bg-slate-50 dark:bg-zinc-950">

      {/* Progress dots */}
      {stacking && <ProgressBar scrollProgress={scrollYProgress} />}

      {/* ── Section heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-2xl text-center pt-16 pb-12 sm:pt-20 sm:pb-14 md:pt-28 md:pb-20 px-6"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-400 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Unified Platform
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] sm:leading-[1.05] tracking-tight text-slate-900 dark:text-white mb-5">
          One platform.<br />
          <span className="text-blue-600 dark:text-blue-400">Endless possibilities.</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg mx-auto">
          Discover how Vasera consolidates all your society management needs into beautifully designed modules.
        </p>
        {/* Scroll cue */}
        <div className="mt-10 hidden lg:flex flex-col items-center gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">
            Scroll to explore
          </span>
          <div className="w-px h-7 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-700" />
        </div>
      </motion.div>

      {/* ── Sheets container ──
          Desktop (lg+): height = N × 100vh so each sheet gets a full viewport of dwell,
                         and the sticky/scale-stack effect engages.
          Mobile / tablet (<lg): auto height, no sticky, sheets stack naturally and
                         each one sizes to its own content instead of forcing 100vh.
      ── */}
      <div
        ref={containerRef}
        className="relative"
        style={stacking ? { height: `${N * 100}vh` } : undefined}
      >
        {SHEETS.map((sheet, index) => (
          <Sheet
            key={sheet.id}
            sheet={sheet}
            index={index}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
