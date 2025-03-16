
import React from 'react';
import { MapPin, Search, Database } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 animate-on-scroll">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Nigeria's Geospatial Data Infrastructure Portal
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Discover, access, and contribute to Nigeria's comprehensive geospatial data repository for informed decision-making and planning.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
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
          </div>
          
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="relative">
              <div className="glassmorphism rounded-lg p-2 shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Nigeria Map Visualization" 
                  className="w-full h-auto rounded"
                />
              </div>
              
              {/* Map pins animation */}
              <div className="absolute top-1/4 left-1/3">
                <MapPin className="h-6 w-6 text-ngdi-600 animate-bounce" />
              </div>
              <div className="absolute top-1/2 right-1/4">
                <MapPin className="h-6 w-6 text-ngdi-600 animate-bounce" />
              </div>
              <div className="absolute bottom-1/3 left-1/4">
                <MapPin className="h-6 w-6 text-ngdi-600 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
