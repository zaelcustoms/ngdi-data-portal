
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, Save } from 'lucide-react';
import GeneralInfoForm from './metadata-forms/GeneralInfoForm';
import TechnicalDetailsForm from './metadata-forms/TechnicalDetailsForm';
import AccessInformationForm from './metadata-forms/AccessInformationForm';
import MetadataReview from './metadata-forms/MetadataReview';

// Step indicators for the form process
const steps = [
  { id: 'general', label: 'General Information' },
  { id: 'technical', label: 'Technical Details' },
  { id: 'access', label: 'Access Information' },
  { id: 'review', label: 'Review & Submit' },
];

const MetadataForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // General Information
    citation: {
      author: '',
      title: '',
      organization: '',
      dateFrom: '',
      dateTo: '',
    },
    abstract: '',
    purpose: '',
    thumbnail: {
      url: '',
      name: '',
    },
    frameworkType: '',
    categories: [] as string[],
    
    // Technical Details
    spatial: {
      coordinateSystem: '',
      projection: '',
      scale: '',
      resolution: '',
    },
    quality: {
      accuracyLevel: '',
      completeness: '',
      consistencyCheck: false,
      validationStatus: '',
    },
    technical: {
      fileFormat: '',
      fileSize: '',
      numberOfFeatures: '',
      softwareRequirements: '',
    },
    updateFrequency: {
      updateCycle: '',
      lastUpdateDate: '',
      nextUpdateDate: '',
    },
    
    // Access Information
    distribution: {
      format: '',
      accessMethod: '',
      downloadUrl: '',
      apiEndpoint: '',
    },
    restrictions: {
      licenseType: '',
      usageTerms: '',
      attributionRequirements: '',
      accessRestrictions: [] as string[],
    },
    contact: {
      person: '',
      email: '',
      phone: '',
      organization: '',
      department: '',
    },
    accessMethods: {
      directDownload: false,
      apiAccess: false,
      webServices: false,
      physicalMedia: false,
    },
  });
  
  const { toast } = useToast();
  
  const updateFormData = (stepData: any) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleSubmit = async () => {
    try {
      // Here you would normally send the data to your backend
      console.log('Submitting metadata:', formData);
      
      // Show success message
      toast({
        title: "Success!",
        description: "Your metadata has been submitted successfully.",
        duration: 5000,
      });
      
      // Reset form or redirect
      // setFormData({...initial state});
      // or redirect to dashboard/listing page
    } catch (error) {
      console.error('Error submitting metadata:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your metadata. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };
  
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <GeneralInfoForm formData={formData} updateFormData={updateFormData} />;
      case 1:
        return <TechnicalDetailsForm formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <AccessInformationForm formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <MetadataReview formData={formData} />;
      default:
        return <GeneralInfoForm formData={formData} updateFormData={updateFormData} />;
    }
  };
  
  return (
    <div className="space-y-8">
      {/* Progress indicator */}
      <div className="relative">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div 
            className="h-2 rounded-full bg-ngdi-600 transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
        
        <div className="mt-6 grid grid-cols-4 text-sm gap-2">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`text-center ${index <= currentStep ? 'text-ngdi-600 font-medium' : 'text-gray-500'}`}
            >
              <div className="mb-2 flex justify-center">
                <span className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  index < currentStep 
                    ? 'bg-ngdi-600 text-white border-ngdi-600' 
                    : index === currentStep 
                      ? 'border-ngdi-600 text-ngdi-600' 
                      : 'border-gray-300 text-gray-400'
                }`}>
                  {index < currentStep ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </span>
              </div>
              <span className="block text-xs md:text-sm">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Form card */}
      <Card className="p-6 shadow-md">
        {renderStep()}
        
        {/* Navigation buttons */}
        <div className="mt-8 flex justify-between">
          {currentStep > 0 ? (
            <Button 
              type="button" 
              variant="outline" 
              onClick={handlePrevious}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </Button>
          ) : (
            <div></div> // Empty div for spacing
          )}
          
          {currentStep < steps.length - 1 ? (
            <Button 
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2"
            >
              Next <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button 
              type="button"
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
            >
              Submit <Save className="w-4 h-4" />
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default MetadataForm;
