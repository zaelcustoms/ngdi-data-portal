
import React from 'react';
import { Database, Users, MapPin, FileCheck } from 'lucide-react';

const stats = [
  { 
    value: "10,000+", 
    label: "Datasets",
    icon: <Database className="h-8 w-8" />,
    description: "Comprehensive geospatial datasets"
  },
  { 
    value: "500+", 
    label: "Government Agencies",
    icon: <Users className="h-8 w-8" />,
    description: "Contributing organizations"
  },
  { 
    value: "36", 
    label: "States Covered",
    icon: <MapPin className="h-8 w-8" />,
    description: "Complete national coverage"
  },
  { 
    value: "98%", 
    label: "Data Accessibility",
    icon: <FileCheck className="h-8 w-8" />,
    description: "Open access information"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-ngdi-600 to-ngdi-800 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 8%), 
                            radial-gradient(circle at 75% 44%, rgba(255, 255, 255, 0.2) 0%, transparent 10%)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold text-white">NGDI by the Numbers</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Nigeria's most comprehensive geospatial data repository continues to grow
          </p>
          <div className="mt-2 w-20 h-1 bg-white/40 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-smooth animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-white/20 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
              <p className="text-lg font-medium text-white mb-1">{stat.label}</p>
              <p className="text-sm text-white/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
