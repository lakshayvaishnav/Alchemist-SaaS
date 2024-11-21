import ProjectCard from "@/components/Ui/projet-card";

export default function projectcollab() {
  return (
    <div className="flex  flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <h1 className="font-bold text-3xl">Project Collab</h1>
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
