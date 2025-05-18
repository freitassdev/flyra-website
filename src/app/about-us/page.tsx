import { CardsCarousel } from "@/components/global/cards-carrousel";
import { AnimatedTooltipPreview } from "@/components/global/team-tooltip";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/global/footer";
import { Timeline } from "@/components/ui/timeline";
import { timelineItems } from "@/data/timeline";
import { BoxAnimate } from "@/components/shared/box-animate";
import { TextShadow } from "@/components/shared/text-shadow";

export default function AboutUs() {
  return (
    <div className="w-full relative">
      <Navbar />
      <div className="w-full h-full relative bg-background">
        <div className="flex flex-col items-center justify-center pt-36">
          <div className="absolute h-full w-full bg-background -z-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:14px_24px]" />
            <div className="absolute right-1/2 top-[30%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_300px_at_50%_300px,rgba(77,139,255,.15),#171821a1)]" />
            <div className="w-screen h-10 absolute bottom-0 bg-background/70 blur-sm" />
          </div>
          <BoxAnimate duration={0.6} delay={0.05} type="fade">
            <TextShadow>
              <h1 className="text-6xl md:text-8xl font-bold z-20 pl-4">
                Nossa História
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold z-20 pl-5">
                e Trajetória
              </h1>
            </TextShadow>
            <Timeline data={timelineItems} />
          </BoxAnimate>
        </div>
        <BoxAnimate className="w-screen bg-background">
          <CardsCarousel />
        </BoxAnimate>
        <BoxAnimate duration={0.3} delay={0.6} className="w-screen">
          <AnimatedTooltipPreview />
        </BoxAnimate>
      </div>
      <Footer />
    </div>
  );
}
