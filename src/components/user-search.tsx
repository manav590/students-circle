
"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import UserCard from "@/components/user-card";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"; // Added missing imports
import { Search, Filter } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Mock data for demonstration
const mockUsers = [
  { id: "1", name: "Alice Wonderland", avatarUrl: "https://picsum.photos/id/1027/200/200", bio: "Curiouser and curiouser! Exploring the wonders of Computer Science.", interests: ["AI", "Web Dev", "Tea Parties"], major: "Computer Science", location: "London, UK" },
  { id: "2", name: "Bob The Builder", avatarUrl: "https://picsum.photos/id/1005/200/200", bio: "Can we build it? Yes, we can! Passionate about software engineering.", interests: ["Software Engineering", "DevOps", "Construction"], major: "Software Engineering", location: "New York, USA" },
  { id: "3", name: "Charlie Chaplin", avatarUrl: "https://picsum.photos/id/10/200/200", bio: "Making the world laugh, one line of code at a time. Studying digital arts.", interests: ["Comedy", "Film", "JavaScript", "Digital Art"], major: "Digital Arts", location: "Paris, France" },
  { id: "4", name: "Diana Prince", avatarUrl: "https://picsum.photos/id/1011/200/200", bio: "Advocate for truth and justice in the digital realm. International Relations major.", interests: ["Cybersecurity", "Ethics", "React", "International Relations"], major: "International Relations", location: "Themyscira" },
  { id: "5", name: "Ethan Hunt", avatarUrl: "https://picsum.photos/id/1012/200/200", bio: "Mission: Possible. Tackling impossible coding challenges. Majoring in Espionage... I mean, IT.", interests: ["Problem Solving", "Security", "Python", "Gadgets"], major: "Information Technology", location: "Global" },
];

interface User {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  interests: string[];
  major?: string;
  location?: string;
}

const UserSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [interestFilter, setInterestFilter] = useState("all");
  const [majorFilter, setMajorFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true); // Simulate loading state

  // Simulate fetching users and initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredUsers(mockUsers);
      setLoading(false);
    }, 1500); // Simulate network delay
    return () => clearTimeout(timer);
  }, []);


  // Unique values for filters (derived from mock data)
  const allInterests = Array.from(new Set(mockUsers.flatMap(u => u.interests)));
  const allMajors = Array.from(new Set(mockUsers.map(u => u.major).filter(Boolean) as string[]));


  const handleSearch = () => {
    setLoading(true);
    // In a real app, this would be an API call
    setTimeout(() => { // Simulate API call delay
        const results = mockUsers.filter(user => {
        const nameMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
        const interestMatch = interestFilter === 'all' || user.interests.includes(interestFilter);
        const majorMatch = majorFilter === 'all' || user.major === majorFilter;
        const locationMatch = locationFilter === '' || (user.location && user.location.toLowerCase().includes(locationFilter.toLowerCase()));

        return nameMatch && interestMatch && majorMatch && locationMatch;
        });
        setFilteredUsers(results);
        setLoading(false);
    }, 500);
  };

   // Handle search on Enter key press
   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl font-semibold mb-6 text-primary">Find Connections</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6 p-4 bg-card rounded-lg shadow">
         <div className="flex-grow flex items-center gap-2">
             <Search className="text-muted-foreground" />
             <Input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow"
            />
         </div>

        <div className="flex flex-col sm:flex-row gap-4">
             <Select value={interestFilter} onValueChange={setInterestFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by Interest" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Interests</SelectItem>
                {allInterests.map(interest => <SelectItem key={interest} value={interest}>{interest}</SelectItem>)}
            </SelectContent>
            </Select>

            <Select value={majorFilter} onValueChange={setMajorFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by Major" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Majors</SelectItem>
                 {allMajors.map(major => <SelectItem key={major} value={major}>{major}</SelectItem>)}
            </SelectContent>
            </Select>

             <Input
                type="text"
                placeholder="Filter by location..."
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                 onKeyDown={handleKeyDown}
                className="w-full sm:w-[180px]"
             />
        </div>


        <Button onClick={handleSearch} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full md:w-auto">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          // Skeleton Loading State
          Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="w-full max-w-sm shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="flex flex-col space-y-2">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-3 w-[100px]" />
                   <Skeleton className="h-3 w-[80px]" />
                </div>
              </CardHeader>
              <CardContent className="pt-2 pb-4 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <div className="flex flex-wrap gap-1 pt-2">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-5 w-20 rounded-full" />
                     <Skeleton className="h-5 w-12 rounded-full" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 pt-0">
                 <Skeleton className="h-9 w-24 rounded-md" />
                 <Skeleton className="h-9 w-24 rounded-md" />
              </CardFooter>
            </Card>
          ))
        ) : filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p className="col-span-full text-center text-muted-foreground mt-8">No users found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
