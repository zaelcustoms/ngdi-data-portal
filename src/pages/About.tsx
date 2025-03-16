
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-12">About NGDI</h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What is NGDI?</h2>
              <p className="text-gray-700">
                The Nigeria Geospatial Data Infrastructure (NGDI) is a national initiative designed to create an enabling environment for the production, management, and use of geospatial information across Nigeria. It serves as the country's central repository for standardized geospatial data, promoting accessibility, data sharing, and collaborative development.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To establish and maintain a robust national infrastructure that facilitates the discovery, access, and utilization of geospatial data for decision-making, planning, and sustainable development across Nigeria.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To be the authoritative source for geospatial data in Nigeria, empowering government agencies, private organizations, academic institutions, and the general public with accurate, timely, and standardized geospatial information.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Objectives</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Establish standards for geospatial data collection, management, and sharing</li>
                <li>Facilitate coordination among various stakeholders in the geospatial community</li>
                <li>Reduce duplication of efforts in geospatial data collection</li>
                <li>Improve accessibility to geospatial data for decision-making</li>
                <li>Promote capacity building in geospatial technologies</li>
                <li>Foster innovation and research in geospatial applications</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">History</h2>
              <p className="text-gray-700">
                The NGDI initiative was established in 2003 as part of Nigeria's commitment to joining the global geospatial community and aligning with international standards for geospatial data management. Over the years, it has evolved to incorporate modern technologies and methodologies while remaining focused on its core mission of standardizing and democratizing access to geospatial information.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
