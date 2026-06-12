"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PasswordScreenProps {
  onSuccess: () => void;
}

export default function PasswordScreen({ onSuccess }: PasswordScreenProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple application-level password
    if (input === "2026Lange!") {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
      setInput("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--background)] font-sans">
      {/* Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)', 
          backgroundSize: '4vw 4vw' 
        }} 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-xs flex flex-col gap-8 px-4"
      >
        <div className="text-center space-y-3">
          <div className="flex justify-center mb-6">
            {/* Small glowing dot */}
            <div className="w-2 h-2 bg-[#00E5FF] rounded-full shadow-[0_0_12px_rgba(0,229,255,0.8)] animate-pulse" />
          </div>
          <h1 className="text-[12px] tracking-[0.4em] uppercase text-foreground/80">lange-roadmap</h1>
          <p className="text-[9px] tracking-widest text-foreground/40 uppercase">Password</p>
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`w-full bg-foreground/[0.02] border ${error ? 'border-red-500/50 text-red-400' : 'border-foreground/20 text-foreground'} rounded-none px-4 py-4 text-center tracking-[0.5em] focus:outline-none focus:border-[#00E5FF]/50 focus:bg-[#00E5FF]/[0.02] transition-colors placeholder:text-foreground/10`}
            placeholder="•••••••"
            autoFocus
          />
          {error && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -bottom-7 left-0 right-0 text-center text-[9px] uppercase tracking-widest text-red-500/80"
            >
              Access Denied
            </motion.p>
          )}
        </form>

        <button 
          onClick={handleSubmit}
          className="w-full text-[10px] tracking-[0.2em] uppercase border border-foreground/20 py-4 text-foreground/60 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/[0.02] transition-all"
        >
          Start
        </button>
      </motion.div>
    </div>
  );
}
