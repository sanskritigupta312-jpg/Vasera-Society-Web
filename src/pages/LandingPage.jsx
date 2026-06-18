import ParticleCanvas from '../components/elements/ParticleCanvas';
import StatsSection from '../components/landingPage/sections/StatsSection';
import HeroSection from '../components/landingPage/sections/HeroSection';
import FeaturesSection from '../components/landingPage/sections/FeaturesSection';
import StackingSheetsSection from '../components/landingPage/sections/StackingSheetsSection';
import RolesSection from '../components/landingPage/sections/RolesSection';
import HowItWorksSection from '../components/landingPage/sections/HowItWorksSection';
import TestimonialsSection from '../components/landingPage/sections/TestimonialsSection';
import FAQSection from '../components/landingPage/sections/FAQSection';
import CTASection from '../components/landingPage/sections/CTASection';

/*
 * ─── IMPORTANT — READ BEFORE CHANGING THE WRAPPER DIV ───────────────────────
 *
 *  The stacking sheets use  position: sticky; top: 0  on each sheet.
 *  For sticky to work the scroll must happen on the DOCUMENT (body/html),
 *  not on a child element.
 *
 *  These two things BREAK sticky and must NEVER appear on this div
 *  or any ancestor wrapper (App.jsx, router outlet, layout shell, etc.):
 *
 *    ✗  overflow: hidden
 *    ✗  overflow: auto   (or overflow-x/y: hidden / auto)
 *    ✗  Tailwind: overflow-hidden, overflow-x-hidden, overflow-y-auto …
 *
 *  The safe alternative for hiding horizontal overflow WITHOUT breaking sticky:
 *    ✓  style={{ overflowX: 'clip' }}   ← does NOT create a scroll container
 *
 *  Also check: index.html <body>, main.jsx root div, any layout component.
 * ────────────────────────────────────────────────────────────────────────────
 */
const LandingPage = () => (
  <div
    className="relative"
    style={{ overflowX: 'clip' }}
  >
    <ParticleCanvas />
    <StatsSection />
    <HeroSection />
    <FeaturesSection />
    <div className='lg:m-20 m-4'><StackingSheetsSection /></div>
    <RolesSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <FAQSection />
    <CTASection />

    {/* floating CTA — hidden on lg and above */}
    <div className="fixed bottom-5 font-thin left-1/2 -translate-x-1/2 z-50 lg:hidden">
      <a
        href="#cta"
        className="flex items-center gap-2 px-12 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold shadow-lg shadow-blue-600/40 transition-all duration-200 whitespace-nowrap no-underline"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <line x1="19" y1="8" x2="19" y2="14"/>
          <line x1="22" y1="11" x2="16" y2="11"/>
        </svg>
        Get Started Free
      </a>
    </div>
  </div>
);

export default LandingPage;
