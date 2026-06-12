"use client";

import { motion } from "framer-motion";
import { Era } from "@/data/cvData";

interface EraSlideProps {
  era: Era;
  direction: number;
  onNext: () => void;
  onPrev: () => void;
  menuOpen?: boolean;
}

export default function EraSlide({ era, direction, onNext, onPrev, menuOpen }: EraSlideProps) {
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
      <div className="flex justify-between items-start w-full z-20 px-6 md:px-0">
        <div className="max-w-full md:max-w-[50vw]">
          <div className="flex items-center gap-2 mb-6 opacity-30">
            <span className="text-[9px] font-mono tracking-[0.2em] uppercase">Era {era.id}</span>
            <div className="w-8 h-[1px] bg-foreground" />
          </div>
          <h1 className="text-2xl md:text-5xl font-medium tracking-[0.1em] mb-4 text-foreground leading-tight uppercase">
            {era.title}
          </h1>
          <div className="flex items-center gap-3 text-[9px] tracking-[0.3em] font-mono opacity-40 uppercase">
            <span>{era.years}</span>
          </div>
        </div>
        
      </div>

      {/* Middle Section */}
      <div className="flex-grow flex items-center justify-center pointer-events-none" />

      {/* Bottom Content / Safe Area */}
      <div className="w-full flex justify-center items-end z-20 pb-8 md:pb-0 px-4 md:px-0 pointer-events-none" />
    </motion.div>
  );
}
