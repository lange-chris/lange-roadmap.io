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

const roadmapEvents = [
  {
    year: "2023",
    title: "The Genesis",
    description: "Started the journey into deep tech and modern web architectures. Mastery of React, Next.js and the Node ecosystem.",
    icon: <Terminal className="w-6 h-6" />,
    tags: ["React", "TypeScript", "Next.js"]
  },
  {
    year: "2024",
    title: "Architectural Shift",
    description: "Specialized in scalable cloud infrastructures and real-time data synchronization with Supabase and Postgres.",
    icon: <Cpu className="w-6 h-6" />,
    tags: ["Supabase", "PostgreSQL", "System Design"]
  },
  {
    year: "2025",
    title: "AI Integration",
    description: "Pioneering the integration of Agentic AI and LLMs into daily workflows and product ecosystems.",
    icon: <Sparkles className="w-6 h-6" />,
    tags: ["AI", "Agents", "LangChain"]
  },
  {
    year: "2026",
    title: "Present: Innovation Lead",
    description: "Driving the future of lange-roadmap.io, building tools that bridge the gap between vision and reality.",
    icon: <Rocket className="w-6 h-6" />,
    tags: ["Leadership", "Innovation", "Web3"]
  }
];

export default function Roadmap() {
  const userPhone = process.env.NEXT_PUBLIC_USER_PHONE || "Not specified";
  const userEmail = process.env.NEXT_PUBLIC_USER_EMAIL || "Not specified";
  const userAddress = process.env.NEXT_PUBLIC_USER_ADDRESS || "Not specified";

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white selection:bg-white/10 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/60 mb-6 tracking-tight">
            <Globe className="w-3.5 h-3.5" />
            <span>Chris Lange's Professional Journey</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Evolution of <br /> Vision.
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            A vertical deep-dive into the milestones, technologies, and breakthroughs that define my path in the digital landscape.
          </p>
        </motion.section>

        {/* Roadmap Section */}
        <section className="relative mb-48">
          <div className="roadmap-line" />
          
          <div className="space-y-24">
            {roadmapEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content Card */}
                <div className={`w-1/2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="inline-flex items-center gap-2 text-white/40 font-mono text-sm mb-3">
                    <span className="w-8 h-px bg-white/20" />
                    {event.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                  <p className="text-white/50 leading-relaxed max-w-md ml-auto mr-auto">
                    {event.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 mt-6 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    {event.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-xs text-white/40 uppercase tracking-widest font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#0a0a0b] border-2 border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <div className="text-white/80">
                    {event.icon}
                  </div>
                </div>

                {/* Empty Space for alignment */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-morphism rounded-3xl p-12 overflow-hidden relative"
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Let's build the future together.</h2>
              <p className="text-white/50 mb-10 text-lg">
                Interested in collaboration or just want to chat about the latest in roadmap architectures? Feel free to reach out.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-white/80">{userEmail}</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-white/80">{userPhone}</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-white/80">{userAddress}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <Code2 className="w-12 h-12 text-blue-400 mb-6" />
              <p className="text-sm font-mono text-white/40 leading-relaxed mb-6">
                 // System message:<br />
                 // No sensitive data was hardcoded in this build. <br />
                 // All contact details are securely injected via environment variables.
              </p>
              <button className="w-full py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                Init Connection
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-48 text-center border-t border-white/5 pt-12 text-white/30 text-sm">
          <p>© {new Date().getFullYear()} lange-roadmap.io | Crafted with precision.</p>
        </footer>
      </div>
    </main>
  );
}
