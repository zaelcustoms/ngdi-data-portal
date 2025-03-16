
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data for latest datasets
const datasets = [
  {
    id: 1,
    title: "Nigeria Administrative Boundaries",
    organization: "National Boundary Commission",
    category: "Boundaries",
    date: "2023-12-15",
    thumbnailUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Water Resources Distribution Map",
    organization: "Ministry of Water Resources",
    category: "Water Bodies",
    date: "2023-11-30",
    thumbnailUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "National Road Network",
    organization: "Federal Ministry of Works",
    category: "Transportation",
    date: "2023-10-22",
    thumbnailUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Healthcare Facilities Distribution",
    organization: "Federal Ministry of Health",
    category: "Health",
    date: "2023-11-05",
    thumbnailUrl: "/placeholder.svg"
  }
];

const LatestDatasets = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold text-gray-900">Latest Datasets</h2>
            <p className="mt-2 text-lg text-gray-600">
              Recent additions to our geospatial data repository
            </p>
          </div>
          <Link 
            to="/search" 
            className="flex items-center text-ngdi-600 hover:text-ngdi-700 transition-smooth font-medium animate-on-scroll"
          >
            View all datasets
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {datasets.map((dataset, index) => (
            <div 
              key={dataset.id} 
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-smooth overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 bg-gray-200">
                <img 
                  src={dataset.thumbnailUrl} 
                  alt={dataset.title} 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-ngdi-600">
                  {dataset.category}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{dataset.title}</h3>
                <div className="flex items-start text-sm text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{dataset.organization}</span>
                </div>
                <div className="text-sm text-gray-500">Updated: {new Date(dataset.date).toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestDatasets;
