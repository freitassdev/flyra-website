"use client";
import React, { useEffect, useState } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const people = [
  {
    id: 1,
    name: "Daniel Bueno",
    designation: "Desenvolvedor",
    image: "/images/team/daniel.jpeg",
  },
  {
    id: 2,
    name: "Matheus Pascheto",
    designation: "Sub-gerente/Desenvolvedor",
    image: "/images/team/matheus.jpeg",
  },
  {
    id: 3,
    name: "Michel Freitas",
    designation: "Gerente/Desenvolvedor",
    image: "/images/team/michel.jpg",
  },
  {
    id: 4,
    name: "Leonardo Elias",
    designation: "Pesquisador de Campo/Documentação",
    image: "/images/team/leonardo.jpeg",
  },
  {
    id: 5,
    name: "Lucas Goulart",
    designation: "Engenheiro/Pesquisador de Campo",
    image: "/images/team/lucas.jpeg",
  },
  {
    id: 6,
    name: "Ryan Santos",
    designation: "Designer/Documentação",
    image: "/images/team/ryan.jpeg",
  },
  {
    id: 7,
    name: "Nicolas Alves",
    designation: "Engenheiro/Pesquisador de Campo",
    image: "/images/team/nicolas.jpeg",
  },
  {
    id: 8,
    name: "Pedro Lucas",
    designation: "Marketing/Documentação",
    image: "/images/team/pedro.png",
  },
  {
    id: 9,
    name: "Gustavo Oliveira",
    designation: "Marketing/Designer",
    image: "/images/team/gustavo.jpeg",
  },
  {
    id: 10,
    name: "Vinicius Santos",
    designation: "Marketing/Designer",
    image: "/images/team/vinicius.jpeg",
  },
];

export function AnimatedTooltipPreview() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animatedTeamComponent");
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

  return (
    <motion.div
      id="animatedTeamComponent"
      initial={{ y: "10%", opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-[50vh] flex flex-col items-center justify-center gap-5 py-72"
    >
      <h1 className="text-6xl font-bold z-20">Nosso Time</h1>
      <div className="flex flex-row items-center justify-center w-full">
        <AnimatedTooltip items={people} />
      </div>
      <button className="py-4 flex justify-center items-center mt-6 gap-2 rounded text-zinc-50 font-semibold pl-4 pr-2 hover:bg-zinc-50/30 transition-all hover:translate-x-1 z-20">
        <p>Contate-nos</p> <ChevronRight />
      </button>
    </motion.div>
  );
}
