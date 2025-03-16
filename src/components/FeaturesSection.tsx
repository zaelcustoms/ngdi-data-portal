
import React from 'react';
import { Database, Search, Users, Map } from 'lucide-react';

const features = [
  {
    icon: <Database className="h-12 w-12 text-ngdi-600" />,
    title: "Metadata Management",
    description: "Create, validate, and manage standardized metadata with multi-step data entry and quality control."
  },
  {
    icon: <Search className="h-12 w-12 text-ngdi-600" />,
    title: "Advanced Search",
    description: "Find data through multi-criteria search with geospatial filtering and organization-based parameters."
  },
  {
    icon: <Users className="h-12 w-12 text-ngdi-600" />,
    title: "User Management",
    description: "Secure authentication with role-based access control and comprehensive profile management."
  },
  {
    icon: <Map className="h-12 w-12 text-ngdi-600" />,
    title: "Interactive Maps",
    description: "Visualize geographic data with dynamic map interfaces, layer management, and spatial queries."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform provides powerful tools to manage, discover, and utilize geospatial data across Nigeria.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-smooth animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
