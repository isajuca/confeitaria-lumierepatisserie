export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FDF9F7] border-t border-[#E8CFCF] px-36 py-10 flex flex-col gap-6">
      
      <div className="flex justify-between items-center text-sm">
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