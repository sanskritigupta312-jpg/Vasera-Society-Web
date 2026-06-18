import { motion, useReducedMotion } from 'framer-motion';

/**
 * SheetCard — Razorpay-exact pattern
 *
 * Layout:
 *   • Full-bleed image fills the entire card top (no tint bg showing)
 *   • Tag pill floats over the image, bottom-left corner
 *   • Clean white (or dark) text panel below: title + description
 *   • No visible border — soft shadow only
 *
 * spanType:
 *   'default' – image top / text bottom (standard)
 *   'wide'    – image left / text right (for 2-card rows). Switches to the
 *               side-by-side layout at `md` rather than `sm` so the card
 *               never has to squeeze image+text into a too-narrow column
 *               on small tablets / large phones.
 *
 * isDark – parent sheet uses dark palette
 */
const SheetCard = ({ card, index, isDark, spanType = 'default' }) => {
  const reduced = useReducedMotion();

  /* ── card surface ── */
  const cardBg = isDark
    ? 'bg-[rgba(255,255,255,0.06)]'
    : 'bg-white dark:bg-slate-800/70';

  const shadow = isDark
    ? 'shadow-[0_4px_28px_rgba(0,0,0,0.4)]'
    : 'shadow-[0_2px_16px_rgba(15,23,42,0.07)] hover:shadow-[0_8px_36px_rgba(15,23,42,0.12)]';

  /* ── tag pill ── */
  const tagCls = isDark
    ? 'bg-black/50 text-white/85 backdrop-blur-sm'
    : 'bg-white/90 text-slate-700 backdrop-blur-sm';

  /* ── text ── */
  const titleCls = isDark ? 'text-white'    : 'text-slate-900 dark:text-white';
  const descCls  = isDark ? 'text-white/50' : 'text-slate-500 dark:text-slate-400';

  /* ── WIDE card: image left, text right (from md up) ── */
  if (spanType === 'wide') {
    return (
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, delay: 0.08 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative flex flex-col md:flex-row overflow-hidden rounded-2xl transition-all duration-300 ${cardBg} ${shadow}`}
      >
        {/* Image — left half */}
        <div className="relative flex-shrink-0 w-full md:w-[48%] lg:w-[52%] h-44 sm:h-52 md:h-auto overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          {/* Tag over image */}
          {card.tag && (
            <span className={`absolute bottom-3 left-3 z-10 inline-block rounded-lg px-2.5 py-1 text-[11px] font-semibold leading-none ${tagCls}`}>
              {card.tag}
            </span>
          )}
        </div>

        {/* Text — right panel */}
        <div className={`flex flex-col justify-center gap-2.5 p-5 sm:p-6 md:p-7 ${isDark ? '' : 'bg-white dark:bg-slate-800/70'}`}>
          <h3 className={`text-base sm:text-[17px] md:text-lg font-bold leading-snug tracking-tight ${titleCls}`}>
            {card.title}
          </h3>
          <p className={`text-[13px] leading-relaxed ${descCls}`}>
            {card.desc}
          </p>
        </div>
      </motion.div>
    );
  }

  /* ── DEFAULT: full-bleed image top, tag over image, text below ── */
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, delay: 0.08 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ${cardBg} ${shadow}`}
    >
      {/* ── Image zone: fills top ~58% of card ── */}
      <div className="relative overflow-hidden h-40 sm:h-44 md:h-[195px]">
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Tag pill — floats over image, bottom-left, exactly like Razorpay */}
        {card.tag && (
          <span className={`absolute bottom-3 left-3 z-10 inline-block rounded-lg px-2.5 py-1 text-[11px] font-semibold leading-none ${tagCls}`}>
            {card.tag}
          </span>
        )}
      </div>

      {/* ── Text zone: clean white panel ── */}
      <div className={`flex flex-col gap-2 px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 flex-1 ${isDark ? '' : 'bg-white dark:bg-slate-800/70'}`}>
        <h3 className={`text-sm sm:text-[15.5px] font-bold leading-snug tracking-tight ${titleCls}`}>
          {card.title}
        </h3>
        <p className={`text-[13px] leading-relaxed ${descCls}`}>
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default SheetCard;