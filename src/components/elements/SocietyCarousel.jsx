const societies = [
  {
    image: '/society1.jpg',
    name: 'Sunshine Heights',
    location: 'Pune, Maharashtra',
    units: '320 units',
    rating: '4.9★',
    tag: 'Premium',
  },
  {
    image: '/society2.jpg',
    name: 'Greenview Apartments',
    location: 'Bengaluru, Karnataka',
    units: '210 units',
    rating: '4.8★',
    tag: 'Eco-Friendly',
  },
  {
    image: '/society3.jpg',
    name: 'Lakeview Society',
    location: 'Mumbai, Maharashtra',
    units: '480 units',
    rating: '4.7★',
    tag: 'Waterfront',
  },
  {
    image: '/society4.jpg',
    name: 'Palm Grove Residency',
    location: 'Hyderabad, Telangana',
    units: '150 units',
    rating: '4.7★',
    tag: 'Luxury',
  },
  {
    image: '/society5.jpg',
    name: 'Skyline Towers',
    location: 'Chennai, Tamil Nadu',
    units: '560 units',
    rating: '4.9★',
    tag: 'High-Rise',
  },
  {
    image: '/society6.jpg',
    name: 'Cedarwood Complex',
    location: 'Delhi, NCR',
    units: '390 units',
    rating: '4.8★',
    tag: 'Smart',
  },
  {
    image: '/society7.jpg',
    name: 'Maple Heights',
    location: 'Ahmedabad, Gujarat',
    units: '275 units',
    rating: '4.6★',
    tag: 'Family',
  },
];

const SocietyCard = ({ image, name, location, units, rating, tag }) => (
  <div className="relative w-60 lg:w-80 h-76 rounded-2xl overflow-hidden shrink-0 shadow-sm group" style={{ height: '304px' }}>
    <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

    {/* tag top-left */}
    <div className="absolute top-3 left-3 bg-blue-600/80 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md">
      {tag}
    </div>

    {/* rating top-right */}
    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-yellow-300 text-xs font-bold px-2 py-0.5 rounded-md">
      {rating}
    </div>

    {/* bottom info */}
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <h3 className="text-white font-semibold text-sm leading-tight">{name}</h3>
      <p className="text-white/55 text-xs mt-0.5">📍 {location}</p>
      <div className="mt-2 flex items-center gap-1.5">
        <span className="text-[10px] bg-white/15 text-white/80 px-2 py-0.5 rounded-full">🏠 {units}</span>
      </div>
    </div>
  </div>
);

const items = [...societies, ...societies];

const SocietyCarousel = () => (
  <div className="w-screen relative">
    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />
    <div className="overflow-hidden">
      <div className="flex gap-4 animate-scroll w-max px-6 hover:[animation-play-state:paused]">
        {items.map((s, i) => <SocietyCard key={i} {...s} />)}
      </div>
    </div>
  </div>
);

export default SocietyCarousel;
