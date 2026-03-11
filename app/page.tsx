"use client"; // Required for Framer Motion
import Navbar from "@/components/navbar";
import HeroSection from "@/pages/herosection";
import ServicesSection from "@/pages/servicesection";
import TestimonialsSection from "@/pages/testimonialsection";
import FAQSection from "@/pages/faqsection";
import  GlobeDemo  from "@/pages/vrview";
import MagneticCursor from "@/components/MagneticCursor";
import VRProjectViewer from "@/pages/vr";
// import  Globe  from "@/components/ui/globe";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-[#B89150] selection:text-white" style={{ fontFamily: 'Poppins' }}>
      
      {/* 1. Add the Magnetic Cursor Here */}
      <MagneticCursor />

      {/* 2. Your Content */}
      <main className="cursor-none"> {/* This hides the default cursor on the main area */}
        <HeroSection />
     
        <ServicesSection />
        <GlobeDemo />
        <TestimonialsSection />
<VRProjectViewer/>
        <FAQSection />
      </main>

      {/* 3. Global Styles to ensure cursor:none works everywhere */}
      <style jsx global>{`
        body {
          cursor: none !important;
          background-color: #05070A;
        }
        /* Make sure links and buttons also hide the cursor */
        a, button, [role="button"] {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
}