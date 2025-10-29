export default function Contact() {
  return (
    <section 
      id="contact"
      className="max-w-3xl mx-auto text-center py-24 px-6 bg-transparent">
      <h2 className="text-3xl font-bold mb-6">연락하기</h2>
      <p className="text-gray-500 mb-4">
        프로젝트 협업이나 문의는 아래로 연락주세요 👇
      </p>
      <div className="space-y-2">
        <p>
          📧{" "}
          <a
            href="mailto:dladbgkdla@gmail.com"
            className="text-blue-600 hover:underline"
          >
            dladbgkdla@gmail.com
          </a>
        </p>
        <p>
          💻{" "}
          <a
            href="https://github.com/limyuha"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
