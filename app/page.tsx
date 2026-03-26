"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";

// --- DADOS DO PORTFÓLIO ---
const portfolioItems = [
  { id: 1, title: "Identidade Visual Tech", category: "Logos" },
  { id: 2, title: "Campanha de Lançamento", category: "Artes" },
  { id: 3, title: "Interface de Aplicativo", category: "Designs" },
  { id: 4, title: "Post Interativo", category: "Storys" },
  { id: 5, title: "Estratégia de Conteúdo", category: "Carrosséis" },
  { id: 6, title: "Ensaio Corporativo", category: "Fotografia" },
  { id: 7, title: "Rebranding Completo", category: "Logos" },
  { id: 8, title: "Landing Page Premium", category: "Designs" },
];

const categories = ["Todos", "Artes", "Logos", "Designs", "Storys", "Carrosséis", "Fotografia"];

// --- ANIMAÇÕES PADRÃO ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredItems = activeFilter === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-blue-500 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Efeito de luz no fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="z-10 text-center max-w-4xl"
        >
          <motion.h2 variants={fadeUp} className="text-blue-500 font-mono tracking-widest text-sm mb-4 uppercase">
            Kenai Design
          </motion.h2>
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 text-white">
            Criando <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">experiências</span> digitais.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Design que converte e tecnologia que impressiona. Soluções completas para marcas que buscam inovação e impacto visual.
          </motion.p>
        </motion.div>
      </section>

      {/* --- PORTFÓLIO COM FILTROS --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Trabalhos Selecionados</h2>
          
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat 
                    ? "bg-white text-black" 
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid Animado */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-end p-6 border border-zinc-800 hover:border-blue-500/50 transition-colors"
              >
                {/* Aqui vai a imagem do projeto no futuro. O bg-zinc-800 é um placeholder */}
                <div className="absolute inset-0 bg-zinc-800/50 group-hover:scale-105 transition-transform duration-500" />
                
                <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-blue-400 text-sm font-mono mb-2">{item.category}</p>
                  <h3 className="text-2xl font-bold text-white flex items-center justify-between">
                    {item.title}
                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- CLIENTES --- */}
      <section className="py-24 border-y border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-10">
            Marcas que confiam
          </motion.h3>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {/* Placeholders para Logos de Clientes */}
            <div className="text-2xl font-bold font-serif">[ Cliente 01 ]</div>
            <div className="text-2xl font-bold font-serif">[ Cliente 02 ]</div>
            <div className="text-2xl font-bold font-serif">[ Cliente 03 ]</div>
            <div className="text-2xl font-bold font-serif">[ Cliente 04 ]</div>
          </motion.div>
        </div>
      </section>

      {/* --- SOBRE MIM --- */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-zinc-900">
            {/* Placeholder da Foto da Marca/Sua Foto */}
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 flex-col">
              <span className="text-lg">[ Foto da Marca / Kenai Almeida ]</span>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Muito prazer,<br/>sou o Kenai.</h2>
            <div className="space-y-6 text-lg text-zinc-400">
              <p>
                Tenho 19 anos, sou de Salvador, Bahia, e atuo como Programador Full Stack, Web Designer e Designer Gráfico. 
              </p>
              <p>
                Sou formado em Tecnologia da Internet pelo SENAI/CIMATEC. Essa base técnica unida à minha paixão pelo design me permite construir projetos que não são apenas visualmente deslumbrantes, mas estruturalmente robustos e otimizados.
              </p>
              <p>
                Meu foco é transformar ideias abstratas em identidades visuais e aplicações web interativas que destacam marcas no mercado digital.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tighter text-white">
            KENAI<span className="text-blue-500">.DESIGN</span>
          </div>
          
          <div className="flex gap-6">
            <a href="https://www.instagram.com/kenai.design/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              <span className="hidden sm:inline">@kenai.design</span>
            </a>
            <a href="mailto:kenaidesign22@gmail.com" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">kenaidesign22@gmail.com</span>
            </a>
            <a href="https://wa.me/5571993383703" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">(71) 99338-3703</span>
            </a>
          </div>
        </div>
      </footer>
      
    </main>
  );
}