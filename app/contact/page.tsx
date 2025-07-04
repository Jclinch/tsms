'use client';
import { Mail, Phone } from 'lucide-react';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
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
            Let’s Connect
            </h1>
          </div>
          </section>
    <div className="relative px-6 py-24 md:px-16 lg:px-32 min-h-screen text-white">
      {/* === Glassmorphic Background === */}
      <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg overflow-hidden mt-[50px]">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url('/images/noise.png')`,
            backgroundSize: '200px',
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      {/* === Content === */}
      <div className="relative z-10 max-w-7xl mx-auto ">
        <h1 className="text-4xl md:text-5xl font-bold font-sora text-[#E2E525] text-center mb-14">
          
        </h1>

        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* === Contact Form === */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-white mb-1">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2E525] text-sm text-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm text-white mb-1">Your Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2E525] text-sm text-white"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-white mb-1">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2E525] text-sm text-white"
                placeholder="Tell us what you need..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#E2E525] text-[#1A3E1B] px-6 py-2 font-semibold border border-[#E2E525]/40 rounded-[50px] transition-all duration-300 ease-in-out
              hover:bg-transparent hover:text-[#E2E525] hover:rounded-xl hover:shadow-lg hover:shadow-[#E2E525]/40">
              Send Message
            </button>
          </form>

          {/* === Contact Info & Socials === */}
          <div className="space-y-10 text-sm">
            <div className="space-y-4">
              {/* <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#E2E525]" />
                <p>100 wwakati adura</p>
              </div> */}
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#E2E525]" />
                <p>+234 800 000 0000</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#E2E525]" />
                <p>info@totalscopeagency.com</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-lg font-semibold text-[#C6D900] mb-4">
                Connect with us
              </p>
              <div className="flex gap-6 items-center">
                <Link href="https://www.linkedin.com/company/totalscope" target="_blank">
                  <FaLinkedin size={24} className="text-white hover:text-[#E2E525] transition" />
                </Link>
                <Link href="https://www.instagram.com/totalscope" target="_blank">
                  <FaInstagram size={24} className="text-white hover:text-[#E2E525] transition" />
                </Link>
                <Link href="https://www.facebook.com/totalscope" target="_blank">
                  <FaFacebook size={24} className="text-white hover:text-[#E2E525] transition" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
  );
}
