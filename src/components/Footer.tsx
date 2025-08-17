'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Website Templates', href: '#services' },
    { name: 'Custom Websites', href: '#services' },
    { name: 'AI Receptionists', href: '#services' },
    { name: 'AI Automation Agents', href: '#services' }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/levelupnationx_?igsh=MWdtd3Frcjg2Nm9jMw==", label: 'Instagram' },
    { icon: Twitter, href: "https://x.com/LevelupNationX?t=wcLGoAmbd-aPu67bZuRmUg&s=09", label: 'Twitter' },
    { icon: Linkedin, href: "https://www.linkedin.com/in/levelup-helpx-26499737a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: 'LinkedIn' },
    { icon: Github, href: "https://github.com/Pratheekkasba", label: 'GitHub' }
  ];

  return (
    <footer className="relative bg-gunmetal-500 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-picton-blue to-picton-blue-600 rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/levelup-nationx-logo.jpg"
                  alt="LevelUp NationX Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <span className="text-white font-bold text-2xl">LevelUp NationX</span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Powering businesses with cutting-edge websites and AI solutions. 
              We help startups and local businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-picton-blue hover:border-picton-blue transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-picton-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-white/60 hover:text-picton-blue transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-3 text-white/60">
              <p>leveluphelpx@gmail.com</p>
              <p>+91 9154715453</p>
              <p>Hyderabad, India</p>
            </div>
            <div className="mt-6 p-4 bg-picton-blue/10 border border-picton-blue/20 rounded-lg">
              <p className="text-picton-blue text-sm font-medium">
                AI Support available 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 LevelUp NationX. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-picton-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-picton-blue transition-colors">
                Terms of Service
              </a>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-picton-blue to-picton-blue-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-picton-blue/25 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} className="text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-picton-blue to-transparent"></div>
    </footer>
  );
};

export default Footer;
