import Link from "next/link";
import Image from "next/image";


export default function Header() {
  return (
    <header className="w-full h-32 bg-[#FDF9F7] border-b border-[#E8CFCF] px-36 flex items-center justify-between shadow-sm backdrop-blur-sm">
      
      <div className="flex items-center gap-3">
       <Image
        src="/logo/logo3.png"
        alt="Logo da empresa"
        width={600}
        height={600}
        className="h-28 w-auto object-contain"
        />
      </div>

      <nav className="flex items-center space-x-12">
        <Link
          href="/"
          className="text-base font-medium text-[#8A6F63] hover:text-[#B89B67] transition-all duration-300 hover:-translate-y-0.5"
        >
          Home
        </Link>

        <Link
          href="/produtos"
          className="text-base font-medium text-[#8A6F63] hover:text-[#B89B67] transition-all duration-300 hover:-translate-y-0.5"
        >
          Produtos
        </Link>

        <Link
          href="/contato"
          className="text-base font-medium text-[#8A6F63] hover:text-[#B89B67] transition-all duration-300 hover:-translate-y-0.5"
        >
          Contato
        </Link>
      </nav>

    </header>
  );
}