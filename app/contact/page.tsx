"use client";


import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative min-h-screen  overflow-hidden bg-[#AACFDF] items-center mt-20  ">
      {/* Background text */}
      <div className="absolute inset-0  flex items-center justify-center pointer-events-none select-none">
        <motion.span
          className="text-[12vw] font-display font-bold text-foreground/[0.03] whitespace-nowrap"
          initial={{ x: "10%" }}
          whileInView={{ x: "-10%" }}
          viewport={{ once: false }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        >
          LET'S CONNECT • LET'S CREATE • LET'S BUILD
        </motion.span>
      </div>

      <div className="max-w-5xl mx-auto mt-8 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h6 className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            This Spot Awaits
          </h6>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
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

        <motion.form
          onSubmit={handleSubmit}
          className="glass-card rounded-3xl p-8 md:p-12 shadow-3d"
          initial={{ opacity: 0, y: 60, rotateX: 5 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: "1000px" }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              { key: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
              { key: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
              { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
            ].map((field, i) => (
              <motion.div
                key={field.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className={field.key === "phone" ? "md:col-span-2" : ""}
              >
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required={field.key !== "phone"}
                  placeholder={field.placeholder}
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-border/50 focus:border-primary py-3 text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors duration-300 text-sm"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-8"
          >
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Your Message
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent border-b-2 border-border/50 focus:border-primary py-3 text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors duration-300 text-sm resize-none"
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(22 90% 50% / 0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-b from-[#0B1220] via-[#0B2639] to-[#0B1220] text-primary-foreground font-semibold text-sm transition-all duration-300"
          >
            {submitted ? (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                ✓ Message Sent!
              </motion.span>
            ) : (
              <>
                Submit
                <Send size={16} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
