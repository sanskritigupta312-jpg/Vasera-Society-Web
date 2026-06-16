import { motion } from 'framer-motion';
import { Sheet } from '../../elements/SheetContainer';

const roles = [
  {
    icon: '🏢', title: 'Society Admin',
    color: 'from-blue-500 to-blue-600',
    perks: ['Full member & unit control', 'Billing & payment oversight', 'Notices & announcements', 'Committee management'],
    desc: 'Full control over society, members, and billing.',
  },
  {
    icon: '🏠', title: 'Flat Owner (Makan Malik)',
    color: 'from-cyan-500 to-cyan-600',
    perks: ['Monitor flat maintenance', 'Vote in society meetings', 'Manage tenant approvals', 'Access financial reports'],
    desc: 'Complete control over your flat. Pay bills, manage tenants, and participate.',
  },
  {
    icon: '🔑', title: 'Tenant (Kirayadar)',
    color: 'from-fuchsia-500 to-fuchsia-600',
    perks: ['Pay rent & maintenance', 'Book facilities instantly', 'Raise & track complaints', 'Receive real-time alerts'],
    desc: 'Enjoy hassle-free living. Book amenities, raise tickets, and stay updated.',
  },
  {
    icon: '👤', title: 'Resident',
    color: 'from-emerald-500 to-emerald-600',
    perks: ['Pay maintenance online', 'Book facilities instantly', 'Raise & track complaints', 'Receive real-time alerts'],
    desc: 'Pay bills, book facilities, and raise tickets.',
  },
  {
    icon: '🛡️', title: 'Guard',
    color: 'from-orange-500 to-orange-600',
    perks: ['QR-scan visitor entry', 'OTP verification', 'Vehicle & delivery logs', 'Emergency alerts'],
    desc: 'Visitor tracking with QR scanning & alerts.',
  },
  {
    icon: '📊', title: 'Accountant',
    color: 'from-violet-500 to-violet-600',
    perks: ['Income & expense tracking', 'Defaulter reports', 'One-click audit exports', 'Bank reconciliation'],
    desc: 'Manage finances, reports, and audits.',
  },
  {
    icon: '👑', title: 'Super Admin',
    color: 'from-rose-500 to-rose-600',
    perks: ['Manage multiple societies', 'Platform-wide analytics', 'Subscription management', 'Priority support access'],
    desc: 'Platform owner managing all societies.',
  },
  {
    icon: '🔧', title: 'Staff',
    color: 'from-amber-500 to-amber-600',
    perks: ['Receive assigned tickets', 'Update resolution status', 'Photo upload on closure', 'Work history log'],
    desc: 'Maintenance staff for ticket resolution.',
  },
];

const RolesSection = () => (
  <Sheet id="roles" className="bg-white dark:bg-black py-24 overflow-hidden">
    {/* subtle bg pattern */}
    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
      style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

    <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55 }}
        className="max-w-xl mb-14">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
          For Everyone
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
          Designed for Every Role
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          Whether you're an Admin, Resident, or Guard, Vasera empowers you with tailored tools.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {roles.map((r, i) => (
          <motion.div key={r.title}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
            className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 hover:shadow-lg hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300 group">
            {/* icon */}
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center text-2xl mb-5 shadow-sm`}>
              {r.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{r.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{r.desc}</p>
            {/* perks */}
            <ul className="flex flex-col gap-2">
              {r.perks.map(p => (
                <li key={p} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </Sheet>
);

export default RolesSection;
