
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Committee from "./pages/Committee";
import Publications from "./pages/Publications";
import NotFound from "./pages/NotFound";
import MetadataAdd from "./pages/MetadataAdd";
import MetadataView from "./pages/MetadataView";
import MetadataSearch from "./pages/MetadataSearch";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/publications" element={<Publications />} />
            <Route 
              path="/metadata/add" 
              element={
                <ProtectedRoute>
                  <MetadataAdd />
                </ProtectedRoute>
              } 
            />
            <Route path="/metadata/view/:id" element={<MetadataView />} />
            <Route 
              path="/metadata/search" 
              element={
                <ProtectedRoute>
                  <MetadataSearch />
                </ProtectedRoute>
              } 
            />
            <Route path="/auth" element={<Auth />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
