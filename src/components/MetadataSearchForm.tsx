import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { Search, XCircle } from 'lucide-react';

const formSchema = z.object({
  keyword: z.string().optional(),
  author: z.string().optional(),
  organization: z.string().optional(),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
  categories: z.array(z.string()).optional(),
  dataTypes: z.array(z.string()).optional(),
});

const categories = [
  { value: "boundaries", label: "Boundaries" },
  { value: "transportation", label: "Transportation" },
  { value: "hydrography", label: "Hydrography" },
  { value: "elevation", label: "Elevation" },
  { value: "land_cover", label: "Land Cover" },
  { value: "geology", label: "Geology" },
  { value: "climate", label: "Climate" },
  { value: "socioeconomic", label: "Socioeconomic" },
  { value: "utilities", label: "Utilities" },
];

const dataTypes = [
  { id: "vector", label: "Vector Data" },
  { id: "raster", label: "Raster Data" },
  { id: "tabular", label: "Tabular Data" },
];

type SearchFormProps = {
  onSearch: (data: any) => void;
};

const MetadataSearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keyword: "",
      author: "",
      organization: "",
      dateFrom: "",
      dateTo: "",
      categories: [],
      dataTypes: [],
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    onSearch(data);
  });

  const resetForm = () => {
    form.reset({
      keyword: "",
      author: "",
      organization: "",
      dateFrom: "",
      dateTo: "",
      categories: [],
      dataTypes: [],
    });
    onSearch({});
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Search Filters</h2>
      
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            control={form.control}
            name="keyword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Keyword Search</FormLabel>
                <FormControl>
                  <Input placeholder="Search by title, description..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Author name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization</FormLabel>
                <FormControl>
                  <Input placeholder="Organization name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="dateFrom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date From</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="dateTo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date To</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="categories"
            render={() => (
              <FormItem>
                <div className="mb-2">
                  <FormLabel>Categories</FormLabel>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <FormField
                      key={category.value}
                      control={form.control}
                      name="categories"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={category.value}
                            className="flex items-center space-x-1 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(category.value)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value || [], category.value])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== category.value
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {category.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="dataTypes"
            render={() => (
              <FormItem>
                <div className="mb-2">
                  <FormLabel>Data Types</FormLabel>
                </div>
                <div className="flex flex-wrap gap-6">
                  {dataTypes.map((type) => (
                    <FormField
                      key={type.id}
                      control={form.control}
                      name="dataTypes"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={type.id}
                            className="flex items-center space-x-1 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(type.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value || [], type.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== type.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {type.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex gap-2 pt-2">
            <Button type="submit" className="flex items-center gap-2">
              <Search className="w-4 h-4" /> Search
            </Button>
            <Button type="button" variant="outline" onClick={resetForm} className="flex items-center gap-2">
              <XCircle className="w-4 h-4" /> Reset
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default MetadataSearchForm;
