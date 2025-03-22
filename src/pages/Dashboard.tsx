
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
  CardTitle 
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
  SidebarProvider,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Loader2, User, BookOpen, Settings, LogOut, Search, FileText, Home, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const [recentMetadata, setRecentMetadata] = useState<MetadataEntry[]>([]);
  const { toast } = useToast();

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
      } catch (error: any) {
        console.error('Error fetching profile:', error.message);
      }
    };

    const getRecentMetadata = async () => {
      try {
        const { data, error } = await supabase
          .from('metadata')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(5);

        if (error) throw error;
        setRecentMetadata(data || []);
      } catch (error: any) {
        console.error('Error fetching recent metadata:', error.message);
      } finally {
        setLoading(false);
      }
    };

    Promise.all([getProfile(), getRecentMetadata()]);
  }, [user]);

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
                <SidebarMenuButton isActive={true} tooltip="Dashboard">
                  <Home className="size-4" />
                  <span>Dashboard</span>
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
                  {recentMetadata.length > 0 ? (
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
                  
                  <h2 className="text-xl font-semibold mt-8 mb-4">Your Account</h2>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Profile Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Email:</span>
                          <span>{user?.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Username:</span>
                          <span>{profile?.username || "Not set"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Full Name:</span>
                          <span>{profile?.full_name || "Not set"}</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                        disabled
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Edit Profile
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
