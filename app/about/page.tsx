// "use client";

// import { motion, Variants } from "framer-motion";

// const fadeUp: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   visible: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   }),
// };

// const stats = [
//   { value: "150+", label: "Projects Delivered" },
//   { value: "50+", label: "Happy Clients" },
//   { value: "5+", label: "Years Experience" },
// ];

// const AboutSection = () => {
//   return (
//     <section id="about" className="section-padding">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <motion.h6
//             custom={0}
//             variants={fadeUp}
//             className="text-primary text-sm font-semibold uppercase tracking-widest mb-4"
//           >
//             About Us
//           </motion.h6>

//           <div className="grid grid-cols-3 gap-4 mt-8">
//             {stats.map((stat, i) => (
//               <motion.div
//                 key={stat.label}
//                 custom={i + 1}
//                 variants={fadeUp}
//                 whileHover={{ y: -8, rotateY: 5 }}
//                 className="glass-card rounded-2xl p-5 text-center shadow-3d cursor-default"
//                 style={{ transformStyle: "preserve-3d" }}
//               >
//                 <span className="text-2xl md:text-3xl font-display font-bold text-gradient block">
//                   {stat.value}
//                 </span>
//                 <span className="text-xs text-muted-foreground mt-1 block">
//                   {stat.label}
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <motion.p
//             custom={0}
//             variants={fadeUp}
//             className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8"
//           >
//             At <span className="text-primary font-semibold">Twelve Space Studio</span>, we bridge
//             the gap between physical spaces and digital reality.
//           </motion.p>

//           <motion.a
//             custom={1}
//             variants={fadeUp}
//             href="#services"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             className="inline-flex items-center justify-center px-8 py-3 rounded-full glass-card text-foreground font-medium text-sm hover:bg-primary/20 transition-colors duration-200"
//           >
//             Know More
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;



// "use client";
// import { motion } from "framer-motion";

// const stats = [
//   { label: "Projects Delivered", value: "150+" },
//   { label: "Happy Clients", value: "50+" },
//   { label: "Years Experience", value: "5+" },
// ];

// export default function AboutSection() {
//   return (
//     <section id="aboutus" className="py-24 bg-[#100f0f] text-white">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
//         <div className="grid grid-cols-2 gap-4">
//           {stats.map((stat, i) => (
//             <motion.div 
//               key={i}
//               whileInView={{ opacity: 1, y: 0 }}
//               initial={{ opacity: 0, y: 20 }}
//               className="p-8 rounded-2xl bg-white/5 border border-white/10"
//             >
//               <h3 className="text-4xl font-bold text-orange-500">{stat.value}</h3>
//               <p className="text-sm text-gray-400 mt-2 uppercase tracking-widest">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//         <div>
//           <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4">About Us</h4>
//           <p className="text-2xl md:text-3xl font-light leading-relaxed">
//             At <span className="text-orange-500 font-medium">Twelve Space Studio</span>, we bridge the gap between physical spaces and digital reality. We specialize in creating immersive digital assets.
//           </p>
//           <button className="mt-8 px-10 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
//             Know More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion, Variants } from "framer-motion";

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { 
//       delay: i * 0.15, 
//       duration: 0.7, 
//       ease: [0.22, 1, 0.36, 1] 
//     },
//   }),
// };

// const stats = [
//   { value: "150+", label: "Projects Delivered" },
//   { value: "50+", label: "Happy Clients" },
//   { value: "5+", label: "Years Experience" },
// ];

// const AboutSection = () => {
//   return (
//     <section id="about" className="relative bg-black text-white py-24 md:py-40 overflow-hidden">
      
//       {/* SECTION MERGE: This gradient blends the Hero image into this section */}
//       <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-16 items-center relative z-20">
        
//         {/* Left Side: Stats with 3D Glassy Finish */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <motion.h6
//             custom={0}
//             variants={fadeUp}
//             className="text-orange-500 text-sm font-bold uppercase tracking-[0.3em] mb-6"
//           >
//             About Us
//           </motion.h6>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {stats.map((stat, i) => (
//               <motion.div
//                 key={stat.label}
//                 custom={i + 1}
//                 variants={fadeUp}
//                 whileHover={{ 
//                   y: -10, 
//                   rotateY: 10, 
//                   backgroundColor: "rgba(255, 255, 255, 0.1)" 
//                 }}
//                 className="relative group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl cursor-default transition-all duration-300"
//                 style={{ transformStyle: "preserve-3d" }}
//               >
//                 {/* Subtle Glow behind cards */}
//                 <div className="absolute -inset-0.5 bg-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                
//                 <span className="relative text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent block">
//                   {stat.value}
//                 </span>
//                 <span className="relative text-[10px] text-gray-400 mt-2 block uppercase tracking-widest font-medium">
//                   {stat.label}
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Right Side: Text Content */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <motion.p
//             custom={0}
//             variants={fadeUp}
//             className="text-gray-300 leading-relaxed text-lg md:text-xl mb-10 font-light"
//           >
//             At <span className="text-orange-500 font-semibold">Twelve Space Studio</span>, we bridge
//             the gap between physical spaces and digital reality. As a premier PropTech agency, we
//             specialize in creating <span className="text-white italic">immersive digital assets</span> that transform how developers present,
//             sell, and scale their projects.
//           </motion.p>
          
//           <motion.a
//             custom={1}
//             variants={fadeUp}
//             href="#services"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white/5 border border-white/20 text-white font-medium text-sm hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 backdrop-blur-sm shadow-xl"
//           >
//             Know More
//           </motion.a>
//         </motion.div>
//       </div>

//       {/* BACKGROUND ACCENT: A subtle glassy orb for depth */}
//       <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
//     </section>
//   );
// };

// export default AboutSection;

"use client";

import React, { useState, useEffect,  useRef } from "react";
import { motion, Variants } from "framer-motion";
import {  AnimatePresence } from "framer-motion";
import Image from "next/image";
import MagneticCursor from "@/components/MagneticCursor";
// import { CheckCircle2, , Eye, Maximize, Play } from "lucide-react";
import { 
  Maximize, 
  Home, 
  Eye, 
  Download, 
  Camera, 
  Smartphone, 
  X, 
  Grid,
  ChevronLeft,
  ChevronRight,
  Play,Target
} from "lucide-react";


const tourData = [
  { 
    id: "01", 
    name: "ENTRY", 
    url: "https://tour.panoee.net/696238c74854312b4e38b5b0",
    thumb: "/assets/thumb1.jpg" // Ensure these exist in your public/assets/
  },
  { 
    id: "02", 
    name: "LOBBY", 
    url: "https://tour.panoee.net/696b39ea3a9dfa421e61199c",
    thumb: "/assets/thumb2.jpg"
  },
  { 
    id: "03", 
    name: "RECEPTION", 
    url: "https://tour.panoee.net/6963d30e786f1f4c96e14a3c",
    thumb: "/assets/thumb3.jpg"
  },
  { 
    id: "04", 
    name: "LOUNGE", 
    url: "https://tour.panoee.net/6951f90c0ea9931508f27de7",
    thumb: "/assets/thumb4.jpg"
  },
];


// Standard fade-up for text elements
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    },
  }),
};

const whyChooseUs = [
  { title: "All-In-One Digital Support", desc: "From 360° virtual tours to SEO and web development, we give you connected services that work together." },
  { title: "Tailored For Your Brand", desc: "Our work is not one-size-fits-all — we listen to your needs and design solutions that reflect your style." },
  { title: "Results With Real Impact", desc: "Our digital assets help shorten sales cycles, improve engagement, and boost your online presence." },
  { title: "Commitment To Quality", desc: "We focus on clear communication, timely delivery, and professional output you can trust." },
];

export default function About() {
const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentZone, setCurrentZone] = useState("LOBBY");
  const [showThumbnails, setShowThumbnails] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
const [currentIndex, setCurrentIndex] = useState(0);
  // const [showThumbnails, setShowThumbnails] = useState(true);


  const selectedTour = tourData[currentIndex];

  // 1. Navigation Logic
  const nextTour = () => setCurrentIndex((prev) => (prev + 1) % tourData.length);
  const prevTour = () => setCurrentIndex((prev) => (prev - 1 + tourData.length) % tourData.length);

  // 2. Fullscreen Logic
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // 3. Download Logic (Downloads the thumbnail as a placeholder)
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = selectedTour.thumb;
    link.download = `TwelveSpace_${selectedTour.name}.jpg`;
    link.click();
  };
// // 1. Fullscreen Logic
//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       containerRef.current?.requestFullscreen();
//       setIsFullscreen(true);
//     } else {
//       document.exitFullscreen();
//       setIsFullscreen(false);
//     }
//   };

//   // 2. Download/Screenshot Logic
//   const handleDownload = () => {
//     // Logic to trigger file download
//     console.log("Downloading 4K View...");
//   };

  const zones = ["LOBBY", "ZONE-1", "ZONE-2"];
  
  const thumbs = [
    { id: "01", name: "ENTRY", img: "/assets/thumb1.jpg" },
    { id: "02", name: "LOBBY", img: "/assets/thumb2.jpg" },
    { id: "03", name: "RECEPTION", img: "/assets/thumb3.jpg" },
    { id: "04", name: "OUTDOOR LOUNGE", img: "/assets/thumb4.jpg" },
    { id: "05", name: "HIVE ENTRY", img: "/assets/thumb5.jpg" },
  ];

  return (
    <main className="bg-[#0B132B] text-white min-h-screen selection:bg-orange-500/30 cursor-none">
 <MagneticCursor />
      {/* <Navbar/> */}
      {/* 1. HERO / STATS SECTION */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h6 variants={fadeUp} custom={0} className="text-orange-500 font-bold tracking-[0.3em] uppercase mb-4">About Us</motion.h6>
            <motion.h1  variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Bridging Physical & <br/><span className="text-orange-500">Digital Reality</span></motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-gray-400 text-lg leading-relaxed mb-8">
              At <span className="text-orange-500 font-semibold">Twelve Space Studio</span>, we empower brands with Web- and VR/AR-enabled 360° virtual tours and real-time visualizations that bring unbuilt environments to life.
            </motion.p>
          </motion.div>
          
          {/* 3D Glassy Stats Cards */}
          <div className="grid grid-cols-2 gap-6 cursor-none">
            {[ 
                {v:"150+", l:"Projects Delivered"}, 
                {v:"50+", l:"Happy Clients"},
                {v:"5+", l:"Years Experience"} 
            ].map((s, i) => (
              <motion.div 
                key={i}
                data-cursor-text="Prev"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ rotateY: 15, rotateX: -5, y: -10, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className={`bg-white/5 backdrop-blur-2xl cursor-none border border-white/10 p-8 rounded-[2rem] shadow-3d  transition-colors duration-500 ${i === 2 ? "col-span-2" : ""}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="text-4xl md:text-5xl font-bold text-orange-500 block mb-2">{s.v}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">{s.l}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FOUNDER SECTION - Slide from Outside Animation */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE COMES FROM LEFT OUTSIDE SCREEN */}
          <motion.div 
            initial={{ x: -500, opacity: 0 }}
            data-cursor-text="prev"
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative group rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl"
          >
            <div  data-cursor-text="founder" className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"   />
            {/* Placeholder for Ar. Jeevanandham Image */}
            <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-gray-500">
               <span className="italic">Ar. Jeevanandham</span>
               <span className="text-[10px] uppercase tracking-tighter mt-2">Founder & Creative Director</span>
            </div>
            {/* Decorative Orange Line */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Ar. Jeevanandham</h2>
            <p className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-8">Founder & Creative Director</p>
            <div className="relative">
                <QuoteIcon className="absolute -top-6 -left-8 text-orange-500/20 w-16 h-16" />
                <p className="relative text-gray-300 text-xl md:text-2xl italic leading-relaxed font-light z-10">
                "Reimagining the boundaries of physical and digital reality, making the immersive experience of space accessible to anyone, anywhere".
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
    <section className="py-16 bg-[#0B132B] relative overflow-hidden">

  {/* Section Header */}
  <div className="max-w-3xl mx-auto text-center mb-20 px-6">
    <p className="text-orange-500 text-xs tracking-[0.35em] uppercase font-bold mb-4">
      Our Purpose
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Shaping the Future of <span className="text-orange-500">Digital Spaces</span>
    </h2>

    <p className="text-gray-400 text-lg leading-relaxed">
      At <span className="text-orange-500 font-semibold">Twelve Space Studio</span>, 
      our mission and vision guide every project we create.  
      We combine technology, design, and immersive storytelling to help brands 
      communicate spaces in powerful new ways.
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

    {[
      {
        Icon: Target,
        title: "Our Mission",
        text: "To empower real estate developers, architects, and property brands with immersive digital experiences that transform how people explore, understand, and connect with spaces."
      },
      {
        Icon: Eye,
        title: "Our Vision",
        text: "To redefine how architecture and real estate are experienced online by creating interactive virtual environments that make every project accessible from anywhere in the world."
      }
    ].map((item, i) => (

      <motion.div
        key={i}

        data-cursor-text={item.title}

        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.6 }}

        whileHover={{
          y: -18,
          rotateX: -5,
          rotateY: 8,
          scale: 1.02
        }}

        className="group relative p-12 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-2xl transition-all duration-500"
        style={{ transformStyle: "preserve-3d" }}
      >

        {/* Glow Gradient */}
        <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-400/10" />

        {/* Icon */}
        <item.Icon
          className="text-orange-500 mb-8 relative z-10"
          size={48}
        />

        {/* Title */}
        <h3 className="text-3xl font-bold mb-6 text-white relative z-10">
          {item.title}
        </h3>

        {/* Text */}
        <p className="text-gray-400 text-lg leading-relaxed font-light relative z-10">
          {item.text}
        </p>

      </motion.div>

    ))}

  </div>
</section>

      {/* 4. 360 VIRTUAL TOUR SHOWCASE */}


<section className="py-24 px-6 bg-[#0B132B]">
      <div className="max-w-6xl mx-auto">
        <div data-cursor-text="Explore" className="text-center mb-12">
          <h6 data-cursor-text="Explore"className="text-orange-500 text-xs font-bold uppercase tracking-[0.4em] mb-4">The Experience</h6>
          <h2 className="text-4xl md:text-5xl font-bold text-white">360° Interactive Showroom</h2>
        </div>

        <motion.div 
          ref={containerRef}
          className="relative aspect-video rounded-[2.5rem] overflow-hidden border-[10px] border-white/5 shadow-2xl bg-zinc-900"
        >
          {/* THE ACTUAL 360 VIEWER (IFRAME) */}
          <iframe
            src={selectedTour.url}
            className="w-full h-full border-none"
            allow="accelerometer; camera; gyroscope; vr"
            allowFullScreen
          />

          {/* TOP UI: CURRENT TOUR TITLE */}
          <div className="absolute top-8 left-8 z-30">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 px-5 py-2 rounded-xl">
              <p className="text-[11px] font-mono text-white font-bold tracking-tight">
                12SS_TOUR - {selectedTour.id}_{selectedTour.name}
              </p>
            </div>
          </div>

          {/* BOTTOM UI: CONTROL BAR */}
          {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-fit z-40">
            <div className="bg-black/80 backdrop-blur-2xl border border-white/20 rounded-full px-8 py-4 flex items-center gap-10">
              <button onClick={() => setShowThumbnails(!showThumbnails)} className={showThumbnails ? 'text-orange-500' : 'text-white/60'}>
                <Grid size={20} />
              </button>
              <div className="h-6 w-px bg-white/10" />
              <div className="flex items-center gap-8">
                <button onClick={() => window.location.reload()} className="text-white/60 hover:text-orange-500"><Home size={20} /></button>
                <button onClick={handleDownload} className="text-white/60 hover:text-orange-500"><Download size={20} /></button>
                <button className="text-white/60 hover:text-orange-500 flex items-center gap-2">
                  <Smartphone size={20} />
                  <span className="text-[10px] font-bold uppercase hidden md:inline">VR Mode</span>
                </button>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <button onClick={toggleFullscreen} className="text-white/60 hover:text-orange-500">
                {isFullscreen ? <X size={22} /> : <Maximize size={20} />}
              </button>
            </div>
          </div> */}

          {/* THUMBNAIL SLIDER */}
          <AnimatePresence>
            {showThumbnails && (
              <motion.div 
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 120, opacity: 0 }}
                className="absolute top-14 right-0 w-full px-8 z-30"
              >
                <div className="flex gap- overflow-x-auto pb-4 no-scrollbar ">
                  {tourData.map((tour, index) => (
                    <motion.div 
                      key={tour.id}
                      onClick={() => setCurrentIndex(index)}
                      whileHover={{ y: -5 }}
                      className={`min-w-[100px] aspect-video rounded-xl overflow-hidden  relative cursor-pointer transition-all ${
                        currentIndex === index ? "" : "border-white/10 opacity-60"
                      }`}
                    >
                      {/* <img src={tour.thumb} className="w-full h-full object-cover" alt={tour.name} /> */}
                      <div className="absolute bottom-2 left-2 text-[9px] font-bold text-white bg-black/90 px-2 py-1 rounded">
                        {tour.id} {tour.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SIDE ARROWS */}
          <button onClick={prevTour} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white hover:bg-orange-500 z-20 transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextTour} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white hover:bg-orange-500 z-20 transition-all">
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>
    </section>

    </main>
  );
}

// Custom Quote Icon for branding
function QuoteIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H2.017V21H5.017Z" />
        </svg>
    )
}