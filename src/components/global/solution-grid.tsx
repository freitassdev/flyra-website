import { BentoGridItem } from "@/components/ui/bento-grid";
import { PieChart, MapPin, AlignCenter, Shield, Wind } from "lucide-react";
import Image from "next/image";
import { Safari } from "../magicui/safari";

export default function SolutionGrid() {
  const topItems = solutionItems.slice(0, 3);
  const rightItems = solutionItems.slice(4, 7);
  const mainItem = solutionItems[3];

  return (
    <div className="max-w-8xl mx-auto mt-4 p-4 bg-zinc-950/10 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topItems.map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
            header={
              <div className="w-full h-[120px] rounded-xl overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            }
            icon={getIcon(item.icon || "")}
            className="h-[250px]"
          />
        ))}

        <div className="md:col-span-2 md:row-span-2">
          <BentoGridItem
            key={mainItem.id}
            title={mainItem.title}
            description={mainItem.description}
            header={
              <div className="w-full h-full rounded-xl overflow-hidden">
                <Safari
                  url="flyra.tech"
                  className="relative w-full h-full"
                  videoSrc="https://res.cloudinary.com/dtvc1ejqk/video/upload/v1747398500/desktop-flyra-video_cnawdq.mp4"
                />
              </div>
            }
            className="h-[520px]"
          />
        </div>

        {rightItems.map((item, index) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
            header={
              <div className="w-full h-[120px] rounded-xl overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            }
            icon={getIcon(item.icon || "")}
            className="h-[250px]"
          />
        ))}
      </div>
    </div>
  );
}

function getIcon(iconName: string) {
  switch (iconName) {
    case "pie-chart":
      return <PieChart className="h-5 w-5 text-neutral-500" />;
    case "map-pin":
      return <MapPin className="h-5 w-5 text-neutral-500" />;
    case "align-center":
      return <AlignCenter className="h-5 w-5 text-neutral-500" />;
    case "shield":
      return <Shield className="h-5 w-5 text-neutral-500" />;
    case "wind":
      return <Wind className="h-5 w-5 text-neutral-500" />;
  }
}

const solutionItems = [
  {
    id: 1,
    title: "Monitoramento em Tempo Real",
    description:
      "Utiliza inteligência artificial avançada para a identificação de incêndios e monitora o nível das chamas e da fumaça.",
    icon: "pie-chart",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1692713462512-dd371ecf0f82?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Relatórios Precisos",
    description:
      "Relata informações precisas e completas para as equipes em campo e possíveis locais com alta probabilidade de incêndio.",
    icon: "map-pin",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Mapeamento Detalhado",
    description:
      "Mapeia todos os locais percorridos com detalhes obtidos em cada ponto (umidade, temperatura, entre outros).",
    icon: "align-center",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1722082840073-909aea44803f?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Tecnologia Avançada",
    description:
      "Nosso drone utiliza inteligência artificial para identificar focos de incêndio em tempo real, analisando padrões de fumaça e calor para detectar problemas antes que se tornem incontroláveis.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop",
    size: "large",
  },
  {
    id: 5,
    title: "Prevenção Eficaz",
    description:
      "Analisa condições climáticas, umidade e histórico de queimadas para prever riscos e prevenir incêndios antes que ocorram.",
    icon: "shield",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Resposta Rápida",
    description:
      "Fornece informações detalhadas para bombeiros, órgãos ambientais e proprietários rurais, garantindo uma resposta rápida e eficiente.",
    icon: "wind",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1698094300197-978e43cd19d3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
