
import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, UserPlus } from "lucide-react";

interface UserCardProps {
  user: {
    id: string;
    name: string;
    avatarUrl: string;
    bio: string;
    interests: string[];
    major?: string;
    location?: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card className="w-full max-w-sm shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-16 w-16 border-2 border-primary">
          <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="user avatar profile picture"/>
          <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
         <CardTitle className="text-lg font-semibold">{user.name}</CardTitle>
         {user.major && <p className="text-sm text-muted-foreground">{user.major}</p>}
         {user.location && <p className="text-xs text-muted-foreground">{user.location}</p>}
        </div>
      </CardHeader>
      <CardContent className="pt-2 pb-4">
        <p className="text-sm text-foreground mb-3">{user.bio}</p>
        <div className="flex flex-wrap gap-1">
          {user.interests.map((interest) => (
            <Badge key={interest} variant="secondary" className="bg-secondary text-secondary-foreground">
              {interest}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 pt-0">
        <Button variant="outline" size="sm">
          <UserPlus className="mr-1 h-4 w-4" /> Connect
        </Button>
        <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
          <MessageSquare className="mr-1 h-4 w-4" /> Message
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
