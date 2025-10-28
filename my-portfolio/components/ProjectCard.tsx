import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg mb-4 w-full object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((t: string) => (
          <span
            key={t}
            className="text-sm bg-gray-100 px-2 py-1 rounded-md text-gray-700"
          >
            {t}
          </span>
        ))}
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          GitHub 보기
        </a>
      )}
    </div>
  );
}
