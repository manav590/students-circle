
import type { Metadata } from "next";
import AppSidebar from "@/components/app-sidebar";
import UserSearch from "@/components/user-search";
import { Sidebar, SidebarInset } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Search Users", // Update title, layout template handles " | Global Connect"
  description: "Find and connect with students globally.",
};

export default function SearchPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
        <UserSearch />
      </SidebarInset>
    </div>
  );
}
