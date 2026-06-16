import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const societies = [
  {
    image: '/society1.jpg',
    name: 'Sunshine Heights',
    location: 'Pune, Maharashtra',
    tag: 'Premium Gated Society',
    established: 'Est. 2015',
    chips: [
      { pos: 'top-4 left-4',    icon: '🏠', label: 'Total Units',     value: '320' },
      { pos: 'top-4 right-4',   icon: '⭐', label: 'Resident Rating', value: '4.9 / 5' },
      { pos: 'bottom-24 left-4',icon: '💳', label: 'Due Collection',  value: '98%' },
      { pos: 'bottom-24 right-4',icon: '🚪',label: 'Daily Visitors',  value: '85' },
    ],
  },
  {
    image: '/society2.jpg',
    name: 'Greenview Apartments',
    location: 'Bengaluru, Karnataka',
    tag: 'Eco-Friendly Complex',
    established: 'Est. 2018',
    chips: [
      { pos: 'top-4 left-4',    icon: '🏠', label: 'Total Units',     value: '210' },
      { pos: 'top-4 right-4',   icon: '🌿', label: 'Green Score',     value: 'A+' },
      { pos: 'bottom-24 left-4',icon: '👥', label: 'Residents',       value: '840' },
      { pos: 'bottom-24 right-4',icon: '🎉',label: 'Events / month',  value: '8' },
    ],
  },
  {
    image: '/society3.jpg',
    name: 'Lakeview Society',
    location: 'Mumbai, Maharashtra',
    tag: 'Waterfront Community',
    established: 'Est. 2011',
    chips: [
      { pos: 'top-4 left-4',    icon: '🏠', label: 'Total Units',     value: '480' },
      { pos: 'top-4 right-4',   icon: '🚪', label: 'Visitors / day',  value: '120' },
      { pos: 'bottom-24 left-4',icon: '🔧', label: 'Open Tickets',    value: '3' },
      { pos: 'bottom-24 right-4',icon: '💳',label: 'Collection Rate', value: '96%' },
    ],
  },
  {
    image: '/society4.jpg',
    name: 'Palm Grove Residency',
    location: 'Hyderabad, Telangana',
    tag: 'Luxury Township',
    established: 'Est. 2019',
    chips: [
      { pos: 'top-4 left-4',    icon: '🏠', label: 'Total Units',     value: '150' },
      { pos: 'top-4 right-4',   icon: '⭐', label: 'Resident Rating', value: '4.7 / 5' },
      { pos: 'bottom-24 left-4',icon: '🎉', label: 'Events / month',  value: '6' },
      { pos: 'bottom-24 right-4',icon: '👥',label: 'Residents',       value: '580' },
    ],
  },
  {
    image: '/society5.jpg',
    name: 'Skyline Towers',
    location: 'Chennai, Tamil Nadu',
    tag: 'High-Rise Complex',
    established: 'Est. 2013',
    chips: [
      { pos: 'top-4 left-4',    icon: '🏠', label: 'Total Units',     value: '560' },
      { pos: 'top-4 right-4',   icon: '💳', label: 'Collection Rate', value: '97%' },
      { pos: 'bottom-24 left-4',icon: '👥', label: 'Residents',       value: '2,100' },
      { pos: 'bottom-24 right-4',icon: '🔧',label: 'Resolved Tickets','value': '100%' },
    ],
  },
  {
    image: '/society6.jpg',
    name: 'Cedarwood Complex',
    location: 'Delhi, NCR',
    tag: 'Smart Society',
    established: 'Est. 2016',
    chips: [
      { pos: 'top-4 left-4',    icon: '🏠', label: 'Total Units',     value: '390' },
      { pos: 'top-4 right-4',   icon: '⭐', label: 'Resident Rating', value: '4.8 / 5' },
      { pos: 'bottom-24 left-4',icon: '🚨', label: 'Active Alerts',   value: '0' },
      { pos: 'bottom-24 right-4',icon: '🚪',label: 'Daily Visitors',  value: '95' },
    ],
  },
  {
    image: '/society7.jpg',
    name: 'Maple Heights',
    location: 'Ahmedabad, Gujarat',
    tag: 'Family Community',
    established: 'Est. 2020',
    chips: [
      { pos: 'top-4 left-4',    icon: '🏠', label: 'Total Units',     value: '275' },
      { pos: 'top-4 right-4',   icon: '🔧', label: 'Ticket Resolution','value': '100%' },
      { pos: 'bottom-24 left-4',icon: '🎉', label: 'Events / month',  value: '4' },
      { pos: 'bottom-24 right-4',icon: '💳',label: 'Collection Rate', value: '95%' },
    ],
  },
];

const Chip = ({ icon, label, value, pos }) => (
  <div className={`absolute ${pos} flex items-center gap-2 bg-black/55 backdrop-blur-md text-white rounded-xl px-3 py-2 text-xs font-medium shadow-lg border border-white/10`}>
    <span className="text-base">{icon}</span>
    <div className="leading-tight">
      <div className="text-white/50 text-[10px] uppercase tracking-wide">{label}</div>
      <div className="font-bold text-sm">{value}</div>
    </div>
  </div>
);

const SocietySlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [dir, setDir] = useState(1);
  const timerRef = useRef(null);
  const total = societies.length;

  const goTo = (index, direction) => {
    const next = (index + total) % total;
    setDir(direction);
    setPrev(current);
    setCurrent(next);
  };

  const goPrev = () => goTo(current - 1, -1);
  const goNext = () => goTo(current + 1, 1);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goTo(current + 1, 1), 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(current + 1, 1), 5000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const s = societies[current];

  return (
    <div className="relative w-full mx-auto rounded-3xl overflow-hidden shadow-xl" style={{ height: '480px' }}>

      {/* slides */}
      <AnimatePresence initial={false} custom={dir}>
        <motion.div key={current} custom={dir}
          variants={{
            enter: d => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
            center:    { x: 0, opacity: 1 },
            exit:  d => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
          }}
          initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          className="absolute inset-0">

          <img src={s.image} alt={s.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25" />

          {/* chips */}
          {s.chips.map((chip, i) => <Chip key={i} {...chip} />)}

          {/* bottom info */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-blue-300 mb-1">
              {s.tag} · {s.established}
            </span>
            <h3 className="text-white text-2xl font-bold leading-tight">{s.name}</h3>
            <p className="text-white/60 text-sm mt-0.5">📍 {s.location}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* prev button */}
      <button onClick={() => { goPrev(); resetTimer(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/65 backdrop-blur-sm text-white text-xl flex items-center justify-center transition-colors cursor-pointer border border-white/10">
        ‹
      </button>

      {/* next button */}
      <button onClick={() => { goNext(); resetTimer(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/65 backdrop-blur-sm text-white text-xl flex items-center justify-center transition-colors cursor-pointer border border-white/10">
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-5 right-6 z-10 flex gap-1.5 items-center">
        {societies.map((_, i) => (
          <button key={i} onClick={() => { goTo(i, i > current ? 1 : -1); resetTimer(); }}
            className={`rounded-full transition-all duration-300 cursor-pointer ${i === current ? 'w-6 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/35 hover:bg-white/60'}`}
          />
        ))}
      </div>

      {/* counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/40 backdrop-blur-sm text-white/70 text-xs px-3 py-1 rounded-full border border-white/10">
        {current + 1} / {total}
      </div>
    </div>
  );
};

export default SocietySlideshow;
