
import type { Metadata } from "next";
import AppSidebar from "@/components/app-sidebar";
import { Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Star, Zap, BookOpenCheck, UserPlus } from "lucide-react"; // Import directly if available

export const metadata: Metadata = {
  title: "Achievements", // Update title, layout template handles " | Global Connect"
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
