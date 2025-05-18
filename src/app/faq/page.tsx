import Footer from "@/components/global/footer";
import Navbar from "@/components/shared/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import logo from "@/assets/logos/logo-mini-260x260.png";
import { faqItems } from "@/data/faq";
import { BoxAnimate } from "@/components/shared/box-animate";
import { TextShadow } from "@/components/shared/text-shadow";

export default function FAQPage() {
  return (
    <div className="w-screen min-h-screen relative">
      <div className="absolute top-0 z-10 h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(77,139,255,0.3),rgba(255,255,255,0))]" />
      <Navbar />
      <div className="w-screen h-full relative bg-background pt-36">
        <div className="flex flex-col items-center h-full gap-6 z-20">
          <BoxAnimate
            className="flex flex-col items-center h-full z-20"
            type="fade"
            delay={0.1}
          >
            <Image src={logo} width={120} alt="Flyra logo" className="z-20" />
            <TextShadow className="z-20">
              <h1 className="max-w-96 text-5xl font-bold text-center z-20">
                Perguntas Frequentes
              </h1>
            </TextShadow>
            <p className="max-w-96 text-sm text-center text-secondary z-20 px-4 md:text-lg">
              Aqui estão algumas perguntas frequentes sobre o nosso produto e
              serviços.
            </p>
          </BoxAnimate>
          <Accordion
            type="single"
            collapsible
            className="w-full px-8 md:max-w-[36rem] z-20 flex flex-col "
          >
            {faqItems.map((item, index) => (
              <BoxAnimate
                width="100%"
                key={index}
                type="fade"
                delay={0.5 + index * 0.05}
              >
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </BoxAnimate>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
