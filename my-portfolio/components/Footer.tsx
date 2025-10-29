export default function Footer() {
  return (
    <footer 
      className="text-center py-8 text-gray-400 text-sm border-t bg-white/60 backdrop-blur">
      © {new Date().getFullYear()} YuHa Lim. All rights reserved.
    </footer>
  );
}
