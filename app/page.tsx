// import Image from "next/image";
import TrustedBy from "@/components/TrustedBy";
import Hero from "../components/Hero";
// import WhatWeDo from "@/components/WhatWeDo";
import { WhatWeDo } from "@/components/WhatWeDo";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />

      {/* <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          backgroundImage: "url('/images/homeBg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
        position: "absolute",
        inset: 0,
        background: "#002D15",
        opacity: 0.5,
          }}
        /> */}
        <div className="pt-8" style={{ position: "relative", zIndex: 2 }}>
          <WhatWeDo />
        </div>
      {/* </div> */}
        <Contact />
    </>
  );
}
