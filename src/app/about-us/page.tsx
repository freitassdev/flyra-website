import { CardsCarousel } from "@/components/global/cards-carrousel";
import { AnimatedTooltipPreview } from "@/components/global/team-tooltip";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/global/footer";

export default function AboutUs() {
  return (
    <div className="w-full relative">
      <Navbar />
      <div className="w-screen h-full relative bg-background">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="absolute h-screen w-screen bg-background -z-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:14px_24px]" />
            <div className="absolute right-1/2 top-[8%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_300px_at_50%_300px,rgba(77,139,255,.15),#171821a1)]" />
            <div className="w-screen h-10 absolute bottom-0 bg-background/70 blur-sm" />
          </div>
          <h1 className="text-6xl font-bold z-20">História</h1>
          <p className="w-full text-lg text-justify z-20 max-w-2xl px-8">
            A Flyra nasceu com o objetivo de integrar tecnologia avançada para
            solucionar problemas ambientais em áreas verdes e urbanas. Nosso
            projeto surgiu da preocupação com a degradação ambiental e a
            necessidade de respostas rápidas e eficientes no combate a incêndios
            florestais. Através do uso de drones equipados com inteligência
            artificial, buscamos criar um sistema inovador para monitoramento e
            prevenção de desastres.
          </p>
        </div>
        <CardsCarousel />
        <AnimatedTooltipPreview />
      </div>
      <Footer />
    </div>
  );
}
