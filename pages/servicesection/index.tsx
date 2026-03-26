// import serviceProptech from "@/assets/service-proptech.jpg";
// import serviceBranding from "@/assets/service-branding.jpg";
// import serviceMarketing from "@/assets/service-marketing.jpg";

// const services = [
//   {
//     number: "01",
//     title: "PROP TECH",
//     image: serviceProptech,
//     items: [
//       { name: "360° Virtual Tour", desc: "Interactive tours that let users explore your space anytime, from anywhere." },
//       { name: "3D Visualizations", desc: "Realistic 3D visuals that help clients see the final design before it's built." },
//       { name: "Virtual Reality", desc: "Immersive VR experiences that bring spaces to life in a powerful, engaging way." },
//       { name: "360° Local Virtual Tours", desc: "Google-ready virtual tours that boost visibility and trust for local businesses." },
//     ],
//   },
//   {
//     number: "02",
//     title: "PROP BRANDING",
//     image: serviceBranding,
//     items: [
//       { name: "3D Cinematic Walkthrough", desc: "High-quality animated walkthroughs that showcase spaces with cinematic realism." },
//       { name: "Video Production", desc: "Professional videos crafted to tell your brand story and capture attention." },
//       { name: "Digital Content", desc: "Creative digital content designed to engage audiences and strengthen presence." },
//       { name: "App Development", desc: "Smart, user-friendly apps built to support your business goals and growth." },
//     ],
//   },
//   {
//     number: "03",
//     title: "PROP MARKETING",
//     image: serviceMarketing,
//     items: [
//       { name: "SEO", desc: "Search-optimized strategies that improve visibility and drive the right traffic." },
//       { name: "Web Development", desc: "Fast, responsive websites designed for smooth user experiences and strong performance." },
//       { name: "Social Media Marketing", desc: "Strategic content and campaigns that grow reach, engagement, and brand awareness." },
//       { name: "Ad Campaign", desc: "Targeted ad campaigns created to maximize reach, leads, and measurable results." },
//     ],
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="section-padding bg-secondary/30">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h6 className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
//             Our Services
//           </h6>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
//             Creative Designs For Inspiring Spaces
//           </h2>
//         </div>

//         <div className="space-y-16">
//           {services.map((service, i) => (
//             <div
//               key={service.number}
//               className={`grid md:grid-cols-2 gap-10 items-center ${
//                 i % 2 === 1 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               <div className={i % 2 === 1 ? "md:order-2" : ""}>
//                 <div className="overflow-hidden rounded-xl card-shadow">
//                   <img
//                     src={service.image.src}
//                     alt={service.title}
//                     className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//               <div className={i % 2 === 1 ? "md:order-1" : ""}>
//                 <div className="flex items-baseline gap-4 mb-6">
//                   <span className="text-5xl font-display font-bold text-primary/30">
//                     {service.number}
//                   </span>
//                   <h3 className="text-2xl font-display font-bold text-foreground">
//                     {service.title}
//                   </h3>
//                 </div>
//                 <div className="space-y-4">
//                   {service.items.map((item) => (
//                     <div key={item.name} className="border-l-2 border-primary/40 pl-4">
//                       <h4 className="text-sm font-semibold text-foreground mb-1">{item.name}</h4>
//                       <p className="text-sm text-muted-foreground">{item.desc}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
// "use client";
 

// import { motion } from "framer-motion";
// import Image from "next/image"; // Next.js optimized image component
// import serviceProptech from "@/assets/service-proptech.jpg";
// import serviceBranding from "@/assets/service-branding.jpg";
// import serviceMarketing from "@/assets/service-marketing.jpg";

// const services = [
//   {
//     number: "01",
//     title: "PROP TECH",
//     image: serviceProptech,
//     items: [
//       { name: "360° Virtual Tour", desc: "Interactive tours that let users explore your space anytime, from anywhere." },
//       { name: "3D Visualizations", desc: "Realistic 3D visuals that help clients see the final design before it's built." },
//       { name: "Virtual Reality", desc: "Immersive VR experiences that bring spaces to life in a powerful, engaging way." },
//       { name: "360° Local Virtual Tours", desc: "Google-ready virtual tours that boost visibility and trust for local businesses." },
//     ],
//   },
//   {
//     number: "02",
//     title: "PROP BRANDING",
//     image: serviceBranding,
//     items: [
//       { name: "3D Cinematic Walkthrough", desc: "High-quality animated walkthroughs that showcase spaces with cinematic realism." },
//       { name: "Video Production", desc: "Professional videos crafted to tell your brand story and capture attention." },
//       { name: "Digital Content", desc: "Creative digital content designed to engage audiences and strengthen presence." },
//       { name: "App Development", desc: "Smart, user-friendly apps built to support your business goals and growth." },
//     ],
//   },
//   {
//     number: "03",
//     title: "PROP MARKETING",
//     image: serviceMarketing,
//     items: [
//       { name: "SEO", desc: "Search-optimized strategies that improve visibility and drive the right traffic." },
//       { name: "Web Development", desc: "Fast, responsive websites designed for smooth user experiences and strong performance." },
//       { name: "Social Media Marketing", desc: "Strategic content and campaigns that grow reach, engagement, and brand awareness." },
//       { name: "Ad Campaign", desc: "Targeted ad campaigns created to maximize reach, leads, and measurable results." },
//     ],
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="py-20 md:py-32  bg-[#0B132B]  gradient-to-b from-[#0B1220] via-[#0B2639] to-[#0B1220]  ">
//       <div className="max-w-7xl mx-auto px-6">
//    <div className="max-w-7xl mx-auto px-6">
        
//         {/* Header with Magnetic Trigger */}
//         <motion.div
//           className="text-center mb-24"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           data-cursor-text="SERVICES"
//         >
//           <h6 className="text-[#F24E24] text-sm font-semibold uppercase tracking-[0.4em] mb-4">
//             OUR EXPERTISE
//           </h6>
//           <h2 className="text-4xl md:text-6xl font-display font-bold text-white/90">
//             Creative Designs For <br/> <span className="text-[#F24E24] italic">Inspiring Spaces</span>
//           </h2>
//         </motion.div>

//         {/* <div className="space-y-40">
//           {services.map((service, i) => (
//             <ServiceCard key={service.number} service={service} index={i} />
//           ))}
//         </div> */}
//       </div>

//         <div className="space-y-24 ">
//           {services.map((service, i) => (
//             <motion.div
//               key={service.number}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//               className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:order-1" : "md:order-2"} text-5xl font-display font-bold  text-[#F24E24]`} >
//               <motion.div
//                 className={i % 2 === 1 ? "md:order-2" : ""}
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.4 }}
//                 style={{ perspective: "1000px" }}
//               >
//                 <motion.div
//                  className="overflow-hidden rounded-2xl shadow-2xl bg-[#1A1A1A] p-1 border border-white/5"
//                   whileHover={{ rotateY: 3, rotateX: -2 }}
//                   transition={{ duration: 0.4 }}
//                   style={{ transformStyle: "preserve-3d" }}
//                 >
//                   {/* Replaced <img> with Next.js <Image /> */}
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     width={800}
//                     height={600}
//                     className="w-full aspect-[4/3] object-cover rounded-xl"
//                     placeholder="blur"
//                   />
//                 </motion.div>
//               </motion.div>

//               <div className={i % 2 === 1 ? "md:order-1" : ""}>
//                 <div className="flex items-baseline gap-4 mb-6">
//                   <motion.span
//                     className="text-5xl font-display font-bold text-primary/30\"
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                   >
//                     {service.number}
//                   </motion.span>
//                   <h3 className="text-2xl font-display font-bold text-white">
//                     {service.title}
//                   </h3>
//                 </div>
//                 <div className="space-y-4 cursor-pointer ">
//                   {service.items.map((item, j) => (
//                     <motion.div
//                       key={item.name}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: j * 0.1, duration: 0.5 }}
//                       whileHover={{ x: 8 }}
//                       className="border-l-2 border-[#F24E24] pl-4 cursor-default"
//                     >
//                         <span className="cursor-pointer">
//                       <h4 className="  text-sm font-semibold text-gray-200 mb-1">{item.name}</h4>
//                       <p className="  text-sm text-gray-700">{item.desc}</p></span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;



// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import concept01 from "@/assets/concept-01.jpg";
// import concept02 from "@/assets/blending-futuristic-building-seamlessly-into-desert-landscape.jpg";
// import concept03 from "@/assets/concept-03.jpg";
// import concept04 from "@/assets/concept-04.jpg";
// import concept05 from "@/assets/concept-05.jpg";
// import concept06 from "@/assets/concept-06.jpg";
// import projectLiving from "@/assets/project-living-room.jpg";
// import projectBedroom from "@/assets/project-bedroom.jpg";
// import projectKitchen from "@/assets/project-kitchen.jpg";
// import projectBalcony from "@/assets/project-balcony.jpg";
// import projectGarden from "@/assets/project-garden.jpg";
// import serviceProptech from "@/assets/service-proptech.jpg";

// const concepts = [
//   { image: concept01, title: "Modern Luxury Apartment", category: "Interior Design" },
//   { image: concept02, title: "Immersive Experience Center", category: "Digital Experience" },
//   { image: concept03, title: "Villa Complex Aerial", category: "Real Estate" },
//   { image: concept04, title: "Penthouse Night View", category: "Luxury Living" },
//   { image: concept05, title: "Commercial Glass Facade", category: "Architecture" },
//   { image: concept06, title: "VR Showroom Experience", category: "Virtual Reality" },
//   { image: projectLiving, title: "Contemporary Living Space", category: "Interior Design" },
//   { image: projectBedroom, title: "Serene Bedroom Suite", category: "Interior Design" },
//   { image: projectKitchen, title: "Designer Kitchen", category: "Interior Design" },
//   { image: projectBalcony, title: "Sky Terrace Lounge", category: "Outdoor Living" },
//   { image: projectGarden, title: "Landscape Garden", category: "Outdoor Living" },
//   { image: serviceProptech, title: "PropTech Innovation", category: "Technology" },
// ];

// // Masonry-like row heights
// const spans = [2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2];

// const Concepts = () => {
//   return (
//     <div className="min-h-screen bg-background pb-6">
//       {/* Hero Banner */}
      // <section className="relative h-[50vh] md:h-[60vh] flex items-end pb-12 overflow-hidden">
      //   <motion.div
      //     className="absolute inset-0"
      //     initial={{ scale: 1.15 }}
      //     animate={{ scale: 1 }}
      //     transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      //   >
      //     <img
      //       src={concept02.src}
      //       alt="Concepts hero"
      //       className="w-full h-full opacity-96  object-cover"
      //     />
      //     <div className="absolute inset-0 hero-overlay" />
      //   </motion.div>
      //   <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
      //     <motion.h6
      //       className="text-primary drop-shadow-lg text-sm font-semibold uppercase tracking-widest mb-3"
      //       initial={{ opacity: 0, y: 20 }}
      //       animate={{ opacity: 1, y: 0 }}
      //       transition={{ delay: 0.5, duration: 0.6 }}
      //     >
      //       Concepts
      //     </motion.h6>
      //     <motion.h1
      //       className="text-4xl md:text-5xl drop-shadow-lg lg:text-6xl font-display font-bold text-foreground max-w-2xl"
      //       initial={{ opacity: 0, y: 40 }}
      //       animate={{ opacity: 1, y: 0 }}
      //       transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      //     >
      //       Explore Our <span className="text-gradient drop-shadow-lg">Vision</span>
      //     </motion.h1>
      //     <motion.p
      //       className="text-muted-foreground mt-4 max-w-lg text-sm md:text-base"
      //       initial={{ opacity: 0, y: 20 }}
      //       animate={{ opacity: 1, y: 0 }}
      //       transition={{ delay: 1, duration: 0.6 }}
      //     >
      //       Dive into the creative concepts behind our immersive spaces
      //     </motion.p>
      //   </div>
      // </section>

//       {/* Masonry Grid */}
//       <section className="section-padding mt-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
//             {concepts.map((concept, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 60, scale: 0.9 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{
//                   delay: (i % 3) * 0.1,
//                   duration: 0.7,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
//                   spans[i] === 2 ? "row-span-2" : ""
//                 }`}
//                 style={{ perspective: "800px" }}
//               >
//                 <motion.img
//                   src={concept.image.src }
//                   alt={concept.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   loading="lazy"
//                 />
//                 {/* Overlay on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 md:p-6">
//                   <motion.span
//                     className="text-xs text-primary font-semibold uppercase tracking-wider mb-1"
//                     initial={{ y: 10, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                   >
//                     {concept.category}
//                   </motion.span>
//                   <span className="text-sm md:text-base font-display font-bold text-foreground">
//                     {concept.title}
//                   </span>
//                 </div>

//                 {/* Corner accent */}
//                 <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <span className="text-xs text-primary font-bold">
//                     {String(i + 1).padStart(2, "0")}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="section-padding text-center pt-4 ">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
//             Ready to Create Something <span className="text-gradient">Extraordinary</span>?
//           </h2>
//           <Link
//             href="/"
//             className="inline-flex items-center gap-2 bg-gray-300 border-4 border-amber-500 px-8 py-3.5 rounded-full glass-card text-foreground font-medium text-sm hover:bg-primary/20 transition-all duration-300"
//           >
//             Get In Touch
//             <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
//               →
//             </motion.span>
//           </Link>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Concepts;
"use client";

import { useState, useEffect  } from "react";
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
       <div className="text-center">
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
      <AnimatePresence>
  {modal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
     className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"    >

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setModal(null)}
        className="absolute top-4 left-4 z-[10000] p-4 bg-orange-200 text-black rounded-full shadow-xl active:scale-90 transition"
        style={{ touchAction: "manipulation" }}
      >
        <X size={28} strokeWidth={3} />
      </button>

      {/* ROTATED FULLSCREEN VIEW */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative flex items-center justify-center"
      >

        <div
          className={`
            relative bg-black overflow-hidden
            ${isMobile ? "rotate-90" : ""}
          `}
          style={
            isMobile
              ? {
                  width: "100vh",   // swapped
                  height: "100vw",  // swapped
                  transformOrigin: "center center",
                }
              : {
                  width: "95vw",
                  height: "90vh",
                  borderRadius: "2rem",
                }
          }
        >

          {/* IFRAME */}
          <iframe
            src={modal}
            className="w-full h-full"
            allowFullScreen
            allow="gyroscope; accelerometer; vr"
          />

        </div>
      </motion.div>

      {/* MOBILE HINT */}
      {isMobile && (
        <div className="absolute bottom-4 text-[10px] tracking-widest text-white/40">
          Forced Landscape Mode
        </div>
      )}
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