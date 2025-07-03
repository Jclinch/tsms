// // ----style 3

// "use client";
// import React from "react";
// import { Player } from "@lottiefiles/react-lottie-player";

// const processes = [
//   {
//     title: "A. THINK",
//     subtitle: "Strategy",
//     points: [
//       "Understand Business Objective",
//       "Identify & Understand Market Dynamics",
//       "Develop Winning Strategy",
//     ],
//     animation: "/lottie/think.json",
//   },
//   {
//     title: "B. CREATE",
//     subtitle: "Ideas",
//     points: ["Generate Ideas", "Prototype & Iterate", "Design Experience"],
//     animation: "/lottie/creative-idea.json",
//   },
//   {
//     title: "C. ACTIVATE",
//     subtitle: "Deployment",
//     points: [
//       "Produce Assets",
//       "Distribute Content",
//       "Optimize Performance",
//       "Activate Experience",
//     ],
//     animation: "/lottie/activate.json",
//   },
// ];

// export default function OurProcess() {
//   return (
//     <section className="relative bg-[#2F5226] text-white font-inter px-6 py-24 md:px-16 lg:px-32 overflow-hidden mt-[50px]">
//       <h2 className="text-4xl font-bold text-button font-sora mb-16 text-center">
//         Our Process
//       </h2>

//       <div className="space-y-20">
//         {processes.map((p, i) => (
//           <div
//             key={i}
//             className={`flex flex-col md:flex-row items-center gap-10 ${
//               i % 2 !== 0 ? "md:flex-row-reverse" : ""
//             }`}
//           >
//             <div className="w-full md:w-1/2 flex justify-center">
//               <Player
//                 src={p.animation}
//                 autoplay
//                 loop
//                 className="w-[300px h-[300px]"
//               />
//             </div>
//             <div className="w-full md:w-1/2 flex justify-center">
//               <div className="card-glass group relative w-full max-w-sm p-6 rounded-xl border border-white/20 cursor-pointer overflow-hidden">
//                 <div className="relative">
//                   <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
//                   <p className="text-button mb-2 font-medium">{p.subtitle}</p>
//                   <ul className="list-disc list-inside space-y-2 text-sm">
//                     {p.points.map((pt, j) => (
//                       <li key={j}>{pt}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <div className="absolute left-0 top-1/2 w-2 h-12 bg-white blur-2xl" />
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B7CC00]/20 to-transparent animate spin-slow" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



'use client';
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const processes = [
  {
    title: "A. THINK",
    subtitle: "Strategy",
    points: [
      "Understand Business Objective",
      "Identify & Understand Market Dynamics",
      "Develop Winning Strategy",
    ],
    animation: "/lottie/think.json",
  },
  {
    title: "B. CREATE",
    subtitle: "Ideas",
    points: ["Generate Ideas", "Prototype & Iterate", "Design Experience"],
    animation: "/lottie/creative-idea.json",
  },
  {
    title: "C. ACTIVATE",
    subtitle: "Deployment",
    points: [
      "Produce Assets",
      "Distribute Content",
      "Optimize Performance",
      "Activate Experience",
    ],
    animation: "/lottie/activate.json",
  },
];

export default function OurProcess() {
  return (
    <section className="relative px-6 py-24 md:px-16 lg:px-32 text-white">
      {/* === Glassmorphism Background === */}
      <div className="absolute inset-0 z-0 rounded-b-xl rounded-t-none backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg overflow-hidden">
        {/* Noise grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url('/images/noise.png')`,
            backgroundSize: '200px',
            mixBlendMode: 'overlay',
          }}
        />
        {/* Optional Top-left Glow */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-button blur-[120px] opacity-25 rounded-full" />
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-button font-sora mb-16 text-center">
          Our Process
        </h2>

        <div className="space-y-20">
          {processes.map((p, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* === Lottie Animation === */}
              <div className="w-full md:w-1/2 flex justify-center">
                <Player
                  src={p.animation}
                  autoplay
                  loop
                  className="w-[300px] h-[300px]"
                />
              </div>

              {/* === Glassmorphic Card === */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="group relative w-full max-w-sm p-6 rounded-xl border-t-4 border-button hover:border-hover backdrop-blur-md bg-white/10 shadow-xl transition duration-300 overflow-hidden">
                  {/* Glow Top-right */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-button rounded-bl-full blur-xl opacity-20" />

                  {/* Card Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
                    <p className="text-button mb-2 font-medium">{p.subtitle}</p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-[#C6D900]">
                      {p.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover shimmer overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute left-0 top-1/2 w-2 h-12 bg-white blur-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B7CC00]/20 to-transparent animate-spin-slow" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
