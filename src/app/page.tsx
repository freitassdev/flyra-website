import { Spotlight } from "@/components/ui/spotlight-new";
import Footer from "@/components/global/footer";
import Navbar from "@/components/shared/navbar";
import { WordRotate } from "@/components/home/word-rotate";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LucideSparkles } from "lucide-react";
import Link from "next/link";
import ProblemsSection from "@/components/home/problems-section";
import Image from "next/image";
import ScrollAnimate from "@/assets/images/scroll-animate.gif";
import { Button } from "@/components/ui/button";
import SolutionSection from "@/components/home/solution-section";

export default function Home() {
  return (
    <div className="w-full h-full max-w-[100vw] relative">
      <Navbar />
      <Spotlight />
      <div className="flex flex-col items-center justify-center gap-4 w-full h-screen">
        <div className="flex flex-col items-center text-center gap-4">
          <Link href="/download">
            <HoverBorderGradient className="flex flex-row gap-2 justify-center items-center">
              <LucideSparkles className="text-foreground size-4" />
              Faça o download do nosso aplicativo!
            </HoverBorderGradient>
          </Link>
          <div className="flex flex-col font-bold max-sm:text-xl max-md:text-3xl md:text-5xl lg:text-6xl">
            <div className="flex flex-row gap-2">
              <h1>Inteligência artificial que</h1>
              <WordRotate
                className="text-primary"
                words={["detecta", "protege", "previne"]}
              />
            </div>
            <h1>do céu à terra.</h1>
          </div>
          <p className="max-w-2xl text-xs sm:text-sm md:text-base">
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
        <div className="relative w-8 top-32">
          <Image src={ScrollAnimate} alt="" className=""></Image>
        </div>
      </div>
      <ProblemsSection />
      <SolutionSection />
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary/10 p-12 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para proteger o meio ambiente?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Junte-se a nós nessa missão de utilizar tecnologia avançada para
            proteger nossas florestas e áreas verdes. Faça o download do nosso
            aplicativo ou entre em contato para saber mais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              className="h-full px-8 py-3 rounded-full"
            >
              <Link href="/download">Download</Link>
            </Button>
            <Button variant="outline" className="h-full px-8 py-3">
              <Link href="/contact">Entre em contato</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
