import CardProduto from "../../components/CardProduto"
import produtos from "../../../produtos.json"

export default function Produtos() {
  return (
    <div className="w-full min-h-screen bg-[#FDF9F7] pb-24 px-4 sm:px-6 lg:px-10">
      <div className="text-center py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#B89B67] font-light tracking-wide">
          Produtos Lumière
        </h1>
        <p className="mt-4 text-base md:text-lg text-[#8A6F63] italic">
          Descubra nossas delícias artesanais
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            id={produto.id}
            title={produto.title}
            description={produto.description}
            price={produto.price}
            imageSrc={produto.imageSrc}
            destaque={produto.destaque}
          />
        ))}
      </div>
    </div>
  )
}
