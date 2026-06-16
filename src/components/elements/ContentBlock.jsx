export const ContentBlock = ({ title, text, points, reversed, emoji }) => (
  <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center py-16`}>
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">{text}</p>
      {points && (
        <ul className="space-y-4">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 text-xs">✓</div>
              <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className="flex-1 w-full relative group">
       <div className="aspect-[4/3] rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:border-blue-200 dark:group-hover:border-blue-800">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 group-hover:from-blue-500/10 group-hover:to-violet-500/10 transition-colors duration-500" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          <div className="relative text-7xl transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">{emoji || '✨'}</div>
       </div>
    </div>
  </div>
);
