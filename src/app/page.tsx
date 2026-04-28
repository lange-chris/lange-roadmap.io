"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { cvData } from "@/data/cvData";
import GridBackground from "@/components/GridBackground";
import FocalPoint from "@/components/FocalPoint";
import EraSlide from "@/components/EraSlide";
import LandingSlide from "@/components/LandingSlide";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function Home() {
  const [index, setIndex] = useState(0); // 0 = Landing, 1-3 = Eras
  const [direction, setDirection] = useState(0);
  const [isThrottled, setIsThrottled] = useState(false);

  const totalSlides = cvData.eras.length + 1;

  const paginate = (newDirection: number) => {
    const nextIndex = index + newDirection;
    if (nextIndex >= 0 && nextIndex < totalSlides) {
      setDirection(newDirection);
      setIndex(nextIndex);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (isThrottled) return;
    if (Math.abs(e.deltaX) > 10 || Math.abs(e.deltaY) > 10) {
      const dir = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      paginate(dir > 0 ? 1 : -1);
      setIsThrottled(true);
      setTimeout(() => setIsThrottled(false), 1000);
    }
  };

  const currentEra = index > 0 ? cvData.eras[index - 1] : null;

  return (
    <main 
      onWheel={handleWheel}
      className="relative h-screen w-screen bg-[var(--background)] overflow-hidden font-sans"
    >
      <GridBackground />
      
      {/* Header Info (Persistent) */}
      <div className="fixed top-8 right-8 z-40 flex items-center gap-6">
        <a 
          href={cvData.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] tracking-widest uppercase hover:opacity-50 transition-opacity flex items-center gap-2"
        >
          <ExternalLink size={12} />
          LinkedIn
        </a>
      </div>

      {index > 0 && <FocalPoint eraId={currentEra?.id || "01"} />}

      <div className="page-transition-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {index === 0 ? (
            <LandingSlide 
              key="landing" 
              onStart={() => paginate(1)} 
              onJump={(i) => { setDirection(1); setIndex(i); }}
            />
          ) : (
            <EraSlide 
              key={index} 
              era={currentEra!} 
              direction={direction} 
              onNext={() => paginate(1)}
              onPrev={() => paginate(-1)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Controls (Minimal Indicators Only) */}
      <div className="fixed bottom-8 left-8 right-8 z-40 flex justify-between items-end">
        <div className="flex gap-2 mb-2">
          {[...Array(totalSlides)].map((_, i) => (
            <div 
              key={i} 
              className={`w-1 h-1 rounded-full transition-all ${i === index ? "bg-foreground scale-125" : "bg-gray-300"}`}
            />
          ))}
        </div>

        <div className="text-right">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-2">
            {cvData.slogan}
          </p>
          <div className="flex gap-4 justify-end text-[10px] tracking-widest font-mono">
            <span>{index === 0 ? "HOME" : `ERA 0${index}`} / 03</span>
            <span className="opacity-40">DE | EN</span>
          </div>
        </div>
      </div>
    </main>
  );
}
