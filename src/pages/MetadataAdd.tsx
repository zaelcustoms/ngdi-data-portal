
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetadataForm from '@/components/MetadataForm';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

const MetadataAdd = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Add Metadata</h1>
            
            <Link to="/metadata/view/1">
              <Button variant="outline" className="flex items-center gap-2">
                <Eye className="w-4 h-4" /> View Example
              </Button>
            </Link>
          </div>
          
          <p className="text-gray-600 mb-8">
            Create standardized metadata for your geospatial data by filling out the forms below.
            All required fields are marked with an asterisk (*).
          </p>
          
          <MetadataForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MetadataAdd;
