"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"


export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="relative w-full h-32 bg-[#FDF9F7] border-b border-[#E8CFCF] px-36 flex items-center justify-between shadow-sm backdrop-blur-sm z-50">
      
      <div className="flex items-center gap-3">
       <Image
        src="/logo/logo3.png"
        alt="Logo da empresa"
        width={600}
        height={600}
        className="h-28 w-auto object-contain"
        />
      </div>

      <nav className="hidden md:flex items-center space-x-12">
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-[#8A6F63] hover:text-[#B89B67] transition-colors focus:outline-none"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
        {/* Menu mobile - renderização condicional */}
        {isOpen && (<nav className="md:hidden absolute top-24 left-0 w-full bg-[#FDF9F7] border-b border-[#E8CFCF] shadow-lg px-6 py-4 flex flex-col space-y-4 z-50">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-[#8A6F63] hover:text-[#B89B67] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/produtos"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-[#8A6F63] hover:text-[#B89B67] transition-colors"
          >
            Produtos
          </Link>
          <Link
            href="/contato"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-[#8A6F63] hover:text-[#B89B67] transition-colors"
          >
            Contato
          </Link>
        </nav>
)}

    </header>
  );
}