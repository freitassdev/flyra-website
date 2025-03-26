import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { ChevronRight } from "lucide-react";
import { Spotlight } from "../ui/spotlight-new";
import { WordRotate } from "../magicui/word-rotate";
import { AuroraText } from "../magicui/aurora-text";

export default function HeroSection() {
  const words = ["detecta", "previne", "protege"];

  return (
    <div className="w-full h-screen relative flex flex-1 overflow-hidden transition-all">
      <Spotlight />
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <h1 className="w-1/2 text-6xl text-zinc-50 font-bold text-center">
          <AuroraText speed={0.7}>Inteligência Artificial</AuroraText> que
          <span className="inline-block">
            <WordRotate
              className="text-6xl text-zinc-50 font-bold w-[15rem]"
              duration={3000}
              words={words}
            />
          </span>
          do céu à terra
        </h1>
        <p className="w-1/2 text-center text-zinc-100/80">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, quos
          magnam. Dolores odit, voluptates deleniti ex officia repellendus dolor
          dolorum sequi, ad eum aspernatur. Placeat repellendus explicabo
          excepturi maxime libero.
        </p>
        <div className="flex gap-7 mt-6">
          <InteractiveHoverButton>Explorar</InteractiveHoverButton>
          <button className="h-full flex justify-center items-center gap-2 rounded text-zinc-50 font-semibold pl-4 pr-2 hover:bg-zinc-50/30 transition-all hover:translate-x-1">
            <p>Contate-nos</p> <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
