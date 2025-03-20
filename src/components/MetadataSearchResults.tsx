
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, Eye, User } from 'lucide-react';

type SearchResult = {
  id: string;
  title: string;
  author: string;
  organization: string;
  dateUpdated: string;
  categories: string[];
  description: string;
};

type SearchResultsProps = {
  results: SearchResult[];
  isLoading: boolean;
};

const MetadataSearchResults: React.FC<SearchResultsProps> = ({ 
  results,
  isLoading 
}) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <Card key={item}>
            <CardHeader className="pb-2">
              <Skeleton className="h-7 w-2/3" />
              <Skeleton className="h-4 w-1/3" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-24" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
  
  if (results.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <div className="text-gray-500 mb-4">No results found</div>
          <p className="text-gray-400 text-sm">
            Try adjusting your search criteria or removing some filters
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-500 mb-2">
        Found {results.length} results
      </div>
      
      {results.map((result) => (
        <Card key={result.id} className="overflow-hidden transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">{result.title}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <User className="w-3 h-3" /> {result.author}, {result.organization}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{result.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {result.categories.map((category) => (
                <Badge key={category} variant="outline" className="capitalize">
                  {category.replace(/_/g, ' ')}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center border-t bg-gray-50 px-6">
            <div className="text-gray-500 text-sm flex items-center gap-1">
              <Calendar className="w-3 h-3" /> Updated {result.dateUpdated}
            </div>
            <Link to={`/metadata/view/${result.id}`}>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Eye className="w-3 h-3" /> View
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MetadataSearchResults;
