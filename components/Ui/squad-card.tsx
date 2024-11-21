import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/Ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface SquadCardProps {
  headerImage: string;
  username: string;
  userImage: string;
  description: string;
}

const SquadCard: React.FC<SquadCardProps> = ({
  headerImage,
  username,
  userImage,
  description,
}) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={headerImage}
          alt="Squad header"
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar>
            <AvatarImage src={userImage} alt={username} />
            <AvatarFallback>{username.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="font-semibold">{username}</div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {/* <Button className="w-full">Join Squad</Button> */}
        <button className="px-8 py-0.5  w-full border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
          Brutal
        </button>
      </CardFooter>
    </Card>
  );
};

export default SquadCard;
