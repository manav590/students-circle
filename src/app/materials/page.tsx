
import type { Metadata } from "next";
import AppSidebar from "@/components/app-sidebar";
import { Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Connect - Study Materials",
  description: "Share and find study materials.",
};

export default function MaterialsPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
         <div className="container mx-auto p-4 md:p-6 lg:p-8">
             <div className="flex justify-between items-center mb-6">
                 <h2 className="text-2xl font-semibold text-primary flex items-center">
                    <BookOpenCheck className="mr-2 h-6 w-6" /> Study Materials
                 </h2>
                <Button className="bg-primary hover:bg-primary/90">
                    <Upload className="mr-2 h-4 w-4" /> Upload Material
                </Button>
            </div>

          <Card className="w-full text-center shadow-md">
             <CardHeader>
                <CardTitle className="text-xl font-medium">
                 Shared Resources
                </CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">Study materials shared by other students will be listed here. Share your notes and resources to help others!</p>
                 {/* Placeholder for future material list/grid */}
             </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </div>
  );
}
