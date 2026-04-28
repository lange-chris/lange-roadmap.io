"use client";

import { motion } from "framer-motion";

interface FocalPointProps {
  eraId: string;
}

export default function FocalPoint({ eraId }: FocalPointProps) {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
      <motion.div
        key={eraId}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-24 h-24 flex items-center justify-center"
      >
        <div className="absolute inset-0 border border-foreground/5 rounded-full" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 bg-foreground rounded-full"
        />
      </motion.div>
    </div>
  );
}
