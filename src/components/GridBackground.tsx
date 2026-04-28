"use client";

export default function GridBackground() {
  return (
    <>
      <div className="grid-background" />
      <div className="center-line" />
      {/* Decorative vertical lines at specific intervals */}
      <div className="fixed left-[20vw] top-0 bottom-0 w-[1px] bg-[var(--grid-line)] opacity-30 pointer-events-none" />
      <div className="fixed right-[20vw] top-0 bottom-0 w-[1px] bg-[var(--grid-line)] opacity-30 pointer-events-none" />
    </>
  );
}
