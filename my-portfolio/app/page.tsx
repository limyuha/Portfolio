import Link from "next/link";


export default function Home() {
return (
<main className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 text-gray-800">
<h1 className="text-5xl font-bold mb-4">안녕하세요 👋 임선하입니다</h1>
<p className="text-lg text-gray-600 mb-6">
NestJS · GraphQL · AWS를 중심으로 백엔드 시스템을 개발하는 개발자입니다.
</p>
<div className="flex gap-4">
<Link
href="/projects"
className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
>
프로젝트 보기
</Link>
<Link
href="/contact"
className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
>
연락하기
</Link>
</div>
</main>
);
}