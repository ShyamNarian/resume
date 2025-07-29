import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-teal-400">Shyam Narian</h3>
            <p className="text-gray-400 leading-relaxed">
              AI Generalist and Liberal Arts student passionate about bridging ideas across diverse fields.
            </p>
          </div>

          {/* Center Column - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-teal-400 transition-colors">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-teal-400 transition-colors">
                About
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-teal-400 transition-colors">
                Skills
              </a>
              <a href="#experience" className="block text-gray-400 hover:text-teal-400 transition-colors">
                Experience
              </a>
              <a href="#education" className="block text-gray-400 hover:text-teal-400 transition-colors">
                Education
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-teal-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Nashville, TN</p>
              <p>reynolds123@duck.com</p>
              <p>AI Generalist & Student</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Shyam Narian. Built with{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" />
              and dedication to AI innovation.
            </p>
            
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;