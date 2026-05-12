export interface Milestone {
  title: string;
  description: string;
}

export interface Era {
  id: string;
  title: string;
  years: string;
  location: string;
  narrative: string;
  milestones: Milestone[];
  skills: string[];
}

export const cvData = {
  name: "Christoph Lange",
  tagline: "Product Manager | AI Strategy | Technical Leadership",
  intro: "Building the bridge between complex AI technology and user-centric products. Over 10 years of experience in Product Management, AI Strategy, and Software Engineering.",
  slogan: "engineering-meaningful-impact",
  linkedin: "https://www.linkedin.com/in/christoph-lange/",
  eras: [
    {
      id: "01",
      title: "Foundation",
      years: "2007 – 2016",
      location: "Hamburg",
      narrative: "Where it all began. A strong focus on the intersection of business strategy and human resources. This era was dedicated to building a profound understanding of organizational dynamics, establishing the foundation for my future in product leadership.",
      milestones: [
        {
          title: "Bachelor of Arts in Business Administration (FH Stralsund)",
          description: "Graduated with a focus on organizational management, HR strategy, and business economics — building the analytical foundation for later product work."
        },
        {
          title: "HR Consultant at CareerTeam & pluss Holding",
          description: "Hands-on experience in talent acquisition, process design, and stakeholder communication across mid-size and enterprise clients."
        },
        {
          title: "Strategic focus on talent acquisition and process optimization",
          description: "Developed and implemented scalable recruitment frameworks that reduced time-to-hire and improved candidate quality across multiple verticals."
        },
        {
          title: "Apprenticeship Finance and Insurance",
          description: "Completed a formal apprenticeship in finance and insurance, building a strong foundation in client advisory, risk assessment, and financial products."
        },
        {
          title: "Wakeboard Coach",
          description: "Trained and coached athletes of all skill levels in wakeboarding — developing leadership, communication, and the ability to break down complex skills into learnable steps."
        }
      ],
      skills: ["Business Administration", "Recruitment Strategy", "Process Optimization", "HR Management"]
    },
    {
      id: "02",
      title: "PEOPLE & PRODUCT",
      years: "2016 – 2025",
      location: "Hamburg / Global",
      narrative: "Transitioning into full-scale Product Management at XING. Leading the Active Sourcing portfolio with a focus on data-driven decision making and cross-functional team leadership in an agile environment.",
      milestones: [
        {
          title: "Managed a 50M € product portfolio",
          description: "Led a cross-functional team at New Work SE (XING) responsible for the Active Sourcing product suite — balancing feature development, revenue targets, and user satisfaction."
        },
        {
          title: "Increased AI campaign response rates by 80%",
          description: "Designed and shipped AI-driven messaging features that personalized recruiter outreach at scale, significantly improving engagement metrics."
        },
        {
          title: "Boosted conversion rates by 60% through targeted UX redesigns",
          description: "Ran data-backed UX experiments across core user flows, iterating rapidly with design and engineering to measurably improve conversion."
        },
        {
          title: "Certified Agile Scrum Product Owner & Scrum Master",
          description: "Deepened expertise in agile delivery frameworks, applying both roles across multiple product teams to improve sprint velocity and team alignment."
        }
      ],
      skills: ["Product Strategy", "Scrum", "A/B Testing", "UX Design", "Stakeholder Management", "Data Analytics"]
    },
    {
      id: "03",
      title: "THE AI ERA",
      years: "2025 – Present",
      location: "Hamburg",
      narrative: "Deepening technical expertise in Artificial Intelligence and MLOps. Bridging the gap between high-level product vision and technical implementation of LLMs and generative AI solutions.",
      milestones: [
        {
          title: "Specialized in AI Project Management & MLOps",
          description: "Gained hands-on expertise in managing the full lifecycle of AI projects — from model selection and training to deployment and monitoring in production."
        },
        {
          title: "Developing scalable AI-driven B2B product frameworks",
          description: "Architecting product strategies for enterprise clients that embed LLMs and AI agents into core workflows, reducing manual overhead and unlocking new value streams."
        },
        {
          title: "Expertise in AI Governance, Ethics, and Compliance (EU AI Act)",
          description: "Applying EU AI Act requirements to product development, ensuring responsible AI deployment that meets emerging regulatory standards."
        }
      ],
      skills: ["AI Agents", "LLMs", "Python", "MLOps", "AI Governance", "Next.js", "Prompt Engineering"]
    }
  ],
  globalSkills: [
    "AI Agents", "Next.js", "LLMs", "Product Strategy", "Python", "Scrum", "Kanban",
    "MLOps", "SQL", "Figma", "Tableau", "Adobe Analytics", "React", "TypeScript"
  ]
};
