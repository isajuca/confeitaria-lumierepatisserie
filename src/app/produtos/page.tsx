"use client"

import { useState } from "react"
import { useEffect } from "react"
import { Search, RotateCcw } from "lucide-react"
import CardProduto from "../../components/CardProduto" 
import produtos from "../../../produtos.json"

// Definição da tipagem das propriedades dos produtos
interface ProdutoProps {
  id: string | number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  destaque: boolean;
  categoria?: string;
}

export default function Produtos() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos")
  const [ordenacaoPreco, setOrdenacaoPreco] = useState("relevante")
  const [apenasDestaque, setApenasDestaque] = useState(false)
  const [precoMaximo, setPrecoMaximo] = useState<string>("")

  // Função para limpar todos os campos e restaurar os estados iniciais
  const limparFiltros = () => {
    setSearchTerm("")
    setCategoriaSelecionada("Todos")
    setOrdenacaoPreco("relevante")
    setApenasDestaque(false)
    setPrecoMaximo("")
  }

  // Persistência leve: atualizar título da página dinamicamente
  useEffect(() => {
    if (searchTerm) {
      document.title = `Produtos: ${searchTerm} - Lumière Patisserie`
    } else {
      document.title = `Produtos Lumière - Confeitaria`
    }
  }, [searchTerm])

  // Filtragem combinada por busca textual, categoria, destaque e preço
  const produtosFiltrados = (produtos as ProdutoProps[]).filter((produto) => {
    const correspondeTexto =
      produto.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.description.toLowerCase().includes(searchTerm.toLowerCase())

    const correspondeCategoria =
      categoriaSelecionada === "Todos" || produto.categoria === categoriaSelecionada

    const correspondeDestaque = apenasDestaque ? produto.destaque === true : true

    const correspondePreco = precoMaximo === "" || produto.price <= parseFloat(precoMaximo)

    return correspondeTexto && correspondeCategoria && correspondeDestaque && correspondePreco
  })

  // Ordenação dos dados filtrados com base no preço
  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    if (ordenacaoPreco === "menor-preco") {
      return a.price - b.price
    }
    if (ordenacaoPreco === "maior-preco") {
      return b.price - a.price
    }
    return 0
  })

  // Função para obter o total de produtos cadastrados em cada categoria
  const obterTotalCategoria = (categoria: string) => {
    if (categoria === "Todos") {
      return produtos.length
    }
    return (produtos as ProdutoProps[]).filter((p) => p.categoria === categoria).length
  }

  const listaCategorias = ["Todos", "Bolos e Tortas", "Especialidades Francesas", "Doces Individuais", "Bebidas"]

  return (
    <div className="w-full min-h-screen bg-[#FDF9F7] py-12 px-4 sm:px-6 lg:px-36">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho da página */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-light text-[#B89B67] mb-3 tracking-wide">
            Produtos Lumière
        </h1>
        <p className="max-w-2xl text-[#8A6F63] mx-auto italic">
            Encontre todos os itens disponíveis na nossa loja, com preços e descrições completas.
        </p>
        </header>

        {/* Bloco de controles e filtros */}
        <section className="bg-white p-6 rounded-xl border border-[#E8CFCF] shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

            {/* Campo de pesquisa de texto */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#B89B67]">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar produtos..."
                className="w-full pl-10 pr-4 py-2 bg-[#FDF9F7] border border-[#E8CFCF] rounded-lg text-[#8A6F63] placeholder:text-[#B89B67] focus:outline-none focus:ring-2 focus:ring-[#D7A3A3] focus:bg-white transition-all text-sm"
              />
            </div>

            {/* Controles de ordenação e ação de limpeza */}
            <div className="flex items-center gap-4 flex-wrap">
              <label htmlFor="ordenar-preco" className="text-sm font-medium text-[#8A6F63]">
                Ordenar por:
              </label>
              <select
                id="ordenar-preco"
                value={ordenacaoPreco}
                onChange={(e) => setOrdenacaoPreco(e.target.value)}
                className="bg-[#FDF9F7] border border-[#E8CFCF] text-[#8A6F63] text-sm rounded-lg focus:ring-[#D7A3A3] focus:border-[#D7A3A3] p-2 focus:outline-none"
              >
                <option value="relevante">Mais relevantes</option>
                <option value="menor-preco">Menor preço</option>
                <option value="maior-preco">Maior preço</option>
              </select>

              {/* Filtro por preço máximo */}
              <div className="flex items-center gap-2">
                <label htmlFor="preco-maximo" className="text-sm font-medium text-[#8A6F63]">
                  Preço máx:
                </label>
                <input
                  id="preco-maximo"
                  type="number"
                  min="0"
                  step="0.01"
                  value={precoMaximo}
                  onChange={(e) => setPrecoMaximo(e.target.value)}
                  placeholder="R$ 0,00"
                  className="w-24 px-2 py-2 bg-[#FDF9F7] border border-[#E8CFCF] text-[#8A6F63] text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D7A3A3]"
                />
              </div>

              {/* Botão de filtro por destaque */}
              <button
                onClick={() => setApenasDestaque(!apenasDestaque)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  apenasDestaque
                    ? "bg-[#D7A3A3] text-white shadow-sm"
                    : "bg-[#F3EDEB] text-[#8A6F63] border border-[#E8CFCF] hover:bg-[#E8CFCF]"
                }`}
              >
                Apenas Destaques
              </button>

              {/* Botão de redefinir seleções (exibido apenas quando há algum filtro ativo) */}
              {(searchTerm !== "" || categoriaSelecionada !== "Todos" || ordenacaoPreco !== "relevante" || apenasDestaque || precoMaximo !== "") && (
                <button
                  onClick={limparFiltros}
                  className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#8A6F63] hover:text-[#D7A3A3] border border-[#E8CFCF] hover:bg-[#E8CFCF] hover:bg-opacity-30 rounded-lg transition-all cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Limpar filtros
                </button>
              )}
            </div>

          </div>

          {/* Filtros rápidos de categoria com badges de contagem de itens */}
          <div className="flex gap-2 flex-wrap mt-6 pt-6 border-t border-[#E8CFCF]">
            {listaCategorias.map((categoria) => {
              const isActive = categoriaSelecionada === categoria
              const totalItens = obterTotalCategoria(categoria)
              return (
                <button
                  key={categoria}
                  onClick={() => setCategoriaSelecionada(categoria)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#D7A3A3] text-white shadow-sm"
                      : "bg-[#F3EDEB] text-[#8A6F63] hover:bg-[#E8CFCF]"
                  }`}
                >
                  <span>{categoria}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full transition-all ${
                      isActive ? "bg-white/20 text-white" : "bg-[#E8CFCF] text-[#8A6F63]"
                    }`}
                  >
                    {totalItens}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        {/* Seção indicadora do número de resultados */}
        <div className="mb-6 flex justify-between items-center text-sm text-[#8A6F63]">
          <span>
            {produtosOrdenados.length === 1
              ? "1 produto encontrado"
              : `${produtosOrdenados.length} produtos encontrados`}
          </span>
        </div>

        {/* Grade de exibição dos produtos */}
        <section className="w-full">
          {produtosOrdenados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {produtosOrdenados.map((product) => (
                <CardProduto
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  imageSrc={product.imageSrc}
                  destaque={product.destaque}
                />
              ))}
            </div>
          ) : (
            // Exibição amigável para quando o filtro não encontrar resultados
            <div className="w-full bg-white border border-[#E8CFCF] rounded-xl p-12 text-center shadow-sm">
              <h3 className="text-lg font-bold text-[#8A6F63] mb-2">
                Nenhum produto foi encontrado
              </h3>
              <p className="text-[#8A6F63] text-sm mb-6 max-w-sm mx-auto">
                Não localizamos produtos com o termo "{searchTerm}" na categoria "{categoriaSelecionada}".
              </p>
              <button
                onClick={limparFiltros}
                className="px-4 py-2 bg-[#D7A3A3] text-white rounded-lg text-sm font-semibold hover:bg-[#C98E8E] transition-all cursor-pointer"
              >
                Ver todos os produtos
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  )
}