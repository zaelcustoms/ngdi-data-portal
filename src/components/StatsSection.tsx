
import React from 'react';

const stats = [
  { value: "10,000+", label: "Datasets" },
  { value: "500+", label: "Government Agencies" },
  { value: "36", label: "States Covered" },
  { value: "98%", label: "Data Accessibility" }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-ngdi-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold">NGDI by the Numbers</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Nigeria's most comprehensive geospatial data repository continues to grow
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <p className="text-lg text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
