import { CardDemo } from "@/components/Ui/content-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Ui/card";
import SquadCard from "@/components/Ui/squad-card";

export default function devsquads() {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700  dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <h1 className="font-bold text-3xl">Dev Squads</h1>
        <SquadCard
          headerImage="/lxsh.jpg"
          username="lxsh"
          description="aabra ka daabra"
          userImage="/lxsh.jpg"
        ></SquadCard>
      </div>
    </div>
  );
}
