
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

const frameworkDataTypes = [
  { value: "transportation", label: "Transportation" },
  { value: "boundaries", label: "Boundaries" },
  { value: "elevation", label: "Elevation" },
  { value: "hydrography", label: "Hydrography" },
  { value: "landcover", label: "Land Cover" },
  { value: "cadastral", label: "Cadastral" },
  { value: "geodetic", label: "Geodetic Control" },
  { value: "administrative", label: "Administrative Units" },
  { value: "other", label: "Other" },
];

const categories = [
  { id: "water", label: "Water Bodies" },
  { id: "boundaries", label: "Boundaries" },
  { id: "education", label: "Education" },
  { id: "elevation", label: "Elevation" },
  { id: "environment", label: "Environment" },
  { id: "geographic", label: "Geographic Information" },
  { id: "health", label: "Health" },
  { id: "imagery", label: "Imagery/Earthly Observations" },
  { id: "transportation", label: "Transportation" },
  { id: "utilities", label: "Utilities" },
];

// Define schema for form validation
const formSchema = z.object({
  citation: z.object({
    author: z.string().min(1, { message: "Author is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    organization: z.string().min(1, { message: "Organization is required" }),
    dateFrom: z.string().min(1, { message: "Start date is required" }),
    dateTo: z.string().min(1, { message: "End date is required" }),
  }),
  abstract: z.string().min(10, { message: "Abstract should be at least 10 characters" }),
  purpose: z.string().min(10, { message: "Purpose should be at least 10 characters" }),
  thumbnail: z.object({
    url: z.string().url({ message: "Please enter a valid URL" }).or(z.string().length(0)),
    name: z.string().min(1, { message: "Image name is required" }),
  }),
  frameworkType: z.string().min(1, { message: "Framework data type is required" }),
  categories: z.array(z.string()).min(1, { message: "Select at least one category" }),
});

type FormProps = {
  formData: any;
  updateFormData: (data: any) => void;
};

const GeneralInfoForm: React.FC<FormProps> = ({ formData, updateFormData }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      citation: formData.citation,
      abstract: formData.abstract,
      purpose: formData.purpose,
      thumbnail: formData.thumbnail,
      frameworkType: formData.frameworkType,
      categories: formData.categories,
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
          <h2 className="text-xl font-semibold mb-4">Citation Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="citation.author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter author name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="citation.title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter dataset title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="citation.organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter organization name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4 md:col-span-1">
              <FormField
                control={form.control}
                name="citation.dateFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date From <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="citation.dateTo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date To <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Abstract and Purpose</h2>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="abstract"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Abstract <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Provide a brief description of the dataset"
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purpose <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe the purpose of this dataset"
                      className="min-h-[120px]"
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
          <h2 className="text-xl font-semibold mb-4">Thumbnail Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="thumbnail.url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter thumbnail URL" {...field} />
                  </FormControl>
                  <FormDescription>
                    Either provide a URL or upload an image below
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="thumbnail.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Name <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter image name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="md:col-span-2">
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <Input 
                  type="file" 
                  className="hidden" 
                  id="thumbnail-upload"
                  accept=".jpg,.jpeg,.png" 
                />
                <label 
                  htmlFor="thumbnail-upload"
                  className="cursor-pointer text-ngdi-600 hover:text-ngdi-700 font-medium"
                >
                  Click to upload a thumbnail image (.jpg/.png)
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Keywords and Categories</h2>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="frameworkType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Framework Data Type <span className="text-red-500">*</span></FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select framework data type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {frameworkDataTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
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
              name="categories"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Categories <span className="text-red-500">*</span></FormLabel>
                    <FormDescription>
                      Select all applicable categories for this dataset
                    </FormDescription>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <FormField
                        key={category.id}
                        control={form.control}
                        name="categories"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={category.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(category.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, category.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== category.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {category.label}
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
      </form>
    </Form>
  );
};

export default GeneralInfoForm;
