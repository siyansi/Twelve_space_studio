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
"use client";
 

import { motion } from "framer-motion";
import Image from "next/image"; // Next.js optimized image component
import serviceProptech from "@/assets/service-proptech.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";

const services = [
  {
    number: "01",
    title: "PROP TECH",
    image: serviceProptech,
    items: [
      { name: "360° Virtual Tour", desc: "Interactive tours that let users explore your space anytime, from anywhere." },
      { name: "3D Visualizations", desc: "Realistic 3D visuals that help clients see the final design before it's built." },
      { name: "Virtual Reality", desc: "Immersive VR experiences that bring spaces to life in a powerful, engaging way." },
      { name: "360° Local Virtual Tours", desc: "Google-ready virtual tours that boost visibility and trust for local businesses." },
    ],
  },
  {
    number: "02",
    title: "PROP BRANDING",
    image: serviceBranding,
    items: [
      { name: "3D Cinematic Walkthrough", desc: "High-quality animated walkthroughs that showcase spaces with cinematic realism." },
      { name: "Video Production", desc: "Professional videos crafted to tell your brand story and capture attention." },
      { name: "Digital Content", desc: "Creative digital content designed to engage audiences and strengthen presence." },
      { name: "App Development", desc: "Smart, user-friendly apps built to support your business goals and growth." },
    ],
  },
  {
    number: "03",
    title: "PROP MARKETING",
    image: serviceMarketing,
    items: [
      { name: "SEO", desc: "Search-optimized strategies that improve visibility and drive the right traffic." },
      { name: "Web Development", desc: "Fast, responsive websites designed for smooth user experiences and strong performance." },
      { name: "Social Media Marketing", desc: "Strategic content and campaigns that grow reach, engagement, and brand awareness." },
      { name: "Ad Campaign", desc: "Targeted ad campaigns created to maximize reach, leads, and measurable results." },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-[#0B1220] via-[#0B2639] to-[#0B1220]  ">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
         <h6 className="text-[#F24E24] text-sm font-semibold uppercase tracking-widest mb-4">
  OUR SERVICES
</h6>

<h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#E5E7EB]">
  Creative Designs For Inspiring Spaces
</h2>
        </motion.div>

        <div className="space-y-24 ">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:order-1" : "md:order-2"} text-5xl font-display font-bold  text-[#F24E24]`} >
              <motion.div
                className={i % 2 === 1 ? "md:order-2" : ""}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                style={{ perspective: "1000px" }}
              >
                <motion.div
                 className="overflow-hidden rounded-2xl shadow-2xl bg-[#ceccd9] p-1 border border-white/5"
                  whileHover={{ rotateY: 3, rotateX: -2 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Replaced <img> with Next.js <Image /> */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover rounded-xl"
                    placeholder="blur"
                  />
                </motion.div>
              </motion.div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="flex items-baseline gap-4 mb-6">
                  <motion.span
                    className="text-5xl font-display font-bold text-primary/30\"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {service.number}
                  </motion.span>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="space-y-4 cursor-pointer ">
                  {service.items.map((item, j) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.1, duration: 0.5 }}
                      whileHover={{ x: 8 }}
                      className="border-l-2 border-[#F24E24] pl-4 cursor-default"
                    >
                        <span className="cursor-pointer">
                      <h4 className="  text-sm font-semibold text-gray-200 mb-1">{item.name}</h4>
                      <p className="  text-sm text-gray-700">{item.desc}</p></span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;