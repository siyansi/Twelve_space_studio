// "use client";

// import { useState, useRef } from "react";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";

// // Assets
// import vrHeadset from "@/assets/Untitled.png";
// import projectLiving from "@/assets/project-living-room.jpg";
// import projectBedroom from "@/assets/project-bedroom.jpg";
// import projectKitchen from "@/assets/project-kitchen.jpg";
// import projectBalcony from "@/assets/project-balcony.jpg";
// import projectGarden from "@/assets/project-garden.jpg";

// const projects = [
//   { image: projectLiving, label: "Living Room" },
//   { image: projectBedroom, label: "Bedroom" },
//   { image: projectKitchen, label: "Kitchen" },
//   { image: projectBalcony, label: "Balcony" },
//   { image: projectGarden, label: "Garden Area" },
// ];

// const VRProjectViewer = () => {
//   const [activeImage, setActiveImage] = useState<number | null>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "start 0.3"],
//   });

//   const headsetY = useTransform(scrollYProgress, [0, 1], ["-120%", "0%"]);
//   const headsetOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
//   const headsetRotate = useTransform(scrollYProgress, [0, 1], [-20, 0]);

//   return (
//     <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden bg-[#0B1220]">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">See Our Projects</h2>
//           <p className="text-gray-400 max-w-lg mx-auto">Click a project to enter the immersive VR vision.</p>
//         </motion.div>

//         {/* Floating Headset (Before click) */}
//         <motion.div className="flex justify-center mb-10 pointer-events-none" style={{ y: headsetY, opacity: headsetOpacity, rotateX: headsetRotate }}>
//           <motion.img
//             src={vrHeadset.src}
//             className="w-44 h-44 object-contain drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]"
//             animate={{ y: [0, -15, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </motion.div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//           {projects.map((project, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.02, y: -5 }}
//               className={`relative overflow-hidden rounded-3xl cursor-pointer group ${i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}`}
//               onClick={() => setActiveImage(i)}
//             >
//               <img src={project.image.src} alt={project.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
//               <div className="absolute bottom-6 left-6">
//                 <p className="text-white font-bold">{project.label}</p>
//                 <p className="text-[#F97316] text-xs font-mono uppercase tracking-widest">Enter VR</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* FULLSCREEN IMMERSIVE VR OVERLAY */}
//       <AnimatePresence>
//         {activeImage !== null && (
//           <motion.div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black">
            
//             {/* 1. THE PROJECT IMAGE (Background that feels like it's inside the world) */}
//             <motion.div 
//               className="absolute inset-0 z-0"
//               initial={{ scale: 1.5, filter: "blur(20px)" }}
//               animate={{ scale: 1, filter: "blur(0px)" }}
//               exit={{ scale: 1.5, filter: "blur(20px)" }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <img 
//                 src={projects[activeImage].image.src} 
//                 className="w-full h-full object-cover opacity-60" 
//                 alt="VR View"
//               />
//             </motion.div>

//             {/* 2. THE VR HEADSET FRAME (The "Zoom-into-face" effect) */}
//             <motion.div
//               className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none"
//               initial={{ scale: 5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 5, opacity: 0 }}
//               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//             >
//               {/* LENS VIEW (The crisp image seen through the goggles) */}
//               <div className="absolute w-[80%] h-[40%] md:w-[60%] md:h-[45%] overflow-hidden rounded-[100px] border-[4px] border-white/10">
//                  <motion.img 
//                     src={projects[activeImage].image.src}
//                     className="w-full h-full object-cover"
//                     initial={{ scale: 1.2 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 1 }}
//                  />
//                  {/* Cinematic Scanlines/Lens Grain */}
//                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-20 bg-[length:100%_2px,3px_100%]" />
//               </div>

//               {/* Headset Texture Overlay */}
//               <img src={vrHeadset.src} className="w-[120%] h-[120%] max-w-none object-contain opacity-90 mix-blend-screen" />
//             </motion.div>

//             {/* 3. INTERACTIVE UI */}
//             <motion.div 
//               initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//               className="absolute bottom-12 z-[110] flex flex-col items-center gap-4"
//             >
//               <h3 className="text-white text-3xl font-bold tracking-tighter">{projects[activeImage].label}</h3>
//               <button 
//                 onClick={() => setActiveImage(null)}
//                 className="bg-[#F97316] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
//               >
//                 EXIT VR VISION
//               </button>
//             </motion.div>

//             {/* Side Navigation Arrows */}
//             <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 flex justify-between z-[110]">
//                <button 
//                 onClick={() => setActiveImage((activeImage - 1 + projects.length) % projects.length)}
//                 className="p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-[#F97316]"
//                >
//                  <ChevronLeftIcon />
//                </button>
//                <button 
//                 onClick={() => setActiveImage((activeImage + 1) % projects.length)}
//                 className="p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-[#F97316]"
//                >
//                  <ChevronRightIcon />
//                </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// // Simple Icons
// const ChevronLeftIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
// const ChevronRightIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>

// export default VRProjectViewer;



"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("../../components/ui/globe").then((m) => m.World), {
  ssr: false,
}) as any;

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
<div className="relative w-full bg-[#0B132B] py-24 overflow-hidden">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-left"
    >

      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
        Building Digital <span className="text-[#F24E24]">Experiences</span>  
        for the Modern World
      </h2>

      <p className="text-neutral-300 mt-6 text-lg max-w-xl">
        At <span className="text-[#F24E24] font-semibold">Twelvespace Studio</span>,  
        we design and develop powerful digital solutions for brands across the globe.  
        From premium websites to scalable applications, we help businesses grow in the
        digital era.
      </p>

      <div className="mt-8 flex gap-4">

        <button className="px-6 py-3 bg-[#F24E24] hover:bg-[#F24E24]/80 transition rounded-lg text-white font-semibold">
          Start a Project
        </button>

        <button className="px-6 py-3 border border-white/30 hover:border-[#F24E24] hover:text-[#F24E24] transition rounded-lg text-white">
          Our Work
        </button>

      </div>

    </motion.div>


    {/* RIGHT SIDE GLOBE */}
    <div className="relative h-[350px] md:h-[500px]">

      <div className="absolute inset-0">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>

    </div>

  </div>
</div>
  );
}
