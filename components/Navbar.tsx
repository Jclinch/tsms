// // components/Navbar.tsx
// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Scroll blur effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Mobile menu toggle
//   const toggleMenu = () => setMobileOpen(!mobileOpen);

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
//           scrolled
//             ? "bg-[#1A3E1B]/80 backdrop-blur-md shadow-md"
//             : "bg-transparent"
//         }`}
//       >
//         {/* Left: Nav Links - Hidden on small screens */}
//         <div className="hidden md:flex space-x-6 text-white">
//           <Link href="/" className="hover:text-hover transition">
//             Home
//           </Link>
//           <Link href="/about" className="hover:text-hover transition">
//             About
//           </Link>
//           <Link href="/services" className="hover:text-hover transition">
//             Services
//           </Link>
//           <Link href="/contact" className="hover:text-hover transition">
//             Contact
//           </Link>
//         </div>

//         {/* Center: Logo with subtle white glow */}
//         <div className="flex-1 flex justify-center">
//           <Link href="/">
//             <Image
//               src="/images/logo2.png"
//               alt="tsms Logo"
//               width={200}
//               height={60}
//               className="h-10 w-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
//             />
//           </Link>
//         </div>

//         {/* Right: CTA + Hamburger */}
//         <div className="flex items-center space-x-4">
//           {/* CTA Button - Hidden on small screens */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.6 }}
//             className="hidden md:block"
//           >
//             <Link
//               href="/contact"
//               className="bg-[#E2E525] text-[#1A3E1B] px-6 py-2 font-semibold border border-[#E2E525]/40 rounded-[50px] transition-all duration-300 ease-in-out
//               hover:bg-transparent hover:text-[#E2E525] hover:rounded-xl hover:shadow-lg hover:shadow-[#E2E525]/40"
//             >
//               Get In Touch
//             </Link>
//           </motion.div>

//           {/* Mobile Toggle */}
//           <button onClick={toggleMenu} className="md:hidden text-white">
//             {mobileOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Drawer */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.25 }}
//             className="fixed top-[72px] w-full bg-[#1A3E1B] text-white flex flex-col space-y-6 py-6 px-6 z-40 md:hidden shadow-lg"
//           >
//             <Link
//               href="/"
//               onClick={() => setMobileOpen(false)}
//               className="hover:text-hover"
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               onClick={() => setMobileOpen(false)}
//               className="hover:text-hover"
//             >
//               About
//             </Link>
//             <Link
//               href="/services"
//               onClick={() => setMobileOpen(false)}
//               className="hover:text-hover"
//             >
//               Services
//             </Link>
//             <Link
//               href="/contact"
//               onClick={() => setMobileOpen(false)}
//               className="hover:text-hover"
//             >
//               Contact
//             </Link>
//             <Link
//               href="/contact"
//               onClick={() => setMobileOpen(false)}
//               className="bg-[#E2E525] text-[#1A3E1B] px-6 py-2 font-semibold border border-[#E2E525]/40 rounded-[50px] transition-all duration-300 ease-in-out
//               hover:bg-transparent hover:text-[#E2E525] hover:rounded-xl hover:shadow-lg hover:shadow-[#E2E525]/40 mt-4"
//             >
//               Book an Appointment
//             </Link>{" "}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;






"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // ✅ for active link detection

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
          scrolled
            ? "bg-[#1A3E1B]/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        {/* === Left Nav Links === */}
        <div className="hidden md:flex space-x-6 text-white">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-all duration-300 group ${
                  isActive
                    ? "text-[#E2E525] font-semibold"
                    : "hover:text-[#E2E525]"
                }`}
              >
                {/* Text */}
                <span
                  className={`relative z-10 ${
                    isActive
                      ? "bg-gradient-to-r from-[#E2E525] to-[#C6D900] bg-clip-text text-transparent"
                      : ""
                  }`}
                >
                  {link.name}
                </span>

                {/* Underline effect */}
                <span
                  className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#E2E525] transition-all duration-300 transform ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* === Center Logo === */}
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <Image
              src="/images/logo2.png"
              alt="tsms Logo"
              width={200}
              height={60}
              className="h-10 w-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            />
          </Link>
        </div>

        {/* === Right CTA + Mobile Menu === */}
        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden md:block"
          >
            <Link
              href="/contact"
              className="bg-[#E2E525] text-[#1A3E1B] px-6 py-2 font-semibold border border-[#E2E525]/40 rounded-[50px] transition-all duration-300 ease-in-out
              hover:bg-transparent hover:text-[#E2E525] hover:rounded-xl hover:shadow-lg hover:shadow-[#E2E525]/40"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* === Mobile Menu Drawer === */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] w-full bg-[#1A3E1B] text-white flex flex-col space-y-6 py-6 px-6 z-40 md:hidden shadow-lg"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-[#E2E525] font-semibold"
                      : "hover:text-[#E2E525]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-[#E2E525] text-[#1A3E1B] px-6 py-2 font-semibold border border-[#E2E525]/40 rounded-[50px] transition-all duration-300 ease-in-out
              hover:bg-transparent hover:text-[#E2E525] hover:rounded-xl hover:shadow-lg hover:shadow-[#E2E525]/40 mt-4"
            >
              Book an Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
