"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  Rocket, 
  Terminal, 
  Cpu, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  Sparkles,
  Trophy,
  Code2
} from "lucide-react";
import ParticlesBG from "./ParticlesBG";
import MolecularNode from "./MolecularNode";
import { useState, useRef, ReactNode } from "react";
import roadmapData from "../data/roadmap.json";

// Map icon names to components
const iconMap: Record<string, ReactNode> = {
  education: <Terminal className="w-full h-full" />,
  professional: <Cpu className="w-full h-full" />,
  personal: <Trophy className="w-full h-full" />,
  highlight: <Sparkles className="w-full h-full" />
};

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 1. Capture HORIZONTAL scroll progress
  const { scrollXProgress } = useScroll({
    container: containerRef
  });

  const smoothProgress = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate dynamic line paths based on scroll
  // For 4 sections, we have transitions at 0.33, 0.66
  const line1Length = useTransform(smoothProgress, [0, 0.33], [0, 1]);
  const line2Length = useTransform(smoothProgress, [0.33, 0.66], [0, 1]);
  const line3Length = useTransform(smoothProgress, [0.66, 1], [0, 1]);

  const userPhone = process.env.NEXT_PUBLIC_USER_PHONE || "+49 ...";
  const userEmail = process.env.NEXT_PUBLIC_USER_EMAIL || "chris@lange.com";

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#020617]">
      <ParticlesBG />

      {/* Global molecular connection layer (Fixed background) */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <svg className="w-full h-full">
          <motion.path
            d="M 100,500 L 1100,500"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="10 10"
            style={{ 
              pathLength: line1Length,
              opacity: useTransform(smoothProgress, [0, 0.1], [0, 0.2])
            }}
            className="hidden lg:block translate-y-[15%]"
          />
        </svg>
      </div>

      {/* Horizontal Scroll Snap Container */}
      <div 
        ref={containerRef}
        className="scroll-container relative z-20"
      >
        {/* Section 0: Intro / Christoph Lange Branding */}
        <section className="section bg-transparent">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-4xl px-12 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-8 tracking-widest uppercase">
              <Globe className="w-4 h-4" />
              <span>Senior Product Manager | AI & Agile Expert</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
              Christoph <br />
              <span className="text-blue-500">Lange.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/40 max-w-2xl leading-relaxed mb-12 font-light">
              Creating the bridge between human vision and AI-driven reality. 
              High-performance product leadership fueled by elite competition.
            </p>
            <div className="flex items-center gap-4 text-blue-400 font-mono text-sm">
              <span className="animate-pulse">●</span> SCROLL TO INITIATE SEQUENCE
              <ChevronRight className="w-4 h-4 animate-bounce-x" />
            </div>
          </motion.div>
        </section>

        {/* Dynamic Milestone Sections */}
        {roadmapData.milestones.map((milestone, index) => (
          <section key={milestone.id} className="section bg-transparent">
            <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl px-12">
              {/* The "Atom" (Node) */}
              <div className="flex justify-center">
                <MolecularNode 
                  year={milestone.year}
                  title={milestone.title}
                  organization={milestone.organization}
                  icon={iconMap[milestone.type] || <Rocket />}
                  techStack={milestone.techStack}
                  scrollProgress={smoothProgress}
                  range={[index * 0.25, (index + 1) * 0.25]}
                />
              </div>

              {/* The Detail Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="glass-morphism rounded-3xl p-12 relative overflow-hidden group border-white/5 active:border-blue-500/30 transition-colors"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors" />
                
                <h4 className="text-blue-400 font-mono text-sm mb-4 uppercase tracking-[0.2em]">Phase {index + 1} // {milestone.year}</h4>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">{milestone.title}</h2>
                <div className="text-xl text-white/50 leading-relaxed font-light mb-10">
                   {milestone.description}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {milestone.techStack.map(tech => (
                    <span key={tech} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/40 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Final Section: Contact & Footer */}
        <section className="section bg-transparent">
          <div className="max-w-6xl w-full px-12 grid md:grid-cols-2 gap-24 items-center">
             <div>
               <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Ready to <br /><span className="text-blue-500 underline decoration-blue-500/20 underline-offset-8">accelerate?</span></h2>
               <p className="text-xl text-white/40 font-light mb-12">
                 Lass uns die nächste Stufe deines Produkts gemeinsam zünden. Agile Methoden treffen auf KI-Präzision.
               </p>
               
               <div className="space-y-4">
                  <a href={`mailto:${userEmail}`} className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-all w-fit">
                    <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">E-Mail Address</div>
                      <div className="text-lg text-white/80">{userEmail}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-6 group p-4 rounded-2xl w-fit">
                    <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Direct Connection</div>
                      <div className="text-lg text-white/80">{userPhone}</div>
                    </div>
                  </div>
               </div>
             </div>

             <div className="bg-blue-500/5 rounded-[3rem] p-12 border border-blue-500/10 relative overflow-hidden">
                <Code2 className="w-16 h-16 text-blue-500 mb-8" />
                <p className="text-sm font-mono text-blue-200/40 leading-relaxed mb-12">
                   // Build Status: Production Ready <br />
                   // Identity: Christoph Lange <br />
                   // Origin: AI Vibe-Coding with Antigravity
                </p>
                <button className="w-full py-6 rounded-2xl bg-white text-black font-bold text-lg hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-3 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                  Download Project Specs
                  <ChevronRight className="w-5 h-5" />
                </button>
             </div>
          </div>

          <footer className="absolute bottom-12 left-0 w-full text-center text-white/10 text-[10px] font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} lange-roadmap.io | High Performance PM Series
          </footer>
        </section>
      </div>
    </div>
  );
}
