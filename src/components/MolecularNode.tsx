"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface MolecularNodeProps {
  title: string;
  year: string;
  icon: ReactNode;
  isActive?: boolean;
  onHover?: () => void;
  scrollProgress: MotionValue<number>;
  range: [number, number]; // [start, end] scroll range for reveal
}

export default function MolecularNode({ 
  title, 
  year, 
  icon, 
  isActive, 
  onHover, 
  scrollProgress, 
  range 
}: MolecularNodeProps) {
  // Map the specific scroll range to scale and opacity for a staggered pop-in
  const scale = useTransform(scrollProgress, range, [0, 1]);
  const opacity = useTransform(scrollProgress, range, [0, 1]);

  return (
    <motion.div 
      style={{ scale, opacity }}
      className="relative group cursor-pointer" 
      onMouseEnter={onHover}
    >
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
        className={`w-24 h-24 md:w-32 md:h-32 flex items-center justify-center glass-morphism relative z-10 
          ${isActive ? "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]" : "border-white/10"}`}
      >
        <div className="text-white/80 scale-110 md:scale-125 group-hover:text-white transition-colors">
          {icon}
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>

      {/* Label */}
      <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 text-center w-max pointer-events-none">
        <div className="text-white/40 font-mono text-[10px] md:text-xs mb-1 uppercase tracking-widest">{year}</div>
        <div className="text-white font-semibold text-xs md:text-sm">{title}</div>
      </div>
    </motion.div>
  );
}
