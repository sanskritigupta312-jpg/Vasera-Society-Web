import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Careers from './pages/Careers';

// Mega Menu Pages
import * as FeaturesPages from './pages/mega/FeaturesPages';
import * as AboutPages from './pages/mega/AboutPages';
import * as BlogPages from './pages/mega/BlogPages';
import * as CareersPages from './pages/mega/CareersPages';

const App = () => (
  <ThemeProvider>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/"         element={<LandingPage />} />
        <Route path="/about"    element={<About />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog"     element={<Blog />} />
        <Route path="/careers"  element={<Careers />} />

        {/* Features Mega Pages */}
        <Route path="/features/automated-billing" element={<FeaturesPages.AutomatedBilling />} />
        <Route path="/features/visitor-management" element={<FeaturesPages.VisitorManagement />} />
        <Route path="/features/complaint-redressal" element={<FeaturesPages.ComplaintRedressal />} />
        <Route path="/features/financial-reports" element={<FeaturesPages.FinancialReports />} />
        <Route path="/features/smart-notices" element={<FeaturesPages.SmartNotices />} />
        <Route path="/features/facility-booking" element={<FeaturesPages.FacilityBooking />} />
        <Route path="/features/emergency-alerts" element={<FeaturesPages.EmergencyAlerts />} />
        <Route path="/features/meeting-minutes" element={<FeaturesPages.MeetingMinutes />} />

        {/* About Mega Pages */}
        <Route path="/about/our-story" element={<AboutPages.OurStory />} />
        <Route path="/about/the-team" element={<AboutPages.TheTeam />} />
        <Route path="/about/mission" element={<AboutPages.Mission />} />
        <Route path="/about/awards" element={<AboutPages.Awards />} />

        {/* Blog Mega Pages */}
        <Route path="/blog/latest-articles" element={<BlogPages.LatestArticles />} />
        <Route path="/blog/video-tutorials" element={<BlogPages.VideoTutorials />} />
        <Route path="/blog/case-studies" element={<BlogPages.CaseStudies />} />
        <Route path="/blog/newsletter" element={<BlogPages.Newsletter />} />

        {/* Careers Mega Pages */}
        <Route path="/careers/open-roles" element={<CareersPages.OpenRoles />} />
        <Route path="/careers/culture" element={<CareersPages.Culture />} />
        <Route path="/careers/internships" element={<CareersPages.Internships />} />
        <Route path="/careers/benefits" element={<CareersPages.Benefits />} />
      </Route>
    </Routes>
  </ThemeProvider>
);

export default App;