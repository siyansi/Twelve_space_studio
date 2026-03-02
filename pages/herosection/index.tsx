"use client"; // Fixes the Server/Client 500 Error

import { motion, Variants } from "framer-motion"; // Fixes the Variant type error
import Image from "next/image";
import heroImage from "@/assets/hero-fallback.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

// Explicitly typing as Variants fixes the "error line" on the variants prop
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.5 + i * 0.03,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.15, 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    },
  }),
};

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
];

const HeroSection = () => {
  const title = "Transforming Spaces Into Immersive Digital Experiences";
  const words = title.split(" ");

  return (
    <div>

    
    <section id="home" className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden bg-black">
  {/* Video Background Container */}
  <motion.div
    className="absolute inset-0 z-0"
    initial={{ scale: 1.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] saturate-[0.8] sepia-[0.1]"
    >
      {/* CORRECTED PATH: Removed 'public' from the string */}
      <source src="/videos/VR.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* AESTHETIC OVERLAYS */}
    
    {/* 1. The "Old Film" Grain/Noise Overlay */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUPr9WUM/giphy.gif')] mix-blend-screen" />

    {/* 2. Gradient Shade (Top to Bottom) */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0B1220]" />

    {/* 3. Soft Vignette (Edges) */}
    <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
  </motion.div>

  {/* AESTHETIC OVERLAYS */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none  mix-blend-screen" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0B1220]" />
    <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />

  {/* Content (Text/Logo) */}
  <div className="relative z-10 max-w-4xl px-6 md:px-12 lg:px-20">
    {/* ... Your existing word/letter animation code here ... */}
  </div>
      {/* Content — motion letters */}
      <div className="relative z-10 max-w-4xl px-6 md:px-12 lg:px-20 "    style={{ perspective: "1000px" }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white/90 font-display font-bold leading-tight text-foreground flex flex-wrap gap-x-3">
          {words.map((word, wi) => (
            <span key={wi} className="inline-flex overflow-hidden">
              {word.split("").map((char, ci) => (
                <motion.span
                  key={`${wi}-${ci}`}
                  custom={wi * 4 + ci} // Passes the index to the variant function
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{ transformOrigin: "bottom" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full  border-4 border-gray-500 glass-card text-foreground font-medium text-sm bg-gray-400 hover:bg-primary/20 transition-all duration-300 group"
          >
            Explore Our Work
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
                <span className="text-orange-200 group-hover:text-orange-300 transition-colors duration-300">
              <FaArrowRightLong /></span>  
            </motion.span>
          </a>
        </motion.div>
      </div>

       
    </section>
 <section id="about" className="relative bg-gradient-to-b from-[#0B1220] via-[#0B2639] to-[#0B1220]    text-white py-24 md:py-20 overflow-hidden">
            
            {/* SECTION MERGE: This gradient blends the Hero image into this section */}
            <div className="absolute top-0 left-0 w-full h-32  z-10" />
      
            <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-16 items-center relative z-20">
              
              {/* Left Side: Stats with 3D Glassy Finish */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h6
                  custom={0}
                  variants={fadeUp}
                  className="text-[#F24E24] text-sm font-bold uppercase tracking-[0.3em] mb-6"
                >
                  About Us
                </motion.h6>
      
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      custom={i + 1}
                      variants={fadeUp}
                      whileHover={{ 
                        y: -10, 
                        rotateY: 10, 
                        backgroundColor: "rgba(255, 255, 255, 0.1)" 
                      }}
                      className="relative group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl cursor-default transition-all duration-300"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Subtle Glow behind cards */}
                      <div className="absolute -inset-0.5 bg-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                      
                      <span className="relative text-3xl md:text-4xl font-bold bg-[#F24E24] bg-clip-text text-transparent block">
                        {stat.value}
                      </span>
                      <span className="relative text-[10px] text-gray-400 mt-2 block uppercase tracking-widest font-medium">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
      
              {/* Right Side: Text Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.p
                  custom={0}
                  variants={fadeUp}
                  className="text-gray-300 leading-relaxed text-lg md:text-lg mb-8 font-light"
                >
                  At <span className="text-[#F24E24] font-semibold">Twelve Space Studio</span>, we bridge
                  the gap between physical spaces and digital reality. As a premier PropTech agency, we
                  specialize in creating <span className="text-white italic">immersive digital assets</span> that transform how developers present,
                  sell, and scale their projects.
                </motion.p>
                
                <motion.a
                  custom={1}
                  variants={fadeUp}
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white/5 border border-white/20 text-white font-medium text-sm hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 backdrop-blur-sm shadow-xl"
                >
                  Know More
                </motion.a>
              </motion.div>
            </div>
      
            {/* BACKGROUND ACCENT: A subtle glassy orb for depth */}
            {/* <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" /> */}
          </section>

         
</div>

  );
};

export default HeroSection;