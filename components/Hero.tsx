// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[120vh] bg-hero-gradient overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/heroBg.png"
          alt="Futuristic pattern"
          width={1538}
          height={1024}
          className="object-cover w-full h-full "
        />
      </div>

      {/* Hero Content */}
      <div className="mt-8 relative z-10 flex flex-col items-center justify-center min-h-[120vh] px-6 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl ml-[-350px] mt-[180px] leading-tight text-white drop-shadow-lg"
          style={{
            textShadow: "0 0 24px rgba(255,255,255,0.7), 0 0 6px #facc15",
          }}
        >
          <span className="font-bold">WE ARE </span>{" "}
          <span className="font-sans text-2xl align-super">NOT AN AGENCY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-[-40px] text-lg md:text-xl ml-[50px]"
          style={{
            color: "#E2E525",
            textShadow: "0 0 10px #E2E525, 0 0 2px #E2E525",
          }}
        >
           <span className="font-sans align-text-bottom">WE ARE </span>{" "}
          <span className="font-bold md:text-7xl  ">BUSINESS &nbsp;&nbsp; SOLUTION PARTNER </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10"
        >
          <button
            className="bg-brand-white bg-white/30 text-white px-6 py-2 font-semibold border border-white/40 rounded-[50px] transition-all duration-300 ease-in-out
    hover:bg-button hover:text-white hover:rounded-xl hover:shadow-lg hover:shadow-white/40"
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
