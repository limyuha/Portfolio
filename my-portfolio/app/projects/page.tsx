import { projects, Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">프로젝트</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p: Project) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
