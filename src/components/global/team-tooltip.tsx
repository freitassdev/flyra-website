"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
// import logo from "../../assets/logos/logo-mini-80x80.png";

const people = [
  {
    id: 1,
    name: "Daniel Bueno",
    designation: "Desenvolvedor",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f",
  },
  {
    id: 2,
    name: "Matheus Pascheto",
    designation: "Sub-gerente",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f",
  },
  {
    id: 3,
    name: "Michel Freitas",
    designation: "Gerente",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f",
  },
  {
    id: 4,
    name: "Leonardo Elias",
    designation: "Documentação",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f",
  },
  {
    id: 5,
    name: "Lucas Goulart",
    designation: "Pesquisador",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f",
  },
  {
    id: 6,
    name: "Ryan Santos",
    designation: "Documentação",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f",
  },
  {
    id: 7,
    name: "Nicolas Alves",
    designation: "Engenheiro do Drone",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f",
  },
  {
    id: 8,
    name: "Pedro Lucas",
    designation: "Marketing",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f",
  },
  {
    id: 9,
    name: "Gustavo Oliveira",
    designation: "Designer",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f",
  },
  {
    id: 10,
    name: "Vinicius Santos",
    designation: "Designer",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
