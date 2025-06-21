// app/layout.tsx
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Sora } from "next/font/google";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata = {
  title: "Your Site",
  description: "Modern Futuristic Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <div className="bg-[#1A3E1B] font-sora">
          <div className="z-50 relative">
            <Navbar />
          </div>
          <main className="mt-[-4.8rem]">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
