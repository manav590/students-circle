
import type { Metadata } from "next";
import AppSidebar from "@/components/app-sidebar";
import { Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Settings, Bell, Lock, UserCog } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";


export const metadata: Metadata = {
  title: "Settings", // Update title, layout template handles " | Global Connect"
  description: "Manage your application settings.",
};

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
         <div className="container mx-auto p-4 md:p-6 lg:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <Settings className="mr-2 h-6 w-6" /> Settings
            </h2>

             <div className="grid gap-6 max-w-2xl mx-auto">
                 {/* Account Settings Card */}
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center text-xl"><UserCog className="mr-2 h-5 w-5 text-primary" /> Account</CardTitle>
                        <CardDescription>Manage your account details and preferences.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {/* Placeholder for account settings like change email, password etc. */}
                         <Button variant="outline">Edit Profile Information</Button>
                         <Button variant="outline">Change Password</Button>
                         <Button variant="destructive">Delete Account</Button>
                    </CardContent>
                </Card>

                 {/* Notification Settings Card */}
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center text-xl"><Bell className="mr-2 h-5 w-5 text-primary" /> Notifications</CardTitle>
                        <CardDescription>Control how you receive notifications.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="new-message-notifications">New Message Alerts</Label>
                            <Switch id="new-message-notifications" defaultChecked />
                        </div>
                         <div className="flex items-center justify-between">
                            <Label htmlFor="goal-reminders">Study Goal Reminders</Label>
                            <Switch id="goal-reminders" defaultChecked/>
                        </div>
                         <div className="flex items-center justify-between">
                            <Label htmlFor="achievement-unlocked">Achievement Unlocked Alerts</Label>
                            <Switch id="achievement-unlocked" defaultChecked />
                        </div>
                         <div className="flex items-center justify-between">
                            <Label htmlFor="email-summary">Email Summaries</Label>
                            <Switch id="email-summary" />
                        </div>
                    </CardContent>
                </Card>

                 {/* Privacy Settings Card */}
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center text-xl"><Lock className="mr-2 h-5 w-5 text-primary" /> Privacy</CardTitle>
                        <CardDescription>Manage your privacy settings.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="flex items-center justify-between">
                            <Label htmlFor="profile-visibility">Profile Visibility (Public)</Label>
                            <Switch id="profile-visibility" defaultChecked />
                         </div>
                         <div className="flex items-center justify-between">
                            <Label htmlFor="show-location">Show Location on Profile</Label>
                            <Switch id="show-location" defaultChecked />
                        </div>
                        <Button variant="link" className="p-0 h-auto text-primary">Manage Blocked Users</Button>
                    </CardContent>
                </Card>

                 <div className="flex justify-end mt-4">
                    <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
                 </div>
             </div>
        </div>
      </SidebarInset>
    </div>
  );
}
