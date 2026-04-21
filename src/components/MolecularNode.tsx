"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

interface MolecularNodeProps {
  id: string;
  title: string;
  year: string;
  organization: string;
  icon: ReactNode;
  techStack: string[];
  achievements: string[];
  scrollProgress: MotionValue<number>;
  range: [number, number];
}

export default function MolecularNode({ 
  id,
  title, 
  year, 
  organization,
  icon, 
  techStack,
  achievements,
  scrollProgress, 
  range 
}: MolecularNodeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Staggered entrance based on horizontal scroll
  const scale = useTransform(scrollProgress, range, [0.6, 1]);
  const opacity = useTransform(scrollProgress, range, [0, 1]);
  const blurValue = useTransform(scrollProgress, range, ["blur(20px)", "blur(0px)"]);

  // Calculate orbital skills (limiting to top 5 for clarity)
  const displaySkills = techStack.slice(0, 5);

  return (
    <div 
      className="relative z-20 flex flex-col items-center justify-center p-32" // Added padding for orbit room
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 
          Main Node Container 
          DOUBLED SIZE: w-64/h-64 to w-[400px]/h-[400px] on desktop
      */}
      <motion.div
        style={{ scale, opacity, filter: blurValue }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 100px rgba(212, 163, 115, 0.4)",
          transition: { duration: 0.5 }
        }}
        className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex flex-col items-center justify-center glass-morphism border-[#2d2926]/10 relative cursor-pointer overflow-hidden p-8 text-center"
      >
        {/* Achievement Cloud: Pulsing hard facts inside */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none">
          {achievements.map((fact, i) => (
            <motion.div
              key={fact}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 4,
                delay: i * 1.5,
                repeat: Infinity,
              }}
              className="text-[10px] md:text-[14px] font-black text-[#d4a373] absolute uppercase tracking-[0.3em] whitespace-nowrap opacity-20"
              style={{
                top: `${20 + i * 20}%`,
                left: i % 2 === 0 ? '10%' : 'auto',
                right: i % 2 !== 0 ? '10%' : 'auto',
              }}
            >
              {fact}
            </motion.div>
          ))}
        </div>

        {/* Branding & Info */}
        <div className="relative z-10">
          <motion.div 
            animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
            className="text-[#d4a373] mb-6 scale-[2] md:scale-[3] opacity-60"
          >
            {icon}
          </motion.div>
          
          <div className="text-[#2d2926]/40 font-mono text-xs md:text-sm mb-2 uppercase tracking-[0.3em] font-black">{year}</div>
          <h3 className="text-[#2d2926] font-black text-lg md:text-3xl leading-tight px-12 mb-4 tracking-tighter uppercase whitespace-normal">
            {title}
          </h3>
          <p className="text-[#d4a373]/80 font-bold text-xs md:text-lg tracking-wide bg-[#d4a373]/10 px-4 py-1 rounded-full border border-[#d4a373]/20">
            {organization}
          </p>
        </div>

        {/* Interactive Overlay Glow */}
        <div className="absolute inset-0 bg-radial-gradient(circle at center, rgba(212, 163, 115, 0.1) 0%, transparent 70%) pointer-events-none" />
      </motion.div>

      {/* 
          SKILL ORBIT SYSTEM 
          Atoms rotating around the primary career node
      */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-[450px] h-[450px] md:w-[650px] md:h-[650px] relative"
        >
          {displaySkills.map((skill, index) => {
            const angle = (index / displaySkills.length) * (2 * Math.PI);
            // Safe SSR radius calculation (stable during hydration)
            const radius = mounted && window.innerWidth < 768 ? 160 : 320;
            
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  x: Number((Math.cos(angle) * radius).toFixed(3)),
                  y: Number((Math.sin(angle) * radius).toFixed(3)),
                }}
                className="w-16 h-16 md:w-24 md:h-24 glass-morphism rounded-full flex items-center justify-center p-2 text-center border-[#d4a373]/30 shadow-[0_0_20px_rgba(212, 163, 115, 0.2)]"
              >
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="text-[#2d2926]/80 font-black text-[8px] md:text-[10px] uppercase leading-none tracking-tighter"
                >
                  {skill}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
