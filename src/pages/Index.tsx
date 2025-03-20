
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import LatestDatasets from '@/components/LatestDatasets';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  // Animation for elements as they appear on scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger on initial load
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 -mt-10 bg-white rounded-2xl shadow-xl overflow-hidden">
            <FeaturesSection />
          </div>
        </div>
        <StatsSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 -mt-10 bg-white rounded-2xl shadow-xl overflow-hidden">
            <LatestDatasets />
          </div>
        </div>
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
