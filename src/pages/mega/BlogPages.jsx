import MegaPageTemplate from '../../components/elements/MegaPageTemplate';
import { ContentBlock } from '../../components/elements/ContentBlock';

export const LatestArticles = () => (
  <MegaPageTemplate 
    category="Resources" icon="📝" title="Latest Articles" 
    subtitle="Actionable tips and deep dives on modern society management."
    image="/society5.jpg"
  >
    <ContentBlock
      title="Learn from the experts."
      text="Our editorial team regularly publishes comprehensive guides, legal compliance updates, and best practices for managing large residential complexes. From increasing maintenance collection rates to handling resident disputes, we cover it all."
      emoji="📚"
      points={[
        "Weekly publications on society governance.",
        "Guest posts from veteran society treasurers and secretaries.",
        "Deep dives into RWA bylaws and legal compliance."
      ]}
    />
  </MegaPageTemplate>
);

export const VideoTutorials = () => (
  <MegaPageTemplate 
    category="Resources" icon="🎥" title="Video Tutorials" 
    subtitle="Step-by-step walkthroughs to help you master every Vasera feature."
    image="/society6.jpg"
  >
    <ContentBlock
      title="Watch and learn."
      text="Prefer visual learning? Our comprehensive library of short, actionable video tutorials will guide you through everything from setting up your society's ledger to configuring complex visitor rules."
      emoji="▶️"
      points={[
        "Short 2-minute feature highlight videos.",
        "Long-form webinars on accounting and security.",
        "Available in multiple regional languages.",
        "Dedicated onboarding playlist for new committee members."
      ]}
    />
  </MegaPageTemplate>
);

export const CaseStudies = () => (
  <MegaPageTemplate 
    category="Resources" icon="📦" title="Case Studies" 
    subtitle="Real stories from real societies that transformed their operations with us."
    image="/society7.jpg"
  >
    <ContentBlock
      title="Success stories from your peers."
      text="Read how societies across India have digitized their operations, improved security, and boosted resident satisfaction using Vasera. We break down their specific challenges and the exact solutions we implemented."
      emoji="📊"
      points={[
        "Metrics-driven results (e.g., 'How Society X reached 99% collection').",
        "Interviews with committee members and guards.",
        "Before-and-after operational comparisons."
      ]}
    />
  </MegaPageTemplate>
);

export const Newsletter = () => (
  <MegaPageTemplate 
    category="Resources" icon="🗞️" title="Vasera Newsletter" 
    subtitle="Get our monthly digest of product updates and community insights in your inbox."
    image="/society1.jpg"
  >
    <ContentBlock
      title="Stay ahead of the curve."
      text="Join thousands of property managers and committee members who receive our monthly newsletter. We curate the most important industry news, highlight our latest product features, and share actionable tips for better community living."
      emoji="✉️"
      points={[
        "Zero spam, sent only once a month.",
        "Exclusive early access to beta features.",
        "Curated reads from the prop-tech industry."
      ]}
    />
  </MegaPageTemplate>
);
