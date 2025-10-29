import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section 
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6 bg-transparent">
      
      {/* 타이틀 */}
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="relative inline-block text-4xl md:text-5xl font-black text-gray-900 leading-none tracking-tight 
                        after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-[3px] 
                        after:bg-gray-600 after:rounded-full">
          PROJECTS
        </h2>
      </div>

      {/* 프로젝트 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
