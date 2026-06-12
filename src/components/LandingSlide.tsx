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
      <p className="text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.5em] uppercase opacity-40 mb-8 md:mb-16 mt-8 md:mt-0">
        AI Product Manager · Hamburg
      </p>

      {/* Main Name */}
      <h1 className="text-4xl md:text-[86px] font-medium tracking-[0.05em] md:tracking-[0.15em] leading-tight text-foreground uppercase mb-6 md:mb-12">
        CHRISTOPH<br />LANGE
      </h1>

      <div className="w-10 h-[1px] bg-foreground/20 mb-6 md:mb-12" />

      {/* Headline & Description */}
      <div className="mb-8 md:mb-16 px-6">
        <h2 className="text-sm md:text-lg tracking-[0.3em] uppercase mb-4 opacity-80 leading-relaxed">
          Empower Teams | Build Products
        </h2>
        <p className="text-xs md:text-sm tracking-[0.08em] opacity-60 uppercase leading-relaxed">
          18 years of growth – from HR-Consulting to leading cross-functional teams and shaping AI-driven products
        </p>
      </div>

      {/* Centered Eras Preview - Jumps to content */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-24 items-center justify-center mb-24 md:mb-16">
        {cvData.eras.slice(0, 3).map((era, i) => (
          <div
            key={era.id}
            onClick={() => onJump(i + 1)}
            className="cursor-pointer group flex flex-col items-center px-8 py-2 md:py-5 transition-all duration-300"
          >
            <h3 className="text-[12px] md:text-[18px] font-bold uppercase tracking-[0.2em] group-hover:opacity-100 opacity-60 transition-opacity mb-1 text-center">
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
