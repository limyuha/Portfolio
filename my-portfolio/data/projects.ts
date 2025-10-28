export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "OpenMarket 통합 시스템",
    description: "NestJS 기반으로 오픈마켓 주문/클레임/상품 통합 관리 시스템 개발",
    tech: ["NestJS", "PostgreSQL", "AWS S3", "GraphQL"],
    github: "https://github.com/yourname/openmarket-system",
    image: "/images/project1.png",
  },
];
