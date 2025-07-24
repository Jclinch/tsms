// import Image from "next/image";
  import TrustedBy from "@/components/TrustedBy";
  import Hero from "../components/Hero";
  import { WhatWeDo } from "@/components/WhatWeDo";
  import Contact from "@/components/Contact";

  export default function Home() {
    return (
      <>
        <Hero />
        <TrustedBy />
        <div className="pt-8" style={{ position: "relative", zIndex: 2 }}>
          <WhatWeDo />
        </div>
        <Contact />
      </>
    );
  }