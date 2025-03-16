
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Database, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-16">
      {/* Background Patterns */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmMWY1ZjkiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-30 bg-repeat z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-sm font-medium text-ngdi-700 bg-ngdi-100 rounded-full animate-fade-up">
                Nigeria's Geospatial Infrastructure
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight animate-fade-up" style={{ animationDelay: "200ms" }}>
                Unified Geospatial Data For Nigeria
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-xl animate-fade-up" style={{ animationDelay: "400ms" }}>
                A central platform for geospatial data management, discovery, and sharing, facilitating standardization and accessibility across Nigeria.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "600ms" }}>
              <Button size="lg" className="px-8 bg-ngdi-600 hover:bg-ngdi-700 text-white">
                <Search className="mr-2 h-5 w-5" />
                Explore Data
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <Database className="mr-2 h-5 w-5" />
                Add Metadata
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 animate-fade-up" style={{ animationDelay: "800ms" }}>
              <Stat icon={<Database className="h-6 w-6 text-ngdi-600" />} title="Data Sources" value="2,500+" />
              <Stat icon={<Users className="h-6 w-6 text-ngdi-600" />} title="Organizations" value="350+" />
              <Stat icon={<MapPin className="h-6 w-6 text-ngdi-600" />} title="Map Layers" value="10,000+" />
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="relative w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden bg-white border border-gray-200 shadow-lg p-2 animate-spin-slow">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="50" cy="50" r="49" stroke="#E2E8F0" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="40" stroke="#E2E8F0" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="30" stroke="#E2E8F0" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="20" stroke="#E2E8F0" strokeWidth="0.5" />
                    <path d="M50 0 V100 M0 50 H100" stroke="#E2E8F0" strokeWidth="0.5" />
                    <path d="M14.6447 14.6447 L85.3553 85.3553 M14.6447 85.3553 L85.3553 14.6447" stroke="#E2E8F0" strokeWidth="0.5" />
                  </svg>
                  
                  <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/80" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border border-gray-200 shadow-sm">
                    <div className="w-full h-full bg-blue-50 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmMWY1ZjkiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
                      
                      {/* Nigeria Map Outline */}
                      <svg viewBox="0 0 512 512" className="w-3/4 h-3/4 text-ngdi-600 opacity-90">
                        <path fill="currentColor" d="M388.2,207.7c-0.5-1.1-1.8-1.8-3-2c-2.1-0.3-4.2-0.1-6.3,0c-1.3,0.1-2.8,0.2-3.9-0.5c-1.8-1.1-1.7-3.6-1.7-5.6
                        c0.1-2.3,0.4-5.8-1.6-7.3c-0.9-0.7-2.1-0.9-3.3-0.9c-4.4-0.3-8.8-0.4-13.2-0.4c-1.4,0-2.9,0-4.1-0.6c-2.3-1.2-2.8-4.1-3.2-6.6
                        c-0.5-2.8-1.3-7-4.6-7.5c-2.5-0.4-4.4,1.7-6,3.4c-1.9,2.1-3.9,4.2-5.9,6.2c-0.4,0.4-2.9,2.2-3.3,1.1c0,0-0.2-2.2-0.2-2.6
                        c-0.2-1.7-0.9-4-2.7-4.6c-1.8-0.6-3.6,0.6-5,1.7c-1.1,0.9-2.1,1.8-3.1,2.7c-0.3,0.3-2.2,2.5-2.9,2.1c-0.6-0.4-0.5-2.2-0.6-2.8
                        c-0.2-2-0.3-4-0.4-6c0-0.4,0-2.6-0.8-2.5c-0.6,0.1-1.2,2.2-1.4,2.7c-0.3,0.7-0.6,1.3-1.2,1.8c-1,0.7-2.1,0.3-3.2,0c-2.1-0.5-8-0.5-7-4.2
                        c0.6-2.2,2.9-3.5,4.7-4.6c2.4-1.5,5-2.5,7.7-3.3c6-1.8,12.2-2.8,18.4-3.3c2.1-0.2,4.3-0.3,6.1-1.4c0.9-0.6,1.6-1.5,2.2-2.3
                        c3-3.9,6.1-7.7,9.1-11.6c1.3-1.6,2.5-3.3,4.2-4.5c0.8-0.5,1.7-0.9,2.5-1.4c1.7-1,3.3-2.2,4.9-3.5c1.1-0.9,2.1-1.7,2.9-2.9
                        c1.8-2.5,2.5-5.7,3.3-8.7c0.6-2.1,1.2-4.1,2-6.1c1-2.3,2.1-4.4,4.4-5.6c1.2-0.6,2.7-0.8,4-1.2c2.7-0.8,5.2-2.2,7.5-3.9
                        c4.4-3.3,8.2-7.4,13.1-9.9c5.1-2.6,10.9-3.8,16.5-4.7c1.5-0.2,3.1-0.4,4.5,0.1c3.1,1.2,3.1,5.5,3,8.4c-0.1,3.4-0.1,6.8,0,10.1
                        c0.1,1.8,0.2,3.8,1.1,5.4c1.4,2.4,4.5,3.3,6.7,5c1.7,1.3,3,3.1,4.8,4.3c1.4,1,2.9,1.7,4.5,2.3c2.7,1,5.6,1.8,7.9,3.7
                        c2,1.7,3.3,4.3,5.1,6.3c1,1.1,2.1,2.1,3.3,3c1.4,1,3,1.8,4.5,2.6c2.7,1.5,5.5,3,7.9,5c1.3,1.1,2.5,2.3,3.8,3.3c1.6,1.2,3.5,1.9,5.3,2.7
                        c1.8,0.8,3.6,1.7,4.9,3.2c1.3,1.5,2.2,3.4,3.2,5.1c2.6,4.6,5.3,9.1,7.9,13.7c2.8,4.9,5.6,9.8,8.4,14.7c1.7,3.1,3.5,6.1,5.1,9.2
                        c2.2,4.3,4.3,8.7,7.3,12.5c1.1,1.4,2.3,2.7,3.7,3.8c1.6,1.3,3.6,2.2,5.1,3.7c1.4,1.4,2.6,3.1,3.8,4.7c4.5,6.1,9,12.2,13.6,18.2
                        c1.1,1.5,2.3,2.9,3.6,4.1c1.5,1.3,3.1,2.4,4.7,3.6c1.4,1.1,2.9,2.1,4.2,3.4c2.6,2.5,4.7,5.5,7.1,8.2c2.9,3.2,6.1,6.2,9.3,9.1
                        c1.7,1.5,3.4,3,5,4.7c0.8,0.9,1.6,1.9,2.2,3c0.7,1.2,1.2,2.5,1.8,3.7c1.2,2.4,2.6,4.7,3.5,7.2c1.2,3.3,1.6,6.7,2.3,10.1
                        c0.6,3,1.3,6,1.9,8.9c0.4,1.8,0.8,3.6,1.3,5.4c0.7,2.3,1.5,4.6,2.2,6.9c1.3,4.3,2.6,8.6,3.9,12.9c0.9,3,1.8,6,2.6,9
                        c0.6,2.2,1.2,4.4,1.8,6.6c1.3,4.6,2.6,9.2,3.8,13.8c1.1,4.1,2.2,8.1,2.9,12.3c0.7,4.1,0.9,8.3,1,12.5c0.1,3.7,0.1,7.4,0.2,11.1
                        c0.1,2.1,0.1,4.2,0.2,6.3c0.1,1.7,0.3,3.4,0.5,5.1c0.6,4.9,1.5,9.7,2.3,14.6c0.6,3.3,1.1,6.6,1.7,9.9c0.2,1.3,0.4,2.6,0.5,3.9
                        c0.1,1.1,0.1,2.3,0.3,3.4c0.3,1.2,1,2.3,1.3,3.6c0.5,1.7,0.7,3.5,1,5.2c0.8,4.5,1.6,8.9,2.5,13.4c0.7,3.5,1.5,7,3.1,10.1
                        c0.8,1.6,1.8,3.2,2.3,4.9c0.3,1.2,0.4,2.4,0.6,3.6c0.4,3.6,0.9,7.2,1.3,10.9c0.2,1.8,0.4,3.6,0.6,5.4c0.2,2,0.4,3.9,0.6,5.9l0,0.3
                        c0.1,1,0.3,1.9,0.9,2.7c0.4,0.4,0.8,0.8,1.1,1.2c0.3,0.5,0.4,1,0.5,1.6c0.6,2.9,1.1,5.9,1.6,8.9c0.9,4.9,1.7,9.8,2.5,14.7
                        c0.9,5.3,1.7,10.6,2.5,15.9c0.4,2.5,0.7,5,1.1,7.5c0.4,3.1,0.9,6.1,1.3,9.2c0.2,1.8,0.5,3.6,0.6,5.4c0.1,1.3,0.1,2.7,0.5,4
                        c0.7,2.2,2.7,3.7,3.7,5.8c1.2,2.4,1.7,5.2,2.2,7.8c0.4,2.1,0.7,4.2,1,6.3c0.4,2.7,0.7,5.4,1.1,8.1c0.4,3.2,0.9,6.3,1.2,9.5
                        c0.2,2.6,0.3,5.1,0,7.6c-0.3,2.4-1,4.8-2.1,7c-1.2,2.4-2.8,4.7-4.9,6.3c-2.4,1.8-5.5,2.6-8.4,2.8c-3.8,0.2-7.7-0.7-11.1-2.4
                        c-3.6-1.8-6.8-4.4-10.4-6c-1.9-0.9-3.9-1.5-5.9-2.1c-4-1.1-8.1-2.3-12.1-3.4c-2.1-0.6-4.2-1.1-6.2-2c-1.5-0.7-3-1.5-4.4-2.4
                        c-1.8-1.1-3.6-2.2-5.4-3.3c-1.3-0.8-2.7-1.6-4.1-2.3c-1.2-0.6-2.5-1.1-3.7-1.7c-2.5-1.1-5-2.3-7.4-3.5c-2.5-1.2-5-2.6-7.3-4.1
                        c-2.6-1.7-5-3.6-7.5-5.5c-2.4-1.8-4.8-3.7-7.2-5.5c-2.6-2-5.1-4-7.7-6c-2.6-2.1-5.2-4.2-7.8-6.3c-2.4-1.9-4.8-3.9-7.1-5.9
                        c-2.7-2.3-5.4-4.7-7.4-7.7c-1.3-1.9-2.3-3.9-3.5-5.8c-1.5-2.3-3.2-4.4-5-6.5c-1.6-1.8-3.2-3.5-4.9-5.3c-1.8-1.8-3.5-3.5-5.3-5.3
                        c-1.6-1.6-3.2-3.2-4.9-4.7c-2-1.8-4.1-3.5-6.3-5.1c-2.5-1.8-5.1-3.4-7.6-5.2c-2.6-1.8-5.2-3.7-7.7-5.7c-2.5-2-4.9-4.2-7.2-6.4
                        c-3.1-3-6.1-6.1-9.2-9.1c-1.1-1.1-2.3-2.2-3.4-3.4c-1.2-1.3-2.3-2.8-3.4-4.2c-1.7-2.2-3.5-4.3-5.3-6.5c-1.8-2.1-3.5-4.3-5.2-6.4
                        c-3.4-4.2-6.7-8.5-10.1-12.7c-2.9-3.6-5.7-7.3-8.6-10.9c-1.7-2.2-3.5-4.3-5.2-6.4c-1.7-2.1-3.4-4.3-5-6.5c-1.5-2.1-3-4.2-4.4-6.3
                        c-0.8-1.2-1.6-2.4-2.3-3.7c-0.8-1.3-1.6-2.7-2.3-4c-1.4-2.7-2.8-5.4-4.2-8.1c-1.7-3.3-3.3-6.6-5-9.9c-1.2-2.4-2.4-4.8-3.6-7.1
                        c-1.1-2.1-2.3-4.2-3.5-6.3c-1.3-2.3-2.7-4.7-4-7c-1.3-2.3-2.7-4.6-4-6.9c-1.3-2.2-2.5-4.4-3.8-6.6c-1.3-2.2-2.7-4.4-4-6.6
                        c-2.5-4.1-5-8.3-7.5-12.4c-2.4-4-4.7-7.9-7.1-11.9c-2.2-3.7-4.3-7.3-6.5-11c-2.2-3.7-4.3-7.5-6.5-11.2c-2.1-3.5-4.1-7-6.1-10.5
                        c-1.9-3.4-3.9-6.8-5.8-10.3c-0.6-1.2-1.2-2.3-1.8-3.5c-0.3-0.6-0.6-1.3-0.9-1.9c-0.4-0.7-0.9-1.4-1.3-2.1c-2-3.2-4-6.5-5.8-9.8
                        c-3.2-5.7-6.2-11.6-9.1-17.5c-2.8-5.6-5.5-11.2-8.1-16.8c-1.3-2.9-2.6-5.8-3.7-8.7c-0.6-1.6-1.2-3.2-1.5-4.9c-0.3-1.4-0.2-3-0.9-4.2
                        c-0.8-1.5-2.5-2.2-3.9-2.9c-3.2-1.6-6.4-3.3-9.5-5.1c-2.3-1.3-4.5-2.7-6.4-4.5c-2.2-2.1-3.8-4.7-4.4-7.7c-0.4-2-0.2-4.1-0.4-6.1
                        c-0.3-3.2-1.2-6.3-1.8-9.5c-0.6-3.4-1.3-6.9-1.9-10.3c-0.4-2.3-0.8-4.6-1.2-6.9c-0.2-1.1-0.3-2.2-0.5-3.3c-0.2-1.2-0.5-2.5-0.6-3.7
                        c-0.2-2.8,0.4-5.6,0.8-8.3c0.3-2.5,0.6-5,0.8-7.5c0.1-1,0.1-2,0.2-3.1c0-0.4,0-0.9,0-1.3c0-0.4,0.1-0.9-0.1-1.2
                        c-0.2-0.2-0.5-0.1-0.8-0.1c-0.4,0-0.8,0-1.3,0c-1.7,0-3.5,0-5.2,0c-4.3,0-8.6,0-12.9,0c-2.2,0-4.4,0-6.7,0c-0.6,0-1.1,0-1.7,0
                        c-0.4,0-1,0.1-1.4-0.1c-0.6-0.3-0.8-1.1-1-1.7c-0.3-1.2-0.4-2.4-0.2-3.6c0.1-0.9,0.3-1.8,0.8-2.6c0.3-0.6,0.8-1.1,1.4-1.5
                        c0.7-0.5,1.6-0.8,2.4-1.1c0.8-0.3,1.7-0.6,2.6-0.8c0.9-0.2,1.9-0.3,2.9-0.4c2.4-0.3,4.8-0.5,7.2-0.8c2.8-0.3,5.6-0.6,8.4-0.9
                        c1.7-0.2,3.3-0.4,5-0.5c1.3-0.1,2.6-0.2,3.9-0.4c1.1-0.2,2.1-0.3,3.2-0.2c1.9,0.1,3.8,0.8,5.2,2.1c1.3,1.2,2.2,2.8,3.2,4.2
                        c1.1,1.5,2.2,3,3.4,4.5c1.7,2.1,3.5,4.2,5.8,5.7c0.9,0.6,1.9,1.1,3,1.4c0.8,0.3,1.7,0.4,2.5,0.7c1.1,0.4,2.2,0.8,3.3,1.3
                        c1.1,0.5,2.2,1,3.2,1.6c1.6,0.9,3,2,4.4,3.1c1.5,1.1,3,2.3,4.5,3.4c1.1,0.8,2.3,1.7,3.5,2.3c1.4,0.7,3,1,4.5,1.3c1.7,0.3,3.5,0.6,5.3,0.7
                        c2.2,0.1,4.3-0.1,6.5,0.3c2,0.4,4,1.2,5.9,2.1c1.8,0.9,3.4,2,5.1,3c1.8,1.1,3.7,2.2,5.6,3.3c2.5,1.5,5,2.9,7.5,4.4
                        c0.6,0.4,1.3,0.7,1.9,1.1c0.3,0.2,0.6,0.4,0.9,0.5c0.3,0.2,0.7,0.3,1,0.3c0.3,0,0.6-0.1,0.9-0.2c0.5-0.2,0.9-0.6,1.3-0.9
                        c0.8-0.8,1.5-1.7,2.3-2.5c1.7-1.9,3.4-3.8,5.2-5.7c0.4-0.4,0.8-0.9,1.2-1.3c0.2-0.2,0.5-0.5,0.7-0.7c0.3-0.3,0.7-0.6,1.1-0.7
                        c0.5-0.1,1-0.1,1.5-0.1c0.7,0,1.3,0,2,0.1c0.3,0,0.6,0.1,0.9,0.2c0.1,0,0.3,0.1,0.4,0.1c0.3,0.1,0.8,0.4,0.5,0.8
                        c-0.1,0.2-0.3,0.3-0.5,0.4c-0.5,0.3-1.1,0.4-1.7,0.6c-0.5,0.2-1,0.4-1.5,0.5c-0.3,0.1-0.6,0.2-0.9,0.3c-0.1,0-0.9,0.5-1,0.4
                        c-0.1-0.2,0.5-0.6,0.6-0.7c0.3-0.3,0.6-0.5,0.9-0.7c0.4-0.3,0.9-0.5,1.3-0.7c0.8-0.4,1.6-0.7,2.4-1.1c0.8-0.4,1.7-0.8,2.5-1.1
                        c0.9-0.3,1.9-0.5,2.8-0.7c1.1-0.2,2.3-0.3,3.4-0.4c1.2-0.1,2.4-0.2,3.6-0.2c1.2,0,2.5,0.1,3.7,0.1c1.1,0.1,2.2,0.1,3.2,0.4
                        c1.1,0.2,2.1,0.7,3.1,1c1.1,0.4,2.2,0.7,3.2,1.3c0.9,0.5,1.7,1.3,2.5,2c0.9,0.8,1.8,1.6,2.7,2.4c0.9,0.8,1.8,1.5,2.7,2.3
                        c1.8,1.5,3.6,3,5.3,4.6c1.8,1.7,3.5,3.4,5.2,5.1c1.7,1.8,3.4,3.6,5.1,5.4c1.7,1.8,3.4,3.6,5.1,5.4c1.7,1.8,3.4,3.6,5.1,5.4
                        c1.7,1.8,3.4,3.6,5.1,5.5c3.1,3.3,6.2,6.7,9.3,10c1.5,1.6,3.1,3.2,4.6,4.8c1.6,1.6,3.2,3.2,4.9,4.8c1.6,1.6,3.3,3.1,5,4.6
                        c0.8,0.8,1.7,1.5,2.5,2.3c0.8,0.8,1.7,1.5,2.5,2.3c1.7,1.5,3.4,3.1,5.1,4.7c1.6,1.5,3.3,3,4.9,4.6c0.8,0.8,1.6,1.5,2.5,2.3
                        c0.6,0.6,1.2,1.2,1.8,1.8c0.5,0.5,1,0.9,1.4,1.5c0.5,0.6,0.8,1.3,1.1,2c0.3,0.7,0.5,1.5,0.9,2.2c0.7,1.2,1.8,2.2,2.9,3.1
                        c1.1,0.9,2.4,1.7,3.7,2.5c1.3,0.8,2.6,1.4,4,2c1.4,0.6,2.9,1.2,4.4,1.6c1.5,0.4,3.1,0.7,4.6,0.9c1.6,0.2,3.2,0.3,4.8,0.3
                        c1.6,0,3.1-0.1,4.7-0.2c1.5-0.1,3-0.2,4.5-0.3c1.5-0.1,2.9-0.2,4.4-0.2c1.4,0,2.8,0.2,4.2,0c1.4-0.1,2.6-0.7,3.7-1.4
                        c2.5-1.7,4.2-4.4,5.4-7.1c1.2-2.7,1.9-5.6,2.3-8.5c0.4-2.9,0.5-5.8,0.4-8.8c0-1.5-0.1-2.9-0.2-4.4c0-1.1-0.1-2.1-0.3-3.2
                        c-0.1-0.8-0.3-1.6-0.5-2.3c-0.2-0.7-0.5-1.4-0.7-2c-0.2-0.6-0.3-1.2-0.2-1.8c0.1-0.5,0.4-1,0.5-1.5c0.4-1.4,0.2-2.9-0.2-4.2
                        c-0.4-1.3-1-2.5-1.5-3.7c-0.5-1.3-1-2.6-1.5-3.9c-0.5-1.3-0.9-2.6-1.4-3.9c-0.5-1.4-1-2.8-1.5-4.2c-0.5-1.4-1-2.7-1.5-4.1
                        c-0.5-1.4-1.1-2.8-1.6-4.2c-0.5-1.4-1-2.7-1.5-4.1c-0.5-1.4-1-2.8-1.5-4.2c-0.4-1.3-0.9-2.6-1.3-3.9C389.3,211.1,389.2,208.9,388.2,207.7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-ngdi-500 rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute top-1/4 -left-2 w-3 h-3 bg-ngdi-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <div className="absolute bottom-1/3 -right-2 w-3 h-3 bg-ngdi-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: "1s" }}></div>
                  <div className="absolute -bottom-2 left-1/3 w-3 h-3 bg-ngdi-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: "1.5s" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md shadow-subtle rounded-lg px-4 py-3 border border-gray-100">
      <div className="flex items-center space-x-3">
        <div className="rounded-full p-2 bg-ngdi-50">{icon}</div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
