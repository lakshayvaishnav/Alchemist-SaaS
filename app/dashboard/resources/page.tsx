"use client";
import ResoureCard from "@/components/Ui/resoure-card";
import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Resouce {
  id: number;
  name: string;
  description: string;
  image: string;
  category: Category;
}

export default function resources() {
  const [resources, setResources] = useState<Resouce[]>();

  async function getResource() {
    const response = await fetch("/api/resources", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    const resources: Resouce[] = await data.data;
    setResources(resources);
    console.log("data from fronend resoures: ", resources);
  }

  return (
    <div className="flex  flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <h1 className="text-3xl font-bold">Resources</h1>
        <button onClick={() => getResource()}>add resource</button>

        <div className="w-full mt-4 flex items-center justify-center">
          <div className="bg-neutral-800 py-4 px-6 gap-4 flex rounded-md">
            {demoCategories.map((category) => (
              <Link key={category.name} href={category.category}>
                <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-sm">
                  {category.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
        <div className=" h-screen mt-4 ">
          <div className="flex flex-row gap-4 max-w-4xl items-center">

          {resources?.map((resource) => (
            <ResoureCard
            name={resource.name}
            category={resource.category}
            image={resource.image}
            description={resource.description}
            id={resource.id}
            key={resource.id}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const demoCategories = [
  {
    name: "Frontend",
    category: "frontend",
  },
  {
    name: "Backend",
    category: "backend",
  },
  {
    name: "Database",
    category: "database",
  },
  {
    name: "Opensource",
    category: "opensource",
  },
];
