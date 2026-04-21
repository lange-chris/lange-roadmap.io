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
import Header from "./Header";
import { useState, useRef, ReactNode } from "react";
import roadmapData from "../data/roadmap.json";

const iconMap: Record<string, ReactNode> = {
  education: <Terminal className="w-full h-full" />,
  professional: <Cpu className="w-full h-full" />,
  personal: <Trophy className="w-full h-full" />,
  highlight: <Sparkles className="w-full h-full" />
};

const translations = {
  de: {
    start: "Start",
    end: "Ende",
    journey: "Christoph Lange Journey",
    badge: "Full Portfolio // Full Lifecycle Engineering",
    title: "Vision im",
    detail: "atomaren Detail.",
    intro: "Hier findest du alle Stationen meiner Karriere – von der Bundeswehr bis zu AI Project Management. Navigiere horizontal durch mein molekulares Ökosystem.",
    scroll: "HORIZONTAL SCROLLEN ZUM STARTEN",
    contactTitle: "Initiate",
    contactScale: "Scale.",
    contactDesc: "Der Transfer von High-Performance aus dem Leistungssport in das Product Management schafft unschlagbare Ergebnisse.",
    contactPulse: "Puls senden",
    contactBtn: "Chris kontaktieren",
    cvIntegrity: "CV Integrität: Totale Synchronisation",
    cvIdentity: "Identität: Christoph Lange",
    cvBuild: "Build: Premium Liquid Ökosystem"
  },
  en: {
    start: "Start",
    end: "End",
    journey: "Christoph Lange Journey",
    badge: "Full Portfolio // Full Lifecycle Engineering",
    title: "Vision in",
    detail: "Atomic Detail.",
    intro: "Here you will find all the stages of my career – from the basic military service to AI Project Management. Navigate horizontally through my molecular ecosystem.",
    scroll: "SCROLL HORIZONTALLY TO BEGIN",
    contactTitle: "Initiate",
    contactScale: "Scale.",
    contactDesc: "Transferring high performance from competitive sports into product management creates unbeatable results.",
    contactPulse: "Send Pulse",
    contactBtn: "Contact Chris",
    cvIntegrity: "CV Integrity: Total Synchronization",
    cvIdentity: "Identity: Christoph Lange",
    cvBuild: "Build: Premium Liquid Ecosystem"
  }
};

export default function Roadmap() {
  const [locale, setLocale] = useState<'de' | 'en'>('de');
  const t = translations[locale];
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Capture horizontal scroll
  const { scrollXProgress } = useScroll({
    container: containerRef
  });

  const smoothProgress = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const userPhone = process.env.NEXT_PUBLIC_USER_PHONE || "+49 ...";
  const userEmail = process.env.NEXT_PUBLIC_USER_EMAIL || "chris@lange.com";

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#fdfbf7]">
      <Header locale={locale} onLocaleChange={setLocale} />
      <ParticlesBG />

      {/* 
          Progress Indicator (Liquid Bar) 
          Helps users navigate the 10-phase sequence
      */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-64 h-1 bg-black/5 rounded-full z-50 overflow-hidden">
        <motion.div 
          style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
          className="h-full bg-[#d4a373] shadow-[0_0_20px_rgba(212, 163, 115, 0.5)]"
        />
        <div className="flex justify-between mt-2 px-1 text-[8px] font-mono text-black/20 uppercase tracking-widest">
           <span>{t.start}</span>
           <span>{t.journey}</span>
           <span>{t.end}</span>
        </div>
      </div>

      {/* Horizontal Scroll Snap Container */}
      <div 
        ref={containerRef}
        className="scroll-container relative z-20"
      >
        {/* Intro Section */}
        <section className="section bg-transparent">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-4xl px-12 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4a373]/10 border border-[#d4a373]/20 text-xs font-semibold text-[#d4a373] mb-8 tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              <span>{t.badge}</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-8 leading-none text-[#2d2926]">
              {t.title} <br />
              <span className="text-[#d4a373]">{t.detail}</span>
            </h1>
            <p className="text-xl md:text-3xl text-black/40 max-w-2xl leading-relaxed mb-12 font-light">
              {t.intro}
            </p>
            <div className="flex items-center gap-4 text-[#d4a373] font-mono text-sm">
              <div className="w-12 h-[1px] bg-[#d4a373]" /> {t.scroll}
            </div>
          </motion.div>
        </section>

        {/* Milestone Sections (The Full CV) */}
        {roadmapData.milestones.map((milestone, index) => {
          const sectionCount = roadmapData.milestones.length;
          // Calculate active range for this milestone in the global scroll
          const rangeStart = 0.1 + (index / (sectionCount + 1)) * 0.8;
          const rangeEnd = 0.1 + ((index + 1) / (sectionCount + 1)) * 0.8;

          // Type asserting because roadmapData is imported with a different structure
          const m = milestone as any;

          return (
            <section key={m.id} className="section bg-transparent px-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center max-w-[1400px] w-full">
                {/* The Atom with Skill Orbitals */}
                <div className="flex justify-center scale-90 md:scale-100">
                  <MolecularNode 
                    id={m.id}
                    year={m.year}
                    title={m.title[locale]}
                    organization={m.organization}
                    icon={iconMap[m.type] || <Rocket />}
                    techStack={m.techStack}
                    achievements={m.achievements[locale]}
                    scrollProgress={smoothProgress}
                    range={[rangeStart, rangeEnd]}
                  />
                </div>

                {/* Content Card (Full Screen Detail) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-morphism rounded-[3rem] p-8 md:p-16 border-black/5 relative overflow-hidden group min-h-[400px] md:min-h-[500px]"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a373]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px w-12 bg-[#d4a373]/30" />
                    <h4 className="text-[#d4a373] font-mono text-sm font-black uppercase tracking-[0.2em]">{m.year}</h4>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase text-[#2d2926]">{m.title[locale]}</h2>
                  
                  <div className="text-lg md:text-2xl text-black/50 leading-relaxed font-light mb-12">
                     {m.description[locale]}
                  </div>
                  
                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {m.achievements[locale].map((ach: string) => (
                      <div key={ach} className="flex items-center gap-3 p-3 rounded-2xl bg-black/5 border border-black/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d4a373]" />
                        <span className="text-xs md:text-sm text-black/70 font-bold tracking-tight">{ach}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )
        })}

        {/* Final Contact Section */}
        <section className="section bg-transparent px-12">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-24 items-center">
             <div>
               <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none text-[#2d2926]">{t.contactTitle} <br /><span className="text-[#d4a373]">{t.contactScale}</span></h2>
               <p className="text-xl text-black/40 font-light mb-12 max-w-md">
                 {t.contactDesc}
               </p>
               
               <div className="space-y-6">
                  <a href={`mailto:${userEmail}`} className="flex items-center gap-6 group p-4 rounded-3xl hover:bg-black/5 transition-all w-fit pointer-events-auto">
                    <div className="w-16 h-16 rounded-full bg-[#d4a373]/10 border border-[#d4a373]/20 flex items-center justify-center group-hover:bg-[#d4a373] group-hover:text-white transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                       <div className="text-[10px] text-black/30 uppercase tracking-[0.3em] font-black mb-1">{t.contactPulse}</div>
                      <div className="text-xl text-black/80 font-bold tracking-tight">{userEmail}</div>
                    </div>
                  </a>
               </div>
             </div>

             <div className="bg-[#d4a373]/5 rounded-[4rem] p-12 border border-[#d4a373]/10 relative overflow-hidden backdrop-blur-xl">
                <Code2 className="w-16 h-16 text-[#d4a373] mb-8" />
                <p className="text-sm font-mono text-[#d4a373]/40 leading-relaxed mb-12">
                   // {t.cvIntegrity} <br />
                   // {t.cvIdentity} <br />
                   // {t.cvBuild} 
                </p>
                <div className="flex gap-4">
                  <button className="flex-1 py-6 rounded-3xl bg-[#d4a373] text-white font-black text-lg hover:bg-[#c2b280] transition-all flex items-center justify-center gap-3 shadow-[0_0_50px_rgba(212, 163, 115, 0.3)] uppercase tracking-tighter">
                    {t.contactBtn}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
