"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Linkedin, MapPin, Mail,Facebook, Phone, ArrowUpRight } from "lucide-react";
import logo from "@/assets/12SS_LOGO=¥-WHITE.png";
import { IoLogoPinterest } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
     { icon: <Linkedin size={20} />, link: "https://in.linkedin.com/company/twelve-space-studio", color: "#0077b5" },
    { icon: <Youtube size={20} />, link: "https://youtube.com/@twelvespacestudio", color: "#ff0000" },
    { icon: <Instagram size={20} />, link: "https://www.instagram.com/twelve.space.studio/", color: "#e1306c" },
    { icon: <Facebook size={20} />, link: "https://www.facebook.com/profile.php?id=61576509179121", color: "#1877f2" },
    { icon: <IoLogoPinterest size={20} />, link: "https://pin.it/445q3bZkY", color: "#bd081c" },
  ];

  return (
    <footer id="contact" className="relative bg-black border-t border-white/10 overflow-hidden" style={{ fontFamily: 'Poppins' }}>
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* 1. BRAND COLUMN */}
          <div className="space-y-6">
            <div className="relative w-32 h-16 transition-transform duration-300 hover:scale-105">
              <Image
                src={logo.src}
                alt="12 Space Studio Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bridging the gap between physical spaces and digital reality. 
              Your premier <span className="text-white font-medium">PropTech</span> partner.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. NAVIGATION */}
          <div className="lg:pl-12">
            <h4 className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div>
            <h4 className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mb-8">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group cursor-pointer">
                <Mail size={16} className="text-gray-500 mt-1 group-hover:text-orange-500 transition-colors" />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">hello@twelvespace.studio</span>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <Phone size={16} className="text-gray-500 mt-1 group-hover:text-orange-500 transition-colors" />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">+91 74487 26030</span>
              </li>
            </ul>
          </div>

          {/* 4. LOCATION */}
          <div>
            <h4 className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mb-8">
              Location
            </h4>
            <div className="flex items-start gap-3 group">
              <MapPin size={18} className="text-orange-500 shrink-0 mt-1" />
              <address className="not-italic text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors">
                Twelve Space Studio,<br />
                The Hive, Level 3. VR Mall,<br />
                JN road, Anna Nagar,<br />
                Chennai, India – 600040.
              </address>
            </div>
            <Link 
              href="https://maps.google.com" 
              target="_blank" 
              className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-orange-500 uppercase tracking-widest hover:gap-3 transition-all"
            >
              View on Maps <ArrowUpRight size={12} />
            </Link>
          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
            © {currentYear} Twelve Space Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] text-gray-600 uppercase tracking-widest hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] text-gray-600 uppercase tracking-widest hover:text-orange-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;