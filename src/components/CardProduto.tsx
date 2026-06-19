"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { useState, useEffect } from "react"
// 1. Tipagem das propriedades do produto
interface CardProdutoProps {
  id: string | number;
  title: string;
  description: string;
  price: number;
  imageSrc?: string; // Propriedade opcional
  destaque?: boolean;
}

export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  id,
  destaque
}: CardProdutoProps) {
  // Estado local com inicialização de fallback
  const [imgSrc, setImgSrc] = useState<string>(imageSrc || "/produtos/placeholder.png");

  // Sincronização com alterações da propriedade externa
  useEffect(() => {
    setImgSrc(imageSrc || "/produtos/placeholder.png");
  }, [imageSrc]);


  // 2. Formatação de moeda BRL nativa
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <Card className="relative mx-auto w-full max-w-full md:max-w-sm h-full flex flex-col overflow-hidden pt-0 rounded-[30px] border border-[#E8CFCF] bg-[#FDF9F7] shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {/* Selo de destaque absoluto sobreposto no canto superior direito do card */}
      {destaque && (
        <Badge className="absolute top-4 right-4 z-30 bg-[#D7A3A3] text-white border-none shadow-md">
          Destaque
        </Badge>
      )}

      {/* Container de imagem do produto com Image do Next.js para otimização e SEO */}
      <div className="relative w-full h-[400px] min-h-[400px] overflow-hidden rounded-t-[30px]">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 384px"
          onError={() => setImgSrc("/produtos/placeholder.png")}
        />
      </div>

      <CardHeader className="pt-5 pb-3 px-6">
        <CardTitle className="text-3xl text-[#B89B67] font-medium">{title}</CardTitle>
        <CardDescription className="text-base text-[#8A6F63] mt-2 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="px-6 pb-6 pt-2 mt-auto">
        {/* Exibição do botão com o preço formatado */}
        <Button className="w-full rounded-full bg-[#D7A3A3] hover:bg-[#C98E8E] text-white font-medium shadow-sm transition-all duration-300">{formattedPrice}</Button>
      </CardFooter>
    </Card>
  )
}