import ResoureCard from "@/components/Ui/resoure-card";
import Image from "next/image";
import Link from "next/link";

export default function resources() {
  return (
    <div className="flex  flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <h1 className="text-3xl font-bold">Resources</h1>

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
          <ResoureCard />
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
