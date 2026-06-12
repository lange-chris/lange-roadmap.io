"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Era } from "@/data/cvData";

interface FocalPointProps {
  era: Era;
  onOpenChange?: (open: boolean) => void;
}

const NODE_R = 9;      // radius of each node circle

function getAngle(i: number, total: number) {
  return ((360 / total) * i + 135) * (Math.PI / 180);
}

export default function FocalPoint({ era, onOpenChange }: FocalPointProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [vp, setVp] = useState({ w: 1440, h: 900 });
  const nodes = era.milestones;

  useEffect(() => {
    const update = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSelected(null);
  }, [era.id]);

  const isMobile = vp.w < 768;
  const RADIUS = isMobile ? Math.min(vp.w * 0.3, 110) : 200;
  const CENTER_R = isMobile ? 30 : 40;

  const cx = vp.w / 2;
  const cy = isMobile ? vp.h * 0.65 : vp.h / 2;

  return (
    <>

      {/* Skills panel – bottom center */}
      <AnimatePresence>
        {selected !== null && nodes[selected]?.skills && (
          <motion.div
            key={`skills-${selected}`}
            className="fixed bottom-20 md:bottom-16 left-0 right-0 z-30 flex flex-wrap justify-center gap-2 px-4 md:px-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {nodes[selected]?.skills!.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="px-4 py-1.5 border border-[rgba(0,229,255,0.35)] text-xs uppercase tracking-widest text-[rgba(0,229,255,0.9)] bg-[rgba(0,229,255,0.03)]"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Description panel – top right */}
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.div
            className="fixed top-24 left-6 right-6 md:top-20 md:bottom-auto md:left-auto md:right-24 z-30 md:max-w-[320px] text-center md:text-right"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="text-[13px] md:text-[20px] leading-relaxed text-foreground/50 font-light">
              {era.narrative}
            </p>
          </motion.div>
        ) : selected !== null ? (
          <motion.div
            key={`node-${selected}`}
            className="fixed top-24 left-4 right-4 md:top-20 md:bottom-auto md:left-auto md:right-24 z-30 md:max-w-[320px] text-center md:text-right bg-background/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4 md:p-0 rounded-2xl md:rounded-none border border-foreground/10 md:border-none shadow-xl md:shadow-none"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="text-[9px] tracking-[0.3em] uppercase text-foreground/30 mb-2 whitespace-pre-line">
              {nodes[selected]?.title} {nodes[selected]?.company && ` | ${nodes[selected]?.company}`}
            </p>
            <p className="text-[12px] md:text-[20px] leading-relaxed text-foreground/60 font-light whitespace-pre-line">
              {nodes[selected]?.description}
            </p>
            {nodes[selected]?.image && (
              <div className="mt-4 pointer-events-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={nodes[selected].image!}
                  alt=""
                  className="w-full object-contain"
                  style={{ filter: "invert(1)", opacity: 0.15, transform: "rotateY(180deg)" }}
                />
              </div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Full-screen SVG — lines + node circles */}
      <svg
        className="fixed inset-0 z-10 pointer-events-none"
        style={{ width: vp.w, height: vp.h }}
        viewBox={`0 0 ${vp.w} ${vp.h}`}
      >
        <AnimatePresence>
          {open && nodes.map((_, i) => {
            const a = getAngle(i, nodes.length);
            const x1 = cx + Math.cos(a) * CENTER_R;
            const y1 = cy + Math.sin(a) * CENTER_R;
            const x2 = cx + Math.cos(a) * (RADIUS - NODE_R);
            const y2 = cy + Math.sin(a) * (RADIUS - NODE_R);
            return (
              <motion.path
                key={`line-${i}`}
                d={`M ${x1} ${y1} L ${x2} ${y2}`}
                stroke="rgba(224,224,224,0.22)"
                strokeWidth="0.7"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              />
            );
          })}
        </AnimatePresence>

        <AnimatePresence>
          {open && nodes.map((_, i) => {
            const a = getAngle(i, nodes.length);
            const nx = cx + Math.cos(a) * RADIUS;
            const ny = cy + Math.sin(a) * RADIUS;
            const isSelected = selected === i;
            return (
              <motion.g
                key={`node-${i}`}
                style={{ cursor: "pointer", pointerEvents: "auto" }}
                onClick={() => setSelected((prev) => (prev === i ? null : i))}
              >
                <motion.circle
                  cx={nx} cy={ny} r={NODE_R}
                  fill="none"
                  stroke={isSelected ? "rgba(0,229,255,0.6)" : "rgba(224,224,224,0.25)"}
                  strokeWidth="1"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  style={{ transformOrigin: `${nx}px ${ny}px` }}
                  transition={{ duration: 0.35, delay: i * 0.1 + 0.05 }}
                />
                <motion.circle
                  cx={nx} cy={ny} r={2.5}
                  fill={isSelected ? "#00E5FF" : "rgba(224,224,224,0.4)"}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isSelected 
                      ? { scale: 1.5, opacity: 1 } 
                      : { scale: [1, 1.6, 1], opacity: [0.3, 0.9, 0.3] }
                  }
                  exit={{ scale: 0, opacity: 0, transition: { duration: 0.2, repeat: 0 } }}
                  style={{ transformOrigin: `${nx}px ${ny}px` }}
                  transition={
                    isSelected 
                      ? { duration: 0.3 }
                      : { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }
                  }
                />
                {/* Invisible larger hit area */}
                <circle cx={nx} cy={ny} r={20} fill="transparent" />
              </motion.g>
            );
          })}
        </AnimatePresence>
      </svg>

      {/* Text labels — HTML, positioned away from center */}
      <AnimatePresence>
        {open && nodes.map((node, i) => {
          const a = getAngle(i, nodes.length);
          const nx = cx + Math.cos(a) * RADIUS;
          const ny = cy + Math.sin(a) * RADIUS;
          const isSelected = selected === i;

          const gap = NODE_R + 10;
          const tx = nx + Math.cos(a) * gap;
          const ty = ny + Math.sin(a) * gap;

          const cosA = Math.cos(a);
          const sinA = Math.sin(a);
          const alignX = cosA > 0.3 ? "0%" : cosA < -0.3 ? "-100%" : "-50%";
          const alignY = sinA > 0.3 ? "0%" : sinA < -0.3 ? "-100%" : "-50%";
          const textAlign = cosA > 0.3 ? "left" : cosA < -0.3 ? "right" : "center";

          return (
            <motion.div
              key={`label-${i}`}
              className="fixed z-20 cursor-pointer"
              style={{
                left: tx,
                top: ty,
                transform: `translate(${alignX}, ${alignY})`,
                width: 160,
                pointerEvents: "auto",
                textAlign,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 + 0.1 }}
              onClick={() => setSelected((prev) => (prev === i ? null : i))}
            >
              <div 
                className="flex items-start"
                style={{ justifyContent: textAlign === "right" ? "flex-end" : textAlign === "center" ? "center" : "flex-start" }}
              >
                <p
                  className="text-[10px] md:text-[14px] tracking-[0.1em] uppercase leading-snug transition-colors duration-200 whitespace-pre-line"
                  style={{ color: isSelected ? "#00E5FF" : "rgba(224,224,224,0.65)" }}
                >
                  {node.title}
                </p>
                {node.company && (
                  <span 
                    className="text-[8px] md:text-[10px] tracking-[0.15em] uppercase ml-2 mt-[2px] shrink-0" 
                    style={{ color: "rgba(224,224,224,0.4)" }}
                  >
                    | {node.company}
                  </span>
                )}
              </div>
              {node.years && (
                <p
                  className="text-[9px] md:text-[14px] tracking-[0.1em] uppercase leading-snug transition-colors duration-200 mt-0.5"
                  style={{ color: isSelected ? "rgba(0,229,255,0.7)" : "rgba(224,224,224,0.4)" }}
                >
                  {node.years}
                </p>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Central circle — clickable HTML */}
      <motion.div
        className="fixed z-20 cursor-pointer group"
        style={{
          left: cx,
          top: cy,
          transform: "translate(-50%, -50%)",
          pointerEvents: "auto",
        }}
        onClick={() => { const next = !open; setOpen(next); setSelected(null); onOpenChange?.(next); }}
      >
        <motion.div
          animate={{ scale: open ? 1.45 : 1 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="relative w-20 h-20 flex items-center justify-center"
        >
          <motion.div
            animate={{ opacity: open ? 0.25 : 0.07 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 border border-foreground rounded-full transition-colors duration-300 group-hover:border-[#00E5FF] group-hover:opacity-30"
          />
          
          {/* Sonar Ping Effect */}
          {!open && (
            <motion.div
              animate={{ scale: [1, 3.5], opacity: [0.7, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", repeatDelay: 1.5 }}
              className="absolute w-3 h-3 border border-[#00E5FF] rounded-full pointer-events-none"
            />
          )}

          <motion.div
            animate={
              open
                ? { scale: 1.6, opacity: 1 }
                : { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }
            }
            transition={
              open
                ? { duration: 0.3 }
                : { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }
            className="w-2.5 h-2.5 bg-[#00E5FF] rounded-full shadow-[0_0_12px_rgba(0,229,255,0.7)] group-hover:shadow-[0_0_20px_rgba(0,229,255,1)] transition-shadow duration-300"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
