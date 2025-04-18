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

export default function FAQPage() {
  return (
    <div className="w-screen min-h-screen relative">
      <div className="absolute top-0 z-10 h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(77,139,255,0.3),rgba(255,255,255,0))]" />
      <Navbar />
      <div className="w-screen h-full relative bg-background pt-36">
        <div className="flex flex-col items-center h-full gap-6 z-20">
          <Image src={logo} width={120} alt="Flyra logo" className="z-20" />
          <h1 className="w-1/3 text-5xl font-bold text-center z-20">
            Perguntas Frequentes
          </h1>
          <p className="w-1/3 text-lg text-center z-20">
            Aqui estão algumas perguntas frequentes sobre o nosso produto e
            serviços.
          </p>
          <Accordion type="single" collapsible className="w-1/2 z-20">
            <AccordionItem value="item-1">
              <AccordionTrigger>O que é a Flyra?</AccordionTrigger>
              <AccordionContent>
                A Flyra é um grupo focado em integrar tecnologias avançadas para
                monitorar e prevenir desastres ambientais, especialmente
                queimadas, utilizando drones com inteligência artificial.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Qual o objetivo principal do projeto?
              </AccordionTrigger>
              <AccordionContent>
                Detectar focos de incêndio em tempo real e fornecer dados
                precisos para auxiliar bombeiros, órgãos ambientais e
                proprietários rurais na prevenção e combate ao fogo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>O projeto está em qual fase?</AccordionTrigger>
              <AccordionContent>
                Atualmente, o projeto está em fase de prototipagem, com testes
                sendo realizados em ambientes simulados.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Como o drone detecta os incêndios?
              </AccordionTrigger>
              <AccordionContent>
                Ele utiliza sensores de fumaça, temperatura e umidade, além de
                inteligência artificial para identificar focos de incêndio com
                base em dados ambientais e padrões visuais.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                O drone pode voar em qualquer lugar?
              </AccordionTrigger>
              <AccordionContent>
                Não. Ele não pode entrar em áreas densas sob a copa das árvores,
                e seu desempenho pode ser afetado por condições climáticas
                adversas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Quais tecnologias estão sendo usadas?
              </AccordionTrigger>
              <AccordionContent>
                Raspberry Pi 5, sensores de fumaça, temperatura e umidade, GPS,
                inteligência artificial, e os frameworks FastAPI, NestJS,
                Electron, React Native e Docker.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Quem pode acessar o sistema da Flyra?
              </AccordionTrigger>
              <AccordionContent>
                Organizações credenciadas, como unidades dos Bombeiros ou órgãos
                ambientais.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                Quais são os níveis de acesso?
              </AccordionTrigger>
              <AccordionContent>
                Observador, Operador, Supervisor e Administrador. Cada um com
                permissões específicas para operar e gerenciar os drones e as
                informações.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                Preciso de licença para operar o drone?
              </AccordionTrigger>
              <AccordionContent>
                Sim. Operadores precisam ter licença para voar acima de 120
                metros ou fora do campo de visão.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>O sistema funciona offline?</AccordionTrigger>
              <AccordionContent>
                O drone possui um backend local que permite funcionamento
                autônomo. Os dados são sincronizados posteriormente com o
                sistema central.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger>
                Como é feita a integração entre as partes do sistema?
              </AccordionTrigger>
              <AccordionContent>
                O sistema é dividido em três partes: backend central (NestJS),
                backend local no drone (FastAPI) e aplicações cliente (Electron
                e React Native).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger>
                O sistema precisa de internet o tempo todo?
              </AccordionTrigger>
              <AccordionContent>
                Para sincronização e comunicação com o backend central, sim. Mas
                o processamento e a detecção local funcionam de forma autônoma.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger>
                O drone da Flyra segue as normas legais?
              </AccordionTrigger>
              <AccordionContent>
                Sim. O projeto está sendo desenvolvido de acordo com as normas
                da ANAC, ANATEL e DECEA, incluindo o Certificado de Autorização
                de Voo Experimental (CAVE).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
