import { CardsCarousel } from "@/components/global/cards-carrousel";
import { AnimatedTooltipPreview } from "@/components/global/team-tooltip";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/global/footer";
import { Timeline } from "@/components/ui/timeline";
import TimelineItem, {
  ITimelineItemProps,
} from "@/components/shared/timeline-item";
import logoFlyra from "@/assets/logos/logo-mini-390x394.png";

const timelineItemData: ITimelineItemProps[] = [
  {
    id: 1,
    title: "Idealização do Projeto",
    date: "Maio de 2023",
    description:
      "Durante o Hackathon do Centro Paula Souza, surgimos com a ideia de criar um sistema que utilizasse Inteligência Artificial (IA) e drones com ganchos para coletar lixo em rios e lagos. O projeto foi concebido por nós no 1º ano do Ensino Médio, com o apoio de professores e mentores. Conseguimos treinar a IA para identificar o lixo, porém, o projeto não foi concluído devido à falta de tempo e recursos.",
    image:
      "https://lh3.googleusercontent.com/proxy/1-bt0EkJK0Vykjj3vYDNxLiKmpWnSJJyFq-VLfeHr4c5r7a9pNrWCG-C8IaDEW3DDpldq_VGAAjTtuMEcF5eFd0QwMnfvmSEZZ760sQmAnSLDg",
  },
  {
    id: 2,
    title: "Renascimento do Projeto",
    date: "Outubro de 2024",
    description:
      "Durante o evento Evolve 24 Latam, promovido pela empresa de tecnologia Cloudera, ainda no 2º ano do Ensino Médio, decidimos que iríamos realizar o melhor TCC possível. Assim, decidimos retomar o projeto originado no Hackathon, mas desta vez com foco em incêndios florestais.",
    image:
      "https://www.cloudera.com/content/dam/www/marketing/images/events/evolve/gallery/2024/evolve-24-gallery-milan-7.jpg",
  },
  {
    id: 3,
    title: "Treinamento da IA",
    date: "Novembro de 2024",
    description:
      "No mês de novembro, dedicamos esforços ao treinamento da IA para a identificação de incêndios florestais. Utilizamos imagens de florestas em chamas para alimentar o modelo de IA. O treinamento foi bem-sucedido, atingindo uma alta taxa de acertos.",
    image:
      "https://images.unsplash.com/photo-1602980085374-7e743fff3cc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Nascimento da Flyra",
    date: "Dezembro de 2025",
    description:
      "Nomeamos nosso projeto como Flyra, uma junção das palavras 'Fly' (voar) e 'Hydra' (a deusa grega que controla as águas). O nome reflete nossa intenção de utilizar drones para combater incêndios florestais. O projeto foi apresentado juntamente aos TCCs do 3º ano do Ensino Médio, e obteve grande sucesso.",
    image: logoFlyra,
  },
  {
    id: 5,
    title: "Desenvolvimento Atual",
    date: "Atualmente",
    description:
      "Atualmente, estamos no 3º ano do Ensino Médio e trabalhando para finalizar o projeto. O desenvolvimento continua em andamento e esperamos concluir até o final deste ano.",
    image: logoFlyra,
  },
];

const timelineItems = [
  {
    title: "2023",
    content: (
      <div className="grid grid-cols-1 gap-4">
        <TimelineItem {...timelineItemData[0]} />
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="grid grid-cols-1 gap-4">
        <TimelineItem {...timelineItemData[1]} />
        <TimelineItem {...timelineItemData[2]} />
        <TimelineItem {...timelineItemData[3]} />
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="grid grid-cols-1 gap-4">
        <TimelineItem {...timelineItemData[4]} />
      </div>
    ),
  },
];

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
          <h1 className="text-8xl font-bold z-20">Nossa História</h1>
          <h1 className="text-7xl font-bold z-20">e Trajetória</h1>
          <Timeline data={timelineItems} />
        </div>
        <div className="bg-background w-full z-50">
          <CardsCarousel />
        </div>
        <AnimatedTooltipPreview />
      </div>
      <Footer />
    </div>
  );
}
