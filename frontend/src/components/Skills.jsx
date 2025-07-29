import React from 'react';
import { Brain, Search, TrendingUp, Users, Book, Compass } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Critical Thinking",
      description: "Strong analytical and problem-solving abilities with curiosity-driven approach"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Detail-Oriented",
      description: "Meticulous attention to detail with sincere hard work ethic"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Personal Finance",
      description: "Financial literacy and understanding of economic principles"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership",
      description: "Developed through Boy Scouts participation and team-building activities"
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Liberal Arts",
      description: "Broad knowledge base across multiple disciplines and fields"
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Diverse Interests",
      description: "Passionate about sightseeing, travel, history, and yoga"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Key Skills & <span className="text-teal-600">Interests</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse skill set combining analytical thinking, leadership, and broad intellectual curiosity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-lg mb-6 mx-auto">
                <div className="text-teal-600">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;