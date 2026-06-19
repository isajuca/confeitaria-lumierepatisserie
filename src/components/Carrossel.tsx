"use client"

import Image from "next/image"
import React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Caminhos absolutos apontando para public/carrossel/
const carrosselImagens = [ 
    {src:"/carrossel/1.png",alt:"Banner da Lumière Pâtisserie com bolo rosa decorado e flores delicadas"}, 
    {src:"/carrossel/2.png",alt:"Banner da Lumière Pâtisserie com macarons artesanais em tons pastel"}, 
    {src:"/carrossel/3.png",alt:"Banner da Lumière Pâtisserie com sobremesa de morango e estética francesa elegante"}, ]

export default function Carrossel() {
  // 1. Instanciação estável do plugin de Autoplay
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section className="w-full flex justify-center overflow-hidden">
        {/* 2. Associação do plugin e eventos de controle por hover */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full relative max-w-[1600px] overflow-hidden"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.reset()}
        >
            <CarouselContent>
                {carrosselImagens.map((imagem, index) => (
                    <CarouselItem key={index}>
                        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[520px] overflow-hidden">
                            <Image
                              src={imagem.src}
                              alt={imagem.alt}
                              fill
                              className="object-cover"
                              priority={index === 0}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 border-slate-200 p-2 rounded-full shadow-sm"/>
            <CarouselNext className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 border-slate-200 p-2 rounded-full shadow-sm"/>
        </Carousel>
    </section>
  )
}