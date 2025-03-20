
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetadataSearchForm from '@/components/MetadataSearchForm';
import MetadataSearchResults from '@/components/MetadataSearchResults';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

// Mock search results data
const mockSearchResults = [
  {
    id: 1,
    title: "Nigeria Administrative Boundaries",
    author: "Nigerian Geological Survey Agency",
    organization: "NGSA",
    dateUpdated: "2023-06-15",
    categories: ["boundaries", "administrative", "vector"],
    description: "Administrative boundaries for Nigeria including states and local government areas"
  },
  {
    id: 2,
    title: "Land Cover Classification Map",
    author: "Forestry Research Institute",
    organization: "Ministry of Environment",
    dateUpdated: "2023-04-22",
    categories: ["land_cover", "classification", "raster"],
    description: "National land cover classification map showing forests, agricultural areas, urban areas, and water bodies"
  },
  {
    id: 3,
    title: "Digital Elevation Model of Nigeria",
    author: "Office of the Surveyor General",
    organization: "Federal Ministry of Works",
    dateUpdated: "2023-02-10",
    categories: ["elevation", "topography", "raster"],
    description: "Digital elevation model covering the entire country at 30m resolution"
  }
];

const MetadataSearch = () => {
  const [searchResults, setSearchResults] = useState<any[]>(mockSearchResults);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  
  const handleSearch = (searchParams: any) => {
    setIsSearching(true);
    
    // Simulate search with a delay
    setTimeout(() => {
      console.log('Searching with params:', searchParams);
      // In a real application, we would call an API here
      // For now, we'll just return our mock data
      setSearchResults(mockSearchResults);
      setIsSearching(false);
    }, 800);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Search Metadata</h1>
            
            <Button 
              onClick={() => navigate('/metadata/add')}
              className="flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" /> Add New Metadata
            </Button>
          </div>
          
          <p className="text-gray-600 mb-8">
            Search for geospatial metadata by title, category, date range, or other attributes.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4">
              <MetadataSearchForm onSearch={handleSearch} />
            </div>
            
            <div className="lg:col-span-8">
              <MetadataSearchResults 
                results={searchResults} 
                isLoading={isSearching} 
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MetadataSearch;
