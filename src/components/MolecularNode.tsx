"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { ReactNode, useState } from "react";

interface MolecularNodeProps {
  title: string;
  year: string;
  organization: string;
  icon: ReactNode;
  techStack: string[];
  scrollProgress: MotionValue<number>;
  range: [number, number];
}

export default function MolecularNode({ 
  title, 
  year, 
  organization,
  icon, 
  techStack,
  scrollProgress, 
  range 
}: MolecularNodeProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Staggered entrance based on horizontal scroll
  const scale = useTransform(scrollProgress, range, [0.5, 1]);
  const opacity = useTransform(scrollProgress, range, [0, 1]);
  const y = useTransform(scrollProgress, range, [20, 0]);

  return (
    <div 
      className="relative z-20 flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Liquid Wobble Bubble */}
      <motion.div
        style={{ scale, opacity, y }}
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
          scale: 1.15,
          boxShadow: "0 0 50px rgba(59, 130, 246, 0.5)",
          transition: { duration: 0.3 }
        }}
        className="w-40 h-40 md:w-56 md:h-56 flex flex-col items-center justify-center glass-morphism border-white/20 relative cursor-pointer overflow-hidden p-6 text-center"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="text-blue-400 mb-4 scale-150 group-hover:scale-175 transition-transform">
          {icon}
        </div>
        
        <div className="text-white/40 font-mono text-[10px] mb-1 uppercase tracking-tighter">{year}</div>
        <h3 className="text-white font-bold text-sm md:text-base leading-tight px-4">{title}</h3>
        <p className="text-blue-300/60 text-[10px] md:text-xs mt-1">{organization}</p>
      </motion.div>

      {/* Tech Stack Tooltip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0.9, 
          y: isHovered ? 0 : 10 
        }}
        className="absolute bottom-full mb-8 pointer-events-none"
      >
        <div className="glass-morphism rounded-xl px-4 py-3 border-blue-500/30 flex flex-wrap gap-2 justify-center max-w-[280px]">
          {techStack.map(tech => (
            <span key={tech} className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] text-blue-200 font-medium whitespace-nowrap">
              {tech}
            </span>
          ))}
          {/* Tooltip Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white/10" />
        </div>
      </motion.div>
    </div>
  );
}
