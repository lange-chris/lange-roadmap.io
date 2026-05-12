"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cvData";
import { ArrowRight } from "lucide-react";

interface LandingSlideProps {
  onStart: () => void;
  onJump: (index: number) => void;
}

export default function LandingSlide({ onStart, onJump }: LandingSlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="slide flex flex-col items-center justify-center text-center select-none"
    >
      {/* Top Tagline */}
      <p className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase opacity-40 mb-16">
        AI Product Manager · Hamburg
      </p>

      {/* Main Name */}
      <h1 className="text-5xl md:text-[86px] font-medium tracking-[0.15em] leading-tight text-foreground uppercase mb-12">
        CHRISTOPH<br />LANGE
      </h1>

      <div className="w-10 h-[1px] bg-foreground/20 mb-12" />

      {/* Headline & Description */}
      <div className="mb-16">
        <h2 className="text-sm md:text-lg tracking-[0.3em] uppercase mb-4 opacity-80">
          EMPOWER TEAMS. BUILD AI
        </h2>
        <p className="text-xs md:text-sm tracking-[0.08em] opacity-60 uppercase">
          18 years of growth – from HR-Consulting to leading cross-functional teams and shaping AI-driven product strategy
        </p>
      </div>

      {/* Centered Eras Preview - Jumps to content */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-center mb-16">
        {cvData.eras.map((era, i) => (
          <div
            key={era.id}
            onClick={() => onJump(i + 1)}
            className="cursor-pointer group flex flex-col items-center px-8 py-5 transition-all duration-300"
          >
            <h3 className="text-[18px] font-bold uppercase tracking-[0.2em] group-hover:opacity-100 opacity-60 transition-opacity mb-1">
              {era.title}
            </h3>
            <p className="text-[14px] opacity-50 font-mono tracking-tighter text-center">
              {era.years}
            </p>
          </div>
        ))}
      </div>

      {/* Browse Chronologically - bottom */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center">
        <button
          onClick={onStart}
          className="cta-glow group flex items-center gap-2 text-[11px] md:text-xs tracking-[0.4em] uppercase"
        >
          Browse Chronologically
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
