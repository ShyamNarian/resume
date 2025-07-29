import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      title: "Boy Scouts Participant",
      period: "School Years",
      organization: "Boy Scouts of America",
      icon: <Award className="w-6 h-6" />,
      responsibilities: [
        "Participated in team-building activities and outdoor learning experiences",
        "Developed leadership, self-reliance, and community service values",
        "Engaged in collaborative problem-solving exercises",
        "Built strong foundation in outdoor skills and environmental awareness"
      ],
      skills: ["Leadership", "Teamwork", "Problem Solving", "Community Service"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Experience & <span className="text-teal-600">Development</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building leadership and character through meaningful experiences
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Header */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg">
                      <div className="text-teal-600">
                        {exp.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-teal-600 font-medium">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 font-medium mb-4">{exp.organization}</p>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:w-2/3">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities & Achievements</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Goals Section */}
        <div className="mt-12 bg-teal-50 rounded-xl p-8 border border-teal-100">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-lg mb-6 mx-auto">
              <Target className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Aspirations</h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Currently developing expertise to become an AI Generalist, combining my Liberal Arts foundation 
              with artificial intelligence to bridge ideas across diverse fields and solve complex problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;