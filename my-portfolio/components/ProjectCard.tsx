import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* 제목 */}
      <h3 className="text-2xl font-semibold mb-3 text-gray-900">{project.title}</h3>

      {/* 설명 */}
      <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>

      {/* 기술 스택 */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md border border-gray-200"
          >
            {t}
          </span>
        ))}
      </div>

      {/* 깃허브 링크 */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          className="text-sm font-medium text-gray-700 hover:text-black hover:underline transition-colors"
        >
          🔗 GitHub 보기
        </a>
      )}
    </div>
  );
}
