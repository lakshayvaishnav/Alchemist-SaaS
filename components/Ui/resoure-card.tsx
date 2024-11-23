import { Category } from "@prisma/client";
import { Bookmark, SaveIcon, TrashIcon } from "lucide-react";
import Image from "next/image";

export default function ResourceCard({
  id,
  name,
  description,
  image,
  category,
}: {
  id: number;
  name: string;
  description: string;
  image: string;
  category: Category;
}) {
  return (
    <div className="flex flex-col h-[230px] w-[400px] bg-neutral-700 rounded-md overflow-hidden">
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src={image} alt={name} width={50} height={50} className="rounded-md" />
          <h2 className="font-bold text-lg text-white">{name}</h2>
        </div>
        <div className="flex gap-2">
          <div className="h-10 w-10 flex items-center justify-center hover:bg-black bg-neutral-800 rounded-md transition-all duration-300">
            <TrashIcon/>
          </div>
          <div className="h-10 w-10 flex items-center  hover:bg-black justify-center bg-neutral-800 rounded-md transition-all duration-300">
            <Bookmark/>
          </div>
        </div>
      </div>
      <div className="flex-grow px-4 pb-4 flex flex-col">
        <p className="text-neutral-400 mb-2">Description:</p>
        <p className="text-white text-sm flex-grow overflow-y-auto">
          {description}
        </p>
        <div className="mt-auto pt-4">
          <button className="w-full px-6 py-2 bg-black text-white rounded-lg font-bold text-sm transform hover:-translate-y-1 transition duration-400">
            Click to visit
          </button>
        </div>
      </div>
    </div>
  );
}