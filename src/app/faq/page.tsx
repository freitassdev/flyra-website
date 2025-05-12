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

const faqItems = [
  {
    question: "O que é a Flyra?",
    answer:
      "A Flyra é um grupo focado em integrar tecnologias avançadas para monitorar e prevenir desastres ambientais, especialmente queimadas, utilizando drones com inteligência artificial.",
  },
  {
    question: "Qual o objetivo principal do projeto?",
    answer:
      "Detectar focos de incêndio em tempo real e fornecer dados precisos para auxiliar bombeiros, órgãos ambientais e proprietários rurais na prevenção e combate ao fogo.",
  },
  {
    question: "O projeto está em qual fase?",
    answer:
      "Atualmente, o projeto está em fase de prototipagem, com testes sendo realizados em ambientes simulados.",
  },
  {
    question: "Como o drone detecta os incêndios?",
    answer:
      "Ele utiliza sensores de fumaça, temperatura e umidade, além de inteligência artificial para identificar focos de incêndio com base em dados ambientais e padrões visuais.",
  },
  {
    question: "O drone pode voar em qualquer lugar?",
    answer:
      "Não. Ele não pode entrar em áreas densas sob a copa das árvores, e seu desempenho pode ser afetado por condições climáticas adversas.",
  },
  {
    question: "Quais tecnologias estão sendo usadas?",
    answer:
      "Raspberry Pi 5, sensores de fumaça, temperatura e umidade, GPS, inteligência artificial, e os frameworks FastAPI, NestJS, Electron, React Native e Docker.",
  },
  {
    question: "Quem pode acessar o sistema da Flyra?",
    answer:
      "Organizações credenciadas, como unidades dos Bombeiros ou órgãos ambientais.",
  },
  {
    question: "Quais são os níveis de acesso?",
    answer:
      "Observador, Operador, Supervisor e Administrador. Cada um com permissões específicas para operar e gerenciar os drones e as informações.",
  },
  {
    question: "Preciso de licença para operar o drone?",
    answer:
      "Sim. Operadores precisam ter licença para voar acima de 120 metros ou fora do campo de visão.",
  },
  {
    question: "O sistema funciona offline?",
    answer:
      "O drone possui um backend local que permite funcionamento autônomo. Os dados são sincronizados posteriormente com o sistema central.",
  },
  {
    question: "Como é feita a integração entre as partes do sistema?",
    answer:
      "O sistema é dividido em três partes: backend central (NestJS), backend local no drone (FastAPI) e aplicações cliente (Electron e React Native).",
  },
  {
    question: "O sistema precisa de internet o tempo todo?",
    answer:
      "Para sincronização e comunicação com o backend central, sim. Mas o processamento e a detecção local funcionam de forma autônoma.",
  },
  {
    question: "O drone da Flyra segue as normas legais?",
    answer:
      "Sim. O projeto está sendo desenvolvido de acordo com as normas da ANAC, ANATEL e DECEA, incluindo o Certificado de Autorização de Voo Experimental (CAVE).",
  },
];

export default function FAQPage() {
  return (
    <div className="w-screen min-h-screen relative">
      <div className="absolute top-0 z-10 h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(77,139,255,0.3),rgba(255,255,255,0))]" />
      <Navbar />
      <div className="w-screen h-full relative bg-background pt-36">
        <div className="flex flex-col items-center h-full gap-6 z-20">
          <Image src={logo} width={120} alt="Flyra logo" className="z-20" />
          <h1 className="max-w-96 text-5xl font-bold text-center z-20">
            Perguntas Frequentes
          </h1>
          <p className="max-w-96 text-lg text-center z-20">
            Aqui estão algumas perguntas frequentes sobre o nosso produto e
            serviços.
          </p>
          <Accordion
            type="single"
            collapsible
            className="w-full px-8 md:max-w-[36rem] z-20"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                className=""
                value={`item-${index + 1}`}
              >
                <AccordionTrigger className="font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-normal">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
