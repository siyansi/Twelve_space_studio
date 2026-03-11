"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Assets
import vrHeadset from "@/assets/Untitled.png";
import projectLiving from "@/assets/project-living-room.jpg";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBalcony from "@/assets/project-balcony.jpg";
import projectGarden from "@/assets/project-garden.jpg";

const projects = [
  { image: projectLiving, label: "Living Room" },
  { image: projectBedroom, label: "Bedroom" },
  { image: projectKitchen, label: "Kitchen" },
  { image: projectBalcony, label: "Balcony" },
  { image: projectGarden, label: "Garden Area" },
];

const VRProjectViewer = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.3"],
  });

  const headsetY = useTransform(scrollYProgress, [0, 1], ["-120%", "0%"]);
  const headsetOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const headsetRotate = useTransform(scrollYProgress, [0, 1], [-20, 0]);

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-bold text-[#F24E24] mb-4">See Our Projects</h2>
          <p className="text-gray-400 max-w-lg mx-auto">Click a project to enter the immersive VR vision.</p>
        </motion.div>

        {/* Floating Headset (Before click) */}
        <motion.div className="flex justify-center mb-10 pointer-events-none" style={{ y: headsetY, opacity: headsetOpacity, rotateX: headsetRotate }}>
          <motion.img
            src={vrHeadset.src}
            className="w-44 h-44 object-contain drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative overflow-hidden rounded-3xl cursor-pointer group ${i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}`}
              onClick={() => setActiveImage(i)}
            >
              <img src={project.image.src} alt={project.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold">{project.label}</p>
                <p className="text-[#F97316] text-xs font-mono uppercase tracking-widest">Enter VR</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN IMMERSIVE VR OVERLAY */}
      <AnimatePresence>
        {activeImage !== null && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black">
            
            {/* 1. THE PROJECT IMAGE (Background that feels like it's inside the world) */}
            <motion.div 
              className="absolute inset-0 z-0"
              initial={{ scale: 1.5, filter: "blur(20px)" }}
              animate={{ scale: 1, filter: "blur(0px)" }}
              exit={{ scale: 1.5, filter: "blur(20px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img 
                src={projects[activeImage].image.src} 
                className="w-full h-full object-cover opacity-60" 
                alt="VR View"
              />
            </motion.div>

            {/* 2. THE VR HEADSET FRAME (The "Zoom-into-face" effect) */}
            <motion.div
              className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none"
              initial={{ scale: 5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 5, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* LENS VIEW (The crisp image seen through the goggles) */}
              <div className="absolute w-[80%] h-[40%] md:w-[60%] md:h-[45%] overflow-hidden rounded-[100px] border-[4px] border-white/10">
                 <motion.img 
                    src={projects[activeImage].image.src}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                 />
                 {/* Cinematic Scanlines/Lens Grain */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-20 bg-[length:100%_2px,3px_100%]" />
              </div>

              {/* Headset Texture Overlay */}
              <img src={vrHeadset.src} className="w-[120%] h-[120%] max-w-none object-contain opacity-90 mix-blend-screen" />
            </motion.div>

            {/* 3. INTERACTIVE UI */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute bottom-12 z-[110] flex flex-col items-center gap-4"
            >
              <h3 className="text-white text-3xl font-bold tracking-tighter">{projects[activeImage].label}</h3>
              <button 
                onClick={() => setActiveImage(null)}
                className="bg-[#F97316] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
              >
                EXIT VR VISION
              </button>
            </motion.div>

            {/* Side Navigation Arrows */}
            <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 flex justify-between z-[110]">
               <button 
                onClick={() => setActiveImage((activeImage - 1 + projects.length) % projects.length)}
                className="p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-[#F97316]"
               >
                 <ChevronLeftIcon />
               </button>
               <button 
                onClick={() => setActiveImage((activeImage + 1) % projects.length)}
                className="p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-[#F97316]"
               >
                 <ChevronRightIcon />
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Simple Icons
const ChevronLeftIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
const ChevronRightIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>

export default VRProjectViewer;

