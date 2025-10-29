import { Link as LinkIcon, User, MapPin, Mail, Calendar, Phone, Pencil } from "lucide-react";

export default function About() {
  const infos = [
    { icon: <User className="w-8 h-8 text-gray-600" />, label: "이름", value: "임유하" },
    { icon: <Calendar className="w-8 h-8 text-gray-600" />, label: "생년월일", value: "00.04.20" },
    { icon: <MapPin className="w-8 h-8 text-gray-600" />, label: "위치", value: "인천광역시" },
    { icon: <Mail className="w-8 h-8 text-gray-600" />, label: "이메일", value: "dladbgkdla@gmail.com" },
    { icon: <Phone className="w-8 h-8 text-gray-600" />, label: "연락처", value: "010-4067-5005" },
    { icon: <Pencil className="w-8 h-8 text-gray-600" />, label: "학력", value: "유한대학교" },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto py-32 px-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] p-16">
        {/* 제목 */}
        <div className="flex items-center justify-center mb-16">
          <h2 className="relative text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight after:content-[''] after:block after:w-full after:h-[3px] after:bg-gray-600 after:mt-2 after:rounded-full">
            ABOUT ME
          </h2>
        </div>

        {/* 정보 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-14 place-items-center">
          {infos.map((item) => (
            <div key={item.label} className="flex items-center gap-6 text-left w-full max-w-[260px]">
              {/* 아이콘 */}
              <div className="flex-shrink-0 flex items-center justify-center">
                {item.icon}
              </div>

              {/* 텍스트 */}
              <div className="flex flex-col justify-center">
                <p className="text-sm text-gray-500 font-medium mb-2">{item.label}</p>
                <p className="text-lg font-semibold text-gray-800 leading-snug">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}