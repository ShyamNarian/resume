import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.A. in Liberal Arts",
      status: "In Progress",
      school: "Middle Tennessee State University",
      location: "Murfreesboro, TN",
      period: "Current",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Pursuing a comprehensive Liberal Arts education with focus on interdisciplinary learning and critical thinking.",
      highlights: [
        "Interdisciplinary approach to learning",
        "Critical thinking and analysis",
        "Strong writing and communication skills",
        "Broad knowledge across multiple fields"
      ]
    },
    {
      degree: "High School Diploma",
      status: "Completed",
      school: "La Vergne High School",
      location: "La Vergne, TN",
      period: "Graduated",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Completed high school education with strong academic foundation and active participation in extracurricular activities.",
      highlights: [
        "Strong academic foundation",
        "Active in Boy Scouts program",
        "Developed leadership skills",
        "Community service involvement"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Education & <span className="text-teal-600">Learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a strong foundation through comprehensive education and continuous learning
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Basic Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg">
                      <div className="text-teal-600">
                        {edu.icon}
                      </div>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'In Progress' 
                          ? 'bg-yellow-100 text-yellow-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-lg font-medium text-teal-600 mb-4">{edu.school}</p>
                  
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:col-span-2">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {edu.description}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Focus Areas</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Learning Section */}
        <div className="mt-12 bg-teal-50 rounded-xl p-8 border border-teal-100">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-lg mb-6 mx-auto">
              <BookOpen className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Actively pursuing knowledge in artificial intelligence, machine learning, and interdisciplinary 
              problem-solving to develop expertise as an AI Generalist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;