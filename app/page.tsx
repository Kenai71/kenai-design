"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- ÍCONES NATIVOS ---
const Instagram = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>);
const Mail = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>);
const ArrowUpRight = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>);
const Code = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>);
const Palette = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>);
const Smartphone = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>);
const XIcon = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);
const ChevronLeft = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="15 18 9 12 15 6" /></svg>);
const ChevronRight = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="9 18 15 12 9 6" /></svg>);
const Globe = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>);
const Github = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>);
const MenuIcon = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>);

// --- TRADUÇÕES ---
const categoriesEn: Record<string, string> = { "Todos": "All", "Artes": "Arts", "Logos": "Logos", "Designs": "Designs", "Storys": "Stories", "Carrosseis": "Carousels", "Fotografia": "Photography" };
const categoriesEs: Record<string, string> = { "Todos": "Todos", "Artes": "Artes", "Logos": "Logos", "Designs": "Diseños", "Storys": "Historias", "Carrosseis": "Carruseles", "Fotografia": "Fotografía" };

const portfolioTitlesEn: Record<string, string> = {
  "Capa de Portfólio": "Portfolio Cover",
  "Logo Kenzo AI": "Kenzo AI Logo",
  "Site Barbeiro": "Barbershop Website",
  "Story Instagram": "Instagram Story",
  "Modelo de Carrossel": "Carousel Template",
  "Ensaio Fotográfico": "Photo Shoot",
  "Modelo de Logo": "Logo Template",
  "Faixa de Youtube": "YouTube Banner",
  "Convite de Aniversário": "Birthday Invitation",
  "Landing Page": "Landing Page",
  "Modelo de Estoque": "Inventory System Template",
  "Modelo Carrosseis para Arkad": "Arkad Carousels Template",
  "Modelo de Site imobiliario": "Real Estate Website Template",
  "Modelo de PetShop": "PetShop Template"
};

const portfolioTitlesEs: Record<string, string> = {
  "Capa de Portfólio": "Portada de Portafolio",
  "Logo Kenzo AI": "Logo Kenzo AI",
  "Site Barbeiro": "Sitio Web de Barbería",
  "Story Instagram": "Historia de Instagram",
  "Modelo de Carrossel": "Plantilla de Carrusel",
  "Ensaio Fotográfico": "Sesión Fotográfica",
  "Modelo de Logo": "Plantilla de Logo",
  "Faixa de Youtube": "Banner de YouTube",
  "Convite de Aniversário": "Invitación de Cumpleaños",
  "Landing Page": "Landing Page",
  "Modelo de Estoque": "Plantilla de Sistema de Inventario",
  "Modelo Carrosseis para Arkad": "Plantilla de Carruseles para Arkad",
  "Modelo de Site imobiliario": "Plantilla de Sitio Web Inmobiliario",
  "Modelo de PetShop": "Plantilla de PetShop"
};

const getTranslatedTitle = (title: string, language: string) => {
  if (language === "en") return portfolioTitlesEn[title] || title;
  if (language === "es") return portfolioTitlesEs[title] || title;
  return title;
};

const translations = {
  pt: {
    nav: { work: "Trabalhos", brands: "Marcas", about: "Sobre mim", contact: "Contato" },
    hero: { tag: "Transformando ideias em código e design", desc: "Experiências digitais imersivas, identidades visuais marcantes e desenvolvimento de alta performance." },
    work: { title: "Trabalhos Selecionados" },
    brands: { title: "Marcas que confiam no trabalho" },
    about: { title1: "Sobre", title2: "mim.", p1: "Olá, eu sou o Kenai Almeida. Aos 19 anos, residindo em Salvador, Bahia, dedico minha trajetória a construir o futuro da web.", p2: "Atuo como Programador Full Stack, Web Designer e Designer Gráfico. Minha formação em Tecnologia da Internet pelo SENAI/CIMATEC me proporcionou a base técnica necessária para entender que um bom design não é apenas visualmente atraente, mas também estruturalmente impecável e focado em conversão.", devTitle: "Desenvolvimento", devDesc: "Aplicações web modernas, rápidas e escaláveis.", uiTitle: "UI/UX Design", uiDesc: "Interfaces focadas na melhor experiência do usuário." },
    footer: { subtitle: "Elevando marcas através do design e tecnologia.", contact: "Contato" },
    modal: { missingImgs: "[ Suas Imagens de", willAppear: "aparecerão aqui ]" }
  },
  en: {
    nav: { work: "Work", brands: "Brands", about: "About me", contact: "Contact" },
    hero: { tag: "Transforming ideas into code and design", desc: "Immersive digital experiences, striking visual identities, and high-performance development." },
    work: { title: "Selected Work" },
    brands: { title: "Brands that trust my work" },
    about: { title1: "About", title2: "me.", p1: "Hello, I'm Kenai Almeida. At 19, living in Salvador, Bahia, I dedicate my journey to building the future of the web.", p2: "I work as a Full Stack Programmer, Web Designer, and Graphic Designer. My background in Internet Technology from SENAI/CIMATEC has given me the technical foundation to understand that good design is not just visually appealing, but also structurally flawless and conversion-focused.", devTitle: "Development", devDesc: "Modern, fast, and scalable web applications.", uiTitle: "UI/UX Design", uiDesc: "Interfaces focused on the best user experience." },
    footer: { subtitle: "Elevating brands through design and technology.", contact: "Contact" },
    modal: { missingImgs: "[ Your Images of", willAppear: "will appear here ]" }
  },
  es: {
    nav: { work: "Trabajos", brands: "Marcas", about: "Sobre mí", contact: "Contacto" },
    hero: { tag: "Transformando ideas en código y diseño", desc: "Experiencias digitales inmersivas, identidades visuales llamativas y desarrollo de alto rendimiento." },
    work: { title: "Trabajos Seleccionados" },
    brands: { title: "Marcas que confían en mi trabajo" },
    about: { title1: "Sobre", title2: "mí.", p1: "Hola, soy Kenai Almeida. A los 19 años, residiendo en Salvador, Bahía, dedico mi trayectoria a construir el futuro de la web.", p2: "Trabajo como Programador Full Stack, Diseñador Web y Diseñador Gráfico. Mi formación en Tecnología de Internet por el SENAI/CIMATEC me proporcionó la base técnica necesaria para entender que un buen diseño no solo es visualmente atractivo, sino también estructuralmente impecable y enfocado en la conversión.", devTitle: "Desarrollo", devDesc: "Aplicaciones web modernas, rápidas y escalables.", uiTitle: "Diseño UI/UX", uiDesc: "Interfaces enfocadas en la mejor experiencia de usuario." },
    footer: { subtitle: "Elevando marcas a través del diseño y la tecnología.", contact: "Contacto" },
    modal: { missingImgs: "[ Tus Imágenes de", willAppear: "aparecerán aquí ]" }
  }
};

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
  { id: 6, title: "Site eco-construcao", category: "Designs", link: "https://eco-construcao.vercel.app/", imageUrls: ["/img/design/eco-construcao.png"], showInAll: true },
  { id: 7, title: "Modelo de Logo", category: "Logos", imageUrls: ["/img/logo1.png"], showInAll: true },
  { id: 8, title: "Faixa de Youtube", category: "Artes", imageUrls: ["/img/enzo-body.png"], showInAll: true },
  { id: 9, title: "Modelo de Site imobiliario", category: "Designs", link: "https://modelo-imobiliaria.vercel.app/", imageUrls: ["/img/design/modelo-imobiliario.jpeg"], showInAll: true },
  { id: 10, title: "Modelo de PetShop", category: "Designs", link: "https://modelo-petshop.vercel.app/", imageUrls: ["/img/design/modelo-petshop.png"], showInAll: true },

  // --- ITENS EXTRAS (NÃO aparecem em "Todos", apenas na categoria específica) ---
  // Podes adicionar mais itens aqui seguindo este modelo:

  { id: 11, title: "Convite de Aniversário", category: "Artes", imageUrls: ["/img/convite.png"], showInAll: false },
  { id: 12, title: "Landing Page", category: "Designs", imageUrls: ["/img/modelo-landing.png"], showInAll: false },
  { id: 13, title: "Modelo de Estoque", category: "Designs", imageUrls: ["/img/design/modelo-estoque.jpeg"], showInAll: false },
  { id: 14, title: "Modelo Carrosseis para Arkad", category: "Carrosseis", imageUrls: ["/img/carrossel/carrossel1-1.png", "/img/carrossel/carrossel1-2.png", "/img/carrossel/carrossel1-3.png"], showInAll: false },
  { id: 15, title: "Ensaio Fotográfico", category: "Fotografia", imageUrls: ["/img/fotografia/foto1.png"], showInAll: false },
  { id: 16, title: "Ensaio Fotográfico", category: "Fotografia", imageUrls: ["/img/post-insta.png"], showInAll: false },
]

const categories = ["Todos", "Artes", "Logos", "Designs", "Storys", "Carrosseis", "Fotografia"];

// --- DADOS DAS MARCAS ---
type BrandItem = { type: "image"; src: string; alt: string } | { type: "text"; content: string };

const brands: BrandItem[] = [
  { type: "image", src: "/img/arkad.png", alt: "Arkad" },
  { type: "image", src: "/img/patty.png", alt: "Patty" },
  { type: "image", src: "/img/logo-barbeiro.png", alt: "Barbeiro" },
  { type: "image", src: "/img/kells.png", alt: "Kells" },
  { type: "image", src: "/img/logo-sahterapeuta.png", alt: "SahTerapeuta" },
  { type: "image", src: "/img/eco-construcao.png", alt: "Eco Construcao" },
  
  
  { type: "image", src: "/img/arkad.png", alt: "Arkad" },
  { type: "image", src: "/img/patty.png", alt: "Patty" },
  { type: "image", src: "/img/logo-barbeiro.png", alt: "Barbeiro" },
  { type: "image", src: "/img/kells.png", alt: "Kells" },
  { type: "image", src: "/img/logo-sahterapeuta.png", alt: "SahTerapeuta" },
  { type: "image", src: "/img/eco-construcao.png", alt: "Eco Construcao" }
];

export default function Home() {
  const [language, setLanguage] = useState<"pt" | "en" | "es">("pt");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[language];

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

  // Trava scroll no Modal e no Menu Mobile
  useEffect(() => {
    if (selectedItem || isLoading || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedItem, isLoading, isMobileMenuOpen]);

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

      <main className="min-h-screen relative selection:bg-blue-600 selection:text-white pb-10 w-full max-w-full overflow-x-clip">

        {/* --- HEADER FIXO --- */}
        <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3.5 sm:py-5 bg-[#030303]/85 backdrop-blur-md border-b border-zinc-900/50 transition-all">
          <div className="max-w-[1400px] mx-auto relative flex justify-between items-center h-8">
            <a href="#" className="text-xl sm:text-2xl font-black tracking-tighter text-white uppercase shrink-0">
              KENAI<span className="text-blue-500">.</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium text-zinc-400 absolute left-1/2 -translate-x-1/2">
              <a href="#trabalhos" className="hover:text-white transition-colors">{t.nav.work}</a>
              <a href="#marcas" className="hover:text-white transition-colors">{t.nav.brands}</a>
              <a href="#sobre" className="hover:text-white transition-colors">{t.nav.about}</a>
              <a href="#contato" className="hover:text-white transition-colors">{t.nav.contact}</a>
            </nav>

            {/* Right side controls: GitHub, Language Switcher & Mobile Menu Button */}
            <div className="flex items-center gap-2.5 sm:gap-4">
              {/* GitHub Link */}
              <a
                href="https://github.com/Kenai71"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors p-1"
                aria-label="GitHub de Kenai Almeida"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 hover:text-white transition-colors p-1"
                  aria-label="Selecionar Idioma"
                >
                  <Globe className="w-5 h-5" />
                  <span className="uppercase text-xs font-bold">{language}</span>
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-3 py-2 w-32 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl flex flex-col z-[70]"
                    >
                      <button onClick={() => { setLanguage("pt"); setIsLangMenuOpen(false); }} className={`px-4 py-2 text-sm text-left hover:bg-zinc-800 transition-colors ${language === "pt" ? "text-white font-bold" : "text-zinc-400"}`}>Português</button>
                      <button onClick={() => { setLanguage("en"); setIsLangMenuOpen(false); }} className={`px-4 py-2 text-sm text-left hover:bg-zinc-800 transition-colors ${language === "en" ? "text-white font-bold" : "text-zinc-400"}`}>English</button>
                      <button onClick={() => { setLanguage("es"); setIsLangMenuOpen(false); }} className={`px-4 py-2 text-sm text-left hover:bg-zinc-800 transition-colors ${language === "es" ? "text-white font-bold" : "text-zinc-400"}`}>Español</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 text-zinc-400 hover:text-white transition-colors rounded-lg bg-zinc-900/60 border border-zinc-800/60"
                aria-label="Abrir Menu"
              >
                {isMobileMenuOpen ? <XIcon className="w-5 h-5 text-white" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="md:hidden overflow-hidden border-t border-zinc-900/80 mt-3 pt-3 bg-[#030303]/95"
              >
                <nav className="flex flex-col gap-1 py-2">
                  <a
                    href="#trabalhos"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/50 transition-colors"
                  >
                    {t.nav.work}
                  </a>
                  <a
                    href="#marcas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/50 transition-colors"
                  >
                    {t.nav.brands}
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/50 transition-colors"
                  >
                    {t.nav.about}
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/50 transition-colors"
                  >
                    {t.nav.contact}
                  </a>
                  <a
                    href="https://github.com/Kenai71"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-base font-medium text-blue-400 hover:text-white hover:bg-zinc-900/50 transition-colors flex items-center gap-2.5"
                  >
                    <Github className="w-4 h-4" />
                    GitHub (Kenai71)
                  </a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Background Glows contidos dentro de viewport seguro */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] max-w-[500px] h-[50vw] max-h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] max-w-[500px] h-[50vw] max-h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        </div>

        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[100svh] flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="z-10 text-center max-w-5xl mx-auto w-full"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={!isLoading ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6 px-3.5 sm:px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md max-w-full"
            >
              <span className="text-xs sm:text-sm font-medium tracking-wide text-zinc-100 break-words">
                {t.hero.tag}
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 sm:mb-6 leading-tight break-words">
              KENAI <span className="text-gradient">DESIGN</span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed px-2">
              {t.hero.desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={!isLoading ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 sm:mt-12 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500">Scroll</span>
            <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
          </motion.div>
        </section>

        {/* --- PORTFÓLIO --- */}
        <section id="trabalhos" className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto z-10 relative scroll-mt-20 overflow-hidden">
          <div className="flex flex-col items-center mb-10 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 sm:mb-10 text-center"
            >
              {t.work.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 px-1"
            >
              <div className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm w-max sm:w-auto mx-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 shrink-0 select-none ${
                      activeFilter === cat ? "text-black font-semibold" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {activeFilter === cat && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
                      />
                    )}
                    <span className="relative z-10">
                      {language === "pt" ? cat : language === "en" ? categoriesEn[cat] : categoriesEs[cat]}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-full">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout="position"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  onClick={() => handleCardClick(item)}
                  className="group relative aspect-[4/5] bg-zinc-900/50 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800/50 hover:border-blue-500/30 transition-all"
                >
                  {/* Mostra apenas a CAPA (índice 0) no grid */}
                  {item.imageUrls && item.imageUrls.length > 0 ? (
                    <img src={item.imageUrls[0]} alt={getTranslatedTitle(item.title, language)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-800/20 group-hover:bg-zinc-800/40 transition-colors duration-300">
                      <span className="text-zinc-600 text-sm opacity-50">[ Img: {getTranslatedTitle(item.title, language)} ]</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent opacity-75 md:opacity-50 md:group-hover:opacity-85 transition-opacity duration-300" />

                  <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex justify-between items-end gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
                          {language === "pt" ? item.category : language === "en" ? categoriesEn[item.category] : categoriesEs[item.category]}
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-white truncate">{getTranslatedTitle(item.title, language)}</h3>
                      </div>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center transform scale-100 md:scale-0 md:group-hover:scale-100 transition-transform duration-300 shrink-0 ml-2 shadow-lg">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* --- CLIENTES --- */}
        <section id="marcas" className="py-16 sm:py-24 border-y border-zinc-900/50 bg-zinc-950/30 relative z-10 scroll-mt-20 overflow-hidden w-full max-w-full">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-10 sm:mb-16">
            <p className="text-center text-zinc-500 text-xs sm:text-sm uppercase tracking-[0.2em]">{t.brands.title}</p>
          </div>
          <div className="w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex items-center gap-12 sm:gap-16 md:gap-24 shrink-0 w-max px-6 sm:px-12"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center justify-center shrink-0">
                  {brand.type === "image" ? (
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="h-14 sm:h-20 md:h-28 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-600 hover:text-zinc-200 transition-colors whitespace-nowrap">
                      {brand.content}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- SOBRE MIM --- */}
        <section id="sobre" className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 scroll-mt-20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center lg:justify-start"
            >
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 relative group shrink-0 shadow-2xl">
                <img
                  src="/img/1.png"
                  alt="Kenai Almeida"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 sm:mb-8 text-center lg:text-left">
                {t.about.title1} <span className="text-blue-500">{t.about.title2}</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed text-center lg:text-left">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 text-left">
                  <div className="bg-zinc-900/30 border border-zinc-800 p-5 sm:p-6 rounded-2xl flex flex-col justify-between group">
                    <div>
                      <Code className="text-blue-500 mb-3 sm:mb-4 w-7 h-7 sm:w-8 sm:h-8" />
                      <h4 className="text-white font-bold mb-1.5 sm:mb-2 text-base sm:text-lg">{t.about.devTitle}</h4>
                      <p className="text-xs sm:text-sm text-zinc-500 mb-4">{t.about.devDesc}</p>
                    </div>
                    <a
                      href="https://github.com/Kenai71"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-auto w-fit group-hover:translate-x-0.5 duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>github.com/Kenai71</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="bg-zinc-900/30 border border-zinc-800 p-5 sm:p-6 rounded-2xl">
                    <Smartphone className="text-purple-500 mb-3 sm:mb-4 w-7 h-7 sm:w-8 sm:h-8" />
                    <h4 className="text-white font-bold mb-1.5 sm:mb-2 text-base sm:text-lg">{t.about.uiTitle}</h4>
                    <p className="text-xs sm:text-sm text-zinc-500">{t.about.uiDesc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- FOOTER / CONTATO --- */}
        <footer id="contato" className="py-12 sm:py-16 border-t border-zinc-900 bg-[#020202] relative z-10 w-full overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tighter text-white mb-2 uppercase">
                KENAI<span className="text-blue-500">.</span>
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm">{t.footer.subtitle}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 w-full md:w-auto justify-center">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <a href="https://github.com/Kenai71" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/kenai.design/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:kenaidesign22@gmail.com" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300" aria-label="E-mail">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <div className="flex flex-col text-xs sm:text-sm text-zinc-500 border-t pt-4 sm:border-t-0 sm:border-l border-zinc-800 sm:pl-6 text-center sm:text-left items-center sm:items-start w-full sm:w-auto">
                <span className="text-zinc-300 font-medium mb-0.5">{t.footer.contact}</span>
                <a href="tel:71997391105" className="hover:text-zinc-300 transition-colors">(71) 99739-1105</a>
                <a href="mailto:kenaidesign22@gmail.com" className="hover:text-zinc-300 transition-colors break-all">kenaidesign22@gmail.com</a>
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
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6 md:p-12 backdrop-blur-sm overflow-hidden"
              onClick={() => setSelectedItem(null)}
            >
              <button
                className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-zinc-900/90 hover:bg-zinc-800 text-white rounded-full transition-colors z-[120] shadow-lg"
                onClick={() => setSelectedItem(null)}
                aria-label="Fechar modal"
              >
                <XIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                className="relative w-full max-w-6xl h-[85vh] md:h-[90vh] bg-zinc-950 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >

                {/* --- ÁREA DA IMAGEM E CARROSSEL HORIZONTAL --- */}
                <div className="relative flex-1 flex items-center justify-center overflow-hidden p-2 sm:p-4 md:p-8 bg-black">
                  {selectedItem.imageUrls && selectedItem.imageUrls.length > 0 ? (
                    <>
                      {/* Imagem grande, centralizada e 100% responsiva (object-contain) */}
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          src={selectedItem.imageUrls[currentImageIndex]}
                          alt={`${getTranslatedTitle(selectedItem.title, language)} - ${currentImageIndex + 1}`}
                          className="max-w-full max-h-full object-contain select-none"
                        />
                      </AnimatePresence>

                      {/* Setas (Apenas se tiver mais de 1 foto) */}
                      {selectedItem.imageUrls.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center bg-black/60 hover:bg-black/85 text-white rounded-full backdrop-blur-sm transition-colors z-10 shadow-md"
                            aria-label="Imagem anterior"
                          >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 ml-[-2px]" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center bg-black/60 hover:bg-black/85 text-white rounded-full backdrop-blur-sm transition-colors z-10 shadow-md"
                            aria-label="Próxima imagem"
                          >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 mr-[-2px]" />
                          </button>

                          {/* Bolinhas Indicadoras Embaixo */}
                          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                            {selectedItem.imageUrls.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}`}
                                aria-label={`Ir para imagem ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-center p-4">
                      <span className="text-zinc-500 text-base sm:text-xl px-4">{t.modal.missingImgs} {getTranslatedTitle(selectedItem.title, language)} {t.modal.willAppear}</span>
                    </div>
                  )}
                </div>

                {/* Informações na barra de baixo */}
                <div className="p-4 sm:p-6 bg-zinc-900 shrink-0 border-t border-zinc-800/50">
                  <p className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1">
                    {language === "pt" ? selectedItem.category : language === "en" ? categoriesEn[selectedItem.category] : categoriesEs[selectedItem.category]}
                  </p>
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white truncate">{getTranslatedTitle(selectedItem.title, language)}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </>
  );
}