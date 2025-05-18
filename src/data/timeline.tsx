import TimelineItem, {
  ITimelineItemProps,
} from "@/components/shared/timeline-item";
import logoFlyra from "@/assets/logos/logo-mini-390x394.png";
import drone from "@/assets/images/timeline/cartoon-drone.jpeg";
import hackathon from "@/assets/images/timeline/hackathon-image.png";
import evolve from "@/assets/images/timeline/evolve-image.jpg";
import fire from "@/assets/images/timeline/fire-image.jpg";
import { BoxAnimate } from "@/components/shared/box-animate";

export const timelineItemData: ITimelineItemProps[] = [
  {
    id: 1,
    title: "Idealização do Projeto",
    date: "Maio de 2023",
    description:
      "Durante o Hackathon do Centro Paula Souza, surgimos com a ideia de criar um sistema que utilizasse Inteligência Artificial (IA) e drones com ganchos para coletar lixo em rios e lagos. O projeto foi concebido por nós no 1º ano do Ensino Médio, com o apoio de professores e mentores. Conseguimos treinar a IA para identificar o lixo, porém, o projeto não foi concluído devido à falta de tempo e recursos.",
    image: hackathon,
  },
  {
    id: 2,
    title: "Renascimento do Projeto",
    date: "Outubro de 2024",
    description:
      "Durante o evento Evolve 24 Latam, promovido pela empresa de tecnologia Cloudera, ainda no 2º ano do Ensino Médio, decidimos que iríamos realizar o melhor TCC possível. Assim, decidimos retomar o projeto originado no Hackathon, mas desta vez com foco em incêndios florestais.",
    image: evolve,
  },
  {
    id: 3,
    title: "Treinamento da IA",
    date: "Novembro de 2024",
    description:
      "No mês de novembro, dedicamos esforços ao treinamento da IA para a identificação de incêndios florestais. Utilizamos imagens de florestas em chamas para alimentar o modelo de IA. O treinamento foi bem-sucedido, atingindo uma alta taxa de acertos.",
    image: fire,
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
      "Atualmente, estamos no 3º ano do Ensino Médio e trabalhando para finalizar o projeto. O desenvolvimento continua em andamento e esperamos concluir até o final deste ano. Para mais atualizações sobre o projeto, fique atento às nossas redes sociais e ao nosso blog.",
    image: drone,
  },
];

export const timelineItems = [
  {
    title: "2023",
    content: (
      <div className="grid grid-cols-1 gap-4">
        <BoxAnimate duration={0.6} type="fade" className="max-sm:text-sm">
          <TimelineItem {...timelineItemData[0]} />
        </BoxAnimate>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="grid grid-cols-1 gap-4">
        <BoxAnimate
          duration={0.6}
          delay={0.4}
          type="fade"
          className="max-sm:text-sm"
        >
          <TimelineItem {...timelineItemData[1]} />
        </BoxAnimate>
        <BoxAnimate duration={0.7} delay={0.3}>
          <TimelineItem {...timelineItemData[2]} />
        </BoxAnimate>
        <BoxAnimate duration={0.7} delay={0.3}>
          <TimelineItem {...timelineItemData[3]} />
        </BoxAnimate>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="grid grid-cols-1 gap-4">
        <BoxAnimate duration={0.7} delay={0.3} className="max-sm:text-sm">
          <TimelineItem {...timelineItemData[4]} />
        </BoxAnimate>
      </div>
    ),
  },
];
