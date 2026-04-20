"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  Code2, 
  Rocket, 
  Terminal, 
  Cpu, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  Sparkles
} from "lucide-react";
import ParticlesBG from "./ParticlesBG";
import MolecularNode from "./MolecularNode";
import { useState, useRef } from "react";

const roadmapEvents = [
  {
    year: "2023",
    index: 0,
    title: "The Genesis",
    description: "Started the journey into deep tech and modern web architectures. Mastery of React, Next.js and the Node ecosystem.",
    icon: <Terminal className="w-6 h-6 md:w-8 md:h-8" />,
    tags: ["React", "TypeScript", "Next.js"],
    range: [0.05, 0.12] as [number, number]
  },
  {
    year: "2024",
    index: 1,
    title: "Architectural Shift",
    description: "Specialized in scalable cloud infrastructures and real-time data synchronization with Supabase and Postgres.",
    icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" />,
    tags: ["Supabase", "PostgreSQL", "System Design"],
    range: [0.25, 0.32] as [number, number]
  },
  {
    year: "2025",
    index: 2,
    title: "AI Integration",
    description: "Pioneering the integration of Agentic AI and LLMs into daily workflows and product ecosystems.",
    icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
    tags: ["AI", "Agents", "LangChain"],
    range: [0.45, 0.52] as [number, number]
  },
  {
    year: "2026",
    index: 3,
    title: "Present: Innovation Lead",
    description: "Driving the future of lange-roadmap.io, building tools that bridge the gap between vision and reality.",
    icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
    tags: ["Leadership", "Innovation", "Web3"],
    range: [0.65, 0.72] as [number, number]
  }
];

export default function Roadmap() {
  const [activeEvent, setActiveEvent] = useState(roadmapEvents[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 1. Capture scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 2. Smooth progress for the "Liquid" inertia feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 3. Sequential path lengths for the 3 connection segments
  const line1Length = useTransform(smoothProgress, [0.12, 0.25], [0, 1]);
  const line2Length = useTransform(smoothProgress, [0.32, 0.45], [0, 1]);
  const line3Length = useTransform(smoothProgress, [0.52, 0.65], [0, 1]);

  // Transform opacity for hero and contact based on scroll
  const heroOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0.3]);
  const footerOpacity = useTransform(smoothProgress, [0.8, 0.95], [0, 1]);

  const userPhone = process.env.NEXT_PUBLIC_USER_PHONE || "Not specified";
  const userEmail = process.env.NEXT_PUBLIC_USER_EMAIL || "Not specified";
  const userAddress = process.env.NEXT_PUBLIC_USER_ADDRESS || "Not specified";

  return (
    <div ref={containerRef} className="relative bg-[#020617] text-white selection:bg-blue-500/20">
      {/* 
          High height container (400vh) to provide scroll room.
          Sticky wrapper inside keeps content visible.
      */}
      <div className="h-[400vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          <ParticlesBG />
          
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12">
            {/* Hero Section - Fades as we scroll into the timeline */}
            <motion.section 
              style={{ opacity: heroOpacity }}
              className="text-center mb-16 md:mb-24"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-[10px] md:text-sm font-medium text-blue-400 mb-4 tracking-tight">
                <Globe className="w-3 md:w-3.5 h-3 md:h-3.5" />
                <span>Chris Lange's Professional Journey</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200/40">
                Liquid Evolution.
              </h1>
              <p className="text-sm md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed px-4">
                Scroll to navigate through the molecular breakthroughs defining my professional path.
              </p>
            </motion.section>

            {/* Molecular Roadmap - Centered in Viewport */}
            <section className="relative min-h-[300px] md:min-h-[400px] w-full max-w-5xl mx-auto">
              {/* SVG Connections with Staggered Scroll Mapping */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible px-12 lg:px-0">
                {/* Connection 1 */}
                <motion.path
                  d="M 100,150 L 300,150"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  style={{ pathLength: line1Length, opacity: line1Length }}
                  className="hidden md:block" // Use responsive coordinates or CSS masks for mobile
                />
                <circle cx="100" cy="150" r="2" fill="#3b82f6" opacity="0.2" className="hidden md:block"/>
                
                {/* Connection 2 */}
                <motion.path
                  d="M 350,150 L 550,150"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  style={{ pathLength: line2Length, opacity: line2Length }}
                  className="hidden md:block"
                />

                {/* Connection 3 */}
                <motion.path
                  d="M 600,150 L 800,150"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  style={{ pathLength: line3Length, opacity: line3Length }}
                  className="hidden md:block"
                />

                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              {/* Molecular Nodes Container */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-4 relative z-10 md:px-4">
                {roadmapEvents.map((event) => (
                  <MolecularNode 
                    key={event.year}
                    year={event.year}
                    title={event.title}
                    icon={event.icon}
                    isActive={activeEvent.year === event.year}
                    onHover={() => setActiveEvent(event)}
                    scrollProgress={smoothProgress}
                    range={event.range}
                  />
                ))}
              </div>

              {/* Context Info Card (updates on click/hover) */}
              <motion.div
                key={activeEvent.year}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-16 md:mt-24 max-w-md mx-auto glass-morphism rounded-2xl p-6 border border-blue-500/20 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="text-blue-400 font-mono text-[10px] mb-2 uppercase tracking-widest">{activeEvent.year} Update</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{activeEvent.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4 italic">
                  "{activeEvent.description}"
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {activeEvent.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/10 text-[10px] text-blue-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </div>

      {/* Final Contact Section - Appears at the bottom of the scroll */}
      <motion.div 
        style={{ opacity: footerOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 py-24"
      >
        <motion.section 
          className="glass-morphism rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Let's build the future.</h2>
              <p className="text-white/50 mb-8 text-base md:text-lg">
                The atomic structure of this roadmap is just the beginning. Reach out if you want to collaborate on the next big breakthrough.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-blue-500/5 border border-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm md:text-base text-white/80">{userEmail}</span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-blue-500/5 border border-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm md:text-base text-white/80">{userPhone}</span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-blue-500/5 border border-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm md:text-base text-white/80">{userAddress}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-500/5 rounded-3xl p-6 border border-blue-500/10 backdrop-blur-sm">
              <Code2 className="w-10 h-10 text-blue-400 mb-4" />
              <p className="text-xs font-mono text-blue-200/40 leading-relaxed mb-6">
                 // System connection established.<br />
                 // Finalizing deployment sequence...<br />
                 // Roadmap successfully rendered.
              </p>
              <button className="w-full py-4 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                Connect with Chris
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.section>

        <footer className="mt-24 text-center border-t border-white/5 pt-8 text-white/20 text-[10px] tracking-widest uppercase">
          <p>© {new Date().getFullYear()} lange-roadmap.io | Staggered Scroll Sequence v1.0</p>
        </footer>
      </motion.div>
    </div>
  );
}
