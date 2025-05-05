
import type { Metadata } from "next";
import AppSidebar from "@/components/app-sidebar";
import { Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Star, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Connect - Achievements",
  description: "View your earned achievements.",
};

// Mock data for demonstration
const mockAchievements = [
    { id: 'a1', title: 'Goal Getter', description: 'Completed your first study goal!', icon: Star, earned: true },
    { id: 'a2', title: 'Consistent Learner', description: 'Completed 5 study goals.', icon: Award, earned: true },
    { id: 'a3', title: 'Study Streak', description: 'Completed goals for 3 days in a row.', icon: Zap, earned: false },
    { id: 'a4', title: 'Helping Hand', description: 'Shared your first study material.', icon: BookOpenCheck, earned: true },
    { id: 'a5', title: 'Community Builder', description: 'Made 10 connections.', icon: UserPlus, earned: false },
];

// Placeholder icons if lucide doesn't have them
const BookOpenCheck = ({ className }: { className?: string }) => ( // Assuming BookOpenCheck exists
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        <path d="m16 13 2 2 4-4"></path>
    </svg>
);
const UserPlus = ({ className }: { className?: string }) => ( // Assuming UserPlus exists
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <line x1="19" x2="19" y1="8" y2="14"></line>
    <line x1="22" x2="16" y1="11" y2="11"></line>
  </svg>
);


export default function AchievementsPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
         <div className="container mx-auto p-4 md:p-6 lg:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <Award className="mr-2 h-6 w-6" /> Your Achievements
            </h2>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {mockAchievements.map((achievement) => {
                      const IconComponent = achievement.icon;
                      return (
                        <Card key={achievement.id} className={`shadow-md transition-opacity ${achievement.earned ? 'opacity-100 border-primary' : 'opacity-60 bg-muted'}`}>
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <div className={`p-2 rounded-full ${achievement.earned ? 'bg-primary/10 text-primary' : 'bg-muted-foreground/10 text-muted-foreground'}`}>
                                     <IconComponent className="h-6 w-6" />
                                </div>
                                <CardTitle className={`text-lg font-medium ${achievement.earned ? 'text-primary' : 'text-muted-foreground'}`}>{achievement.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className={`${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    {achievement.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    );
                 })}
                 {mockAchievements.length === 0 && (
                     <p className="col-span-full text-center text-muted-foreground mt-8">Keep completing goals and interacting to unlock achievements!</p>
                 )}
             </div>
        </div>
      </SidebarInset>
    </div>
  );
}
