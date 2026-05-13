export interface Milestone {
  title: string;
  years?: string;
  description: string;
  skills?: string[];
  image?: string;
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
      narrative: "Looking back, that period laid the foundation for my structured way of thinking. From my basic military service to my business apprenticeship and on to college—each stage taught me a different approach to organization. Competitive sports came into the picture and showed me what high performance in a team really means. Today, these experiences form the basis for managing complex products and fostering genuine team dynamics.",
      milestones: [
        {
          title: "Eliteschool of Sports\nHighschool Diploma",
          years: "2007",
          description: "I graduated from the Elite School of Sports. Competitive sports played a major role during those years. In paddling, there was a clear principle: individual motivation is essential, but measurable performance comes exclusively from teamwork. Together with my basic military service, my commercial apprenticeship, and my business studies, this phase laid the foundation for my methodological and disciplinary approach.",
          skills: ["Team Performance", "Discipline", "High Performance", "Mental Resilience", "Leadership", "Goal Setting"]
        },
        {
          title: "Apprenticeship\nFinances & Insurances",
          years: "2008–2011",
          description: "A three-year training program to become an insurance and finance specialist. There, I learned the basics of client consulting and business processes. It was a solid introduction to professional work environments.",
          skills: ["Client Advisory", "Risk Assessment", "Financial Products", "Business Operations", "Communication", "Process Management"]
        },
        {
          title: "Management Assistant\n& Wakeboard Coach",
          years: "2011–2012",
          description: "Combined operational management support with coaching athletes of all skill levels — developing leadership, communication, and the ability to break down complex skills into learnable steps.",
          skills: ["Coaching", "Operations", "Team Management", "Event Organization", "Communication", "Leadership"]
        },
        {
          title: "Bachelor of Arts\nin Business Administration",
          years: "2012–2016",
          description: "I studied business administration with a focus on human resources management and international business management. In addition to my academic studies, I was active in the student consulting firm and was responsible for organizing and executing various industry conferences.",
          skills: ["HR Management", "International Business", "Strategy", "Student Consulting", "Project Management", "Conference Management", "Academic Research"]
        },
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
          title: "HR Consultant",
          years: "2017–2019",
          description: "Worked as an HR consultant in digital recruiting. Focused on executive search and managing tech-related positions. Collaborated directly with hiring managers and guided candidates through the process from initial contact to contract signing.",
          skills: ["Executive Search", "Digital Recruiting", "Tech Recruiting", "Stakeholder Management", "Candidate Management", "Process Design"]
        },
        {
          title: "Recruiting Consultant",
          years: "2019–2021",
          description: "Recruiting role at pluss Holding GmbH. Responsible for day-to-day recruitment and standardizing internal recruiting workflows. Here, I learned how to break down long-standing procedures and transformed them into efficient, reliable processes based on KPIs",
          skills: ["Process Design", "KPI Management", "Workflow Optimization", "Talent Acquisition", "Stakeholder Management", "Data Analysis"]
        },
        {
          title: "Recruiting Consultant\n& Interim Product Manager",
          years: "2021–2023",
          description: "I started at XING in recruiting and later moved to product management. I took the unique opportunity to switch sides and applied my knowledge of HR processes directly to the development of B2B solutions. This internal pivot allowed me to design tools not only from a technical standpoint, but also from the perspective of actual users.",
          skills: ["Product Management", "B2B Solutions", "User Research", "HR Tech", "Agile", "Roadmapping", "Cross-functional Leadership"]
        },
        {
          title: "Product Manager",
          years: "2023–2025",
          description: "At XING, I took on product ownership for the Active Sourcing portfolio in a €50 million market segment. I led product development from the initial concept through to launch. My key takeaway from this role: scaling complex products within an established system while ensuring a balance between technical feasibility and real user value",
          skills: ["Product Ownership", "Portfolio Management", "Active Sourcing", "Go-to-Market", "UX Design", "Technical Feasibility", "Data-driven Decisions"]
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
    },
    {
      id: "04",
      title: "Stories that go beyond the ordinary.",
      years: "",
      location: "",
      narrative: "",
      milestones: [
        {
          title: "Competitive Sport",
          description: "Years of competitive sports at the international level. Among my most significant milestones are my titles as German and European champion in dragon boat racing. The greatest physical and mental test, however, was the Vendée Va'a—the world's toughest outrigger race across the open ocean. It was an experience that ultimately shaped my understanding of endurance, resilience, and true teamwork—and continues to do so.",
          skills: [],
          image: "/outrigger.png"
        },
        {
          title: "App Development",
          description: "Development of mi'ti, an AI-powered mental health productivity dashboard. The focus is on combining habit tracking with \"mindful automation.\" At the heart of the project is the design of a proprietary context engine that intelligently processes everyday data and translates it into automated yet mindful workflows.",
          skills: []
        },
        {
          title: "Product at Heart Summit",
          description: "",
          skills: []
        },
        {
          title: "Around the World",
          description: "",
          skills: []
        }
      ],
      skills: []
    }
  ],
  globalSkills: [
    "AI Agents", "Next.js", "LLMs", "Product Strategy", "Python", "Scrum", "Kanban",
    "MLOps", "SQL", "Figma", "Tableau", "Adobe Analytics", "React", "TypeScript"
  ]
};
