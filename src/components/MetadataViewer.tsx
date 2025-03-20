
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Download, ExternalLink, Globe, Info, MapPin, Server, Shield, User } from 'lucide-react';

type MetadataViewerProps = {
  metadata: any;
  isEditing: boolean;
  onUpdate: (data: any) => void;
};

const MetadataViewer: React.FC<MetadataViewerProps> = ({ 
  metadata, 
  isEditing,
  onUpdate 
}) => {
  const handleInputChange = (section: string, field: string, value: any) => {
    onUpdate({ 
      [section]: { 
        ...metadata[section], 
        [field]: value 
      } 
    });
  };
  
  // Helper for rendering view-only field
  const ViewField = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div className="mb-4">
      <div className="text-sm font-medium text-gray-500 mb-1">{label}</div>
      <div className="text-base">{value || <span className="text-gray-400 italic">Not specified</span>}</div>
    </div>
  );
  
  // Helper for rendering editable field
  const EditField = ({ 
    label, 
    value, 
    section, 
    field, 
    type = 'text', 
    required = false 
  }: { 
    label: string; 
    value: string | number; 
    section: string; 
    field: string; 
    type?: string;
    required?: boolean;
  }) => (
    <div className="mb-4">
      <Label htmlFor={`${section}-${field}`} className="mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      {type === 'textarea' ? (
        <Textarea 
          id={`${section}-${field}`}
          value={value as string} 
          onChange={(e) => handleInputChange(section, field, e.target.value)}
          className="w-full"
        />
      ) : (
        <Input
          id={`${section}-${field}`}
          type={type}
          value={value as string}
          onChange={(e) => handleInputChange(section, field, e.target.value)}
          required={required}
        />
      )}
    </div>
  );
  
  return (
    <div className="p-6">
      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="summary" className="flex items-center gap-2">
            <Info className="w-4 h-4" /> Summary
          </TabsTrigger>
          <TabsTrigger value="spatial" className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Spatial
          </TabsTrigger>
          <TabsTrigger value="technical" className="flex items-center gap-2">
            <Server className="w-4 h-4" /> Technical
          </TabsTrigger>
          <TabsTrigger value="access" className="flex items-center gap-2">
            <Download className="w-4 h-4" /> Access
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <User className="w-4 h-4" /> Contact
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="summary" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5" /> General Information
              </CardTitle>
              <CardDescription>Summary of dataset details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  {isEditing ? (
                    <>
                      <EditField 
                        label="Author" 
                        value={metadata.citation.author} 
                        section="citation" 
                        field="author" 
                        required
                      />
                      <EditField 
                        label="Title" 
                        value={metadata.citation.title} 
                        section="citation" 
                        field="title" 
                        required
                      />
                      <EditField 
                        label="Organization" 
                        value={metadata.citation.organization} 
                        section="citation" 
                        field="organization" 
                        required
                      />
                    </>
                  ) : (
                    <>
                      <ViewField label="Author" value={metadata.citation.author} />
                      <ViewField label="Title" value={metadata.citation.title} />
                      <ViewField label="Organization" value={metadata.citation.organization} />
                    </>
                  )}
                </div>
                
                <div>
                  {isEditing ? (
                    <>
                      <EditField 
                        label="Date From" 
                        value={metadata.citation.dateFrom} 
                        section="citation" 
                        field="dateFrom" 
                        type="date"
                        required
                      />
                      <EditField 
                        label="Date To" 
                        value={metadata.citation.dateTo} 
                        section="citation" 
                        field="dateTo" 
                        type="date"
                        required
                      />
                    </>
                  ) : (
                    <>
                      <ViewField label="Date Range" value={`${metadata.citation.dateFrom} to ${metadata.citation.dateTo}`} />
                      <ViewField 
                        label="Categories" 
                        value={
                          <div className="flex flex-wrap gap-2 mt-1">
                            {metadata.categories.map((cat: string) => (
                              <Badge key={cat} variant="outline" className="capitalize">
                                {cat.replace(/_/g, ' ')}
                              </Badge>
                            ))}
                          </div>
                        } 
                      />
                    </>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                {isEditing ? (
                  <EditField 
                    label="Abstract" 
                    value={metadata.abstract} 
                    section="abstract" 
                    field="abstract" 
                    type="textarea"
                    required
                  />
                ) : (
                  <ViewField label="Abstract" value={metadata.abstract} />
                )}
              </div>
              
              <div className="mt-4">
                {isEditing ? (
                  <EditField 
                    label="Purpose" 
                    value={metadata.purpose} 
                    section="purpose" 
                    field="purpose" 
                    type="textarea"
                    required
                  />
                ) : (
                  <ViewField label="Purpose" value={metadata.purpose} />
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="spatial" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" /> Spatial Information
              </CardTitle>
              <CardDescription>Geographic details and projection information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {isEditing ? (
                  <>
                    <EditField 
                      label="Coordinate System" 
                      value={metadata.spatial.coordinateSystem} 
                      section="spatial" 
                      field="coordinateSystem" 
                      required
                    />
                    <EditField 
                      label="Projection" 
                      value={metadata.spatial.projection} 
                      section="spatial" 
                      field="projection" 
                      required
                    />
                    <EditField 
                      label="Scale" 
                      value={metadata.spatial.scale} 
                      section="spatial" 
                      field="scale" 
                      required
                    />
                    <EditField 
                      label="Resolution" 
                      value={metadata.spatial.resolution} 
                      section="spatial" 
                      field="resolution"
                    />
                  </>
                ) : (
                  <>
                    <ViewField 
                      label="Coordinate System" 
                      value={metadata.spatial.coordinateSystem === 'wgs84' ? 'WGS 84' : metadata.spatial.coordinateSystem} 
                    />
                    <ViewField 
                      label="Projection" 
                      value={metadata.spatial.projection === 'mercator' ? 'Mercator' : metadata.spatial.projection} 
                    />
                    <ViewField label="Scale" value={metadata.spatial.scale} />
                    <ViewField label="Resolution" value={metadata.spatial.resolution} />
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="technical" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="w-5 h-5" /> Technical Specifications
              </CardTitle>
              <CardDescription>Data format, quality, and maintenance details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Data Format</h3>
                  {isEditing ? (
                    <>
                      <EditField 
                        label="File Format" 
                        value={metadata.technical.fileFormat} 
                        section="technical" 
                        field="fileFormat" 
                        required
                      />
                      <EditField 
                        label="File Size (MB)" 
                        value={metadata.technical.fileSize} 
                        section="technical" 
                        field="fileSize"
                        type="number"
                      />
                      <EditField 
                        label="Number of Features" 
                        value={metadata.technical.numberOfFeatures} 
                        section="technical" 
                        field="numberOfFeatures"
                        type="number"
                      />
                    </>
                  ) : (
                    <>
                      <ViewField 
                        label="File Format" 
                        value={metadata.technical.fileFormat === 'geotiff' ? 'GeoTIFF' : metadata.technical.fileFormat} 
                      />
                      <ViewField label="File Size" value={`${metadata.technical.fileSize} MB`} />
                      <ViewField label="Number of Features" value={metadata.technical.numberOfFeatures} />
                    </>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Data Quality</h3>
                  {isEditing ? (
                    <>
                      <EditField 
                        label="Accuracy Level" 
                        value={metadata.quality.accuracyLevel} 
                        section="quality" 
                        field="accuracyLevel" 
                        required
                      />
                      <EditField 
                        label="Completeness (%)" 
                        value={metadata.quality.completeness} 
                        section="quality" 
                        field="completeness"
                        type="number"
                      />
                      <div className="flex items-start space-x-2 mb-4">
                        <Checkbox
                          id="consistency-check"
                          checked={metadata.quality.consistencyCheck}
                          onCheckedChange={(checked) => 
                            handleInputChange('quality', 'consistencyCheck', checked)
                          }
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="consistency-check"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Consistency Check
                          </label>
                          <p className="text-sm text-muted-foreground">
                            Data has been checked for logical consistency
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <ViewField 
                        label="Accuracy Level" 
                        value={
                          metadata.quality.accuracyLevel === 'high' ? 'High (< 1m)' : 
                          metadata.quality.accuracyLevel === 'medium' ? 'Medium (1-5m)' : 
                          metadata.quality.accuracyLevel === 'low' ? 'Low (> 5m)' : 
                          metadata.quality.accuracyLevel
                        } 
                      />
                      <ViewField label="Completeness" value={`${metadata.quality.completeness}%`} />
                      <ViewField 
                        label="Consistency Check" 
                        value={metadata.quality.consistencyCheck ? 'Verified' : 'Not verified'} 
                      />
                    </>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Update Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {isEditing ? (
                    <>
                      <EditField 
                        label="Update Cycle" 
                        value={metadata.updateFrequency.updateCycle} 
                        section="updateFrequency" 
                        field="updateCycle"
                      />
                      <div></div>
                      <EditField 
                        label="Last Update Date" 
                        value={metadata.updateFrequency.lastUpdateDate} 
                        section="updateFrequency" 
                        field="lastUpdateDate"
                        type="date"
                      />
                      <EditField 
                        label="Next Update Date" 
                        value={metadata.updateFrequency.nextUpdateDate} 
                        section="updateFrequency" 
                        field="nextUpdateDate"
                        type="date"
                      />
                    </>
                  ) : (
                    <>
                      <ViewField 
                        label="Update Cycle" 
                        value={metadata.updateFrequency.updateCycle === 'annually' ? 'Annually' : metadata.updateFrequency.updateCycle} 
                      />
                      <div></div>
                      <ViewField label="Last Update" value={metadata.updateFrequency.lastUpdateDate} />
                      <ViewField label="Next Update" value={metadata.updateFrequency.nextUpdateDate} />
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="access" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5" /> Access Information
              </CardTitle>
              <CardDescription>How to access and use this dataset</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Distribution Details</h3>
                  {isEditing ? (
                    <>
                      <EditField 
                        label="Distribution Format" 
                        value={metadata.distribution.format} 
                        section="distribution" 
                        field="format" 
                        required
                      />
                      <EditField 
                        label="Access Method" 
                        value={metadata.distribution.accessMethod} 
                        section="distribution" 
                        field="accessMethod" 
                        required
                      />
                      <EditField 
                        label="Download URL" 
                        value={metadata.distribution.downloadUrl} 
                        section="distribution" 
                        field="downloadUrl"
                      />
                      <EditField 
                        label="API Endpoint" 
                        value={metadata.distribution.apiEndpoint} 
                        section="distribution" 
                        field="apiEndpoint"
                      />
                    </>
                  ) : (
                    <>
                      <ViewField 
                        label="Distribution Format" 
                        value={metadata.distribution.format === 'geotiff' ? 'GeoTIFF' : metadata.distribution.format} 
                      />
                      <ViewField 
                        label="Access Method" 
                        value={metadata.distribution.accessMethod === 'direct_download' ? 'Direct Download' : metadata.distribution.accessMethod} 
                      />
                      <ViewField 
                        label="Download URL" 
                        value={
                          metadata.distribution.downloadUrl ? (
                            <a 
                              href={metadata.distribution.downloadUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-ngdi-600 hover:underline flex items-center gap-1"
                            >
                              {metadata.distribution.downloadUrl} <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : null
                        } 
                      />
                      <ViewField 
                        label="API Endpoint" 
                        value={
                          metadata.distribution.apiEndpoint ? (
                            <a 
                              href={metadata.distribution.apiEndpoint} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-ngdi-600 hover:underline flex items-center gap-1"
                            >
                              {metadata.distribution.apiEndpoint} <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : null
                        } 
                      />
                    </>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">License Information</h3>
                  {isEditing ? (
                    <>
                      <EditField 
                        label="License Type" 
                        value={metadata.restrictions.licenseType} 
                        section="restrictions" 
                        field="licenseType" 
                        required
                      />
                      <EditField 
                        label="Usage Terms" 
                        value={metadata.restrictions.usageTerms} 
                        section="restrictions" 
                        field="usageTerms"
                        type="textarea"
                      />
                      <EditField 
                        label="Attribution Requirements" 
                        value={metadata.restrictions.attributionRequirements} 
                        section="restrictions" 
                        field="attributionRequirements"
                      />
                    </>
                  ) : (
                    <>
                      <ViewField 
                        label="License Type" 
                        value={
                          metadata.restrictions.licenseType === 'cc_by' ? 'Creative Commons Attribution (CC BY)' : 
                          metadata.restrictions.licenseType
                        } 
                      />
                      <ViewField label="Usage Terms" value={metadata.restrictions.usageTerms} />
                      <ViewField label="Attribution Requirements" value={metadata.restrictions.attributionRequirements} />
                    </>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Available Access Methods</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className={`p-4 border rounded-md text-center ${metadata.accessMethods.directDownload ? 'border-ngdi-600 bg-ngdi-50' : 'border-gray-200 bg-gray-50'}`}>
                    <Download className={`w-8 h-8 mx-auto mb-2 ${metadata.accessMethods.directDownload ? 'text-ngdi-600' : 'text-gray-400'}`} />
                    <div className={`text-sm font-medium ${metadata.accessMethods.directDownload ? 'text-ngdi-700' : 'text-gray-500'}`}>
                      Direct Download
                    </div>
                  </div>
                  
                  <div className={`p-4 border rounded-md text-center ${metadata.accessMethods.apiAccess ? 'border-ngdi-600 bg-ngdi-50' : 'border-gray-200 bg-gray-50'}`}>
                    <Server className={`w-8 h-8 mx-auto mb-2 ${metadata.accessMethods.apiAccess ? 'text-ngdi-600' : 'text-gray-400'}`} />
                    <div className={`text-sm font-medium ${metadata.accessMethods.apiAccess ? 'text-ngdi-700' : 'text-gray-500'}`}>
                      API Access
                    </div>
                  </div>
                  
                  <div className={`p-4 border rounded-md text-center ${metadata.accessMethods.webServices ? 'border-ngdi-600 bg-ngdi-50' : 'border-gray-200 bg-gray-50'}`}>
                    <Globe className={`w-8 h-8 mx-auto mb-2 ${metadata.accessMethods.webServices ? 'text-ngdi-600' : 'text-gray-400'}`} />
                    <div className={`text-sm font-medium ${metadata.accessMethods.webServices ? 'text-ngdi-700' : 'text-gray-500'}`}>
                      Web Services
                    </div>
                  </div>
                  
                  <div className={`p-4 border rounded-md text-center ${metadata.accessMethods.physicalMedia ? 'border-ngdi-600 bg-ngdi-50' : 'border-gray-200 bg-gray-50'}`}>
                    <Calendar className={`w-8 h-8 mx-auto mb-2 ${metadata.accessMethods.physicalMedia ? 'text-ngdi-600' : 'text-gray-400'}`} />
                    <div className={`text-sm font-medium ${metadata.accessMethods.physicalMedia ? 'text-ngdi-700' : 'text-gray-500'}`}>
                      Physical Media
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" /> Contact Information
              </CardTitle>
              <CardDescription>Details for getting in touch about this dataset</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {isEditing ? (
                  <>
                    <EditField 
                      label="Contact Person" 
                      value={metadata.contact.person} 
                      section="contact" 
                      field="person" 
                      required
                    />
                    <EditField 
                      label="Email" 
                      value={metadata.contact.email} 
                      section="contact" 
                      field="email"
                      type="email"
                      required
                    />
                    <EditField 
                      label="Phone" 
                      value={metadata.contact.phone} 
                      section="contact" 
                      field="phone"
                      type="tel"
                    />
                    <EditField 
                      label="Organization" 
                      value={metadata.contact.organization} 
                      section="contact" 
                      field="organization"
                    />
                    <EditField 
                      label="Department" 
                      value={metadata.contact.department} 
                      section="contact" 
                      field="department"
                    />
                  </>
                ) : (
                  <>
                    <ViewField label="Contact Person" value={metadata.contact.person} />
                    <ViewField 
                      label="Email" 
                      value={
                        <a 
                          href={`mailto:${metadata.contact.email}`} 
                          className="text-ngdi-600 hover:underline"
                        >
                          {metadata.contact.email}
                        </a>
                      } 
                    />
                    <ViewField label="Phone" value={metadata.contact.phone} />
                    <ViewField label="Organization" value={metadata.contact.organization} />
                    <ViewField label="Department" value={metadata.contact.department} />
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MetadataViewer;
