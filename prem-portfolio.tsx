import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Send, Server, Code } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [animationData, setAnimationData] = useState([]);

  useEffect(() => {
    // Simulate data pipeline flow for 3D-like visualization
    const generateAnimationData = () => {
      return Array.from({ length: 20 }, (_, i) => ({
        name: `Step ${i + 1}`,
        value: Math.sin(i * 0.5) * 50 + 50
      }));
    };

    setAnimationData(generateAnimationData());
  }, []);

  const projects = [
    {
      title: "Data Governance Framework",
      description: "Developed a unified access control framework managing permissions across analytics platforms using DataHub for seamless data discovery.",
      technologies: ["DataHub", "Access Control", "Data Cataloging"],
      visualization: (
        <div className="w-full h-40 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={animationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3b82f6" 
                strokeWidth={3} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )
    },
    {
      title: "Neonatal Brain Imaging ML Project",
      description: "Developed machine learning models for anomaly detection in neonatal brain ultrasound images, improving diagnostic accuracy by 30%.",
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "CNN"],
      visualization: (
        <div className="w-full h-40 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-green-300 to-blue-300 animate-pulse"></div>
          <div className="relative z-10 text-center">
            <Server className="mx-auto text-green-600 w-16 h-16" />
            <p className="text-sm text-gray-700 mt-2">ML Model Visualization</p>
          </div>
        </div>
      )
    },
    {
      title: "Data Pipeline Optimization",
      description: "Implemented high-performance data pipelines using Apache Spark, Kafka, and Flink to process large-scale data efficiently.",
      technologies: ["Apache Spark", "Kafka", "Flink", "Big Data"],
      visualization: (
        <div className="w-full h-40 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg flex items-center justify-center relative">
          <div className="absolute inset-0 opacity-10 animate-pulse bg-gradient-to-r from-purple-300 to-blue-300"></div>
          <div className="relative z-10 flex space-x-4">
            {['Data', 'Pipeline', 'Optimization'].map((text, index) => (
              <div 
                key={text} 
                className="bg-white/50 px-3 py-1 rounded-full shadow-sm"
                style={{ 
                  transform: `rotate(${(index - 1) * 10}deg)`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Prem Kumar Bammidi
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Data Engineer | Big Data Specialist | Machine Learning Enthusiast
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#" 
                className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
              >
                Download Resume
              </a>
              <a 
                href="mailto:premkumarbammidi27@gmail.com" 
                className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="max-w-4xl mx-auto py-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Professional Summary</h2>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                Innovative Data Engineer with 3+ years of experience in building robust data platforms 
                and scalable solutions. Expertise in big data infrastructure, data governance, and 
                developing high-performance data systems. Adept at using Python, Scala, and Java to 
                design and optimize data pipelines, ensuring data quality, compliance, and accessibility.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">
                    Core Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Scala', 'Spark', 'Kafka', 'Azure', 'TensorFlow', 'Docker', 'Kubernetes'].map(tech => (
                      <span 
                        key={tech} 
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">
                    Certifications
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Microsoft Certified: Azure Data Engineer</li>
                    <li>• Master of Science in Computer Science (UAB)</li>
                    <li>• B.Tech in Computer Science & Engineering</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="max-w-4xl mx-auto py-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Featured Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-3 gap-6 p-6"
                >
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    {project.visualization}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="max-w-md mx-auto py-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              Contact Me
            </h2>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="space-y-4 text-center">
                <p>
                  <strong>Email:</strong> premkumarbammidi27@gmail.com
                </p>
                <p>
                  <strong>LinkedIn:</strong> LinkedIn/In/Prem Kumar
                </p>
                <p>
                  <strong>Mobile:</strong> +1 (205) 478-5963
                </p>
                <p>
                  <strong>Location:</strong> Birmingham, AL
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="flex justify-around py-4">
          {[
            { icon: Home, section: 'home', label: 'Home' },
            { icon: User, section: 'about', label: 'About' },
            { icon: Briefcase, section: 'projects', label: 'Projects' },
            { icon: Send, section: 'contact', label: 'Contact' }
          ].map(({ icon: Icon, section, label }) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`flex flex-col items-center ${
                activeSection === section 
                  ? 'text-blue-500' 
                  : 'text-gray-500 hover:text-blue-500'
              } transition`}
            >
              <Icon className="w-6 h-6 mb-1"/>
              <span className="text-xs">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pb-20">
        {renderSection()}
      </main>
    </div>
  );
};

export default Portfolio;
