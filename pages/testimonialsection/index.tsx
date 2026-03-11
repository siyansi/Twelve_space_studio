"use client"; // Fixes the createMotionComponent Server Error

import { motion, Variants } from "framer-motion"; // Added Variants for type safety
import { Quote } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    },
  }),
};

const testimonials = [
  {
    quote: "Twelve Space Studio's 3D tours changed how our clients view properties online. Engagement and inquiries went up within weeks.",
    name: "Rohan Sharma",
    role: "Founder – RealBuild Developers",
  },
  {
    quote: "The team was attentive and creative. Their digital solutions helped us showcase our projects beautifully and professionally.",
    name: "Neha Reddy",
    role: "Marketing Head – UrbanScape Projects",
  },
  {
    quote: "From planning to delivery, they made the process smooth. The virtual walk-throughs have become a key part of our sales pitch.",
    name: "Amit Patel",
    role: "Director – SkyView Homes",
  },
  {
    quote: "The digital marketing and 360° presentations gave us a clear edge in a crowded market. Highly recommended.",
    name: "Arjun Menon",
    role: "CEO – PrimeSpace Realty",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative bg-[#0B132B] py-24 md:py-32 overflow-hidden">
      
      {/* SECTION MERGE: Blends with the section above */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h6 
            variants={fadeUp}
            custom={0}
            className="text-orange-500 text-sm font-bold uppercase tracking-[0.3em] mb-4"
          >
            Testimonials
          </motion.h6>
          <motion.h2 
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Designing Dreams, Building Trust
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            custom={2}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light"
          >
            We believe our work is best explained by the people we work with.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, rotateY: 3, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl transition-all duration-500 cursor-default"
            >
              {/* Decorative Orange Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-orange-500/10 transition-colors" />
              
              <Quote className="text-orange-500/60 mb-6 group-hover:text-orange-500 transition-colors duration-300" size={32} />
              
              <p className="relative text-gray-300 text-base md:text-lg leading-relaxed mb-8 italic font-light">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-1 bg-orange-500 rounded-full" />
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wider">{t.name}</p>
                  <p className="text-orange-500/80 text-xs font-medium mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default TestimonialsSection;