"use client";

import { motion } from "framer-motion";
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
import { useState } from "react";

const roadmapEvents = [
  {
    year: "2023",
    title: "The Genesis",
    description: "Started the journey into deep tech and modern web architectures. Mastery of React, Next.js and the Node ecosystem.",
    icon: <Terminal className="w-8 h-8" />,
    tags: ["React", "TypeScript", "Next.js"]
  },
  {
    year: "2024",
    title: "Architectural Shift",
    description: "Specialized in scalable cloud infrastructures and real-time data synchronization with Supabase and Postgres.",
    icon: <Cpu className="w-8 h-8" />,
    tags: ["Supabase", "PostgreSQL", "System Design"]
  },
  {
    year: "2025",
    title: "AI Integration",
    description: "Pioneering the integration of Agentic AI and LLMs into daily workflows and product ecosystems.",
    icon: <Sparkles className="w-8 h-8" />,
    tags: ["AI", "Agents", "LangChain"]
  },
  {
    year: "2026",
    title: "Present: Innovation Lead",
    description: "Driving the future of lange-roadmap.io, building tools that bridge the gap between vision and reality.",
    icon: <Rocket className="w-8 h-8" />,
    tags: ["Leadership", "Innovation", "Web3"]
  }
];

export default function Roadmap() {
  const [activeEvent, setActiveEvent] = useState(roadmapEvents[roadmapEvents.length - 1]);
  
  const userPhone = process.env.NEXT_PUBLIC_USER_PHONE || "Not specified";
  const userEmail = process.env.NEXT_PUBLIC_USER_EMAIL || "Not specified";
  const userAddress = process.env.NEXT_PUBLIC_USER_ADDRESS || "Not specified";

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/20 overflow-x-hidden relative">
      <ParticlesBG />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-sm font-medium text-blue-400 mb-6 tracking-tight">
            <Globe className="w-3.5 h-3.5" />
            <span>Chris Lange's Professional Journey</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200/40">
            Liquid <br /> Roadmap.
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            An advanced molecular structure visualizing the fluid progression of technologies, milestones, and breakthroughs.
          </p>
        </motion.section>

        {/* Molecular Roadmap Structure */}
        <section className="relative mb-64 min-h-[400px]">
          {/* Animated SVG Connection Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <motion.path
              d="M 150,200 L 350,200 L 550,200 L 750,200"
              fill="none"
              stroke="url(#line-gradient)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Nodes Container */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 px-12">
            {roadmapEvents.map((event, index) => (
              <MolecularNode 
                key={event.year}
                year={event.year}
                title={event.title}
                icon={event.icon}
                isActive={activeEvent.year === event.year}
                onHover={() => setActiveEvent(event)}
              />
            ))}
          </div>

          {/* Floating Info Card (appears on hover) */}
          <motion.div
            key={activeEvent.year}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mt-32 max-w-lg mx-auto glass-morphism rounded-3xl p-8 border border-blue-500/20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="text-blue-400 font-mono text-sm mb-2 uppercase tracking-widest">{activeEvent.year} Milestone</div>
            <h3 className="text-3xl font-bold mb-4">{activeEvent.title}</h3>
            <p className="text-white/60 leading-relaxed mb-6 italic">
              "{activeEvent.description}"
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {activeEvent.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded bg-blue-500/10 border border-blue-500/10 text-xs text-blue-300 font-medium tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-morphism rounded-3xl p-12 overflow-hidden relative mb-24"
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Init connection.</h2>
              <p className="text-white/50 mb-10 text-lg">
                The future is fluid. If you have a vision that requires a liquid perspective, reach out and let's structure it together.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-blue-500/5 border border-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors">{userEmail}</span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-blue-500/5 border border-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors">{userPhone}</span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-blue-500/5 border border-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors">{userAddress}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-500/5 rounded-3xl p-8 border border-blue-500/10 backdrop-blur-sm">
              <Code2 className="w-12 h-12 text-blue-400 mb-6" />
              <p className="text-sm font-mono text-blue-200/40 leading-relaxed mb-6">
                 // System status: Liquid Evolution <br />
                 // Current branch: main <br />
                 // No sensitive data detected in build.
              </p>
              <button className="w-full py-4 rounded-2xl bg-blue-500 text-white font-semibold hover:bg-blue-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                Connect with Chris
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-24 text-center border-t border-white/5 pt-12 text-white/20 text-xs tracking-widest uppercase mb-12">
          <p>© {new Date().getFullYear()} lange-roadmap.io | Fluid Vision Series</p>
        </footer>
      </div>
    </main>
  );
}
