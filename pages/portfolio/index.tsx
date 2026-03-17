
"use client";

import { useState, useEffect, useRef } from "react";
import {  useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";

/* PROJECT IMAGES */
import projectLiving from "@/assets/project-living-room.jpg";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBalcony from "@/assets/project-balcony.jpg";
import projectGarden from "@/assets/project-garden.jpg";
import projectTerrace from "@/assets/project-terrace.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectOffice from "@/assets/project-office.jpg";

/* BEFORE IMAGES */
import beforeLiving from "@/assets/before-living.jpg";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import beforeBedroom from "@/assets/before-bedroom.jpg";

/* ===============================
   STATS COUNTER
================================ */
const StatCounter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  // once: true means it only triggers the first time you scroll to it
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center group">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-display font-bold text-white mb-2 group-hover:text-[#FF6B00] transition-colors duration-500"
      >
        {count}<span className="text-[#FF6B00]">+</span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold"
      >
        {label}
      </motion.div>
      
      {/* Subtle glow line that appears when in view */}
      <motion.div 
        initial={{ width: 0 }}
        animate={isInView ? { width: "40%" } : {}}
        className="h-[1px] bg-[#FF6B00]/30 mx-auto mt-4"
      />
    </div>
  );
};
/* ===============================
   BEFORE AFTER SLIDER
================================ */

const BeforeAfter = ({
  before,
  after,
  title,
}: {
  before: any;
  after: any;
  title: string;
}) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">
      <div className="relative h-[420px] w-full select-none overflow-hidden">
        <Image src={after} alt="after" fill className="object-cover" />

        <motion.div
          className="absolute inset-y-0 left-0 z-10 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative h-full w-[100vw]">
            <Image src={before} alt="before" fill className="object-cover" />
          </div>
        </motion.div>

        {/* slider line */}

        <div
          className="absolute inset-y-0 z-20 w-1 bg-white"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl">
            <MoveLeft size={14} className="text-black" />
            <MoveRight size={14} className="text-black" />
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
        />
      </div>

      <div className="p-6 text-center">
        <h4 className="text-white font-bold">{title}</h4>
      </div>
    </div>
  );
};

/* ===============================
   PORTFOLIO PAGE
================================ */

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Modern Living Room",
      loc: "Dubai, UAE",
      cat: "Interior",
      img: projectLiving,
    },
    {
      title: "Chef's Kitchen",
      loc: "London, UK",
      cat: "Interior",
      img: projectKitchen,
    },
    {
      title: "Master Bedroom",
      loc: "Mumbai, India",
      cat: "Interior",
      img: projectBedroom,
    },
    {
      title: "Luxury Balcony",
      loc: "Sydney",
      cat: "Exterior",
      img: projectBalcony,
    },
    {
      title: "Garden Retreat",
      loc: "Bangkok",
      cat: "Exterior",
      img: projectGarden,
    },
    {
      title: "Sky Terrace",
      loc: "Singapore",
      cat: "Exterior",
      img: projectTerrace,
    },
    {
      title: "Spa Bathroom",
      loc: "Milan",
      cat: "Interior",
      img: projectBathroom,
    },
    {
      title: "Creative Office",
      loc: "New York",
      cat: "Commercial",
      img: projectOffice,
    },
  ];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <div className="min-h-screen bg-[#0B132B] text-white py-20 px-6">
      {/* HEADER */}

      <section className="max-w-7xl mx-auto text-center mb-32">
        <span className="text-[#F97316] uppercase tracking-[0.5em] text-xs font-black">
          Our Work
        </span>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mt-4 mb-6">
          Design{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-white">
            Portfolio
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-500 text-lg">
          Explore our curated collection of interior, exterior and commercial
          spaces designed using immersive VR visualization.
        </p>
      </section>

      {/* STATS */}

     <section className=" py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-white/5 py-20 relative overflow-hidden">
          
          {/* Subtle background glow for the whole section */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6B00]/5 to-transparent pointer-events-none" />

          <StatCounter end={120} label="Projects Completed" />
          <StatCounter end={45} label="Happy Clients" />
          <StatCounter end={8} label="Design Awards" />
          <StatCounter end={15} label="Countries" />
        </div>
      </div>
    </section>

      {/* FILTER */}

      <div className="flex justify-center gap-4 mb-20 flex-wrap">
        {["All", "Interior", "Exterior", "Commercial"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all border
            ${
              filter === cat
                ? "bg-[#F97316] border-[#F97316] text-black"
                : "border-white/10 text-gray-400 hover:border-[#F97316]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}

      <motion.div
        layout
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-40"
      >
        <AnimatePresence>
          {filtered.map((p) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5"
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* hover */}

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-[#F97316] rounded-full flex items-center justify-center text-black">
                    <Eye size={24} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-tighter">
                    View Project
                  </span>
                </div>
              </div>

              {/* text */}

              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-[#F97316] text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
                  {p.cat}
                </span>

                <h3 className="text-2xl font-bold text-white">{p.title}</h3>

                <p className="text-gray-500 text-xs mt-1">{p.loc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* BEFORE AFTER */}

      <section className="max-w-7xl mx-auto mb-40">
        <div className="text-center mb-16">
          <span className="text-[#F97316] uppercase tracking-[0.5em] text-[10px] font-black">
            Transformations
          </span>

          <h2 className="text-5xl font-bold mt-4">Before & After</h2>

          <p className="text-gray-400 mt-2">
            Drag the slider to reveal the transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <BeforeAfter
            before={beforeLiving}
            after={projectLiving}
            title="Living Room Transformation"
          />

          <BeforeAfter
            before={beforeKitchen}
            after={projectKitchen}
            title="Kitchen Renovation"
          />

          <BeforeAfter
            before={beforeBedroom}
            after={projectBedroom}
            title="Bedroom Redesign"
          />
        </div>
      </section>

      {/* CTA */}

      <section className="max-w-7xl mx-auto rounded-[4rem] bg-[#F97316] p-20 text-center text-black">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
          Ready to Visualize <br /> Your Project?
        </h2>

        <button className="bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest flex items-center gap-4 mx-auto hover:scale-105 transition-transform">
          Start the Journey <ArrowRight size={20} />
        </button>
      </section>
    </div>
  );
}
