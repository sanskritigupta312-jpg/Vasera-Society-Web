import MegaPageTemplate from '../../components/elements/MegaPageTemplate';
import { ContentBlock } from '../../components/elements/ContentBlock';

export const OpenRoles = () => (
  <MegaPageTemplate 
    category="Join Us" icon="💼" title="Open Roles" 
    subtitle="Explore open positions across engineering, design, sales, and operations."
    image="/society2.jpg"
  >
    <ContentBlock
      title="Build the future of communities."
      text="We are always looking for driven, empathetic, and exceptionally talented individuals to join our mission. Whether you write code, design interfaces, or close deals, there's a place for you at Vasera."
      emoji="🚀"
      points={[
        "Engineering: Frontend, Backend, Mobile, and DevOps.",
        "Design: Product Design and User Research.",
        "Growth: Sales, Marketing, and Community Management.",
        "Operations: Customer Success and Onboarding."
      ]}
    />
  </MegaPageTemplate>
);

export const Culture = () => (
  <MegaPageTemplate 
    category="Join Us" icon="🌱" title="Our Culture" 
    subtitle="How we work, what we value, and why you'll love building here."
    image="/society3.jpg"
  >
    <ContentBlock
      title="Autonomy and ownership."
      text="We don't believe in micromanagement. We hire smart people and give them the tools, context, and freedom to do the best work of their careers. We value transparency, extreme ownership, and a bias for action."
      emoji="🧠"
      points={[
        "Async-first communication to respect deep work.",
        "Transparent salaries and company financials.",
        "Weekly town halls to share progress and blockers."
      ]}
    />
    <ContentBlock
      title="Continuous learning."
      text="We are a team of lifelong learners. We actively encourage our team members to explore new technologies, attend conferences, and share their knowledge with the rest of the company."
      emoji="📚"
      reversed
      points={[
        "Dedicated budget for books and courses.",
        "Monthly 'Show and Tell' sessions.",
        "Mentorship programs for junior team members."
      ]}
    />
  </MegaPageTemplate>
);

export const Internships = () => (
  <MegaPageTemplate 
    category="Join Us" icon="🎓" title="Internships" 
    subtitle="Kickstart your career with hands-on experience and mentorship."
    image="/society4.jpg"
  >
    <ContentBlock
      title="Real work, real impact."
      text="Our internships aren't about fetching coffee. As an intern at Vasera, you will ship production code, design real features, or close actual deals. You will be paired with a senior mentor who will guide you every step of the way."
      emoji="💻"
      points={[
        "6-month paid internship programs.",
        "Opportunity for full-time conversion based on performance.",
        "Hands-on experience with modern tech stacks."
      ]}
    />
  </MegaPageTemplate>
);

export const Benefits = () => (
  <MegaPageTemplate 
    category="Join Us" icon="💰" title="Benefits & Perks" 
    subtitle="From remote work to ESOPs—we take care of our team."
    image="/society5.jpg"
  >
    <ContentBlock
      title="Comprehensive care."
      text="We know that you can only do your best work when you're healthy, happy, and financially secure. Our benefits package is designed to support you holistically."
      emoji="🏥"
      points={[
        "Top-tier health insurance for you and your dependents.",
        "Generous equity (ESOPs) so you own what you build.",
        "Flexible paid time off—take the rest you need.",
        "Home office setup allowance for remote workers."
      ]}
    />
  </MegaPageTemplate>
);
