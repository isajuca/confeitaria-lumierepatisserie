export default function Contato() {
  return (
    <div className="w-full min-h-screen bg-[#FDF9F7] pb-24">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="rounded-[32px] border border-[#D7A3A3] bg-white/90 p-10 shadow-lg shadow-[#d9c5c0]/30">
            <h1 className="text-4xl md:text-5xl font-light text-[#B89B67] mb-6">
              Mande uma Mensagem
            </h1>
            <p className="max-w-xl text-[#8A6F63] leading-relaxed text-lg">
              Você pode entrar em contato diretamente através do telefone, enviar um email ou preencher este formulário. Estamos prontos para ajudar com encomendas, eventos e pedidos especiais.
            </p>

            <div className="mt-12 space-y-8 text-[#65442C]">
              <div>
                <p className="text-base font-semibold">Vendas</p>
                <p className="mt-2 text-xl font-bold">11 97095-3888</p>
              </div>
              <div>
                <p className="text-base font-semibold">Eventos</p>
                <p className="mt-2 text-xl font-bold">11 94444-6869</p>
              </div>
              <div>
                <p className="text-base font-semibold">Trabalhe conosco</p>
                <p className="mt-2 text-xl font-bold">recrutamento@lumierepatisserie.com.br</p>
              </div>
              <div>
                <p className="text-base font-semibold">Marketing</p>
                <p className="mt-2 text-xl font-bold">marketing@lumierepatisserie.com.br</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#D7A3A3] bg-white/90 p-10 shadow-lg shadow-[#d9c5c0]/30">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-[#6B4A30]">Envie sua mensagem</h2>
              <p className="mt-3 text-[#8A6F63]">Preencha os campos abaixo e entraremos em contato o mais breve possível.</p>
            </div>

            <form className="space-y-6">
              <label className="block">
                <span className="text-sm font-semibold text-[#5D3F2A]">Nome</span>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="mt-2 w-full rounded-xl border border-[#D7A3A3] bg-[#FBF5F2] px-4 py-3 text-base text-[#5D3F2A] outline-none transition focus:border-[#B89B67] focus:ring-2 focus:ring-[#B89B67]/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#5D3F2A]">Telefone</span>
                <input
                  type="tel"
                  placeholder="(11) 9XXXX-XXXX"
                  className="mt-2 w-full rounded-xl border border-[#D7A3A3] bg-[#FBF5F2] px-4 py-3 text-base text-[#5D3F2A] outline-none transition focus:border-[#B89B67] focus:ring-2 focus:ring-[#B89B67]/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#5D3F2A]">E-mail</span>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="mt-2 w-full rounded-xl border border-[#D7A3A3] bg-[#FBF5F2] px-4 py-3 text-base text-[#5D3F2A] outline-none transition focus:border-[#B89B67] focus:ring-2 focus:ring-[#B89B67]/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#5D3F2A]">Mensagem</span>
                <textarea
                  rows={6}
                  placeholder="Escreva sua mensagem aqui"
                  className="mt-2 w-full rounded-[24px] border border-[#D7A3A3] bg-[#FBF5F2] px-4 py-4 text-base text-[#5D3F2A] outline-none transition focus:border-[#B89B67] focus:ring-2 focus:ring-[#B89B67]/20"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-full bg-[#D7A3A3] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#d27878]"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
