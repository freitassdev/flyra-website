import { CardsCarousel } from "./cards-carrousel";
import { AnimatedTooltipPreview } from "./team-tooltip";
import { TextAnimate } from "../magicui/text-animate";

export default function AboutUsPage() {
  return (
    <div className="w-full h-full relative bg-background bg-noise bg-fixed overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <div className="flex flex-col items-center justify-center h-screen">
        <TextAnimate
          className="text-6xl font-bold z-20"
          animation="blurInUp"
          by="character"
          duration={0.5}
          delay={0.2}
        >
          {"História"}
        </TextAnimate>
        <TextAnimate
          className="w-1/3 text-lg text-justify z-20"
          animation="blurInUp"
          by="word"
          duration={0.5}
          delay={0.2}
        >
          {
            "    A Flyra nasceu com o objetivo de integrar tecnologia avançada para solucionar problemas ambientais em áreas verdes e urbanas. Nosso projeto surgiu da preocupação com a degradação ambiental e a necessidade de respostas rápidas e eficientes no combate a incêndios florestais. Através do uso de drones equipados com inteligência artificial, buscamos criar um sistema inovador para monitoramento e prevenção de desastres."
          }
        </TextAnimate>
      </div>
      <CardsCarousel />
      <AnimatedTooltipPreview />
    </div>
  );
}
