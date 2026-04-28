export interface Era {
  id: string;
  title: string;
  years: string;
  location: string;
  narrative: string;
  milestones: string[];
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
      narrative: "Focusing on the intersection of business strategy and human capital. Developing a deep understanding of organizational structures and recruitment processes while building a strong academic background in business administration.",
      milestones: [
        "Bachelor of Arts in Business Administration (FH Stralsund)",
        "HR Consultant at CareerTeam & pluss Holding",
        "Strategic focus on talent acquisition and process optimization"
      ],
      skills: ["Business Administration", "Recruitment Strategy", "Process Optimization", "HR Management"]
    },
    {
      id: "02",
      title: "Around the World",
      years: "2016 – 2025",
      location: "Hamburg / Global",
      narrative: "Transitioning into full-scale Product Management at XING. Leading the Active Sourcing portfolio with a focus on data-driven decision making and cross-functional team leadership in an agile environment.",
      milestones: [
        "Managed a 50M € product portfolio",
        "Increased AI campaign response rates by 80%",
        "Boosted conversion rates by 60% through targeted UX redesigns",
        "Certified Agile Scrum Product Owner & Scrum Master"
      ],
      skills: ["Product Strategy", "Scrum", "A/B Testing", "UX Design", "Stakeholder Management", "Data Analytics"]
    },
    {
      id: "03",
      title: "Landing",
      years: "2025 – Present",
      location: "Hamburg",
      narrative: "Deepening technical expertise in Artificial Intelligence and MLOps. Bridging the gap between high-level product vision and technical implementation of LLMs and generative AI solutions.",
      milestones: [
        "Specialized in AI Project Management & MLOps",
        "Developing scalable AI-driven B2B product frameworks",
        "Expertise in AI Governance, Ethics, and Compliance (EU AI Act)"
      ],
      skills: ["AI Agents", "LLMs", "Python", "MLOps", "AI Governance", "Next.js", "Prompt Engineering"]
    }
  ],
  globalSkills: [
    "AI Agents", "Next.js", "LLMs", "Product Strategy", "Python", "Scrum", "Kanban", 
    "MLOps", "SQL", "Figma", "Tableau", "Adobe Analytics", "React", "TypeScript"
  ]
};
