
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetadataSearchForm from '@/components/MetadataSearchForm';
import MetadataSearchResults from '@/components/MetadataSearchResults';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Type definition for metadata search results
type MetadataResult = {
  id: string;
  title: string;
  author: string;
  organization: string;
  dateUpdated: string;
  categories: string[];
  description: string;
};

const MetadataSearch = () => {
  const [searchResults, setSearchResults] = useState<MetadataResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Initial data load
  useEffect(() => {
    fetchMetadata({});
  }, [currentPage]);
  
  const fetchMetadata = async (searchParams: any) => {
    setIsSearching(true);
    setError(null);
    
    try {
      let query = supabase
        .from('metadata')
        .select('id, title, author, organization, date_updated, categories, description', { count: 'exact' });
      
      // Apply filters based on search parameters
      if (searchParams.keyword) {
        query = query.or(`title.ilike.%${searchParams.keyword}%,description.ilike.%${searchParams.keyword}%`);
      }
      
      if (searchParams.author) {
        query = query.ilike('author', `%${searchParams.author}%`);
      }
      
      if (searchParams.organization) {
        query = query.ilike('organization', `%${searchParams.organization}%`);
      }
      
      if (searchParams.dateFrom) {
        query = query.gte('date_from', searchParams.dateFrom);
      }
      
      if (searchParams.dateTo) {
        query = query.lte('date_to', searchParams.dateTo);
      }
      
      if (searchParams.categories && searchParams.categories.length > 0) {
        query = query.overlaps('categories', searchParams.categories);
      }
      
      if (searchParams.dataTypes && searchParams.dataTypes.length > 0) {
        query = query.overlaps('data_types', searchParams.dataTypes);
      }
      
      // Add pagination
      const from = (currentPage - 1) * itemsPerPage;
      const to = from + itemsPerPage - 1;
      
      const { data, count, error } = await query
        .order('date_updated', { ascending: false })
        .range(from, to);
      
      if (error) throw error;
      
      // Transform data to match the expected format
      const formattedResults = data.map((item: any) => ({
        id: item.id,
        title: item.title,
        author: item.author,
        organization: item.organization,
        dateUpdated: new Date(item.date_updated).toISOString().split('T')[0],
        categories: item.categories || [],
        description: item.description || '',
      }));
      
      setSearchResults(formattedResults);
      setTotalCount(count || 0);
    } catch (error: any) {
      console.error('Error fetching metadata:', error);
      setError('Failed to fetch metadata. Please try again.');
      toast({
        title: "Error",
        description: "Failed to fetch metadata. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };
  
  const handleSearch = (searchParams: any) => {
    setCurrentPage(1); // Reset to first page on new search
    fetchMetadata(searchParams);
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Search Metadata</h1>
            
            <Button 
              onClick={() => navigate('/metadata/add')}
              className="flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" /> Add New Metadata
            </Button>
          </div>
          
          <p className="text-gray-600 mb-8">
            Search for geospatial metadata by title, category, date range, or other attributes.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4">
              <MetadataSearchForm onSearch={handleSearch} />
            </div>
            
            <div className="lg:col-span-8">
              {error ? (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
                  {error}
                </div>
              ) : (
                <>
                  <MetadataSearchResults 
                    results={searchResults} 
                    isLoading={isSearching} 
                  />
                  
                  {totalPages > 1 && !isSearching && (
                    <div className="mt-6">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious 
                              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                              className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                          </PaginationItem>
                          
                          {Array.from({ length: totalPages }, (_, i) => i + 1)
                            .filter(page => {
                              // Show first page, last page, current page, and pages adjacent to current
                              return page === 1 || 
                                     page === totalPages || 
                                     Math.abs(page - currentPage) <= 1;
                            })
                            .map((page, index, array) => {
                              // Add ellipsis if there are gaps
                              const prevPage = array[index - 1];
                              const showEllipsis = prevPage && page - prevPage > 1;
                              
                              return (
                                <React.Fragment key={page}>
                                  {showEllipsis && (
                                    <PaginationItem>
                                      <span className="px-4 py-2">...</span>
                                    </PaginationItem>
                                  )}
                                  <PaginationItem>
                                    <PaginationLink
                                      isActive={page === currentPage}
                                      onClick={() => handlePageChange(page)}
                                    >
                                      {page}
                                    </PaginationLink>
                                  </PaginationItem>
                                </React.Fragment>
                              );
                            })}
                          
                          <PaginationItem>
                            <PaginationNext
                              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                              className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MetadataSearch;
