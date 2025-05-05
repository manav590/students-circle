
"use client";

import type React from "react";
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Search, MessageSquare, BookOpen, Target, Award, User, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";


const AppSidebar: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/search", label: "Search Users", icon: Search },
    { href: "/messages", label: "Messages", icon: MessageSquare },
    { href: "/materials", label: "Study Materials", icon: BookOpen },
    { href: "/goals", label: "Study Goals", icon: Target },
    { href: "/achievements", label: "Achievements", icon: Award },
    { href: "/profile", label: "Profile", icon: User },
  ];

  return (
    <>
      <SidebarHeader className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold text-primary group-data-[collapsible=icon]:hidden">
          Global Connect
        </h1>
         {/* Mobile trigger */}
         <div className="md:hidden">
            <SidebarTrigger />
          </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={item.label}
                  className="justify-start"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
       <Separator className="my-2" />
      <SidebarFooter className="p-4 group-data-[collapsible=icon]:p-2">
        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
           <Avatar className="h-8 w-8">
                <AvatarImage src="https://picsum.photos/id/237/40/40" data-ai-hint="user avatar" alt="User Avatar" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
           <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-medium">Current User</span>
                <span className="text-xs text-muted-foreground">Status</span>
            </div>
        </div>
         <Link href="/settings" passHref>
          <Button variant="ghost" className="w-full justify-start mt-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:aspect-square">
            <Settings className="h-5 w-5" />
            <span className="group-data-[collapsible=icon]:hidden ml-2">Settings</span>
          </Button>
         </Link>
      </SidebarFooter>
    </>
  );
};

export default AppSidebar;
