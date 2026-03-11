"use client";
import React, { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

// Helper for random sparkle positions
const generateSparkle = () => ({
  id: Math.random(),
  angle: Math.random() * Math.PI * 2,
  distance: Math.random() * 40 + 20,
  size: Math.random() * 3 + 1,
});

export default function MagneticCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [sparkles, setSparkles] = useState<{id: number, angle: number, distance: number, size: number}[]>([]);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Sparkle Logic: Creates a "cracker" burst effect when hovering
  useEffect(() => {
    if (isHovering) {
      const interval = setInterval(() => {
        setSparkles((prev) => [...prev.slice(-15), generateSparkle()]);
      }, 150);
      return () => clearInterval(interval);
    } else {
      setSparkles([]);
    }
  }, [isHovering]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      const hasMagneticAttr = target.closest("[data-cursor-text]");

      if (hasMagneticAttr) {
        setIsHovering(true);
        setCursorText(target.getAttribute("data-cursor-text") || "View");
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[9999]">
      {/* 1. THE MAIN GLASSY BALL */}
      <motion.div
        className="relative flex items-center justify-center rounded-full border border-[#B89150]/50 shadow-[0_0_20px_rgba(184,145,80,0.4)] backdrop-blur-[2px]"
        style={{
          width: 40,
          height: 40,
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.2 : 1,
          backgroundColor: isHovering ? "rgba(184, 145, 80, 0.15)" : "rgba(184, 145, 80, 0.05)",
          boxShadow: isHovering 
            ? "0 0 30px rgba(184,145,80,0.6), inset 0 0 10px rgba(255,255,255,0.2)" 
            : "0 0 10px rgba(184,145,80,0.2)",
        }}
      >
        {/* Internal Glow Pulse */}
        <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-tr from-[#B89150]/20 to-transparent" />

        {/* Cursor Text */}
        <AnimatePresence>
          {isHovering && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[7px] text-[#B89150] font-black uppercase tracking-widest z-10"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>

        {/* 2. THE SPARKLE CRACKERS */}
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: Math.cos(sparkle.angle) * sparkle.distance,
              y: Math.sin(sparkle.angle) * sparkle.distance,
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bg-[#B89150] rounded-full shadow-[0_0_5px_#B89150]"
            style={{
              width: sparkle.size,
              height: sparkle.size,
            }}
          />
        ))}
      </motion.div>

      {/* 3. OPTIONAL: MOUSE TAIL GLOW */}
      <motion.div
        className="fixed top-0 left-0 w-80 h-80 bg-[#B89150]/5 rounded-full blur-[100px] -z-10"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}