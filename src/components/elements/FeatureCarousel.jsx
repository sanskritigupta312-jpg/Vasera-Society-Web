const features = [
  {
    image: '/feat1.jpg',
    icon: '💰',
    tag: 'Finance',
    title: 'Automated Billing',
    desc: 'Generate maintenance bills automatically every month. Send reminders via SMS & Email. Residents pay online in seconds.',
    stat: '98% collection rate',
  },
  {
    image: '/feat2.jpg',
    icon: '🔐',
    tag: 'Security',
    title: 'Visitor Management',
    desc: 'Secure your gate with OTP-based visitor approval. Track every entry — guests, delivery agents, and cabs — in real time.',
    stat: '100% gate visibility',
  },
  {
    image: '/feat3.jpg',
    icon: '🛠️',
    tag: 'Maintenance',
    title: 'Complaint Redressal',
    desc: 'Residents raise tickets in one tap. Assign to staff, track status, and close — all with automatic notifications.',
    stat: 'Avg. resolved in 6 hrs',
  },
  {
    image: '/feat4.jpg',
    icon: '📈',
    tag: 'Transparency',
    title: 'Financial Reports',
    desc: 'View income, expenses, defaulters, and audit trails in one click. Share reports with committee members instantly.',
    stat: 'Full audit trail',
  },
  {
    image: '/feat5.jpg',
    icon: '🔔',
    tag: 'Communication',
    title: 'Smart Notices',
    desc: 'Stop printing paper notices. Publish announcements to every resident\'s phone instantly — with read receipts.',
    stat: '3x faster reach',
  },
  {
    image: '/feat6.jpg',
    icon: '🗓️',
    tag: 'Amenities',
    title: 'Facility Booking',
    desc: 'Let residents book the clubhouse, pool, or tennis court from the app. No clashes, no calls, no confusion.',
    stat: 'Zero double bookings',
  },
  {
    image: '/feat7.jpg',
    icon: '🚨',
    tag: 'Safety',
    title: 'Emergency Alerts',
    desc: 'Broadcast urgent notifications to all residents instantly — fire drills, power cuts, water supply updates.',
    stat: 'Delivered in < 5 sec',
  },
  {
    image: '/feat8.jpg',
    icon: '📝',
    tag: 'Governance',
    title: 'Meeting Minutes',
    desc: 'Record AGM and committee meeting minutes digitally. Share with all residents and archive for compliance.',
    stat: '100% paperless',
  },
];

const items = [...features, ...features];

const FeatureCarousel = () => (
  <div className="w-screen relative overflow-hidden">
    {/* left fade */}
    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
    {/* right fade */}
    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

    <div className="flex gap-5 animate-scroll w-max px-8 hover:[animation-play-state:paused]">
      {items.map((f, i) => (
        <div key={i} className="relative w-72 rounded-3xl overflow-hidden shrink-0 shadow-md group" style={{ height: '400px' }}>
          {/* bg image */}
          <img src={f.image} alt={f.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

          {/* tag top-left */}
          <div className="absolute top-4 left-4 bg-blue-600/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg">
            {f.tag}
          </div>

          {/* icon top-right */}
          <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-lg">
            {f.icon}
          </div>

          {/* stat badge — middle */}
          <div className="absolute top-[67%] left-4 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            ✦ {f.stat}
          </div>

          {/* bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-white font-bold text-lg leading-tight mb-2">{f.title}</h3>
            <p className="text-white/65 text-xs leading-relaxed">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCarousel;
