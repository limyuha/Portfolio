import { Code, Layout, Server, Cloud, Brain, Wrench } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      icon: <Server className="w-6 h-6 text-green-600" />,
      bg: "from-green-50 to-emerald-50",
      title: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "MyBatis",
        "JPA",
        "Python",
        "Flask",
        "JWT 인증",
        "RESTful API",
        "MySQL",
      ],
    },
    {
      icon: <Layout className="w-6 h-6 text-blue-600" />,
      bg: "from-blue-50 to-indigo-50",
      title: "Frontend",
      skills: ["React", "HTML5", "CSS3", "JavaScript (ES6+)", "Axios", "Thymeleaf"],
    },
    {
      icon: <Cloud className="w-6 h-6 text-indigo-500" />,
      bg: "from-indigo-50 to-sky-50",
      title: "Deployment / DevOps",
      skills: ["AWS EC2", "Vercel", "GitHub Actions", "Nginx", "Docker"],
    },
    {
      icon: <Brain className="w-6 h-6 text-pink-600" />,
      bg: "from-pink-50 to-rose-50",
      title: "AI / Chat",
      skills: ["OpenAI API", "Socket.io", "WebSocket", "Prompt Engineering"],
    },
    {
      icon: <Wrench className="w-6 h-6 text-gray-700" />,
      bg: "from-gray-50 to-gray-100",
      title: "Tools & Collaboration",
      skills: ["Git", "GitHub", "IntelliJ", "VS Code", "Postman", "Figma"],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto py-28 px-6 md:px-10">
      {/* 타이틀 */}
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="flex items-center justify-center mb-3">
          
          <h2 className="relative inline-block text-4xl md:text-5xl font-black text-gray-900 leading-none tracking-tight
                          after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-[3px]
                          after:bg-gray-600 after:rounded-full">
            SKILLS
          </h2>

        </div>
      </div>
      {/* 카테고리 */}
      <div className="space-y-8">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className={`flex flex-col md:flex-row md:items-center md:justify-between 
                        bg-gradient-to-r ${cat.bg} border border-gray-200
                        p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1
                        transition-all duration-300`}
          >
            {/* 제목 */}
            <div className="flex items-center gap-3 mb-3 md:mb-0">
              <div className="p-2 rounded-full bg-white shadow-sm">{cat.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800">{cat.title}</h3>
            </div>

            {/* 스킬 태그 */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="text-sm font-medium px-3 py-1 rounded-md 
                             bg-white/70 border border-gray-200 
                             text-gray-700 shadow-sm 
                             hover:bg-white hover:shadow-md 
                             transition-all duration-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
