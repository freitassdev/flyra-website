import Link from "next/link";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { ChevronRight } from "lucide-react";

const people = [
  {
    id: 1,
    name: "Daniel Bueno",
    designation: "Desenvolvedor",
    image: "/images/team/daniel.jpeg",
  },
  {
    id: 2,
    name: "Gustavo Oliveira",
    designation: "Marketing/Designer",
    image: "/images/team/gustavo.jpeg",
  },
  {
    id: 3,
    name: "Leonardo Elias",
    designation: "Pesquisador de Campo/Documentação",
    image: "/images/team/leonardo.jpeg",
  },
  {
    id: 4,
    name: "Lucas Goulart",
    designation: "Engenheiro/Pesquisador de Campo",
    image: "/images/team/lucas.jpeg",
  },
  {
    id: 5,
    name: "Matheus Pascheto",
    designation: "Sub-gerente/Desenvolvedor",
    image: "/images/team/matheus.jpeg",
  },
  {
    id: 6,
    name: "Michel Freitas",
    designation: "Gerente/Desenvolvedor",
    image: "/images/team/michel.jpg",
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
    name: "Ryan Santos",
    designation: "Designer/Documentação",
    image: "/images/team/ryan.jpeg",
  },
  {
    id: 10,
    name: "Vinicius Santos",
    designation: "Marketing/Designer",
    image: "/images/team/vinicius.jpeg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div
      id="animatedTeamComponent"
      className="h-[50vh] flex flex-col items-center justify-center gap-5 py-72"
    >
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(77,139,255,.15),rgba(255,255,255,0))]" />
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(77,139,255,.15),rgba(255,255,255,0))]" />
      </div>
      <h1 className="text-6xl font-bold z-20">Nosso Time</h1>
      <div className="flex flex-row items-center justify-center w-full">
        <AnimatedTooltip items={people} />
      </div>
      <Link href="/contact">
        <button className="py-4 flex justify-center items-center mt-6 gap-2 rounded text-foreground font-semibold pl-4 pr-2 hover:bg-zinc-50/30 transition-all hover:translate-x-1 z-20">
          <p>Contate-nos</p> <ChevronRight />
        </button>
      </Link>
    </div>
  );
}
