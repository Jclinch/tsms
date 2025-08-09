'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, FileText, Globe, Megaphone, Tv, Rocket } from 'lucide-react';

const services = [
  {
    title: "STRATEGY",
    icon: Briefcase,
    points: [
      "Business Strategy Support",
      "Marketing Strategy",
      "Campaign Strategy",
      "PAN African Expansion Support",
    ],
    media: "/media/Chess.mp4",
  },
  {
    title: "CONTENT",
    icon: FileText,
    points: [
      "Content Strategy",
      "Content Development",
      "Content Communication Strategy",
    ],
    media: "/media/creator1.mp4",
  },
  {
    title: "DIGITAL",
    icon: Globe,
    points: [
      "Awareness Campaign",
      "Digital Lead Generation and Conversion",
      "Influencer Partnerships",
    ],
    media: "/media/click.mp4",
  },
  {
    title: "PR",
    icon: Megaphone,
    points: [
      "Press, Media and Government relationships",
      "Writing for the mass media",
      "Media coverage",
      "Reputation management",
    ],
    media: "/media/News.mp4",
  },
  {
    title: "MEDIA",
    icon: Tv,
    points: [
      "Media strategy",
      "Media buying",
      "Media competitive analysis",
    ],
    media: "/media/media.mp4",
  },
  {
    title: "ACTIVATION",
    icon: Rocket,
    points: [
      "Customer engagement events for lead generation and industry visibility",
      "Market engagement event for visibility support",
      "Growth Marketing",
    ],
    media: "/media/activation.mp4",
  },
];

export default function Services() {
  return (
    <div className="font-inter bg-transparent">
      {/* === Hero Identifier === */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/bg3.png"
          alt="Services Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1A3E1B] opacity-80" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl text-white font-bold font-sora drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-accent mt-4 font-medium max-w-2xl">
            Elevating brands with strategic precision, bold creativity, and tailored marketing for impact.
          </p>
        </div>
      </section>

      {/* === Services Section === */}
      <section className="relative px-6 py-24 md:px-16 lg:px-32 mt-[50px] text-white">
        {/* === Glassmorphic BG === */}
        <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `url('/images/noise.png')`,
              backgroundSize: '200px',
              mixBlendMode: 'overlay',
            }}
          />
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-button blur-[120px] opacity-25 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-28">
          <h2 className="text-4xl md:text-5xl font-bold text-[#C6D900] font-sora text-center mb-10">
            What We Do
          </h2>

          {services.map((service, index) => {
            const isVideo = service.media.endsWith(".mp4");
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col-reverse md:flex-row ${
                  !isEven ? 'md:flex-row-reverse' : ''
                } items-center gap-10`}
              >
                {/* === Media === */}
                {/* <div className="relative w-full md:w-2/5 aspect-video rounded-xl overflow-hidden shadow-lg">
                  {isVideo ? (
                    <video
                      src={service.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={service.media}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div> */}

                {/* //................................... */}


                {/* === Media === */}
<div className="flex justify-center items-center w-full md:w-3/5">
  {isVideo ? (
    <video
      src={service.media}
      autoPlay
      muted
      loop
      playsInline
      width={400}
      height={150}
      className="rounded-xl shadow-lg"
    />
  ) : (
    <Image
      src={service.media}
      alt={service.title}
      width={400}
      height={150}
      className="rounded-xl shadow-lg object-cover"
    />
  )}
</div>

{/* ................................ */}

                {/* === Content === */}
                <div className="w-full md:w-3/5 px-6">
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon size={36} className="text-button" />
                    <h3 className="text-2xl font-bold text-[#C6D900]">{service.title}</h3>
                  </div>
                  <ul className="list-disc list-inside text-sm text-[#C6D900] space-y-2 pl-4">
                    {service.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
