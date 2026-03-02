import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import vrHeadset from "@/assets/vr-headset.png";
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

  // VR headset slides in from top as section scrolls into view
  const headsetY = useTransform(scrollYProgress, [0, 1], ["-120%", "0%"]);
  const headsetOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const headsetRotate = useTransform(scrollYProgress, [0, 1], [-20, 0]);

  return (
    <section id="projects" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            See Our Projects
          </h2>
          <p className="text-muted-foreground mt-4 text-sm md:text-base max-w-lg mx-auto">
            Click any project to experience it in immersive VR view
          </p>
        </motion.div>

        {/* Floating VR headset that slides from top */}
        <motion.div
          className="flex justify-center mb-10 pointer-events-none"
          style={{ y: headsetY, opacity: headsetOpacity, rotateX: headsetRotate }}
        >
          <motion.img
            src={vrHeadset.src}
            alt="VR Headset"
            className="w-32 h-32 md:w-44 md:h-44 object-contain"
            style={{
              filter: "drop-shadow(0 20px 40px hsl(0 0% 0% / 0.25)) drop-shadow(0 0 60px hsl(var(--primary) / 0.1))",
            }}
            animate={{ y: [0, -8, 0], rotateY: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, rotateY: 3, rotateX: -2 }}
              style={{ perspective: "800px", transformStyle: "preserve-3d" }}
              className={`group relative overflow-hidden rounded-2xl shadow-3d glass-card p-1 cursor-pointer ${
                i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
              }`}
              onClick={() => setActiveImage(i)}
            >
              <img
                src={project.image.src}
                alt={project.label}
                className={`w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ${
                  i === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-[4/3]"
                }`}
                loading="lazy"
              />
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end justify-between p-4 md:p-6 rounded-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm font-semibold text-foreground">{project.label}</span>
                <span className="text-xs text-primary font-medium flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  View in VR
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen VR Viewer Overlay */}
      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setActiveImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* VR Headset fullscreen view */}
            <motion.div
              className="relative z-10 w-[90vw] h-[70vh] md:w-[75vw] md:h-[75vh] max-w-[900px] max-h-[700px]"
              initial={{ scale: 0.3, y: -200, rotateX: 30 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.3, y: -200, rotateX: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              style={{ perspective: "1500px" }}
            >
              {/* Image inside VR lens */}
              <div
                className="absolute overflow-hidden rounded-[25%] z-0"
                style={{
                  top: "25%",
                  left: "12%",
                  width: "76%",
                  height: "36%",
                }}
              >
                <motion.img
                  src={projects[activeImage].image.src}
                  alt={projects[activeImage].label}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.4 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Glass reflection */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, hsl(0 0% 100% / 0.1) 0%, transparent 50%, hsl(0 0% 100% / 0.04) 100%)",
                  }}
                />
              </div>

              {/* VR Headset frame */}
              <img
                src={vrHeadset.src}
                alt="VR Headset"
                className="absolute inset-0 w-full h-full object-contain z-10"
                style={{
                  filter: "drop-shadow(0 30px 60px hsl(0 0% 0% / 0.5)) drop-shadow(0 0 100px hsl(var(--primary) / 0.15))",
                }}
              />
            </motion.div>

            {/* Project label */}
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                {projects[activeImage].label}
              </h3>
              <p className="text-muted-foreground text-sm">
                Immersive 360° VR Experience
              </p>
              <motion.button
                className="mt-4 px-6 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveImage(null)}
              >
                Close VR View
              </motion.button>
            </motion.div>

            {/* Navigation arrows */}
            <motion.button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage((activeImage - 1 + projects.length) % projects.length);
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>
            <motion.button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage((activeImage + 1) % projects.length);
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VRProjectViewer;
