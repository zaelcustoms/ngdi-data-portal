
import React from 'react';
import { MapPin, Search, Database, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-ngdi-50/50 to-white pt-24 pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-ngdi-300/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-ngdi-200/30 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 animate-on-scroll">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Nigeria's <span className="text-ngdi-600">Geospatial Data</span> Infrastructure Portal
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Discover, access, and contribute to Nigeria's comprehensive geospatial data repository for informed decision-making and planning.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                as={Link}
                to="/metadata/search"
                size="lg" 
                className="bg-ngdi-600 hover:bg-ngdi-700 text-white transition-smooth"
              >
                Explore Data
                <Search className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-ngdi-600 text-ngdi-600 hover:bg-ngdi-50"
              >
                <Link to="/metadata/add" className="flex items-center">
                  Add Metadata
                  <Database className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="pt-8 flex justify-center lg:justify-start">
              <button 
                onClick={scrollToFeatures}
                className="flex flex-col items-center text-ngdi-600 hover:text-ngdi-700 transition-smooth"
              >
                <span className="text-sm font-medium mb-2">Learn More</span>
                <ChevronDown className="h-6 w-6 animate-bounce" />
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="relative">
              {/* Main map image */}
              <div className="glassmorphism rounded-xl p-4 shadow-lg transform rotate-1 hover:rotate-0 transition-all duration-300">
                <img 
                  src="/placeholder.svg" 
                  alt="Nigeria Map Visualization" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 glassmorphism rounded-lg shadow-md transform -rotate-6 z-0"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 glassmorphism rounded-lg shadow-md transform rotate-12 z-0"></div>
              
              {/* Map pins animation */}
              <div className="absolute top-1/4 left-1/3">
                <div className="relative">
                  <MapPin className="h-6 w-6 text-ngdi-600 animate-bounce" />
                  <div className="absolute -inset-1 bg-ngdi-400/20 rounded-full animate-ping"></div>
                </div>
              </div>
              <div className="absolute top-1/2 right-1/4">
                <div className="relative">
                  <MapPin className="h-6 w-6 text-ngdi-600 animate-bounce" style={{animationDelay: '0.5s'}} />
                  <div className="absolute -inset-1 bg-ngdi-400/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
              <div className="absolute bottom-1/3 left-1/4">
                <div className="relative">
                  <MapPin className="h-6 w-6 text-ngdi-600 animate-bounce" style={{animationDelay: '1s'}} />
                  <div className="absolute -inset-1 bg-ngdi-400/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
