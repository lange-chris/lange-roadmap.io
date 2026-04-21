"use client";

import { motion } from "framer-motion";
import { Globe, Cpu } from "lucide-react";
import skillsData from "../data/skills.json";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-12 py-8 flex justify-between items-center bg-gradient-to-b from-[#fdfbf7] to-transparent pointer-events-none"
    >
      <div className="flex items-center gap-3 pointer-events-auto cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-[#d4a373]/10 border border-[#d4a373]/20 flex items-center justify-center">
          <Cpu className="text-[#d4a373] w-5 h-5" />
        </div>
        <div>
          <h1 className="text-[#2d2926] font-bold tracking-tighter text-lg leading-none">CHRISTOPH LANGE</h1>
          <p className="text-[#d4a373]/60 font-mono text-[9px] uppercase tracking-[0.2em] mt-1">AI Product Ecosystem</p>
        </div>
      </div>

      <div className="flex items-center gap-6 pointer-events-auto">
        <div className="flex items-center gap-4 bg-black/5 border border-black/10 rounded-full px-4 py-2 backdrop-blur-md">
          {skillsData.languages.map((lang) => (
            <div key={lang.code} className="group relative flex items-center gap-2 cursor-help">
              <span className="text-black/40 group-hover:text-black transition-colors font-mono text-[10px] tracking-widest">{lang.code}</span>
              <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[#d4a373] text-white text-[10px] px-2 py-1 rounded shadow-xl uppercase font-bold tracking-widest">
                {lang.name}: {lang.level}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-[#d4a373]" />
              </div>
            </div>
          ))}
          <div className="w-px h-3 bg-black/20 mx-1" />
          <Globe className="w-4 h-4 text-black/20" />
        </div>
      </div>
    </motion.header>
  );
}
