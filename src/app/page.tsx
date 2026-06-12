"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { cvData } from "@/data/cvData";
import GridBackground from "@/components/GridBackground";
import FocalPoint from "@/components/FocalPoint";
import EraSlide from "@/components/EraSlide";
import LandingSlide from "@/components/LandingSlide";
import PasswordScreen from "@/components/PasswordScreen";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  const [index, setIndex] = useState(0); // 0 = Landing, 1-3 = Eras
  const [direction, setDirection] = useState(0);
  const [isThrottled, setIsThrottled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const totalSlides = cvData.eras.length + 1;

  useEffect(() => {
    setIsClient(true);
    const auth = localStorage.getItem("portfolio_auth");
    if (auth === "true") setIsAuthenticated(true);
  }, []);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isThrottled || touchStartX === null) return;
    const currentX = e.touches[0].clientX;
    const diff = touchStartX - currentX;

    if (Math.abs(diff) > 50) { // 50px threshold for swipe
      paginate(diff > 0 ? 1 : -1);
      setIsThrottled(true);
      setTouchStartX(null);
      setTimeout(() => setIsThrottled(false), 1000);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const currentEra = index > 0 ? cvData.eras[index - 1] : null;

  // Prevent hydration mismatch
  if (!isClient) return null;

  if (!isAuthenticated) {
    return <PasswordScreen onSuccess={() => {
      localStorage.setItem("portfolio_auth", "true");
      setIsAuthenticated(true);
    }} />;
  }

  return (
    <main 
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative h-screen w-screen bg-[var(--background)] overflow-hidden font-sans"
    >
      <GridBackground />
      
      {/* Header Info (Persistent) */}
      <div className="fixed top-8 right-8 z-40 flex items-center gap-6">
        <a 
          href={cvData.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-white hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="LinkedIn Profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a 
          href="https://github.com/lange-chris" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-white hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="GitHub Profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      {index > 0 && currentEra && <FocalPoint era={currentEra} onOpenChange={setMenuOpen} />}

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
              menuOpen={menuOpen}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Dots - centered bottom */}
      <div className="fixed bottom-8 left-0 right-0 z-40 flex justify-center gap-2">
        {[...Array(totalSlides)].map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full transition-all ${i === index ? "bg-foreground scale-125" : "bg-gray-300"}`}
          />
        ))}
      </div>

    </main>
  );
}
