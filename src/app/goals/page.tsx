
import type { Metadata } from "next";
import AppSidebar from "@/components/app-sidebar";
import { Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Target, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";


export const metadata: Metadata = {
  title: "Global Connect - Study Goals",
  description: "Track your study goals and progress.",
};

// Mock data for demonstration
const mockGoals = [
    { id: 'g1', title: 'Complete Project Proposal', progress: 100, completed: true },
    { id: 'g2', title: 'Read Chapter 5 of Algorithms Textbook', progress: 60, completed: false },
    { id: 'g3', title: 'Practice React Hooks for 2 hours', progress: 25, completed: false },
    { id: 'g4', title: 'Prepare Presentation Slides', progress: 0, completed: false },
];

export default function GoalsPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
         <div className="container mx-auto p-4 md:p-6 lg:p-8">
            <div className="flex justify-between items-center mb-6">
                 <h2 className="text-2xl font-semibold text-primary flex items-center">
                    <Target className="mr-2 h-6 w-6" /> Study Goals
                 </h2>
                <Button className="bg-primary hover:bg-primary/90">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add New Goal
                </Button>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockGoals.map((goal) => (
                     <Card key={goal.id} className="shadow-md">
                        <CardHeader>
                           <CardTitle className="text-lg font-medium">{goal.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <Progress value={goal.progress} className="w-full h-2 mb-2" />
                           <p className="text-sm text-muted-foreground text-right">{goal.progress}% Complete</p>
                        </CardContent>
                        <CardFooter>
                            <div className="flex items-center space-x-2">
                                <Checkbox id={`goal-${goal.id}`} checked={goal.completed} />
                                <Label htmlFor={`goal-${goal.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Mark as Completed
                                </Label>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
                 {mockGoals.length === 0 && (
                    <p className="col-span-full text-center text-muted-foreground mt-8">You haven't added any study goals yet. Click "Add New Goal" to get started!</p>
                 )}
             </div>
        </div>
      </SidebarInset>
    </div>
  );
}
