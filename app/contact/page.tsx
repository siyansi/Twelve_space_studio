"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Linkedin, Youtube, Instagram, MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- EMAIL SENDING LOGIC ---
    const responseData = {
      access_key: "YOUR_ACCESS_KEY_HERE", // 👈 PASTE YOUR KEY HERE
      subject: `New studio Inquiry from ${formData.name}`,
      from_name: "Twelve Space Studio Web",
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(responseData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Mail service unavailable. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };



  const socials = [
    { icon: <Linkedin size={20} />, link: "https://in.linkedin.com/company/twelve-space-studio", color: "#0077b5" },
    { icon: <Youtube size={20} />, link: "https://youtube.com/@twelvespacestudio", color: "#ff0000" },
    { icon: <Instagram size={20} />, link: "https://www.instagram.com/twelve.space.studio/", color: "#e1306c" },
  ];

  return (
    <section id="contact" className="section-padding relative min-h-screen overflow-hidden bg-[#0B1220] py-20 mt-18 px-4">
      {/* Background Animated Text - Updated to Orange tint */}
      <div className="absolute inset-0 flex md:mt-32 justify-center pointer-events-none select-none opacity-10">
        <motion.span
          className="text-[15vw] font-display font-bold text-[#FF6B00] whitespace-nowrap"
          initial={{ x: "10%" }}
          animate={{ x: "-10%" }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        >
          TWELVE SPACE • TWELVE SPACE • TWELVE SPACE
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN: CONTACT INFO & MAP */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h6 className="text-[#FF6B00] text-sm font-semibold uppercase tracking-[0.3em] mb-3">Get In Touch</h6>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                Let's <span className="text-[#FF6B00]">Connect.</span>
              </h2>
            </div>

            {/* Address Card */}
            <div   className="glass-card bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md transition-all duration-300 ">
              <div className="flex gap-4 items-start mb-6">
                <div className="bg-[#FF6B00]/20 p-3 rounded-2xl text-[#FF6B00]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-1">Our Studio</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Twelve Space studio,<br />
                    The Hive, Level 3. VR Mall, JN road,<br />
                    Anna Nagar, Chennai, India – 600040.
                  </p>
                </div>
              </div>

              {/* 3D MAP PLACEHOLDER */}
              {/* <div className="w-full h-48 bg-navy-900 rounded-2xl overflow-hidden border border-white/5 relative group">
              
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2639] to-[#1a2a44] flex items-center justify-center">
                    <span className="text-xs text-[#FF6B00] font-mono">[ 3D MAP ENGINE INITIALIZING... ]</span>
                 </div>
                 <div className="absolute bottom-4 left-4 bg-[#FF6B00] px-3 py-1 rounded-full text-[10px] font-bold text-white animate-pulse">
                    LIVE LOCATION
                 </div>
              </div> */}
            </div>

            {/* Socials & Quick Contact */}
            <div className="flex flex-wrap gap-4">
              {socials.map((soc, i) => (
                <motion.a
                  key={i}
                  href={soc.link}
                  target="_blank"
                  whileHover={{ y: -5, backgroundColor: "#FF6B00", color: "#fff" }}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all"
                >
                  {soc.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
{/* RIGHT COLUMN: THE FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ perspective: "1000px" }}
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF6B00]/10 blur-[100px] rounded-full" />

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                { key: "name", label: "Your Name", type: "text", placeholder: "Enter Name", req: true },
                { key: "email", label: "Email Address", type: "email", placeholder: "Email@studio.com", req: true },
                { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 00000 00000", req: false },
              ].map((field) => (
                <div key={field.key} className={field.key === "phone" ? "md:col-span-2" : ""}>
                  <label className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-widest mb-2 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required={field.req}
                    placeholder={field.placeholder}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 focus:border-[#FF6B00] py-3 text-white placeholder:text-white/20 outline-none transition-all duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="mb-10">
              <label className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-widest mb-2 block">
                Project Vision
              </label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe your space..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 focus:border-[#FF6B00] py-3 text-white placeholder:text-white/20 outline-none transition-all duration-500 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || submitted}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all duration-500 ${
                submitted 
                ? "bg-green-600 shadow-[0_10px_30px_rgba(22,163,74,0.4)]" 
                : "bg-[#FF6B00] shadow-[0_10px_30px_rgba(255,107,0,0.3)]"
              } text-white`}
            >
              {isSubmitting ? (
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : submitted ? (
                "✓ Message Dispatched"
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <div className="mt-16 px-10">

          <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h6 className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            This Spot Awaits
          </h6>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's Cross{" "}
            </motion.span>
            <motion.span
              className="text-gradient"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Paths!
            </motion.span>
          </h2>
        </motion.div>

         <motion.div
    whileHover={{ scale: 1.01 }}
    className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-border/40"
  >

    <iframe
      src="https://www.google.com/maps?q=VR+Mall+Anna+Nagar+Chennai&output=embed"
      width="100%"
      height="100%"
      loading="lazy"
      className="border-0"
    />

    {/* Map Overlay Label */}
    <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md px-5 py-3 rounded-xl text-white text-sm shadow-lg">
      📍 VR Mall – Anna Nagar
    </div>

  </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;