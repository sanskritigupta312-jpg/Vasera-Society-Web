import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingNavbar from './landingPage/sections/LandingNavbar';
import FooterSection from './landingPage/sections/FooterSection';

const Layout = () => {
  const { pathname } = useLocation();

  // scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black overflow-x-hidden">
      <LandingNavbar />
      {/* page content */}
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
};

export default Layout;
