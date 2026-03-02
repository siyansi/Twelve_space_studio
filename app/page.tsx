import Image from "next/image";
import Navbar from "@/components/navbar";
import HeroSection from "@/pages/herosection";
import AboutSection from "@/app/about/page";
import ServicesSection from "@/pages/servicesection";
import ProjectsSection from "@/pages/projectsection";
import TestimonialsSection from "@/pages/testimonialsection";
import FAQSection from "@/pages/faqsection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    // We use min-h-screen and flex-col to ensure the footer stays at the bottom 
    // and sections flow vertically.
    <div className="min-h-screen bg-background" style={{ fontFamily: 'Poppins' }}>
    
      <main className="">
        <HeroSection />
        {/* <AboutSection /> */}
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FAQSection />
      </main>

    </div>
  );
}