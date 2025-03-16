
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Start Contributing to Nigeria's Geospatial Data Infrastructure
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join government agencies, researchers, and private organizations in building a comprehensive geospatial data ecosystem for Nigeria.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-ngdi-600 hover:bg-ngdi-700 text-white transition-smooth"
            >
              <Link to="/register" className="flex items-center">
                Create Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-ngdi-600 text-ngdi-600 hover:bg-ngdi-50"
            >
              <Link to="/about" className="flex items-center">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
