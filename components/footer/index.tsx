"use client"; // Fixes the createMotionComponent error

import { motion } from "framer-motion";
import Link from "next/link"; // Next.js optimized routing

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-black border-t border-white/10 overflow-hidden">
      
      {/* Subtle background glow to merge with the section above */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 relative z-10">
        <motion.div
          className="grid md:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter text-white">
              <span className="text-orange-500">12</span> SPACE STUDIO
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Bridging the gap between physical spaces and digital reality. 
              Your premier <span className="text-white font-medium">PropTech</span> partner for immersive experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:pl-10">
            <h4 className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Concept", "Projects"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`}
                    className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mb-6">
              Expertise
            </h4>
            <ul className="space-y-3">
              {["Prop Tech", "Prop Branding", "Prop Marketing"].map((s) => (
                <li key={s} className="text-sm text-gray-500 cursor-default hover:text-white transition-colors">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            © {currentYear} Twelve Space Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
             <span className="text-[10px] text-gray-600 uppercase tracking-widest cursor-pointer hover:text-orange-500 transition-colors">Privacy</span>
             <span className="text-[10px] text-gray-600 uppercase tracking-widest cursor-pointer hover:text-orange-500 transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;