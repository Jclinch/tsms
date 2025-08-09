// // app/layout.tsx
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import "./globals.css";
// import { Inter, Sora } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
// import { SpeedInsights } from "@vercel/speed-insights/next";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

// export const metadata = {
//   title: "TSMS",
//   description: "Creative marketing solutions that elevate your brand and drive results.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${sora.variable}`}>
//       <body className="antialiased">
//         {/* Full-page fixed background */}
//         <div
//           className="font-sora bg-fixed bg-center bg-cover min-h-screen"
//           style={{ backgroundImage: "url('/images/homeBg.png')"  }}
//         >
//           <Navbar />

//           <main className="relative z-10">
//             {children}
//             <Analytics />
//             <SpeedInsights />
//           </main>

//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }



import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata = {
  title: "TotalScope",
  description:
    "Creative marketing solutions that elevate your brand and drive results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased text-white">
        {/* === Glassmorphic Background Layer === */}
        <div className="fixed inset-0 -z-10">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/homeBg.png')" }}
          />
          <div className="absolute inset-0 backdrop-blur-[6px] " />
        </div>

        {/* === Main Content with Navbar and Footer === */}
        <div className="relative z-10 min-h-screen flex flex-col font-sora">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
