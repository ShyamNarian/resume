import React from 'react';
import { Mail, MapPin, Download } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Shyam <span className="text-teal-600">Narian</span>
              </h1>
              <p className="text-xl lg:text-2xl text-teal-600 font-medium">
                AI Generalist & Liberal Arts Student
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-teal-600" />
                  <span>Nashville, TN</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-teal-600" />
                  <span>reynolds123@duck.com</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-teal-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                I am a Liberal Arts junior at Middle Tennessee State University with a deep interest in 
                artificial intelligence and general problem-solving. My mission is to grow into an AI 
                Generalist who bridges ideas from various fields.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-medium"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg font-medium"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image Area */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center shadow-xl">
              <div className="w-72 h-72 lg:w-88 lg:h-88 bg-white rounded-full flex items-center justify-center">
                <span className="text-6xl lg:text-8xl text-teal-600 font-bold">SN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;