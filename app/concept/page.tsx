"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Cpu, Zap, ArrowRight, Expand, Boxes, Layers, Play } from "lucide-react";
import concept02 from "@/assets/blending-futuristic-building-seamlessly-into-desert-landscape.jpg";
import MagneticCursor from "@/components/MagneticCursor";

// ─── DATA (REMAIN THE SAME) ──────────────────────────────
const REAL_WORLD_DATA = {
  title: "Real World",
  // subtitle: "Existing Assets",
  accent: "text-orange-500",
  bg: "bg-[#0a0f1d]",
  border: "border-orange-500/20",
  glow: "bg-orange-500/20",
  projects: [
    { title: "Property Digital Twin", link: "https://tour.panoee.net/6951f90c0ea9931508f27de7/6951fff60ea993d2a7f27e47", tag: "360° Capture" },
    { title: "Drone Property Capture", link: "https://tour.panoee.net/696b39ea3a9dfa421e61199c/696b3be3d66679591968afe3", tag: "Aerial Mapping" },
    { title: "Luxury RED_HOUSE Tour", link: "https://virtual.twelvespacestudio.com/360/PRO_26/12SS002/A/VILLA_INTERIOR/", tag: "High-Fidelity" },
    // { title: "Premium Villa Interior", link: "https://twelvespacestudio.com/360/PRO_26/12SS002/A/VILLA_INTERIOR/", tag: "Virtual Tour" }
  ],
  features: [
    { icon: Globe, title: "360° Tours", desc: "Interactive walkthroughs." },
    { icon: Zap, title: "Ultra HD", desc: "High-res environments." },
    { icon: Layers, title: "Insights", desc: "Spatial context." }
  ]
};

const DIGITAL_WORLD_DATA = {
  title: "Digital World",
  // subtitle: "Unbuilt Concepts",
  accent: "text-blue-400",
  bg: "bg-[#050b1a]",
  border: "border-blue-500/20",
  glow: "bg-blue-500/20",
  projects: [
    { title: "Virtual Architectural Experience", link: "https://tour.panoee.net/696238c74854312b4e38b5b0/696780f121ea031b2285c4f3", tag: "CGI Concepts" },
    { title: "Interactive 3D Concept", link: "https://tour.panoee.net/6963d30e786f1f4c96e14a3c/696785b7e92ddd56ef5f003e", tag: "Real-time" }
  ],
  features: [
    { icon: Cpu, title: "3D Digital", desc: "Fully immersive CGI." },
    { icon: Boxes, title: "Real-Time", desc: "Cinematic pipelines." },
    { icon: Zap, title: "Metaverse", desc: "VR & AR ready." }
  ]
};

// ─── MAIN COMPONENT ───────────────────────────────────────
export default function Portfolio() {
  const [modal, setModal] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

// Detect mobile for the rotation logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="cursor-none bg-[#0B132B] min-h-screen text-white">
      <MagneticCursor />

      {/* HERO SECTION */}
       <div className="text-center mb-16 pt-24">
            {/* <motion.h6
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-orange-500 font-bold tracking-[0.4em] uppercase mb-4 text-xs"
            >
              {active === "real" ? "Existing Assets" : "Unbuilt Concepts"}
            </motion.h6> */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-6"
            >
              Port
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                folio
              </span>
            </motion.h1>
          </div>

      {/* DUAL SIDE-BY-SIDE SECTION */}
      <section className="flex flex-col lg:flex-row w-full min-h-screen">
        <WorldPane data={REAL_WORLD_DATA} setModal={setModal} />
        <WorldPane data={DIGITAL_WORLD_DATA} setModal={setModal} />
      </section>

      {/* FULLSCREEN MODAL */}
      {/* FULLSCREEN LANDSCAPE MODAL */}

    <AnimatePresence>
  {modal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Use "pointer-events-auto" to ensure clicks are registered
      className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center pointer-events-auto"
    >

      {/* CLOSE BUTTON - Increased z-index and padding */}
      <button
        type="button" // Force button type to prevent form behavior
        onClick={(e) => {
          e.stopPropagation(); // Stop the click from bleeding into the background
          setModal(null);      // This closes the modal
          console.log("Modal closed"); // Check your browser console to see if this runs
        }}
        className="absolute top-6 right-6 z-[10001] p-4 bg-orange-400 text-white rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all"
        style={{ cursor: 'pointer', touchAction: "manipulation" }}
      >
        <X size={30} strokeWidth={2.5} />
      </button>

      {/* FULLSCREEN VIEW */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        className="w-full h-full flex items-center justify-center"
      >
        <div className="relative bg-black w-full h-full">
          <iframe
            src={modal}
            className="w-full p-1 rounded-2xl h-full border-none"
            allowFullScreen
            // Allow pointer events for the iframe content
            style={{ pointerEvents: 'auto' }}
            allow="gyroscope; accelerometer; vr"
          />
        </div>
      </motion.div>

    </motion.div>
  )}
</AnimatePresence>
    </main>
  );
}
   
  

// ─── THE NEW MINI BOX COMPONENT ──────────────────────────
function WorldPane({ data, setModal }: { data: any, setModal: (l: string) => void }) {
  return (
    <div className={`flex-1 relative p-6 md:p-12 ${data.bg} border-x border-white/5`}>
      
      {/* Side Heading */}
      <div className="mb-10 relative z-10">
        <span className={`${data.accent} text-[10px] font-bold tracking-[0.4em] uppercase`}>{data.subtitle}</span>
        <h2 className="text-4xl font-black tracking-tighter mt-1">{data.title}</h2>
      </div>

      {/* VERTICAL STACK OF MINI BOXES */}
      <div className="flex flex-col gap-8 relative z-10">
        {data.projects.map((project: any, i: number) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
            onClick={() => setModal(project.link)}
          >
            {/* The "Box" like your uploaded image */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
              
              {/* The 360 Preview (Always visible inside box) */}
              <iframe
                src={project.link}
                className="w-full h-full scale-[1.5] pointer-events-none opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.1]"
              />

              {/* Overlay elements like the image you sent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              {/* Center Play/Expand Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all scale-90 group-hover:scale-100">
                    <Play size={24} fill="currentColor" className="ml-1" />
                 </div>
              </div>

              {/* Tag - Top Left */}
              <div className="absolute top-4 left-4">
                 <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 ${data.accent}`}>
                   {project.tag}
                 </span>
              </div>
            </div>

            {/* Details Section - Right below the box */}
            <div className="mt-4 px-2">
              <h4 className="text-xl font-bold group-hover:text-orange-500 transition-colors uppercase tracking-tight">
                {project.title}
              </h4>
              <p className="text-gray-500 text-xs font-medium flex items-center gap-2 mt-1">
                CLICK TO EXPAND FULL EXPERIENCE <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Feature Footer */}
   <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
  {data.features.map((f: any, i: number) => (
    <motion.div
      key={i}
      whileHover={{ 
        scale: 1.1, 
        y: -10,
        backgroundColor: "rgba(255, 255, 255, 0.05)" 
      }}
      className="relative group p-4 rounded-2xl text-center transition-all duration-500 cursor-default"
    >
      {/* 1. Backdrop Glow Effect (Visible on Hover) */}
      <div 
        className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10 ${data.glow}`} 
      />

      {/* 2. Animated Icon */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
      >
        <f.icon 
          size={24} 
          className={`mx-auto mb-3 transition-colors duration-300 ${data.accent} group-hover:text-white`} 
        />
      </motion.div>

      {/* 3. Text Content */}
      <p className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">
        {f.title}
      </p>

      {/* 4. Tiny Bottom Accent Line */}
      <motion.div 
        className={`h-[2px] w-0 group-hover:w-8 mx-auto mt-2 rounded-full transition-all duration-500 ${data.accent.replace('text', 'bg')}`}
      />
    </motion.div>
  ))}
</div>
    </div>
   
  );
}