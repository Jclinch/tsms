// components/Contact.tsx
import React from 'react';
  import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

  const Contact: React.FC = () => {
    return (
      <section className="w-full bg-white text-[#1A3E1B] py-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-subheader">
            Connect with us
          </h2>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/total-scope-marketing-solutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-[#0e76a8] hover:text-[#0a5a7a]">
              <FaLinkedin size={40} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#3b5998] hover:text-[#2d4373]">
              <FaFacebook size={40} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#e4405f] hover:text-[#bc2a8d]">
              <FaInstagram size={40} />
            </a>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;