"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Mail, ArrowUpRight, Code, Palette, Smartphone } from "lucide-react";

// --- DADOS TEMPORÁRIOS (Para você substituir depois) ---
const portfolioItems = [
  { id: 1, title: "[Nome da Arte 1]", category: "Artes" },
  { id: 2, title: "[Nome do Logo 1]", category: "Logos" },
  { id: 3, title: "[Nome do Design 1]", category: "Designs" },
  { id: 4, title: "[Nome do Story 1]", category: "Storys" },
  { id: 5, title: "[Nome do Carrossel 1]", category: "Carrosseis" },
  { id: 6, title: "[Nome da Foto 1]", category: "Fotografia" },
  { id: 7, title: "[Nome do Logo 2]", category: "Logos" },
  { id: 8, title: "[Nome da Arte 2]", category: "Artes" },
];

const categories = ["Todos", "Artes", "Logos", "Designs", "Storys", "Carrosseis", "Fotografia"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredItems = activeFilter === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <main className="min-h-screen relative selection:bg-blue-600 selection:text-white">
      
      {/* --- BACKGROUND GLOW EFFECTS --- */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 text-center max-w-5xl"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md"
          >
            <span className="text-sm font-medium tracking-wide text-zinc-300">
              Transformando ideias em código e design
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6">
            KENAI <span className="text-gradient">DESIGN</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Experiências digitais imersivas, identidades visuais marcantes e desenvolvimento de alta performance.
          </p>
        </motion.div>

        {/* Indicador de Scroll */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
        </motion.div>
      </section>

      {/* --- PORTFÓLIO E FILTROS --- */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto z-10 relative">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-bold mb-10 tracking-tight"
          >
            Trabalhos Selecionados
          </motion.h2>
          
          {/* Filtros Animados */}
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
                  <motion.div 
                    layoutId="active-pill" 
                    className="absolute inset-0 bg-white rounded-full" 
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid de Projetos com AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="group relative aspect-[4/5] bg-zinc-900/50 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800/50 hover:border-blue-500/30 transition-all"
              >
                {/* Placeholder para a Imagem */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-800/20 group-hover:bg-zinc-800/40 transition-colors duration-500">
                  <span className="text-zinc-600 font-mono text-sm opacity-50">[ Imagem: {item.title} ]</span>
                </div>
                
                {/* Overlay de Informações (Revela no Hover) */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-blue-400 text-xs font-mono uppercase tracking-wider mb-2">{item.category}</p>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
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
      <section className="py-24 border-y border-zinc-900/50 bg-zinc-950/30 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 overflow-hidden">
          <p className="text-center text-zinc-500 font-mono text-sm uppercase tracking-[0.2em] mb-12">
            Marcas que confiam no trabalho
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholders de Clientes */}
            <span className="text-2xl md:text-3xl font-bold font-serif">[ Logo Cliente 1 ]</span>
            <span className="text-2xl md:text-3xl font-bold font-serif">[ Logo Cliente 2 ]</span>
            <span className="text-2xl md:text-3xl font-bold font-serif">[ Logo Cliente 3 ]</span>
            <span className="text-2xl md:text-3xl font-bold font-serif">[ Logo Cliente 4 ]</span>
          </div>
        </div>
      </section>

      {/* --- SOBRE MIM --- */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 relative group">
              {/* Placeholder da sua Foto */}
              <div className="absolute inset-0 flex items-center justify-center text-zinc-600 flex-col gap-4">
                <Palette className="w-12 h-12 opacity-50" />
                <span className="text-lg font-mono tracking-widest uppercase">[ Foto Kenai Almeida ]</span>
              </div>
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
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
              Sobre <span className="text-blue-500">mim.</span>
            </h2>
            <div className="space-y-6 text-xl text-zinc-400 font-light leading-relaxed">
              <p>
                Olá, eu sou o Kenai Almeida. Aos 19 anos, residindo em Salvador, Bahia, dedico minha trajetória a construir o futuro da web.
              </p>
              <p>
                Atuo como Programador Full Stack, Web Designer e Designer Gráfico. Minha formação em Tecnologia da Internet pelo SENAI/CIMATEC me proporcionou a base técnica necessária para entender que um bom design não é apenas visualmente atraente, mas também estruturalmente impecável e focado em conversão.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
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

      {/* --- FOOTER --- */}
      <footer className="py-16 border-t border-zinc-900 bg-[#020202] relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black tracking-tighter text-white mb-2">
              KENAI<span className="text-blue-500">.</span>
            </h3>
            <p className="text-zinc-500 text-sm">Elevando marcas através do design e tecnologia.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/kenai.design/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:kenaidesign22@gmail.com" 
              className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <div className="flex flex-col text-sm text-zinc-500 ml-4 border-l border-zinc-800 pl-6">
              <span className="text-zinc-300 font-medium">Contato</span>
              <span>(71) 99338-3703</span>
              <span>kenaidesign22@gmail.com</span>
            </div>
          </div>

        </div>
      </footer>
      
    </main>
  );
}