"use client"; // Essential fix for the createMotionComponent error

import { motion, Variants } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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


const clientsRow1 = [
  "Prestige Group", "Adani Realty", "Century Real Estate", "Embassy Group",
  "Sattva Group", "Bhartiya City", "M3M India", "Shapoorji Pallonji",
];

const clientsRow2 = [
  "Deloitte", "Wipro", "Asian Paints", "HP",
  "Volvo", "Karle Town Centre", "Bren Corp", "Svamitva",
];

const faqs = [
  {
    q: "Who are your services best suited for?",
    a: "Our services are ideal for real estate developers, architects, interior designers, builders, and property marketers who want to present their spaces in a modern, engaging way.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "Project timelines depend on the scope and complexity. Smaller projects can be completed in a few days, while larger or custom solutions may take a few weeks. We always share clear timelines before starting.",
  },
  {
    q: "Will you help with updates and support after delivery?",
    a: "Yes. We offer ongoing support and updates to ensure your digital assets remain current and perform well over time.",
  },
];

const FAQSection = () => {
  return (
    <>
    <section id="faq" className="relative bg-[#0B132B] py-24 md:py-32 overflow-hidden">
      
      {/* SECTION MERGE: Smooth transition from the previous section */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
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
            Support
          </motion.h6>
          <motion.h2 
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="group border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl px-6 overflow-hidden transition-all duration-300 hover:border-orange-500/30"
              >
                <AccordionTrigger className="text-sm md:text-base font-medium text-gray-200 hover:text-orange-500 transition-colors py-5 no-underline hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-400 leading-relaxed pb-5 border-t border-white/5 pt-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>

      {/* Decorative background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
{/* 
<section className="py-20 bg-[#0B132B] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.h6 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#F24E24] text-xs font-bold uppercase tracking-[0.4em]"
        >
          Trusted by Industry Leaders
        </motion.h6>
      </div>

      <div className="flex flex-col gap-8">
      
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12 py-4">
            {[...clientsRow1, ...clientsRow1].map((client, i) => (
              <div 
                key={i} 
                className="text-2xl md:text-4xl font-display font-bold text-white/20 hover:text-[#F24E24] transition-colors duration-500 cursor-default select-none uppercase tracking-tighter italic"
              >
                {client} <span className="ml-12 text-[#F24E24]/30">•</span>
              </div>
            ))}
          </div>
        </div>

     
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-12 py-4">
            {[...clientsRow2, ...clientsRow2].map((client, i) => (
              <div 
                key={i} 
                className="text-2xl md:text-4xl font-display font-bold text-white/20 hover:text-[#F24E24] transition-colors duration-500 cursor-default select-none uppercase tracking-tighter italic"
              >
                {client} <span className="ml-12 text-[#F24E24]/30">•</span>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Global CSS for Smooth Infinite Loop */}
      {/* <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          animation: marquee-reverse 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
       
        section::before, section::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 2;
          pointer-events: none;
        }
        section::before {
          left: 0;
          background: linear-gradient(to right, #0B1220, transparent);
        }
        section::after {
          right: 0;
          background: linear-gradient(to left, #0B1220, transparent);
        }
      `}</style>
    </section> */}
</>
  );
};

export default FAQSection;