"use client";

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Brain, LineChart, ShieldCheck, Target, ArrowRight, Box,  TrendingUp, Sparkles ,Leaf, Cpu, MapPin, Link } from "lucide-react";
import con from "../../assets/project-bedroom.jpg";
import con2 from "../../assets/project-balcony.jpg";
import con3 from "../../assets/project-living-room.jpg";
import MagneticCursor from "@/components/MagneticCursor";

const blogPosts = [
 {
id: 1,
title: "Indian Real Estate 2025: Luxury, Sustainability, and the New 'Gold Standard'",
category: "Luxury",
image: con2,
author: "Admin",
date: "March 2026",
readTime: "5 min",

description:
"The definition of luxury has changed. It's no longer just about marble floors; it's about smart ecosystems and a clear conscience.",

fullContent: {
intro:
"As we look toward 2025, the Indian real estate market is stabilizing into a new maturity. The post-pandemic resurgence has settled into a sustained boom, driven by a growing middle class and a massive appetite for premium living.",

sections: [

{
title: "The Rise of Conscious Luxury",
icon: <Leaf className="text-green-500" size={20} />,
text:
"The luxury segment is outperforming, with units priced above ₹1.5 crore seeing exponential growth. Buyers now seek IGBC-certified homes with solar integration, rainwater harvesting, and sustainable construction methods."
},

{
title: "Smart Living Standards",
icon: <Cpu className="text-blue-500" size={20} />,
text:
"IoT (Internet of Things) integration is becoming standard. Imagine an AC communicating with smart blinds to optimize cooling. Automation, smart security, and connected ecosystems are now expected in premium projects."
},

{
title: "The Tier-2 Explosion",
icon: <MapPin className="text-orange-500" size={20} />,
text:
"Cities like Ahmedabad, Kochi, and Indore are emerging as major growth hubs. Infrastructure expansion and NRI investments are pushing these markets forward rapidly."
}

],

footer:
"The Indian real estate sector is projected to contribute nearly 13% to GDP by 2025. The future is green, smart, and inclusive."
}
},
  {
  id: 2,
  title: "The Invisible Architect: How AI is Reshaping Design",
  category: "Technology",
  image: con, // Ensure 'con' is imported as your image asset
  author: "Admin",
  date: "Feb 2026",
  readTime: "8 min",
  fullContent: {
    intro: "What if you knew what a buyer wanted before they even spoke? In the high-stakes world of real estate development, intuition is being backed by cold, hard data. AI is no longer just a buzzword; it is the 'invisible architect' shaping the skylines of tomorrow.",
    sections: [
      {
        icon: <LineChart size={24} />,
        title: "Smart Valuations",
        text: "AI algorithms now analyze millions of data points—from local infrastructure projects to neighborhood crime rates—to provide precise property valuations, ensuring competitive pricing and maximized ROI."
      },
      {
        icon: <Brain size={24} />,
        title: "Sentiment Analysis",
        text: "Developers are using AI to 'listen' to the market. By analyzing social media and review platforms, AI flags public needs immediately, such as a demand for green spaces or wellness centers."
      },
      {
        icon: <ShieldCheck size={24} />,
        title: "Efficiency in Compliance",
        text: "AI is stepping in to automate due diligence and document verification. This reduces the regulatory maze and legal risks that often stall Indian real estate projects for years."
      },
      {
        icon: <Target size={24} />,
        title: "The Marketing Edge",
        text: "AI tools identify high-intent buyers to personalize pitches. Instead of generic flyers, developers use immersive AR/VR experiences tailored to specific demographics like families or investors."
      }
    ],
    footer: "The Bottom Line: For developers, adopting AI is no longer optional—it is a survival mechanism. Those who leverage these tools will build not just assets, but thriving communities."
  }
},
  {
  id: 3,
  title: "Beyond Brick And Mortar: The Experience Revolution",
  category: "Experience",
  image: con3, // Path confirmed from your assets folder
  author: "Admin",
  date: "Jan 2026",
  readTime: "6 min",
  fullContent: {
    intro: "Is it possible to fall in love with a home you’ve never stepped foot in? In 2026, the answer is a resounding yes. We are witnessing a shift from a 'transactional' economy to an 'experience' economy, where PropTech is the bridge rewriting the narrative of cement and steel.",
    sections: [
      {
        icon: <Box size={24} />,
        title: "The 'Phygital' Journey",
        text: "The modern homebuyer is digital-first but craves physical assurance. Through hyper-realistic 3D walkthroughs, you can stand on a virtual balcony in Bengaluru while sitting in a cafe in London, checking how sunlight hits the kitchen."
      },
      {
        icon: <ShieldCheck size={24} />,
        title: "Trust as New Currency",
        text: "Tech is stripping away opaque layers of middlemen. Blockchain is making property records tamper-proof, while platforms ensure that renting no longer means compromising on quality or standardized living."
      },
      {
        icon: <Sparkles size={24} />,
        title: "Emotional Connection",
        text: "This revolution isn't just about convenience; it's about building an emotional connection at scale. Immersion allows buyers to visualize a bare shell as a home before the first brick is even laid."
      },
      {
        icon: <TrendingUp size={24} />,
        title: "The ₹65,000 Crore Future",
        text: "As urbanization swells in cities like Mumbai and Delhi, the sector is projected to hit staggering heights by 2040. The winners will be those offering the best buying experience, not just the best land banks."
      }
    ],
    footer: "The Takeaway: The future home isn’t just a place you buy; it’s an experience you subscribe to. Whether you are a first-time buyer or an NRI investor, homeownership is now more lucid and accessible than ever."
  }
},
];

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-[#0B132B] min-h-screen overflow-hidden cursor-none">
      <MagneticCursor/>
      <div className="max-w-7xl mx-auto"> 
        
        {/* Header */}
    <div className="text-center mb-20 mt-10">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-4xl md:text-6xl font-bold text-white mb-4"
  >
    Insights & <span className="text-orange-500">Perspectives</span>
  </motion.h2>

  <p className="text-gray-400 max-w-xl mx-auto text-lg">
    Thoughts, trends, and ideas shaping the future of real estate,
    immersive design, and digital architecture.
  </p>
</div>
        {/* 3D Swapping Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 perspective-3000">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                // If hovered: rotate slightly towards center. 
                // If another is hovered: rotate away (-25deg).
                rotateY: hoveredId === post.id ? 10 : hoveredId ? -25 : 0,
                scale: hoveredId === post.id ? 1.05 : 0.95,
                z: hoveredId === post.id ? 100 : 0,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="relative"
            >
              {/* Card - Glassmorphism Style */}
              <div className="h-full bg-[#ddbc97d2] backdrop-blur-2xl border border-white/10 rounded-4xl p-5 shadow-3xl flex flex-col group">
                
                {/* Image Container */}
                <div className="relative h-66 w-full rounded-4xl overflow-hidden mb-6">
                    <Image
                      src={post.image}
                      alt="d"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width={500}
                      height={300}
                    />
                </div>

                {/* Content */}
                <div className="flex-grow px-2">
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#F97316] transition-colors">
                    {post.title}
                  </h3>
                  {/* <p className="text-gray-400 text-sm line-clamp-3 mb-8">
                    {post.content}
                  </p> */}
                </div>

                {/* VIEW MORE Button (The trigger for the details modal) */}
                <button 
                  onClick={() => setSelectedPost(post)}
                    data-cursor-text="SERVICES"

                  className="w-full py-4 cursor-none rounded-2xl bg-white/10 hover:bg-[#F97316] text-white font-bold text-xs tracking-[0.2em] transition-all flex items-center justify-center gap-3 group/btn"
                >
                  VIEW MORE 
                  <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DETAILED BLOG MODAL */}
      <AnimatePresence>
  {selectedPost && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      
      {/* 1. Backdrop with Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedPost(null)}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
      />

      {/* 2. Modal Content with 3D Rotation Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotateX: 45 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        exit={{ scale: 0.8, opacity: 0, rotateX: 45 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative w-full max-w-7xl max-h-full overflow-y-auto bg-[#0B132B] border border-white/10 rounded-[3rem] shadow-4xl no-scrollbar"
      >
        
        {/* Close Button - Styled with Clinic Green */}
        <button
          onClick={() => setSelectedPost(null)}
          className="absolute top-6 right-6 z-50 p-3 bg-white/5 hover:bg-[#34D399] hover:text-black text-white rounded-full transition-all border border-white/10"
        >
          <X size={24} />
        </button>

        <div className="p-6 md:p-12">
          {/* Main Service/Blog Image */}
         <motion.img
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.2 }}
  /* CHANGE THIS LINE BELOW */
  src={selectedPost.image?.src || selectedPost.image} 
  className="w-full h-64 md:h-[600px] object-co rounded-[2rem] mb-10 shadow-2xl"
/>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            {selectedPost.title}
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 border-b border-white/5 pb-8">
            {selectedPost.fullContent.intro}
          </p>

          {/* Sections with Staggered Fade-in */}
          <div className="space-y-10">
            {selectedPost.fullContent.sections.map((section: { icon: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; text: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3  }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 p-3 bg-[#34D399]/10 rounded-2xl h-fit text-[#34D399]">
                  {section.icon}
                </div>

                <div>
                  <h4 className="text-xl text-white font-semibold mb-2">
                    {section.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Text */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-gray-400 italic border-t border-white/10 pt-8"
          >
            {selectedPost.fullContent.footer}
          </motion.p>
        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>

      <style jsx global>{`
        .perspective-3000 { perspective: 3000px; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

     <section className="section-padding text-center pt-4 mt-10 ">
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
            href="/contact"
                      data-cursor-text="CONTACT"

            className="inline-flex items-center gap-2 bg-gray-300 border-4 border-amber-500 px-8 py-3.5 rounded-full glass-card text-foreground font-medium text-sm hover:bg-primary/20 transition-all duration-300"
          >
            <span className="text-black">Get In Touch</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.span>
          </Link>
        </motion.div>
      </section>

    </section>
  );
};

export default BlogSection;