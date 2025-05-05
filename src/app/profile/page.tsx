
import type { Metadata } from "next";
import AppSidebar from "@/components/app-sidebar";
import { Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

export const metadata: Metadata = {
  title: "Profile", // Update title, layout template handles " | Global Connect"
  description: "View and manage your profile.",
};

// Mock user data for demonstration
const userProfile = {
  name: "Current User",
  avatarUrl: "https://picsum.photos/id/237/200/200",
  bio: "A passionate learner exploring the world through code and connections. Always open to new ideas and collaborations.",
  major: "Computer Science",
  location: "San Francisco, USA",
  interests: ["Web Development", "Machine Learning", "Travel", "Photography"],
};


export default function ProfilePage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
           <Card className="max-w-2xl mx-auto shadow-lg">
             <CardHeader className="flex flex-col items-center text-center relative pb-4">
                <Avatar className="h-24 w-24 mb-4 border-4 border-primary shadow-md">
                    <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} data-ai-hint="user avatar large"/>
                    <AvatarFallback>{userProfile.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl font-bold">{userProfile.name}</CardTitle>
                 <p className="text-md text-muted-foreground">{userProfile.major}</p>
                 <p className="text-sm text-muted-foreground">{userProfile.location}</p>
                 <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-muted-foreground hover:text-primary">
                     <Edit className="h-5 w-5"/>
                     <span className="sr-only">Edit Profile</span>
                 </Button>
             </CardHeader>
             <CardContent className="pt-4">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-primary">Bio</h3>
                    <p className="text-foreground">{userProfile.bio}</p>
                </div>
                 <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                        {userProfile.interests.map((interest) => (
                            <span key={interest} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                            {interest}
                            </span>
                        ))}
                    </div>
                 </div>
             </CardContent>
           </Card>
        </div>
      </SidebarInset>
    </div>
  );
}
