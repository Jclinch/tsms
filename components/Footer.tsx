// components/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#1A3E1B] text-[#E5E5E5] py-8 px-6 mt-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h3 className="text-[#C6D900] font-bold mb-2">About Us</h3>
                    <p className="text-sm">
                        We are a results-driven marketing solutions helping brands grow through innovative digital strategies and creative solutions.
                    </p>
                </div>

                <div>
                    <h3 className="text-subheader font-bold mb-2">Quick Links</h3>
                    <ul>
                        <li>
                            <Link href="/" className="hover:text-white">Home</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-white">Services</Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-subheader font-bold mb-2">Contact</h3>
                    <p className="text-sm">10 Wakati Adura Street, River Valley Estate, Ojodu Berger</p>
                    <p className="text-sm">+234 706 969 2817</p>
                    <p className="text-sm">info@totalscopemarketing.org</p>
                </div>
            </div>

            <div className="text-center mt-6 text-xs text-gray-400">
                © {new Date().getFullYear()} Total Scope Marketing Solutions. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
