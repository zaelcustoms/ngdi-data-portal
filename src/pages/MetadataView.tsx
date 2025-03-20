
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetadataViewer from '@/components/MetadataViewer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit, Save, Trash2 } from 'lucide-react';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// This would typically come from your API
const fetchMetadata = (id: string) => {
  // For demo purposes, we'll return mock data
  return {
    id,
    citation: {
      author: 'John Doe',
      title: 'Nigeria Land Cover Dataset 2023',
      organization: 'Nigeria Geospatial Data Infrastructure',
      dateFrom: '2023-01-01',
      dateTo: '2023-12-31',
    },
    abstract: 'This dataset provides comprehensive land cover classification for Nigeria based on satellite imagery from 2023. It includes 12 land cover classes with national coverage at 30m resolution.',
    purpose: 'This dataset was created to support environmental monitoring, urban planning, and agricultural resource management across Nigeria.',
    thumbnail: {
      url: 'https://example.com/thumbnail.jpg',
      name: 'Land Cover Thumbnail',
    },
    frameworkType: 'landcover',
    categories: ['environment', 'imagery'],
    spatial: {
      coordinateSystem: 'wgs84',
      projection: 'mercator',
      scale: '1:50000',
      resolution: '30m',
    },
    quality: {
      accuracyLevel: 'high',
      completeness: '95',
      consistencyCheck: true,
      validationStatus: 'validated',
    },
    technical: {
      fileFormat: 'geotiff',
      fileSize: '2500',
      numberOfFeatures: '2450',
      softwareRequirements: 'QGIS, ArcGIS',
    },
    updateFrequency: {
      updateCycle: 'annually',
      lastUpdateDate: '2023-12-15',
      nextUpdateDate: '2024-12-15',
    },
    distribution: {
      format: 'geotiff',
      accessMethod: 'direct_download',
      downloadUrl: 'https://example.com/download/landcover2023.tiff',
      apiEndpoint: 'https://api.example.com/v1/landcover',
    },
    restrictions: {
      licenseType: 'cc_by',
      usageTerms: 'Attribution required. No commercial restrictions.',
      attributionRequirements: 'Data provided by Nigeria Geospatial Data Infrastructure',
      accessRestrictions: [],
    },
    contact: {
      person: 'Jane Smith',
      email: 'jane.smith@ngdi.gov.ng',
      phone: '+234 123 4567 890',
      organization: 'Nigeria Geospatial Data Infrastructure',
      department: 'Data Management',
    },
    accessMethods: {
      directDownload: true,
      apiAccess: true,
      webServices: false,
      physicalMedia: false,
    },
  };
};

const MetadataView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [metadata, setMetadata] = useState(fetchMetadata(id || '1'));
  
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };
  
  const handleSave = () => {
    // Here you would typically save to your backend
    console.log('Saving metadata:', metadata);
    
    toast({
      title: "Success!",
      description: "Metadata has been updated successfully.",
      duration: 5000,
    });
    
    setIsEditing(false);
  };
  
  const handleDelete = () => {
    // Here you would typically delete from your backend
    console.log('Deleting metadata:', metadata.id);
    
    toast({
      title: "Deleted",
      description: "Metadata has been deleted.",
      duration: 5000,
    });
    
    // Navigate back to a list or dashboard
    navigate('/');
  };
  
  const handleUpdate = (updatedData: any) => {
    setMetadata((prev) => ({ ...prev, ...updatedData }));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Button 
              variant="outline"
              size="sm"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
            
            <div className="flex items-center gap-3">
              {isEditing ? (
                <Button 
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <Save className="w-4 h-4" /> Save Changes
                </Button>
              ) : (
                <Button 
                  onClick={handleEditToggle}
                  className="flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" /> Edit Metadata
                </Button>
              )}
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="destructive"
                    size="icon"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the
                      metadata and associated records from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-900">{metadata.citation.title}</h1>
              <p className="text-sm text-gray-500 mt-1">
                Published by {metadata.citation.organization} • {metadata.citation.dateFrom} to {metadata.citation.dateTo}
              </p>
            </div>
            
            <MetadataViewer
              metadata={metadata}
              isEditing={isEditing}
              onUpdate={handleUpdate}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MetadataView;
