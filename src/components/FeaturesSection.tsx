
import React from 'react';
import { Database, Search, Users, Map, Check } from 'lucide-react';

const features = [
  {
    icon: <Database className="h-12 w-12 text-ngdi-600" />,
    title: "Metadata Management",
    description: "Create, validate, and manage standardized metadata with multi-step data entry and quality control.",
    benefits: [
      "Standardized data entry forms",
      "Automated validation",
      "Revision history tracking",
      "Custom metadata templates"
    ]
  },
  {
    icon: <Search className="h-12 w-12 text-ngdi-600" />,
    title: "Advanced Search",
    description: "Find data through multi-criteria search with geospatial filtering and organization-based parameters.",
    benefits: [
      "Full-text search capability",
      "Geographic area filtering",
      "Organization & author filters",
      "Dataset type categorization"
    ]
  },
  {
    icon: <Users className="h-12 w-12 text-ngdi-600" />,
    title: "User Management",
    description: "Secure authentication with role-based access control and comprehensive profile management.",
    benefits: [
      "Role-based permissions",
      "Organization profiles",
      "Activity tracking",
      "Customizable dashboards"
    ]
  },
  {
    icon: <Map className="h-12 w-12 text-ngdi-600" />,
    title: "Interactive Maps",
    description: "Visualize geographic data with dynamic map interfaces, layer management, and spatial queries.",
    benefits: [
      "Multiple basemap options",
      "Layer transparency control",
      "Geographic feature selection",
      "Data visualization tools"
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section id="features-section" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          <div className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            <p>Our platform provides powerful tools to manage, discover, and utilize geospatial data across Nigeria.</p>
            <div className="mt-2 w-20 h-1 bg-ngdi-600 mx-auto rounded-full"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col h-full bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-smooth animate-on-scroll hover:border-ngdi-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-ngdi-50 rounded-lg w-fit mb-4 group-hover:bg-ngdi-100 transition-smooth">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-ngdi-600 transition-smooth">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              <div className="mt-auto">
                <h4 className="font-medium text-gray-800 mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-4 w-4 text-ngdi-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
