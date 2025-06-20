// components/OurProcess.tsx
import React from "react";

const processes = [
  {
    title: "A. THINK",
    subtitle: "Strategy",
    points: [
      "Understand Business Objective",
      "Identify & Understand Market Dynamics",
      "Develop Winning Strategy",
    ],
  },
  {
    title: "B. CREATE",
    subtitle: "Ideas",
    points: ["Generate Ideas", "Prototype & Iterate", "Design Experience"],
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
  },
];

const OurProcess = () => {
  return (
    <section
      className=" px-6 py-24 md:px-16 lg:px-32 text-white font-inter left"
      style={{
        background:
          "linear-gradient(to top, rgb(20, 48, 21) 0%, #1A3E1B 30%, #1A3E1B 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-subheader font-sora mb-16">
          Our Process
        </h2>

        <div className="grid md:grid-cols-3 gap-10 justify-center items-center ">
          {processes.map((process, i) => (
            <div key={i} className="card" id="card">
              <div className="content">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-left">
                    {process.title}
                  </h3>
                  <p className="text-[#C6D900] mb-2 font-medium text-left">
                    {process.subtitle}
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-2 text-left">
                    {process.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
