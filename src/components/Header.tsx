"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import skillsData from "../data/skills.json";

interface HeaderProps {
  locale: 'de' | 'en';
  onLocaleChange: (locale: 'de' | 'en') => void;
}

export default function Header({ locale, onLocaleChange }: HeaderProps) {
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
        <div className="flex items-center gap-4 bg-black/5 border border-black/10 rounded-full px-5 py-2.5 backdrop-blur-md">
          {skillsData.languages.map((lang) => (
            <button 
              key={lang.code}
              onClick={() => onLocaleChange(lang.code as 'de' | 'en')}
              className="group relative flex items-center gap-2 cursor-pointer outline-none"
            >
              <span className={`transition-colors font-mono text-[10px] tracking-widest font-bold ${locale === lang.code ? 'text-[#d4a373]' : 'text-black/30 hover:text-black/60'}`}>
                {lang.code.toUpperCase()}
              </span>
              <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[#d4a373] text-white text-[10px] px-2 py-1 rounded shadow-xl uppercase font-bold tracking-widest pointer-events-none">
                {lang.name}: {lang.level}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-[#d4a373]" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
