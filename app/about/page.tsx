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
import { FaLinkedin } from "react-icons/fa";
import heroimage from "../../assets/hero.jpg";
import MagneticCursor from "@/components/MagneticCursor";
import heroimage2 from "../../assets/Adobe Express - file.png";

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
       <div className="max-w-7xl mx-auto">
    
    {/* BIG PAGE HEADING */}
    <div className="flex justify-between  ">

    <div className="mb-24 ">
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-orange-500 font-bold tracking-[0.5em] uppercase mb-4 text-xs"
      >
        Twelve Space Studio
      </motion.p>
      {/* <FallingLetters text="THE EXPERIENCE" /> */}
      <div className="flex gap-4 items-center">
         <div className="h-[2px] w-20 bg-orange-500" />
         <span className="text-4xl md:text-6xl font-light italic">Revolution</span>
      </div>
        
    </div>
    <div className="pr-30 ">
    <img 
      src={heroimage2.src}
      alt="Architectural visualization" 
      className=" object-cover h-42  transition-transform duration-500 group-hover:scale-105 "
    />
    {/* Glowing border effect on hover */}
    {/* <div className="absolute inset-0 border-2 border-orange-500/0 rounded-2xl group-hover:border-orange-500 group-hover:drop-shadow-[0_0_15px_rgba(255,107,0,0.5)] transition-all duration-300 pointer-events-none" /> */}
  </div>
</div>
    <div className="grid lg:grid-cols-12 gap-20 items-start">
      
      {/* LEFT CONTENT */}
      <motion.div 
        className="lg:col-span-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
          Engineering the <span className="text-orange-500">Experience</span> <br/>
          of Being There.
        </h2>

        <div className="space-y-8 text-gray-400 text-xl leading-relaxed max-w-2xl">
          <p>
            We empower brands with custom, web-integrated <span className="text-white font-medium">360° tours</span> and real-time 3D visualizations that can be experienced seamlessly across mobile, desktop, and VR.
          </p>
          <p>
            At Twelve Space Studio, we don’t just visualize architecture; we engineer the experience of being there, turning potential buyers into <span className="text-orange-500 font-semibold underline underline-offset-8">confident investors</span>.
          </p>
        </div>
      </motion.div>

      {/* RIGHT STATS - 3D GLASSY CARDS */}
      <div className="lg:col-span-5 grid grid-cols-2 gap-8">
        {[ 
          {v:"", l:"Projects"}, 
          {v:"", l:"Clients"},
          {v:"", l:"Years Exp"} 
        ].map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, rotateY: -30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ 
              rotateY: 20, 
              rotateX: -10, 
              scale: 1.05,
              borderColor: "#F24E24"
            }}
            className={`bg-[#34D399]/5 backdrop-blur-3xl border border-white/5 p-12 rounded-[3rem] transition-all duration-500 flex flex-col items-center justify-center text-center ${i === 2 ? "col-span-2" : ""}`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="text-5xl md:text-7xl font-bold text-orange-500 block mb-3 tracking-tighter">
              {s.v}
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-widest font-black">
              {s.l}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
      </section>

      {/* 2. FOUNDER SECTION - Slide from Outside Animation */}
     <section className="py-24 relative overflow-hidden">

  {/* Background Glow */}
  {/* <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full" />
  <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" /> */}

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

    {/* IMAGE BLOCK */}
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative group rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]"
    >

      {/* Image */}
      <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-gray-500 group-hover:scale-105 transition-transform duration-700">
        {/* Replace this with your Image */}
          <Image 
            src={heroimage}
            alt="Ar. Jeevanandham"
              className="object-cover w-full h-full"
           
          />
        {/* <span className="italic text-lg">Ar. Jeevanandham</span>
        <span className="text-[10px] uppercase tracking-widest mt-2">
          Founder & Creative Director
        </span> */}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />

    </motion.div>

    {/* TEXT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative"
    >

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
        Ar. Jeevanandham
      </h2>

      <p className="text-orange-500 font-semibold tracking-[0.3em] text-sm uppercase mb-6">
        Founder & Creative Director
      </p>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jeeva-nandham/"
        target="_blank"
        className="inline-flex items-center gap-3 mb-10 text-gray-300 hover:text-white transition"
      >
        <FaLinkedin className="text-orange-500 text-xl" />
        <span className="text-sm tracking-wide">
          Connect on LinkedIn
        </span>
      </a>

      {/* Quote */}
      <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">

        <svg
          className="absolute -top-8 -left-6 w-20 h-20 text-orange-500/20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.17 6A5.001 5.001 0 002 11v7h7v-7H6.83A3.001 3.001 0 0110 8V6H7.17zM17.17 6A5.001 5.001 0 0012 11v7h7v-7h-2.17A3.001 3.001 0 0120 8V6h-2.83z"/>
        </svg>

        <p className="relative text-gray-300 text-xl md:text-2xl italic leading-relaxed font-light z-10">
          "Reimagining the boundaries of physical and digital reality,
          making the immersive experience of space accessible to anyone,
          anywhere."
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






// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Eye, MoveLeft, MoveRight } from "lucide-react";
// import Image from "next/image";

// /* PROJECT IMAGES */
// import projectLiving from "@/assets/project-living-room.jpg";
// import projectBedroom from "@/assets/project-bedroom.jpg";
// import projectKitchen from "@/assets/project-kitchen.jpg";
// import projectBalcony from "@/assets/project-balcony.jpg";
// import projectGarden from "@/assets/project-garden.jpg";
// import projectTerrace from "@/assets/project-terrace.jpg";
// import projectBathroom from "@/assets/project-bathroom.jpg";
// import projectOffice from "@/assets/project-office.jpg";

// /* BEFORE IMAGES */
// import beforeLiving from "@/assets/before-living.jpg";
// import beforeKitchen from "@/assets/before-kitchen.jpg";
// import beforeBedroom from "@/assets/before-bedroom.jpg";

// /* ===============================
//    STATS COUNTER
// ================================ */

// const StatCounter = ({ end, label }: { end: number; label: string }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000;
//     const increment = end / (duration / 16);

//     const timer = setInterval(() => {
//       start += increment;

//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(timer);
//   }, [end]);

//   return (
//     <div className="text-center">
//       <div className="text-4xl md:text-5xl font-bold text-white mb-2">
//         {count}+
//       </div>

//       <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
//         {label}
//       </div>
//     </div>
//   );
// };

// /* ===============================
//    BEFORE AFTER SLIDER
// ================================ */

// const BeforeAfter = ({
//   before,
//   after,
//   title,
// }: {
//   before: any;
//   after: any;
//   title: string;
// }) => {
//   const [sliderPos, setSliderPos] = useState(50);

//   return (
//     <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">
//       <div className="relative h-[420px] w-full select-none overflow-hidden">
//         <Image src={after} alt="after" fill className="object-cover" />

//         <motion.div
//           className="absolute inset-y-0 left-0 z-10 overflow-hidden"
//           style={{ width: `${sliderPos}%` }}
//         >
//           <div className="relative h-full w-[100vw]">
//             <Image src={before} alt="before" fill className="object-cover" />
//           </div>
//         </motion.div>

//         {/* slider line */}

//         <div
//           className="absolute inset-y-0 z-20 w-1 bg-white"
//           style={{ left: `${sliderPos}%` }}
//         >
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl">
//             <MoveLeft size={14} className="text-black" />
//             <MoveRight size={14} className="text-black" />
//           </div>
//         </div>

//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={sliderPos}
//           onChange={(e) => setSliderPos(Number(e.target.value))}
//           className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
//         />
//       </div>

//       <div className="p-6 text-center">
//         <h4 className="text-white font-bold">{title}</h4>
//       </div>
//     </div>
//   );
// };

// /* ===============================
//    PORTFOLIO PAGE
// ================================ */

// export default function PortfolioPage() {
//   const [filter, setFilter] = useState("All");

//   const projects = [
//     {
//       title: "Modern Living Room",
//       loc: "Dubai, UAE",
//       cat: "Interior",
//       img: projectLiving,
//     },
//     {
//       title: "Chef's Kitchen",
//       loc: "London, UK",
//       cat: "Interior",
//       img: projectKitchen,
//     },
//     {
//       title: "Master Bedroom",
//       loc: "Mumbai, India",
//       cat: "Interior",
//       img: projectBedroom,
//     },
//     {
//       title: "Luxury Balcony",
//       loc: "Sydney",
//       cat: "Exterior",
//       img: projectBalcony,
//     },
//     {
//       title: "Garden Retreat",
//       loc: "Bangkok",
//       cat: "Exterior",
//       img: projectGarden,
//     },
//     {
//       title: "Sky Terrace",
//       loc: "Singapore",
//       cat: "Exterior",
//       img: projectTerrace,
//     },
//     {
//       title: "Spa Bathroom",
//       loc: "Milan",
//       cat: "Interior",
//       img: projectBathroom,
//     },
//     {
//       title: "Creative Office",
//       loc: "New York",
//       cat: "Commercial",
//       img: projectOffice,
//     },
//   ];

//   const filtered =
//     filter === "All" ? projects : projects.filter((p) => p.cat === filter);

//   return (
//     <div className="min-h-screen bg-[#050A09] text-white py-20 px-6">
//       {/* HEADER */}

//       <section className="max-w-7xl mx-auto text-center mb-32">
//         <span className="text-[#F97316] uppercase tracking-[0.5em] text-xs font-black">
//           Our Work
//         </span>

//         <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mt-4 mb-6">
//           Design{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-white">
//             Portfolio
//           </span>
//         </h1>

//         <p className="max-w-2xl mx-auto text-gray-500 text-lg">
//           Explore our curated collection of interior, exterior and commercial
//           spaces designed using immersive VR visualization.
//         </p>
//       </section>

//       {/* STATS */}

//       <section className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-40 border-y border-white/5 py-16">
//         <StatCounter end={120} label="Projects Completed" />
//         <StatCounter end={45} label="Happy Clients" />
//         <StatCounter end={8} label="Design Awards" />
//         <StatCounter end={15} label="Countries" />
//       </section>

//       {/* FILTER */}

//       <div className="flex justify-center gap-4 mb-20 flex-wrap">
//         {["All", "Interior", "Exterior", "Commercial"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setFilter(cat)}
//             className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all border
//             ${
//               filter === cat
//                 ? "bg-[#F97316] border-[#F97316] text-black"
//                 : "border-white/10 text-gray-400 hover:border-[#F97316]"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* PROJECT GRID */}

//       <motion.div
//         layout
//         className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-40"
//       >
//         <AnimatePresence>
//           {filtered.map((p) => (
//             <motion.div
//               key={p.title}
//               layout
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.5 }}
//               className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5"
//             >
//               <Image
//                 src={p.img}
//                 alt={p.title}
//                 fill
//                 className="object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

//               {/* hover */}

//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="flex flex-col items-center gap-2">
//                   <div className="w-14 h-14 bg-[#F97316] rounded-full flex items-center justify-center text-black">
//                     <Eye size={24} />
//                   </div>

//                   <span className="text-xs font-bold uppercase tracking-tighter">
//                     View Project
//                   </span>
//                 </div>
//               </div>

//               {/* text */}

//               <div className="absolute bottom-10 left-10 right-10">
//                 <span className="text-[#F97316] text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
//                   {p.cat}
//                 </span>

//                 <h3 className="text-2xl font-bold text-white">{p.title}</h3>

//                 <p className="text-gray-500 text-xs mt-1">{p.loc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>

//       {/* BEFORE AFTER */}

//       <section className="max-w-7xl mx-auto mb-40">
//         <div className="text-center mb-16">
//           <span className="text-[#F97316] uppercase tracking-[0.5em] text-[10px] font-black">
//             Transformations
//           </span>

//           <h2 className="text-5xl font-bold mt-4">Before & After</h2>

//           <p className="text-gray-400 mt-2">
//             Drag the slider to reveal the transformation
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-10">
//           <BeforeAfter
//             before={beforeLiving}
//             after={projectLiving}
//             title="Living Room Transformation"
//           />

//           <BeforeAfter
//             before={beforeKitchen}
//             after={projectKitchen}
//             title="Kitchen Renovation"
//           />

//           <BeforeAfter
//             before={beforeBedroom}
//             after={projectBedroom}
//             title="Bedroom Redesign"
//           />
//         </div>
//       </section>

//       {/* CTA */}

//       <section className="max-w-7xl mx-auto rounded-[4rem] bg-[#F97316] p-20 text-center text-black">
//         <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
//           Ready to Visualize <br /> Your Project?
//         </h2>

//         <button className="bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest flex items-center gap-4 mx-auto hover:scale-105 transition-transform">
//           Start the Journey <ArrowRight size={20} />
//         </button>
//       </section>
//     </div>
//   );
// }

