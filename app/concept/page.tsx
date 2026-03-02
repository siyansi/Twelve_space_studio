"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import concept01 from "@/assets/concept-01.jpg";
import concept02 from "@/assets/blending-futuristic-building-seamlessly-into-desert-landscape.jpg";
import concept03 from "@/assets/concept-03.jpg";
import concept04 from "@/assets/concept-04.jpg";
import concept05 from "@/assets/concept-05.jpg";
import concept06 from "@/assets/concept-06.jpg";
import projectLiving from "@/assets/project-living-room.jpg";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBalcony from "@/assets/project-balcony.jpg";
import projectGarden from "@/assets/project-garden.jpg";
import serviceProptech from "@/assets/service-proptech.jpg";

const concepts = [
  { image: concept01, title: "Modern Luxury Apartment", category: "Interior Design" },
  { image: concept02, title: "Immersive Experience Center", category: "Digital Experience" },
  { image: concept03, title: "Villa Complex Aerial", category: "Real Estate" },
  { image: concept04, title: "Penthouse Night View", category: "Luxury Living" },
  { image: concept05, title: "Commercial Glass Facade", category: "Architecture" },
  { image: concept06, title: "VR Showroom Experience", category: "Virtual Reality" },
  { image: projectLiving, title: "Contemporary Living Space", category: "Interior Design" },
  { image: projectBedroom, title: "Serene Bedroom Suite", category: "Interior Design" },
  { image: projectKitchen, title: "Designer Kitchen", category: "Interior Design" },
  { image: projectBalcony, title: "Sky Terrace Lounge", category: "Outdoor Living" },
  { image: projectGarden, title: "Landscape Garden", category: "Outdoor Living" },
  { image: serviceProptech, title: "PropTech Innovation", category: "Technology" },
];

// Masonry-like row heights
const spans = [2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2];

const Concepts = () => {
  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      {/* <motion.header
        className="fixed top-0 left-0 right-0 z-50 glass-card"
        style={{ borderBottom: "1px solid hsl(var(--border) / 0.3)" }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <Link href="/" className="text-xl font-display font-bold">
            <span className="text-gradient">12</span>
            <span className="text-foreground"> SPACE STUDIO</span>
          </Link>
          <div className="w-20" />
        </div>
      </motion.header> */}

      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end pb-12 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={concept02.src}
            alt="Concepts hero"
            className="w-full h-full opacity-96  object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.h6
            className="text-primary drop-shadow-lg text-sm font-semibold uppercase tracking-widest mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Concepts
          </motion.h6>
          <motion.h1
            className="text-4xl md:text-5xl drop-shadow-lg lg:text-6xl font-display font-bold text-foreground max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Explore Our <span className="text-gradient drop-shadow-lg">Vision</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground mt-4 max-w-lg text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Dive into the creative concepts behind our immersive spaces
          </motion.p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-padding mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
            {concepts.map((concept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: (i % 3) * 0.1,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  spans[i] === 2 ? "row-span-2" : ""
                }`}
                style={{ perspective: "800px" }}
              >
                <motion.img
                  src={concept.image.src }
                  alt={concept.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 md:p-6">
                  <motion.span
                    className="text-xs text-primary font-semibold uppercase tracking-wider mb-1"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                  >
                    {concept.category}
                  </motion.span>
                  <span className="text-sm md:text-base font-display font-bold text-foreground">
                    {concept.title}
                  </span>
                </div>

                {/* Corner accent */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-primary font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center pt-4 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Ready to Create Something <span className="text-gradient">Extraordinary</span>?
          </h2>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-300 border-4 border-amber-500 px-8 py-3.5 rounded-full glass-card text-foreground font-medium text-sm hover:bg-primary/20 transition-all duration-300"
          >
            Get In Touch
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Concepts;
