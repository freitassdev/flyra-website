import { Spotlight } from "@/components/ui/spotlight-new";
import backgroundLogo from "@/assets/images/background-logo.png";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";
import { WordRotate } from "@/components/home/word-rotate";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LucideSparkles } from "lucide-react";
export default function Home() {
  return (
    <div className="w-full h-full max-w-[100vw] relative">
      <Navbar />
      <Spotlight />
      <div className="flex flex-col items-center justify-center gap-4 w-full h-[100dvh]">
        <div className="flex flex-col items-center text-center gap-4">
          <HoverBorderGradient className="flex flex-row gap-2 justify-center items-center">
            <LucideSparkles className="text-foreground size-4" />
            Faça o download do nosso aplicativo!
          </HoverBorderGradient>
          <div className="flex flex-col font-bold text-6xl">
            <div className="flex flex-row gap-2">
              <h1 className="">Inteligência artificial que</h1>
              <WordRotate
                className="text-primary"
                words={["detecta", "protege", "previne"]}
              />
            </div>
            <h1>do céu à terra.</h1>
          </div>
          <p className="max-w-2xl">
            A Flyra é um projeto de TCC que desenvolve{" "}
            <span className="text-primary">
              drones com inteligência artificial
            </span>{" "}
            para{" "}
            <span className="text-primary">detectar e prevenir incêndios</span>,
            oferecendo soluções rápidas e eficazes para{" "}
            <span className="text-primary">proteger o meio ambiente</span>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
