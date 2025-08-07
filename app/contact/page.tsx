'use client';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Mail, Phone } from 'lucide-react';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialFormState: FormState = { name: '', email: '', message: '' };
const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    if (!captchaToken) {
      setResponse('Please complete the CAPTCHA.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captchaToken }),
      });

      if (res.ok) {
        setResponse('✅ Message sent successfully!');
        setForm(initialFormState);
        setCaptchaToken(null);
      } else {
        const errorData = await res.json();
        setResponse(`❌ ${errorData.error || 'Failed to send message.'}`);
      }
    } catch (error) {
      console.error(error);
      setResponse('❌ An unexpected error occurred.');
    }

    setLoading(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/bg3.png"
          alt="About Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1A3E1B] opacity-80" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-5xl md:text-6xl text-white font-bold font-sora drop-shadow-lg">
            Let’s Connect
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <div className="relative px-6 py-24 md:px-16 lg:px-32 min-h-screen text-white">
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

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            {/* === Contact Form === */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-white mb-1">Your Name</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2E525] text-sm text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-white mb-1">Your Email</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2E525] text-sm text-white"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-white mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2E525] text-sm text-white"
                  placeholder="Tell us what you need..."
                  required
                ></textarea>
              </div>

              {recaptchaSiteKey ? (
                <ReCAPTCHA
                  sitekey={recaptchaSiteKey}
                  onChange={(token) => setCaptchaToken(token)}
                  theme="dark"
                />
              ) : (
                <p className="text-sm text-red-400">reCAPTCHA is not configured. Form submission is disabled.</p>
              )}

              <button
                type="submit"
                disabled={loading || !recaptchaSiteKey}
                className="bg-[#E2E525] text-[#1A3E1B] px-6 py-2 font-semibold border border-[#E2E525]/40 rounded-[50px] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#E2E525] hover:rounded-xl hover:shadow-lg hover:shadow-[#E2E525]/40 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {response && (
                <p className="text-sm text-white/80 pt-2">{response}</p>
              )}
            </form>

            {/* === Contact Info & Socials === */}
            <div className="space-y-10 text-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-[#E2E525]" />
                  <p>+234 706 969 2817</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[#E2E525]" />
                  <p>info@totalscopemarketing.org</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-lg font-semibold text-[#C6D900] mb-4">
                  Connect with us
                </p>
                <div className="flex gap-6 items-center">
                  <Link href="https://www.linkedin.com/company/totalscope" target="_blank" aria-label="Our LinkedIn page">
                    <FaLinkedin size={24} className="text-white hover:text-[#E2E525] transition" />
                  </Link>
                  <Link href="https://www.instagram.com/totalscope" target="_blank" aria-label="Our Instagram page">
                    <FaInstagram size={24} className="text-white hover:text-[#E2E525] transition" />
                  </Link>
                  <Link href="https://www.facebook.com/totalscope" target="_blank" aria-label="Our Facebook page">
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
