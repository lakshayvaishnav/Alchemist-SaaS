"use client"

import ProjectCard from "@/components/Ui/projet-card";

export default function projectcollab() {
  async function addProject() {
    const data = await fetch("/api/projectcollab", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sample: "sample h broo",
      }),
    });
    const response = await data.json();
    console.log("frontend data h broo .. : ", response);
  }

  return (
    <div className="flex  flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-3xl">Project Collab</h1>
          {/* <button>Add your project</button> */}
          <button
            onClick={() => addProject()}
            className="px-8 py-0.5 hover:scale-105 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Add Project
          </button>
        </div>

        <div>
          <ProjectCard
            projectName="solbounty"
            projectIcon="/lxsh.jpg"
            description="another solana dapp"
            developerAvatar="/lxsh.jpg"
            developerName="lakshayvaishnav"
            githubUrl="https://github.com/lakshayvaishnav"
          ></ProjectCard>
        </div>
      </div>
    </div>
  );
}
