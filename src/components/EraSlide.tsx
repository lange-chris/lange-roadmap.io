"use client";

import { motion } from "framer-motion";
import { Era } from "@/data/cvData";

interface EraSlideProps {
  era: Era;
  direction: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function EraSlide({ era, direction, onNext, onPrev }: EraSlideProps) {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = offset.x;
        if (swipe < -100) onNext();
        else if (swipe > 100) onPrev();
      }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="slide cursor-grab active:cursor-grabbing select-none"
    >
      {/* Top Header */}
      <div className="flex justify-between items-start w-full z-20">
        <div className="max-w-[40vw]">
          <div className="flex items-center gap-2 mb-6 opacity-30">
            <span className="text-[9px] font-mono tracking-[0.2em] uppercase">Era {era.id}</span>
            <div className="w-8 h-[1px] bg-foreground" />
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-[0.1em] mb-4 text-foreground leading-tight uppercase">
            {era.title}
          </h1>
          <div className="flex items-center gap-3 text-[9px] tracking-[0.3em] font-mono opacity-40 uppercase">
            <span>{era.years}</span>
            <span className="opacity-20">|</span>
            <span>{era.location}</span>
          </div>
        </div>
        
        <div className="max-w-[30vw] text-right mt-6">
          <p className="text-sm leading-relaxed text-foreground/60 italic font-light">
            "{era.narrative}"
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex-grow flex items-center justify-center pointer-events-none" />

      {/* Bottom Content */}
      <div className="w-full grid grid-cols-12 gap-8 items-end z-20">
        <div className="col-span-12 md:col-span-5">
          <h3 className="text-[9px] tracking-[0.4em] uppercase mb-8 opacity-30">Key Milestones</h3>
          <div className="space-y-5 relative">
            <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-foreground/10" />
            {era.milestones.map((m, i) => (
              <div key={i} className="relative pl-6">
                <div className="absolute left-[-2px] top-2 w-[4px] h-[4px] bg-foreground/20 rounded-full" />
                <p className="text-xs font-light text-foreground/80 leading-relaxed uppercase tracking-wider">
                  {m}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="col-span-12 md:col-span-7 flex flex-wrap justify-end gap-2 items-end">
          {era.skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 border border-foreground/10 text-[9px] uppercase tracking-widest opacity-60 hover:opacity-100 hover:border-foreground/30 transition-all">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
