
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';

type MetadataReviewProps = {
  formData: any;
};

const MetadataReview: React.FC<MetadataReviewProps> = ({ formData }) => {
  return (
    <div className="space-y-6">
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Review your metadata</AlertTitle>
        <AlertDescription>
          Please review all information carefully before submitting. You won't be able to make changes after submission without creating a new record.
        </AlertDescription>
      </Alert>
      
      <ScrollArea className="h-[60vh] rounded-md border p-4">
        <div className="space-y-8">
          {/* General Information Section */}
          <div>
            <h2 className="text-xl font-bold border-b pb-2 mb-4">General Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Citation Details</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Author</dt>
                    <dd className="mt-1">{formData.citation?.author || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Title</dt>
                    <dd className="mt-1">{formData.citation?.title || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Organization</dt>
                    <dd className="mt-1">{formData.citation?.organization || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Date Range</dt>
                    <dd className="mt-1">
                      {formData.citation?.dateFrom 
                        ? `${formData.citation.dateFrom} to ${formData.citation.dateTo || 'present'}`
                        : 'Not provided'}
                    </dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Abstract and Purpose</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Abstract</dt>
                    <dd className="mt-1 whitespace-pre-line">{formData.abstract || 'Not provided'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Purpose</dt>
                    <dd className="mt-1 whitespace-pre-line">{formData.purpose || 'Not provided'}</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Thumbnail</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Image Name</dt>
                    <dd className="mt-1">{formData.thumbnail?.name || 'Not provided'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">URL</dt>
                    <dd className="mt-1">{formData.thumbnail?.url || 'Not provided'}</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Categories</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Framework Data Type</dt>
                    <dd className="mt-1 capitalize">{formData.frameworkType || 'Not provided'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Categories</dt>
                    <dd className="mt-1">
                      {formData.categories && formData.categories.length > 0 
                        ? (
                          <ul className="list-disc pl-5">
                            {formData.categories.map((category: string) => (
                              <li key={category} className="capitalize">{category.replace('_', ' ')}</li>
                            ))}
                          </ul>
                        )
                        : 'None selected'
                      }
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          
          {/* Technical Details Section */}
          <div>
            <h2 className="text-xl font-bold border-b pb-2 mb-4">Technical Details</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Spatial Information</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Coordinate System</dt>
                    <dd className="mt-1 capitalize">{formData.spatial?.coordinateSystem?.replace('_', ' ') || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Projection</dt>
                    <dd className="mt-1 capitalize">{formData.spatial?.projection?.replace('_', ' ') || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Scale</dt>
                    <dd className="mt-1">{formData.spatial?.scale || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Resolution</dt>
                    <dd className="mt-1">{formData.spatial?.resolution || 'Not provided'}</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Data Quality</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Accuracy Level</dt>
                    <dd className="mt-1 capitalize">{formData.quality?.accuracyLevel?.replace('_', ' ') || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Completeness</dt>
                    <dd className="mt-1">{formData.quality?.completeness ? `${formData.quality.completeness}%` : 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Consistency Check</dt>
                    <dd className="mt-1">{formData.quality?.consistencyCheck ? 'Yes' : 'No'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Validation Status</dt>
                    <dd className="mt-1 capitalize">{formData.quality?.validationStatus?.replace('_', ' ') || 'Not provided'}</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Technical Specifications</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">File Format</dt>
                    <dd className="mt-1 capitalize">{formData.technical?.fileFormat?.replace('_', ' ') || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">File Size</dt>
                    <dd className="mt-1">{formData.technical?.fileSize ? `${formData.technical.fileSize} MB` : 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Number of Features</dt>
                    <dd className="mt-1">{formData.technical?.numberOfFeatures || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Software Requirements</dt>
                    <dd className="mt-1">{formData.technical?.softwareRequirements || 'Not provided'}</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Update Frequency</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Update Cycle</dt>
                    <dd className="mt-1 capitalize">{formData.updateFrequency?.updateCycle?.replace('_', ' ') || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Last Update Date</dt>
                    <dd className="mt-1">{formData.updateFrequency?.lastUpdateDate || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Next Update Date</dt>
                    <dd className="mt-1">{formData.updateFrequency?.nextUpdateDate || 'Not provided'}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          
          {/* Access Information Section */}
          <div>
            <h2 className="text-xl font-bold border-b pb-2 mb-4">Access Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Distribution Details</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Format</dt>
                    <dd className="mt-1 capitalize">{formData.distribution?.format?.replace('_', ' ') || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Access Method</dt>
                    <dd className="mt-1 capitalize">{formData.distribution?.accessMethod?.replace('_', ' ') || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Download URL</dt>
                    <dd className="mt-1">{formData.distribution?.downloadUrl || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">API Endpoint</dt>
                    <dd className="mt-1">{formData.distribution?.apiEndpoint || 'Not provided'}</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Usage Restrictions</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">License Type</dt>
                    <dd className="mt-1 capitalize">{formData.restrictions?.licenseType?.replace('_', ' ') || 'Not provided'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Usage Terms</dt>
                    <dd className="mt-1 whitespace-pre-line">{formData.restrictions?.usageTerms || 'Not provided'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Attribution Requirements</dt>
                    <dd className="mt-1">{formData.restrictions?.attributionRequirements || 'Not provided'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Access Restrictions</dt>
                    <dd className="mt-1">
                      {formData.restrictions?.accessRestrictions && formData.restrictions.accessRestrictions.length > 0 
                        ? (
                          <ul className="list-disc pl-5">
                            {formData.restrictions.accessRestrictions.map((restriction: string) => (
                              <li key={restriction} className="capitalize">{restriction.replace('_', ' ')}</li>
                            ))}
                          </ul>
                        )
                        : 'None selected'
                      }
                    </dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Person</dt>
                    <dd className="mt-1">{formData.contact?.person || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1">{formData.contact?.email || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1">{formData.contact?.phone || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Organization</dt>
                    <dd className="mt-1">{formData.contact?.organization || 'Not provided'}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Department</dt>
                    <dd className="mt-1">{formData.contact?.department || 'Not provided'}</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Access Methods</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Available Methods</dt>
                    <dd className="mt-1">
                      <ul className="list-disc pl-5">
                        {formData.accessMethods?.directDownload && <li>Direct Download</li>}
                        {formData.accessMethods?.apiAccess && <li>API Access</li>}
                        {formData.accessMethods?.webServices && <li>Web Services</li>}
                        {formData.accessMethods?.physicalMedia && <li>Physical Media</li>}
                        {(!formData.accessMethods?.directDownload && 
                          !formData.accessMethods?.apiAccess && 
                          !formData.accessMethods?.webServices && 
                          !formData.accessMethods?.physicalMedia) && 
                          <li>None selected</li>}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default MetadataReview;
