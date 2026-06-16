import MegaPageTemplate from '../../components/elements/MegaPageTemplate';
import { ContentBlock } from '../../components/elements/ContentBlock';

export const OurStory = () => (
  <MegaPageTemplate 
    category="Company" icon="🏢" title="Our Story" 
    subtitle="Discover how Vasera started from a single idea to managing hundreds of societies."
    image="/society1.jpg"
  >
    <ContentBlock
      title="Born out of frustration."
      text="In 2022, our founders lived in a society where paying maintenance involved writing cheques and chasing the treasurer. Visitor logs were torn paper registers. We realized that while our workplaces were digitized, our homes were stuck in the 90s. We built Vasera to fix this."
      emoji="💡"
      points={[
        "Founded in Raipur, Chhattisgarh.",
        "First prototype built in just 4 weeks.",
        "Bootstrapped for the first year of operations."
      ]}
    />
    <ContentBlock
      title="Scaling nationwide."
      text="What started as a tool for one society quickly spread via word of mouth. Today, we process millions in transactions monthly and secure thousands of gates across India."
      emoji="🚀"
      reversed
      points={[
        "Managing over 50,000+ residents daily.",
        "Backed by top-tier venture capital.",
        "A growing team of 40+ dedicated professionals."
      ]}
    />
  </MegaPageTemplate>
);

export const TheTeam = () => (
  <MegaPageTemplate 
    category="Company" icon="👥" title="The Team" 
    subtitle="Meet the passionate engineers, designers, and operators building Vasera."
    image="/society2.jpg"
  >
    <ContentBlock
      title="Builders and problem solvers."
      text="We are a diverse group of technologists, customer success champions, and operational experts. Our leadership team brings decades of experience from top tech companies and real estate firms, united by a singular focus: making community living better."
      emoji="🤝"
      points={[
        "Engineering team focused on zero-downtime architecture.",
        "Designers obsessed with intuitive, inclusive interfaces.",
        "24/7 support staff dedicated to society admins."
      ]}
    />
  </MegaPageTemplate>
);

export const Mission = () => (
  <MegaPageTemplate 
    category="Company" icon="🌍" title="Our Mission" 
    subtitle="Transforming how 100 million Indians live in residential communities."
    image="/society3.jpg"
  >
    <ContentBlock
      title="Building the operating system for neighborhoods."
      text="We believe that a well-managed society leads to a happier, more connected community. By automating the mundane tasks of society administration, we free up committee members to focus on what matters: building a vibrant neighborhood culture."
      emoji="🎯"
      points={[
        "Democratizing access to high-end society tech.",
        "Prioritizing data privacy and resident security.",
        "Fostering transparency in society finances."
      ]}
    />
  </MegaPageTemplate>
);

export const Awards = () => (
  <MegaPageTemplate 
    category="Company" icon="🏆" title="Awards & Recognition" 
    subtitle="Milestones and accolades we've picked up along our journey."
    image="/society4.jpg"
  >
    <ContentBlock
      title="Industry recognition."
      text="While our true reward is the satisfaction of the societies we serve, we are humbled by the recognition we've received from the prop-tech and startup ecosystems."
      emoji="🏅"
      points={[
        "Winner: Best PropTech Startup 2024",
        "Featured in Top 50 Emerging SaaS companies.",
        "ISO 27001 Certified for Information Security Management."
      ]}
    />
  </MegaPageTemplate>
);
