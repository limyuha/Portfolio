export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  image?: string;
}

export const projects = [
  {
    title: "Kiosk Project",
    description: "음식 주문 및 결제를 지원하는 키오스크 시뮬레이션 프로그램. 주문, 결제, 관리자 기능 포함.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/limyuha/kiosk_project",
  },
  {
    title: "Saju Project",
    description: "사용자 생년월일을 기반으로 사주 분석 및 운세 예측 기능을 제공하는 서비스.",
    tech: ["Python", "Flask", "HTML", "CSS"],
    github: "https://github.com/limyuha/SajuProject",
  },
  {
    title: "Login Project",
    description: "JWT 기반 로그인/회원가입 시스템. 비밀번호 암호화 및 세션 관리 기능 포함.",
    tech: ["Spring Boot", "MyBatis", "JWT", "React"],
    github: "https://github.com/limyuha/LoginProject",
  },
  {
    title: "MyBoard",
    description: "게시판 CRUD 웹앱. 게시글 작성, 수정, 삭제, 댓글 기능 지원.",
    tech: ["Spring Boot", "Thymeleaf", "MySQL"],
    github: "https://github.com/limyuha/MyBoard",
  },
  {
    title: "SherlockChat",
    description: "OpenAI API 기반 AI 챗봇 애플리케이션. 사용자 질문에 실시간 답변 제공.",
    tech: ["React", "Node.js", "Socket.io", "OpenAI API"],
    github: "https://github.com/limyuha/SherlockChat",
  },
];
