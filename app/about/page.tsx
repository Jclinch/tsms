// app/about/page.tsx
"use client"
import Image from "next/image";
import OurProcess from "@/components/OurProcess";

export default function About() {
  return (
    <div className=" font-inter">
      {/* === Hero Identifier === */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <Image
        src="/images/bg3.png"
        alt="About Hero"
        fill
        className="object-cover "
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1A3E1B] opacity-80" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl md:text-6xl text-white font-bold font-sora drop-shadow-lg">
        About Us
        </h1>
      </div>
      </section>

      {/* === Company Info with Logo === */}
      <section
      className="px-6 py-20 md:px-16 lg:px-32 text-white mt-[50px]"
      style={{
        background:
        "radial-gradient(circle at 0% 100%, #B7CC00 10%, #1A3E1B 70%)",
      }}
      >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
        <div className="relative">
          <Image
          src="/images/logo.png"
          alt="Company Logo"
          width={440}
          height={100}
          className="object-contain drop-shadow-[0_0_3px_white]"
          />
        </div>
        </div>

        {/* Brand Story */}
        <div className="space-y-6 text-lg leading-relaxed">
        <p>
          We are a dynamic Fintech Marketing Consulting Firm specializing in
          comprehensive solutions. Our team, comprised of seasoned
          professionals, have a proven track record of driving growth in
          diverse industries.
        </p>
        <p>
          Unlike conventional one-size-fits-all approaches, we meticulously
          analyze your business strategy, market dynamics, industry
          landscape, and competitive context.
        </p>
        <p>
          This enables us to craft a bespoke marketing strategy aligned with
          your core business objectives. Our execution is characterized by
          precision, flair, and speed across digital and offline channels,
          providing you with a distinct competitive advantage.
        </p>
        </div>
      </div>
      </section>

      {/* === Our Process === */}
      <OurProcess />
    </div>
  );
}
