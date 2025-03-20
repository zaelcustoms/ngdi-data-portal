
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
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
const coordinateSystems = [
  { value: "wgs84", label: "WGS 84" },
  { value: "utm", label: "UTM" },
  { value: "local", label: "Local System" },
  { value: "nigeria_national", label: "Nigeria National Grid" },
  { value: "other", label: "Other" },
];

const projections = [
  { value: "mercator", label: "Mercator" },
  { value: "albers", label: "Albers Equal Area" },
  { value: "lambert", label: "Lambert Conformal Conic" },
  { value: "transverse", label: "Transverse Mercator" },
  { value: "other", label: "Other" },
];

const accuracyLevels = [
  { value: "high", label: "High (< 1m)" },
  { value: "medium", label: "Medium (1-5m)" },
  { value: "low", label: "Low (> 5m)" },
  { value: "unknown", label: "Unknown" },
];

const validationStatuses = [
  { value: "validated", label: "Validated" },
  { value: "partially_validated", label: "Partially Validated" },
  { value: "not_validated", label: "Not Validated" },
  { value: "under_review", label: "Under Review" },
];

const fileFormats = [
  { value: "shapefile", label: "Shapefile" },
  { value: "geojson", label: "GeoJSON" },
  { value: "geopackage", label: "GeoPackage" },
  { value: "tiff", label: "GeoTIFF" },
  { value: "csv", label: "CSV" },
  { value: "json", label: "JSON" },
  { value: "kml", label: "KML" },
  { value: "other", label: "Other" },
];

const updateCycles = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "annually", label: "Annually" },
  { value: "as_needed", label: "As Needed" },
  { value: "irregular", label: "Irregular" },
  { value: "never", label: "Never" },
];

// Define schema for form validation
const formSchema = z.object({
  spatial: z.object({
    coordinateSystem: z.string().min(1, { message: "Coordinate system is required" }),
    projection: z.string().min(1, { message: "Projection is required" }),
    scale: z.string().min(1, { message: "Scale is required" }),
    resolution: z.string().optional(),
  }),
  quality: z.object({
    accuracyLevel: z.string().min(1, { message: "Accuracy level is required" }),
    completeness: z.string().optional(),
    consistencyCheck: z.boolean().optional(),
    validationStatus: z.string().optional(),
  }),
  technical: z.object({
    fileFormat: z.string().min(1, { message: "File format is required" }),
    fileSize: z.string().optional(),
    numberOfFeatures: z.string().optional(),
    softwareRequirements: z.string().optional(),
  }),
  updateFrequency: z.object({
    updateCycle: z.string().optional(),
    lastUpdateDate: z.string().optional(),
    nextUpdateDate: z.string().optional(),
  }),
});

type FormProps = {
  formData: any;
  updateFormData: (data: any) => void;
};

const TechnicalDetailsForm: React.FC<FormProps> = ({ formData, updateFormData }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      spatial: formData.spatial,
      quality: formData.quality,
      technical: formData.technical,
      updateFrequency: formData.updateFrequency,
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
          <h2 className="text-xl font-semibold mb-4">Spatial Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="spatial.coordinateSystem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Coordinate System <span className="text-red-500">*</span></FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select coordinate system" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {coordinateSystems.map((system) => (
                        <SelectItem key={system.value} value={system.value}>
                          {system.label}
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
              name="spatial.projection"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Projection <span className="text-red-500">*</span></FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select projection" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {projections.map((projection) => (
                        <SelectItem key={projection.value} value={projection.value}>
                          {projection.label}
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
              name="spatial.scale"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Scale <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 1:25000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="spatial.resolution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resolution</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 30m" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Data Quality Parameters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="quality.accuracyLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accuracy Level <span className="text-red-500">*</span></FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select accuracy level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {accuracyLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
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
              name="quality.completeness"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Completeness (%)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="e.g., 85" 
                      min="0"
                      max="100"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="quality.consistencyCheck"
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
                      Consistency Check
                    </FormLabel>
                    <FormDescription>
                      Data has been checked for logical consistency
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="quality.validationStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Validation Status</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select validation status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {validationStatuses.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="technical.fileFormat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>File Format <span className="text-red-500">*</span></FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select file format" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {fileFormats.map((format) => (
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
              name="technical.fileSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>File Size (MB)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="File size in MB" 
                      min="0"
                      step="0.1"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="technical.numberOfFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Features</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="Total number of features" 
                      min="0"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="technical.softwareRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Software Requirements</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., QGIS, ArcGIS" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Update Frequency</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="updateFrequency.updateCycle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Update Cycle</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select update cycle" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {updateCycles.map((cycle) => (
                        <SelectItem key={cycle.value} value={cycle.value}>
                          {cycle.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="hidden md:block"></div> {/* Spacer for grid alignment */}
            
            <FormField
              control={form.control}
              name="updateFrequency.lastUpdateDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Update Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="updateFrequency.nextUpdateDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Next Update Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default TechnicalDetailsForm;
