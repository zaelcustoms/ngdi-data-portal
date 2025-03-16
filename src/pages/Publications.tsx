
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const publications = [
  {
    id: 1,
    title: "NGDI Policy Framework 2023-2030",
    type: "Policy Document",
    date: "2023-06-15",
    authors: "NGDI Committee",
    description: "This document outlines the strategic direction and policy framework for Nigeria's Geospatial Data Infrastructure for the period 2023-2030, including goals, objectives, and implementation strategies.",
    fileSize: "2.4 MB",
    fileType: "PDF"
  },
  {
    id: 2,
    title: "Geospatial Data Standards for Nigeria",
    type: "Technical Standard",
    date: "2022-11-30",
    authors: "Technical Subcommittee on Standards",
    description: "Comprehensive standards for geospatial data collection, processing, and sharing across Nigerian government agencies and stakeholders, aligned with international best practices.",
    fileSize: "4.1 MB",
    fileType: "PDF"
  },
  {
    id: 3,
    title: "Annual Report on NGDI Implementation Progress 2022",
    type: "Report",
    date: "2023-02-20",
    authors: "NGDI Secretariat",
    description: "Detailed report on the progress of NGDI implementation during the 2022 fiscal year, highlighting achievements, challenges, and recommendations for future development.",
    fileSize: "5.7 MB",
    fileType: "PDF"
  },
  {
    id: 4,
    title: "Guidelines for Metadata Management in NGDI",
    type: "Guideline",
    date: "2022-09-10",
    authors: "Metadata Working Group",
    description: "Practical guidelines for creating, managing, and sharing metadata within the NGDI framework, including templates, workflows, and quality control procedures.",
    fileSize: "1.8 MB",
    fileType: "PDF"
  },
  {
    id: 5,
    title: "Geospatial Data Sharing Protocol for Nigeria",
    type: "Protocol",
    date: "2022-07-22",
    authors: "Interagency Coordination Committee",
    description: "Protocol establishing the procedures and requirements for sharing geospatial data among government agencies, private sector, and academic institutions in Nigeria.",
    fileSize: "3.2 MB",
    fileType: "PDF"
  }
];

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-6">Publications</h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-12">
              Access official documents, reports, standards, and guidelines published by the NGDI Committee.
            </p>
            
            <div className="space-y-6">
              {publications.map((pub) => (
                <div key={pub.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 hidden sm:block">
                      <FileText className="h-10 w-10 text-ngdi-600" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h2 className="text-xl font-semibold text-gray-900">{pub.title}</h2>
                        <Badge variant="outline" className="text-ngdi-600 border-ngdi-200 bg-ngdi-50">
                          {pub.type}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap text-sm text-gray-500 mb-3 gap-x-4">
                        <span>Published: {new Date(pub.date).toLocaleDateString()}</span>
                        <span>By: {pub.authors}</span>
                        <span>{pub.fileType} ({pub.fileSize})</span>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{pub.description}</p>
                      
                      <div className="flex flex-wrap gap-3">
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="bg-ngdi-600 hover:bg-ngdi-700"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-ngdi-200 text-ngdi-600 hover:bg-ngdi-50"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Online
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Publications;
