"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- ÍCONES NATIVOS ---
const Instagram = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>);
const Mail = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
const ArrowUpRight = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>);
const Code = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const Palette = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>);
const Smartphone = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>);
const XIcon = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>);
const ChevronLeft = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="15 18 9 12 15 6"/></svg>);
const ChevronRight = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="9 18 15 12 9 6"/></svg>);

// --- DADOS DO PORTFÓLIO ---
type PortfolioItem = { 
  id: number; 
  title: string; 
  category: string; 
  link?: string; 
  imageUrls: string[];
  showInAll?: boolean; // Propriedade nova: se for false, não aparece na aba "Todos"
};

const portfolioItems: PortfolioItem[] = [
  // --- ITENS PRINCIPAIS (Aparecem em "Todos") ---
  { id: 1, title: "Capa de Portfólio", category: "Artes", imageUrls: ["/img/portfolio1.png"], showInAll: true },
  { id: 2, title: "Logo Kenzo AI", category: "Logos", imageUrls: ["/img/kenzo.png"], showInAll: true },
  { id: 3, title: "Site Barbeiro", category: "Designs", link: "https://barbearia-eta-umber.vercel.app/", imageUrls: ["/img/site-barbeiro.png"], showInAll: true },
  { id: 4, title: "Story Instagram", category: "Storys", imageUrls: ["/img/story-insta.png"], showInAll: true },
  { id: 5, title: "Modelo de Carrossel", category: "Carrosseis", imageUrls: ["/img/carrossel/carrossel.png", "/img/carrossel/carrossel2.png"], showInAll: true },
  { id: 6, title: "Ensaio Fotográfico", category: "Fotografia", imageUrls: ["/img/post-insta.png"], showInAll: true },
  { id: 7, title: "Modelo de Logo", category: "Logos", imageUrls: ["/img/logo1.png"], showInAll: true },
  { id: 8, title: "Faixa de Youtube", category: "Artes", imageUrls: ["/img/enzo-body.png"], showInAll: true },

  // --- ITENS EXTRAS (NÃO aparecem em "Todos", apenas na categoria específica) ---
  // Podes adicionar mais itens aqui seguindo este modelo:
  
  { id: 9, title: "Convite de Aniversário", category: "Artes", imageUrls: ["/img/convite.png"], showInAll: false },
];

const categories = ["Todos", "Artes", "Logos", "Designs", "Storys", "Carrosseis", "Fotografia"];

// --- DADOS DAS MARCAS ---
type BrandItem = { type: "image"; src: string; alt: string } | { type: "text"; content: string };

const brands: BrandItem[] = [
  { type: "image", src: "/img/arkad.png", alt: "Arkad" },
  { type: "image", src: "/img/patty.png", alt: "Patty" },
  { type: "image", src: "/img/logo-barbeiro.png", alt: "Barbeiro" },
  { type: "image", src: "/img/kells.png", alt: "Kells" },
  { type: "image", src: "/img/logo-sahterapeuta.png", alt: "SahTerapeuta" },
  
  
  { type: "image", src: "/img/arkad.png", alt: "Arkad" },
  { type: "image", src: "/img/patty.png", alt: "Patty" },
  { type: "image", src: "/img/logo-barbeiro.png", alt: "Barbeiro" },
  { type: "image", src: "/img/kells.png", alt: "Kells" },
  { type: "image", src: "/img/logo-sahterapeuta.png", alt: "SahTerapeuta" },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Controle do Carrossel do Modal
  
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Animação de Loading Inicial
  useEffect(() => {
    let start = 0;
    const duration = 1200; 
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);
    
    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setLoadingProgress(100);
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 300);
      } else {
        setLoadingProgress(Math.floor(start));
      }
    }, intervalTime);
    
    return () => clearInterval(timer);
  }, []);

  // Trava scroll no Modal
  useEffect(() => {
    if (selectedItem || isLoading) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [selectedItem, isLoading]);

  // Lógica de Filtragem Atualizada
  const filteredItems = activeFilter === "Todos" 
    ? portfolioItems.filter(item => item.showInAll !== false) 
    : portfolioItems.filter(item => item.category === activeFilter);
  
  const handleCardClick = (item: PortfolioItem) => {
    if (item.link) {
      window.open(item.link, "_blank");
    } else {
      setSelectedItem(item);
      setCurrentImageIndex(0); // Garante que abra sempre na primeira foto
    }
  };

  // Funções do Carrossel de Imagem
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem && selectedItem.imageUrls) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedItem.imageUrls.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem && selectedItem.imageUrls) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedItem.imageUrls.length) % selectedItem.imageUrls.length);
    }
  };

  return (
    <>
      {/* --- PRE-LOADER CINEMATOGRÁFICO --- */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            key="preloader"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }} 
            className="fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="flex flex-col items-center gap-8">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-5xl md:text-7xl font-black tracking-tighter text-white"
              >
                Kenai<span className="text-blue-500">.</span>
              </motion.h2>
              
              <div className="flex flex-col items-center gap-3">
                <span className="text-blue-500 font-mono text-sm tracking-widest">{loadingProgress}%</span>
                <div className="w-48 h-[2px] bg-zinc-800 relative overflow-hidden rounded-full">
                  <motion.div 
                    className="absolute top-0 left-0 bottom-0 bg-blue-500"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen relative selection:bg-blue-600 selection:text-white pb-10">
        
        {/* --- HEADER FIXO --- */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 bg-[#030303]/80 backdrop-blur-md border-b border-zinc-900/50 transition-all">
          <div className="max-w-[1400px] mx-auto relative flex justify-center items-center h-8">
            <a href="#" className="absolute left-0 text-2xl font-black tracking-tighter text-white uppercase">
              KENAI<span className="text-blue-500">.</span>
            </a>
            <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-zinc-400">
              <a href="#trabalhos" className="hover:text-white transition-colors">Trabalhos</a>
              <a href="#marcas" className="hover:text-white transition-colors">Marcas</a>
              <a href="#sobre" className="hover:text-white transition-colors">Sobre mim</a>
              <a href="#contato" className="hover:text-white transition-colors">Contato</a>
            </nav>
          </div>
        </header>

        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

        {/* --- HERO SECTION --- */}
        <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="z-10 text-center max-w-5xl"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={!isLoading ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md"
            >
              <span className="text-sm font-medium tracking-wide text-zinc-100">
                Transformando ideias em código e design
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-tight">
              KENAI <span className="text-gradient">DESIGN</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              Experiências digitais imersivas, identidades visuais marcantes e desenvolvimento de alta performance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={!isLoading ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-zinc-500">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
          </motion.div>
        </section>

        {/* --- PORTFÓLIO --- */}
        <section id="trabalhos" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto z-10 relative scroll-mt-20">
          <div className="flex flex-col items-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-6xl font-black tracking-tighter mb-10"
            >
              Trabalhos Selecionados
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeFilter === cat ? "text-black" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {activeFilter === cat && (
                    <motion.div layoutId="active-pill" className="absolute inset-0 bg-white rounded-full" transition={{ duration: 0.2 }} />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div layout transition={{ duration: 0.3, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleCardClick(item)}
                  className="group relative aspect-[4/5] bg-zinc-900/50 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800/50 hover:border-blue-500/30 transition-all"
                >
                  {/* Mostra apenas a CAPA (índice 0) no grid */}
                  {item.imageUrls && item.imageUrls.length > 0 ? (
                    <img src={item.imageUrls[0]} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-800/20 group-hover:bg-zinc-800/40 transition-colors duration-500">
                      <span className="text-zinc-600 text-sm opacity-50">[ Img: {item.title} ]</span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-blue-400 text-xs font-medium uppercase tracking-wider mb-2">{item.category}</p>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shrink-0 ml-4">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- CLIENTES --- */}
        <section id="marcas" className="py-24 border-y border-zinc-900/50 bg-zinc-950/30 relative z-10 scroll-mt-20 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 mb-16">
            <p className="text-center text-zinc-500 text-sm uppercase tracking-[0.2em]">Marcas que confiam no trabalho</p>
          </div>
          <div className="w-full relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div 
              className="flex items-center gap-16 md:gap-24 shrink-0 w-max px-12"
              animate={{ x: ["-50%", "0%"] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }} 
            >
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center justify-center shrink-0">
                  {brand.type === "image" ? (
                    <img 
                      src={brand.src} 
                      alt={brand.alt} 
                      className="h-20 md:h-28 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
                    />
                  ) : (
                    <span className="text-2xl md:text-3xl font-bold text-zinc-600 hover:text-zinc-200 transition-colors whitespace-nowrap">
                      {brand.content}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- SOBRE MIM --- */}
        <section id="sobre" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center lg:justify-start"
            >
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 relative group shrink-0 shadow-2xl">
                <img 
                  src="/img/1.png" 
                  alt="Kenai Almeida" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-center lg:text-left">
                Sobre <span className="text-blue-500">mim.</span>
              </h2>
              <div className="space-y-6 text-xl text-zinc-400 font-light leading-relaxed text-center lg:text-left">
                <p>Olá, eu sou o Kenai Almeida. Aos 19 anos, residindo em Salvador, Bahia, dedico minha trajetória a construir o futuro da web.</p>
                <p>Atuo como Programador Full Stack, Web Designer e Designer Gráfico. Minha formação em Tecnologia da Internet pelo SENAI/CIMATEC me proporcionou a base técnica necessária para entender que um bom design não é apenas visualmente atraente, mas também estruturalmente impecável e focado em conversão.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 text-left">
                  <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl">
                    <Code className="text-blue-500 mb-4 w-8 h-8" />
                    <h4 className="text-white font-bold mb-2">Desenvolvimento</h4>
                    <p className="text-sm text-zinc-500">Aplicações web modernas, rápidas e escaláveis.</p>
                  </div>
                  <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl">
                    <Smartphone className="text-purple-500 mb-4 w-8 h-8" />
                    <h4 className="text-white font-bold mb-2">UI/UX Design</h4>
                    <p className="text-sm text-zinc-500">Interfaces focadas na melhor experiência do usuário.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- FOOTER / CONTATO --- */}
        <footer id="contato" className="py-16 border-t border-zinc-900 bg-[#020202] relative z-10">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black tracking-tighter text-white mb-2 uppercase">
                KENAI<span className="text-blue-500">.</span>
              </h3>
              <p className="text-zinc-500 text-sm">Elevando marcas através do design e tecnologia.</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/kenai.design/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"><Instagram className="w-5 h-5" /></a>
              <a href="mailto:kenaidesign22@gmail.com" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"><Mail className="w-5 h-5" /></a>
              <div className="flex flex-col text-sm text-zinc-500 ml-4 border-l border-zinc-800 pl-6">
                <span className="text-zinc-300 font-medium">Contato</span>
                <span>(71) 99338-3703</span>
                <span>kenaidesign22@gmail.com</span>
              </div>
            </div>
          </div>
        </footer>

        {/* --- MODAL DE IMAGEM HORIZONTAL --- */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <button className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white rounded-full transition-colors z-[110]" onClick={() => setSelectedItem(null)}>
                <XIcon className="w-6 h-6" />
              </button>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-6xl h-[85vh] md:h-[90vh] bg-zinc-950 rounded-xl overflow-hidden shadow-2xl flex flex-col" 
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* --- ÁREA DA IMAGEM E CARROSSEL HORIZONTAL --- */}
                <div className="relative flex-1 flex items-center justify-center overflow-hidden p-2 md:p-8 bg-black">
                  {selectedItem.imageUrls && selectedItem.imageUrls.length > 0 ? (
                    <>
                      {/* Imagem grande, centralizada e 100% responsiva (object-contain) */}
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentImageIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                          src={selectedItem.imageUrls[currentImageIndex]} 
                          alt={`${selectedItem.title} - ${currentImageIndex + 1}`} 
                          className="max-w-full max-h-full object-contain" 
                        />
                      </AnimatePresence>

                      {/* Setas (Apenas se tiver mais de 1 foto) */}
                      {selectedItem.imageUrls.length > 1 && (
                        <>
                          <button 
                            onClick={prevImage}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-colors z-10"
                          >
                            <ChevronLeft className="w-6 h-6 ml-[-2px]" />
                          </button>
                          <button 
                            onClick={nextImage}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-colors z-10"
                          >
                            <ChevronRight className="w-6 h-6 mr-[-2px]" />
                          </button>

                          {/* Bolinhas Indicadoras Embaixo */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-black/40 px-3 py-2 rounded-full backdrop-blur-sm">
                            {selectedItem.imageUrls.map((_, idx) => (
                              <button 
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-center">
                      <span className="text-zinc-500 text-xl px-4">[ Suas Imagens de {selectedItem.title} aparecerão aqui ]</span>
                    </div>
                  )}
                </div>
                
                {/* Informações na barra de baixo */}
                <div className="p-6 bg-zinc-900 shrink-0 border-t border-zinc-800/50">
                  <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-1">{selectedItem.category}</p>
                  <h3 className="text-3xl font-bold text-white">{selectedItem.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </main>
    </>
  );
}