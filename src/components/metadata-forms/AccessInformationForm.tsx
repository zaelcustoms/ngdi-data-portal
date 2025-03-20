
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from '@/components/ui/form';

// Select options
const distributionFormats = [
  { value: "shapefile", label: "Shapefile" },
  { value: "geojson", label: "GeoJSON" },
  { value: "geotiff", label: "GeoTIFF" },
  { value: "pdf", label: "PDF" },
  { value: "csv", label: "CSV" },
  { value: "kml", label: "KML/KMZ" },
  { value: "wms", label: "WMS" },
  { value: "wfs", label: "WFS" },
  { value: "other", label: "Other" },
];

const accessMethods = [
  { value: "direct_download", label: "Direct Download" },
  { value: "api", label: "API" },
  { value: "web_service", label: "Web Service" },
  { value: "ftp", label: "FTP" },
  { value: "physical_media", label: "Physical Media" },
  { value: "email_request", label: "Email Request" },
  { value: "other", label: "Other" },
];

const licenseTypes = [
  { value: "public_domain", label: "Public Domain" },
  { value: "cc_by", label: "Creative Commons Attribution (CC BY)" },
  { value: "cc_by_sa", label: "CC BY-SA" },
  { value: "cc_by_nc", label: "CC BY-NC" },
  { value: "cc_by_nc_sa", label: "CC BY-NC-SA" },
  { value: "govt_open", label: "Government Open License" },
  { value: "proprietary", label: "Proprietary" },
  { value: "custom", label: "Custom License" },
];

const accessRestrictions = [
  { id: "security", label: "National Security" },
  { id: "privacy", label: "Privacy Concerns" },
  { id: "commercial", label: "Commercial Sensitivity" },
  { id: "intellectual", label: "Intellectual Property" },
  { id: "government", label: "Government Restrictions" },
  { id: "legal", label: "Legal Restrictions" },
];

const accessMethodOptions = [
  { id: "direct_download", label: "Direct Download" },
  { id: "api_access", label: "API Access" },
  { id: "web_services", label: "Web Services" },
  { id: "physical_media", label: "Physical Media" },
];

// Define schema for form validation
const formSchema = z.object({
  distribution: z.object({
    format: z.string().min(1, { message: "Distribution format is required" }),
    accessMethod: z.string().min(1, { message: "Access method is required" }),
    downloadUrl: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.string().length(0)),
    apiEndpoint: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.string().length(0)),
  }),
  restrictions: z.object({
    licenseType: z.string().min(1, { message: "License type is required" }),
    usageTerms: z.string().optional(),
    attributionRequirements: z.string().optional(),
    accessRestrictions: z.array(z.string()).optional(),
  }),
  contact: z.object({
    person: z.string().min(1, { message: "Contact person is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phone: z.string().optional(),
    organization: z.string().optional(),
    department: z.string().optional(),
  }),
  accessMethods: z.object({
    directDownload: z.boolean().optional(),
    apiAccess: z.boolean().optional(),
    webServices: z.boolean().optional(),
    physicalMedia: z.boolean().optional(),
  }),
});

type FormProps = {
  formData: any;
  updateFormData: (data: any) => void;
};

const AccessInformationForm: React.FC<FormProps> = ({ formData, updateFormData }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      distribution: formData.distribution,
      restrictions: formData.restrictions,
      contact: formData.contact,
      accessMethods: formData.accessMethods,
    }
  });
  
  useEffect(() => {
    const subscription = form.watch((value) => {
      updateFormData(value);
    });
    
    return () => subscription.unsubscribe();
  }, [form, updateFormData]);
  
  return (
    <Form {...form}>
      <form className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Distribution Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="distribution.format"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Distribution Format <span className="text-red-500">*</span></FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select distribution format" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {distributionFormats.map((format) => (
                        <SelectItem key={format.value} value={format.value}>
                          {format.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="distribution.accessMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Access Method <span className="text-red-500">*</span></FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select access method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {accessMethods.map((method) => (
                        <SelectItem key={method.value} value={method.value}>
                          {method.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="distribution.downloadUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Download URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter download URL" {...field} />
                  </FormControl>
                  <FormDescription>
                    If applicable, provide a direct download link
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="distribution.apiEndpoint"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>API Endpoint</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter API endpoint URL" {...field} />
                  </FormControl>
                  <FormDescription>
                    If applicable, provide the API endpoint for access
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Usage Restrictions</h2>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="restrictions.licenseType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>License Type <span className="text-red-500">*</span></FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select license type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {licenseTypes.map((license) => (
                        <SelectItem key={license.value} value={license.value}>
                          {license.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="restrictions.usageTerms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usage Terms</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe any specific terms of use"
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="restrictions.attributionRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attribution Requirements</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., 'Data provided by Agency X'" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Specify how users should attribute this data when used
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="restrictions.accessRestrictions"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Access Restrictions</FormLabel>
                    <FormDescription>
                      Select all applicable restrictions for this dataset
                    </FormDescription>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {accessRestrictions.map((restriction) => (
                      <FormField
                        key={restriction.id}
                        control={form.control}
                        name="restrictions.accessRestrictions"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={restriction.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(restriction.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...(field.value || []), restriction.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== restriction.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {restriction.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="contact.person"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Person <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter contact person name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contact.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="Enter contact email" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contact.phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="Enter contact phone number" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contact.organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter organization name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contact.department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter department name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Access Methods</h2>
          <div className="space-y-4">
            {accessMethodOptions.map((option) => {
              const fieldName = `accessMethods.${option.id === 'direct_download' ? 'directDownload' : 
                                 option.id === 'api_access' ? 'apiAccess' : 
                                 option.id === 'web_services' ? 'webServices' : 'physicalMedia'}` as const;
              
              return (
                <FormField
                  key={option.id}
                  control={form.control}
                  name={fieldName}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          {option.label}
                        </FormLabel>
                        <FormDescription>
                          Allow access via {option.label.toLowerCase()}
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              );
            })}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default AccessInformationForm;
