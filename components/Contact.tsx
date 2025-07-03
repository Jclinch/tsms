// components/ContactSection.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="w-full px-6 py-16 bg-[#001F00] text-white z-30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#E2E525]">
            Get In Touch
          </h2>
          <p className="text-center text-lg text-[#E5E5E5] max-w-2xl mx-auto mb-12">
            We&apos;d love to hear from you. Whether you have a question about services,
            pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </motion.div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#204A20] p-8 rounded-xl shadow-lg">
            <div className="col-span-1 md:col-span-2 flex flex-col">
            <label htmlFor="fullName" className="mb-2 text-sm font-medium text-[#E2E525]">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Your Full Name"
              className="px-4 py-3 rounded-lg bg-[#2F5226] text-white placeholder-italic placeholder-gray-300/30 focus:outline-none focus:ring-2 focus:ring-[#E2E525]"
            />
            </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium text-[#E2E525]">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-3 rounded-lg bg-[#2F5226] text-white placeholder-italic placeholder-gray-300/30 focus:outline-none focus:ring-2 focus:ring-[#E2E525]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 text-sm font-medium text-[#E2E525]">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
              className="px-4 py-3 rounded-lg bg-[#2F5226] text-white placeholder-italic placeholder-gray-300/30 focus:outline-none focus:ring-2 focus:ring-[#E2E525]"
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm font-medium text-[#E2E525]">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={4}
              className="px-4 py-3 rounded-lg bg-[#2F5226] text-white placeholder-italic placeholder-gray-300/30 focus:outline-none focus:ring-2 focus:ring-[#E2E525]"
            />
          </div>
          <div className="col-span-1 md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#E2E525] text-[#1A3E1B] px-6 py-2 font-semibold border border-[#E2E525]/40 rounded-[50px] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#E2E525] hover:rounded-xl hover:shadow-lg hover:shadow-[#E2E525]/40"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
