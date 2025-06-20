"use client";

import React from "react";
import Image from "next/image";

const logos = [
  "/logos/interswitch.png",
  "/logos/onafriq.png",
  "/logos/pearson.png",
  "/logos/interswitch.png",
  "/logos/onafriq.png",
  "/logos/pearson.png",
];

export default function TrustedBy() {
  return (
    <section className="w-full bg-black text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        {/* Left text */}
        <div className="min-w-[200px] md:min-w-[250px] text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-subheader">
            We are <br /> Trusted By
          </h2>
        </div>

        {/* Scrolling logos */}
        <div className="relative w-full overflow-hidden group">
          <div className="flex gap-10 w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[120px] h-[60px] relative"
              >
                <Image
                  src={logo}
                  alt={`Logo ${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
