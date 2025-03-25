"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CardsCarousel() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animatedCardsComponent");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <motion.div
      id="animatedCardsComponent"
      initial={{ y: "20%", opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-full py-20 flex flex-col items-center justify-center bg-background/30"
    >
      <h2 className="max-w-7xl pl-4 mx-auto z-20 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Filosofia
      </h2>
      <Carousel items={cards} />
    </motion.div>
  );
}

const data = [
  {
    category: "Flyra",
    title: "Nossa Missão",
    content:
      "Nossa missão é utilizar tecnologia de ponta para proteger o meio ambiente, prevenindo desastres naturais e minimizando os impactos ambientais através de soluções inteligentes e acessíveis.",
    src: "https://images.unsplash.com/photo-1532989029401-439615f3d4b4",
  },
  {
    category: "Flyra",
    title: "Nossa Visão",
    content:
      "Buscamos ser referência em monitoramento ambiental utilizando drones e inteligência artificial, tornando-se uma ferramenta essencial para governos, bombeiros e entidades ambientais na preservação da natureza.",
    src: "https://images.unsplash.com/photo-1556983852-43bf21186b2a",
  },
  {
    category: "Flyra",
    title: "Nossos Valores",
    content: [
      "Inovação: Investimos constantemente em pesquisa e desenvolvimento para aprimorar nossas soluções.\n",
      "Sustentabilidade: Nosso compromisso é com a preservação do meio ambiente e a redução dos impactos ambientais.\n",
      "Eficiência: Criamos ferramentas de monitoramento rápidas e precisas para garantir respostas ágeis.\n",
      "Acessibilidade: Desenvolvemos tecnologias acessíveis para que mais instituições possam utilizá-las sem necessidade de infraestrutura complexa.",
    ],
    src: "https://images.unsplash.com/photo-1647314458299-0aa2cf7ff1b3",
  },
];
