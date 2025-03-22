
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { useToast } from '@/components/ui/use-toast';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { 
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle
} from '@/components/ui/resizable';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Loader2, User, BookOpen, Settings, LogOut, 
  Search, FileText, Home, Database, AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProfileData = {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
};

type MetadataEntry = Tables<'metadata'>;

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [recentMetadata, setRecentMetadata] = useState<MetadataEntry[]>([]);
  const [metadataLoading, setMetadataLoading] = useState(true);
  const [metadataError, setMetadataError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();

  // Form state for profile editing
  const [formValues, setFormValues] = useState({
    username: '',
    full_name: ''
  });

  useEffect(() => {
    const getProfile = async () => {
      try {
        if (!user) return;

        const { data, error } = await supabase
          .from('profiles')
          .select('id, username, full_name, avatar_url')
          .eq('id', user.id)
          .single();

        if (error) throw error;
        setProfile(data);
        setFormValues({
          username: data.username || '',
          full_name: data.full_name || ''
        });
      } catch (error: any) {
        console.error('Error fetching profile:', error.message);
        toast({
          title: "Error fetching profile",
          description: error.message,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [user, toast]);

  useEffect(() => {
    const getRecentMetadata = async () => {
      try {
        setMetadataLoading(true);
        setMetadataError(null);
        
        const { data, error } = await supabase
          .from('metadata')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(5);

        if (error) throw error;
        setRecentMetadata(data || []);
      } catch (error: any) {
        console.error('Error fetching recent metadata:', error.message);
        setMetadataError(error.message);
      } finally {
        setMetadataLoading(false);
      }
    };

    getRecentMetadata();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleUpdateProfile = async () => {
    if (!user) return;
    
    try {
      setIsUpdating(true);
      
      const { error } = await supabase
        .from('profiles')
        .update({
          username: formValues.username,
          full_name: formValues.full_name,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (error) throw error;

      // Update local state
      setProfile(prev => {
        if (!prev) return null;
        return {
          ...prev,
          username: formValues.username,
          full_name: formValues.full_name
        };
      });
      
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    } catch (error: any) {
      console.error('Error updating profile:', error.message);
      toast({
        title: "Error updating profile",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <Loader2 className="h-8 w-8 animate-spin text-ngdi-600" />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="h-[calc(100vh-4rem)] bg-muted/30">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <div className="bg-ngdi-600 text-white font-bold text-lg p-1.5 rounded">
                NGDI
              </div>
              <div className="font-semibold text-lg">Dashboard</div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeTab === "overview"} 
                  tooltip="Dashboard"
                  onClick={() => setActiveTab("overview")}
                >
                  <Home className="size-4" />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link to="/metadata/search">
                  <SidebarMenuButton tooltip="Search Metadata">
                    <Search className="size-4" />
                    <span>Search Metadata</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link to="/metadata/add">
                  <SidebarMenuButton tooltip="Add Metadata">
                    <FileText className="size-4" />
                    <span>Add Metadata</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeTab === "profile"} 
                  tooltip="Profile"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="size-4" />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link to="/">
                  <SidebarMenuButton tooltip="Main Site">
                    <Database className="size-4" />
                    <span>Main Site</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="flex flex-col gap-2 p-2">
              <div className="flex items-center gap-2 px-2 py-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-accent/50">
                  <User className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {profile?.username || user?.email?.split('@')[0]}
                  </span>
                  <span className="text-xs text-sidebar-foreground/60">
                    {user?.email}
                  </span>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start gap-2"
                onClick={handleSignOut}
              >
                <LogOut className="size-4" />
                Sign Out
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <div className="container mx-auto p-4 md:p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="mb-6">
                  <h1 className="text-2xl font-bold mb-2">
                    Welcome, {profile?.full_name || profile?.username || user?.email?.split('@')[0]}
                  </h1>
                  <p className="text-muted-foreground">
                    Manage your NGDI resources and data from this dashboard
                  </p>
                </div>
                
                <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
                  <ResizablePanel defaultSize={65}>
                    <div className="p-4 md:p-6">
                      <h2 className="text-xl font-semibold mb-4">Recent Metadata Entries</h2>
                      
                      {metadataLoading ? (
                        <div className="flex justify-center py-8">
                          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                        </div>
                      ) : metadataError ? (
                        <div className="text-center py-8 text-muted-foreground">
                          <AlertTriangle className="mx-auto h-8 w-8 mb-2 text-amber-500" />
                          <p>Error loading metadata: {metadataError}</p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-2"
                            onClick={() => window.location.reload()}
                          >
                            Retry
                          </Button>
                        </div>
                      ) : recentMetadata.length > 0 ? (
                        <div className="space-y-4">
                          {recentMetadata.map((entry) => (
                            <Card key={entry.id}>
                              <CardHeader className="pb-2">
                                <CardTitle className="text-lg">{entry.title}</CardTitle>
                                <CardDescription>
                                  {entry.author}, {entry.organization}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {entry.description || "No description available"}
                                </p>
                                <div className="mt-2">
                                  <Link to={`/metadata/view/${entry.id}`}>
                                    <Button variant="link" size="sm" className="px-0">
                                      View Details
                                    </Button>
                                  </Link>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          <BookOpen className="mx-auto h-8 w-8 mb-2 opacity-50" />
                          <p>No recent metadata entries found</p>
                          <Link to="/metadata/add">
                            <Button variant="link" className="mt-2">
                              Add your first metadata entry
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </ResizablePanel>
                  
                  <ResizableHandle withHandle />
                  
                  <ResizablePanel defaultSize={35}>
                    <div className="p-4 md:p-6">
                      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                      <div className="grid gap-4">
                        <Link to="/metadata/add">
                          <Button className="w-full justify-start" variant="outline">
                            <FileText className="mr-2 h-4 w-4" />
                            Add New Metadata
                          </Button>
                        </Link>
                        <Link to="/metadata/search">
                          <Button className="w-full justify-start" variant="outline">
                            <Search className="mr-2 h-4 w-4" />
                            Search Metadata
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </TabsContent>
              
              <TabsContent value="profile">
                <div className="max-w-2xl mx-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>
                        Update your profile information and account settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={user?.email || ''} disabled />
                        <p className="text-xs text-muted-foreground">Your email address cannot be changed</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input 
                          id="username" 
                          name="username"
                          value={formValues.username} 
                          onChange={handleInputChange}
                          placeholder="Enter a username" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="full_name">Full Name</Label>
                        <Input 
                          id="full_name" 
                          name="full_name"
                          value={formValues.full_name} 
                          onChange={handleInputChange}
                          placeholder="Enter your full name" 
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" onClick={() => setActiveTab("overview")}>
                        Cancel
                      </Button>
                      <Button 
                        onClick={handleUpdateProfile} 
                        disabled={isUpdating}
                      >
                        {isUpdating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Save Changes
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
