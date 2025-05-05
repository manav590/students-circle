
import type { Metadata } from "next";
import AppSidebar from "@/components/app-sidebar";
import { Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareText } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Connect - Messages",
  description: "View your direct messages.",
};

export default function MessagesPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-1 items-center justify-center p-4 md:p-6 lg:p-8">
          <Card className="w-full max-w-md text-center shadow-md">
             <CardHeader>
                <CardTitle className="flex items-center justify-center text-2xl font-semibold text-primary">
                 <MessageSquareText className="mr-2 h-6 w-6" /> Direct Messages
                </CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">Your direct messages will appear here. Start connecting with other students!</p>
                {/* Placeholder for future message list/chat interface */}
             </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </div>
  );
}
