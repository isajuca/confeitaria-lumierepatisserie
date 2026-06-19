# 🧁 Lumière Patisserie

Website elegante e responsivo para a confeitaria **Lumière Patisserie**, desenvolvido com Next.js, React e Tailwind CSS. O site apresenta um design sofisticado com paleta de cores refinadas e uma experiência de usuário premium.

## ✨ Recursos Principais

- **Home com Carrossel**: Banner visual com produtos em destaque
- **Catálogo de Produtos**: Galeria responsiva com cards elegantes
- **Página de Contato**: Formulário de envio de mensagens + mapa interativo com Leaflet
- **Redes Sociais**: Links para Instagram, Facebook e YouTube
- **Design Responsivo**: Totalmente otimizado para mobile, tablet e desktop
- **Paleta de Cores Premium**: Tons dourados (#B89B67), rosa (#D7A3A3) e bege (#FDF9F7)
- **Performance Otimizada**: Imagens otimizadas com Next.js Image

## 🛠️ Tecnologias Utilizadas

- **Next.js 16.2.6** - Framework React com SSR
- **React 19.2.4** - UI Library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Shadcn/ui** - Componentes UI reutilizáveis
- **React Leaflet** - Mapas interativos
- **Lucide React** - Ícones
- **Embla Carousel** - Carrossel responsivo

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Setup

1. **Clone o repositório**
```bash
git clone <seu-repo>
cd confeitaria-lumierepatisserie
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Build para produção
npm run build

# Inicia servidor em produção
npm start

# Lint do código
npm run lint
```

## 📁 Estrutura do Projeto

```
confeitaria-lumierepatisserie/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globais
│   │   ├── layout.tsx           # Layout raiz
│   │   ├── page.tsx             # Home
│   │   ├── contato/
│   │   │   └── page.tsx         # Página de contato
│   │   └── produtos/
│   │       └── page.tsx         # Galeria de produtos
│   └── components/
│       ├── ui/                  # Componentes shadcn/ui
│       ├── Header.tsx           # Navegação
│       ├── Footer.tsx           # Rodapé
│       ├── Carrossel.tsx        # Banner com carrossel
│       ├── CardProduto.tsx      # Card individual de produto
│       └── MapaContato.tsx      # Mapa interativo
├── public/                      # Arquivos estáticos
│   ├── logo/                    # Logo da marca
│   ├── carrossel/               # Imagens do carrossel
│   └── produtos/                # Imagens dos produtos
├── produtos.json                # Dados dos produtos
├── next.config.ts               # Configurações Next.js
├── tailwind.config.ts           # Configurações Tailwind
├── tsconfig.json                # Configurações TypeScript
└── package.json                 # Dependências
```

## 🎨 Páginas

### Home (`/`)
- Carrossel com banner promocional
- Grid de produtos em destaque
- Design atrativo com chamadas para ação

### Produtos (`/produtos`)
- Galeria completa de produtos
- Cards com imagem, descrição e preço
- Badge de destaque para produtos especiais
- Responsivo (1 coluna mobile → 3 colunas desktop)

### Contato (`/contato`)
- Formulário de envio de mensagens
- Informações de contato (Email, Telefone, Endereço)
- Links para redes sociais
- Mapa interativo mostrando localização
- Elementos decorativos em rosa para coesão visual

## 🎯 Componentes Principais

### Header
Navegação responsiva com logo e menu (desktop e mobile)

### Footer
Rodapé com informações e links

### CardProduto
Component reutilizável para exibir produtos com imagem, preço e badge de destaque

### Carrossel
Banner rotativo com produtos em destaque

### MapaContato
Mapa interativo com Leaflet mostrando a localização da confeitaria

## 🎨 Paleta de Cores

- **Ouro Premium**: `#B89B67` - Títulos e destaque
- **Rosa Elegante**: `#D7A3A3` - Botões e elementos interativos
- **Rosa Claro**: `#E8CFCF` - Bordas e backgrounds
- **Bege Quente**: `#FDF9F7` - Background principal
- **Marrom Suave**: `#8A6F63` - Textos secundários

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deploy

### Na Vercel (Recomendado)
1. Faça push do repositório para GitHub
2. Conecte seu repositório na [Vercel](https://vercel.com)
3. Vercel fará deploy automaticamente a cada push

### Outro hosting
```bash
npm run build
npm start
```
### Link da Vercel
https://confeitaria-lumierepatisserie.vercel.app/

## 📧 Dados de Contato

- **Email**: isadora.juca.senai@gmail.com

**Desenvolvido por Isa Jucá**
