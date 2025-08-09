"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[120vh] bg-hero-gradient overflow-hidden">
      {/* Desktop Background Image */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/heroBg.png"
          alt="Futuristic pattern"
          width={1538}
          height={1024}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Mobile Background Image */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/images/heroBg_mobile.png"
          alt="Futuristic pattern"
          width={1538}
          height={1024}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[120vh] px-6 text-center md:mt-[80px]">
        {/* WE ARE */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg md:ml-[-500px] md:mt-[50px] "
          style={{
            textShadow: "0 0 24px rgba(255,255,255,0.7), 0 0 6px #facc15",
          }}
        >
          WE ARE
        </motion.h1>

        {/* NOT AN AGENCY */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className=" text-xs md:text-xl font-light text-white md:mt-[-70px]"
        >
          NOT AN AGENCY
        </motion.p>

        {/* WE ARE BUSINESS SOLUTION PARTNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-1"
        >
          <p
            className="text-xs md:text-xl font-light text-white md:ml-[-300px] md:mt-[18px]"
            style={{
              color: "#E2E525",
              textShadow: "0 0 5px #E2E525, 0 0 1px #E2E525",
            }}
          >
            WE ARE YOUR
          </p>
          <h2
            className="text-4xl md:text-6xl font-extrabold text-[#E2E525] md:mt-[-58px] md:ml-[180px] "
            style={{
              textShadow: "0 0 10px #E2E525, 0 0 2px #E2E525",
            }}
          >
            BUSINESS <br /> SOLUTION PARTNER
          </h2>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="bg-white/30 text-white px-6 py-2 font-semibold border border-white/40 rounded-[50px] transition-all duration-300 ease-in-out
              hover:bg-button hover:text-white hover:rounded-xl hover:shadow-lg hover:shadow-white/40"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
