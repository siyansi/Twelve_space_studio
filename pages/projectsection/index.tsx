"use client"; // Essential fix for the 500 error

import { motion } from "framer-motion";
import Image from "next/image";
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

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative bg-black/95 py-24 md:py-32 overflow-hidden">
      
      {/* Background Accent - Orange Glow */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h6 className="text-orange-500 text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Our Portfolio
          </h6>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            See Our Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, rotateY: 5, rotateX: -2 }}
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-1.5 cursor-pointer shadow-2xl transition-all duration-500 ${
                i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.label}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-[4/3]"
                  }`}
                  placeholder="blur"
                />
                
                {/* Overlay with Orange Gradient on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-black/20 to-transparent flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm font-bold text-white uppercase tracking-widest">{project.label}</span>
                    <div className="h-0.5 w-8 bg-orange-500 mt-2" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;