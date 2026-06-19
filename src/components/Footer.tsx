import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FDF9F7] border-t border-[#E8CFCF] flex flex-col gap-6 y-8 px-4 sm:px-6 lg:px-36">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 text-center md:text-left">
        <p className="text-[#8A6F63]">
          &copy; {currentYear} Lumiere Patisserie. Todos os direitos reservados.
        </p>

        <p className="text-[#B89B67] italic tracking-wide">
          Feito com carinho para você.
        </p>
      </div>

    </footer>
  );
}