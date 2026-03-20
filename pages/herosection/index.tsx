"use client";

import { motion, Variants } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useRef } from "react";

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


const clients = [
  "Prestige Group", "Adani Realty", "Century Real Estate", "Embassy Group",
  "Sattva Group", "Bhartiya City", "M3M India", "Shapoorji Pallonji",
  "Deloitte", "Wipro", "Asian Paints", "HP",
  "Volvo", "Karle Town Centre", "Bren Corp", "Svamitva",
];


const HeroSection = () => {
  const title = "Create your Virtual Space with us!";
  const words = title.split(" ");


  
  return (
    <div className="select-none">
      <section id="home" className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden bg-black">
        {/* Video Background */}
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
            className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
          >
            <source src="/videos/VR.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#0b122082]" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl px-6 md:px-12 lg:px-20" style={{ perspective: "1000px" }}>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl text-white/90 font-display font-bold leading-tight flex flex-wrap gap-x-3"
            data-cursor-text="EXPLORE" // <--- Trigger for Magnetic Cursor
          >
            {words.map((word, wi) => {
        const isOrange = word === "Virtual" || word === "Space";
        return (
          <span key={wi} className="inline-flex overflow-hidden">
            {word.split("").map((char, ci) => (
              <motion.span
                key={`${wi}-${ci}`}
                // This 'custom' prop links to the (i) in letterVariants
                custom={wi * 4 + ci} 
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block ${isOrange ? "text-orange-500" : "text-white/90"}`}
                style={{ transformOrigin: "bottom" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
            )
          })}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-8"
          >
            <a
              href="/contact"
              data-cursor-text="GO" // <--- Trigger for Magnetic Cursor
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-4 border-gray-500 glass-card text-foreground font-medium text-sm bg-gray-400/20 hover:bg-[#F24E24] hover:border-[#F24E24] transition-all duration-500 group"
            >
             Book For Demo
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <FaArrowRightLong className="text-orange-500 hover:text-black" />
              </motion.span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative bg-[#0B132B] text-white py-24 md:py-20 overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-16 items-center relative z-20">
          
          {/* Left Side: Stats */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h6 variants={fadeUp} className="text-[#F24E24] text-sm font-bold uppercase tracking-[0.3em] mb-6">
              About Us
            </motion.h6>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i + 1}
                  variants={fadeUp}
                  data-cursor-text="INFO" // <--- Cursor says "INFO" on stats
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300"
                >
                  <div className="absolute -inset-0.5 bg-[#F24E24]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
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

          {/* Right Side: Text */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p
              variants={fadeUp}
              className="text-gray-300 leading-relaxed text-lg mb-8 font-light"
              data-cursor-text="READ" // <--- Cursor says "READ" on text
            >
              At <span className="text-[#F24E24] font-semibold">Twelve Space Studio</span>, we bridge
              the gap between physical spaces and digital reality.
            </motion.p>
            
            <motion.a
              variants={fadeUp}
              href="/about"
              data-cursor-text="CLICK"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white/5 border border-white/20 text-white font-medium text-sm hover:bg-[#F24E24] transition-all duration-300"
            >
              Know More
            </motion.a>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default HeroSection;