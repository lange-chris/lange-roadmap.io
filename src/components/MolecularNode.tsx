"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MolecularNodeProps {
  title: string;
  year: string;
  icon: ReactNode;
  isActive?: boolean;
  onHover?: () => void;
}

export default function MolecularNode({ title, year, icon, isActive, onHover }: MolecularNodeProps) {
  return (
    <div className="relative group cursor-pointer" onMouseEnter={onHover}>
      {/* Liquid Wobble Bubble */}
      <motion.div
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
          transition: { duration: 0.3 }
        }}
        className={`w-32 h-32 flex items-center justify-center glass-morphism relative z-10 
          ${isActive ? "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]" : "border-white/10"}`}
      >
        <div className="text-white/80 scale-125 group-hover:text-white transition-colors">
          {icon}
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>

      {/* Label */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute top-full mt-6 left-1/2 -translate-x-1/2 text-center w-max pointer-events-none"
      >
        <div className="text-white/40 font-mono text-xs mb-1 uppercase tracking-widest">{year}</div>
        <div className="text-white font-semibold text-sm">{title}</div>
      </motion.div>

      {/* Connection Anchor Points (for SVG lines) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-transparent" id={`anchor-left-${year}`} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-transparent" id={`anchor-right-${year}`} />
    </div>
  );
}
