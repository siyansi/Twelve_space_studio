"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function MagneticCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  // Smooth spring physics for that "magnetic" feel
  const springConfig = { damping: 30, stiffness: 400, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      // Checks for data-cursor-text attribute on hovered elements
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
      {/* ORANGE OUTLINE ROUND CURSOR */}
      <motion.div
        className="flex items-center justify-center rounded-full border-2 border-orange-500 bg-transparent"
        style={{
          width: 20, // Default small dot size
          height: 20, // Matching width for a perfect circle
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          // Expands smoothly when hovering
          width: isHovering ? 80 : 20,
          height: isHovering ? 80 : 20,
          // Border stays solid orange, background is always transparent
          borderColor: "#f97316",
          backgroundColor: "rgba(0,0,0,0)", 
        }}
      >
        {/* VIEW / EXPAND TEXT */}
        <AnimatePresence>
          {isHovering && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              // Text is now orange to match the border and pop against dark bg
              className="text-[10px] text-orange-500 font-bold uppercase tracking-widest z-10"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}