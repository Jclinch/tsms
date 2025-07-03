'use client';
import Image from 'next/image';
import { Briefcase, FileText, Globe, Megaphone, Tv, Rocket } from 'lucide-react';

const services = [
  {
    title: "STRATEGY",
    icon: <Briefcase size={36} className="text-button group-hover:animate-pulse" />,
    points: [
      "Business Strategy Support",
      "Marketing Strategy",
      "Campaign Strategy",
      "PAN African Expansion Support",
    ],
  },
  {
    title: "CONTENT",
    icon: <FileText size={36} className="text-button group-hover:animate-pulse" />,
    points: [
      "Content Strategy",
      "Content Development",
      "Content Communication Strategy",
    ],
  },
  {
    title: "DIGITAL",
    icon: <Globe size={36} className="text-button group-hover:animate-pulse" />,
    points: [
      "Awareness Campaign",
      "Digital Lead Generation and Conversion",
      "Influencer Partnerships",
    ],
  },
  {
    title: "PR",
    icon: <Megaphone size={36} className="text-button group-hover:animate-pulse" />,
    points: [
      "Press, Media and Government relationships",
      "Writing for the mass media",
      "Media coverage",
      "Reputation management",
    ],
  },
  {
    title: "MEDIA",
    icon: <Tv size={36} className="text-button group-hover:animate-pulse" />,
    points: [
      "Media strategy",
      "Media buying",
      "Media competitive analysis",
    ],
  },
  {
    title: "ACTIVATION",
    icon: <Rocket size={36} className="text-button group-hover:animate-pulse" />,
    points: [
      "Customer engagement events for lead generation and industry visibility",
      "Market engagement event for visibility support",
      "Growth Marketing",
    ],
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

      {/* === Services Glassmorphic Grid === */}
      <section className="relative px-6 py-24 md:px-16 lg:px-32 mt-[50px] text-white">
        {/* === Grain + Blur Glassmorphic Layer === */}
        <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg overflow-hidden">
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `url('/images/noise.png')`,
              backgroundSize: '200px',
              mixBlendMode: 'overlay',
            }}
          />
          {/* Top-left glowing blob */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-button blur-[120px] opacity-25 rounded-full" />
        </div>

        {/* === Main Content === */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#C6D900] font-sora mb-14">
            What We Do
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-xl border-t-4 border-button hover:border-hover transition duration-300 overflow-hidden shadow-xl hover:shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-button rounded-bl-full blur-xl opacity-20" />
                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold text-button">{service.title}</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[#C6D900] text-left">
                    {service.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}




// 'use client';
// import Image from 'next/image';
// import { Briefcase, FileText, Globe, Megaphone, Tv, Rocket } from 'lucide-react';

// const services = [
//   {
//     title: "STRATEGY",
//     icon: <Briefcase size={36} className="text-button" />,
//     points: [
//       "Business Strategy Support",
//       "Marketing Strategy",
//       "Campaign Strategy",
//       "PAN African Expansion Support",
//     ],
//   },
//   {
//     title: "CONTENT",
//     icon: <FileText size={36} className="text-button" />,
//     points: [
//       "Content Strategy",
//       "Content Development",
//       "Content Communication Strategy",
//     ],
//   },
//   {
//     title: "DIGITAL",
//     icon: <Globe size={36} className="text-button" />,
//     points: [
//       "Awareness Campaign",
//       "Digital Lead Generation and Conversion",
//       "Influencer Partnerships",
//     ],
//   },
//   {
//     title: "PR",
//     icon: <Megaphone size={36} className="text-button" />,
//     points: [
//       "Press, Media and Government relationships",
//       "Writing for the mass media",
//       "Media coverage",
//       "Reputation management",
//     ],
//   },
//   {
//     title: "MEDIA",
//     icon: <Tv size={36} className="text-button" />,
//     points: [
//       "Media strategy",
//       "Media buying",
//       "Media competitive analysis",
//     ],
//   },
//   {
//     title: "ACTIVATION",
//     icon: <Rocket size={36} className="text-button" />,
//     points: [
//       "Customer engagement events for lead generation and industry visibility",
//       "Market engagement event for visibility support",
//       "Growth Marketing",
//     ],
//   },
// ];

// export default function Services() {
//   return (
//     <div className="font-inter bg-transparent">
//       {/* === Hero Identifier === */}
//       <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
//         <Image
//           src="/images/bg3.png"
//           alt="Services Hero"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-[#1A3E1B] opacity-80" />
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//           <h1 className="text-5xl md:text-6xl text-white font-bold font-sora drop-shadow-lg">
//             Our Services
//           </h1>
//           <p className="text-lg md:text-xl text-accent mt-4 font-medium max-w-2xl">
//             Elevating brands with strategic precision, bold creativity, and tailored marketing for impact.
//           </p>
//         </div>
//       </section>

//       {/* === Services Grid === */}
//       <section className=" relative px-6 py-20 md:px-16 lg:px-32 mt-[50px] text-white backdrop-blur-md bg-[#1A3E1B]/60 border border-white/10 rounded-xl shadow-lg">
//   <div className="absolute inset-0 bg-gradient-to-b from-[#2F5226]/60 to-[#1A3E1B]/80 z-0 rounded-xl" />
//   <div className="relative z-10 max-w-6xl mx-auto text-center">
//     <h2 className="text-4xl md:text-5xl font-bold text-[#C6D900] font-sora mb-14">
//       What We Do
//     </h2>
//     <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
//       {services.map((service, index) => (
//         <div
//           key={index}
//           className="relative bg-[#2F5226]/60 backdrop-blur-sm rounded-xl border-t-4 border-button hover:border-hover transition duration-300 group overflow-hidden shadow-xl hover:shadow-2xl"
//         >
//           <div className="absolute top-0 right-0 w-24 h-24 bg-button rounded-bl-full blur-xl opacity-20" />
//           <div className="p-6 relative z-10">
//             <div className="flex items-center gap-3 mb-4">
//               {service.icon}
//               <h3 className="text-xl font-bold text-button">{service.title}</h3>
//             </div>
//             <ul className="list-disc list-inside space-y-2 text-sm text-[#C6D900] text-left">
//               {service.points.map((point, idx) => (
//                 <li key={idx}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//     </div>
//   );
// }
