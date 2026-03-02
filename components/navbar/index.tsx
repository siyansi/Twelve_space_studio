// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// const navLinks = [
//   { label: "Home", href: "#home" },
//   { label: "About Us", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Projects", href: "#projects" },
//   { label: "Contact", href: "#contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className="fixed top-0 left-0 right-0 z-50 glass-card border-b-0"
//       style={{ borderBottom: "1px solid hsl(var(--border) / 0.3)" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
//         <a href="#home" className="flex items-center gap-2">
//           <span className="text-2xl font-display font-bold tracking-tight">
//             <span className="text-gradient">12</span>
//             <span className="text-foreground"> SPACE STUDIO</span>
//           </span>
//         </a>

//         <ul className="hidden md:flex items-center gap-8">
//           {navLinks.map((link, i) => (
//             <motion.li
//               key={link.href}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 + i * 0.08 }}
//             >
//               <a
//                 href={link.href}
//                 className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
//               >
//                 {link.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>

//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-foreground"
//           aria-label="Toggle menu"
//         >
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden glass-card border-t border-border/30 overflow-hidden"
//           >
//             <ul className="flex flex-col py-4 px-6 gap-4">
//               {navLinks.map((link, i) => (
//                 <motion.li
//                   key={link.href}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.05 }}
//                 >
//                   <a
//                     href={link.href}
//                     className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
//                     onClick={() => setOpen(false)}
//                   >
//                     {link.label}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/12SS_LOGO=¥-WHITE.png";
import Image from "next/image";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "/projects" },
   { label: "Concept", href: "/concept" },
  { label: "Contact", href: "#contact" },

];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B1220]/70 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-8xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        
        {/* Logo */}
       <Link href="/" className="flex items-cente gap-3 group">
  <div className="relative w-14 h-10 md:w-28 md:h-14 transition-transform duration-300 group-hover:scale-110">
    <Image
      src={logo.src}
      alt="12 Space Studio Logo"
      fill
      className=" object-contain"
      priority // Ensures the logo loads instantly
    />
  </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 relative
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px]
                after:bg-[#F97316] after:scale-x-0 after:origin-right
                after:transition-transform after:duration-300
                hover:after:scale-x-100 hover:after:origin-left"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B1220]/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-400 hover:text-[#F97316] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;